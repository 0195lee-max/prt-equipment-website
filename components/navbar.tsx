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
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      contact: "Contact",
    },
  },
  en: {
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      contact: "Contact",
    },
  },
  zh: {
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      contact: "Contact",
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
  
  // Close dropdown when clicking outside
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
      
      // Detect if scrolled for glass effect
      setIsScrolled(currentScrollY > 50)
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])
  
  // All pages start transparent and transition to glass on scroll
  const isTransparent = !isScrolled

  const navBgClass = isTransparent
    ? "bg-transparent border-b border-transparent"
    : "bg-slate-950/70 border-b border-slate-700/40 backdrop-blur-xl"

  const textColor = isTransparent
    ? "text-white hover:text-white/80"
    : "text-slate-200 hover:text-white"

  const logoTextColor = isTransparent ? "text-white/60" : "text-slate-400"

  const langBgColor = isTransparent
    ? "bg-white/10 border-white/20 hover:bg-white/20 text-white/90"
    : "bg-slate-800/50 border-slate-600/50 hover:bg-slate-700/50 text-slate-300"

  return (
    <nav className={`sticky top-0 z-50 flex items-center px-10 py-6 lg:px-16 transition-all duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    } ${navBgClass}`}>
      {/* Logo */}
      <div className="flex justify-end md:w-[25vw]">
        <a href="/" className="flex flex-col items-start transition-opacity hover:opacity-80">
          <span className={`text-sm font-medium tracking-wider ${logoTextColor}`}>FA Solution Partner</span>
          <span className="text-5xl font-bold tracking-tight text-blue-500">PRT</span>
        </a>
      </div>

      {/* Menu links - centered */}
      <div className="hidden flex-1 items-center justify-center gap-20 md:flex">
        <a href="/#about" className={`text-xl font-medium transition-colors ${textColor}`}>
          {t.nav.company}
        </a>
        <a href="/products" className={`text-xl font-medium transition-colors ${textColor}`}>
          {t.nav.equipment}
        </a>
        <a href="/engineering" className={`text-xl font-medium transition-colors ${textColor}`}>
          {t.nav.engineering}
        </a>
        <a href="/installed-base" className={`text-xl font-medium transition-colors ${textColor}`}>
          {t.nav.installedBase}
        </a>
        <a href="/contact" className={`text-xl font-medium transition-colors ${textColor}`}>
          {t.nav.contact}
        </a>
      </div>

      {/* Language dropdown */}
      <div ref={langRef} className="relative md:w-[25vw] flex justify-start">
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className={`flex items-center justify-center rounded-full border p-3 backdrop-blur-sm transition-colors ${langBgColor}`}
        >
          <Globe className="h-6 w-6" />
        </button>

        {isLangOpen && (
          <div className="absolute left-0 top-full mt-2 min-w-[130px] overflow-hidden rounded-lg border border-slate-600/50 bg-slate-950/90 shadow-lg backdrop-blur-xl">
            {(["ko", "en", "zh"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l)
                  setIsLangOpen(false)
                }}
                className={`flex w-full items-center gap-2 px-4 py-3 text-base transition-colors ${
                  lang === l
                    ? "bg-white/20 text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
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
