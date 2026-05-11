"use client"

import { useState, useEffect, useRef } from "react"
import { VideoHero } from "@/components/video-hero"
import { Hero } from "@/components/hero"
import { ApplicationsSection } from "@/components/applications-section"
import { ExhibitionTeaser } from "@/components/exhibition-teaser"
import { Footer } from "@/components/footer"

type Language = "ko" | "en" | "zh"

export default function Page() {
  const [lang, setLang] = useState<Language>("en")
  const [currentSection, setCurrentSection] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const isScrolling = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const currentScrollY = container.scrollTop

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false)
      } else {
        setIsNavVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      if (currentSection >= 1) {
        if (container.scrollTop <= window.innerHeight + 10 && e.deltaY < 0 && currentSection === 1) {
          e.preventDefault()
          setCurrentSection(0)
          container.scrollTo({ top: 0, behavior: "smooth" })
        }
        return
      }

      if (isScrolling.current) {
        e.preventDefault()
        return
      }

      e.preventDefault()
      isScrolling.current = true

      if (e.deltaY > 0 && currentSection === 0) {
        setCurrentSection(1)
        container.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      } else if (e.deltaY < 0 && currentSection === 1) {
        setCurrentSection(0)
        container.scrollTo({ top: 0, behavior: "smooth" })
      }

      setTimeout(() => {
        isScrolling.current = false
      }, 800)
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [currentSection])

  return (
    <main ref={containerRef} className="h-screen overflow-y-auto scroll-smooth">
      <div className="h-screen">
        <VideoHero lang={lang} setLang={setLang} isNavVisible={isNavVisible} />
      </div>
      <div className="h-screen">
        <Hero lang={lang} />
      </div>
      <div>
        <ApplicationsSection lang={lang} />
      </div>
      <div>
        <ExhibitionTeaser lang={lang} />
      </div>
      <Footer lang={lang} />
    </main>
  )
}
