"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { EquipmentCards } from "@/components/equipment-cards"
import { ApplicationsSection } from "@/components/applications-section"
import { NewsTeaser } from "@/components/news-teaser"
import { Footer } from "@/components/footer"
import { useSyncHtmlLang } from "@/hooks/use-sync-html-lang"

type Language = "ko" | "en" | "zh"

export default function Page() {
  const [lang, setLang] = useState<Language>("en")
  useSyncHtmlLang(lang)

  // Dynamic scroll-snap: mandatory between hero and equipment for one-tick
  // navigation; release to "none" once the user is past the equipment page
  // so news/footer scroll freely. Intercepts wheel, touch, and keyboard so
  // the first input on the hero jumps to the equipment section.
  useEffect(() => {
    const main = document.getElementById("home-scroll")
    const equipment = document.getElementById("section-equipment")
    if (!main || !equipment) return

    const releaseThreshold = () => window.innerHeight * 1.15
    const halfVh = () => window.innerHeight * 0.5
    const equipmentZoneMax = () => window.innerHeight * 1.3

    const updateSnap = () => {
      if (main.scrollTop > releaseThreshold()) {
        main.style.scrollSnapType = "none"
      } else {
        main.style.scrollSnapType = "y proximity"
      }
    }
    updateSnap()
    main.addEventListener("scroll", updateSnap, { passive: true })
    window.addEventListener("resize", updateSnap, { passive: true })

    // Animation gate: prefer scrollend (precise), fall back to a generous
    // timeout. 700ms was too short — a long smooth-scroll could end after
    // the gate released and a fresh wheel tick re-fired the animation.
    let isAnimating = false
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null
    const supportsScrollEnd = "onscrollend" in main
    const clearAnimating = () => {
      isAnimating = false
      if (fallbackTimer) {
        clearTimeout(fallbackTimer)
        fallbackTimer = null
      }
    }
    const startAnimation = () => {
      isAnimating = true
      if (fallbackTimer) clearTimeout(fallbackTimer)
      fallbackTimer = setTimeout(clearAnimating, 1000)
    }
    if (supportsScrollEnd) {
      main.addEventListener("scrollend", clearAnimating as EventListener)
    }

    const inHeroZone = () => main.scrollTop < halfVh()
    const inEquipmentTopZone = () =>
      main.scrollTop >= halfVh() && main.scrollTop < equipmentZoneMax()

    const jumpForward = () => {
      startAnimation()
      equipment.scrollIntoView({ behavior: "smooth" })
    }
    const jumpBack = () => {
      startAnimation()
      main.scrollTo({ top: 0, behavior: "smooth" })
    }

    // Wheel
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) {
        e.preventDefault()
        return
      }
      if (inHeroZone() && e.deltaY > 0) {
        e.preventDefault()
        jumpForward()
      } else if (inEquipmentTopZone() && e.deltaY < 0) {
        e.preventDefault()
        jumpBack()
      }
    }
    main.addEventListener("wheel", handleWheel, { passive: false })

    // Touch (mobile swipe)
    let touchStartY = 0
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) touchStartY = e.touches[0].clientY
    }
    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating) return
      const touch = e.changedTouches[0]
      if (!touch) return
      const dy = touchStartY - touch.clientY // positive = swipe up = scroll down
      if (Math.abs(dy) < 40) return
      if (dy > 0 && inHeroZone()) {
        jumpForward()
      } else if (dy < 0 && inEquipmentTopZone()) {
        jumpBack()
      }
    }
    main.addEventListener("touchstart", handleTouchStart, { passive: true })
    main.addEventListener("touchend", handleTouchEnd, { passive: true })

    // Keyboard
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return
      }
      const forward = e.key === "PageDown" || e.key === "ArrowDown" || e.key === " "
      const backward = e.key === "PageUp" || e.key === "ArrowUp"
      if (forward && inHeroZone()) {
        e.preventDefault()
        jumpForward()
      } else if (backward && inEquipmentTopZone()) {
        e.preventDefault()
        jumpBack()
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      main.removeEventListener("scroll", updateSnap)
      main.removeEventListener("wheel", handleWheel)
      main.removeEventListener("touchstart", handleTouchStart)
      main.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("resize", updateSnap)
      window.removeEventListener("keydown", handleKeyDown)
      if (supportsScrollEnd) {
        main.removeEventListener("scrollend", clearAnimating as EventListener)
      }
      if (fallbackTimer) clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <main
      id="home-scroll"
      className="h-svh overflow-y-scroll snap-y snap-proximity scroll-smooth bg-[#0A0A0A]"
    >
      <Navbar lang={lang} setLang={setLang} />
      <HeroSlider lang={lang} />
      <div id="section-equipment" className="snap-start bg-[#0A0A0A]">
        <div className="min-h-svh flex flex-col">
          <EquipmentCards lang={lang} />
          <ApplicationsSection lang={lang} />
        </div>
        <NewsTeaser lang={lang} />
        <Footer lang={lang} />
      </div>
    </main>
  )
}
