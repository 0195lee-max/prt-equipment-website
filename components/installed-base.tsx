"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    meta: "납품 실적",
    title: "PRT 장비는\n실제 양산 현장에서 가동 중입니다.",
    description:
      "사양서가 아닌, 실제 가동 이력이 증거입니다. 리드프레임 및 반도체 패키징 양산 라인에 납품된 50기 이상의 PRT 시스템은 지금 이 순간도 가동 중입니다.",
    stats: [
      { value: "50+", label: "Installed Systems", sub: "Cumulative" },
      { value: "Since 2010", label: "Engineering", sub: "" },
      { value: "5+", label: "Countries", sub: "Asia Production Sites" },
    ],
    repeatOrderLabel: "반복 발주",
    repeatOrderText:
      "PRT 납품 고객사 중 다수는 첫 도입 이후 추가 라인 확대 또는 신규 라인 구축 시 PRT 장비를 재선택했습니다. 반복 발주는 장비 성능에 대한 가장 직접적인 검증입니다.",
    regionsLabel: "납품 지역",
    regions: [
      {
        country: "China",
        flag: "🇨🇳",
        desc: "중국 리드프레임 및 반도체 패키징 제조사 다수에 납품. 주요 고객사 포함.",
        equipmentTypes: ["Roll-to-Roll Laminator", "Roll-to-Roll Exposure System"],
      },
      {
        country: "Malaysia",
        flag: "🇲🇾",
        desc: "말레이시아 반도체 패키징 양산 현장에 라미네이터 및 노광 시스템 납품.",
        equipmentTypes: ["Roll-to-Roll Laminator", "Roll-to-Roll Exposure System"],
      },
      {
        country: "Taiwan",
        flag: "🇹🇼",
        desc: "대만 리드프레임 제조 환경에 Roll-to-Roll 노광 시스템 공급.",
        equipmentTypes: ["Roll-to-Roll Exposure System"],
      },
      {
        country: "Japan",
        flag: "🇯🇵",
        desc: "일본 반도체 패키징 라인에 라미네이션 시스템 납품.",
        equipmentTypes: ["Roll-to-Roll Laminator"],
      },
      {
        country: "Korea",
        flag: "🇰🇷",
        desc: "국내 리드프레임 및 패키징 제조사에 라미네이터 및 노광 시스템 납품.",
        equipmentTypes: ["Roll-to-Roll Laminator", "Roll-to-Roll Exposure System"],
      },
    ],
    recordsLabel: "납품 이력 (연도별 요약)",
    recordsNote:
      "고객사 기밀 보호를 위해 고객명은 공개하지 않습니다. 구체적인 레퍼런스는 문의 시 별도 제공합니다.",
    records: [
      { period: "2011~2013", region: "Korea", type: "Roll-to-Roll Laminator", notes: "초기 양산 라인 도입. 국내 리드프레임 제조사." },
      { period: "2014~2016", region: "Korea / China", type: "R2R Laminator + Exposure", notes: "노광 시스템 추가 공급. 중국 첫 납품." },
      { period: "2017~2019", region: "China / Taiwan", type: "R2R Exposure System", notes: "중국 대형 패키징 고객사 확대. 대만 첫 납품." },
      { period: "2020~2021", region: "China / Malaysia", type: "R2R Laminator + Exposure", notes: "말레이시아 첫 납품. 반복 발주 다수." },
      { period: "2022~2023", region: "China / Korea / Japan", type: "R2R Laminator + Exposure", notes: "일본 첫 납품. 기존 고객사 라인 증설." },
      { period: "2024~", region: "Asia-wide", type: "R2R Laminator + Exposure", notes: "차세대 고정밀 노광 시스템 공급 확대 중." },
    ],
    recordPeriod: "기간",
    recordRegion: "지역",
    recordType: "장비 유형",
    recordNotes: "비고",
    customersLabel: "주요 고객사",
    customersNote: "및 다수의 리드프레임·반도체 패키징 제조사 (기밀 유지 요청에 따라 비공개)",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    contactCta: "납품 레퍼런스 문의",
    productsCta: "장비 보기",
  },
  en: {
    meta: "Installed Base",
    title: "PRT systems are\nrunning in production sites right now.",
    description:
      "Operating history, not specification sheets, is the proof. 50+ PRT systems deployed in Leadframe and Semiconductor Packaging production lines are in active operation today.",
    stats: [
      { value: "50+", label: "Installed Systems", sub: "Cumulative" },
      { value: "Since 2010", label: "Engineering", sub: "" },
      { value: "5+", label: "Countries", sub: "Asia Production Sites" },
    ],
    repeatOrderLabel: "Repeat Orders",
    repeatOrderText:
      "A significant number of PRT customers have chosen PRT equipment again when expanding existing lines or building new ones. Repeat orders are the most direct validation of equipment performance.",
    regionsLabel: "Deployment Regions",
    regions: [
      {
        country: "China",
        flag: "🇨🇳",
        desc: "Multiple Leadframe and Semiconductor Packaging manufacturers in China. Includes named major customers.",
        equipmentTypes: ["Roll-to-Roll Laminator", "Roll-to-Roll Exposure System"],
      },
      {
        country: "Malaysia",
        flag: "🇲🇾",
        desc: "Laminator and exposure systems delivered to semiconductor packaging production sites in Malaysia.",
        equipmentTypes: ["Roll-to-Roll Laminator", "Roll-to-Roll Exposure System"],
      },
      {
        country: "Taiwan",
        flag: "🇹🇼",
        desc: "Roll-to-Roll exposure systems supplied to Leadframe manufacturing environments in Taiwan.",
        equipmentTypes: ["Roll-to-Roll Exposure System"],
      },
      {
        country: "Japan",
        flag: "🇯🇵",
        desc: "Lamination systems delivered to semiconductor packaging lines in Japan.",
        equipmentTypes: ["Roll-to-Roll Laminator"],
      },
      {
        country: "Korea",
        flag: "🇰🇷",
        desc: "Laminator and exposure systems delivered to domestic Leadframe and packaging manufacturers.",
        equipmentTypes: ["Roll-to-Roll Laminator", "Roll-to-Roll Exposure System"],
      },
    ],
    recordsLabel: "Delivery History (Annual Summary)",
    recordsNote:
      "Customer names are not disclosed to protect confidentiality. Specific references are available upon request.",
    records: [
      { period: "2011–2013", region: "Korea", type: "Roll-to-Roll Laminator", notes: "Initial mass production line adoption. Domestic Leadframe manufacturer." },
      { period: "2014–2016", region: "Korea / China", type: "R2R Laminator + Exposure", notes: "Exposure system added. First delivery to China." },
      { period: "2017–2019", region: "China / Taiwan", type: "R2R Exposure System", notes: "Major China packaging customer expansion. First delivery to Taiwan." },
      { period: "2020–2021", region: "China / Malaysia", type: "R2R Laminator + Exposure", notes: "First delivery to Malaysia. Multiple repeat orders." },
      { period: "2022–2023", region: "China / Korea / Japan", type: "R2R Laminator + Exposure", notes: "First delivery to Japan. Line expansion by existing customers." },
      { period: "2024–", region: "Asia-wide", type: "R2R Laminator + Exposure", notes: "Expanding next-generation high-precision exposure system deliveries." },
    ],
    recordPeriod: "Period",
    recordRegion: "Region",
    recordType: "Equipment Type",
    recordNotes: "Notes",
    customersLabel: "Named Customers",
    customersNote: "and additional Leadframe & Semiconductor Packaging manufacturers (confidential upon request)",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    contactCta: "Request References",
    productsCta: "View Equipment",
  },
  zh: {
    meta: "交付业绩",
    title: "PRT设备正在\n真实量产现场运行。",
    description:
      "运行历史，而非规格表，才是证明。目前已有50套以上PRT系统部署在引线框架和半导体封装量产线上并持续运行。",
    stats: [
      { value: "50+", label: "Installed Systems", sub: "Cumulative" },
      { value: "Since 2010", label: "Engineering", sub: "" },
      { value: "5+", label: "Countries", sub: "Asia Production Sites" },
    ],
    repeatOrderLabel: "重复订单",
    repeatOrderText:
      "相当数量的PRT客户在扩展现有生产线或建设新生产线时再次选择了PRT设备。重复订单是对设备性能最直接的验证。",
    regionsLabel: "交付地区",
    regions: [
      {
        country: "中国",
        flag: "🇨🇳",
        desc: "中国多家引线框架和半导体封装制造商，包括主要命名客户。",
        equipmentTypes: ["卷对卷层压机", "卷对卷曝光系统"],
      },
      {
        country: "马来西亚",
        flag: "🇲🇾",
        desc: "已向马来西亚半导体封装量产现场交付层压机和曝光系统。",
        equipmentTypes: ["卷对卷层压机", "卷对卷曝光系统"],
      },
      {
        country: "台湾",
        flag: "🇹🇼",
        desc: "已向台湾引线框架制造环境供应卷对卷曝光系统。",
        equipmentTypes: ["卷对卷曝光系统"],
      },
      {
        country: "日本",
        flag: "🇯🇵",
        desc: "已向日本半导体封装生产线交付层压系统。",
        equipmentTypes: ["卷对卷层压机"],
      },
      {
        country: "韩国",
        flag: "🇰🇷",
        desc: "已向国内引线框架和封装制造商交付层压机和曝光系统。",
        equipmentTypes: ["卷对卷层压机", "卷对卷曝光系统"],
      },
    ],
    recordsLabel: "交付记录（年度摘要）",
    recordsNote:
      "为保护客户机密，不公开客户名称。具体参考案例可应询提供。",
    records: [
      { period: "2011–2013", region: "韩国", type: "卷对卷层压机", notes: "首次量产线导入，国内引线框架制造商。" },
      { period: "2014–2016", region: "韩国/中国", type: "层压机+曝光系统", notes: "新增曝光系统，首次向中国交付。" },
      { period: "2017–2019", region: "中国/台湾", type: "卷对卷曝光系统", notes: "中国大型封装客户扩展，首次向台湾交付。" },
      { period: "2020–2021", region: "中国/马来西亚", type: "层压机+曝光系统", notes: "首次向马来西亚交付，多笔重复订单。" },
      { period: "2022–2023", region: "中国/韩国/日本", type: "层压机+曝光系统", notes: "首次向日本交付，现有客户产线扩展。" },
      { period: "2024–", region: "亚洲各地", type: "层压机+曝光系统", notes: "新一代高精度曝光系统交付持续扩大中。" },
    ],
    recordPeriod: "时期",
    recordRegion: "地区",
    recordType: "设备类型",
    recordNotes: "备注",
    customersLabel: "主要客户",
    customersNote: "及多家引线框架·半导体封装制造商（应要求保密）",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    contactCta: "申请参考案例",
    productsCta: "查看设备",
  },
}

interface InstalledBaseProps {
  lang?: Language
}

export function InstalledBase({ lang: externalLang }: InstalledBaseProps) {
  const [internalLang, setInternalLang] = useState<Language>("ko")
  const lang = externalLang ?? internalLang
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 45%, rgba(199,168,109,0.6) 45.5%, transparent 46%)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {t.meta}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight whitespace-pre-line mb-6">
            {t.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            {t.description}
          </p>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10 sm:gap-16">
            {t.stats.map((s, idx) => (
              <div key={idx}>
                <div className="text-4xl font-semibold" style={{ color: "#C7A86D" }}>{s.value}</div>
                <p className="mt-1 text-sm font-medium text-slate-300">{s.label}</p>
                {s.sub && <p className="text-xs text-slate-500">{s.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Repeat Orders ────────────────────────────────── */}
      <div className="relative bg-slate-900">
        <div className="relative mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <div className="flex gap-6 items-start">
            <div
              className="flex-shrink-0 mt-1 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider"
              style={{ backgroundColor: "rgba(199,168,109,0.12)", color: "#C7A86D", border: "1px solid rgba(199,168,109,0.25)" }}
            >
              {t.repeatOrderLabel}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
              {t.repeatOrderText}
            </p>
          </div>
        </div>
      </div>

      {/* ── Regions ──────────────────────────────────────── */}
      <div style={{ backgroundColor: "rgb(30, 41, 59)" }} className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.regionsLabel}
          </p>

          <div className="space-y-5">
            {t.regions.map((r, idx) => (
              <div
                key={idx}
                className="flex gap-5 rounded-lg border border-slate-700 bg-slate-900/50 p-5 items-start"
              >
                <div className="text-3xl flex-shrink-0 mt-0.5">{r.flag}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="text-sm font-semibold text-white">{r.country}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {r.equipmentTypes.map((eq, eIdx) => (
                        <span
                          key={eIdx}
                          className="inline-flex items-center rounded-full border border-slate-700 px-2 py-0.5 text-[10px] font-mono text-slate-500"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Delivery Records ─────────────────────────────── */}
      <div className="relative bg-slate-900">
        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.recordsLabel}
          </p>
          <p className="text-xs text-slate-600 mb-8 italic">{t.recordsNote}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  {[t.recordPeriod, t.recordRegion, t.recordType, t.recordNotes].map((h, i) => (
                    <th
                      key={i}
                      className="pb-3 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500 pr-6"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.records.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                    <td className="py-4 pr-6 font-mono text-xs text-slate-400 whitespace-nowrap">{row.period}</td>
                    <td className="py-4 pr-6 text-xs text-slate-300 whitespace-nowrap">{row.region}</td>
                    <td className="py-4 pr-6 text-xs text-slate-300 whitespace-nowrap">{row.type}</td>
                    <td className="py-4 pr-6 text-xs text-slate-500 leading-relaxed">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Named Customers ──────────────────────────────── */}
      <div className="relative bg-slate-950">
        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.customersLabel}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            {t.customersList.map((c, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full border border-slate-600 bg-slate-700/40 px-4 py-2 text-sm font-medium text-slate-300"
              >
                {c}
              </span>
            ))}
            <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2 text-sm text-slate-500">
              {t.customersNote}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-semibold text-slate-900 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C7A86D" }}
            >
              {t.contactCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
            >
              {t.productsCta}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
