"use client"

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
  },
  en: {
    eyebrow: "PRT AT A GLANCE",
    headline: "Not Generic Equipment. Process-Built Systems.",
    subline:
      "Production-proven Roll-to-Roll exposure and lamination systems for Leadframe and semiconductor packaging lines.",
    body: "PRT is a specialized engineering company focused on stable Roll-to-Roll semiconductor process systems. We support production lines across Asia with equipment designed for repeatable process performance, stable web handling, and long-term engineering support.",
    ctaCompany: "View Company",
    ctaInstalled: "View Installed Base",
  },
  zh: {
    eyebrow: "PRT AT A GLANCE",
    headline: "不是通用设备，而是面向生产工艺的 Roll-to-Roll 系统",
    subline:
      "面向 Leadframe 及半导体封装产线的量产验证 Roll-to-Roll Exposure · Lamination 系统。",
    body: "PRT 是一家专注于稳定 Roll-to-Roll 半导体工艺系统的工程专业公司。凭借具备可重复工艺性能、稳定卷材输送与长期工程支持的设备，服务于亚洲各地的生产线。",
    ctaCompany: "View Company",
    ctaInstalled: "View Installed Base",
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
    <section className="relative bg-[#0A0A0A] border-t border-slate-800/60">
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

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-8 lg:pt-20 lg:pb-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left: company preview copy */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                {t.eyebrow}
              </p>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              {t.headline}
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-300">
              {t.subline}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400">
              {t.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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
          <div className="grid grid-cols-1 border-l border-t border-slate-800 sm:grid-cols-2">
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
