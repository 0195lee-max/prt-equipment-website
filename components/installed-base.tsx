"use client"

import { useState, type CSSProperties } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    meta: "Installed Base",
    title: "Production-Proven",
    titleAccent: "in Asia",
    description: (
      <>
        PRT 시스템은 이미 아시아 전역의 양산 현장에서 가동 중입니다.
        <br className="hidden md:block" />{" "}
        실제 양산 라인에서의 운영 이력은 장비의 안정성과 반복 성능을 보여줍니다.
      </>
    ),
    kpiHeading: "Field Record",
    kpis: [
      { title: "100+", sub: "Installed Systems" },
      { title: "5", sub: "Asia Markets" },
      { title: "2", sub: "Core Process Areas" },
      { title: "Re‑selected", sub: "By Customers" },
    ],
    repeatBadge: "Repeat Orders",
    repeatLabel: "Validated by Returning Customers",
    repeatText: (
      <>
        다수의 PRT 고객사가 라인 증설 또는 신규 라인 구축 시 PRT 장비를 재선정해왔습니다.
        <br className="hidden md:block" />{" "}
        재주문은 현장 성능을 <span className="whitespace-nowrap">가장 직접적으로</span> 입증합니다.
      </>
    ),
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
      "고객사명은 보안상 비공개를 원칙으로 하며, 구체적인 레퍼런스는 요청 시 제공 가능합니다.",
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
    customersLabel: "Selected Customer References",
    customersBody:
      "공개 가능한 고객사 레퍼런스는 요청 및 확인 절차 후 제공됩니다.",
    customerTags: ["Leadframe 제조사", "Packaging 고객사", "재주문 이력"],
    contactCta: "Request References",
    productsCta: "View Equipment",
  },
  en: {
    meta: "Installed Base",
    title: "Production-Proven",
    titleAccent: "in Asia",
    description: (
      <>
        PRT systems are already running in production environments across Asia.
        <br className="hidden md:block" />{" "}
        Operating history in real production lines demonstrates equipment stability and repeatable
        performance.
      </>
    ),
    kpiHeading: "Field Record",
    kpis: [
      { title: "100+", sub: "Installed Systems" },
      { title: "5", sub: "Asia Markets" },
      { title: "2", sub: "Core Process Areas" },
      { title: "Re‑selected", sub: "By Customers" },
    ],
    repeatBadge: "Repeat Orders",
    repeatLabel: "Validated by Returning Customers",
    repeatText: (
      <>
        Multiple PRT customers have re-selected PRT equipment when expanding lines or building new
        ones.
        <br className="hidden md:block" />{" "}
        <span className="whitespace-nowrap">Repeat orders</span> are the most direct validation of
        field performance.
      </>
    ),
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
      "Customer names are generally withheld for confidentiality. Detailed references may be provided upon request.",
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
    customersLabel: "Selected Customer References",
    customersBody:
      "Approved customer references may be shared after request and confirmation.",
    customerTags: ["Leadframe Manufacturers", "Packaging Customers", "Repeat Orders"],
    contactCta: "Request References",
    productsCta: "View Equipment",
  },
  zh: {
    meta: "Installed Base",
    title: "Production-Proven",
    titleAccent: "in Asia",
    description: (
      <>
        PRT 系统已在亚洲各地的量产环境中运行。
        <br className="hidden md:block" />
        实际量产线中的运行记录体现了设备的稳定性和重复性能。
      </>
    ),
    kpiHeading: "Field Record",
    kpis: [
      { title: "100+", sub: "Installed Systems" },
      { title: "5", sub: "Asia Markets" },
      { title: "2", sub: "Core Process Areas" },
      { title: "Re‑selected", sub: "By Customers" },
    ],
    repeatBadge: "Repeat Orders",
    repeatLabel: "Validated by Returning Customers",
    repeatText: (
      <>
        多家 PRT 客户在扩建产线或建设新产线时再次选择了 PRT 设备。
        <br className="hidden md:block" />
        重复订单是现场性能最直接的验证。
      </>
    ),
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
      "出于保密考虑，客户名称原则上不公开；可应要求提供具体参考案例。",
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
    customersLabel: "Selected Customer References",
    customersBody:
      "可公开的客户参考案例将在申请与确认后提供。",
    customerTags: ["Leadframe 制造商", "封装客户", "重复订单"],
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
        {/* Background photo — kept very subdued: strong blur + reduced
            brightness/saturation so only the production-floor silhouette is
            recognizable, never a featured photo. scale-105 hides blurred edges. */}
        <Image
          src="/images/installed-base-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover opacity-70"
          style={{ filter: "blur(4px) brightness(0.7) saturate(0.8)" }}
          aria-hidden="true"
        />
        {/* Strong dark navy overlay for legibility — keeps the image recessed
            while leaving the production-floor silhouette faintly recognizable. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,9,15,0.55) 0%, rgba(7,9,15,0.69) 55%, rgba(7,9,15,0.92) 100%)",
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
          <div data-reveal="label" className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.meta}
            </p>
          </div>
          <h1 data-reveal="heading" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[56px] leading-[1.05] mb-6 max-w-3xl">
            {t.title}{" "}
            <span style={{ color: "#1976D2" }}>{t.titleAccent}</span>.
          </h1>
          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="max-w-2xl text-base leading-relaxed text-slate-400"
          >
            {t.description}
          </p>
        </div>
      </div>

      {/* ── KPI Strip ────────────────────────────────────── */}
      <div className="relative bg-[#07090F] border-b border-slate-800/60">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div
            data-reveal="label"
            style={{ "--reveal-delay": "200ms" } as CSSProperties}
            className="py-5 flex items-center gap-3 border-b border-slate-900"
          >
            <div className="h-px w-6" style={{ backgroundColor: "rgba(25,118,210,0.5)" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.kpiHeading}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {t.kpis.map((kpi, idx) => (
              <div
                key={idx}
                data-reveal="ui"
                style={{ "--reveal-delay": `${260 + idx * 60}ms` } as CSSProperties}
                className={`py-10 px-2 sm:px-6 ${
                  idx > 0 ? "border-l border-slate-900" : ""
                } ${idx === 2 ? "border-l-0 md:border-l" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className="mb-3 block h-0.5 w-6"
                  style={{ backgroundColor: "#1976D2" }}
                />
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-none tracking-tight text-white tabular-nums">
                  {kpi.title}
                </p>
                {kpi.sub && (
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-wider leading-relaxed text-slate-400">{kpi.sub}</p>
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
                {/* Country code as a small technical label (no flag / emoji) —
                    muted, PRT-blue accent, consistent with the premium B2B tone. */}
                <span
                  className="mb-4 inline-flex items-center border border-slate-700/70 px-2 py-0.5 text-[10px] font-semibold tracking-[0.2em] text-slate-400"
                >
                  {r.code}
                </span>
                <h3 className="text-base font-bold text-white mb-3 tracking-wide">
                  {r.country}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {r.equipmentTypes.map((eq, eIdx) => (
                    <span
                      key={eIdx}
                      className="inline-flex items-center rounded-[3px] border border-slate-700/60 px-2 py-0.5 text-[11px] font-medium tracking-wide text-slate-400"
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
              {t.recordsLabel}
            </p>
          </div>
          <p className="mb-10 text-sm leading-relaxed text-slate-400">{t.recordsNote}</p>

          <div className="overflow-x-auto border border-slate-800">
            <table className="w-full text-sm">
              <thead className="bg-slate-950/60">
                <tr className="border-b border-slate-700/70">
                  {[t.recordPeriod, t.recordRegion, t.recordType, t.recordNotes].map((h, i) => (
                    <th
                      key={i}
                      className="py-3.5 px-4 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400"
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
                    className="border-b border-slate-800 hover:bg-slate-900/40 transition-colors"
                  >
                    <td className="py-4 px-4 text-[13px] font-semibold text-slate-100 whitespace-nowrap">
                      {row.period}
                    </td>
                    <td className="py-4 px-4 text-[13px] text-slate-300 whitespace-nowrap">
                      {row.region}
                    </td>
                    <td className="py-4 px-4 text-[13px] font-medium whitespace-nowrap" style={{ color: "#6ea8de" }}>
                      {row.type}
                    </td>
                    <td className="py-4 px-4 text-[13px] leading-relaxed text-slate-300">
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

          {/* Conservative reference message (no public customer names for now) +
              non-name category pills so the section is not empty. The Request
              References CTA below is the action to obtain details. */}
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-400">
            {t.customersBody}
          </p>
          <div className="mb-10 flex flex-wrap gap-2">
            {t.customerTags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center border border-slate-800 bg-slate-900/30 px-3 py-1.5 text-xs font-medium text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-800">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-[#0D47A1]"
              style={{ backgroundColor: "#1976D2" }}
            >
              {t.contactCta}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 border border-slate-600 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-slate-300 hover:border-slate-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              {t.productsCta}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
