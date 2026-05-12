"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    caption: "PRECISION. STABILITY. PERFORMANCE.",
    headline: "Roll-to-Roll Technology",
    sub: "Advanced Laminator & Exposure Systems for Lead Frame Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
  en: {
    caption: "PRECISION. STABILITY. PERFORMANCE.",
    headline: "Roll-to-Roll Technology",
    sub: "Advanced Laminator & Exposure Systems for Lead Frame Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
  zh: {
    caption: "PRECISION. STABILITY. PERFORMANCE.",
    headline: "Roll-to-Roll Technology",
    sub: "Advanced Laminator & Exposure Systems for Lead Frame Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
}

const SLIDE_COUNT = 2

interface HeroSliderProps {
  lang: Language
}

export function HeroSlider({ lang }: HeroSliderProps) {
  const [slide, setSlide] = useState(0)
  const t = translations[lang]

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#07090F] snap-start">
      {/* ── Slide layers ─────────────────────────────────────── */}
      {/* Slide 1: video */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          slide === 0 ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={slide !== 0}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{
            objectPosition: "center right",
            filter: "saturate(0.75) brightness(1.15) contrast(1.05)",
          }}
        >
          <source src="/videos/hero_loop_v10.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Slide 2: still image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          slide === 1 ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={slide !== 1}
      >
        <Image
          src="/images/ba5b421e-9218-450c-bec4-1d0cde317c6a.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: "center right",
            filter: "saturate(0.75) brightness(1.15) contrast(1.05)",
          }}
        />
      </div>

      {/* ── Vignette stack: radial center + left-strong gradient + corner darken ─ */}
      {/* Layer 1: radial vignette — darkens all edges from center */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 50%, transparent 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      {/* Layer 2: top corners — extra strong darkening on upper-left & upper-right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(0,0,0,0.85) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 100% 0%, rgba(0,0,0,0.85) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(0,0,0,0.7) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(0,0,0,0.7) 0%, transparent 60%)",
        }}
      />
      {/* Layer 3: center tint for centered text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(7,9,15,0.55) 0%, rgba(7,9,15,0) 80%)",
        }}
      />

      {/* ── Center text block ───────────────────────────── */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 sm:px-10 lg:px-16 text-center">
        <div className="max-w-3xl">
          <p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: "#C7A86D" }}
          >
            {t.caption}
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[56px] leading-[1.05]">
            {t.headline}
          </h1>
          <p className="mb-7 max-w-xl text-sm sm:text-base leading-relaxed text-white/80">
            {t.sub}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="/products"
              className="group inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-colors hover:bg-[#B89757]"
              style={{ backgroundColor: "#C7A86D" }}
            >
              {t.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10 hover:border-white/70"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll-down arrow ────────────────────────────────── */}
      <button
        type="button"
        aria-label="Scroll to next section"
        onClick={() => {
          const next = document.getElementById("section-equipment")
          next?.scrollIntoView({ behavior: "smooth" })
        }}
        className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white/80 transition-all hover:border-white/80 hover:text-white animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </button>

      {/* ── Slide dots — click only, no autoplay ─────────────── */}
      <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 flex items-center gap-3">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={slide === i ? "true" : "false"}
            className="h-2.5 rounded-full transition-all"
            style={{
              width: slide === i ? "32px" : "10px",
              backgroundColor: slide === i ? "#C7A86D" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>
    </section>
  )
}
