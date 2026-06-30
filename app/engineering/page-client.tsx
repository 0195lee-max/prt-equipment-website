"use client"

import { useState, useEffect, useRef, type CSSProperties } from "react"
import { Navbar } from "@/components/navbar"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage, type Language } from "@/hooks/use-language"

const translations = {
  ko: {
    meta: "Engineering",
    eyebrow: "Alignment Stability Engineering",
    heroTitle: "Alignment Stability for Real Production.",
    heroBody:
      "PRT는 실제 양산 환경에서 발생하는 소재 위치 편차를 고려하여, 노광 전 소재와 마스크 기준의 정렬 안정성을 높이는 엔지니어링에 집중합니다.",

    alignLabel: "Alignment Engineering",
    alignTitle: "Material Distortion & Alignment Correction",
    alignBody:
      "Leadframe 및 반도체 패키징 공정에서는 도금, 에칭, 열, 장력 이력과 이송 조건에 따라 소재 위치가 미세하게 변할 수 있습니다. PRT 시스템은 Vision 기반 감지와 전용 보정 방식을 통해 노광 전 소재와 마스크 기준의 정렬 편차를 줄이는 데 초점을 둡니다.",

    diagramStatus: "Alignment Sequence",
    sequenceLabel: "Concept Visualization",
    diagramReplay: "다시 보기",
    legendReference: "기준 위치",
    legendMaterial: "소재 위치 편차",
    legendAligned: "정렬 완료",
    flowSteps: ["소재 변형", "위치 편차", "Vision 감지", "정렬 보정", "안정적인 노광 정렬"],
    diagramNote: "개념 다이어그램 — 실제 정렬 편차는 도형으로 추상화하여 표현했습니다.",

    cardsLabel: "Core Alignment Engineering",
    cards: [
      {
        title: "Vision-Based Alignment",
        sub: "Vision 기반 정렬",
        body: "노광 전 alignment mark를 확인하여 소재 위치와 정렬 편차를 파악하고, 보정 기준을 설정합니다.",
      },
      {
        title: "Material Deviation Compensation",
        sub: "소재 위치 편차 보정",
        body: "장력, 공정 이력, 이송 조건 등으로 발생한 소재 위치 편차를 전용 보정 방식으로 줄입니다.",
      },
      {
        title: "Production Condition Tuning",
        sub: "양산 조건 기반 튜닝",
        body: "소재 상태, 웹 이송 특성, 라인 속도, 생산 조건에 맞춰 장비 세팅을 조정하여 반복 생산에서의 정렬 안정성을 높입니다.",
      },
    ],

    tuningLabel: "Internal Tuning Note",
    tuningNote:
      "PRT 노광 시스템은 노광 전 소재 변형으로 인한 정렬 편차를 보정하도록 설계되었습니다. 정해진 소재 및 공정 조건에서는 20–30µm 수준의 편차를 10µm 전후 또는 그 이하 수준으로 보정할 수 있습니다.",
    tuningContext:
      "이 수치는 변형된 양산 소재 기준의 보정 후 편차이며, 장비 자체의 공칭 정렬 정밀도 사양과는 구분됩니다.",

    confidentialLabel: "Technical Confidentiality",
    confidentialNote:
      "세부 보정 구조와 공정 레시피는 고객 라인 조건에 맞춰 구성되며, 공개 자료에서는 구체 사양을 제한적으로 제공합니다.",

    componentsLabel: "Standard Components for Long-Term Serviceability",
    componentsBody:
      "PRT 장비는 장기 운용, 부품 교체성, 생산 환경에서의 안정성을 고려해 표준 산업 부품을 적용합니다.",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence"],
    componentNote: "적용 부품 브랜드는 장비 모델, 구성, 고객 요구 조건에 따라 달라질 수 있습니다.",

    ctaLine: "양산 라인의 정렬 안정성 검토가 필요하신가요?",
    productsCta: "View Equipment",
    contactCta: "Engineering Inquiry",
  },
  en: {
    meta: "Engineering",
    eyebrow: "Alignment Stability Engineering",
    heroTitle: "Alignment Stability for Real Production.",
    heroBody:
      "PRT focuses on alignment stability before exposure, helping manage material position variation under real production conditions.",

    alignLabel: "Alignment Engineering",
    alignTitle: "Material Distortion & Alignment Correction",
    alignBody:
      "In leadframe and semiconductor packaging processes, material position can shift due to plating, etching, heat, tension history, and transport conditions. PRT systems use vision-based detection and a dedicated correction approach to help reduce substrate-to-mask alignment deviation before exposure.",

    diagramStatus: "Alignment Sequence",
    sequenceLabel: "Concept Visualization",
    diagramReplay: "Replay",
    legendReference: "Reference position",
    legendMaterial: "Material offset",
    legendAligned: "Aligned position",
    flowSteps: ["Material variation", "Position offset", "Vision detection", "Alignment correction", "Stable exposure alignment"],
    diagramNote: "Concept diagram — alignment offset is shown abstractly as shapes.",

    cardsLabel: "Core Alignment Engineering",
    cards: [
      {
        title: "Vision-Based Alignment",
        sub: "Vision-Based Alignment",
        body: "Alignment marks are detected before exposure to identify substrate position and alignment offset, and to set the correction reference.",
      },
      {
        title: "Material Deviation Compensation",
        sub: "Material Deviation Compensation",
        body: "A dedicated correction approach helps reduce material-related position deviation caused by tension, process history, or handling conditions.",
      },
      {
        title: "Production Condition Tuning",
        sub: "Production Condition Tuning",
        body: "Equipment setup is tuned according to material condition, web handling behavior, line speed, and production requirements to support repeatable alignment stability.",
      },
    ],

    tuningLabel: "Internal Tuning Note",
    tuningNote:
      "PRT exposure systems are designed to compensate for material-related alignment deviation before exposure. Under defined material and process conditions, deviation in the 20–30 µm range can be corrected to the around-10 µm level or below.",
    tuningContext:
      "These figures refer to compensated deviation on deformed production material, and are distinct from the equipment's nominal alignment accuracy specification.",

    confidentialLabel: "Technical Confidentiality",
    confidentialNote:
      "Detailed correction structures and process recipes are configured according to customer line conditions, and specific implementation details are not disclosed in public materials.",

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
    heroTitle: "Alignment Stability for Real Production.",
    heroBody:
      "PRT 专注于曝光前的对准稳定性，在真实量产条件下帮助管理材料位置偏差。",

    alignLabel: "Alignment Engineering",
    alignTitle: "Material Distortion & Alignment Correction",
    alignBody:
      "在 Leadframe 与半导体封装工艺中，材料位置可能因电镀、蚀刻、热、张力历程与传输条件而发生细微变化。PRT 系统通过基于 Vision 的检测与专用补正方式，致力于在曝光前减少基板与掩膜基准的对准偏差。",

    diagramStatus: "Alignment Sequence",
    sequenceLabel: "Concept Visualization",
    diagramReplay: "重播",
    legendReference: "基准位置",
    legendMaterial: "材料位置偏差",
    legendAligned: "对准完成",
    flowSteps: ["材料变形", "位置偏差", "Vision 检测", "对准补正", "稳定的曝光对准"],
    diagramNote: "概念示意图 — 对准偏差以抽象图形表示。",

    cardsLabel: "Core Alignment Engineering",
    cards: [
      {
        title: "Vision-Based Alignment",
        sub: "Vision-Based Alignment",
        body: "在曝光前检测 alignment mark，以识别基板位置与对准偏差，并设定补正基准。",
      },
      {
        title: "Material Deviation Compensation",
        sub: "Material Deviation Compensation",
        body: "通过专用补正方式，减少因张力、工艺历程或搬运条件而产生的材料位置偏差。",
      },
      {
        title: "Production Condition Tuning",
        sub: "Production Condition Tuning",
        body: "根据材料状态、卷材传输特性、产线速度与生产条件调整设备设置，以支持可重复的对准稳定性。",
      },
    ],

    tuningLabel: "Internal Tuning Note",
    tuningNote:
      "PRT 曝光系统旨在于曝光前补正由材料变形引起的对准偏差。在特定的材料与工艺条件下，20–30µm 范围的偏差可补正至 10µm 前后或更低水平。",
    tuningContext:
      "该数值为基于变形量产材料的补正后偏差，与设备本身的标称对准精度规格不同。",

    confidentialLabel: "Technical Confidentiality",
    confidentialNote:
      "详细的补正结构与工艺配方根据客户产线条件进行配置，公开资料中仅有限提供具体规格。",

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
  const SW = 188
  const SH = 122
  const CX = W / 2
  const CY = H / 2
  const SX = CX - SW / 2
  const SY = CY - SH / 2
  const OFFSET = { x: 30, y: -18 }
  // Material enters from slightly above its resting offset, then settles.
  const ENTER = { x: OFFSET.x, y: OFFSET.y - 16 }

  const [phase, setPhase] = useState(0)
  const [entered, setEntered] = useState(false)
  const [guides, setGuides] = useState(false)
  const [scan, setScan] = useState(false)
  const [scanKey, setScanKey] = useState(0)
  const [markers, setMarkers] = useState(false)
  const [markerKey, setMarkerKey] = useState(0)
  const [correcting, setCorrecting] = useState(false)
  const [aligned, setAligned] = useState(false)
  const [tf, setTf] = useState(`translate(${ENTER.x} ${ENTER.y})`)

  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const raf = useRef(0)
  const driftRaf = useRef(0)
  const driftOn = useRef(false)
  const pos = useRef({ ...ENTER })
  const rootRef = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  const stopDrift = () => {
    driftOn.current = false
    if (driftRaf.current) cancelAnimationFrame(driftRaf.current)
  }
  const clearAll = () => {
    timers.current.forEach((t) => clearTimeout(t))
    timers.current = []
    if (raf.current) cancelAnimationFrame(raf.current)
    stopDrift()
  }
  const at = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms))
  }
  // Smooth in-out for entrance; gentle "settle" (mild overshoot) for correction.
  const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)
  const easeSettle = (p: number) => {
    const c1 = 1.0
    const c3 = c1 + 1
    return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2)
  }

  const moveTo = (tx: number, ty: number, dur: number, easeFn: (p: number) => number = easeInOut) => {
    if (raf.current) cancelAnimationFrame(raf.current)
    const start = performance.now()
    const fx = pos.current.x
    const fy = pos.current.y
    const frame = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const e = easeFn(p)
      const x = fx + (tx - fx) * e
      const y = fy + (ty - fy) * e
      pos.current = { x, y }
      setTf(`translate(${x.toFixed(2)} ${y.toFixed(2)})`)
      if (p < 1) raf.current = requestAnimationFrame(frame)
    }
    raf.current = requestAnimationFrame(frame)
  }

  // Subtle pre-correction drift: while offset, the material plane never sits
  // perfectly still — a sub-pixel sine wander conveys "position not yet settled"
  // (no shake, no distortion; abstract frame only).
  const startDrift = () => {
    stopDrift()
    if (raf.current) cancelAnimationFrame(raf.current)
    pos.current = { x: OFFSET.x, y: OFFSET.y }
    driftOn.current = true
    const t0 = performance.now()
    const loop = (now: number) => {
      if (!driftOn.current) return
      const t = (now - t0) / 1000
      const x = OFFSET.x + Math.sin(t * 1.6) * 1.1
      const y = OFFSET.y + Math.sin(t * 1.05 + 1) * 0.8
      setTf(`translate(${x.toFixed(2)} ${y.toFixed(2)})`)
      driftRaf.current = requestAnimationFrame(loop)
    }
    driftRaf.current = requestAnimationFrame(loop)
  }

  const showAligned = () => {
    pos.current = { x: 0, y: 0 }
    setTf("translate(0 0)")
    setEntered(true)
    setGuides(false)
    setScan(false)
    setCorrecting(false)
    setMarkers(true)
    setAligned(true)
    setPhase(steps.length - 1)
  }

  const run = () => {
    clearAll()
    pos.current = { ...ENTER }
    setTf(`translate(${ENTER.x} ${ENTER.y})`)
    setEntered(false)
    setGuides(false)
    setScan(false)
    setMarkers(false)
    setCorrecting(false)
    setAligned(false)
    setPhase(0)
    // 1 — Material variation: material plane fades in, settles slightly offset,
    //     then keeps a sub-pixel drift so it never reads as a frozen frame.
    at(() => {
      setEntered(true)
      moveTo(OFFSET.x, OFFSET.y, 760)
    }, 60)
    at(() => startDrift(), 900)
    // 2 — Position offset: offset guide connectors reveal the displacement.
    at(() => {
      setPhase(1)
      setGuides(true)
    }, 1450)
    // 3 — Vision detection: fine optical scan sweeps the reference plane.
    at(() => {
      setPhase(2)
      setScanKey((k) => k + 1)
      setScan(true)
    }, 2800)
    // detection complete — reference marks settle in with a brief pulse.
    at(() => {
      setScan(false)
      setMarkers(true)
      setMarkerKey((k) => k + 1)
    }, 4500)
    // 4 — Alignment correction: drift stops, material eases on and settles.
    at(() => {
      setPhase(3)
      setGuides(false)
      stopDrift()
      setCorrecting(true)
      moveTo(0, 0, 1650, easeSettle)
    }, 4950)
    // 5 — Stable exposure alignment: frames lock, blue outline stabilizes.
    at(() => {
      setPhase(4)
      setCorrecting(false)
      setAligned(true)
    }, 6700)
  }

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      showAligned()
      return
    }
    const el = rootRef.current
    let io: IntersectionObserver | null = null
    let onScrollResize: (() => void) | null = null

    const cleanupTriggers = () => {
      io?.disconnect()
      io = null
      if (onScrollResize) {
        window.removeEventListener("scroll", onScrollResize)
        window.removeEventListener("resize", onScrollResize)
        onScrollResize = null
      }
    }
    const start = () => {
      if (started.current) return
      started.current = true
      cleanupTriggers()
      run()
    }

    if (!el) {
      start()
      return clearAll
    }

    // Start the sequence only once the diagram is scrolled into view (revealed),
    // so it isn't already finished by the time the user reaches it. Uses an
    // IntersectionObserver plus a scroll/resize fallback (same robustness as the
    // site's reveal system).
    const inView = () => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight * 0.85 && r.bottom > 0
    }
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) start()
        },
        { threshold: 0.25 },
      )
      io.observe(el)
    }
    onScrollResize = () => {
      if (inView()) start()
    }
    window.addEventListener("scroll", onScrollResize, { passive: true })
    window.addEventListener("resize", onScrollResize, { passive: true })
    const initial = window.setTimeout(() => {
      if (inView()) start()
    }, 120)

    return () => {
      cleanupTriggers()
      window.clearTimeout(initial)
      clearAll()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dotColor = aligned ? BLUE : phase >= 2 ? BLUE : entered ? RED : SLATE
  const corners: [number, number][] = [
    [SX, SY],
    [SX + SW, SY],
    [SX, SY + SH],
    [SX + SW, SY + SH],
  ]
  // Material-plane centre at its resting offset (for the correction direction cue).
  const mcx = CX + OFFSET.x
  const mcy = CY + OFFSET.y

  return (
    <div ref={rootRef} className="relative overflow-hidden border border-slate-800 bg-slate-950/60">
      {/* slim header — quiet phase indicator, no debug readout */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/30 px-5 py-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
          {statusLabel}
        </span>
        <span
          className="inline-block h-1.5 w-1.5 rounded-full transition-colors duration-500"
          style={{ backgroundColor: dotColor }}
        />
      </div>

      {/* concept SVG — abstract reference / material / aligned frames.
          Pseudo-3D: a stacked back plane + a floating material plane (soft
          depth shadow) convey layered surfaces without any real machine
          structure, coordinates, or numeric readouts. */}
      <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" role="img" aria-label={statusLabel}>
        <defs>
          <pattern id="eng-grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M 26 0 L 0 0 0 26" fill="none" stroke="rgba(148,163,184,0.05)" strokeWidth="0.6" />
          </pattern>
          <linearGradient id="eng-sheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.035)" />
            <stop offset="42%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="eng-scan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(25,118,210,0)" />
            <stop offset="50%" stopColor="rgba(25,118,210,0.22)" />
            <stop offset="100%" stopColor="rgba(25,118,210,0)" />
          </linearGradient>
          <linearGradient id="eng-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(25,118,210,0.18)" />
            <stop offset="100%" stopColor="rgba(25,118,210,0.05)" />
          </linearGradient>
          <linearGradient id="eng-glass-off" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(239,68,68,0.10)" />
            <stop offset="100%" stopColor="rgba(239,68,68,0.02)" />
          </linearGradient>
          <filter id="eng-depth" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="rgba(2,6,23,0.6)" />
          </filter>
          <marker id="eng-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 1 L8 5 L0 9 z" fill={BLUE} />
          </marker>
        </defs>

        {/* matte base + blueprint grid + soft top sheen */}
        <rect width={W} height={H} fill="#0a1120" />
        <rect width={W} height={H} fill="url(#eng-grid)" />
        <rect width={W} height={H} fill="url(#eng-sheen)" />
        {/* faint center guides */}
        <line x1={CX} y1="0" x2={CX} y2={H} stroke="rgba(148,163,184,0.07)" strokeWidth="0.7" />
        <line x1="0" y1={CY} x2={W} y2={CY} stroke="rgba(148,163,184,0.07)" strokeWidth="0.7" />

        {/* ── Pseudo-3D depth: a faint stacked plane behind the reference ── */}
        <rect x={SX + 8} y={SY + 11} width={SW} height={SH} fill="rgba(148,163,184,0.022)" stroke="rgba(148,163,184,0.10)" strokeWidth="1" />

        {/* ── Reference frame (fixed): layered reference plane ── */}
        <rect x={SX} y={SY} width={SW} height={SH} fill="rgba(148,163,184,0.05)" stroke={SLATE} strokeWidth="1.4" />
        <rect x={SX + 9} y={SY + 9} width={SW - 18} height={SH - 18} fill="none" stroke="rgba(148,163,184,0.16)" strokeWidth="0.7" />

        {/* ── Position offset: thin dashed connectors from each reference
               corner to the offset material corner (displacement, no numbers) ── */}
        <g style={{ opacity: guides ? 1 : 0, transition: "opacity 0.5s ease" }}>
          {corners.map(([px, py], i) => (
            <g key={`gd-${i}`}>
              <line
                x1={px}
                y1={py}
                x2={px + OFFSET.x}
                y2={py + OFFSET.y}
                stroke="rgba(239,68,68,0.5)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
              />
              <circle cx={px + OFFSET.x} cy={py + OFFSET.y} r="1.6" fill="rgba(239,68,68,0.7)">
                {/* very subtle breathing so the offset state is never a frozen picture */}
                <animate attributeName="opacity" values="0.75;0.4;0.75" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>

        {/* ── Vision detection — fine optical scan + brief corner detection pulses ── */}
        {scan && (
          <g key={scanKey}>
            {/* soft scan band */}
            <rect x={SX} y={SY - 10} width={SW} height="20" fill="url(#eng-scan)" opacity="0">
              <animate attributeName="y" from={SY - 10} to={SY + SH - 10} dur="1.7s" fill="freeze" />
              <animate attributeName="opacity" values="0;0.88;0.88;0" keyTimes="0;0.06;0.9;1" dur="1.7s" fill="freeze" />
            </rect>
            {/* precise scan line — fine, not bright */}
            <rect x={SX} y={SY} width={SW} height="1.2" fill={BLUE} opacity="0">
              <animate attributeName="y" from={SY} to={SY + SH} dur="1.7s" fill="freeze" />
              <animate attributeName="opacity" values="0;0.82;0.82;0" keyTimes="0;0.06;0.9;1" dur="1.7s" fill="freeze" />
            </rect>
            {/* corner detection pulses — staggered as the line sweeps past (2–4) */}
            {corners.map(([px, py], i) => (
              <circle key={`scan-pulse-${i}`} cx={px} cy={py} r="2" fill="none" stroke={BLUE} strokeWidth="1" opacity="0">
                <animate attributeName="r" values="2;8" dur="0.8s" begin={`${0.25 + i * 0.34}s`} fill="freeze" />
                <animate attributeName="opacity" values="0;0.58;0" dur="0.8s" begin={`${0.25 + i * 0.34}s`} fill="freeze" />
              </circle>
            ))}
          </g>
        )}

        {/* ── Reference corner marks (appear after detection) ── */}
        {markers &&
          corners.map(([px, py], i) => {
            const dx = px === SX ? 1 : -1
            const dy = py === SY ? 1 : -1
            return (
              <g key={`ref-${i}`} stroke="rgba(148,163,184,0.55)" strokeWidth="1" style={{ transition: "opacity 0.5s ease" }}>
                <line x1={px} y1={py} x2={px + 11 * dx} y2={py} />
                <line x1={px} y1={py} x2={px} y2={py + 11 * dy} />
              </g>
            )
          })}

        {/* ── Detection pulse — brief, subtle ring at each mark ── */}
        {markers &&
          corners.map(([px, py], i) => (
            <circle key={`pulse-${markerKey}-${i}`} cx={px} cy={py} r="2" fill="none" stroke={BLUE} strokeWidth="1" opacity="0">
              <animate attributeName="r" from="2" to="10" dur="0.7s" fill="freeze" />
              <animate attributeName="opacity" values="0;0.5;0" keyTimes="0;0.2;1" dur="0.7s" fill="freeze" />
            </circle>
          ))}

        {/* ── Material plane: offset glass ghost → corrected onto reference.
               Opacity wrapper handles the soft entrance; depth filter makes it
               read as a sheet floating above the reference plane. ── */}
        <g style={{ opacity: entered ? 1 : 0, transition: "opacity 0.55s ease" }}>
          <g transform={tf} filter="url(#eng-depth)">
            <rect
              x={SX}
              y={SY}
              width={SW}
              height={SH}
              fill={aligned ? "url(#eng-glass)" : "url(#eng-glass-off)"}
              stroke={aligned ? BLUE : RED}
              strokeWidth={aligned ? 1.8 : 1.2}
              strokeDasharray={aligned ? "0" : "6 5"}
              opacity={aligned ? 1 : 0.7}
              style={{ transition: "stroke 0.5s ease, fill 0.5s ease, opacity 0.5s ease, stroke-width 0.5s ease" }}
            />
            {aligned && (
              <rect x={SX + 1.5} y={SY + 1.5} width={SW - 3} height={SH - 3} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
            )}
          </g>
        </g>

        {/* ── Correction direction cue — thin arrow toward the reference,
               fading as the material settles (not a mechanism, just direction) ── */}
        {correcting && (
          <line
            x1={mcx - OFFSET.x * 0.18}
            y1={mcy - OFFSET.y * 0.18}
            x2={CX + OFFSET.x * 0.18}
            y2={CY + OFFSET.y * 0.18}
            stroke={BLUE}
            strokeWidth="1.4"
            markerEnd="url(#eng-arrow)"
            opacity="0"
          >
            <animate attributeName="opacity" values="0;0.75;0.75;0" keyTimes="0;0.15;0.65;1" dur="1.6s" fill="freeze" />
          </line>
        )}

        {/* ── Aligned accents — blue corner ticks (premium, no glow) ── */}
        {aligned &&
          corners.map(([px, py], i) => {
            const dx = px === SX ? 1 : -1
            const dy = py === SY ? 1 : -1
            return (
              <g key={`al-${i}`} stroke={BLUE} strokeWidth="1.6">
                <line x1={px} y1={py} x2={px + 13 * dx} y2={py} />
                <line x1={px} y1={py} x2={px} y2={py + 13 * dy} />
              </g>
            )
          })}
      </svg>

      {/* legend + subtle replay */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-800/80 bg-slate-900/30 px-5 py-3">
        <span className="inline-flex items-center gap-2 text-[11px] text-slate-400">
          <span className="inline-block h-2.5 w-3.5 border" style={{ borderColor: SLATE }} />
          {legendReference}
        </span>
        <span className="inline-flex items-center gap-2 text-[11px] text-slate-400">
          <span className="inline-block h-2.5 w-3.5 border border-dashed" style={{ borderColor: "rgba(239,68,68,0.7)" }} />
          {legendMaterial}
        </span>
        <span className="inline-flex items-center gap-2 text-[11px] text-slate-400">
          <span className="inline-block h-2.5 w-3.5 border" style={{ borderColor: BLUE, backgroundColor: "rgba(25,118,210,0.16)" }} />
          {legendAligned}
        </span>
        <button
          type="button"
          onClick={run}
          className="ml-auto text-[10px] font-medium uppercase tracking-[0.14em] text-slate-600 transition-colors hover:text-slate-300"
        >
          ↻ {replayLabel}
        </button>
      </div>

      {/* process bar — dots + labels + connectors (not buttons) */}
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-3 border-t border-slate-800/80 px-5 py-4">
        {steps.map((step, idx) => {
          const active = idx === phase
          const done = idx < phase
          return (
            <span key={idx} className="flex items-center gap-2.5">
              <span className="flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: active ? "#4ea6f5" : done ? BLUE : "#334155",
                    transform: active ? "scale(1.5)" : "scale(1)",
                  }}
                />
                <span
                  className="text-[11px] tracking-wide transition-colors duration-300"
                  style={{ color: active ? "#7cbcf5" : done ? "#7ea8d8" : "#64748b", fontWeight: active ? 600 : 400 }}
                >
                  {step}
                </span>
              </span>
              {idx < steps.length - 1 && (
                <span className="h-px w-5" style={{ backgroundColor: "rgba(51,65,85,0.7)" }} />
              )}
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
          <div data-reveal="label" className="mb-6 flex items-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.eyebrow}
            </p>
          </div>
          <h1 data-reveal="heading" className="mb-7 max-w-4xl text-5xl font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[64px]">
            {t.heroTitle}
          </h1>
          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="max-w-2xl text-lg leading-[1.75] text-slate-300"
          >
            {t.heroBody}
          </p>
        </div>
      </section>

      {/* ── 2. Material Distortion & Alignment Correction ────── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div>
            <p data-reveal="label" className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.alignLabel}
            </p>
            <h2 data-reveal="heading" className="mb-4 text-2xl font-bold text-white lg:text-3xl">{t.alignTitle}</h2>
            <p
              data-reveal
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
              className="max-w-3xl text-sm leading-relaxed text-slate-400"
            >
              {t.alignBody}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Core Alignment Engineering — 4 cards ──────────── */}
      <section style={{ backgroundColor: "rgb(30, 41, 59)" }} className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div data-reveal="label" className="mb-12 flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.cardsLabel}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.cards.map((card, idx) => (
              <div
                key={idx}
                data-reveal="ui"
                style={{ "--reveal-delay": `${idx * 70}ms` } as CSSProperties}
                className={`group relative flex flex-col border border-slate-800 bg-slate-950/40 p-7 transition-colors duration-200 hover:border-slate-600 hover:bg-slate-900/40 lg:p-8 ${
                  idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* accent line + number on one row; title gets its own full-width
                    line so it stays on a single line on desktop */}
                <div className="mb-4 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="block h-0.5 w-9"
                    style={{ backgroundColor: "#1976D2" }}
                  />
                  <span
                    className="font-mono text-[11px] font-bold tracking-[0.2em]"
                    style={{ color: "rgba(25,118,210,0.85)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug tracking-tight text-white lg:whitespace-nowrap">
                  {card.title}
                </h3>
                {card.sub !== card.title && (
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">
                    {card.sub}
                  </p>
                )}
                <p className="mt-3 text-sm leading-7 text-slate-400">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Alignment Sequence — concept visualization of the flow above ── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div data-reveal="label" className="mb-10 flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.sequenceLabel}
            </p>
          </div>

          <div
            data-reveal="ui"
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="max-w-4xl"
          >
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

      {/* ── 5 + 6. Internal tuning note & confidentiality ────── */}
      <section className="relative bg-slate-950">
        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          {/* Internal tuning note — quiet supporting information panel */}
          <div
            data-reveal="ui"
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
          <div
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="mt-10 border-t border-slate-800 pt-8"
          >
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
          <p data-reveal="label" className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.componentsLabel}
          </p>
          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="mb-8 max-w-xl text-sm leading-relaxed text-slate-400"
          >
            {t.componentsBody}
          </p>

          <div
            data-reveal="ui"
            style={{ "--reveal-delay": "200ms" } as CSSProperties}
            className="mb-5 flex flex-wrap gap-2.5"
          >
            {t.componentBrands.map((brand, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-[3px] border border-slate-700/60 bg-slate-900/40 px-3 py-1.5 text-[13px] font-normal text-slate-300 transition-all duration-200 hover:-translate-y-px hover:border-[#1976D2]/60 hover:bg-slate-800/50 hover:text-slate-100"
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
          <p data-reveal="heading" className="mb-6 max-w-2xl text-lg font-semibold leading-snug text-white">{t.ctaLine}</p>
          <div
            data-reveal="ui"
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="flex flex-wrap gap-4"
          >
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
