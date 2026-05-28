"use client"

import { Navbar } from "@/components/navbar"
import { InstalledBase } from "@/components/installed-base"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"

type Language = "ko" | "en" | "zh"

export default function InstalledBasePage() {
  const [lang, setLang] = useLanguage()


  return (
    <main className="min-h-svh bg-[#07090F]">
      <Navbar lang={lang} setLang={setLang} />
      <InstalledBase lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
