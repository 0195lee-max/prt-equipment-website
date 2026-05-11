"use client"

import { useState, useEffect, useRef } from "react"
import { Globe } from "lucide-react"

type Language = "ko" | "en" | "zh"

const languageNames: Record<Language, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
}

const translations = {
  ko: {
    tagline: "Precision Roll-to-Roll Technology",
    nav: {
      company: "회사 소개",
      equipment: "장비",
      engineering: "엔지니어링",
      installedBase: "납품 실적",
      exhibitions: "전시회",
      contact: "문의",
    },
  },
  en: {
    tagline: "Precision Roll-to-Roll Technology",
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      exhibitions: "Exhibitions",
      contact: "Contact",
    },
  },
  zh: {
    tagline: "Precision Roll-to-Roll Technology",
    nav: {
      company: "公司介绍",
      equipment: "设备",
      engineering: "工程技术",
      installedBase: "交付业绩",
      exhibitions: "展会",
      contact: "联系我们",
    },
  },
}

interface NavbarProps {
  lang: Language
  setLang: (lang: Language) => void
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const t = translations[lang]
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const isTransparent = !isScrolled

  const navBgClass = isTransparent
    ? "bg-transparent border-b border-transparent"
    : "bg-slate-950/80 border-b border-slate-700/30 backdrop-blur-xl"

  const textColor = isTransparent
    ? "text-white/85 hover:text-white"
    : "text-slate-200 hover:text-white"

  const logoTextColor = isTransparent ? "text-white/45" : "text-slate-400"

  const langBgColor = isTransparent
    ? "bg-white/5 border-white/15 hover:bg-white/10 text-white/85"
    : "bg-slate-800/50 border-slate-600/50 hover:bg-slate-700/50 text-slate-300"

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center px-10 py-5 lg:px-16 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${navBgClass}`}
    >
      {/* Logo */}
      <div className="flex justify-end md:w-[22vw]">
        <a href="/" className="flex flex-col items-start transition-opacity hover:opacity-80">
          <span
            className={`text-[10px] font-medium tracking-[0.18em] uppercase ${logoTextColor}`}
          >
            {t.tagline}
          </span>
          <span
            className="text-3xl font-bold tracking-tight leading-none mt-0.5"
            style={{ color: "#C7A86D" }}
          >
            PRT
          </span>
        </a>
      </div>

      {/* Menu */}
      <div className="hidden flex-1 items-center justify-center gap-10 md:flex lg:gap-14">
        <a href="/company" className={`text-sm font-medium transition-colors ${textColor}`}>
          {t.nav.company}
        </a>
        <a href="/products" className={`text-sm font-medium transition-colors ${textColor}`}>
          {t.nav.equipment}
        </a>
        <a href="/engineering" className={`text-sm font-medium transition-colors ${textColor}`}>
          {t.nav.engineering}
        </a>
        <a href="/installed-base" className={`text-sm font-medium transition-colors ${textColor}`}>
          {t.nav.installedBase}
        </a>
        <a href="/exhibitions" className={`text-sm font-medium transition-colors ${textColor}`}>
          {t.nav.exhibitions}
        </a>
        <a href="/contact" className={`text-sm font-medium transition-colors ${textColor}`}>
          {t.nav.contact}
        </a>
      </div>

      {/* Language selector */}
      <div ref={langRef} className="relative md:w-[22vw] flex justify-start">
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          aria-label="Select language"
          className={`flex items-center justify-center rounded-full border p-2.5 backdrop-blur-sm transition-colors ${langBgColor}`}
        >
          <Globe className="h-4 w-4" />
        </button>

        {isLangOpen && (
          <div className="absolute left-0 top-full mt-2 min-w-[140px] overflow-hidden rounded-lg border border-white/10 bg-slate-900/95 shadow-xl backdrop-blur-xl">
            {(["en", "ko", "zh"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l)
                  setIsLangOpen(false)
                }}
                className={`flex w-full items-center gap-2 px-4 py-3 text-sm transition-colors ${
                  lang === l
                    ? "text-white font-medium"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
                style={lang === l ? { backgroundColor: "rgba(199,168,109,0.15)" } : {}}
              >
                {languageNames[l]}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
