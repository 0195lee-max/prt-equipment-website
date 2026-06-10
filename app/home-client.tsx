"use client"

import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { CompanyProof } from "@/components/company-proof"
import { PostHeroVideoBand } from "@/components/post-hero-video-band"
import { EquipmentQuickNav } from "@/components/equipment-quick-nav"
import { NewsTeaser } from "@/components/news-teaser"
import { Footer } from "@/components/footer"
import { useLanguage, type Language } from "@/hooks/use-language"

export default function HomeClient({ initialLang }: { initialLang?: Language }) {
  const [lang, setLang] = useLanguage(initialLang)

  return (
    <main className="bg-[#0A0A0A]">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSlider lang={lang} />
      <section id="section-equipment" className="bg-[#0A0A0A]">
        <div className="flex flex-col">
          <CompanyProof lang={lang} />
          <PostHeroVideoBand />
          <EquipmentQuickNav />
        </div>
        <NewsTeaser lang={lang} />
        <Footer lang={lang} />
      </section>
    </main>
  )
}
