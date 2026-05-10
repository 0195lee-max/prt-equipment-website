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
    tagline: "Precision Roll-to-Roll Solution Partner",
    headline: "Roll-to-Roll 장비",
    headlineSub: "리드프레임 & 반도체 패키징",
    description: "리드프레임 및 반도체 패키징 양산 라인을 위한\nRoll-to-Roll 라미네이터 · 노광 시스템",
    differentiators: [
      "Leadframe 특화 RTR 공정 대응",
      "아시아 양산 납품 실적 50+ 시스템",
      "현장 엔지니어링 지원 체계",
    ],
    ctaPrimary: "장비 보기",
    ctaSecondary: "문의하기",
    nav: {
      company: "회사 소개",
      equipment: "장비",
      engineering: "엔지니어링",
      installedBase: "납품 실적",
      contact: "문의",
    },
  },
  en: {
    tagline: "Precision Roll-to-Roll Solution Partner",
    headline: "Roll-to-Roll Equipment",
    headlineSub: "Leadframe & Semiconductor Packaging",
    description: "Production-proven Roll-to-Roll laminator and exposure systems\nfor Leadframe and Semiconductor Packaging manufacturing lines.",
    differentiators: [
      "Leadframe-specialized RTR process expertise",
      "50+ systems delivered across Asia",
      "Field engineering support",
    ],
    ctaPrimary: "View Equipment",
    ctaSecondary: "Contact Us",
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      contact: "Contact",
    },
  },
  zh: {
    tagline: "精密卷对卷解决方案合作伙伴",
    headline: "卷对卷工艺设备",
    headlineSub: "引线框架 & 半导体封装",
    description: "面向引线框架及半导体封装量产线的\n卷对卷层压机与曝光系统",
    differentiators: [
      "引线框架专用RTR工艺经验",
      "亚洲已交付50+套系统",
      "现场工程技术支持",
    ],
    ctaPrimary: "查看设备",
    ctaSecondary: "联系我们",
    nav: {
      company: "公司介绍",
      equipment: "设备",
      engineering: "工程技术",
      installedBase: "交付业绩",
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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Static brand background — replace with real equipment photo/video when available */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg,
              #0B1F3A 0%,
              #0f2a4a 30%,
              #163D6B 60%,
              #0B1F3A 100%
            )
          `,
        }}
      />

      {/* Subtle technical grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(199,168,109,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(199,168,109,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Diagonal accent line — engineering / industrial tone */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(199,168,109,0.3) 40.5%, transparent 41%)",
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center px-10 py-5 lg:px-16 transition-transform duration-300 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="flex justify-end md:w-[25vw]">
          <a href="/" className="flex flex-col items-start transition-opacity hover:opacity-80">
            <span className="text-xs font-medium tracking-widest text-white/50">{t.tagline}</span>
            <span className="text-4xl font-bold tracking-tight" style={{ color: "#C7A86D" }}>
              PRT
            </span>
          </a>
        </div>

        {/* Menu links */}
        <div className="hidden flex-1 items-center justify-center gap-16 md:flex">
          <a href="/company" className="text-base font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.company}
          </a>
          <a href="/products" className="text-base font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.equipment}
          </a>
          <a href="/engineering" className="text-base font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.engineering}
          </a>
          <a href="/installed-base" className="text-base font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.installedBase}
          </a>
          <a href="/contact" className="text-base font-medium text-white/80 transition-colors hover:text-white">
            {t.nav.contact}
          </a>
        </div>

        {/* Language selector */}
        <div ref={langRef} className="relative md:w-[25vw] flex justify-start">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-label="언어 선택 / Select language"
            className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2.5 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <Globe className="h-5 w-5" />
          </button>

          {isLangOpen && (
            <div className="absolute left-0 top-full mt-2 min-w-[140px] overflow-hidden rounded-lg border border-white/10 bg-slate-900/95 shadow-xl backdrop-blur-xl">
              {(["ko", "en", "zh"] as Language[]).map((l) => (
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

      {/* Hero content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center lg:px-16">
        {/* Industry label */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-12 bg-white/30" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Leadframe &amp; Semiconductor Packaging Equipment
          </span>
          <div className="h-px w-12 bg-white/30" />
        </div>

        {/* Main headline */}
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {t.headline}
        </h1>
        <p
          className="mb-8 text-2xl font-light tracking-wide sm:text-3xl"
          style={{ color: "#C7A86D" }}
        >
          {t.headlineSub}
        </p>

        {/* Description */}
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg whitespace-pre-line">
          {t.description}
        </p>

        {/* Differentiators */}
        <div className="mb-12 flex flex-col items-center gap-2 sm:flex-row sm:gap-8">
          {t.differentiators.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#C7A86D" }} />
              {item}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded px-8 py-3 text-sm font-semibold text-slate-900 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C7A86D" }}
          >
            {t.ctaPrimary}
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 transition-colors hover:text-white/70"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  )
}
