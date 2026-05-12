"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { EquipmentCards } from "@/components/equipment-cards"
import { ApplicationsSection } from "@/components/applications-section"
import { NewsTeaser } from "@/components/news-teaser"
import { Footer } from "@/components/footer"

type Language = "ko" | "en" | "zh"

export default function Page() {
  const [lang, setLang] = useState<Language>("en")

  // Dynamic scroll-snap: mandatory between hero and equipment for one-tick
  // navigation; release to "none" once the user is past the equipment page
  // so news/footer scroll freely.
  useEffect(() => {
    const main = document.getElementById("home-scroll")
    const equipment = document.getElementById("section-equipment")
    if (!main || !equipment) return

    const releaseThreshold = () => window.innerHeight * 1.15

    const updateSnap = () => {
      if (main.scrollTop > releaseThreshold()) {
        main.style.scrollSnapType = "none"
      } else {
        main.style.scrollSnapType = "y mandatory"
      }
    }
    updateSnap()
    main.addEventListener("scroll", updateSnap, { passive: true })

    // Single-tick wheel scroll from hero → equipment
    let inFlight = false
    const handleWheel = (e: WheelEvent) => {
      if (inFlight) return
      const halfVh = window.innerHeight * 0.5
      if (main.scrollTop < halfVh && e.deltaY > 0) {
        e.preventDefault()
        inFlight = true
        equipment.scrollIntoView({ behavior: "smooth" })
        setTimeout(() => {
          inFlight = false
        }, 700)
      } else if (
        main.scrollTop >= halfVh &&
        main.scrollTop < window.innerHeight * 1.3 &&
        e.deltaY < 0
      ) {
        e.preventDefault()
        inFlight = true
        main.scrollTo({ top: 0, behavior: "smooth" })
        setTimeout(() => {
          inFlight = false
        }, 700)
      }
    }
    main.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      main.removeEventListener("scroll", updateSnap)
      main.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return (
    <main
      id="home-scroll"
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#0A0A0A]"
    >
      <Navbar lang={lang} setLang={setLang} />
      <HeroSlider lang={lang} />
      <div id="section-equipment" className="snap-start bg-[#0A0A0A]">
        <div className="min-h-screen flex flex-col">
          <EquipmentCards lang={lang} />
          <ApplicationsSection lang={lang} />
        </div>
        <NewsTeaser lang={lang} />
        <Footer lang={lang} />
      </div>
    </main>
  )
}
