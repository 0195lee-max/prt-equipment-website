"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    meta: "Installed Base",
    title: "Production-Proven",
    titleAccent: "in Asia",
    description:
      "PRT 시스템은 아시아 전역의 양산 현장에서 가동 중입니다. 100대 이상의 Installed Systems와 재주문이 현장 성능을 입증합니다.",
    kpiHeading: "Field Record",
    kpis: [
      { value: "100+", label: "Installed Systems", sub: "Cumulative" },
      { value: "Since 2010", label: "Engineering", sub: "" },
      { value: "5+", label: "Countries", sub: "Asia Production Sites" },
      { value: "Multi-Year", label: "Operating Lines", sub: "Active Today" },
    ],
    repeatBadge: "Repeat Orders",
    repeatLabel: "Validated by Returning Customers",
    repeatText:
      "다수의 PRT 고객사가 라인 증설 또는 신규 라인 구축 시 PRT 장비를 재선정해 왔습니다. 재주문은 현장 성능을 가장 직접적으로 입증합니다.",
    regionsLabel: "Deployment Regions",
    regions: [
      {
        country: "China",
        code: "CN",
        desc: "다수의 Leadframe & Semiconductor Packaging 제조사.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Malaysia",
        code: "MY",
        desc: "Laminator 및 Exposure 시스템 양산 가동 중.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Taiwan",
        code: "TW",
        desc: "Leadframe 라인에 Roll-to-Roll Exposure 시스템 공급.",
        equipmentTypes: ["Exposure"],
      },
      {
        country: "Japan",
        code: "JP",
        desc: "패키징 라인에 Lamination 시스템 납품.",
        equipmentTypes: ["Laminator"],
      },
      {
        country: "Korea",
        code: "KR",
        desc: "국내 양산 현장에 Laminator 및 Exposure 시스템.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
    ],
    recordsLabel: "Delivery History",
    recordsNote:
      "고객사명은 비공개. 구체적 레퍼런스는 요청 시 제공합니다.",
    records: [
      { period: "2011–2013", region: "Korea", type: "Laminator", notes: "초도 양산 라인 도입. 국내 Leadframe 제조사." },
      { period: "2014–2016", region: "Korea / China", type: "Laminator + Exposure", notes: "Exposure 시스템 도입. 중국 최초 납품." },
      { period: "2017–2019", region: "China / Taiwan", type: "Exposure", notes: "중국 주요 패키징 고객사 확대. 대만 최초 납품." },
      { period: "2020–2021", region: "China / Malaysia", type: "Laminator + Exposure", notes: "말레이시아 최초 납품. 재주문 다수." },
      { period: "2022–2023", region: "China / Korea / Japan", type: "Laminator + Exposure", notes: "일본 최초 납품. 기존 고객사 라인 확장." },
      { period: "2024–", region: "Asia-wide", type: "Laminator + Exposure", notes: "차세대 고정밀 Exposure 납품 확대 중." },
    ],
    recordPeriod: "Period",
    recordRegion: "Region",
    recordType: "Equipment",
    recordNotes: "Notes",
    customersLabel: "Named Customers",
    customersNote: "기타 Leadframe & Semiconductor Packaging 제조사 (비공개)",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    contactCta: "Request References",
    productsCta: "View Equipment",
  },
  en: {
    meta: "Installed Base",
    title: "Production-Proven",
    titleAccent: "in Asia",
    description:
      "PRT systems are already running in production environments across Asia. 100+ systems installed. Repeat orders validate field performance.",
    kpiHeading: "Field Record",
    kpis: [
      { value: "100+", label: "Installed Systems", sub: "Cumulative" },
      { value: "Since 2010", label: "Engineering", sub: "" },
      { value: "5+", label: "Countries", sub: "Asia Production Sites" },
      { value: "Multi-Year", label: "Operating Lines", sub: "Active Today" },
    ],
    repeatBadge: "Repeat Orders",
    repeatLabel: "Validated by Returning Customers",
    repeatText:
      "Multiple PRT customers have re-selected PRT equipment when expanding lines or building new ones. Repeat orders are the most direct validation of field performance.",
    regionsLabel: "Deployment Regions",
    regions: [
      {
        country: "China",
        code: "CN",
        desc: "Multiple Leadframe & Semiconductor Packaging manufacturers.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Malaysia",
        code: "MY",
        desc: "Laminator and Exposure systems in active production.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Taiwan",
        code: "TW",
        desc: "Roll-to-Roll Exposure systems supplied to Leadframe lines.",
        equipmentTypes: ["Exposure"],
      },
      {
        country: "Japan",
        code: "JP",
        desc: "Lamination systems delivered to packaging lines.",
        equipmentTypes: ["Laminator"],
      },
      {
        country: "Korea",
        code: "KR",
        desc: "Laminator and Exposure systems on domestic production sites.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
    ],
    recordsLabel: "Delivery History",
    recordsNote:
      "Customer names are withheld for confidentiality. Specific references available on request.",
    records: [
      { period: "2011–2013", region: "Korea", type: "Laminator", notes: "Initial mass production line adoption. Domestic Leadframe manufacturer." },
      { period: "2014–2016", region: "Korea / China", type: "Laminator + Exposure", notes: "Exposure system introduced. First delivery to China." },
      { period: "2017–2019", region: "China / Taiwan", type: "Exposure", notes: "Major China packaging customer expansion. First delivery to Taiwan." },
      { period: "2020–2021", region: "China / Malaysia", type: "Laminator + Exposure", notes: "First delivery to Malaysia. Multiple repeat orders." },
      { period: "2022–2023", region: "China / Korea / Japan", type: "Laminator + Exposure", notes: "First delivery to Japan. Line expansion by existing customers." },
      { period: "2024–", region: "Asia-wide", type: "Laminator + Exposure", notes: "Expanding next-generation high-precision exposure deliveries." },
    ],
    recordPeriod: "Period",
    recordRegion: "Region",
    recordType: "Equipment",
    recordNotes: "Notes",
    customersLabel: "Named Customers",
    customersNote: "Additional Leadframe & Semiconductor Packaging manufacturers (confidential)",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    contactCta: "Request References",
    productsCta: "View Equipment",
  },
  zh: {
    meta: "Installed Base",
    title: "Production-Proven",
    titleAccent: "in Asia",
    description:
      "PRT 系统已在亚洲各地的量产现场投入运行。50 套以上的 Installed Systems 与重复订单印证现场性能。",
    kpiHeading: "Field Record",
    kpis: [
      { value: "100+", label: "Installed Systems", sub: "Cumulative" },
      { value: "Since 2010", label: "Engineering", sub: "" },
      { value: "5+", label: "Countries", sub: "Asia Production Sites" },
      { value: "Multi-Year", label: "Operating Lines", sub: "Active Today" },
    ],
    repeatBadge: "Repeat Orders",
    repeatLabel: "Validated by Returning Customers",
    repeatText:
      "多家 PRT 客户在扩建或新建产线时再次选择 PRT 设备。重复订单是对现场性能最直接的印证。",
    regionsLabel: "Deployment Regions",
    regions: [
      {
        country: "China",
        code: "CN",
        desc: "多家 Leadframe 与半导体封装制造商。",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Malaysia",
        code: "MY",
        desc: "Laminator 与 Exposure 系统已投入量产运行。",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Taiwan",
        code: "TW",
        desc: "向 Leadframe 产线供应 Roll-to-Roll Exposure 系统。",
        equipmentTypes: ["Exposure"],
      },
      {
        country: "Japan",
        code: "JP",
        desc: "向封装产线交付 Lamination 系统。",
        equipmentTypes: ["Laminator"],
      },
      {
        country: "Korea",
        code: "KR",
        desc: "国内量产现场配备 Laminator 与 Exposure 系统。",
        equipmentTypes: ["Laminator", "Exposure"],
      },
    ],
    recordsLabel: "Delivery History",
    recordsNote:
      "客户名称出于保密考虑暂不公开。可应要求提供具体参考案例。",
    records: [
      { period: "2011–2013", region: "Korea", type: "Laminator", notes: "初次大规模量产线导入。韩国 Leadframe 制造商。" },
      { period: "2014–2016", region: "Korea / China", type: "Laminator + Exposure", notes: "引入 Exposure 系统。首次交付中国。" },
      { period: "2017–2019", region: "China / Taiwan", type: "Exposure", notes: "中国主要封装客户扩展。首次交付台湾。" },
      { period: "2020–2021", region: "China / Malaysia", type: "Laminator + Exposure", notes: "首次交付马来西亚。多次重复订单。" },
      { period: "2022–2023", region: "China / Korea / Japan", type: "Laminator + Exposure", notes: "首次交付日本。老客户产线扩建。" },
      { period: "2024–", region: "Asia-wide", type: "Laminator + Exposure", notes: "扩大下一代高精度 Exposure 系统的交付。" },
    ],
    recordPeriod: "Period",
    recordRegion: "Region",
    recordType: "Equipment",
    recordNotes: "Notes",
    customersLabel: "Named Customers",
    customersNote: "其他 Leadframe 与半导体封装制造商(保密)",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    contactCta: "Request References",
    productsCta: "View Equipment",
  },
}

interface InstalledBaseProps {
  lang?: Language
}

export function InstalledBase({ lang: externalLang }: InstalledBaseProps) {
  const [internalLang] = useState<Language>("en")
  const lang = externalLang ?? internalLang
  const t = translations[lang]

  return (
    <div className="min-h-svh bg-[#07090F]">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative bg-[#07090F] border-b border-slate-800/60 overflow-hidden">
        {/* Background photo */}
        <Image
          src="/images/installed-base-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
          aria-hidden="true"
        />
        {/* Dark overlay for legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,9,15,0.65) 0%, rgba(7,9,15,0.75) 60%, rgba(7,9,15,0.92) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.meta}
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[56px] leading-[1.05] mb-6 max-w-3xl">
            {t.title}{" "}
            <span style={{ color: "#1976D2" }}>{t.titleAccent}</span>.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            {t.description}
          </p>
        </div>
      </div>

      {/* ── KPI Strip ────────────────────────────────────── */}
      <div className="relative bg-[#07090F] border-b border-slate-800/60">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="py-5 flex items-center gap-3 border-b border-slate-900">
            <div className="h-px w-6" style={{ backgroundColor: "rgba(25,118,210,0.5)" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.kpiHeading}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {t.kpis.map((kpi, idx) => (
              <div
                key={idx}
                className={`py-10 px-2 sm:px-6 ${
                  idx > 0 ? "border-l border-slate-900" : ""
                } ${idx === 2 ? "border-l-0 md:border-l" : ""}`}
              >
                <div
                  className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight"
                  style={{ color: "#1976D2" }}
                >
                  {kpi.value}
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {kpi.label}
                </p>
                {kpi.sub && (
                  <p className="mt-0.5 text-[11px] text-slate-500">{kpi.sub}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Repeat Orders Badge Block ────────────────────── */}
      <div className="relative bg-[#0A0F1A] border-b border-slate-800/60">
        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 px-3 py-1.5 border"
                style={{
                  borderColor: "rgba(25,118,210,0.35)",
                  backgroundColor: "rgba(25,118,210,0.08)",
                }}
              >
                <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "#1976D2" }} />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#1976D2" }}
                >
                  {t.repeatBadge}
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold text-white mb-3">
                {t.repeatLabel}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
                {t.repeatText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Country Badge Grid ───────────────────────────── */}
      <div className="relative bg-[#07090F] border-b border-slate-800/60">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.regionsLabel}
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-slate-800">
            {t.regions.map((r, idx) => (
              <div
                key={idx}
                className="relative border-r border-b border-slate-800 bg-slate-950/30 p-6 hover:bg-slate-900/40 transition-colors"
              >
                {/* Country code badge — high-contrast, designed (replaces unreliable flag emoji) */}
                <div
                  className="inline-flex items-center justify-center mb-4 px-2.5 py-1 border"
                  style={{
                    borderColor: "rgba(25,118,210,0.45)",
                    backgroundColor: "rgba(25,118,210,0.08)",
                  }}
                >
                  <span
                    className="text-sm font-bold font-mono tracking-[0.15em]"
                    style={{ color: "#1976D2" }}
                  >
                    {r.code}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-3 tracking-wide">
                  {r.country}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {r.equipmentTypes.map((eq, eIdx) => (
                    <span
                      key={eIdx}
                      className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono border border-slate-700 text-slate-300"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Delivery Records Table ───────────────────────── */}
      <div className="relative bg-[#0A0F1A] border-b border-slate-800/60">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.recordsLabel}
            </p>
          </div>
          <p className="text-xs text-slate-600 mb-10 italic">{t.recordsNote}</p>

          <div className="overflow-x-auto border border-slate-800">
            <table className="w-full text-sm">
              <thead className="bg-slate-950/50">
                <tr className="border-b border-slate-800">
                  {[t.recordPeriod, t.recordRegion, t.recordType, t.recordNotes].map((h, i) => (
                    <th
                      key={i}
                      className="py-3 px-4 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.records.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-900 hover:bg-slate-900/30 transition-colors"
                  >
                    <td className="py-4 px-4 font-mono text-xs text-slate-400 whitespace-nowrap">
                      {row.period}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-300 whitespace-nowrap">
                      {row.region}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-300 whitespace-nowrap">
                      {row.type}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-400 leading-relaxed">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Named Customers + CTA ────────────────────────── */}
      <div className="relative bg-[#07090F]">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.customersLabel}
            </p>
          </div>

          <div className="mb-12 flex flex-wrap items-center gap-2">
            {t.customersList.map((c, idx) => (
              <span
                key={idx}
                className="inline-flex items-center border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm font-semibold text-slate-200"
              >
                {c}
              </span>
            ))}
            <span className="inline-flex items-center border border-slate-800 bg-slate-950/50 px-4 py-2 text-xs text-slate-400 italic">
              {t.customersNote}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-800">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-[#0D47A1]"
              style={{ backgroundColor: "#1976D2" }}
            >
              {t.contactCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 border border-slate-600 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
            >
              {t.productsCta}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
