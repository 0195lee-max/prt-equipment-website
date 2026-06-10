"use client"

import { Navbar } from "@/components/navbar"
import { InstalledBase } from "@/components/installed-base"
import { Footer } from "@/components/footer"
import { useLanguage, type Language } from "@/hooks/use-language"

export default function InstalledBasePage({ initialLang }: { initialLang?: Language }) {
  const [lang, setLang] = useLanguage(initialLang)


  return (
    <main className="min-h-svh bg-[#07090F]">
      <Navbar lang={lang} setLang={setLang} />
      <InstalledBase lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
