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

// ── VARIANT B: numbered process steps shown prominently on right side
const PROCESS_STEPS = [
  { num: "01", label: "WEB HANDLING" },
  { num: "02", label: "LAMINATION" },
  { num: "03", label: "EXPOSURE" },
] as const

interface HeroSliderProps {
  lang: Language
  /** null/undefined = baseline. "a"|"b"|"c" = design variants. */
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
      {/* ── Slide layers ─────────────────────────────────────────── */}
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
            filter: variant === "a"
              /* A — brighter, more saturated: photo carries the page */
              ? "saturate(0.9) brightness(1.3) contrast(1.0)"
              /* C — slightly desaturated so the blue wash pops */
              : variant === "c"
              ? "saturate(0.55) brightness(1.0) contrast(1.1)"
              /* baseline / B */
              : "saturate(0.75) brightness(1.15) contrast(1.05)",
          }}
        />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          slide === 1 ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={slide !== 1}
      >
        <video
          autoPlay muted loop playsInline preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{
            objectPosition: "center right",
            filter: variant === "a"
              ? "saturate(0.9) brightness(1.3) contrast(1.0)"
              : variant === "c"
              ? "saturate(0.55) brightness(1.0) contrast(1.1)"
              : "saturate(0.75) brightness(1.15) contrast(1.05)",
          }}
        >
          <source src="/videos/hero_loop_v10.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ════════════════════════════════════════════════════════════
          OVERLAY STACK — unique per variant
          ════════════════════════════════════════════════════════════ */}

      {/* ── VARIANT A · Minimal Industrial ───────────────────────────
          One feathered left gradient only — right 40% of the photo is
          completely unobscured. The equipment machinery reads as the
          hero. No dark surround, no corner fills. */}
      {variant === "a" && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.5) 32%, rgba(0,0,0,0.1) 58%, transparent 75%)",
          }}
        />
      )}

      {/* ── VARIANT B · Technical Overlay ────────────────────────────
          Standard left gradient + blue-tinted full-hero scan tint +
          prominent numbered process steps on the right. */}
      {variant === "b" && (
        <>
          {/* dark left panel */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 35%, rgba(0,0,0,0.15) 65%, transparent 100%)",
            }}
          />
          {/* subtle blue scan tint over whole hero */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(25,118,210,0.10)" }}
          />
          {/* left-edge blue vertical rule */}
          <div
            aria-hidden="true"
            className="absolute left-[8.5%] top-0 bottom-0 pointer-events-none"
            style={{ width: "3px", background: "rgba(25,118,210,0.85)" }}
          />
          {/* right-side numbered process steps — large and prominent */}
          <div
            aria-hidden="true"
            className="absolute right-[6%] top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex flex-col gap-8"
          >
            {PROCESS_STEPS.map(({ num, label }) => (
              <div key={label} className="flex items-center gap-4">
                <span
                  className="text-3xl font-black leading-none tabular-nums"
                  style={{ color: "rgba(25,118,210,0.85)" }}
                >
                  {num}
                </span>
                <div className="flex flex-col gap-1">
                  <span
                    className="block h-px w-20"
                    style={{ backgroundColor: "rgba(25,118,210,0.6)" }}
                  />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/75">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* corner brackets — bigger and more visible */}
          <div
            className="absolute left-[10%] top-[15%] h-16 w-16 border-l-2 border-t-2 pointer-events-none"
            style={{ borderColor: "rgba(25,118,210,0.7)" }}
          />
          <div
            className="absolute right-[4%] bottom-[18%] h-16 w-16 border-r-2 border-b-2 pointer-events-none"
            style={{ borderColor: "rgba(25,118,210,0.7)" }}
          />
        </>
      )}

      {/* ── VARIANT C · Premium Equipment Showcase ───────────────────
          Strong blue-to-dark color wash on the left half + deep dark
          on the right edges for contrast framing. Headline gets an
          underline accent on the second word. */}
      {variant === "c" && (
        <>
          {/* deep right/bottom vignette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 90% at 65% 50%, transparent 30%, rgba(0,0,0,0.75) 100%)",
            }}
          />
          {/* strong blue color wash on left two-thirds */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, rgba(13,71,161,0.72) 0%, rgba(25,118,210,0.38) 30%, transparent 60%)",
            }}
          />
          {/* bottom fade */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
            }}
          />
        </>
      )}

      {/* ── BASELINE overlay stack (no variant) ──────────────────────
          Original 3-layer vignette — untouched. */}
      {!variant && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 95% 85% at 50% 50%, transparent 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.9) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(0,0,0,0.85) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 100% 0%, rgba(0,0,0,0.85) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(0,0,0,0.7) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(0,0,0,0.7) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)",
            }}
          />
        </>
      )}

      {/* ════════════════════════════════════════════════════════════
          TEXT BLOCK — headline/CTA differ per variant
          ════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 flex h-full flex-col items-start justify-center pl-[10%] pr-6 sm:pr-10 lg:pr-16 -mt-[5vh]">
        <div className="max-w-2xl">
          <p
            className="mb-5 font-bold uppercase"
            style={{
              color: "#1976D2",
              fontSize: variant === "a" ? "11px" : "14px",
              letterSpacing: variant === "a" ? "0.38em" : "0.32em",
            }}
          >
            {t.caption}
          </p>

          {/* ── VARIANT A · headline: lighter weight, clean */}
          {variant === "a" && (
            <h1 className="mb-6 flex flex-col text-6xl md:text-8xl font-semibold tracking-tight text-white/90 leading-[1.02]">
              <span>{t.headlineLine1}</span>
              <span>{t.headlineLine2}</span>
            </h1>
          )}

          {/* ── VARIANT B · headline: standard bold */}
          {variant === "b" && (
            <h1 className="mb-6 flex flex-col text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.02]">
              <span>{t.headlineLine1}</span>
              <span>{t.headlineLine2}</span>
            </h1>
          )}

          {/* ── VARIANT C · headline: heavier, blue underline accent */}
          {variant === "c" && (
            <h1 className="mb-6 flex flex-col text-6xl md:text-[90px] font-black tracking-tight text-white leading-[1.0]">
              <span>{t.headlineLine1}</span>
              <span className="relative inline-block">
                {t.headlineLine2}
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-2 h-1 w-16"
                  style={{ backgroundColor: "#1976D2" }}
                />
              </span>
            </h1>
          )}

          {/* ── BASELINE headline */}
          {!variant && (
            <h1 className="mb-6 flex flex-col text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.02]">
              <span>{t.headlineLine1}</span>
              <span>{t.headlineLine2}</span>
            </h1>
          )}

          <p className="mb-9 max-w-2xl text-lg md:text-xl leading-relaxed text-white/85">
            <span className="block">{t.subLine1}</span>
            <span className="block">{t.subLine2}</span>
          </p>

          {/* ── CTA buttons ─── */}
          <div className="flex flex-wrap gap-3">
            {variant === "a" ? (
              /* A: outline-style primary button (no fill) */
              <>
                <a
                  href="/products"
                  className="group inline-flex items-center gap-2 border-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-slate-900"
                  style={{ borderColor: "#1976D2", color: "#1976D2" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#1976D2" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent" }}
                >
                  {t.ctaPrimary}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white/70 transition-colors hover:bg-white/5 hover:border-white/50 hover:text-white"
                >
                  {t.ctaSecondary}
                </a>
              </>
            ) : (
              /* baseline / B / C: solid fill primary button */
              <>
                <a
                  href="/products"
                  className="group inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors"
                  style={{
                    backgroundColor: variant === "c" ? "#0D47A1" : "#1976D2",
                    ...(variant === "c" && { border: "1px solid rgba(255,255,255,0.15)" }),
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = variant === "c" ? "#1976D2" : "#0D47A1" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = variant === "c" ? "#0D47A1" : "#1976D2" }}
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
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Scroll-down arrow ──────────────────────────────────────── */}
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

      {/* ── Slide dots ─────────────────────────────────────────────── */}
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
