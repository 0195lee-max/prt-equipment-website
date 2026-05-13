"use client"

import { CheckCircle2, Globe, Users, Settings, ShieldCheck, ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    whyLabel: "Why PRT",
    whyPoints: [
      {
        title: "현장 검증된 시스템",
        sub: "50대 이상 양산 라인 가동 중",
      },
      {
        title: "안정적인 웹 핸들링",
        sub: "연속 가동 시 장력 변동 ±0.3N",
      },
      {
        title: "빠른 현장 대응",
        sub: "직접 접근 가능한 기계 구조로 신속한 진단 및 정비",
      },
      {
        title: "기존 고객사 재주문",
        sub: "재주문이 전체 수주의 다수를 차지",
      },
    ],
    kpiLabel: "Installed Base",
    kpis: [
      { icon: "globe", top: "GLOBAL EXPERIENCE", value: "50+", sub: "납품 시스템" },
      { icon: "users", top: "ENGINEERING", value: "2010년부터", sub: "축적된 경험" },
      { icon: "settings", top: "SYSTEMS", value: "5+", sub: "국가" },
      { icon: "shield", top: "PRODUCTION LINES", value: "아시아 전역", sub: "현재 가동 중" },
    ],
    ctaInstalledBase: "납품 실적 보기",
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
        title: "量产验证系统",
        sub: "50+ 套系统持续投产运行",
      },
      {
        title: "稳定的卷材处理",
        sub: "连续运行下张力波动 ±0.3N",
      },
      {
        title: "快速现场支持",
        sub: "直接接近式机械结构,便于快速诊断与维护。",
      },
      {
        title: "老客户重复订单",
        sub: "回头客户订单占主要比例",
      },
    ],
    kpiLabel: "Installed Base",
    kpis: [
      { icon: "globe", top: "GLOBAL EXPERIENCE", value: "50+", sub: "已安装系统" },
      { icon: "users", top: "ENGINEERING", value: "自 2010 年", sub: "工程经验" },
      { icon: "settings", top: "SYSTEMS", value: "5+", sub: "国家/地区" },
      { icon: "shield", top: "PRODUCTION LINES", value: "覆盖亚洲", sub: "当前运行中" },
    ],
    ctaInstalledBase: "查看装机记录",
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

        <div className="relative mx-auto max-w-7xl px-6 py-5 lg:px-8 lg:py-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.whyLabel}
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-800">
            {t.whyPoints.map((point, idx) => (
              <div
                key={idx}
                className="border-r border-b border-slate-800 bg-slate-950/30 px-4 py-3 flex flex-col items-center justify-center text-center gap-1.5"
              >
                <CheckCircle2
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: "#C7A86D" }}
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-200 leading-snug mb-1">
                    {point.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-snug">
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
                  className={`flex items-center gap-4 py-5 lg:py-6 px-5 ${
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
          <div className="flex justify-center border-t border-slate-800/80 py-5">
            <a
              href="/installed-base"
              className="group inline-flex items-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-colors hover:bg-[#B89757]"
              style={{ backgroundColor: "#C7A86D" }}
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
