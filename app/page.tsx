"use client"

import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { CompanyProof } from "@/components/company-proof"
import { ApplicationsSection } from "@/components/applications-section"
import { NewsTeaser } from "@/components/news-teaser"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"

export default function Page() {
  const [lang, setLang] = useLanguage()

  return (
    <main className="bg-[#0A0A0A]">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSlider lang={lang} />
      <section id="section-equipment" className="bg-[#0A0A0A]">
        <div className="min-h-svh flex flex-col">
          <CompanyProof lang={lang} />
          <ApplicationsSection lang={lang} />
        </div>
        <NewsTeaser lang={lang} />
        <Footer lang={lang} />
      </section>
    </main>
  )
}
