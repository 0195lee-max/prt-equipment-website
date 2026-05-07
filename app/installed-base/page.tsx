"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { InstalledBase } from "@/components/installed-base"

type Language = "ko" | "en" | "zh"

export default function InstalledBasePage() {
  const [lang, setLang] = useState<Language>("en")
  
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />
      <div className="pt-20">
        <InstalledBase />
      </div>
    </main>
  )
}
