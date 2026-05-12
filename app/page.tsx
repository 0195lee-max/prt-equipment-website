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

  // Scope scroll-snap to the home page only (Hero → Cards transition).
  // Other pages remain unaffected because the styles are cleaned up on unmount.
  useEffect(() => {
    const html = document.documentElement
    const prevSnap = html.style.scrollSnapType
    const prevBehavior = html.style.scrollBehavior
    html.style.scrollSnapType = "y mandatory"
    html.style.scrollBehavior = "smooth"
    return () => {
      html.style.scrollSnapType = prevSnap
      html.style.scrollBehavior = prevBehavior
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSlider lang={lang} />
      <EquipmentCards lang={lang} />
      <ApplicationsSection lang={lang} />
      <NewsTeaser lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
