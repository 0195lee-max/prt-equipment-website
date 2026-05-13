"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    pageLabel: "Equipment Lineup",
    title: "Roll-to-Roll Equipment",
    subtitle: "Leadframe 및 반도체 패키징 양산 라인을 위한 Roll-to-Roll Laminator · Exposure 시스템",
    laminatorSection: "Laminator",
    exposureSection: "Exposure System",
    modulesSection: "Line Configuration Modules",
    modulesDesc: "메인 장비와 통합되는 라인 구성 시스템. Web Width · 소재 · 공정 요구사항에 따라 설계됩니다.",
    configNote: "모든 시스템은 Web Width · Material Spec · Throughput · Automation Level · Line Integration 요구사항에 따라 맞춤 설계됩니다.",
    contactCta: "Contact Sales",
    specsLabel: "Specifications",
    materialsLabel: "Compatible Materials",
    applicationLabel: "Application",
    laminators: [
      {
        model: "PRTLA-350A-PT",
        type: "Roll-to-Roll Hot Laminator",
        desc: "Leadframe 양산용 Roll-to-Roll 드라이필름 Lamination 시스템. 서보 기반 장력 제어와 정밀 온도 제어로 연속 양산 환경에 최적화.",
        specs: [
          { label: "Max Web Width", value: "350 mm" },
          { label: "Speed", value: "0.1 ~ 5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/㎠" },
          { label: "Lamination Type", value: "Roll-to-Roll Hot Lamination" },
          { label: "Power", value: "Max. 20kW (220V, 60Hz, 3Φ)" },
          { label: "Machine Size", value: "3850(W) × 2150(D) × 2400(H) mm" },
          { label: "Weight", value: "< 2,000 kg" },
        ],
        materials: "C7025 / CDA194 / AL42",
        application: "Leadframe / Semiconductor Packaging",
      },
      {
        model: "PRTLA-300A-SA2",
        type: "Stand-alone Roll-to-Roll Laminator",
        desc: "독립형 Roll-to-Roll Laminator. 좁은 Web Width와 유연한 공정 환경에 대응하는 컴팩트 Lamination 시스템.",
        specs: [
          { label: "Web Width Range", value: "150 ~ 330 mm" },
          { label: "Speed", value: "0.05 ~ 5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/㎠" },
          { label: "Lamination Type", value: "Stand-alone R2R Laminator" },
          { label: "Power", value: "Max. 20kW (220V, 60Hz, 3Φ)" },
          { label: "Machine Size", value: "4100(W) × 1700(D) × 2600(H) mm" },
          { label: "Weight", value: "< 2,000 kg" },
        ],
        materials: "C7025 / CDA194 / AL42",
        application: "Leadframe / Semiconductor Packaging",
      },
    ],
    exposures: [
      {
        model: "PRTEX-380VAN-LF-LED",
        type: "Vertical Roll-to-Roll LED Exposure System",
        desc: "Leadframe 패턴 형성을 위한 Vertical Roll-to-Roll LED Exposure 시스템. 8CCD Vision 자동 정렬과 12초 Tact Time으로 고처리량 양산 환경에 대응.",
        specs: [
          { label: "Resolution", value: "20μm ±2μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250 ~ 380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
      {
        model: "PRTEX-380AN-LF-LED",
        type: "Horizontal Roll-to-Roll LED Exposure System",
        desc: "Horizontal 형 Roll-to-Roll LED Exposure 시스템. Vertical 방식과 동일한 광학·정렬 성능을 수평 레이아웃으로 제공.",
        specs: [
          { label: "Resolution", value: "20μm ±2μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250 ~ 380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
    ],
    modules: [
      { title: "Unwinder / Rewinder", desc: "소재 공급 및 수취를 위한 고정밀 릴 시스템. 일정 장력 제어." },
      { title: "Pre-Heater", desc: "최적 Lamination을 위한 소재 예열 시스템." },
      { title: "Cleaning Unit", desc: "Lamination · Exposure 전 표면 이물질 제거를 위한 웹 클리닝 시스템." },
    ],
    whyLabel: "Why PRT Equipment?",
    whyPoints: [
      {
        title: "Production-Proven Design",
        desc: "PRT 장비는 Leadframe 양산 라인에서 수년간 연속 가동된 이력을 가지고 있습니다. 사양서의 이론값이 아닌, 실제 현장 가동 실적으로 증명합니다.",
      },
      {
        title: "Stability-First Engineering",
        desc: "최고 성능 수치를 내세우기보다, 양산 환경의 온도 변화·소재 편차·장시간 가동에서도 일관되게 작동하는 장비를 목표로 설계합니다.",
      },
      {
        title: "Engineered to Your Line",
        desc: "Web Width, 이송 속도, 공정 구성은 고객의 라인 조건에 맞게 설계됩니다. 표준 장비에 옵션을 끼워 맞추는 방식이 아닙니다.",
      },
      {
        title: "Easy Field Maintenance",
        desc: "글로벌 공급 가능한 표준 산업용 부품과 직관적인 구조 설계로, 현장 엔지니어가 특수 공구 없이 점검·교체할 수 있습니다.",
      },
    ],
  },
  en: {
    pageLabel: "Equipment Lineup",
    title: "Roll-to-Roll Equipment",
    subtitle: "Production-proven Roll-to-Roll laminator and exposure systems for Leadframe and Semiconductor Packaging manufacturing lines.",
    laminatorSection: "Laminator",
    exposureSection: "Exposure System",
    modulesSection: "Line Configuration Modules",
    modulesDesc: "Line configuration systems integrated with main production equipment. Engineered to match web width, material, and process requirements.",
    configNote: "All systems are configured based on Web Width · Material Spec · Throughput · Automation Level · Line Integration requirements.",
    contactCta: "Contact Sales",
    specsLabel: "Specifications",
    materialsLabel: "Compatible Materials",
    applicationLabel: "Application",
    laminators: [
      {
        model: "PRTLA-350A-PT",
        type: "Roll-to-Roll Hot Laminator",
        desc: "Roll-to-Roll dry film lamination system for Leadframe mass production. Optimized for continuous production with servo-based tension control and precision temperature management.",
        specs: [
          { label: "Max Web Width", value: "350 mm" },
          { label: "Speed", value: "0.1 ~ 5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/㎠" },
          { label: "Lamination Type", value: "Roll-to-Roll Hot Lamination" },
          { label: "Power", value: "Max. 20kW (220V, 60Hz, 3Φ)" },
          { label: "Machine Size", value: "3850(W) × 2150(D) × 2400(H) mm" },
          { label: "Weight", value: "< 2,000 kg" },
        ],
        materials: "C7025 / CDA194 / AL42",
        application: "Leadframe / Semiconductor Packaging",
      },
      {
        model: "PRTLA-300A-SA2",
        type: "Stand-alone Roll-to-Roll Laminator",
        desc: "Compact stand-alone Roll-to-Roll laminator for narrower web widths and flexible process environments.",
        specs: [
          { label: "Web Width Range", value: "150 ~ 330 mm" },
          { label: "Speed", value: "0.05 ~ 5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/㎠" },
          { label: "Lamination Type", value: "Stand-alone R2R Laminator" },
          { label: "Power", value: "Max. 20kW (220V, 60Hz, 3Φ)" },
          { label: "Machine Size", value: "4100(W) × 1700(D) × 2600(H) mm" },
          { label: "Weight", value: "< 2,000 kg" },
        ],
        materials: "C7025 / CDA194 / AL42",
        application: "Leadframe / Semiconductor Packaging",
      },
    ],
    exposures: [
      {
        model: "PRTEX-380VAN-LF-LED",
        type: "Vertical Roll-to-Roll LED Exposure System",
        desc: "Vertical Roll-to-Roll LED exposure system for Leadframe patterning. 8CCD vision auto-alignment and 12-second tact time for high-throughput production environments.",
        specs: [
          { label: "Resolution", value: "20μm ±2μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250 ~ 380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
      {
        model: "PRTEX-380AN-LF-LED",
        type: "Horizontal Roll-to-Roll LED Exposure System",
        desc: "Horizontal Roll-to-Roll LED exposure system. Delivers identical optical and alignment performance as the vertical configuration in a horizontal layout.",
        specs: [
          { label: "Resolution", value: "20μm ±2μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250 ~ 380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
    ],
    modules: [
      { title: "Unwinder / Rewinder", desc: "High-precision reel system for material supply and take-up with stable tension control." },
      { title: "Pre-Heater", desc: "Material preheating system for optimal lamination process conditions." },
      { title: "Cleaning Unit", desc: "Web cleaning system for surface particle removal before lamination and exposure." },
    ],
    whyLabel: "Why PRT Equipment?",
    whyPoints: [
      {
        title: "Production-Proven Design",
        desc: "PRT equipment has a track record of continuous operation in Leadframe mass production lines over multiple years. Capability is demonstrated through operating history, not datasheet numbers.",
      },
      {
        title: "Stability-First Engineering",
        desc: "Rather than maximizing peak performance figures, PRT designs for consistent operation under real production conditions — temperature variation, material variance, and extended continuous running.",
      },
      {
        title: "Engineered to Your Line",
        desc: "Web width, transport speed, and process configuration are designed to match your specific line requirements — not a standard product with optional add-ons forced to fit.",
      },
      {
        title: "Maintainable by Design",
        desc: "Globally available standard industrial components and straightforward mechanical design allow on-site engineers to inspect and replace parts without special tooling.",
      },
    ],
  },
  zh: {
    pageLabel: "Equipment Lineup",
    title: "Roll-to-Roll Equipment",
    subtitle: "面向 Leadframe 及半导体封装量产线的 Roll-to-Roll Laminator 与 Exposure 系统。",
    laminatorSection: "Laminator",
    exposureSection: "Exposure System",
    modulesSection: "Line Configuration Modules",
    modulesDesc: "与主生产设备集成的生产线配置系统。根据 Web Width、材料和工艺要求进行设计。",
    configNote: "所有系统均根据 Web Width · Material Spec · Throughput · Automation Level · Line Integration 要求进行定制配置。",
    contactCta: "Contact Sales",
    specsLabel: "Specifications",
    materialsLabel: "Compatible Materials",
    applicationLabel: "Application",
    laminators: [
      {
        model: "PRTLA-350A-PT",
        type: "Roll-to-Roll Hot Laminator",
        desc: "面向 Leadframe 量产的 Roll-to-Roll 干膜 Lamination 系统。基于伺服张力控制和精密温度管理，针对连续生产进行了优化。",
        specs: [
          { label: "Max Web Width", value: "350 mm" },
          { label: "Speed", value: "0.1 ~ 5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/㎠" },
          { label: "Lamination Type", value: "Roll-to-Roll Hot Lamination" },
          { label: "Power", value: "Max. 20kW (220V, 60Hz, 3Φ)" },
          { label: "Machine Size", value: "3850(W) × 2150(D) × 2400(H) mm" },
          { label: "Weight", value: "< 2,000 kg" },
        ],
        materials: "C7025 / CDA194 / AL42",
        application: "Leadframe / Semiconductor Packaging",
      },
      {
        model: "PRTLA-300A-SA2",
        type: "Stand-alone Roll-to-Roll Laminator",
        desc: "适用于较窄 Web Width 和灵活工艺环境的紧凑型独立式 Roll-to-Roll Laminator。",
        specs: [
          { label: "Web Width Range", value: "150 ~ 330 mm" },
          { label: "Speed", value: "0.05 ~ 5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/㎠" },
          { label: "Lamination Type", value: "Stand-alone R2R Laminator" },
          { label: "Power", value: "Max. 20kW (220V, 60Hz, 3Φ)" },
          { label: "Machine Size", value: "4100(W) × 1700(D) × 2600(H) mm" },
          { label: "Weight", value: "< 2,000 kg" },
        ],
        materials: "C7025 / CDA194 / AL42",
        application: "Leadframe / Semiconductor Packaging",
      },
    ],
    exposures: [
      {
        model: "PRTEX-380VAN-LF-LED",
        type: "Vertical Roll-to-Roll LED Exposure System",
        desc: "用于 Leadframe 图案形成的 Vertical Roll-to-Roll LED Exposure 系统。8CCD Vision 自动对准和 12 秒 Tact Time，适用于高产量生产环境。",
        specs: [
          { label: "Resolution", value: "20μm ±2μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250 ~ 380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
      {
        model: "PRTEX-380AN-LF-LED",
        type: "Horizontal Roll-to-Roll LED Exposure System",
        desc: "Horizontal 型 Roll-to-Roll LED Exposure 系统。以水平布局提供与 Vertical 型相同的光学和对准性能。",
        specs: [
          { label: "Resolution", value: "20μm ±2μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250 ~ 380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
    ],
    modules: [
      { title: "Unwinder / Rewinder", desc: "具有稳定张力控制的高精度卷轴系统，用于材料供应和收取。" },
      { title: "Pre-Heater", desc: "用于最佳 Lamination 工艺条件的材料预热系统。" },
      { title: "Cleaning Unit", desc: "Lamination 与 Exposure 前表面颗粒去除的卷材清洁系统。" },
    ],
    whyLabel: "Why PRT Equipment?",
    whyPoints: [
      {
        title: "Production-Proven Design",
        desc: "PRT 设备在 Leadframe 量产线上拥有多年连续运行的记录。能力通过运行历史来证明，而非数据表上的数字。",
      },
      {
        title: "Stability-First Engineering",
        desc: "PRT 的设计目标不是追求峰值性能数字，而是在真实量产条件下 — 温度变化、材料偏差、长时间连续运行 — 保持一致的运行。",
      },
      {
        title: "Engineered to Your Line",
        desc: "Web Width、传输速度和工艺配置按照您的具体生产线条件设计，而非强行将选配件配合标准产品。",
      },
      {
        title: "Easy Field Maintenance",
        desc: "全球可供应的标准工业部件和简洁的机械结构设计，使现场工程师无需专用工具即可检查和更换部件。",
      },
    ],
  },
}

function ProductCard({
  model,
  type,
  desc,
  specs,
  materials,
  application,
  specsLabel,
  materialsLabel,
  applicationLabel,
  contactCta,
}: {
  model: string
  type: string
  desc: string
  specs: { label: string; value: string }[]
  materials: string
  application: string
  specsLabel: string
  materialsLabel: string
  applicationLabel: string
  contactCta: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800/60 to-slate-900/60 transition-all hover:border-slate-600">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(199,168,109,0.5), transparent)" }}
      />
      <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-slate-600/40" />
      <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-slate-600/40" />
      <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-slate-600/40" />
      <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-slate-600/40" />

      {/* Image-ready placeholder — swap to /public/images/equipment/{model}.jpg */}
      <div className="relative aspect-[16/9] bg-gradient-to-br from-[#0F1A2E] via-[#0B1220] to-[#060912] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(199,168,109,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,168,109,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(199,168,109,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Corner brackets */}
        <div
          className="absolute top-4 left-4 h-3 w-3 border-l border-t"
          style={{ borderColor: "rgba(199,168,109,0.35)" }}
        />
        <div
          className="absolute top-4 right-4 h-3 w-3 border-r border-t"
          style={{ borderColor: "rgba(199,168,109,0.35)" }}
        />
        <div
          className="absolute bottom-4 left-4 h-3 w-3 border-l border-b"
          style={{ borderColor: "rgba(199,168,109,0.35)" }}
        />
        <div
          className="absolute bottom-4 right-4 h-3 w-3 border-r border-b"
          style={{ borderColor: "rgba(199,168,109,0.35)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-8">
            <p className="text-[9px] font-mono text-slate-600 mb-2 tracking-[0.3em]">
              {type.toUpperCase()}
            </p>
            <p className="text-base font-semibold text-slate-400">{model}</p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-7">
        <div className="mb-1 flex items-center gap-2">
          <span
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: "#C7A86D" }}
          >
            {model}
          </span>
        </div>
        <h3 className="mb-3 text-lg font-semibold text-white">{type}</h3>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">{desc}</p>

        {/* Spec table */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {specsLabel}
        </p>
        <div className="mb-5 divide-y divide-slate-800">
          {specs.map((spec, idx) => (
            <div key={idx} className="flex items-center justify-between py-2">
              <span className="text-xs text-slate-400">{spec.label}</span>
              <span className="text-xs font-mono text-slate-300">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Materials & Application */}
        <div className="mb-5 space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-xs text-slate-600 min-w-[110px]">{materialsLabel}</span>
            <span className="text-xs text-slate-400">{materials}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xs text-slate-600 min-w-[110px]">{applicationLabel}</span>
            <span className="text-xs text-slate-400">{application}</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 px-5 py-2.5 rounded transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#C7A86D" }}
        >
          {contactCta}
        </a>
      </div>
    </div>
  )
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <div className="h-px flex-1 bg-slate-800" />
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</h2>
      <div className="h-px flex-1 bg-slate-800" />
    </div>
  )
}

export default function ProductsPage() {
  const [lang, setLang] = useState<Language>("en")
  const t = translations[lang]

  return (
    <main className="min-h-svh bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />

      <div className="relative min-h-svh bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.4)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-20 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              {t.pageLabel}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
              {t.subtitle}
            </p>
          </div>

          {/* Why PRT Equipment */}
          <div className="mb-20 relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/40">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(199,168,109,0.4), transparent)" }}
            />
            <div className="px-8 py-10">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {t.whyLabel}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {t.whyPoints.map((pt, idx) => (
                  <div key={idx} className="border-l-2 pl-5" style={{ borderColor: "rgba(199,168,109,0.25)" }}>
                    <h3 className="text-sm font-semibold text-slate-200 mb-2">{pt.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Laminators */}
          <div className="mb-20">
            <SectionDivider label={t.laminatorSection} />
            <div className="grid gap-6 lg:grid-cols-2">
              {t.laminators.map((product, idx) => (
                <ProductCard
                  key={idx}
                  {...product}
                  specsLabel={t.specsLabel}
                  materialsLabel={t.materialsLabel}
                  applicationLabel={t.applicationLabel}
                  contactCta={t.contactCta}
                />
              ))}
            </div>
          </div>

          {/* Exposure Systems */}
          <div className="mb-20">
            <SectionDivider label={t.exposureSection} />
            <div className="grid gap-6 lg:grid-cols-2">
              {t.exposures.map((product, idx) => (
                <ProductCard
                  key={idx}
                  {...product}
                  specsLabel={t.specsLabel}
                  materialsLabel={t.materialsLabel}
                  applicationLabel={t.applicationLabel}
                  contactCta={t.contactCta}
                />
              ))}
            </div>
          </div>

          {/* Line modules */}
          <div className="mb-16">
            <SectionDivider label={t.modulesSection} />
            <p className="mb-10 text-center text-sm text-slate-400">{t.modulesDesc}</p>
            <div className="grid gap-5 sm:grid-cols-3">
              {t.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="relative rounded-lg border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(to right, transparent, rgba(199,168,109,0.2), transparent)" }}
                  />
                  <h4 className="mb-2 text-sm font-semibold text-slate-200">{mod.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-400">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Config note */}
          <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/30 p-8 text-center">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(199,168,109,0.3), transparent)" }}
            />
            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">{t.configNote}</p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 px-6 py-3 rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C7A86D" }}
            >
              {t.contactCta}
            </a>
          </div>
        </div>
      </div>

      <Footer lang={lang} />
    </main>
  )
}
