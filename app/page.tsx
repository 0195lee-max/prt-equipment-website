"use client"

import { useState } from "react"
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

  return (
    <main className="bg-[#0A0A0A]">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSlider lang={lang} />
      <section id="section-equipment" className="bg-[#0A0A0A]">
        <div className="min-h-svh flex flex-col">
          <EquipmentCards lang={lang} />
          <ApplicationsSection lang={lang} />
        </div>
        <NewsTeaser lang={lang} />
        <Footer lang={lang} />
      </section>
    </main>
  )
}
