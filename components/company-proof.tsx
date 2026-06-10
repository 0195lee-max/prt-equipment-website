"use client"

import type { CSSProperties } from "react"
import { ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    eyebrow: "PRT AT A GLANCE",
    headline: "범용 장비가 아닌, 생산 공정 중심의 Roll-to-Roll 시스템",
    subline:
      "Leadframe 및 반도체 패키징 라인을 위한 양산 검증된 Roll-to-Roll Exposure · Lamination 시스템.",
    body: "PRT는 안정적인 Roll-to-Roll 반도체 공정 시스템에 집중하는 엔지니어링 전문 기업입니다. 반복 가능한 공정 성능, 안정적인 웹 핸들링, 장기 엔지니어링 지원을 갖춘 장비로 아시아 전역의 생산 라인을 지원합니다.",
    ctaCompany: "View Company",
    ctaInstalled: "View Installed Base",
    quickLabel: "Explore Equipment",
  },
  en: {
    eyebrow: "PRT AT A GLANCE",
    headline: "Not Generic Equipment. Process-Built Systems.",
    subline:
      "Production-proven Roll-to-Roll exposure and lamination systems for Leadframe and semiconductor packaging lines.",
    body: "PRT is a specialized engineering company focused on stable Roll-to-Roll semiconductor process systems. We support production lines across Asia with equipment designed for repeatable process performance, stable web handling, and long-term engineering support.",
    ctaCompany: "View Company",
    ctaInstalled: "View Installed Base",
    quickLabel: "Explore Equipment",
  },
  zh: {
    eyebrow: "PRT AT A GLANCE",
    headline: "不是通用设备，而是面向生产工艺的 Roll-to-Roll 系统",
    subline:
      "面向 Leadframe 及半导体封装产线的量产验证 Roll-to-Roll Exposure · Lamination 系统。",
    body: "PRT 是一家专注于稳定 Roll-to-Roll 半导体工艺系统的工程专业公司。凭借具备可重复工艺性能、稳定卷材输送与长期工程支持的设备，服务于亚洲各地的生产线。",
    ctaCompany: "View Company",
    ctaInstalled: "View Installed Base",
    quickLabel: "Explore Equipment",
  },
}

// KPI labels stay English in every language mode (per the homepage rule).
// "Exposure + Lamination" is fixed in this order across all locales.
const METRICS: Array<{ title: string; sub: string }> = [
  { title: "100+ Installed Systems", sub: "Production-proven systems" },
  { title: "Across Asia", sub: "Active production references" },
  { title: "Exposure + Lamination", sub: "Core process focus" },
  { title: "Repeat Orders", sub: "From existing customers" },
]

interface CompanyProofProps {
  lang: Language
}

export function CompanyProof({ lang }: CompanyProofProps) {
  const t = translations[lang]

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] border-t border-slate-800/60">
      {/* very faint engineering grid — calm, not busy */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Subtle dotted Asia-region map (CSS/SVG only) ──────────
          Atmospheric background motif concentrated in the lower-right
          empty space. No labels, pins, lines, glow, or animation.
          Masked so it fades away from the headline / KPI / copy and
          never competes with text. Hidden on small screens. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          WebkitMaskImage:
            "radial-gradient(145% 145% at 55% 54%, #000 0%, #000 45%, transparent 83%)",
          maskImage:
            "radial-gradient(145% 145% at 55% 54%, #000 0%, #000 45%, transparent 83%)",
        }}
      >
        <svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
          className="absolute right-[20%] top-1/2 h-[172%] w-auto -translate-y-1/2"
          style={{ opacity: 0.2 }}
        >
          <defs>
            <pattern
              id="prt-asia-dots"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="9" cy="9" r="1.3" fill="#1976D2" />
            </pattern>
            <clipPath id="prt-asia-clip">
              {/* Mainland Asia (stylized): broad north mass, China/Korea
                  east coast, Indochina peninsula, India triangle,
                  Arabian peninsula. */}
              <path d="M150 300 L300 220 L480 200 L700 210 L840 250 L880 300 L820 330 L855 380 L800 400 L815 450 L760 480 L775 540 L720 560 L700 610 L690 655 L670 700 L660 715 L645 700 L650 660 L625 625 L645 595 L615 580 L600 548 L560 545 L545 520 L520 560 L490 620 L460 715 L440 700 L430 630 L415 575 L430 545 L415 520 L390 525 L360 545 L335 580 L305 600 L270 590 L255 560 L235 545 L225 510 L250 495 L215 470 L225 440 L190 420 L200 380 L165 360 L175 325 Z" />
              {/* Japanese arc */}
              <path d="M885 395 L902 422 L912 458 L901 472 L889 452 L876 418 Z" />
              {/* Indonesian island chain */}
              <path d="M648 735 L720 744 L784 760 L763 773 L699 762 L644 750 Z" />
              {/* Sri Lanka cue beneath India */}
              <path d="M452 728 L462 735 L458 748 L447 742 Z" />
            </clipPath>
          </defs>
          <g clipPath="url(#prt-asia-clip)">
            <rect x="0" y="0" width="1000" height="1000" fill="url(#prt-asia-dots)" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-8 lg:pt-20 lg:pb-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left: company preview copy — staggered reveal (headline first,
              then supporting copy, then CTAs). The video band below is the
              visual anchor and is NOT revealed (visible from the start). */}
          <div>
            <div
              data-reveal="ui"
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                {t.eyebrow}
              </p>
            </div>
            <h2
              data-reveal="heading"
              className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl"
            >
              {t.headline}
            </h2>
            <p
              data-reveal
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
              className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-300"
            >
              {t.subline}
            </p>
            <p
              data-reveal
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
              className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400"
            >
              {t.body}
            </p>

            <div
              data-reveal="ui"
              style={{ "--reveal-delay": "380ms" } as CSSProperties}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="/company"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#0D47A1]"
                style={{ backgroundColor: "#1976D2" }}
              >
                {t.ctaCompany}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/installed-base"
                className="inline-flex items-center gap-2 border border-slate-700 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
              >
                {t.ctaInstalled}
              </a>
            </div>
          </div>

          {/* Right: KPI / proof grid (2×2, square, thin dividers) */}
          <div
            data-reveal="ui"
            style={{ "--reveal-delay": "300ms" } as CSSProperties}
            className="grid grid-cols-1 border-l border-t border-slate-800 sm:grid-cols-2"
          >
            {METRICS.map((m, i) => (
              <div
                key={i}
                className="border-b border-r border-slate-800 bg-slate-950/30 p-6 lg:p-7"
              >
                <span
                  aria-hidden="true"
                  className="mb-4 block h-0.5 w-6"
                  style={{ backgroundColor: "#1976D2" }}
                />
                <p className="text-lg font-bold leading-snug text-white lg:text-xl">
                  {m.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
