"use client"

import { CheckCircle2, Globe, Users, Settings, ShieldCheck, ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
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
  },
  zh: {
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
  },
}

const ICON_MAP = {
  globe: Globe,
  users: Users,
  settings: Settings,
  shield: ShieldCheck,
} as const

interface ApplicationsSectionProps {
  lang: Language
}

export function ApplicationsSection({ lang }: ApplicationsSectionProps) {
  const t = translations[lang]

  return (
    <section className="relative">
      {/* ── Why PRT — 4-bullet grid, dark solid bg ─────────── */}
      <div className="relative bg-[#0A0A0A] border-t border-slate-800/60">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.whyLabel}
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-800">
            {t.whyPoints.map((point, idx) => (
              <div
                key={idx}
                className="border-r border-b border-slate-800 bg-slate-950/30 px-5 py-5 flex items-start gap-3"
              >
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 flex-shrink-0"
                  style={{ color: "#C7A86D" }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-200 leading-snug mb-1.5">
                    {point.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {t.kpis.map((kpi, idx) => {
              const Icon = ICON_MAP[kpi.icon as keyof typeof ICON_MAP]
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 py-6 lg:py-7 px-5 ${
                    idx > 0 ? "lg:border-l border-slate-800/80" : ""
                  } ${idx === 2 ? "lg:border-l border-slate-800/80" : ""} ${
                    idx === 1 || idx === 3 ? "sm:border-l border-slate-800/80 lg:border-l" : ""
                  }`}
                >
                  <Icon
                    className="h-10 w-10 lg:h-11 lg:w-11 flex-shrink-0"
                    style={{ color: "#C7A86D" }}
                    strokeWidth={1.2}
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 mb-1">
                      {kpi.top}
                    </p>
                    <p
                      className="text-xl lg:text-2xl font-bold tracking-tight leading-tight"
                      style={{ color: "#C7A86D" }}
                    >
                      {kpi.value}
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
          <div className="flex justify-center border-t border-slate-800/80 py-6">
            <a
              href="/installed-base"
              className="group inline-flex items-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-colors hover:bg-[#B89757]"
              style={{ backgroundColor: "#C7A86D" }}
            >
              View Installed Base
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
