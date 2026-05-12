"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { EquipmentCards } from "@/components/equipment-cards"
import { ApplicationsSection } from "@/components/applications-section"
import { NewsTeaser } from "@/components/news-teaser"
import { Footer } from "@/components/footer"

type Language = "ko" | "en" | "zh"

export default function Page() {
  const [lang, setLang] = useState<Language>("en")

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#0A0A0A]">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSlider lang={lang} />
      <div
        id="section-equipment"
        className="snap-start min-h-screen flex items-center bg-[#0A0A0A]"
      >
        <div className="w-full">
          <EquipmentCards lang={lang} />
        </div>
      </div>
      <div id="section-applications" className="snap-start">
        <ApplicationsSection lang={lang} />
      </div>
      <div id="section-news" className="snap-start">
        <NewsTeaser lang={lang} />
        <Footer lang={lang} />
      </div>
    </main>
  )
}
