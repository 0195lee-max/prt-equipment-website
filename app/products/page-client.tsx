"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"

const translations = {
  ko: {
    pageLabel: "Equipment Lineup",
    title: "Roll-to-Roll Equipment",
    subtitle: "Leadframe 및 반도체 패키징 양산 공정을 위한 Roll-to-Roll Lamination · Exposure 장비",
    laminatorSection: "Laminator",
    exposureSection: "Exposure System",
    modulesSection: "Line Configuration Modules",
    modulesDesc: "메인 장비와 연동되는 라인 구성 모듈은 Web Width, 소재, 공정 조건에 따라 맞춤 설계됩니다.",
    configNote: "모든 시스템은 Web Width, 소재 사양, 처리 속도, 자동화 수준, 라인 연동 조건에 따라 맞춤 설계됩니다.",
    contactCta: "장비 상담 문의",
    specsLabel: "주요 사양",
    materialsLabel: "대응 소재",
    applicationLabel: "적용 공정",
    laminators: [
      {
        model: "PRTLA-350A-PT",
        type: "Roll-to-Roll Hot Laminator",
        desc: "Leadframe 양산용 Roll-to-Roll 드라이필름 Lamination 시스템입니다. 정밀 장력 제어와 온도 제어를 기반으로 연속 생산 환경에 최적화되어 있습니다.",
        specs: [
          { label: "Max Web Width", value: "350 mm" },
          { label: "Speed", value: "0.1–5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/cm²" },
          { label: "Lamination Type", value: "Roll-to-Roll Hot Lamination" },
          { label: "Power", value: "Max. 20 kW (220 V, 60 Hz, 3Φ)" },
          { label: "Machine Size", value: "3850(W) × 2150(D) × 2400(H) mm" },
          { label: "Weight", value: "< 2,000 kg" },
        ],
        materials: "C7025 / CDA194 / AL42",
        application: "Leadframe / Semiconductor Packaging",
      },
      {
        model: "PRTLA-300A-SA2",
        type: "Stand-alone Roll-to-Roll Laminator",
        desc: "좁은 Web Width와 유연한 공정 조건에 대응하는 독립형 Roll-to-Roll Laminator입니다. 제한된 생산 공간이나 소규모 라인 구성에 적합합니다.",
        specs: [
          { label: "Web Width Range", value: "150–330 mm" },
          { label: "Speed", value: "0.05–5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/cm²" },
          { label: "Lamination Type", value: "Stand-alone R2R Laminator" },
          { label: "Power", value: "Max. 20 kW (220 V, 60 Hz, 3Φ)" },
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
        desc: "Leadframe 패터닝 공정을 위한 Vertical Roll-to-Roll LED Exposure 시스템입니다. Vision 자동 정렬과 안정적인 UV 노광으로 고처리량 양산 환경에 대응합니다.",
        specs: [
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250–380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
      {
        model: "PRTEX-380AN-LF-LED",
        type: "Horizontal Roll-to-Roll LED Exposure System",
        desc: "Horizontal 구조의 Roll-to-Roll LED Exposure 시스템입니다. Vertical 방식과 동일한 광학·정렬 성능을 수평 레이아웃으로 제공합니다.",
        specs: [
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250–380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
    ],
    modules: [
      { title: "Unwinder / Rewinder", desc: "소재 공급과 권취를 위한 정밀 릴 시스템입니다. 안정적인 장력 제어로 연속 공정을 지원합니다." },
      { title: "Pre-Heater", desc: "Lamination 전 소재 조건을 안정화하기 위한 예열 모듈입니다." },
      { title: "Cleaning Unit", desc: "Lamination 및 Exposure 전 표면 이물 제거를 위한 웹 클리닝 모듈입니다." },
    ],
    whyLabel: "PRT 장비의 강점",
    whyPoints: [
      {
        title: "양산 검증된 설계",
        desc: "PRT 장비는 아시아 주요 고객사의 Leadframe 양산 라인에서 장기간 운용되며 생산 안정성을 검증해왔습니다.",
      },
      {
        title: "안정성 중심 엔지니어링",
        desc: "최고 속도보다 장시간 연속 운전의 안정성을 우선합니다. 온도, 장력, 이송 조건을 실제 양산 환경에 맞춰 설계합니다.",
      },
      {
        title: "라인 맞춤 설계",
        desc: "Web Width, 이송 속도, 소재, 공정 조건에 따라 장비 구성을 조정하여 고객 라인에 맞는 시스템을 제공합니다.",
      },
      {
        title: "현장 유지보수성",
        desc: "표준 산업 부품과 접근성 높은 구조를 적용해 현장 점검, 부품 교체, 유지보수가 쉽도록 설계합니다.",
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
          { label: "Speed", value: "0.1–5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/cm²" },
          { label: "Lamination Type", value: "Roll-to-Roll Hot Lamination" },
          { label: "Power", value: "Max. 20 kW (220 V, 60 Hz, 3Φ)" },
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
          { label: "Web Width Range", value: "150–330 mm" },
          { label: "Speed", value: "0.05–5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/cm²" },
          { label: "Lamination Type", value: "Stand-alone R2R Laminator" },
          { label: "Power", value: "Max. 20 kW (220 V, 60 Hz, 3Φ)" },
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
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250–380 mm" },
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
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250–380 mm" },
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
          { label: "Speed", value: "0.1–5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/cm²" },
          { label: "Lamination Type", value: "Roll-to-Roll Hot Lamination" },
          { label: "Power", value: "Max. 20 kW (220 V, 60 Hz, 3Φ)" },
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
          { label: "Web Width Range", value: "150–330 mm" },
          { label: "Speed", value: "0.05–5.0 m/min" },
          { label: "Temp Accuracy", value: "±3°C" },
          { label: "Pressure", value: "±0.1 kg/cm²" },
          { label: "Lamination Type", value: "Stand-alone R2R Laminator" },
          { label: "Power", value: "Max. 20 kW (220 V, 60 Hz, 3Φ)" },
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
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250–380 mm" },
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
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "380(W) × 550(L) mm" },
          { label: "Web Width", value: "250–380 mm" },
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

/* ─────────────────────────────────────────────────────────────
   Equipment categories + per-model anchors (UI STRUCTURE ONLY —
   all product data/specs live untouched in `translations` above).
   ───────────────────────────────────────────────────────────── */
const slug = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

type CategoryKey = "exposures" | "laminators" | "modules"

const CATEGORIES: { id: string; label: string; group: CategoryKey }[] = [
  { id: "cat-exposure", label: "Exposure Systems", group: "exposures" },
  { id: "cat-laminators", label: "Laminators", group: "laminators" },
  { id: "cat-modules", label: "Line Configuration Modules", group: "modules" },
]

// Existing repo images mapped by category (fallback).
const CATEGORY_IMAGE: Record<string, string> = {
  exposures: "/images/product-exposure.jpg",
  laminators: "/images/product-laminator.jpg",
}

// Per-model real product images (override the category fallback).
const MODEL_IMAGE: Record<string, string> = {
  "PRTEX-380VAN-LF-LED": "/images/equipment_exposure111.png",
}

interface SpecRow {
  label: string
  value: string
}
interface Model {
  model: string
  type: string
  desc: string
  specs: SpecRow[]
  materials: string
  application: string
}

/* Wide product showcase: info on top, large full-width image below
   (object-contain preserves the full machine, square edges, solid dark
   surface — no card frame, no brackets, no glow). */
/* Wide product showcase — LIGHT CATALOG (preview revision).
   Order: (1) model intro, (2) large product image, (3) info/specs/CTA.
   Square edges, thin dividers, no border-heavy/rounded image card,
   no gradient/glow/HUD/brackets. #1976D2 used as restrained accent. */
function ModelShowcase({
  model,
  categoryLabel,
  image,
  labels,
  imageAspectClass = "aspect-[16/9]",
}: {
  model: Model
  categoryLabel: string
  image?: string
  labels: { specsLabel: string; materialsLabel: string; applicationLabel: string; contactCta: string }
  imageAspectClass?: string
}) {
  return (
    <section id={`model-${slug(model.model)}`} data-anchor className="border-t border-neutral-200 py-12 first:border-t-0 first:pt-4">
      {/* 1. Model intro */}
      <div className="max-w-3xl">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#1976D2" }}>
          {categoryLabel}
        </p>
        <p className="text-sm font-semibold tracking-widest text-neutral-500">{model.model}</p>
        <h3 className="mt-1 text-2xl font-bold tracking-tight text-neutral-900">{model.type}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{model.desc}</p>
      </div>

      {/* 2. Large product image — main product visual, sits close to the
          intro (small gap). Height-capped + object-contain so the whole
          machine stays comfortably visible without bottom-of-viewport
          cutoff. Borderless: no card/rounded/gradient/glow. */}
      <div className={`relative mt-4 w-full ${imageAspectClass}`}>
        {image ? (
            <Image
              src={image}
              alt={`${model.model} — ${model.type}`}
              fill
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-contain"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-semibold text-neutral-400">{model.model}</span>
            </div>
          )}
      </div>

      {/* 3. Product information / key specifications / CTA */}
      <div className="mt-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">{labels.specsLabel}</p>
        <div className="mb-6 divide-y divide-neutral-200 border-t border-neutral-200">
          {model.specs.map((spec, i) => (
            <div key={i} className="flex items-baseline justify-between gap-4 py-2.5">
              <span className="text-xs font-medium leading-relaxed text-neutral-500">{spec.label}:</span>
              <span className="text-sm font-semibold leading-relaxed tabular-nums text-neutral-900 text-right">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="mb-6 space-y-2">
          <div className="flex items-start gap-3">
            <span className="min-w-[120px] text-xs text-neutral-500">{labels.materialsLabel}</span>
            <span className="text-xs text-neutral-800">{model.materials}</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="min-w-[120px] text-xs text-neutral-500">{labels.applicationLabel}</span>
            <span className="text-xs text-neutral-800">{model.application}</span>
          </div>
        </div>

        <a
          href="/contact"
          className="inline-flex w-fit items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#0D47A1]"
          style={{ backgroundColor: "#1976D2" }}
        >
          {labels.contactCta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

/* Compact module entry — LIGHT (not a full equipment model). */
function ModuleCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div id={`module-${slug(title)}`} data-anchor className="border border-neutral-200 bg-white p-5">
      <h4 className="mb-2 text-sm font-semibold text-neutral-900">{title}</h4>
      <p className="text-xs leading-relaxed text-neutral-600">{desc}</p>
    </div>
  )
}

export default function ProductsPage() {
  const [lang, setLang] = useLanguage()
  const t = translations[lang]
  const [activeCat, setActiveCat] = useState("cat-exposure")

  // Deep-link: open the category from the URL hash (the navbar submenu
  // links to /products#cat-laminators) and react to in-page hash changes.
  useEffect(() => {
    const apply = () => {
      const h = window.location.hash.replace("#", "")
      if (CATEGORIES.some((c) => c.id === h)) setActiveCat(h)
    }
    apply()
    window.addEventListener("hashchange", apply)
    return () => window.removeEventListener("hashchange", apply)
  }, [])

  const active = CATEGORIES.find((c) => c.id === activeCat) ?? CATEGORIES[0]
  const labels = {
    specsLabel: t.specsLabel,
    materialsLabel: t.materialsLabel,
    applicationLabel: t.applicationLabel,
    contactCta: t.contactCta,
  }

  const jumpTargets: { id: string; label: string }[] =
    active.group === "modules"
      ? t.modules.map((m) => ({ id: `module-${slug(m.title)}`, label: m.title }))
      : (active.group === "exposures" ? t.exposures : t.laminators).map((m) => ({
          id: `model-${slug(m.model)}`,
          label: m.model,
        }))

  return (
    // Full light catalog page; the navbar uses its light theme so it no
    // longer needs a dark band behind it.
    <main className="min-h-svh bg-neutral-100">
      <Navbar lang={lang} setLang={setLang} theme="light" />

      <div className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">{t.pageLabel}</p>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">{t.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">{t.subtitle}</p>
          </div>

          {/* Category tabs */}
          <div role="tablist" aria-label="Equipment categories" className="mb-8 flex flex-wrap gap-1 border-b border-neutral-200">
            {CATEGORIES.map((c) => {
              const isActive = c.id === active.id
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCat(c.id)
                    if (typeof window !== "undefined") history.replaceState(null, "", `#${c.id}`)
                  }}
                  className={`-mb-px border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? "text-neutral-900" : "border-transparent text-neutral-500 hover:text-neutral-800"
                  }`}
                  style={isActive ? { borderColor: "#1976D2" } : undefined}
                >
                  {c.label}
                </button>
              )
            })}
          </div>

          {/* Model jump buttons (active category) */}
          <div className="mb-4 flex flex-wrap gap-2">
            {jumpTargets.map((jt) => (
              <a
                key={jt.id}
                href={`#${jt.id}`}
                className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-500 hover:text-neutral-900"
              >
                {jt.label}
              </a>
            ))}
          </div>

          {/* Active category content */}
          <section id={active.id} data-anchor className="mb-20">
            {active.group === "modules" ? (
              <div className="pt-8">
                <p className="mb-8 max-w-2xl text-sm text-neutral-600">{t.modulesDesc}</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {t.modules.map((m, i) => (
                    <ModuleCard key={i} title={m.title} desc={m.desc} />
                  ))}
                </div>
              </div>
            ) : (
              (active.group === "exposures" ? t.exposures : t.laminators).map((m, i) => (
                <ModelShowcase
                  key={i}
                  model={m}
                  categoryLabel={active.label}
                  image={MODEL_IMAGE[m.model] ?? CATEGORY_IMAGE[active.group]}
                  imageAspectClass={MODEL_IMAGE[m.model] ? "aspect-[1648/667]" : "aspect-[16/9]"}
                  labels={labels}
                />
              ))
            )}
          </section>

          {/* Why PRT Equipment (existing content, preserved) */}
          <div className="mb-20 border border-neutral-200 bg-white">
            <div className="px-8 py-10">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{t.whyLabel}</p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {t.whyPoints.map((pt, idx) => (
                  <div key={idx} className="border-l-2 pl-5" style={{ borderColor: "#1976D2" }}>
                    <h3 className="mb-2 text-sm font-semibold text-neutral-900">{pt.title}</h3>
                    <p className="text-xs leading-relaxed text-neutral-600">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Config note (existing content, preserved) */}
          <div className="border border-neutral-200 bg-white p-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-600">{t.configNote}</p>
            <a href="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0D47A1]" style={{ backgroundColor: "#1976D2" }}>
              {t.contactCta}
            </a>
          </div>
        </div>
      </div>

      <Footer lang={lang} />
    </main>
  )
}
