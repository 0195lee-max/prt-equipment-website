"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    meta: "Installed Base",
    title: "Production-Proven",
    titleAccent: "in Asia",
    description:
      "PRT systems are already running in production environments across Asia. 50+ systems installed. Repeat orders validate field performance.",
    kpiHeading: "Field Record",
    kpis: [
      { value: "50+", label: "Installed Systems", sub: "Cumulative" },
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
        flag: "🇨🇳",
        desc: "Multiple Leadframe & Semiconductor Packaging manufacturers.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Malaysia",
        flag: "🇲🇾",
        desc: "Laminator and Exposure systems in active production.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Taiwan",
        flag: "🇹🇼",
        desc: "Roll-to-Roll Exposure systems supplied to Leadframe lines.",
        equipmentTypes: ["Exposure"],
      },
      {
        country: "Japan",
        flag: "🇯🇵",
        desc: "Lamination systems delivered to packaging lines.",
        equipmentTypes: ["Laminator"],
      },
      {
        country: "Korea",
        flag: "🇰🇷",
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
  en: {
    meta: "Installed Base",
    title: "Production-Proven",
    titleAccent: "in Asia",
    description:
      "PRT systems are already running in production environments across Asia. 50+ systems installed. Repeat orders validate field performance.",
    kpiHeading: "Field Record",
    kpis: [
      { value: "50+", label: "Installed Systems", sub: "Cumulative" },
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
        flag: "🇨🇳",
        desc: "Multiple Leadframe & Semiconductor Packaging manufacturers.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Malaysia",
        flag: "🇲🇾",
        desc: "Laminator and Exposure systems in active production.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Taiwan",
        flag: "🇹🇼",
        desc: "Roll-to-Roll Exposure systems supplied to Leadframe lines.",
        equipmentTypes: ["Exposure"],
      },
      {
        country: "Japan",
        flag: "🇯🇵",
        desc: "Lamination systems delivered to packaging lines.",
        equipmentTypes: ["Laminator"],
      },
      {
        country: "Korea",
        flag: "🇰🇷",
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
      "PRT systems are already running in production environments across Asia. 50+ systems installed. Repeat orders validate field performance.",
    kpiHeading: "Field Record",
    kpis: [
      { value: "50+", label: "Installed Systems", sub: "Cumulative" },
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
        flag: "🇨🇳",
        desc: "Multiple Leadframe & Semiconductor Packaging manufacturers.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Malaysia",
        flag: "🇲🇾",
        desc: "Laminator and Exposure systems in active production.",
        equipmentTypes: ["Laminator", "Exposure"],
      },
      {
        country: "Taiwan",
        flag: "🇹🇼",
        desc: "Roll-to-Roll Exposure systems supplied to Leadframe lines.",
        equipmentTypes: ["Exposure"],
      },
      {
        country: "Japan",
        flag: "🇯🇵",
        desc: "Lamination systems delivered to packaging lines.",
        equipmentTypes: ["Laminator"],
      },
      {
        country: "Korea",
        flag: "🇰🇷",
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
}

interface InstalledBaseProps {
  lang?: Language
}

export function InstalledBase({ lang: externalLang }: InstalledBaseProps) {
  const [internalLang] = useState<Language>("en")
  const lang = externalLang ?? internalLang
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-[#07090F]">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative bg-[#07090F] border-b border-slate-800/60">
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
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.meta}
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[56px] leading-[1.05] mb-6 max-w-3xl">
            {t.title}{" "}
            <span style={{ color: "#C7A86D" }}>{t.titleAccent}</span>.
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
            <div className="h-px w-6" style={{ backgroundColor: "rgba(199,168,109,0.5)" }} />
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
                  style={{ color: "#C7A86D" }}
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
                  borderColor: "rgba(199,168,109,0.35)",
                  backgroundColor: "rgba(199,168,109,0.08)",
                }}
              >
                <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "#C7A86D" }} />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#C7A86D" }}
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
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
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
                <div className="text-3xl mb-4">{r.flag}</div>
                <h3 className="text-sm font-bold text-white mb-3 tracking-wide">
                  {r.country}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {r.equipmentTypes.map((eq, eIdx) => (
                    <span
                      key={eIdx}
                      className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono border border-slate-800 text-slate-400"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Delivery Records Table ───────────────────────── */}
      <div className="relative bg-[#0A0F1A] border-b border-slate-800/60">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
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
                    <td className="py-4 px-4 text-xs text-slate-500 leading-relaxed">
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
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
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
            <span className="inline-flex items-center border border-slate-800 bg-slate-950/50 px-4 py-2 text-xs text-slate-500 italic">
              {t.customersNote}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-800">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-[#B89757]"
              style={{ backgroundColor: "#C7A86D" }}
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
