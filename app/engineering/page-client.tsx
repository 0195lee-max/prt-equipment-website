"use client"

import { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage, type Language } from "@/hooks/use-language"

const translations = {
  ko: {
    meta: "Engineering",
    eyebrow: "Alignment Stability Engineering",
    heroTitle: "실제 양산 조건에서의 정렬 안정성.",
    heroBody:
      "PRT의 엔지니어링은 소재 변형, 장력 변화, 공정 이력, 이송 조건으로 인해 소재와 마스크의 정렬이 흔들릴 수 있는 실제 양산 환경에서의 정렬 안정성에 초점을 둡니다.",

    alignLabel: "Alignment Engineering",
    alignTitle: "Material Distortion & Alignment Correction",
    alignBody:
      "Leadframe 및 반도체 패키징 공정에서는 장력, 도금, 에칭, 열, 이송 조건에 따라 소재 위치가 미세하게 변할 수 있습니다. PRT 시스템은 Vision 기반 정렬과 전용 보정 방식을 통해 노광 전 소재와 마스크 간 정렬 편차를 줄이는 데 초점을 둡니다.",

    diagramStatus: "Alignment Sequence",
    diagramReplay: "다시 보기",
    legendReference: "기준 위치",
    legendMaterial: "소재 편차",
    legendAligned: "정렬됨",
    flowSteps: ["소재 변형", "정렬 편차", "Vision 감지", "위치 보정", "안정적인 노광 정렬"],
    diagramNote: "개념 다이어그램 — 실제 정렬 편차는 도형으로 추상화하여 표현했습니다.",

    cardsLabel: "Core Alignment Engineering",
    cards: [
      {
        title: "Vision-Based Alignment",
        sub: "Vision 기반 정렬",
        body: "노광 전 alignment mark를 확인하여 소재 위치와 정렬 편차를 파악합니다.",
      },
      {
        title: "Material Deviation Compensation",
        sub: "소재 편차 보정",
        body: "장력, 공정 이력, 이송 조건 등으로 발생한 소재 위치 편차를 전용 보정 방식으로 줄입니다.",
      },
      {
        title: "Production Condition Tuning",
        sub: "양산 조건 기반 튜닝",
        body: "소재 상태, 웹 이송 특성, 라인 속도, 생산 조건에 맞춰 장비 세팅을 조정합니다.",
      },
      {
        title: "Repeatable Exposure Setup",
        sub: "반복 가능한 노광 세팅",
        body: "반복 생산에서도 정렬과 노광 조건이 안정적으로 유지되도록 세팅을 관리합니다.",
      },
    ],

    tuningLabel: "Internal Tuning Note",
    tuningNote:
      "PRT 노광 시스템은 소재 변형으로 인한 정렬 편차를 줄이도록 설계되었습니다. 소재 상태, 공정 조건, 라인 구성에 따라 다르지만, 내부 튜닝 사례에서는 20–30µm 수준의 편차를 10µm 미만으로 줄인 경험이 있습니다.",
    tuningContext:
      "이 수치는 변형된 양산 소재 기준의 보정 후 편차이며, 장비 자체의 공칭 정렬 정밀도 사양과는 구분됩니다.",

    confidentialLabel: "Technical Confidentiality",
    confidentialNote:
      "세부 보정 구조와 공정 레시피는 고객 라인 조건에 맞춰 구성되며, 공개하지 않습니다.",

    componentsLabel: "Standard Components for Long-Term Serviceability",
    componentsBody:
      "PRT 장비는 장기 운용, 부품 교체성, 생산 환경에서의 안정성을 고려하여 표준 산업 부품을 적용합니다.",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence"],
    componentNote: "적용 부품 브랜드는 장비 모델, 구성, 고객 요구 조건에 따라 달라질 수 있습니다.",

    ctaLine: "양산 라인의 정렬 안정성 검토가 필요하신가요?",
    productsCta: "View Equipment",
    contactCta: "Engineering Inquiry",
  },
  en: {
    meta: "Engineering",
    eyebrow: "Alignment Stability Engineering",
    heroTitle: "Stable alignment under real production conditions.",
    heroBody:
      "PRT engineering focuses on substrate-to-mask alignment stability in real production environments, where material deformation, tension variation, process history, and handling conditions can affect exposure accuracy.",

    alignLabel: "Alignment Engineering",
    alignTitle: "Material Distortion & Alignment Correction",
    alignBody:
      "In leadframe and semiconductor packaging processes, material position can shift due to tension, plating, etching, heat, and transport conditions. PRT systems use vision-based alignment and a dedicated correction approach to help reduce substrate-to-mask deviation before exposure.",

    diagramStatus: "Alignment Sequence",
    diagramReplay: "Replay",
    legendReference: "Reference position",
    legendMaterial: "Material offset",
    legendAligned: "Aligned",
    flowSteps: ["Material variation", "Alignment offset", "Vision detection", "Correction", "Stable exposure alignment"],
    diagramNote: "Concept diagram — alignment offset is shown abstractly as shapes.",

    cardsLabel: "Core Alignment Engineering",
    cards: [
      {
        title: "Vision-Based Alignment",
        sub: "Vision-Based Alignment",
        body: "Alignment marks are detected to identify substrate position and offset before exposure.",
      },
      {
        title: "Material Deviation Compensation",
        sub: "Material Deviation Compensation",
        body: "A dedicated correction approach helps compensate for material-related position deviation caused by tension, process history, or handling conditions.",
      },
      {
        title: "Production Condition Tuning",
        sub: "Production Condition Tuning",
        body: "Equipment setup is tuned according to material condition, web handling behavior, line speed, and production requirements.",
      },
      {
        title: "Repeatable Exposure Setup",
        sub: "Repeatable Exposure Setup",
        body: "Alignment and exposure conditions are managed for repeatable operation across production runs.",
      },
    ],

    tuningLabel: "Internal Tuning Note",
    tuningNote:
      "PRT exposure systems are designed to reduce material-related alignment deviation. Depending on material condition, process setup, and line configuration, internal tuning cases have brought deviation in the 20–30 µm range below 10 µm.",
    tuningContext:
      "These figures refer to compensated deviation on deformed production material, and are distinct from the equipment's nominal alignment accuracy specification.",

    confidentialLabel: "Technical Confidentiality",
    confidentialNote:
      "Detailed correction structures and process recipes are configured according to customer line conditions and are not publicly disclosed.",

    componentsLabel: "Standard Components for Long-Term Serviceability",
    componentsBody:
      "PRT equipment uses standard industrial components selected for long-term serviceability, replacement availability, and stable operation in production environments.",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence"],
    componentNote: "Component brands may vary depending on model, configuration, and customer requirements.",

    ctaLine: "Need to review alignment stability for your production line?",
    productsCta: "View Equipment",
    contactCta: "Engineering Inquiry",
  },
  zh: {
    meta: "Engineering",
    eyebrow: "Alignment Stability Engineering",
    heroTitle: "真实量产条件下的对准稳定性。",
    heroBody:
      "PRT 的工程聚焦于真实量产环境中的基板与掩膜对准稳定性——在这些环境中，材料变形、张力变化、工艺历程与搬运条件都可能影响曝光精度。",

    alignLabel: "Alignment Engineering",
    alignTitle: "Material Distortion & Alignment Correction",
    alignBody:
      "在 Leadframe 与半导体封装工艺中，材料位置可能因张力、电镀、蚀刻、热与传输条件而发生细微变化。PRT 系统通过基于 Vision 的对准与专用补正方式，致力于在曝光前减少基板与掩膜之间的对准偏差。",

    diagramStatus: "Alignment Sequence",
    diagramReplay: "重播",
    legendReference: "基准位置",
    legendMaterial: "材料偏差",
    legendAligned: "对准完成",
    flowSteps: ["材料变形", "对准偏差", "Vision 检测", "位置补正", "稳定的曝光对准"],
    diagramNote: "概念示意图 — 对准偏差以抽象图形表示。",

    cardsLabel: "Core Alignment Engineering",
    cards: [
      {
        title: "Vision-Based Alignment",
        sub: "Vision-Based Alignment",
        body: "在曝光前检测 alignment mark，以识别基板位置与对准偏差。",
      },
      {
        title: "Material Deviation Compensation",
        sub: "Material Deviation Compensation",
        body: "通过专用补正方式，减少因张力、工艺历程或搬运条件而产生的材料位置偏差。",
      },
      {
        title: "Production Condition Tuning",
        sub: "Production Condition Tuning",
        body: "根据材料状态、卷材传输特性、产线速度与生产条件调整设备设置。",
      },
      {
        title: "Repeatable Exposure Setup",
        sub: "Repeatable Exposure Setup",
        body: "管理对准与曝光条件，使其在重复生产中保持稳定。",
      },
    ],

    tuningLabel: "Internal Tuning Note",
    tuningNote:
      "PRT 曝光系统旨在减少由材料变形引起的对准偏差。视材料状态、工艺条件与产线配置而定，在内部调试案例中，20–30µm 范围的偏差曾被降至 10µm 以下。",
    tuningContext:
      "该数值为基于变形量产材料的补正后偏差，与设备本身的标称对准精度规格不同。",

    confidentialLabel: "Technical Confidentiality",
    confidentialNote:
      "详细的补正结构与工艺配方根据客户产线条件进行配置，不对外公开。",

    componentsLabel: "Standard Components for Long-Term Serviceability",
    componentsBody:
      "PRT 设备采用标准工业部件，以兼顾长期运维、部件更换可得性与量产环境下的稳定运行。",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence"],
    componentNote: "所采用的部件品牌可能因设备型号、配置与客户需求而异。",

    ctaLine: "需要评估您产线的对准稳定性吗？",
    productsCta: "View Equipment",
    contactCta: "Engineering Inquiry",
  },
}

/**
 * Abstract alignment-correction CONCEPT diagram (animated, restrained).
 *
 * Deliberately non-technical: shapes only. A fixed REFERENCE frame and an
 * offset MATERIAL frame that is corrected onto the reference. No coordinates,
 * numbers, deviation/correction values, camera/HMI screens, or any depiction
 * of the real mechanism. Framing: "material position deviates from the
 * reference → aligns to the reference" (the reference frame never moves).
 * Plays once on mount; honours prefers-reduced-motion (renders aligned state).
 */
function AlignmentCorrectionDiagram({
  statusLabel,
  replayLabel,
  legendReference,
  legendMaterial,
  legendAligned,
  steps,
  note,
}: {
  statusLabel: string
  replayLabel: string
  legendReference: string
  legendMaterial: string
  legendAligned: string
  steps: string[]
  note: string
}) {
  const BLUE = "#1976D2"
  const SLATE = "#64748b"
  const RED = "#ef4444"
  const W = 560
  const H = 290
  const SW = 184
  const SH = 120
  const CX = W / 2
  const CY = H / 2
  const SX = CX - SW / 2
  const SY = CY - SH / 2
  const OFFSET = { x: 30, y: -20 }

  const [phase, setPhase] = useState(0)
  const [aligned, setAligned] = useState(false)
  const [scan, setScan] = useState(false)
  const [scanKey, setScanKey] = useState(0)
  const [markers, setMarkers] = useState(false)
  const [tf, setTf] = useState(`translate(${OFFSET.x} ${OFFSET.y})`)

  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const raf = useRef(0)
  const pos = useRef({ ...OFFSET })

  const clearAll = () => {
    timers.current.forEach((t) => clearTimeout(t))
    timers.current = []
    if (raf.current) cancelAnimationFrame(raf.current)
  }
  const at = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms))
  }
  const ease = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)

  const moveTo = (tx: number, ty: number, dur: number) => {
    if (raf.current) cancelAnimationFrame(raf.current)
    const start = performance.now()
    const fx = pos.current.x
    const fy = pos.current.y
    const frame = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const e = ease(p)
      const x = fx + (tx - fx) * e
      const y = fy + (ty - fy) * e
      pos.current = { x, y }
      setTf(`translate(${x.toFixed(2)} ${y.toFixed(2)})`)
      if (p < 1) raf.current = requestAnimationFrame(frame)
    }
    raf.current = requestAnimationFrame(frame)
  }

  const showAligned = () => {
    pos.current = { x: 0, y: 0 }
    setTf("translate(0 0)")
    setAligned(true)
    setMarkers(true)
    setScan(false)
    setPhase(steps.length - 1)
  }

  const run = () => {
    clearAll()
    pos.current = { ...OFFSET }
    setTf(`translate(${OFFSET.x} ${OFFSET.y})`)
    setAligned(false)
    setScan(false)
    setMarkers(false)
    setPhase(0)
    at(() => setPhase(1), 1000)
    at(() => {
      setPhase(2)
      setScanKey((k) => k + 1)
      setScan(true)
    }, 2400)
    at(() => {
      setScan(false)
      setMarkers(true)
    }, 3900)
    at(() => {
      setPhase(3)
      moveTo(0, 0, 1500)
    }, 4500)
    at(() => {
      setPhase(4)
      setAligned(true)
    }, 6200)
  }

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) showAligned()
    else run()
    return clearAll
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dotColor = aligned ? BLUE : phase >= 2 ? BLUE : RED
  const corners: [number, number][] = [
    [SX, SY],
    [SX + SW, SY],
    [SX, SY + SH],
    [SX + SW, SY + SH],
  ]

  return (
    <div className="relative overflow-hidden border border-slate-800 bg-slate-950/50">
      {/* header — concept status (no numbers / no HMI readout) */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/40 px-5 py-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          {statusLabel}
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full transition-colors duration-300"
            style={{ backgroundColor: dotColor }}
          />
          <span
            className="text-[11px] font-medium tracking-wide transition-colors duration-300"
            style={{ color: aligned ? BLUE : "#94a3b8" }}
          >
            {steps[phase]}
          </span>
        </span>
      </div>

      {/* concept SVG */}
      <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" role="img" aria-label={statusLabel}>
        <defs>
          <pattern id="eng-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />
          </pattern>
          <marker id="eng-corr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={BLUE} />
          </marker>
        </defs>

        <rect width={W} height={H} fill="url(#eng-grid)" />
        {/* faint center guides */}
        <line x1={CX} y1="0" x2={CX} y2={H} stroke="rgba(148,163,184,0.08)" strokeWidth="0.8" />
        <line x1="0" y1={CY} x2={W} y2={CY} stroke="rgba(148,163,184,0.08)" strokeWidth="0.8" />

        {/* Reference frame (fixed target position) */}
        <rect x={SX} y={SY} width={SW} height={SH} fill="rgba(15,23,42,0.55)" stroke={SLATE} strokeWidth="1.6" />

        {/* Vision detection sweep (abstract, restarts via key) */}
        {scan && (
          <g key={scanKey}>
            <rect x={SX} y={SY} width={SW} height="2" fill={BLUE} opacity="0">
              <animate attributeName="y" from={SY} to={SY + SH} dur="1.4s" fill="freeze" />
              <animate attributeName="opacity" values="0;0.85;0.85;0" keyTimes="0;0.05;0.9;1" dur="1.4s" fill="freeze" />
            </rect>
          </g>
        )}

        {/* Material frame (offset → corrected onto the reference) */}
        <g transform={tf}>
          <rect
            x={SX}
            y={SY}
            width={SW}
            height={SH}
            fill={aligned ? "rgba(25,118,210,0.12)" : "none"}
            stroke={aligned ? BLUE : RED}
            strokeWidth="1.8"
            strokeDasharray={aligned ? "0" : "9 5"}
            style={{ transition: "stroke 0.4s ease, fill 0.4s ease" }}
          />
        </g>

        {/* Correction-direction hint (offset phase only, abstract) */}
        {phase === 1 && (
          <line
            x1={SX + SW + OFFSET.x}
            y1={SY + OFFSET.y}
            x2={SX + SW + 5}
            y2={SY - 2}
            stroke={BLUE}
            strokeWidth="1.3"
            strokeDasharray="3 2"
            opacity="0.6"
            markerEnd="url(#eng-corr)"
          />
        )}

        {/* Alignment corner marks (abstract) */}
        {markers &&
          corners.map(([px, py], i) => (
            <g
              key={i}
              style={{ transition: "opacity 0.4s ease" }}
              opacity={aligned ? 0.3 : 0.9}
              stroke={BLUE}
              strokeWidth="1.2"
            >
              <line x1={px - 9} y1={py} x2={px + 9} y2={py} />
              <line x1={px} y1={py - 9} x2={px} y2={py + 9} />
            </g>
          ))}

        {/* Aligned confirmation — subtle blue frame, no glow */}
        {aligned && (
          <rect
            x={SX - 7}
            y={SY - 7}
            width={SW + 14}
            height={SH + 14}
            fill="none"
            stroke="rgba(25,118,210,0.3)"
            strokeWidth="1"
          />
        )}
      </svg>

      {/* legend + replay */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-800 bg-slate-900/40 px-5 py-3">
        <span className="inline-flex items-center gap-2 text-[11px] text-slate-400">
          <span className="inline-block h-3 w-3 border" style={{ borderColor: SLATE }} />
          {legendReference}
        </span>
        <span className="inline-flex items-center gap-2 text-[11px] text-slate-400">
          <span className="inline-block h-3 w-3 border border-dashed" style={{ borderColor: RED }} />
          {legendMaterial}
        </span>
        <span className="inline-flex items-center gap-2 text-[11px] text-slate-400">
          <span className="inline-block h-3 w-3 border" style={{ borderColor: BLUE, backgroundColor: "rgba(25,118,210,0.18)" }} />
          {legendAligned}
        </span>
        <button
          type="button"
          onClick={run}
          className="ml-auto inline-flex items-center gap-1.5 border border-slate-700 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 transition-colors hover:border-[#1976D2] hover:text-slate-200"
        >
          ↺ {replayLabel}
        </button>
      </div>

      {/* correction flow steps (progress with phase) */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-slate-800 px-5 py-4">
        {steps.map((step, idx) => {
          const active = idx === phase
          const done = idx < phase
          return (
            <span key={idx} className="flex items-center gap-2">
              <span
                className="inline-flex border px-3 py-1.5 text-[11px] font-medium transition-colors duration-300"
                style={{
                  borderColor: active
                    ? "rgba(25,118,210,0.5)"
                    : done
                      ? "rgba(25,118,210,0.25)"
                      : "rgba(51,65,85,1)",
                  color: active ? "#1976D2" : done ? "#7ea8d8" : "#64748b",
                  backgroundColor: active ? "rgba(25,118,210,0.1)" : "transparent",
                }}
              >
                {step}
              </span>
              {idx < steps.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-slate-700" />}
            </span>
          )
        })}
      </div>

      {/* concept note */}
      <div className="border-t border-slate-800 px-5 py-3">
        <p className="text-[11px] leading-relaxed text-slate-500">{note}</p>
      </div>
    </div>
  )
}

export default function EngineeringPage({ initialLang }: { initialLang?: Language }) {
  const [lang, setLang] = useLanguage(initialLang)
  const t = translations[lang]

  return (
    <main className="min-h-svh bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />

      {/* ── 1. Hero ──────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            background:
              "linear-gradient(105deg, transparent 42%, rgba(25,118,210,0.8) 42.5%, transparent 43%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 lg:px-8 lg:pt-28 lg:pb-24">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.eyebrow}
            </p>
          </div>
          <h1 className="mb-7 max-w-4xl text-5xl font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[64px]">
            {t.heroTitle}
          </h1>
          <p className="max-w-2xl text-lg leading-[1.75] text-slate-300">{t.heroBody}</p>
        </div>
      </section>

      {/* ── 2. Material Distortion & Alignment Correction ────── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.alignLabel}
            </p>
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">{t.alignTitle}</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-400">{t.alignBody}</p>
          </div>

          <div className="max-w-4xl">
            <AlignmentCorrectionDiagram
              statusLabel={t.diagramStatus}
              replayLabel={t.diagramReplay}
              legendReference={t.legendReference}
              legendMaterial={t.legendMaterial}
              legendAligned={t.legendAligned}
              steps={t.flowSteps}
              note={t.diagramNote}
            />
          </div>
        </div>
      </section>

      {/* ── 3. Core Alignment Engineering — 4 cards ──────────── */}
      <section style={{ backgroundColor: "rgb(30, 41, 59)" }} className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.cardsLabel}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-7">
            {t.cards.map((card, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col border border-slate-800 bg-slate-950/40 p-8 transition-colors duration-200 hover:border-slate-700 hover:bg-slate-900/40 lg:p-9"
              >
                <span
                  aria-hidden="true"
                  className="mb-5 block h-0.5 w-9"
                  style={{ backgroundColor: "#1976D2" }}
                />
                <div className="mb-2 flex items-baseline gap-3">
                  <span
                    className="font-mono text-[11px] font-bold tracking-[0.2em]"
                    style={{ color: "rgba(25,118,210,0.85)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-white lg:text-xl">{card.title}</h3>
                </div>
                {card.sub !== card.title && (
                  <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">
                    {card.sub}
                  </p>
                )}
                <p className="mt-2 text-sm leading-7 text-slate-400">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 + 5. Internal tuning note & confidentiality ────── */}
      <section className="relative bg-slate-950">
        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          {/* Internal tuning note — quiet supporting information panel */}
          <div
            className="max-w-4xl border border-slate-800 bg-slate-900/30 p-7 lg:p-8"
            style={{ borderLeftColor: "#1976D2", borderLeftWidth: 2 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {t.tuningLabel}
            </p>
            <p className="max-w-3xl text-[15px] leading-relaxed text-slate-200">{t.tuningNote}</p>
            <p className="mt-4 max-w-3xl border-t border-slate-800 pt-4 text-xs leading-relaxed text-slate-500">
              {t.tuningContext}
            </p>
          </div>

          {/* Technical confidentiality note */}
          <div className="mt-10 border-t border-slate-800 pt-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.confidentialLabel}
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-400">{t.confidentialNote}</p>
          </div>
        </div>
      </section>

      {/* ── 6. Standard Components (supporting trust section) ──── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.componentsLabel}
          </p>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-400">{t.componentsBody}</p>

          <div className="mb-5 flex flex-wrap gap-2.5">
            {t.componentBrands.map((brand, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded border border-slate-700 bg-slate-800/40 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {brand}
              </span>
            ))}
          </div>
          <p className="max-w-2xl text-xs leading-relaxed text-slate-500">{t.componentNote}</p>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────────── */}
      <section className="relative bg-slate-950">
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="mb-6 max-w-2xl text-lg font-semibold leading-snug text-white">{t.ctaLine}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/products"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0D47A1]"
              style={{ backgroundColor: "#1976D2" }}
            >
              {t.productsCta}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-slate-600 px-7 py-3.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-400 hover:bg-white/5 hover:text-white"
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
