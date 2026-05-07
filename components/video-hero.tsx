"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Globe } from "lucide-react"

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

interface VideoHeroProps {
  lang: Language
  setLang: (lang: Language) => void
  isNavVisible?: boolean
}

export function VideoHero({ lang, setLang, isNavVisible = true }: VideoHeroProps) {
  const t = translations[lang]
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
  
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/video-poster.jpg"
      >
        {/* 샘플 산업용 영상 - 실제 영상으로 교체 필요 */}
        <source 
          src="https://videos.pexels.com/video-files/3129977/3129977-uhd_2560_1440_30fps.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navigation - Fixed at top with hide/show transition */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center px-10 py-6 lg:px-16 transition-transform duration-300 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
        {/* Logo */}
        <div className="flex justify-end md:w-[25vw]">
          <a href="/" className="flex flex-col items-start transition-opacity hover:opacity-80">
            <span className="text-sm font-medium tracking-wider text-white/60">FA Solution Partner</span>
            <span className="text-5xl font-bold tracking-tight text-blue-500">PRT</span>
          </a>
        </div>
        
        {/* Menu links - centered */}
        <div className="hidden flex-1 items-center justify-center gap-20 md:flex">
          <a href="#about" className="text-xl font-medium text-white transition-colors hover:text-white/80">
            {t.nav.company}
          </a>
          <a href="/products" className="text-xl font-medium text-white transition-colors hover:text-white/80">
            {t.nav.equipment}
          </a>
          <a href="/engineering" className="text-xl font-medium text-white transition-colors hover:text-white/80">
            {t.nav.engineering}
          </a>
          <a href="/installed-base" className="text-xl font-medium text-white transition-colors hover:text-white/80">
            {t.nav.installedBase}
          </a>
          <a href="/contact" className="text-xl font-medium text-white transition-colors hover:text-white/80">
            {t.nav.contact}
          </a>
        </div>
        
        {/* Language dropdown */}
        <div ref={langRef} className="relative md:w-[25vw] flex justify-start">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
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

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  )
}
