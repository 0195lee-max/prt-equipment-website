"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { InstalledBase } from "@/components/installed-base"
import { Footer } from "@/components/footer"
import { useSyncHtmlLang } from "@/hooks/use-sync-html-lang"

type Language = "ko" | "en" | "zh"

export default function InstalledBasePage() {
  const [lang, setLang] = useState<Language>("en")
  useSyncHtmlLang(lang)


  return (
    <main className="min-h-svh bg-[#07090F]">
      <Navbar lang={lang} setLang={setLang} />
      <InstalledBase lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
