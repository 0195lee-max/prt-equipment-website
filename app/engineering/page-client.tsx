"use client"

import { useState, useEffect, useRef, useCallback, type CSSProperties } from "react"
import { Navbar } from "@/components/navbar"
import { ArrowRight, ArrowDown, RotateCcw } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage, type Language } from "@/hooks/use-language"

const translations = {
  ko: {
    meta: "Engineering",
    eyebrow: "Alignment Stability Engineering",
    heroTitle: "Alignment Stability for Real Production.",
    heroBody:
      "PRT는 노광 전 소재와 마스크 기준의 정렬 안정성을 높이는 엔지니어링에 집중합니다.",

    alignLabel: "Alignment Engineering",
    alignTitle: "Material Distortion & Alignment Correction",
    alignBody: [
      "Leadframe 및 반도체 패키징 공정에서는 도금, 에칭, 열처리 과정에서 소재가 미세하게 수축·변형될 수 있습니다.",
      "PRT 시스템은 Vision 기반 감지와 전용 보정 방식을 통해 노광 전 정렬 편차를 줄이는 데 초점을 둡니다.",
    ],

    diagramStatus: "Alignment Sequence",
    sequenceLabel: "Concept Visualization",
    sequenceTitle: "정렬 보정 시퀀스",
    diagramPlain: "변형된 소재를 기준 위치에 가깝게 조금씩 보정하는 과정입니다.",
    diagramReplay: "다시 보기",
    legendReference: "파란색 · 기준 노광 위치",
    legendMaterial: "보라색 · 변형된 소재 위치",
    legendAligned: "정렬 완료",
    refTag: "기준",
    matTag: "소재",
    monitorCta: "실제 모니터 예시 보기",
    monitorPlaceholder: "실제 모니터 영상은 추후 업데이트 예정입니다.",
    flowSteps: ["소재 변형", "위치 차이 확인", "Vision 감지", "단계별 보정", "안정적 정렬"],
    diagramNote: "개념 다이어그램 — 변형된 소재 형상을 단계적으로 보정하여 기준 노광 형상에 가깝게 수렴시키는 과정을 추상화한 것입니다.",

    monitorSectionLabel: "Actual Monitor Example",
    monitorHeading: "실제 모니터 예시",
    monitorDesc: "정렬 보정 과정을 보여주는 실제 모니터 캡처 시퀀스입니다.",
    monitorInitialLabel: "초기 편차",
    monitorResultLabel: "보정 결과",
    monitorFlow: "초기 편차 → 보정 결과",
    resultLabel: "보정 결과 예시",
    resultIntro: "해당 예시에서는 코너 편차가 평균 17.1 µm에서 5.4 µm 수준으로 감소했습니다.",
    resultColCorner: "코너",
    resultColBefore: "보정 전",
    resultColAfter: "보정 후",
    resultAvgLabel: "평균 편차",
    resultReduction: "약 68% 감소",
    resultCaution: "보정 결과는 소재 변형 정도에 따라 달라질 수 있습니다.",
    monitorReplay: "시퀀스 다시 보기",

    cardsLabel: "Core Alignment Engineering",
    cards: [
      {
        title: "Vision-Based Alignment",
        sub: "Vision 기반 정렬",
        body: "alignment mark를 확인하여 소재 위치와 기준 형상 간의 정렬 편차를 파악합니다.",
      },
      {
        title: "Material Deviation Compensation",
        sub: "소재 위치 편차 보정",
        body: "도금, 에칭, 열처리 과정에서 발생한 소재 수축·변형을 단계적으로 보정합니다.",
      },
      {
        title: "Production Condition Tuning",
        sub: "양산 조건 기반 튜닝",
        body: "소재 상태와 라인 속도에 맞춰 장비 조건을 조정하여 양산 라인에서 안정적인 정렬 상태를 유지합니다.",
      },
    ],

    tuningLabel: "Internal Tuning Note",
    tuningNote:
      "PRT 노광 시스템은 소재 변형으로 인한 정렬 편차를 보정하도록 설계되었습니다. 정해진 소재 및 공정 조건에서는 20–30µm 수준의 편차를 10µm 전후 또는 그 이하 수준으로 보정할 수 있습니다.",
    tuningContext:
      "이 수치는 변형된 양산 소재 기준의 보정 후 편차이며, 장비 자체의 공칭 정렬 정밀도 사양과는 구분됩니다.",

    confidentialLabel: "Technical Confidentiality",
    confidentialNote:
      "세부 보정 구조와 공정 레시피는 고객 라인 조건에 맞춰 구성되며, 공개 자료에서는 구체 사양을 제한적으로 제공합니다.",

    componentsLabel: "Standard Components for Long-Term Serviceability",
    componentsBody:
      "PRT 장비는 장기 운용, 부품 교체성, 생산 환경에서의 안정성을 고려해 표준 산업 부품을 적용합니다.",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence", "SPG", "기타 산업용 부품"],
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
      "PRT focuses on engineering that improves substrate-to-mask alignment stability before exposure.",

    alignLabel: "Alignment Engineering",
    alignTitle: "Material Distortion & Alignment Correction",
    alignBody: [
      "Leadframe and semiconductor packaging processes can cause subtle material shrinkage and deformation through plating, etching, and heat treatment.",
      "PRT systems focus on reducing alignment deviation before exposure through vision-based detection and dedicated correction methods.",
    ],

    diagramStatus: "Alignment Sequence",
    sequenceLabel: "Concept Visualization",
    sequenceTitle: "Alignment Correction Sequence",
    diagramPlain: "Distorted material is gradually corrected toward the reference position.",
    diagramReplay: "Replay",
    legendReference: "Blue · Reference exposure position",
    legendMaterial: "Purple · Distorted material position",
    legendAligned: "Aligned",
    refTag: "Reference",
    matTag: "Material",
    monitorCta: "View Real Monitor Example",
    monitorPlaceholder: "Real monitor footage will be added later.",
    flowSteps: ["Material distortion", "Position offset", "Vision detection", "Step-by-step correction", "Stable alignment"],
    diagramNote: "Concept diagram — the distorted substrate geometry is corrected step by step until it converges closely to the reference exposure geometry (abstract, not actual values).",

    monitorSectionLabel: "Actual Monitor Example",
    monitorHeading: "Actual Monitor Example",
    monitorDesc: "Actual monitor capture sequence showing alignment correction.",
    monitorInitialLabel: "Initial Deviation",
    monitorResultLabel: "Corrected Result",
    monitorFlow: "Initial Deviation → Corrected Result",
    resultLabel: "Correction Result Example",
    resultIntro: "In this sample sequence, corner deviation was reduced from an average of 17.1 µm to 5.4 µm.",
    resultColCorner: "Corner",
    resultColBefore: "Before",
    resultColAfter: "After",
    resultAvgLabel: "Average deviation",
    resultReduction: "Approx. 68% reduction",
    resultCaution: "Results may vary depending on material condition, line setup, and process environment.",
    monitorReplay: "Replay Sequence",

    cardsLabel: "Core Alignment Engineering",
    cards: [
      {
        title: "Vision-Based Alignment",
        sub: "Vision-Based Alignment",
        body: "Alignment marks are checked to identify deviation between the substrate position and the reference geometry.",
      },
      {
        title: "Material Deviation Compensation",
        sub: "Material Deviation Compensation",
        body: "Material shrinkage and deformation caused by plating, etching, and heat treatment are corrected step by step.",
      },
      {
        title: "Production Condition Tuning",
        sub: "Production Condition Tuning",
        body: "Equipment conditions are adjusted according to material condition and line speed to maintain stable alignment in production lines.",
      },
    ],

    tuningLabel: "Internal Tuning Note",
    tuningNote:
      "PRT exposure systems are designed to compensate for material-related alignment deviation. Under defined material and process conditions, deviation in the 20–30 µm range can be corrected to the around-10 µm level or below.",
    tuningContext:
      "These figures refer to compensated deviation on deformed production material, and are distinct from the equipment's nominal alignment accuracy specification.",

    confidentialLabel: "Technical Confidentiality",
    confidentialNote:
      "Detailed correction structures and process recipes are configured according to customer line conditions, and specific implementation details are not disclosed in public materials.",

    componentsLabel: "Standard Components for Long-Term Serviceability",
    componentsBody:
      "PRT equipment uses standard industrial components selected for long-term serviceability, replacement availability, and stable operation in production environments.",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence", "SPG", "Other Components"],
    componentNote: "Applied component brands may vary depending on model, configuration, and customer requirements.",

    ctaLine: "Need to review alignment stability for your production line?",
    productsCta: "View Equipment",
    contactCta: "Engineering Inquiry",
  },
  zh: {
    meta: "Engineering",
    eyebrow: "Alignment Stability Engineering",
    heroTitle: "Alignment Stability for Real Production.",
    heroBody:
      "PRT 专注于提升曝光前基板与掩膜基准的对准稳定性。",

    alignLabel: "Alignment Engineering",
    alignTitle: "Material Distortion & Alignment Correction",
    alignBody: [
      "在 Leadframe 与半导体封装工艺中，材料可能在电镀、蚀刻与热处理过程中发生细微的收缩或变形。",
      "PRT 系统通过基于 Vision 的检测与专用补正方式，致力于在曝光前减少对准偏差。",
    ],

    diagramStatus: "Alignment Sequence",
    sequenceLabel: "Concept Visualization",
    sequenceTitle: "对准补正流程",
    diagramPlain: "将变形的材料逐步补正至接近基准位置的过程。",
    diagramReplay: "重播",
    legendReference: "蓝色 · 基准曝光位置",
    legendMaterial: "紫色 · 变形材料位置",
    legendAligned: "对准完成",
    refTag: "基准",
    matTag: "材料",
    monitorCta: "查看实际监控示例",
    monitorPlaceholder: "实际监控视频将于稍后添加。",
    flowSteps: ["材料变形", "位置偏差确认", "Vision 检测", "分步补正", "稳定对准"],
    diagramNote: "概念示意图 — 变形的材料形状经过逐步补正，最终接近并收敛于曝光基准形状（抽象表示，非实际数值）。",

    monitorSectionLabel: "Actual Monitor Example",
    monitorHeading: "实际监控画面示例",
    monitorDesc: "展示对位校正过程的实际监控画面序列。",
    monitorInitialLabel: "初始偏差",
    monitorResultLabel: "校正结果",
    monitorFlow: "初始偏差 → 校正结果",
    resultLabel: "校正结果示例",
    resultIntro: "在该示例中，角点偏差由平均 17.1 µm 降至 5.4 µm。",
    resultColCorner: "角点",
    resultColBefore: "校正前",
    resultColAfter: "校正后",
    resultAvgLabel: "平均偏差",
    resultReduction: "约 68% 降低",
    resultCaution: "校正结果可能会因材料状态、产线条件和工艺环境而有所不同。",
    monitorReplay: "重新播放序列",

    cardsLabel: "Core Alignment Engineering",
    cards: [
      {
        title: "Vision-Based Alignment",
        sub: "Vision-Based Alignment",
        body: "检查 alignment mark，以识别基板位置与基准形状之间的对准偏差。",
      },
      {
        title: "Material Deviation Compensation",
        sub: "Material Deviation Compensation",
        body: "对电镀、蚀刻与热处理过程中产生的材料收缩与变形进行逐步补正。",
      },
      {
        title: "Production Condition Tuning",
        sub: "Production Condition Tuning",
        body: "根据材料状态与产线速度调整设备条件，在量产线中保持稳定的对准状态。",
      },
    ],

    tuningLabel: "Internal Tuning Note",
    tuningNote:
      "PRT 曝光系统旨在补正由材料变形引起的对准偏差。在特定的材料与工艺条件下，20–30µm 范围的偏差可补正至 10µm 前后或更低水平。",
    tuningContext:
      "该数值为基于变形量产材料的补正后偏差，与设备本身的标称对准精度规格不同。",

    confidentialLabel: "Technical Confidentiality",
    confidentialNote:
      "详细的补正结构与工艺配方根据客户产线条件进行配置，公开资料中仅有限提供具体规格。",

    componentsLabel: "Standard Components for Long-Term Serviceability",
    componentsBody:
      "PRT 设备采用标准工业部件，以兼顾长期运维、部件更换可得性与量产环境下的稳定运行。",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence", "SPG", "其他工业部件"],
    componentNote: "所用部件品牌可能会因设备型号、配置和客户要求而有所不同。",

    ctaLine: "需要评估您产线的对准稳定性吗？",
    productsCta: "View Equipment",
    contactCta: "Engineering Inquiry",
  },
}

// Actual monitor-capture sequence (public asset) + the sample corner-deviation
// results shown beside it. Values are locale-independent; only µm labels differ.
const MONITOR_VIDEO = "/videos/homepage_alignment_monitor_sequence_16frames_smooth.mp4"
const CORRECTION_RESULTS: { id: string; before: string; after: string }[] = [
  { id: "E7", before: "14.2", after: "3.0" },
  { id: "E8", before: "17.1", after: "5.3" },
  { id: "E3", before: "17.7", after: "4.0" },
  { id: "E4", before: "19.3", after: "9.3" },
]

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
  refTag,
  matTag,
  steps,
  note,
}: {
  statusLabel: string
  replayLabel: string
  legendReference: string
  legendMaterial: string
  refTag: string
  matTag: string
  steps: string[]
  note: string
}) {
  const BLUE = "#1976D2"
  const PURPLE = "#a855f7"
  const SLATE = "#64748b"
  const W = 560
  const H = 290
  const SW = 188
  const SH = 122
  const CX = W / 2
  const CY = H / 2
  const SX = CX - SW / 2
  const SY = CY - SH / 2

  // Reference geometry (fixed exposure shape, blue) and the distorted material
  // shape (purple). Distortion is per-corner (a skewed quadrilateral), so the
  // material is NOT a translated rectangle — during correction it converges,
  // vertex by vertex, onto the reference shape. Abstract concept only: no real
  // geometry, coordinates, deviation/correction values, or mechanism.
  const refPts: [number, number][] = [
    [SX, SY],
    [SX + SW, SY],
    [SX + SW, SY + SH],
    [SX, SY + SH],
  ]
  // 8-point outlines (4 corners + 4 edge midpoints, clockwise from TL). The
  // reference is the true rectangle. The distorted material reads as a TRAPEZOID
  // (a contracted/warped sheet): top and bottom edges stay roughly parallel while
  // the left/right legs splay at slightly different slopes, so it's clearly a
  // four-sided trapezoid — not a rhombus, parallelogram, or random polygon. The
  // edge midpoints are placed exactly on each straight edge (so the four sides
  // stay straight). It overlaps the reference heavily with some corners poking
  // OUT (top, left, bottom-right) and one pulled IN (top-right). Abstract only.
  const refOutline: [number, number][] = [
    [SX, SY],
    [SX + SW / 2, SY],
    [SX + SW, SY],
    [SX + SW, SY + SH / 2],
    [SX + SW, SY + SH],
    [SX + SW / 2, SY + SH],
    [SX, SY + SH],
    [SX, SY + SH / 2],
  ]
  // Trapezoid corners (TL, TR, BR, BL) — wider at the bottom, slightly tilted.
  const tzTL: [number, number] = [SX + 24, SY - 6]
  const tzTR: [number, number] = [SX + SW - 24, SY + 2]
  const tzBR: [number, number] = [SX + SW + 18, SY + SH + 4]
  const tzBL: [number, number] = [SX - 14, SY + SH - 4]
  const mid = (a: [number, number], b: [number, number]): [number, number] => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
  // Corners + true edge midpoints → the four sides render as straight lines.
  const distOutline: [number, number][] = [
    tzTL,
    mid(tzTL, tzTR),
    tzTR,
    mid(tzTR, tzBR),
    tzBR,
    mid(tzBR, tzBL),
    tzBL,
    mid(tzBL, tzTL),
  ]
  // The 4 corner points within the 8-point outline (for the offset guides).
  const distCorners: [number, number][] = [tzTL, tzTR, tzBR, tzBL]
  // Entrance starts a touch higher, then settles to the distorted rest.
  const enterPts = distOutline.map(([x, y]) => [x, y - 8]) as [number, number][]
  const toStr = (a: [number, number][]) => a.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" ")
  // A partially-corrected shape: each point moves its OWN fraction toward the
  // reference. By advancing ONE corner's fraction per step (below) the correction
  // reads as "this corner gets pressed into place, then the next", not a uniform
  // shrink/scale or a rotation.
  const shapeAt = (f: number[]) =>
    distOutline.map(([dx, dy], i) => [dx + (refOutline[i][0] - dx) * f[i], dy + (refOutline[i][1] - dy) * f[i]]) as [number, number][]
  // Corner-by-corner correction. Per-step per-vertex fractions
  // [TL, Tmid, TR, Rmid, BR, Bmid, BL, Lmid]; monotonically non-decreasing.
  // Each early step advances mainly ONE corner (with a small nudge to its
  // neighbouring edges): lower-left → upper-right → upper-left → lower-right,
  // then the edges settle, then a near-aligned finish (tiny uneven residual,
  // not a 0-error snap). Order matches the requested LL → UR → UL → LR rhythm.
  const STEP_FRACS: number[][] = [
    [0.1, 0.05, 0.05, 0.05, 0.05, 0.25, 0.55, 0.3], // 1 — lower-left
    [0.18, 0.4, 0.6, 0.42, 0.1, 0.28, 0.58, 0.34], // 2 — upper-right
    [0.62, 0.55, 0.64, 0.46, 0.2, 0.34, 0.62, 0.55], // 3 — upper-left
    [0.66, 0.58, 0.68, 0.62, 0.64, 0.56, 0.66, 0.58], // 4 — lower-right
    [0.78, 0.78, 0.8, 0.8, 0.78, 0.8, 0.8, 0.8], // 5 — edge settling
    [0.88, 0.9, 0.9, 0.9, 0.88, 0.9, 0.9, 0.9], // 6 — settle further
    // 7 — near-aligned: intentionally NOT 1.0. Leaves a small, asymmetric
    // residual (~1–2px) so it reads as "corrected, but not a perfect 0-error
    // snap" — upper-right and lower-left corners keep slightly more offset.
    [0.94, 0.95, 0.93, 0.95, 0.955, 0.94, 0.92, 0.955],
  ]
  const finalPts = shapeAt(STEP_FRACS[STEP_FRACS.length - 1])

  const [phase, setPhase] = useState(0)
  const [entered, setEntered] = useState(false)
  const [guides, setGuides] = useState(false)
  const [scan, setScan] = useState(false)
  const [scanKey, setScanKey] = useState(0)
  const [markers, setMarkers] = useState(false)
  const [markerKey, setMarkerKey] = useState(0)
  const [aligned, setAligned] = useState(false)
  const [pts, setPts] = useState(toStr(distOutline))
  const [driftTf, setDriftTf] = useState("translate(0 0)")

  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const raf = useRef(0)
  const driftRaf = useRef(0)
  const driftOn = useRef(false)
  const ptsRef = useRef<[number, number][]>(distOutline.map((p) => [...p]) as [number, number][])
  const rootRef = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  const stopDrift = () => {
    driftOn.current = false
    if (driftRaf.current) cancelAnimationFrame(driftRaf.current)
    setDriftTf("translate(0 0)")
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
  const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)

  // Morph the material polygon vertex-by-vertex toward a target shape — this is
  // what turns "rectangle moving" into "distorted geometry converging".
  const morph = (target: [number, number][], dur: number) => {
    if (raf.current) cancelAnimationFrame(raf.current)
    const from = ptsRef.current.map((p) => [...p]) as [number, number][]
    const start = performance.now()
    const frame = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const e = easeInOut(p)
      const cur = from.map(([fx, fy], i) => [
        fx + (target[i][0] - fx) * e,
        fy + (target[i][1] - fy) * e,
      ]) as [number, number][]
      ptsRef.current = cur
      setPts(toStr(cur))
      if (p < 1) raf.current = requestAnimationFrame(frame)
    }
    raf.current = requestAnimationFrame(frame)
  }

  // Subtle pre-correction drift (group translate, sub-pixel) so the distorted
  // material never reads as a frozen picture — no shake or extra distortion.
  const startDrift = () => {
    stopDrift()
    driftOn.current = true
    const t0 = performance.now()
    const loop = (now: number) => {
      if (!driftOn.current) return
      const t = (now - t0) / 1000
      const x = Math.sin(t * 1.6) * 1.1
      const y = Math.sin(t * 1.05 + 1) * 0.8
      setDriftTf(`translate(${x.toFixed(2)} ${y.toFixed(2)})`)
      driftRaf.current = requestAnimationFrame(loop)
    }
    driftRaf.current = requestAnimationFrame(loop)
  }

  const showAligned = () => {
    ptsRef.current = finalPts.map((p) => [...p]) as [number, number][]
    setPts(toStr(finalPts))
    setDriftTf("translate(0 0)")
    setEntered(true)
    setGuides(false)
    setScan(false)
    setMarkers(true)
    setAligned(true)
    setPhase(steps.length - 1)
  }

  const run = () => {
    clearAll()
    ptsRef.current = enterPts.map((p) => [...p]) as [number, number][]
    setPts(toStr(enterPts))
    setDriftTf("translate(0 0)")
    setEntered(false)
    setGuides(false)
    setScan(false)
    setMarkers(false)
    setAligned(false)
    setPhase(0)
    // 1 — Material variation: distorted material fades in and settles —
    //     overlapping the reference but twisted unevenly (some parts out, some in).
    at(() => {
      setEntered(true)
      morph(distOutline, 780)
    }, 60)
    at(() => startDrift(), 850)
    // 2 — Alignment offset: guides reveal the per-corner deviation (distortion).
    at(() => {
      setPhase(1)
      setGuides(true)
    }, 1250)
    // 3 — Vision detection: SHORT — just enough to read; correction is the focus.
    at(() => {
      setPhase(2)
      setScanKey((k) => k + 1)
      setScan(true)
    }, 2200)
    at(() => {
      setScan(false)
      setMarkers(true)
      setMarkerKey((k) => k + 1)
    }, 3250)
    // 4 — Correction: CORNER-BY-CORNER (the main act). Seven steps — each a short
    //     ease + brief pause — advancing mainly one corner at a time (lower-left →
    //     upper-right → upper-left → lower-right), then the edges settle, then a
    //     near-aligned finish. Reads as "pressed into place a corner at a time",
    //     not a single snap and not a whole-shape rotation/translation.
    at(() => {
      setPhase(3)
      setGuides(false)
      stopDrift()
      const stepDur = 340
      const pause = 180
      let i = 0
      const nextStep = () => {
        if (i >= STEP_FRACS.length) {
          // 5 — Stable exposure alignment: outline sits almost exactly on the
          //     reference, with only a tiny residual (not a mechanical snap).
          setPhase(4)
          setAligned(true)
          return
        }
        morph(shapeAt(STEP_FRACS[i]), stepDur)
        i += 1
        timers.current.push(setTimeout(nextStep, stepDur + pause))
      }
      nextStep()
    }, 4050)
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

  const dotColor = aligned ? BLUE : phase >= 2 ? BLUE : entered ? PURPLE : SLATE
  const corners: [number, number][] = [
    [SX, SY],
    [SX + SW, SY],
    [SX, SY + SH],
    [SX + SW, SY + SH],
  ]

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
          <linearGradient id="eng-ref" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(25,118,210,0.11)" />
            <stop offset="100%" stopColor="rgba(25,118,210,0.03)" />
          </linearGradient>
          <linearGradient id="eng-mat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(168,85,247,0.17)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.05)" />
          </linearGradient>
        </defs>

        {/* matte base + blueprint grid + soft top sheen */}
        <rect width={W} height={H} fill="#0a1120" />
        <rect width={W} height={H} fill="url(#eng-grid)" />
        <rect width={W} height={H} fill="url(#eng-sheen)" />
        {/* faint center guides */}
        <line x1={CX} y1="0" x2={CX} y2={H} stroke="rgba(148,163,184,0.07)" strokeWidth="0.7" />
        <line x1="0" y1={CY} x2={W} y2={CY} stroke="rgba(148,163,184,0.07)" strokeWidth="0.7" />

        {/* ── Reference geometry (fixed): a SINGLE blue exposure reference
               rectangle — no backing plane, no inner box, so it reads clearly as
               THE reference for first-time viewers ── */}
        <rect x={SX} y={SY} width={SW} height={SH} fill="url(#eng-ref)" stroke={BLUE} strokeWidth="1.6" />
        {/* reference corner ticks (subtle, always present — anchors the reference shape) */}
        {corners.map(([px, py], i) => {
          const dx = px === SX ? 1 : -1
          const dy = py === SY ? 1 : -1
          return (
            <g key={`refc-${i}`} stroke={BLUE} strokeWidth="1.3" opacity="0.85">
              <line x1={px} y1={py} x2={px + 12 * dx} y2={py} />
              <line x1={px} y1={py} x2={px} y2={py + 12 * dy} />
            </g>
          )
        })}

        {/* ── Alignment offset: dashed connectors from each reference corner to
               the corresponding distorted material vertex — visualizes the
               per-corner deviation (shape distortion), no numbers/coordinates ── */}
        <g style={{ opacity: guides ? 1 : 0, transition: "opacity 0.5s ease" }}>
          {refPts.map(([px, py], i) => (
            <g key={`gd-${i}`}>
              <line
                x1={px}
                y1={py}
                x2={distCorners[i][0]}
                y2={distCorners[i][1]}
                stroke="rgba(168,85,247,0.5)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
              />
              <circle cx={distCorners[i][0]} cy={distCorners[i][1]} r="1.7" fill="rgba(168,85,247,0.75)">
                {/* very subtle breathing so the offset state is never a frozen picture */}
                <animate attributeName="opacity" values="0.8;0.45;0.8" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>

        {/* ── Vision detection — fine optical scan + brief corner detection pulses ── */}
        {scan && (
          <g key={scanKey}>
            {/* soft scan band — short sweep */}
            <rect x={SX} y={SY - 10} width={SW} height="20" fill="url(#eng-scan)" opacity="0">
              <animate attributeName="y" from={SY - 10} to={SY + SH - 10} dur="1s" fill="freeze" />
              <animate attributeName="opacity" values="0;0.88;0.88;0" keyTimes="0;0.1;0.85;1" dur="1s" fill="freeze" />
            </rect>
            {/* precise scan line — fine, not bright */}
            <rect x={SX} y={SY} width={SW} height="1.2" fill={BLUE} opacity="0">
              <animate attributeName="y" from={SY} to={SY + SH} dur="1s" fill="freeze" />
              <animate attributeName="opacity" values="0;0.82;0.82;0" keyTimes="0;0.1;0.85;1" dur="1s" fill="freeze" />
            </rect>
            {/* corner detection pulses — staggered as the line sweeps past (2–4) */}
            {corners.map(([px, py], i) => (
              <circle key={`scan-pulse-${i}`} cx={px} cy={py} r="2" fill="none" stroke={BLUE} strokeWidth="1" opacity="0">
                <animate attributeName="r" values="2;8" dur="0.6s" begin={`${0.1 + i * 0.18}s`} fill="freeze" />
                <animate attributeName="opacity" values="0;0.58;0" dur="0.6s" begin={`${0.1 + i * 0.18}s`} fill="freeze" />
              </circle>
            ))}
          </g>
        )}

        {/* ── Detection pulse — brief, subtle ring at each reference corner ── */}
        {markers &&
          corners.map(([px, py], i) => (
            <circle key={`pulse-${markerKey}-${i}`} cx={px} cy={py} r="2" fill="none" stroke={BLUE} strokeWidth="1" opacity="0">
              <animate attributeName="r" from="2" to="10" dur="0.7s" fill="freeze" />
              <animate attributeName="opacity" values="0;0.5;0" keyTimes="0;0.2;1" dur="0.7s" fill="freeze" />
            </circle>
          ))}

        {/* ── Distorted material geometry (purple) → converges to the reference
               shape during correction. Opacity wrapper = soft entrance; group
               translate = sub-pixel pre-correction drift; depth filter = a sheet
               floating above the reference. The polygon points are morphed in JS
               (distorted quadrilateral → reference rectangle). ── */}
        <g style={{ opacity: entered ? 1 : 0, transition: "opacity 0.55s ease" }}>
          <g transform={driftTf}>
            <polygon
              points={pts}
              fill={aligned ? "url(#eng-ref)" : "url(#eng-mat)"}
              stroke={PURPLE}
              strokeWidth={aligned ? 1.8 : 1.3}
              strokeDasharray={aligned ? "0" : "6 5"}
              strokeLinejoin="round"
              opacity={aligned ? 1 : 0.85}
              style={{ transition: "stroke-width 0.5s ease, fill 0.5s ease, opacity 0.5s ease, stroke-dasharray 0.5s ease" }}
            />
          </g>
        </g>

        {/* small static color-key tags in the corners (plain words, no numbers) —
            reinforce "blue = reference, purple = material" for first-time viewers */}
        <text x="14" y="25" fontSize="11" fill={PURPLE} opacity="0.9" style={{ letterSpacing: "0.04em" }}>
          {matTag}
        </text>
        <text x={W - 14} y="25" fontSize="11" fill={BLUE} opacity="0.95" textAnchor="end" style={{ letterSpacing: "0.04em" }}>
          {refTag}
        </text>
      </svg>

      {/* legend + subtle replay */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-800/80 bg-slate-900/30 px-5 py-3">
        <span className="inline-flex items-center gap-2 text-[12px] text-slate-300">
          <span className="inline-block h-2.5 w-3.5 border" style={{ borderColor: BLUE, backgroundColor: "rgba(25,118,210,0.10)" }} />
          {legendReference}
        </span>
        <span className="inline-flex items-center gap-2 text-[12px] text-slate-300">
          <span className="inline-block h-2.5 w-3.5 border border-dashed" style={{ borderColor: PURPLE }} />
          {legendMaterial}
        </span>
        <span className="ml-auto flex items-center gap-4">
          <button
            type="button"
            onClick={run}
            className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-600 transition-colors hover:text-slate-300"
          >
            ↻ {replayLabel}
          </button>
        </span>
      </div>

      {/* process bar — dots + labels + connectors (not buttons). Active step is
          emphasized (larger, bolder, brighter blue + a soft highlight); completed
          steps are muted blue; not-yet-reached steps are dimmed. Restrained, no
          neon — just a clear "you are here" for first-time viewers. */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3.5 border-t border-slate-800/80 px-5 py-5">
        {steps.map((step, idx) => {
          const active = idx === phase
          const done = idx < phase
          return (
            <span key={idx} className="flex items-center gap-3">
              <span
                className="flex items-center gap-2 transition-opacity duration-300"
                style={{ opacity: active ? 1 : done ? 0.9 : 0.55 }}
              >
                <span
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: 6,
                    width: 6,
                    backgroundColor: active ? "#5aacf7" : done ? BLUE : "#334155",
                    transform: active ? "scale(1.8)" : "scale(1)",
                    boxShadow: active ? "0 0 0 4px rgba(78,166,245,0.14)" : "none",
                  }}
                />
                <span
                  className="tracking-wide transition-all duration-300"
                  style={{
                    fontSize: active ? "13.5px" : "12px",
                    fontWeight: active ? 700 : done ? 500 : 400,
                    color: active ? "#8fc4ff" : done ? "#7ea8d8" : "#64748b",
                    textShadow: active ? "0 0 8px rgba(78,166,245,0.28)" : "none",
                  }}
                >
                  {step}
                </span>
              </span>
              {idx < steps.length - 1 && (
                <span
                  className="h-px w-6 transition-colors duration-300"
                  style={{ backgroundColor: done ? "rgba(25,118,210,0.4)" : "rgba(51,65,85,0.6)" }}
                />
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

  // Actual Monitor Example plays as a guided sequence (NO loop):
  //   ① hold the first frame ~2s so the initial deviation is legible
  //   ② play the correction faster (playbackRate)
  //   ③ stop and hold the final corrected frame
  // A phase label ("Initial Deviation" / "Corrected Result") is shown over the
  // held frames; Replay Sequence re-runs the whole thing on demand.
  const monitorVideoRef = useRef<HTMLVideoElement>(null)
  const monitorHoldTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const monitorStartTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [monitorPhase, setMonitorPhase] = useState<"initial" | "playing" | "done">("initial")

  // Run the guided sequence: hold the first frame ~2s (so the initial deviation
  // is legible) → play the correction faster → the video's onEnded settles the
  // final corrected frame. No loop. A single top-center pill reflects the phase.
  const runMonitorSequence = useCallback(() => {
    const v = monitorVideoRef.current
    if (!v) return
    if (monitorHoldTimer.current) clearTimeout(monitorHoldTimer.current)
    v.pause()
    try {
      v.currentTime = 0
    } catch {
      /* ignore */
    }
    v.playbackRate = 1
    setMonitorPhase("initial")
    monitorHoldTimer.current = setTimeout(() => {
      setMonitorPhase("playing")
      v.playbackRate = 1.8
      // Muted autoplay may still be blocked; swallow the rejection so the
      // console stays clean (the frame simply stays paused in that case).
      v.play().catch(() => {})
    }, 2000)
  }, [])

  // Start the guided sequence ~300ms AFTER the block scrolls into view (not on
  // page load) — the viewer sees the block reveal first, then the first-frame
  // hold begins. Runs once. Honors reduced-motion: hold the first frame with no
  // autoplay (the Replay button still works on demand).
  useEffect(() => {
    const v = monitorVideoRef.current
    if (!v) return
    let started = false
    const reduce =
      typeof window !== "undefined" &&
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const begin = () => {
      if (started) return
      started = true
      monitorStartTimer.current = setTimeout(() => {
        if (reduce) {
          try {
            v.currentTime = 0
          } catch {
            /* ignore */
          }
          v.pause()
          setMonitorPhase("initial")
          return
        }
        runMonitorSequence()
      }, 300)
    }

    let io: IntersectionObserver | null = null
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              begin()
              io?.disconnect()
              break
            }
          }
        },
        { threshold: 0.35 },
      )
      io.observe(v)
    } else {
      begin()
    }

    return () => {
      io?.disconnect()
      if (monitorStartTimer.current) clearTimeout(monitorStartTimer.current)
      if (monitorHoldTimer.current) clearTimeout(monitorHoldTimer.current)
    }
  }, [runMonitorSequence])

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

        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-16 lg:px-8 lg:pt-24 lg:pb-40">
          <div data-reveal="label" className="mb-5 flex items-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.eyebrow}
            </p>
          </div>
          <h1 data-reveal="heading" className="mb-5 max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            {t.heroTitle}
          </h1>
          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="max-w-4xl text-lg leading-[1.6] text-slate-300"
          >
            {t.heroBody}
          </p>
        </div>
      </section>

      {/* ── 2. Core Alignment Engineering — cards in a COMPACT blue-gray band.
             The band is sized to the cards (no large empty gray area), and it no
             longer contains Material, so the cards don't float in a tall band. ── */}
      <section style={{ backgroundColor: "rgb(30, 41, 59)" }} className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-14 lg:px-8 lg:pt-16 lg:pb-16">
          <div data-reveal="label" className="mb-8 flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.cardsLabel}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {t.cards.map((card, idx) => (
              <div
                key={idx}
                data-reveal="ui"
                style={{ "--reveal-delay": `${idx * 70}ms` } as CSSProperties}
                className={`group relative flex flex-col border border-slate-800 bg-slate-950/40 px-7 py-8 transition-colors duration-200 hover:border-slate-600 hover:bg-slate-900/40 lg:px-8 lg:py-10 ${
                  idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* accent line + number on one row; title gets its own full-width
                    line so it stays on a single line on desktop */}
                <div className="mb-4 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="block h-0.5 w-10"
                    style={{ backgroundColor: "#1976D2" }}
                  />
                  <span
                    className="font-mono text-[12px] font-bold tracking-[0.2em]"
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
                <p className="mt-4 text-[15px] leading-7 text-slate-400">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Concept Visualization — the page's KEY visual: the alignment
             correction sequence. Accent-line label + heading + short lead give it
             clear hierarchy, then the diagram as the focal asset. ── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div data-reveal="label" className="mb-4 flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.sequenceLabel}
            </p>
          </div>
          <h2 data-reveal="heading" className="mb-4 text-2xl font-bold text-white lg:text-3xl">{t.sequenceTitle}</h2>
          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="mb-10 max-w-2xl text-[15px] leading-relaxed text-slate-300"
          >
            {t.diagramPlain}
          </p>

          <div
            data-reveal="ui"
            style={{ "--reveal-delay": "160ms" } as CSSProperties}
            className="max-w-6xl"
          >
            <AlignmentCorrectionDiagram
              statusLabel={t.diagramStatus}
              replayLabel={t.diagramReplay}
              legendReference={t.legendReference}
              legendMaterial={t.legendMaterial}
              refTag={t.refTag}
              matTag={t.matTag}
              steps={t.flowSteps}
              note={t.diagramNote}
            />
          </div>
        </div>
      </section>

      {/* ── 4. Actual Monitor Example — a real monitor-capture sequence that
             SUPPORTS the concept diagram above (secondary; sized at/under the
             diagram, never louder than it). Concept → actual example → result. ── */}
      <section className="relative border-y border-slate-800/60 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div data-reveal="label" className="mb-4 flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.monitorSectionLabel}
            </p>
          </div>
          <h2 data-reveal="heading" className="mb-4 text-2xl font-bold text-white lg:text-3xl">
            {t.monitorHeading}
          </h2>
          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="mb-10 max-w-2xl text-[15px] leading-relaxed text-slate-300"
          >
            {t.monitorDesc}
          </p>

          <div className="grid gap-6 lg:grid-cols-[1.85fr_1fr] lg:items-start">
            {/* Monitor sequence video — autoplay / muted / playsInline, NO loop.
                Guided: initial-frame hold → faster correction → stop on final
                frame. Phase label overlays the held frames. */}
            <div
              data-reveal="ui"
              style={{ "--reveal-delay": "160ms" } as CSSProperties}
            >
              <div className="relative overflow-hidden rounded-sm border border-slate-800 bg-black">
                <video
                  ref={monitorVideoRef}
                  src={MONITOR_VIDEO}
                  muted
                  playsInline
                  preload="auto"
                  onEnded={(e) => {
                    // No loop: settle and hold the final corrected frame.
                    const v = e.currentTarget
                    v.pause()
                    if (Number.isFinite(v.duration)) v.currentTime = Math.max(0, v.duration - 0.05)
                    setMonitorPhase("done")
                  }}
                  className="mx-auto block max-h-[480px] w-full object-contain"
                />
                {/* State pill — top-center, shown ONLY on the held frames
                    (initial / final). The middle correction is conveyed by the
                    video motion itself, so no label there. Sits at the very top
                    so it never covers the center readout (no glow, no red/yellow). */}
                {monitorPhase !== "playing" && (
                  <div
                    className="pointer-events-none absolute left-1/2 top-4 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 items-center gap-2 rounded-sm border bg-slate-950/85 px-3.5 py-1.5 shadow-sm shadow-black/30 backdrop-blur-sm"
                    style={{ borderColor: "rgba(25,118,210,0.75)" }}
                  >
                    <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: "#5aacf7" }} />
                    <span className="whitespace-nowrap text-[15px] font-bold tracking-wide text-white">
                      {monitorPhase === "initial" ? t.monitorInitialLabel : t.monitorResultLabel}
                    </span>
                  </div>
                )}
              </div>
              {/* Replay control (left) + restrained step-flow caption (right).
                  Flow lives BELOW the video so it never clutters the frame. */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={runMonitorSequence}
                  className="inline-flex items-center gap-2 border border-slate-600 px-5 py-2.5 text-[13px] font-medium tracking-wide text-slate-200 transition-colors hover:border-slate-400 hover:bg-white/5 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" />
                  {t.monitorReplay}
                </button>
                <p className="text-[11px] tracking-wide text-slate-500">{t.monitorFlow}</p>
              </div>
            </div>

            {/* Correction result — restrained technical-data card, not a sales panel */}
            <div
              data-reveal
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
            >
              <div
                className="border border-slate-700/70 bg-slate-900/40 p-6"
                style={{ borderLeftColor: "#1976D2", borderLeftWidth: 2 }}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  {t.resultLabel}
                </p>

                {/* 1) Average before → after is THE focal number; 2) the
                    reduction gets its own emphasized line right below it. */}
                <div className="border-y border-slate-700/70 bg-slate-900/50 px-4 py-4">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {t.resultAvgLabel}
                  </p>
                  <p className="font-mono text-[22px] leading-none">
                    <span className="text-slate-400">17.1</span>
                    <span className="ml-1 text-[13px] text-slate-500">µm</span>
                    <span className="mx-2.5 text-slate-500">→</span>
                    <span className="font-bold" style={{ color: "#5aacf7" }}>5.4</span>
                    <span className="ml-1 text-[13px] text-slate-400">µm</span>
                  </p>
                  <p
                    className="mt-3 flex items-center gap-1.5 text-[15px] font-semibold text-slate-100"
                  >
                    <ArrowDown className="h-4 w-4" style={{ color: "#5aacf7" }} />
                    {t.resultReduction}
                  </p>
                </div>

                {/* 3) Per-corner before → after — clearer header, brighter after
                    values, zebra + dividers to separate the E7/E8/E3/E4 rows. */}
                <div className="mb-1 mt-5 flex items-baseline justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  <span>{t.resultColCorner}</span>
                  <span>
                    {t.resultColBefore} <span className="text-slate-500">→</span> {t.resultColAfter}
                  </span>
                </div>
                <div className="border-t border-slate-700/60">
                  {CORRECTION_RESULTS.map((r, i) => (
                    <div
                      key={r.id}
                      className={`flex items-baseline justify-between border-b border-slate-700/50 px-2 py-2 ${
                        i % 2 === 1 ? "bg-white/[0.025]" : ""
                      }`}
                    >
                      <span className="font-mono text-[13px] font-semibold text-slate-200">{r.id}</span>
                      <span className="font-mono text-[13px] tabular-nums">
                        <span className="text-slate-500">{r.before}</span>
                        <span className="mx-1.5 text-slate-600">→</span>
                        <span className="font-bold text-white">{r.after}</span>
                        <span className="ml-1 text-[11px] text-slate-500">µm</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* 4) Supporting text + caveat, lowest in the hierarchy. */}
                <p className="mt-4 text-[12px] leading-relaxed text-slate-400">
                  {t.resultIntro}
                </p>
                <p className="mt-3 border-t border-slate-800 pt-3 text-[11px] leading-relaxed text-slate-500">
                  {t.resultCaution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Material Distortion & Alignment Correction — the "why" behind the
             correction (rationale/evidence), placed after the visual. Standalone
             navy section with accent-line label + heading, not a note. ── */}
      <section className="relative bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-20 lg:px-8 lg:pt-16 lg:pb-24">
          <div data-reveal="label" className="mb-4 flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.alignLabel}
            </p>
          </div>
          <h2 data-reveal="heading" className="mb-4 text-2xl font-bold text-white lg:text-3xl">{t.alignTitle}</h2>
          <div
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="max-w-3xl space-y-2.5 text-[15px] leading-relaxed text-slate-300"
          >
            {t.alignBody.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
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
          <p data-reveal="label" className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {t.componentsLabel}
          </p>
          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-300"
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
                className="inline-flex items-center rounded-[3px] border border-slate-600/70 bg-slate-800/50 px-3 py-1.5 text-[13px] font-medium text-slate-200 transition-colors duration-200 hover:border-[#1976D2]/60 hover:bg-slate-800/70 hover:text-white"
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
