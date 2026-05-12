"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    caption: "PRECISION. STABILITY. PERFORMANCE.",
    headline: "Precision Roll-to-Roll Technology",
    sub: "Advanced Laminator & Exposure Systems for Lead Frame Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
  en: {
    caption: "PRECISION. STABILITY. PERFORMANCE.",
    headline: "Precision Roll-to-Roll Technology",
    sub: "Advanced Laminator & Exposure Systems for Lead Frame Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
  zh: {
    caption: "PRECISION. STABILITY. PERFORMANCE.",
    headline: "Precision Roll-to-Roll Technology",
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
    <section className="relative h-screen w-full overflow-hidden bg-[#07090F]">
      {/* ── Slide layers ─────────────────────────────────────── */}
      {/* Slide 1: still image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          slide === 0 ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={slide !== 0}
      >
        <Image
          src="/images/ba5b421e-9218-450c-bec4-1d0cde317c6a.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Slide 2: video */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          slide === 1 ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={slide !== 1}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero_loop_v10.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Dark overlay — left-strong gradient for bottom-left text legibility ─ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(7,9,15,0.82) 0%, rgba(7,9,15,0.55) 45%, rgba(7,9,15,0.15) 100%), linear-gradient(to bottom, rgba(7,9,15,0.4) 0%, rgba(7,9,15,0) 30%, rgba(7,9,15,0.65) 100%)",
        }}
      />

      {/* ── Bottom-left text block ───────────────────────────── */}
      <div className="relative z-20 flex h-full items-end pb-28 sm:pb-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p
            className="mb-5 text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: "#C7A86D" }}
          >
            {t.caption}
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.05]">
            {t.headline}
          </h1>
          <p className="mb-10 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
            {t.sub}
          </p>
          <div className="flex flex-wrap gap-3">
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

      {/* ── Slide dots — click only, no autoplay ─────────────── */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex items-center gap-3">
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
