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
    <main
      id="home-scroll"
      className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth bg-[#0A0A0A]"
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
