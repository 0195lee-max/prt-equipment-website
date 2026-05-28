"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { useSyncHtmlLang } from "@/hooks/use-sync-html-lang"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    meta: "Engineering",
    title: "Stable operation matters\nmore than theoretical specs.",
    titleSub: "PRT Core Competency",
    description:
      "사양서에 쓰인 수치는 최상의 조건에서의 이론값입니다. PRT 장비는 양산 현장의 실제 조건 — 온도 변화, 재료 편차, 장시간 연속 가동 — 에서 일관되게 작동하도록 설계됩니다.",
    verticalTitle: "Why Vertical Roll-to-Roll?",
    verticalDesc:
      "Leadframe 패키징 공정에서 Vertical 이송 방식은 단순한 구조 차이가 아닙니다. 웹 표면의 파티클 낙하, 중력 보조 장력 제어, 수직 공간 활용 — 이 세 가지가 Horizontal 대비 실질적인 공정 이점을 만들어냅니다.",
    diagramHorizontalTitle: "Horizontal R2R",
    diagramVerticalTitle: "Vertical R2R (PRT)",
    diagramHorizontalLabels: ["Particle Accumulation Risk", "Larger Footprint"],
    diagramVerticalLabels: ["Particles Fall Away from Web", "Compact Footprint"],
    verticalPoints: [
      { label: "Particle Drop-Off", desc: "웹 표면에 파티클이 쌓이지 않습니다." },
      { label: "Tension Stability", desc: "중력 보조로 일관된 웹 장력 유지." },
      { label: "Space Efficiency", desc: "수직 구조로 라인 풋프린트 최소화." },
      { label: "Process Precision", desc: "안정적 이송으로 정렬 반복 정밀도 향상." },
    ],
    pillarsLabel: "6 Core Engineering Competencies",
    pillars: [
      {
        number: "01",
        slug: "web-handling",
        title: "Web Handling Stability",
        tagline: "Web Handling Stability",
        body: "Roll-to-Roll 공정에서 웹 장력의 흔들림은 직접적인 품질 불량으로 이어집니다. PRT 장비는 서보 기반 Unwinder/Rewinder와 댄서 롤러 시스템으로 ±0.3N 이내의 장력 변동을 유지합니다.",
        specs: [
          "Tension control: Servo-based dancer roller",
          "Tension variation: ±0.3N",
          "Web width: Up to 380mm",
          "Speed range: 0.1~5.0 m/min",
        ],
      },
      {
        number: "02",
        slug: "alignment",
        title: "Alignment Consistency",
        tagline: "Alignment Consistency",
        body: "Exposure 공정에서 정렬은 한 번의 기준값이 아닙니다. PRT의 8CCD Vision System은 매 쇼트마다 실시간으로 보정하여, 수천 쇼트 이후에도 ±5μm 이내의 정렬 정밀도를 유지합니다.",
        specs: [
          "Alignment accuracy: ±5μm",
          "Vision system: 8CCD cameras",
          "Tact time: 12 sec",
          "Auto-correction: Per-shot real-time",
        ],
      },
      {
        number: "03",
        slug: "thermal",
        title: "Thermal & Process Stability",
        tagline: "Thermal & Process Stability",
        body: "Lamination 롤의 온도 균일성은 드라이필름 접착력과 직결됩니다. PRT 히팅 롤 시스템은 롤 전면에 걸쳐 ±3°C 이내의 온도 균일성을 확보하며, 가압 제어는 ±0.1kg/㎠ 정밀도를 유지합니다.",
        specs: [
          "Temp uniformity: ±3°C across roll width",
          "Pressure control: ±0.1kg/㎠",
          "Heating: Internal oil circulation",
          "Materials: C7025 / CDA194 / AL42",
        ],
      },
      {
        number: "04",
        slug: "troubleshooting",
        title: "Fast Troubleshooting",
        tagline: "Fast Troubleshooting",
        body: "양산 라인에서 장비 다운타임은 곧 생산 손실입니다. PRT 장비는 주요 구동부와 센서에 직접 접근이 가능하며, 현장 엔지니어가 즉시 원인을 파악할 수 있는 진단 수준의 오류 메시지를 제공합니다.",
        specs: [
          "Modular drive unit design",
          "Direct sensor access",
          "Diagnostic-grade error messaging",
          "Remote support capability",
        ],
      },
      {
        number: "05",
        slug: "maintainability",
        title: "Maintainability",
        tagline: "Maintainability",
        body: "장기 가동을 위한 설계로, 소모품 교체·롤 청소·정기 점검 등 모든 루틴 작업이 특수 공구 없이 가능합니다. 부품은 글로벌 공급 가능한 표준 산업용 컴포넌트 중심으로 선정합니다.",
        specs: [
          "Tool-free consumable replacement",
          "Standard industrial components: THK, Rexroth, SMC, Omron, Mitsubishi",
          "Global parts availability",
          "PM interval: Documented schedule",
        ],
      },
      {
        number: "06",
        slug: "operator",
        title: "Operator-Friendly Engineering",
        tagline: "Operator-Friendly Engineering",
        body: "PRT는 조작 시퀀스, HMI 레이아웃, 롤 교체 프로세스를 현장 운영자 관점에서 설계합니다. 복잡한 교육 없이도 안전하고 일관되게 운용할 수 있어야 합니다.",
        specs: [
          "Intuitive HMI: Step-by-step operation",
          "Roll change: Single-operator capable",
          "Safety interlocks: Full coverage",
          "Language support: Korean / English / Chinese",
        ],
      },
    ],
    componentLabel: "Component Standards",
    componentBody:
      "PRT 장비에 사용되는 모든 핵심 구동 부품은 글로벌 공급 가능한 표준 산업용 부품으로 구성됩니다. 제조사 단종이나 현지 공급망 단절에 의한 유지보수 불가 상황을 최소화합니다.",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence"],
    contactCta: "Engineering Inquiry",
    productsCta: "View Equipment",
  },
  en: {
    meta: "Engineering",
    title: "Stable operation matters\nmore than theoretical specs.",
    titleSub: "PRT Core Competency",
    description:
      "Specification numbers reflect ideal conditions. PRT equipment is designed to operate consistently under real production conditions — temperature variation, material variance, extended continuous running — not just within a controlled test environment.",
    verticalTitle: "Why Vertical Roll-to-Roll?",
    verticalDesc:
      "In Leadframe packaging processes, the vertical transport architecture is not just a structural choice. Particle falloff from the web surface, gravity-assisted tension control, and vertical space utilization create tangible process advantages over horizontal configurations.",
    diagramHorizontalTitle: "Horizontal R2R",
    diagramVerticalTitle: "Vertical R2R (PRT)",
    diagramHorizontalLabels: ["Particle Accumulation Risk", "Larger Footprint"],
    diagramVerticalLabels: ["Particles Fall Away from Web", "Compact Footprint"],
    verticalPoints: [
      { label: "Particle Falloff", desc: "Particles do not accumulate on the web surface." },
      { label: "Tension Stability", desc: "Gravity-assisted consistent web tension." },
      { label: "Space Efficiency", desc: "Vertical structure minimizes line footprint." },
      { label: "Process Precision", desc: "Stable transport improves alignment repeatability." },
    ],
    pillarsLabel: "6 Core Engineering Competencies",
    pillars: [
      {
        number: "01",
        slug: "web-handling",
        title: "Web Handling Stability",
        tagline: "Web Handling Stability",
        body: "In Roll-to-Roll processes, web tension instability translates directly into yield loss. PRT equipment uses servo-based unwinder/rewinder systems with dancer roller control to maintain tension variation within ±0.3N under continuous production conditions.",
        specs: [
          "Tension control: Servo-based dancer roller",
          "Tension variation: ±0.3N",
          "Web width: Up to 380mm",
          "Speed range: 0.1~5.0 m/min",
        ],
      },
      {
        number: "02",
        slug: "alignment",
        title: "Alignment Consistency",
        tagline: "Alignment Consistency",
        body: "In the exposure process, alignment is not a one-time calibration. PRT's 8CCD Vision System applies real-time per-shot correction, maintaining ±5μm alignment accuracy across thousands of consecutive shots — not just on the first few after setup.",
        specs: [
          "Alignment accuracy: ±5μm",
          "Vision system: 8CCD cameras",
          "Tact time: 12 sec",
          "Auto-correction: Per-shot real-time",
        ],
      },
      {
        number: "03",
        slug: "thermal",
        title: "Thermal & Process Stability",
        tagline: "Thermal & Process Stability",
        body: "Temperature uniformity of the lamination roll is directly correlated with dry film adhesion quality. PRT heating roll systems maintain temperature uniformity within ±3°C across the full roll width, with pressure control to ±0.1kg/㎠ precision.",
        specs: [
          "Temp uniformity: ±3°C across roll width",
          "Pressure control: ±0.1kg/㎠",
          "Heating: Internal oil circulation",
          "Materials: C7025 / CDA194 / AL42",
        ],
      },
      {
        number: "04",
        slug: "troubleshooting",
        title: "Fast Troubleshooting",
        tagline: "Fast Troubleshooting",
        body: "Equipment downtime on a production line is production loss. PRT equipment provides direct access to key drive units and sensors, with diagnostic-grade error messages that let on-site engineers identify root causes without specialized tools.",
        specs: [
          "Modular drive unit design",
          "Direct sensor access",
          "Diagnostic-grade error messaging",
          "Remote support capability",
        ],
      },
      {
        number: "05",
        slug: "maintainability",
        title: "Maintainability",
        tagline: "Maintainability",
        body: "Designed for long-term operation, all routine work — consumable replacement, roll cleaning, inspections — is achievable without special tooling. Components are selected from globally available standard industrial suppliers, not proprietary assemblies.",
        specs: [
          "Tool-free consumable replacement",
          "Standard industrial components: THK, Rexroth, SMC, Omron, Mitsubishi",
          "Global parts availability",
          "PM interval: Documented schedule",
        ],
      },
      {
        number: "06",
        slug: "operator",
        title: "Operator-Friendly Engineering",
        tagline: "Operator-Friendly Engineering",
        body: "PRT designs operating sequences, HMI layout, and roll change procedures from the production operator's perspective. The system should be safe and consistent to operate without complex training.",
        specs: [
          "Intuitive HMI: Step-by-step operation",
          "Roll change: Single-operator capable",
          "Safety interlocks: Full coverage",
          "Language support: Korean / English / Chinese",
        ],
      },
    ],
    componentLabel: "Component Standards",
    componentBody:
      "All critical drive components in PRT equipment are selected from globally available standard industrial suppliers. This minimizes risk of end-of-life supply disruptions and ensures parts availability throughout the equipment's service life.",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence"],
    contactCta: "Engineering Inquiry",
    productsCta: "View Equipment",
  },
  zh: {
    meta: "Engineering",
    title: "Stable operation matters\nmore than theoretical specs.",
    titleSub: "PRT Core Competency",
    description:
      "规格表上的数字反映的是理想条件下的值。PRT 设备的设计目标是在真实量产条件下 — 温度变化、材料偏差、长时间连续运行 — 保持一致的运行。",
    verticalTitle: "Why Vertical Roll-to-Roll?",
    verticalDesc:
      "在 Leadframe 封装工艺中，Vertical 传输架构不仅仅是结构上的选择。卷材表面颗粒自然脱落、重力辅助张力控制和垂直空间利用，相比 Horizontal 配置创造了实质性的工艺优势。",
    diagramHorizontalTitle: "Horizontal R2R",
    diagramVerticalTitle: "Vertical R2R (PRT)",
    diagramHorizontalLabels: ["Particle Accumulation Risk", "Larger Footprint"],
    diagramVerticalLabels: ["Particles Fall Away from Web", "Compact Footprint"],
    verticalPoints: [
      { label: "Particle Drop-Off", desc: "颗粒不会在卷材表面积累。" },
      { label: "Tension Stability", desc: "重力辅助保持一致的卷材张力。" },
      { label: "Space Efficiency", desc: "垂直结构最小化生产线占地面积。" },
      { label: "Process Precision", desc: "稳定传输提高对准重复精度。" },
    ],
    pillarsLabel: "6 Core Engineering Competencies",
    pillars: [
      {
        number: "01",
        slug: "web-handling",
        title: "Web Handling Stability",
        tagline: "Web Handling Stability",
        body: "在 Roll-to-Roll 工艺中，卷材张力不稳定直接导致良率下降。PRT 设备采用基于伺服的 Unwinder/Rewinder 系统和舞辊控制，在连续量产条件下将张力变化维持在 ±0.3N 以内。",
        specs: [
          "Tension control: Servo-based dancer roller",
          "Tension variation: ±0.3N",
          "Web width: Up to 380mm",
          "Speed range: 0.1~5.0 m/min",
        ],
      },
      {
        number: "02",
        slug: "alignment",
        title: "Alignment Consistency",
        tagline: "Alignment Consistency",
        body: "在 Exposure 工艺中，对准不是一次性校准。PRT 的 8CCD Vision System 对每次曝光进行实时校正，在连续数千次曝光后将对准精度保持在 ±5μm 以内。",
        specs: [
          "Alignment accuracy: ±5μm",
          "Vision system: 8CCD cameras",
          "Tact time: 12 sec",
          "Auto-correction: Per-shot real-time",
        ],
      },
      {
        number: "03",
        slug: "thermal",
        title: "Thermal & Process Stability",
        tagline: "Thermal & Process Stability",
        body: "Lamination 辊的温度均匀性与干膜粘合质量直接相关。PRT 加热辊系统在整个辊宽范围内将温度均匀性保持在 ±3°C 以内，压力控制精度达 ±0.1kg/㎠。",
        specs: [
          "Temp uniformity: ±3°C across roll width",
          "Pressure control: ±0.1kg/㎠",
          "Heating: Internal oil circulation",
          "Materials: C7025 / CDA194 / AL42",
        ],
      },
      {
        number: "04",
        slug: "troubleshooting",
        title: "Fast Troubleshooting",
        tagline: "Fast Troubleshooting",
        body: "量产线上的设备停机就是生产损失。PRT 设备的主要驱动单元和传感器可直接访问，并提供使现场工程师无需专业工具即可识别根本原因的诊断级错误信息。",
        specs: [
          "Modular drive unit design",
          "Direct sensor access",
          "Diagnostic-grade error messaging",
          "Remote support capability",
        ],
      },
      {
        number: "05",
        slug: "maintainability",
        title: "Maintainability",
        tagline: "Maintainability",
        body: "为长期运行而设计，所有例行工作 — 消耗品更换、辊清洁、检查 — 均无需专用工具即可完成。零部件从全球可供应的标准工业供应商中选取，而非专有组件。",
        specs: [
          "Tool-free consumable replacement",
          "Standard industrial components: THK, Rexroth, SMC, Omron, Mitsubishi",
          "Global parts availability",
          "PM interval: Documented schedule",
        ],
      },
      {
        number: "06",
        slug: "operator",
        title: "Operator-Friendly Engineering",
        tagline: "Operator-Friendly Engineering",
        body: "PRT 从生产操作员的视角设计操作流程、HMI 布局和换辊程序。无需复杂培训即可安全、一致地操作。",
        specs: [
          "Intuitive HMI: Step-by-step operation",
          "Roll change: Single-operator capable",
          "Safety interlocks: Full coverage",
          "Language support: Korean / English / Chinese",
        ],
      },
    ],
    componentLabel: "Component Standards",
    componentBody:
      "PRT 设备中所有关键驱动部件均从全球可供应的标准工业供应商处选取。这将产品停产风险降至最低，并确保整个设备服务周期内的零件可用性。",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence"],
    contactCta: "Engineering Inquiry",
    productsCta: "View Equipment",
  },
}

/**
 * Engineering-schematic SVG comparing Horizontal vs Vertical R2R architectures.
 * Line art only — no fills. Grey for horizontal, gold for vertical (PRT).
 * Particles shown falling onto web (horizontal) vs falling away from web (vertical).
 */
function R2RComparisonDiagram({
  horizontalTitle,
  verticalTitle,
  horizontalLabels,
  verticalLabels,
}: {
  horizontalTitle: string
  verticalTitle: string
  horizontalLabels: string[]
  verticalLabels: string[]
}) {
  const GOLD = "#1976D2"
  const GREY = "#64748b" // slate-500
  const GREY_DIM = "#475569" // slate-600

  return (
    <div className="relative border border-slate-800 bg-slate-950/40 p-6 lg:p-10">
      {/* Schematic grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative grid gap-6 sm:grid-cols-2">
        {/* ── HORIZONTAL ─────────────────────────────────── */}
        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-500" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              {horizontalTitle}
            </p>
          </div>

          <svg
            viewBox="0 0 320 200"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={horizontalTitle}
          >
            <defs>
              <marker
                id="arrow-grey"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill={GREY} />
              </marker>
            </defs>

            {/* Unwind roll (left) */}
            <circle cx="40" cy="110" r="22" fill="none" stroke={GREY_DIM} strokeWidth="1.2" />
            <circle cx="40" cy="110" r="8" fill="none" stroke={GREY_DIM} strokeWidth="1" />
            {/* Rewind roll (right) */}
            <circle cx="280" cy="110" r="22" fill="none" stroke={GREY_DIM} strokeWidth="1.2" />
            <circle cx="280" cy="110" r="8" fill="none" stroke={GREY_DIM} strokeWidth="1" />

            {/* Horizontal web with arrow */}
            <line
              x1="62"
              y1="110"
              x2="258"
              y2="110"
              stroke={GREY}
              strokeWidth="1.6"
              markerEnd="url(#arrow-grey)"
            />

            {/* Particles falling DOWN onto web */}
            {[100, 140, 180, 220].map((x, i) => (
              <g key={i}>
                <circle cx={x} cy="40" r="2.4" fill={GREY} opacity="0.85" />
                <line
                  x1={x}
                  y1="48"
                  x2={x}
                  y2="98"
                  stroke={GREY}
                  strokeWidth="0.9"
                  strokeDasharray="2 3"
                  opacity="0.55"
                />
                {/* small arrowhead */}
                <path
                  d={`M${x - 2.5} 96 L${x} 102 L${x + 2.5} 96`}
                  fill="none"
                  stroke={GREY}
                  strokeWidth="0.9"
                  opacity="0.6"
                />
              </g>
            ))}

            {/* Web direction arrow text */}
            <text
              x="160"
              y="128"
              textAnchor="middle"
              fontSize="9"
              fill={GREY_DIM}
              fontFamily="monospace"
              letterSpacing="1"
            >
              WEB FLOW →
            </text>

            {/* Web particle accumulation indicators on the web line */}
            {[100, 140, 180, 220].map((x, i) => (
              <circle key={`acc-${i}`} cx={x} cy="108" r="1.6" fill={GREY} opacity="0.95" />
            ))}
          </svg>

          {/* Labels */}
          <ul className="mt-4 space-y-2">
            {horizontalLabels.map((label, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                <span className="h-px w-3 bg-slate-600" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* ── VERTICAL (PRT) ─────────────────────────────── */}
        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-2">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: GOLD }}
            >
              {verticalTitle}
            </p>
          </div>

          <svg
            viewBox="0 0 320 200"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={verticalTitle}
          >
            <defs>
              <marker
                id="arrow-gold"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill={GOLD} />
              </marker>
            </defs>

            {/* Bottom roll */}
            <circle cx="160" cy="170" r="22" fill="none" stroke={GOLD} strokeWidth="1.2" />
            <circle cx="160" cy="170" r="8" fill="none" stroke={GOLD} strokeWidth="1" />
            {/* Top roll */}
            <circle cx="160" cy="30" r="22" fill="none" stroke={GOLD} strokeWidth="1.2" />
            <circle cx="160" cy="30" r="8" fill="none" stroke={GOLD} strokeWidth="1" />

            {/* Vertical web with upward arrow */}
            <line
              x1="160"
              y1="148"
              x2="160"
              y2="52"
              stroke={GOLD}
              strokeWidth="1.6"
              markerEnd="url(#arrow-gold)"
            />

            {/* Particles falling SIDEWAYS away from vertical web */}
            {/* Left side particles */}
            {[70, 110, 150].map((y, i) => (
              <g key={`l-${i}`}>
                <circle cx="150" cy={y} r="2.4" fill={GOLD} opacity="0.9" />
                <line
                  x1="146"
                  y1={y}
                  x2="100"
                  y2={y + 18}
                  stroke={GOLD}
                  strokeWidth="0.9"
                  strokeDasharray="2 3"
                  opacity="0.55"
                />
                <path
                  d={`M104 ${y + 17} L98 ${y + 18.5} L102 ${y + 14}`}
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="0.9"
                  opacity="0.6"
                />
              </g>
            ))}
            {/* Right side particles */}
            {[80, 120, 145].map((y, i) => (
              <g key={`r-${i}`}>
                <circle cx="170" cy={y} r="2.4" fill={GOLD} opacity="0.9" />
                <line
                  x1="174"
                  y1={y}
                  x2="220"
                  y2={y + 18}
                  stroke={GOLD}
                  strokeWidth="0.9"
                  strokeDasharray="2 3"
                  opacity="0.55"
                />
                <path
                  d={`M216 ${y + 17} L222 ${y + 18.5} L218 ${y + 14}`}
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="0.9"
                  opacity="0.6"
                />
              </g>
            ))}

            {/* Web direction label */}
            <text
              x="178"
              y="105"
              fontSize="9"
              fill={GOLD}
              fontFamily="monospace"
              letterSpacing="1"
              opacity="0.85"
            >
              ↑ WEB
            </text>
          </svg>

          {/* Labels */}
          <ul className="mt-4 space-y-2">
            {verticalLabels.map((label, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-[11px]"
                style={{ color: "#1976D2" }}
              >
                <span
                  className="h-px w-3"
                  style={{ backgroundColor: "rgba(25,118,210,0.7)" }}
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/**
 * 16:9 competency card image. Renders <Image> when src is provided,
 * otherwise falls back to the dark schematic placeholder.
 */
function CompetencyImagePlaceholder({ src, alt }: { src?: string; alt?: string }) {
  if (src) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0A0F1A] border-b border-slate-800">
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    )
  }
  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-[#0A0F1A] border-b border-slate-800">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute top-3 left-3 h-2 w-2 border-l border-t"
        style={{ borderColor: "rgba(25,118,210,0.4)" }}
      />
      <div
        className="absolute top-3 right-3 h-2 w-2 border-r border-t"
        style={{ borderColor: "rgba(25,118,210,0.4)" }}
      />
      <div
        className="absolute bottom-3 left-3 h-2 w-2 border-l border-b"
        style={{ borderColor: "rgba(25,118,210,0.4)" }}
      />
      <div
        className="absolute bottom-3 right-3 h-2 w-2 border-r border-b"
        style={{ borderColor: "rgba(25,118,210,0.4)" }}
      />
    </div>
  )
}

export default function EngineeringPage() {
  const [lang, setLang] = useState<Language>("en")
  useSyncHtmlLang(lang)
  const t = translations[lang]

  return (
    <main className="min-h-svh bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 42%, rgba(25,118,210,0.8) 42.5%, transparent 43%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-32 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              {t.titleSub}
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight whitespace-pre-line mb-8">
            {t.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            {t.description}
          </p>
        </div>
      </section>

      {/* ── Why Vertical R2R — Diagram ──────────────────────── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Architecture
            </p>
            <h2 className="text-2xl font-bold text-white mb-4">{t.verticalTitle}</h2>
            <p className="max-w-3xl text-sm text-slate-400 leading-relaxed">
              {t.verticalDesc}
            </p>
          </div>

          {/* Schematic diagram — replaces the old text comparison */}
          <R2RComparisonDiagram
            horizontalTitle={t.diagramHorizontalTitle}
            verticalTitle={t.diagramVerticalTitle}
            horizontalLabels={t.diagramHorizontalLabels}
            verticalLabels={t.diagramVerticalLabels}
          />

          {/* 4 numbered advantages below diagram */}
          <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-800">
            {t.verticalPoints.map((pt, idx) => (
              <div
                key={idx}
                className="border-r border-b border-slate-800 bg-slate-950/30 p-6"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="flex h-6 w-6 items-center justify-center text-[10px] font-bold"
                    style={{
                      backgroundColor: "rgba(25,118,210,0.12)",
                      color: "#1976D2",
                      border: "1px solid rgba(25,118,210,0.3)",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold text-slate-200">{pt.label}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 Pillars ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "rgb(30, 41, 59)" }} className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <p className="mb-14 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.pillarsLabel}
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.pillars.map((pillar, idx) => (
              <article
                key={idx}
                className="group relative overflow-hidden border border-slate-800 bg-slate-950/40 transition-colors hover:border-slate-700"
              >
                {/* Card image — /images/eng-{number}-{slug}.jpg */}
                <CompetencyImagePlaceholder
                  src={`/images/eng-${pillar.number}-${pillar.slug}.jpg`}
                  alt={pillar.title}
                />

                <div className="p-6">
                  <p
                    className="text-[10px] font-bold tracking-[0.25em] mb-3 font-mono"
                    style={{ color: "rgba(25,118,210,0.7)" }}
                  >
                    {pillar.number}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-1.5 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 mb-4">
                    {pillar.tagline}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {pillar.body}
                  </p>

                  <div className="space-y-1.5 border-t border-slate-800 pt-4">
                    {pillar.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2 text-xs font-mono text-slate-400"
                      >
                        <span
                          className="h-px w-3 flex-shrink-0 mt-[7px]"
                          style={{ backgroundColor: "#1976D2", opacity: 0.4 }}
                        />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Component Standards ─────────────────────────────── */}
      <section className="relative bg-slate-950">
        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.componentLabel}
          </p>
          <p className="max-w-xl text-sm text-slate-400 leading-relaxed mb-10">
            {t.componentBody}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {t.componentBrands.map((brand, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded border border-slate-700 bg-slate-800/40 px-4 py-2 text-sm font-medium text-slate-300"
              >
                {brand}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-semibold text-slate-900 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1976D2" }}
            >
              {t.productsCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
            >
              {t.contactCta}
            </a>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  )
}
