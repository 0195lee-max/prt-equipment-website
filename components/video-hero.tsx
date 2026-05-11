"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Globe, ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const languageNames: Record<Language, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
}

const translations = {
  ko: {
    tagline: "Precision Roll-to-Roll Solution Partner",
    sectorLabel: "Leadframe & Semiconductor Packaging Equipment",
    headlineLine1: "Precision Roll-to-Roll Equipment",
    headlineLine2: "for Leadframe & Semiconductor Packaging",
    subheadline: "Laminator & Exposure Systems for High-Stability Mass Production Lines.",
    differentiators: [
      "Engineering Experience Since 2010",
      "50+ Installed Systems",
      "5+ Countries",
    ],
    ctaPrimary: "View Equipment",
    ctaSecondary: "Contact Sales",
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
    tagline: "Precision Roll-to-Roll Solution Partner",
    sectorLabel: "Leadframe & Semiconductor Packaging Equipment",
    headlineLine1: "Precision Roll-to-Roll Equipment",
    headlineLine2: "for Leadframe & Semiconductor Packaging",
    subheadline: "Laminator & Exposure Systems for High-Stability Mass Production Lines.",
    differentiators: [
      "Engineering Experience Since 2010",
      "50+ Installed Systems",
      "5+ Countries",
    ],
    ctaPrimary: "View Equipment",
    ctaSecondary: "Contact Sales",
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
    tagline: "精密卷对卷解决方案合作伙伴",
    sectorLabel: "Leadframe & Semiconductor Packaging Equipment",
    headlineLine1: "Precision Roll-to-Roll Equipment",
    headlineLine2: "for Leadframe & Semiconductor Packaging",
    subheadline: "Laminator & Exposure Systems for High-Stability Mass Production Lines.",
    differentiators: [
      "Engineering Experience Since 2010",
      "50+ Installed Systems",
      "5+ Countries",
    ],
    ctaPrimary: "View Equipment",
    ctaSecondary: "Contact Sales",
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

interface VideoHeroProps {
  lang: Language
  setLang: (lang: Language) => void
  isNavVisible?: boolean
}

export function VideoHero({ lang, setLang, isNavVisible = true }: VideoHeroProps) {
  const t = translations[lang]
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

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0D14]">
      {/* ── Base: dark navy / charcoal vertical gradient ─────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #060912 0%, #0B1220 35%, #0F1A2E 70%, #0A1424 100%)",
        }}
      />

      {/* ── Image placeholder layer (swap to /public/images/equipment/hero.jpg) ── */}
      {/* When the real equipment photo is ready, replace this <div> with:
          <Image src="/images/equipment/hero.jpg" alt="" fill priority className="object-cover opacity-25" />
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 prt-fade-in"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 70% 40%, rgba(199,168,109,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(22,61,107,0.25) 0%, transparent 60%)",
        }}
      />

      {/* ── Fine technical grid (subtle) ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35] prt-fade-in"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Soft top gold glow ───────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[40vh] w-[80vw] prt-glow pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at center top, rgba(199,168,109,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── Vignette ─────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center px-10 py-5 lg:px-16 transition-transform duration-300 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="flex justify-end md:w-[22vw]">
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

        {/* Menu */}
        <div className="hidden flex-1 items-center justify-center gap-10 md:flex lg:gap-14">
          <a href="/company" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.company}
          </a>
          <a href="/products" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.equipment}
          </a>
          <a href="/engineering" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.engineering}
          </a>
          <a href="/installed-base" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.installedBase}
          </a>
          <a href="/exhibitions" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.exhibitions}
          </a>
          <a href="/contact" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.contact}
          </a>
        </div>

        {/* Language selector */}
        <div ref={langRef} className="relative md:w-[22vw] flex justify-start">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-label="Select language"
            className="flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2.5 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/30"
          >
            <Globe className="h-4 w-4" />
          </button>

          {isLangOpen && (
            <div className="absolute left-0 top-full mt-2 min-w-[140px] overflow-hidden rounded-lg border border-white/10 bg-slate-900/95 shadow-xl backdrop-blur-xl">
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
      </nav>

      {/* ── Hero content ─────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center lg:px-16">
        {/* Sector label */}
        <div
          className="mb-10 flex items-center gap-4 prt-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <div className="h-px w-12 bg-white/25" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
            {t.sectorLabel}
          </span>
          <div className="h-px w-12 bg-white/25" />
        </div>

        {/* Main headline */}
        <h1
          className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[64px] leading-[1.08] max-w-5xl prt-fade-up"
          style={{ animationDelay: "250ms" }}
        >
          {t.headlineLine1}
        </h1>
        <h1
          className="mb-10 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-[64px] leading-[1.08] max-w-5xl prt-fade-up"
          style={{ color: "#C7A86D", animationDelay: "400ms" }}
        >
          {t.headlineLine2}
        </h1>

        {/* Subheadline */}
        <p
          className="mb-14 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg prt-fade-up"
          style={{ animationDelay: "550ms" }}
        >
          {t.subheadline}
        </p>

        {/* Differentiators — short, hard facts */}
        <div
          className="mb-14 flex flex-col items-center gap-3 sm:flex-row sm:gap-10 prt-fade-up"
          style={{ animationDelay: "700ms" }}
        >
          {t.differentiators.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-sm text-white/75">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#C7A86D" }}
              />
              <span className="tracking-wide">{item}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col items-center gap-3 sm:flex-row prt-fade-up"
          style={{ animationDelay: "850ms" }}
        >
          <a
            href="/products"
            className="group inline-flex items-center gap-2 rounded-sm px-8 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:shadow-lg hover:shadow-[#C7A86D]/20"
            style={{ backgroundColor: "#C7A86D" }}
          >
            {t.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-white/35 transition-colors hover:text-white/70 prt-fade-in"
        style={{ animationDelay: "1100ms" }}
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0D14] to-transparent pointer-events-none" />
    </section>
  )
}
