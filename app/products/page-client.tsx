"use client"

import { useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EquipmentImageLightbox, type LightboxImage } from "@/components/equipment-image-lightbox"
import { useLanguage, type Language } from "@/hooks/use-language"

// Laminators — language-neutral spec data (model / type / specs / materials /
// application are English in every locale, matching the Exposure entries).
// Only the short description is localized. Source: PRT laminator spec sheets.
const LAMINATOR_BASE = [
  {
    model: "PRTLA-350A-LF",
    type: "Roll-to-Roll Laminator",
    specs: [
      { label: "Material Width", value: "350 mm" },
      { label: "Material Thickness", value: "0.1 ~ 0.35 mm" },
      { label: "Laminator Roller", value: "ø100, Silicon Rubber Coating (2EA × 2Set)" },
      { label: "Heater", value: "Tube Heater (220V, 1.5kW)" },
      { label: "Temperature", value: "130°C Max" },
      { label: "Uniformity", value: "±2°C" },
      { label: "Lamination Speed", value: "0.5 ~ 5.0 m/min" },
      { label: "Temperature Range", value: "Ambient ~ 130°C" },
      { label: "Anti-Particle", value: "Clean Booth + FFU" },
      { label: "Power", value: "220V × 3P × 8kW" },
      { label: "Pneumatic Air", value: "More Than 5 kg/cm²" },
      { label: "Process", value: "Pre Treatment → Guide Roll → Clean Unit → Pre Heater → Wet Unit → DFR Chuck → Lamination → Buffer → Splice Unit → ReWinder (EPC)" },
    ],
    materials: "C7025 / CDA194 / AL42",
    application: "Leadframe / Semiconductor Packaging / VCM Spring",
    convenience: ["DFR Auto Tacking Unit", "DFR / Removal Roll Moving Type"],
  },
  {
    model: "PRTLA-500A-T",
    type: "Roll-to-Roll Laminator",
    specs: [
      { label: "Material Width", value: "500 mm" },
      { label: "Material Thickness", value: "0.05 ~ 0.3 mm" },
      { label: "Laminator Roller", value: "ø80, Silicon Rubber Coating (2EA × 1Set)" },
      { label: "Heater", value: "Tube Heater (220V, 1.5kW)" },
      { label: "Temperature", value: "130°C Max" },
      { label: "Uniformity", value: "±5°C (Option: ±2°C)" },
      { label: "Lamination Speed", value: "0.5 ~ 5.0 m/min" },
      { label: "Temperature Range", value: "Ambient ~ 130°C" },
      { label: "Anti-Particle", value: "Clean Booth + FFU" },
      { label: "Power", value: "220V × 3P × 8kW" },
      { label: "Pneumatic Air", value: "More Than 5 kg/cm²" },
      { label: "Process", value: "UnWinder → Splice Unit → Clean Unit → DFR Chuck → Lamination → Cooling Unit → ReWinder (EPC)" },
    ],
    materials: "FPCB / TSP process materials",
    application: "FPCB / TSP",
  },
  {
    model: "PRTLA-500A-F",
    type: "Roll-to-Roll Laminator",
    specs: [
      { label: "Material Width", value: "500 mm" },
      { label: "Material Thickness", value: "0.05 ~ 0.2 mm" },
      { label: "Laminator Roller", value: "ø80, Silicon Rubber Coating (2EA × 1Set)" },
      { label: "Heater", value: "Tube Heater (220V, 1.5kW)" },
      { label: "Temperature", value: "130°C Max" },
      { label: "Uniformity", value: "±5°C (Option: ±2°C)" },
      { label: "Lamination Speed", value: "0.5 ~ 5.0 m/min" },
      { label: "Temperature Range", value: "Ambient ~ 130°C" },
      { label: "Power", value: "220V × 3P × 8kW" },
      { label: "Pneumatic Air", value: "More Than 5 kg/cm²" },
      { label: "Process", value: "UnWinder → Splice Unit → Clean Unit → DFR Chuck → Lamination → Cooling Unit → ReWinder (EPC)" },
    ],
    materials: "FPCB / Flexible Material",
    application: "FPCB / Flexible Material",
  },
  {
    model: "PRTLA-M610",
    type: "Sheet Manual Laminator",
    specs: [
      { label: "Panel Size", value: "510 × 510 mm" },
      { label: "Panel Thickness", value: "0.05 ~ 2.0 mm (User Spec.)" },
      { label: "Laminator Roller", value: "ø80, Silicon Rubber Coating (2EA × 1Set)" },
      { label: "Heater", value: "Tube Heater (220V, 1.5kW)" },
      { label: "Temperature", value: "130°C Max" },
      { label: "Uniformity", value: "±5°C" },
      { label: "Lamination Speed", value: "0.5 ~ 5.0 m/min" },
      { label: "Temperature Range", value: "Ambient ~ 130°C" },
      { label: "Power", value: "220V × 3P × 5kW" },
      { label: "Pneumatic Air", value: "More Than 5 kg/cm²" },
      { label: "Process", value: "Guide Conveyor → DFR Chuck → Lamination → UnLoading Conveyor" },
    ],
    materials: "FPCB / PCB sheet materials",
    application: "FPCB / PCB",
  },
  {
    model: "PRTLA-PS63i-FPD",
    type: "Sheet-to-Sheet Laminator",
    specs: [
      { label: "Panel Size", value: '32" ~ 50" × 2 Sheet / 63" × 1 Sheet' },
      { label: "Panel Thickness", value: "0.5 ~ 5.0 mm (User Spec.)" },
      { label: "Laminator Roller", value: "ø60, Silicon Rubber Coating (2EA × 1Set)" },
      { label: "Lamination Speed", value: "1.0 m/sec" },
      { label: "Temperature Range", value: "Ambient ~ 130°C" },
      { label: "Power", value: "220V × 3P × 4kW" },
      { label: "Pneumatic Air", value: "More Than 5 kg/cm²" },
      { label: "Process", value: "Operator Manual Loading → Circulation (Folder Type) → Lamination → Circulation → Operator Manual UnLoading" },
    ],
    materials: "Glass / Board / FPD panel materials",
    application: "FPD / Glass / Board",
  },
]

const LAMINATOR_DESC = {
  ko: [
    "Lead Frame 및 VCM Spring 공정용 Roll-to-Roll Laminator입니다.",
    "Leadframe · FPCB · TSP 공정용 Roll-to-Roll Laminator입니다.",
    "FPCB 및 플렉시블 소재 공정용 Roll-to-Roll Laminator입니다.",
    "FPCB 및 PCB 공정용 Sheet Manual Laminator입니다.",
    "FPD · 유리 · 보드 공정용 Sheet-to-Sheet Laminator입니다.",
  ],
  en: [
    "Roll-to-Roll Laminator for Lead Frame and VCM Spring applications.",
    "Roll-to-Roll laminator for Leadframe, FPCB, and TSP processes.",
    "Roll-to-Roll Laminator for FPCB and flexible material applications.",
    "Sheet Manual Laminator for FPCB and PCB applications.",
    "Sheet-to-Sheet Laminator for FPD, glass, and board applications.",
  ],
  zh: [
    "用于 Lead Frame 与 VCM Spring 应用的 Roll-to-Roll Laminator。",
    "用于 Leadframe、FPCB 与 TSP 工艺的 Roll-to-Roll Laminator。",
    "用于 FPCB 与柔性材料应用的 Roll-to-Roll Laminator。",
    "用于 FPCB 与 PCB 应用的 Sheet Manual Laminator。",
    "用于 FPD、玻璃与基板应用的 Sheet-to-Sheet Laminator。",
  ],
}

const translations = {
  ko: {
    pageLabel: "Equipment Lineup",
    title: "Roll-to-Roll Equipment",
    subtitle: "Leadframe 및 반도체 패키징 양산 공정을 위한 Roll-to-Roll Exposure · Lamination 장비",
    laminatorSection: "Laminator",
    exposureSection: "Exposure System",
    modulesSection: "Line Configuration Modules",
    modulesDesc: "메인 장비와 연동되는 라인 구성 모듈은 Web Width, 소재, 공정 조건에 따라 맞춤 설계됩니다.",
    configCta: "라인 조건에 맞는 장비 구성이 필요하신가요?",
    configNote: "Web width · 소재 사양 · 처리 속도 · 자동화 수준 · 기존 라인 조건을 기준으로 검토합니다.",
    contactCta: "장비 상담 문의",
    specsLabel: "주요 사양",
    materialsLabel: "대응 소재",
    applicationLabel: "적용 공정",
    convenienceLabel: "편의사항",
    laminators: LAMINATOR_BASE.map((m, i) => ({ ...m, desc: LAMINATOR_DESC.ko[i] })),
    exposures: [
      {
        model: "PRTEX-350A-LF-LED",
        type: "Horizontal Roll-to-Roll LED Exposure System",
        desc: (
          <>
            수평 레이아웃으로 구성된 <span className="whitespace-nowrap">Roll-to-Roll</span> LED
            Exposure 시스템입니다.
            <br className="hidden md:block" />{" "}
            라인 배치 조건에 맞춰 적용할 수 있으며, 안정적인 정렬과{" "}
            <span className="whitespace-nowrap">UV 노광</span> 성능을 제공합니다.
          </>
        ),
        specs: [
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "350(W) × 530(L) mm" },
          { label: "Web Width", value: "250–380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
      {
        model: "PRTEX-350VA-LF-LED",
        type: "Vertical Roll-to-Roll LED Exposure System",
        desc: (
          <>
            Leadframe 패터닝 공정을 위한 Vertical{" "}
            <span className="whitespace-nowrap">Roll-to-Roll</span> LED Exposure 시스템입니다.
            <br className="hidden md:block" />{" "}
            Vision 자동 정렬과 안정적인 <span className="whitespace-nowrap">UV 노광</span>으로 대량 양산
            라인에 대응합니다.
          </>
        ),
        specs: [
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "350(W) × 530(L) mm" },
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
    whyLabel: "WHY PRT?",
    whyPoints: [
      {
        title: "양산 검증된 설계",
        desc: "아시아 주요 고객사의 Leadframe 양산 라인에서 장기간 운용되며 생산 안정성을 검증해왔습니다.",
      },
      {
        title: "공정 안정성 중심 설계",
        desc: "온도, 장력, 이송 조건을 실제 양산 환경에 맞춰 안정적으로 제어할 수 있도록 설계합니다.",
      },
      {
        title: "라인 조건 맞춤 구성",
        desc: "Web Width, 소재, 처리 속도, 자동화 수준에 따라 고객 라인에 맞는 장비 구성을 제안합니다.",
      },
      {
        title: "현장 유지보수성",
        desc: "표준 산업 부품과 접근성 높은 구조를 적용하여 점검, 부품 교체, 유지보수가 쉽도록 설계합니다.",
      },
    ],
  },
  en: {
    pageLabel: "Equipment Lineup",
    title: "Roll-to-Roll Equipment",
    subtitle: "Roll-to-Roll exposure and lamination systems configured for Leadframe and semiconductor packaging production.",
    laminatorSection: "Laminator",
    exposureSection: "Exposure System",
    modulesSection: "Line Configuration Modules",
    modulesDesc: "Line configuration systems integrated with main production equipment. Engineered to match web width, material, and process requirements.",
    configCta: "Need to configure equipment for your line conditions?",
    configNote: "We review web width, material specifications, throughput, automation level, and existing line conditions.",
    contactCta: "Contact Sales",
    specsLabel: "Specifications",
    materialsLabel: "Compatible Materials",
    applicationLabel: "Application",
    convenienceLabel: "Convenience Features",
    laminators: LAMINATOR_BASE.map((m, i) => ({ ...m, desc: LAMINATOR_DESC.en[i] })),
    exposures: [
      {
        model: "PRTEX-350A-LF-LED",
        type: "Horizontal Roll-to-Roll LED Exposure System",
        desc: (
          <>
            Horizontal <span className="whitespace-nowrap">Roll-to-Roll</span> LED exposure system
            designed for line-layout flexibility.
            <br className="hidden md:block" />{" "}
            It provides stable alignment and <span className="whitespace-nowrap">UV exposure</span>{" "}
            performance for production environments.
          </>
        ),
        specs: [
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "350(W) × 530(L) mm" },
          { label: "Web Width", value: "250–380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
      {
        model: "PRTEX-350VA-LF-LED",
        type: "Vertical Roll-to-Roll LED Exposure System",
        desc: (
          <>
            Vertical <span className="whitespace-nowrap">Roll-to-Roll</span> LED exposure system for
            Leadframe patterning.
            <br className="hidden md:block" />{" "}
            Vision auto-alignment and stable <span className="whitespace-nowrap">UV exposure</span>{" "}
            support high-volume production lines.
          </>
        ),
        specs: [
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "350(W) × 530(L) mm" },
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
    whyLabel: "WHY PRT?",
    whyPoints: [
      {
        title: "Production-Proven Design",
        desc: "Proven over years of continuous operation on Leadframe mass-production lines at major Asian customers.",
      },
      {
        title: "Stable Process Engineering",
        desc: "Temperature, tension, and transport conditions are engineered for stable control under real production environments.",
      },
      {
        title: "Line-Specific Configuration",
        desc: "Equipment is configured to your line by web width, material, throughput, and automation level.",
      },
      {
        title: "Serviceable Structure",
        desc: "Standard industrial components and an accessible structure make inspection, part replacement, and maintenance straightforward.",
      },
    ],
  },
  zh: {
    pageLabel: "Equipment Lineup",
    title: "Roll-to-Roll Equipment",
    subtitle: "面向 Leadframe 及半导体封装量产线的 Roll-to-Roll Exposure 与 Lamination 系统。",
    laminatorSection: "Laminator",
    exposureSection: "Exposure System",
    modulesSection: "Line Configuration Modules",
    modulesDesc: "与主生产设备集成的生产线配置系统。根据 Web Width、材料和工艺要求进行设计。",
    configCta: "需要为您的产线配置设备吗？",
    configNote: "我们依据 web width、材料规格、处理速度、自动化水平与现有产线条件进行评估。",
    contactCta: "Contact Sales",
    specsLabel: "Specifications",
    materialsLabel: "Compatible Materials",
    applicationLabel: "Application",
    convenienceLabel: "便利配置",
    laminators: LAMINATOR_BASE.map((m, i) => ({ ...m, desc: LAMINATOR_DESC.zh[i] })),
    exposures: [
      {
        model: "PRTEX-350A-LF-LED",
        type: "Horizontal Roll-to-Roll LED Exposure System",
        desc: (
          <>
            采用水平布局的 <span className="whitespace-nowrap">Roll-to-Roll</span> LED Exposure 系统。
            <br className="hidden md:block" />
            可适配产线布局条件，提供稳定的对准与 <span className="whitespace-nowrap">UV 曝光</span>性能。
          </>
        ),
        specs: [
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "350(W) × 530(L) mm" },
          { label: "Web Width", value: "250–380 mm" },
          { label: "Tact Time", value: "12 sec" },
          { label: "Vision System", value: "8CCD Vision Alignment" },
        ],
        materials: "Leadframe (C7025, CDA194, AL42)",
        application: "Leadframe RTR Exposure Process",
      },
      {
        model: "PRTEX-350VA-LF-LED",
        type: "Vertical Roll-to-Roll LED Exposure System",
        desc: (
          <>
            用于 Leadframe 图案形成的 Vertical{" "}
            <span className="whitespace-nowrap">Roll-to-Roll</span> LED Exposure 系统。
            <br className="hidden md:block" />
            凭借 Vision 自动对准与稳定的 <span className="whitespace-nowrap">UV 曝光</span>，满足大批量量产线需求。
          </>
        ),
        specs: [
          { label: "Resolution", value: "20 μm ±2 μm (Cr Mask)" },
          { label: "Alignment Accuracy", value: "±5 μm" },
          { label: "UV Source", value: "LED UV" },
          { label: "UV Wavelength", value: "365 nm" },
          { label: "Exposure Area", value: "350(W) × 530(L) mm" },
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
    whyLabel: "WHY PRT?",
    whyPoints: [
      {
        title: "Production-Proven Design",
        desc: "在亚洲主要客户的 Leadframe 量产线上长期运行，验证了生产稳定性。",
      },
      {
        title: "Stable Process Engineering",
        desc: "针对真实量产环境，对温度、张力与输送条件进行稳定可控的设计。",
      },
      {
        title: "Line-Specific Configuration",
        desc: "根据 Web Width、材料、处理速度与自动化水平，为客户产线提供匹配的设备配置。",
      },
      {
        title: "Serviceable Structure",
        desc: "采用标准工业部件与高可达性结构，便于检查、更换部件与维护。",
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
// Each carries its own container aspect so object-contain fills with
// no letterbox (aspect = the trimmed image's width/height).
const MODEL_IMAGE: Record<string, { src: string; aspect: string }> = {
  "PRTEX-350A-LF-LED": { src: "/images/equipment_exposure2.png", aspect: "aspect-[1441/796]" },
  "PRTEX-350VA-LF-LED": { src: "/images/equipment_exposure111-v2.png", aspect: "aspect-[1648/667]" },
  "PRTLA-350A-LF": { src: "/images/equipment_lami1.png", aspect: "aspect-[1377/870]" },
  "PRTLA-500A-T": { src: "/images/equipment_lami2.png", aspect: "aspect-[1325/1086]" },
  "PRTLA-500A-F": { src: "/images/equipment_lami3-v2.png", aspect: "aspect-[1048/1078]" },
  "PRTLA-M610": { src: "/images/equipment_lami4.png", aspect: "aspect-[894/1226]" },
  "PRTLA-PS63i-FPD": { src: "/images/equipment_lami5.png", aspect: "aspect-[1551/852]" },
}

interface SpecRow {
  label: string
  value: string
}
interface Model {
  model: string
  type: string
  desc: ReactNode
  specs: SpecRow[]
  materials: string
  application: string
  convenience?: string[]
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
  imageShadow = false,
  onOpenImage,
  priority = false,
}: {
  model: Model
  categoryLabel: string
  image?: string
  labels: { specsLabel: string; materialsLabel: string; applicationLabel: string; contactCta: string }
  imageAspectClass?: string
  imageShadow?: boolean
  onOpenImage?: (images: LightboxImage[], index: number) => void
  priority?: boolean
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
            <button
              type="button"
              onClick={onOpenImage ? () => onOpenImage([{ src: image, alt: `${model.model} — ${model.type}` }], 0) : undefined}
              aria-label={`Enlarge ${model.model} image`}
              className="group absolute inset-0 block w-full cursor-zoom-in"
            >
              <Image
                src={image}
                alt={`${model.model} — ${model.type}`}
                fill
                priority={priority}
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-contain"
                style={
                  imageShadow
                    ? { filter: "drop-shadow(0 24px 20px rgba(15,23,42,0.22))" }
                    : undefined
                }
              />
            </button>
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

      </div>
    </section>
  )
}

/* Compact laminator catalog card — LIGHT. Used ONLY for the Laminators
   category so the 5 models read as a comparable product lineup (2 + 2 + 1)
   instead of stacked full-width showcases. Image height is capped so the
   equipment supports the spec data rather than dominating the page; the
   transparent PNG is shown object-contain (full machine, no cropping) with
   the same soft drop-shadow used elsewhere for laminators. */
function LaminatorCard({
  model,
  categoryLabel,
  image,
  labels,
  wide,
  onOpenImage,
  priority = false,
}: {
  model: Model
  categoryLabel: string
  image?: string
  labels: { specsLabel: string; materialsLabel: string; applicationLabel: string; convenienceLabel: string; contactCta: string }
  wide?: boolean
  onOpenImage?: (images: LightboxImage[], index: number) => void
  priority?: boolean
}) {
  // Model intro (label / model / title / description) — same order as Exposure.
  const intro = (
    <>
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#1976D2" }}>
        {categoryLabel}
      </p>
      <p className="text-sm font-semibold tracking-widest text-neutral-500">{model.model}</p>
      <h3 className="mt-1 text-xl font-bold tracking-tight text-neutral-900 lg:text-2xl">{model.type}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{model.desc}</p>
    </>
  )

  // Borderless image (object-contain, no cropping; click to enlarge).
  const imageInner = image ? (
    <button
      type="button"
      onClick={onOpenImage ? () => onOpenImage([{ src: image, alt: `${model.model} — ${model.type}` }], 0) : undefined}
      aria-label={`Enlarge ${model.model} image`}
      className="group absolute inset-0 block w-full cursor-zoom-in"
    >
      <Image
        src={image}
        alt={`${model.model} — ${model.type}`}
        fill
        priority={priority}
        sizes={wide ? "(min-width: 768px) 42vw, 90vw" : "(min-width: 1024px) 40vw, (min-width: 768px) 45vw, 90vw"}
        className="object-contain"
        style={{ filter: "drop-shadow(0 16px 14px rgba(15,23,42,0.16))" }}
      />
    </button>
  ) : (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-sm font-semibold text-neutral-400">{model.model}</span>
    </div>
  )

  const specRow = (spec: SpecRow, key: number) => (
    <div key={key} className="flex items-baseline justify-between gap-4 py-2.5">
      <span className="text-xs font-medium leading-relaxed text-neutral-500">{spec.label}:</span>
      <span className="text-right text-sm font-semibold leading-relaxed tabular-nums text-neutral-900">
        {spec.value}
      </span>
    </div>
  )

  const materialsApp = (
    <div className="mt-6 space-y-2">
      <div className="flex items-start gap-3">
        <span className="min-w-[120px] text-xs text-neutral-500">{labels.materialsLabel}</span>
        <span className="text-xs text-neutral-800">{model.materials}</span>
      </div>
      <div className="flex items-start gap-3">
        <span className="min-w-[120px] text-xs text-neutral-500">{labels.applicationLabel}</span>
        <span className="text-xs text-neutral-800">{model.application}</span>
      </div>
      {model.convenience && model.convenience.length > 0 && (
        <div className="flex items-start gap-3">
          <span className="min-w-[120px] text-xs text-neutral-500">{labels.convenienceLabel}</span>
          <span className="text-xs text-neutral-800">{model.convenience.join(" / ")}</span>
        </div>
      )}
    </div>
  )

  // ── Lone final model: an intentional product-detail block (not a leftover
  //    card). Desktop = two columns: LEFT (≈42%) holds intro + product image,
  //    RIGHT (≈58%) holds the spec table — wider so long spec values don't wrap
  //    badly. Tops align (items-start). Mobile collapses to one column, giving
  //    the natural intro → image → specs vertical stack. ──
  if (wide) {
    return (
      <section id={`model-${slug(model.model)}`} data-anchor className="md:col-span-2">
        <div className="grid gap-10 md:grid-cols-[42%_1fr] md:items-start lg:gap-14">
          {/* Left: model name / description / image */}
          <div>
            {intro}
            <div className="mt-6 px-2 sm:px-6 md:px-0">
              <div className="relative h-[300px] w-full sm:h-[340px] lg:h-[380px]">{imageInner}</div>
            </div>
          </div>
          {/* Right: specifications (kept wide so values read cleanly) */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {labels.specsLabel}
            </p>
            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {model.specs.map((spec, i) => specRow(spec, i))}
            </div>
            {materialsApp}
          </div>
        </div>
      </section>
    )
  }

  // ── Default 2-up catalog card: intro → image → specs (unchanged). ──
  return (
    <section id={`model-${slug(model.model)}`} data-anchor className="flex flex-col">
      {intro}
      <div className="mt-6 px-2 sm:px-6">
        <div className="relative h-[345px] w-full sm:h-[390px] lg:h-[437px]">{imageInner}</div>
      </div>
      <p className="mt-8 mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
        {labels.specsLabel}
      </p>
      <div className="divide-y divide-neutral-200 border-t border-neutral-200">
        {model.specs.map((spec, i) => specRow(spec, i))}
      </div>
      {materialsApp}
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

export default function ProductsPage({ initialLang }: { initialLang?: Language }) {
  const [lang, setLang] = useLanguage(initialLang)
  const t = translations[lang]
  const [activeCat, setActiveCat] = useState("cat-exposure")
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null)
  const openLightbox = (images: LightboxImage[], index: number) => setLightbox({ images, index })

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
    convenienceLabel: t.convenienceLabel,
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
            ) : active.group === "laminators" ? (
              /* Laminators — compact 2-up catalog grid (capped image height) so the
                 models compare easily. When the count is odd, the final model
                 renders as a full-width side-by-side block (see LaminatorCard
                 `wide`) instead of a lone half-card. Extra bottom padding sets a
                 clear gap before the WHY PRT section. */
              <div className="grid gap-y-20 pt-4 md:grid-cols-2 md:gap-x-14 md:gap-y-24 md:pb-12">
                {t.laminators.map((m, i) => (
                  <LaminatorCard
                    key={i}
                    model={m}
                    categoryLabel={active.label}
                    image={MODEL_IMAGE[m.model]?.src ?? CATEGORY_IMAGE[active.group]}
                    labels={labels}
                    wide={i === t.laminators.length - 1 && t.laminators.length % 2 === 1}
                    onOpenImage={openLightbox}
                    priority={i === 0}
                  />
                ))}
              </div>
            ) : (
              t.exposures.map((m, i) => (
                <ModelShowcase
                  key={i}
                  model={m}
                  categoryLabel={active.label}
                  image={MODEL_IMAGE[m.model]?.src ?? CATEGORY_IMAGE[active.group]}
                  imageAspectClass={MODEL_IMAGE[m.model]?.aspect ?? "aspect-[16/9]"}
                  labels={labels}
                  onOpenImage={openLightbox}
                  priority={i === 0}
                />
              ))
            )}
          </section>

          {/* Why PRT Equipment — NO outer card. A borderless info section that sits
              directly on the page so it reads as "four reasons", not a white panel.
              Only a thin divider under the section label provides structure. */}
          <div className="mb-20">
            <div className="mb-9 flex items-center gap-3 border-b border-neutral-200 pb-5">
              <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-700">{t.whyLabel}</p>
            </div>
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {t.whyPoints.map((pt, idx) => (
                <div key={idx} className="relative pl-5">
                  {/* uniform accent — identical length / thickness / offset on every
                      item so the four reasons share one visual rhythm */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1 h-8 w-0.5"
                    style={{ backgroundColor: "#1976D2" }}
                  />
                  <h3 className="mb-2.5 text-sm font-semibold leading-snug text-neutral-900">{pt.title}</h3>
                  <p className="text-xs leading-relaxed text-neutral-600">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing CTA — action block, clearly distinct from the WHY info panel:
              a faint blue surface + restrained blue left accent, with a clear
              title → note → button hierarchy. Stacks on mobile. */}
          <div
            className="border border-neutral-200 border-l-2 bg-[#1976D2]/[0.045] px-6 py-7 lg:px-10 lg:py-8"
            style={{ borderLeftColor: "#1976D2" }}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-lg font-semibold leading-snug text-neutral-900">{t.configCta}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{t.configNote}</p>
              </div>
              <a
                href="/contact"
                className="group inline-flex flex-shrink-0 items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0D47A1]"
                style={{ backgroundColor: "#1976D2" }}
              >
                {t.contactCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer lang={lang} />

      {/* Enlarge-on-click viewer — shared by Exposure + Laminators. */}
      {lightbox && (
        <EquipmentImageLightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onIndexChange={(i) => setLightbox((prev) => (prev ? { ...prev, index: i } : prev))}
        />
      )}
    </main>
  )
}
