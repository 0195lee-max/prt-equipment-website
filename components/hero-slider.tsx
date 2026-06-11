"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    caption: "WEB HANDLING. EXPOSURE. LAMINATION.",
    headlineLine1: "Roll-to-Roll",
    headlineLine2: "Technology",
    subLine1: "Production-proven Exposure & Lamination Systems",
    subLine2: "for Leadframe Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
  en: {
    caption: "WEB HANDLING. EXPOSURE. LAMINATION.",
    headlineLine1: "Roll-to-Roll",
    headlineLine2: "Technology",
    subLine1: "Production-proven Exposure & Lamination Systems",
    subLine2: "for Leadframe Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
  zh: {
    caption: "WEB HANDLING. EXPOSURE. LAMINATION.",
    headlineLine1: "Roll-to-Roll",
    headlineLine2: "Technology",
    subLine1: "Production-proven Exposure & Lamination Systems",
    subLine2: "for Leadframe Manufacturing",
    ctaPrimary: "EXPLORE SYSTEMS",
    ctaSecondary: "CONTACT SALES",
  },
}

interface HeroSliderProps {
  lang: Language
}

export function HeroSlider({ lang }: HeroSliderProps) {
  // PREVIEW-ONLY: subtle cursor glow on the hero grid (desktop pointers only).
  const sectionRef = useRef<HTMLElement>(null)
  const [glowOn, setGlowOn] = useState(false)
  const t = translations[lang]

  // Cursor-tracked grid glow. Desktop fine-pointer only; disabled on touch and
  // when prefers-reduced-motion is set. Updates CSS variables (no re-render per
  // frame), eased via rAF for a slow, premium feel. Pointer listeners are
  // passive reads only, so clicks / selection / navigation are unaffected.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!fine.matches || reduced.matches) return

    let raf = 0
    let running = false
    let inited = false
    const target = { x: 0, y: 0 }
    const cur = { x: 0, y: 0 }

    const tick = () => {
      cur.x += (target.x - cur.x) * 0.12
      cur.y += (target.y - cur.y) * 0.12
      el.style.setProperty("--mx", `${cur.x}px`)
      el.style.setProperty("--my", `${cur.y}px`)
      if (Math.abs(target.x - cur.x) > 0.5 || Math.abs(target.y - cur.y) > 0.5) {
        raf = requestAnimationFrame(tick)
      } else {
        running = false
      }
    }
    const start = () => {
      if (!running) {
        running = true
        raf = requestAnimationFrame(tick)
      }
    }

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      target.x = e.clientX - r.left
      target.y = e.clientY - r.top
      if (!inited) {
        cur.x = target.x
        cur.y = target.y
        inited = true
      }
      start()
    }
    const onEnter = () => setGlowOn(true)
    const onLeave = () => setGlowOn(false)

    el.addEventListener("pointermove", onMove, { passive: true })
    el.addEventListener("pointerenter", onEnter)
    el.addEventListener("pointerleave", onLeave)
    return () => {
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerenter", onEnter)
      el.removeEventListener("pointerleave", onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-svh w-full overflow-hidden bg-[#07090F]"
      style={{ marginTop: "calc(var(--header-height) * -1)" }}
    >
      {/* ── Background image (single static hero — no carousel) ─── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_main11-v2.png"
          alt=""
          fill
          priority
          quality={90}
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
      {/* Layer 3: left-side dark gradient for text legibility (covers text block area only) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)",
        }}
      />

      {/* ════════════════════════════════════════════════════════
          TECHNICAL OVERLAY — faint blue engineering-drawing layer.
          Coordinate grid + scan lines + a single crosshair, all in
          PRT Blue at ~10-12% so it reads as a measurement schematic
          over the machinery. Static (no animation), pointer-safe.
          ════════════════════════════════════════════════════════ */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[15]">
        {/* fine coordinate grid — kept very subtle (low default opacity) */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(to right, #1976D2 1px, transparent 1px), linear-gradient(to bottom, #1976D2 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />
        {/* PREVIEW-ONLY: cursor glow — the SAME grid in soft PRT blue, revealed
            only in a soft radius around the cursor via a radial mask, so nearby
            grid lines lightly brighten. Aligned to the base grid (same 84px) so
            it brightens the same lines. Fades in/out smoothly; desktop only. */}
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-out"
          style={{
            opacity: glowOn ? 1 : 0,
            backgroundImage:
              "linear-gradient(to right, rgba(25,118,210,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(25,118,210,0.5) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
            WebkitMaskImage:
              "radial-gradient(170px circle at var(--mx, 50%) var(--my, 50%), rgba(0,0,0,0.5) 0%, transparent 70%)",
            maskImage:
              "radial-gradient(170px circle at var(--mx, 50%) var(--my, 50%), rgba(0,0,0,0.5) 0%, transparent 70%)",
          }}
        />
        {/* horizontal scan lines */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.05,
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(25,118,210,0.7) 0px, rgba(25,118,210,0.7) 1px, transparent 1px, transparent 5px)",
          }}
        />
        {/* crosshair coordinate mark over the machinery (right side) */}
        <svg
          className="absolute right-[7%] top-[26%] hidden md:block"
          width="132"
          height="132"
          viewBox="0 0 132 132"
          fill="none"
          style={{ opacity: 0.45 }}
        >
          <circle cx="66" cy="66" r="3.5" stroke="#1976D2" strokeWidth="1" />
          <circle cx="66" cy="66" r="20" stroke="#1976D2" strokeWidth="0.6" />
          <line x1="66" y1="0" x2="66" y2="40" stroke="#1976D2" strokeWidth="0.75" />
          <line x1="66" y1="92" x2="66" y2="132" stroke="#1976D2" strokeWidth="0.75" />
          <line x1="0" y1="66" x2="40" y2="66" stroke="#1976D2" strokeWidth="0.75" />
          <line x1="92" y1="66" x2="132" y2="66" stroke="#1976D2" strokeWidth="0.75" />
        </svg>
      </div>

      {/* ── Left-aligned text block (over the hero image) ─────── */}
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
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
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
    </section>
  )
}
