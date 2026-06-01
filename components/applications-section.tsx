"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, Globe, Users, Settings, ShieldCheck, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    whyLabel: "Why PRT",
    whyPoints: [
      {
        title: "Production-Proven Systems",
        sub: "50대 이상의 시스템이 양산 라인에서 연속 가동 중",
      },
      {
        title: "Stable Web Handling",
        sub: "연속 가동 시 장력 변동 ±0.3N",
      },
      {
        title: "Fast Field Support",
        sub: "직접 접근 가능한 기계 구조로 신속한 진단·정비.",
      },
      {
        title: "Repeat Orders from Existing Customers",
        sub: "재주문이 전체 수주의 다수를 차지",
      },
    ],
    kpiLabel: "Installed Base",
    kpis: [
      { icon: "globe", top: "GLOBAL EXPERIENCE", value: "50+", sub: "Installed Systems" },
      { icon: "users", top: "ENGINEERING", value: "Since 2010", sub: "Experience" },
      { icon: "settings", top: "SYSTEMS", value: "5+", sub: "Countries" },
      { icon: "shield", top: "PRODUCTION LINES", value: "Across Asia", sub: "Active Today" },
    ],
    ctaInstalledBase: "View Installed Base",
  },
  en: {
    whyLabel: "Why PRT",
    whyPoints: [
      {
        title: "Production-Proven Systems",
        sub: "50+ systems in continuous production operation",
      },
      {
        title: "Stable Web Handling",
        sub: "±0.3N tension variation under continuous runs",
      },
      {
        title: "Fast Field Support",
        sub: "Direct-access mechanical structure for faster troubleshooting and maintenance.",
      },
      {
        title: "Repeat Orders from Existing Customers",
        sub: "Majority of orders from returning production accounts",
      },
    ],
    kpiLabel: "Installed Base",
    kpis: [
      { icon: "globe", top: "GLOBAL EXPERIENCE", value: "50+", sub: "Installed Systems" },
      { icon: "users", top: "ENGINEERING", value: "Since 2010", sub: "Experience" },
      { icon: "settings", top: "SYSTEMS", value: "5+", sub: "Countries" },
      { icon: "shield", top: "PRODUCTION LINES", value: "Across Asia", sub: "Active Today" },
    ],
    ctaInstalledBase: "View Installed Base",
  },
  zh: {
    whyLabel: "Why PRT",
    whyPoints: [
      {
        title: "Production-Proven Systems",
        sub: "50+ 套系统持续投产运行",
      },
      {
        title: "Stable Web Handling",
        sub: "连续运行下张力波动 ±0.3N",
      },
      {
        title: "Fast Field Support",
        sub: "直接接近式机械结构,便于快速诊断与维护。",
      },
      {
        title: "Repeat Orders from Existing Customers",
        sub: "回头客户订单占主要比例",
      },
    ],
    kpiLabel: "Installed Base",
    kpis: [
      { icon: "globe", top: "GLOBAL EXPERIENCE", value: "50+", sub: "Installed Systems" },
      { icon: "users", top: "ENGINEERING", value: "Since 2010", sub: "Experience" },
      { icon: "settings", top: "SYSTEMS", value: "5+", sub: "Countries" },
      { icon: "shield", top: "PRODUCTION LINES", value: "Across Asia", sub: "Active Today" },
    ],
    ctaInstalledBase: "View Installed Base",
  },
}

const ICON_MAP = {
  globe: Globe,
  users: Users,
  settings: Settings,
  shield: ShieldCheck,
} as const

/**
 * Metric value with a restrained count-up. Only animates values that
 * START with a number (e.g. "50+", "5+"); text values ("Since 2010",
 * "Across Asia") render verbatim. The count starts NEAR the final
 * figure and eases up a few digits — never a loud 0→N climb. Plays
 * once when `active`, and is skipped entirely under reduced motion.
 */
function MetricValue({
  value,
  active,
  reduced,
}: {
  value: string
  active: boolean
  reduced: boolean
}) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ""
  // start a few digits below the target (min 2, ~12% of the value)
  const from = match ? Math.max(0, target - Math.max(2, Math.round(target * 0.12))) : 0
  const [n, setN] = useState(from)

  useEffect(() => {
    if (!match || reduced || !active) return
    let raf = 0
    let t0: number | null = null
    const duration = 900
    const tick = (ts: number) => {
      if (t0 === null) t0 = ts
      const p = Math.min(1, (ts - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setN(Math.round(from + (target - from) * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, reduced, match, from, target])

  if (!match || reduced) return <>{value}</>
  return (
    <>
      {n}
      {suffix}
    </>
  )
}

interface ApplicationsSectionProps {
  lang: Language
}

export function ApplicationsSection({ lang }: ApplicationsSectionProps) {
  const t = translations[lang]
  // Reveal + count-up the KPI strip once it scrolls into view.
  const [kpiRef, kpiInView] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const reduced = usePrefersReducedMotion()
  // Reduced motion → show the strip immediately (no fade, no count-up,
  // no dependency on the observer). Otherwise reveal on scroll-in.
  const revealKpi = reduced || kpiInView

  return (
    <section className="relative">
      {/* ── Why PRT — 4-bullet grid, dark solid bg ─────────── */}
      <div className="relative bg-[#0A0A0A] border-t border-slate-800/60">
        {/* faint background grid (very low opacity) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-5 lg:px-8 lg:py-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.whyLabel}
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-800">
            {t.whyPoints.map((point, idx) => (
              <div
                key={idx}
                className="group relative border-r border-b border-slate-800 bg-slate-950/30 px-4 py-3 flex flex-col items-center justify-center text-center gap-1.5 transition-colors duration-300 hover:bg-[#1976D2]/[0.07]"
              >
                {/* hover accent — blue underline grows along the bottom */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  style={{ backgroundColor: "#1976D2" }}
                />
                <CheckCircle2
                  className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: "#1976D2" }}
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-200 leading-snug mb-1 transition-colors duration-300 group-hover:text-white">
                    {point.title}
                  </p>
                  <p className="text-xs text-slate-400 leading-snug transition-colors duration-300 group-hover:text-slate-300">
                    {point.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Installed Base — Icon KPI Bar ───────────────────── */}
      <div className="relative bg-[#0A0A0A] border-t border-b border-slate-800/60">
        <div ref={kpiRef} className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {t.kpis.map((kpi, idx) => {
              const Icon = ICON_MAP[kpi.icon as keyof typeof ICON_MAP]
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 py-5 lg:py-6 px-5 transition-all duration-700 ease-out ${
                    idx > 0 ? "lg:border-l border-slate-800/80" : ""
                  } ${idx === 2 ? "lg:border-l border-slate-800/80" : ""} ${
                    idx === 1 || idx === 3 ? "sm:border-l border-slate-800/80 lg:border-l" : ""
                  } ${
                    /* entrance: fade up into place when the strip enters view */
                    revealKpi ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  <Icon
                    className="h-10 w-10 lg:h-11 lg:w-11 flex-shrink-0"
                    style={{ color: "#1976D2" }}
                    strokeWidth={1.2}
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 mb-1">
                      {kpi.top}
                    </p>
                    <p
                      className="text-xl lg:text-2xl font-bold tracking-tight leading-tight"
                      style={{ color: "#1976D2" }}
                    >
                      <MetricValue value={kpi.value} active={kpiInView} reduced={reduced} />
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">
                      {kpi.sub}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Installed Base CTA ───────────────────────────── */}
          <div className="flex justify-center border-t border-slate-800/80 py-5">
            <a
              href="/installed-base"
              className="group inline-flex items-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-colors hover:bg-[#0D47A1]"
              style={{ backgroundColor: "#1976D2" }}
            >
              {t.ctaInstalledBase}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
