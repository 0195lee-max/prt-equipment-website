"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Globe, ArrowRight, Menu, X } from "lucide-react"

type Language = "ko" | "en" | "zh"

const languageNames: Record<Language, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
}

const translations = {
  ko: {
    tagline: "Precision Roll-to-Roll Technology",
    sectorLabel: "Leadframe & Semiconductor Packaging Equipment",
    headlineLine1: "Precision Roll-to-Roll",
    headlineLine2: "Technology",
    subheadline: "Laminator & Exposure Systems for Leadframe and Semiconductor Packaging Production.",
    ctaPrimary: "View Equipment",
    ctaSecondary: "Contact Sales",
    nav: {
      company: "회사 소개",
      equipment: "장비",
      engineering: "엔지니어링",
      installedBase: "납품 실적",
      news: "뉴스",
      contact: "문의",
    },
  },
  en: {
    tagline: "Precision Roll-to-Roll Technology",
    sectorLabel: "Leadframe & Semiconductor Packaging Equipment",
    headlineLine1: "Precision Roll-to-Roll",
    headlineLine2: "Technology",
    subheadline: "Laminator & Exposure Systems for Leadframe and Semiconductor Packaging Production.",
    ctaPrimary: "View Equipment",
    ctaSecondary: "Contact Sales",
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      news: "News",
      contact: "Contact",
    },
  },
  zh: {
    tagline: "Precision Roll-to-Roll Technology",
    sectorLabel: "Leadframe & Semiconductor Packaging Equipment",
    headlineLine1: "Precision Roll-to-Roll",
    headlineLine2: "Technology",
    subheadline: "Laminator & Exposure Systems for Leadframe and Semiconductor Packaging Production.",
    ctaPrimary: "View Equipment",
    ctaSecondary: "Contact Sales",
    nav: {
      company: "公司介绍",
      equipment: "设备",
      engineering: "工程技术",
      installedBase: "交付业绩",
      news: "新闻",
      contact: "联系我们",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const navLinks: Array<{ href: string; label: string }> = [
    { href: "/company", label: t.nav.company },
    { href: "/products", label: t.nav.equipment },
    { href: "/engineering", label: t.nav.engineering },
    { href: "/installed-base", label: t.nav.installedBase },
    { href: "/news", label: t.nav.news },
    { href: "/contact", label: t.nav.contact },
  ]

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0D14]">
      {/* ── Base: flat dark charcoal ─────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #07090F 0%, #0A0F1A 100%)",
        }}
      />

      {/* ── Background hero video ────────────────────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      >
        <source src="/videos/hero_loop_v10.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for headline legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,9,15,0.55) 0%, rgba(10,15,26,0.65) 50%, rgba(7,9,15,0.85) 100%)",
        }}
      />

      {/* ── Industrial technical grid — even, structural ─────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Fine secondary grid (denser, for depth) ──────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* ── Subtle vignette ──────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-5 md:px-10 lg:px-16 transition-transform duration-300 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        } ${isMenuOpen ? "bg-slate-950/95 backdrop-blur-xl" : ""}`}
      >
        {/* Logo */}
        <div className="flex justify-start md:justify-end md:w-[22vw] flex-1 md:flex-none">
          <a href="/" className="flex flex-col items-start transition-opacity hover:opacity-80">
            <span className="text-[10px] font-medium tracking-[0.18em] text-white/45 uppercase">
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

        {/* Desktop Menu */}
        <div className="hidden flex-1 items-center justify-center gap-10 md:flex lg:gap-14">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2 md:w-[22vw] md:justify-start">
          {/* Language selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label="Select language"
              className="flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2.5 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/30"
            >
              <Globe className="h-4 w-4" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 md:left-0 md:right-auto top-full mt-2 min-w-[140px] overflow-hidden rounded-lg border border-white/10 bg-slate-900/95 shadow-xl backdrop-blur-xl z-50">
                {(["en", "ko", "zh"] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setIsLangOpen(false) }}
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="md:hidden flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2.5 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/30"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-x-0 top-[76px] z-40 md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-700/30 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 border-b border-slate-800 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Hero content ─────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 lg:px-16">
        {/* Sector label */}
        <div
          className="mb-10 flex items-center gap-4 prt-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <div className="h-px w-10 bg-white/25" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
            {t.sectorLabel}
          </span>
          <div className="h-px w-10 bg-white/25" />
        </div>

        {/* Main headline */}
        <h1
          className="text-center mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.05] max-w-5xl prt-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          {t.headlineLine1}
        </h1>
        <h1
          className="text-center mb-10 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.05] max-w-5xl prt-fade-up"
          style={{ color: "#C7A86D", animationDelay: "280ms" }}
        >
          {t.headlineLine2}
        </h1>

        {/* Subheadline */}
        <p
          className="text-center mb-12 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg prt-fade-up"
          style={{ animationDelay: "380ms" }}
        >
          {t.subheadline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col items-center gap-3 sm:flex-row prt-fade-up"
          style={{ animationDelay: "480ms" }}
        >
          <a
            href="/products"
            className="group inline-flex items-center gap-2 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-[#B89757]"
            style={{ backgroundColor: "#C7A86D" }}
          >
            {t.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/25 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white/60 hover:bg-white/[0.04]"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/30 transition-colors hover:text-white/60 prt-fade-in"
        style={{ animationDelay: "800ms" }}
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  )
}
