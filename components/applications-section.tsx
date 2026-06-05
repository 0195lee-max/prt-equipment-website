"use client"

import { CheckCircle2 } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    whyLabel: "Why PRT",
    whyPoints: [
      {
        title: "Production-Proven Systems",
        sub: "100대 이상의 시스템이 양산 라인에서 연속 가동 중",
      },
      {
        title: "Stable Web Handling",
        sub: "연속 가동 시 장력 변동 ±0.3 N",
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
  },
  en: {
    whyLabel: "Why PRT",
    whyPoints: [
      {
        title: "Production-Proven Systems",
        sub: "100+ systems in continuous production operation",
      },
      {
        title: "Stable Web Handling",
        sub: "±0.3 N tension variation under continuous runs",
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
  },
  zh: {
    whyLabel: "Why PRT",
    whyPoints: [
      {
        title: "Production-Proven Systems",
        sub: "100+ 套系统持续投产运行",
      },
      {
        title: "Stable Web Handling",
        sub: "连续运行下张力波动 ±0.3 N",
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
  },
}

interface ApplicationsSectionProps {
  lang: Language
}

export function ApplicationsSection({ lang }: ApplicationsSectionProps) {
  const t = translations[lang]

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

        <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-12 lg:px-8 lg:pt-16 lg:pb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.whyLabel}
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-800">
            {t.whyPoints.map((point, idx) => (
              <div
                key={idx}
                className="group relative border-r border-b border-slate-800 bg-slate-950/30 px-5 py-12 flex flex-col items-center justify-center text-center gap-3 transition-colors duration-300 hover:bg-[#1976D2]/[0.07]"
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
                  <p className="text-sm font-semibold text-slate-200 leading-normal mb-2 transition-colors duration-300 group-hover:text-white">
                    {point.title}
                  </p>
                  <p className="text-xs text-slate-400 leading-[1.85] transition-colors duration-300 group-hover:text-slate-300">
                    {point.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
