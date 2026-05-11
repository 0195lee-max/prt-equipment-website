"use client"

import { CheckCircle2 } from "lucide-react"

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
        sub: "Direct-access design. No black box. No waiting.",
      },
      {
        title: "Repeat Orders from Existing Customers",
        sub: "Majority of orders from returning production accounts",
      },
    ],
    installedBase: "Installed Base",
    installedStats: [
      { value: "50+", label: "Installed Systems" },
      { value: "Since 2010", label: "Engineering" },
      { value: "5+", label: "Countries" },
    ],
    installedBaseStatement: "Running in production lines across Asia.",
    regions: ["China", "Malaysia", "Taiwan", "Japan", "Korea"],
    viewMore: "View Full Installed Base",
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
        sub: "Direct-access design. No black box. No waiting.",
      },
      {
        title: "Repeat Orders from Existing Customers",
        sub: "Majority of orders from returning production accounts",
      },
    ],
    installedBase: "Installed Base",
    installedStats: [
      { value: "50+", label: "Installed Systems" },
      { value: "Since 2010", label: "Engineering" },
      { value: "5+", label: "Countries" },
    ],
    installedBaseStatement: "Running in production lines across Asia.",
    regions: ["China", "Malaysia", "Taiwan", "Japan", "Korea"],
    viewMore: "View Full Installed Base",
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
        sub: "Direct-access design. No black box. No waiting.",
      },
      {
        title: "Repeat Orders from Existing Customers",
        sub: "Majority of orders from returning production accounts",
      },
    ],
    installedBase: "Installed Base",
    installedStats: [
      { value: "50+", label: "Installed Systems" },
      { value: "Since 2010", label: "Engineering" },
      { value: "5+", label: "Countries" },
    ],
    installedBaseStatement: "Running in production lines across Asia.",
    regions: ["China", "Malaysia", "Taiwan", "Japan", "Korea"],
    viewMore: "View Full Installed Base",
  },
}

interface ApplicationsSectionProps {
  lang: Language
}

export function ApplicationsSection({ lang }: ApplicationsSectionProps) {
  const t = translations[lang]

  return (
    <section className="relative">
      {/* ── Why PRT — 4 short bullets only ─────────────────── */}
      <div className="relative bg-[#0A0F1A] border-t border-slate-800/60">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.whyLabel}
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-800">
            {t.whyPoints.map((point, idx) => (
              <div
                key={idx}
                className="border-r border-b border-slate-800 bg-slate-950/30 px-6 py-7 flex items-start gap-3"
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

      {/* ── Installed Base — compact: numbers + countries only ─ */}
      <div className="relative bg-[#07090F] border-t border-slate-800/60">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.installedBase}
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 border border-slate-800 mb-10">
            {t.installedStats.map((stat, idx) => (
              <div
                key={idx}
                className={`px-6 py-8 text-center ${
                  idx > 0 ? "border-l border-slate-800" : ""
                }`}
              >
                <div
                  className="text-3xl sm:text-4xl font-semibold leading-tight"
                  style={{ color: "#C7A86D" }}
                >
                  {stat.value}
                </div>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mb-8">
            {t.installedBaseStatement}
          </p>

          {/* Countries */}
          <div className="flex items-center gap-2 flex-wrap mb-10">
            {t.regions.map((region, idx) => (
              <span key={idx} className="text-sm text-slate-300 tracking-wide">
                {region}
                {idx < t.regions.length - 1 && (
                  <span className="mx-2 text-slate-600">·</span>
                )}
              </span>
            ))}
          </div>

          <a
            href="/installed-base"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 border-b border-slate-700 pb-1 transition-all hover:text-slate-200 hover:border-slate-500"
          >
            {t.viewMore} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
