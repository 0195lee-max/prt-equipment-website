"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { InstalledBase } from "@/components/installed-base"
import { Footer } from "@/components/footer"

type Language = "ko" | "en" | "zh"

export default function InstalledBasePage() {
  const [lang, setLang] = useState<Language>("en")
  
  return (
    <main className="min-h-screen bg-[#07090F]">
      <Navbar lang={lang} setLang={setLang} />
      <InstalledBase lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
