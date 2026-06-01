"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    caption: "PRECISION. STABILITY. PERFORMANCE.",
    headlineLine1: "Roll-to-Roll",
    headlineLine2: "Technology",
    subLine1: "Advanced Laminator & Exposure Systems for",
    subLine2: "Lead Frame Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
  en: {
    caption: "PRECISION. STABILITY. PERFORMANCE.",
    headlineLine1: "Roll-to-Roll",
    headlineLine2: "Technology",
    subLine1: "Advanced Laminator & Exposure Systems for",
    subLine2: "Lead Frame Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
  zh: {
    caption: "PRECISION. STABILITY. PERFORMANCE.",
    headlineLine1: "Roll-to-Roll",
    headlineLine2: "Technology",
    subLine1: "Advanced Laminator & Exposure Systems for",
    subLine2: "Lead Frame Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
}

const SLIDE_COUNT = 2

// Process labels for Variant B's technical overlay (decorative, not page copy).
const PROCESS_LABELS = ["WEB HANDLING", "LAMINATION", "EXPOSURE"] as const

interface HeroSliderProps {
  lang: Language
  // null/undefined = baseline. "a" | "b" | "c" select design variants.
  variant?: "a" | "b" | "c" | null
}

export function HeroSlider({ lang, variant = null }: HeroSliderProps) {
  const [slide, setSlide] = useState(0)
  const t = translations[lang]

  return (
    <section
      className="relative h-svh w-full overflow-hidden bg-[#07090F]"
      style={{ marginTop: "calc(var(--header-height) * -1)" }}
    >
      {/* ── Slide layers ─────────────────────────────────────── */}
      {/* Slide 1: still image (equipment shot first) */}
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
          style={{
            objectPosition: "center right",
            filter: "saturate(0.75) brightness(1.15) contrast(1.05)",
          }}
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
          preload="metadata"
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

      {/* ════════════════════════════════════════════════════════
          OVERLAY STACK — varies by design variant.
          • baseline / B / C → the original 3-layer vignette
          • A (Minimal Industrial) → lighter single-gradient overlay
            so the equipment photo reads cleaner
          ════════════════════════════════════════════════════════ */}
      {variant === "a" ? (
        <>
          {/* ── VARIANT A · Minimal Industrial ──────────────────
              Almost no overlay: one soft left gradient for text
              legibility + a faint bottom fade for the arrow/dots. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 38%, transparent 68%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
            }}
          />
        </>
      ) : (
        <>
          {/* ── BASELINE vignette stack (unchanged) ─────────────
              radial center + corner darken + left-strong gradient */}
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
          {/* Layer 3: left-side dark gradient for text legibility (covers text block area only) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)",
            }}
          />
          {/* ── VARIANT C · one extra darkening pass for more
              dramatic contrast (additive over baseline) ──────── */}
          {variant === "c" && (
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 90% 80% at 50% 45%, transparent 30%, rgba(0,0,0,0.45) 100%)",
              }}
            />
          )}
        </>
      )}

      {/* ── VARIANT B · Technical Overlay ─────────────────────────
          Thin blue instrumentation: a right-side process rail
          (WEB HANDLING / LAMINATION / EXPOSURE), corner brackets,
          and a faint measurement guide line. Decorative, restrained,
          desktop-only, no animation. */}
      {variant === "b" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 hidden md:block"
        >
          {/* faint full-width measurement guide */}
          <div
            className="absolute inset-x-0 top-1/2"
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(25,118,210,0.22), transparent)",
            }}
          />
          {/* right-side process rail */}
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 flex flex-col gap-9">
            {PROCESS_LABELS.map((label) => (
              <div key={label} className="flex items-center gap-3">
                <span className="h-px w-10" style={{ backgroundColor: "rgba(25,118,210,0.7)" }} />
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#1976D2" }} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
                  {label}
                </span>
              </div>
            ))}
          </div>
          {/* thin blue corner brackets */}
          <div
            className="absolute left-8 top-32 h-12 w-12 border-l border-t"
            style={{ borderColor: "rgba(25,118,210,0.5)" }}
          />
          <div
            className="absolute right-8 bottom-28 h-12 w-12 border-r border-b"
            style={{ borderColor: "rgba(25,118,210,0.5)" }}
          />
        </div>
      )}

      {/* ── Left-aligned text block (overlay across both slides) ─ */}
      <div className="relative z-20 flex h-full flex-col items-start justify-center pl-[10%] pr-6 sm:pr-10 lg:pr-16 -mt-[5vh]">
        <div className="max-w-2xl">
          <p
            className="mb-5 text-sm font-bold uppercase tracking-[0.32em]"
            style={{ color: "#1976D2" }}
          >
            {t.caption}
          </p>
          <h1 className="mb-6 flex flex-col text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.02]">
            <span>{t.headlineLine1}</span>
            <span>{t.headlineLine2}</span>
          </h1>
          <p className="mb-9 max-w-2xl text-lg md:text-xl leading-relaxed text-white/85">
            <span className="block">{t.subLine1}</span>
            <span className="block">{t.subLine2}</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/products"
              className="group inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-colors hover:bg-[#0D47A1]"
              style={{ backgroundColor: "#1976D2" }}
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
          next?.scrollIntoView({ behavior: "smooth", block: "start" })
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
              backgroundColor: slide === i ? "#1976D2" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>
    </section>
  )
}
