"use client"

import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { EquipmentCards } from "@/components/equipment-cards"
import { ApplicationsSection } from "@/components/applications-section"
import { NewsTeaser } from "@/components/news-teaser"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
// TEMPORARY design-variant switcher (?variant=a|b|c). Remove this
// import + the `variant` props below to drop back to baseline-only.
import { useHomeVariant } from "@/hooks/use-home-variant"

type Language = "ko" | "en" | "zh"

export default function Page() {
  const [lang, setLang] = useLanguage()
  const variant = useHomeVariant()

  return (
    <main className="bg-[#0A0A0A]">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSlider lang={lang} variant={variant} />
      <section id="section-equipment" className="bg-[#0A0A0A]">
        <div className="min-h-svh flex flex-col">
          <EquipmentCards lang={lang} variant={variant} />
          <ApplicationsSection lang={lang} variant={variant} />
        </div>
        <NewsTeaser lang={lang} />
        <Footer lang={lang} />
      </section>
    </main>
  )
}
