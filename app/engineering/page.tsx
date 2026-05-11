"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    meta: "엔지니어링",
    title: "이론 사양보다\n실제 안정성이 중요합니다.",
    titleSub: "PRT 핵심 경쟁력",
    description:
      "사양서에 쓰인 수치는 최상의 조건에서의 이론값입니다. PRT 장비는 양산 현장의 실제 조건 — 온도 변화, 재료 편차, 장시간 연속 가동 — 에서 일관되게 작동하도록 설계됩니다.",
    verticalTitle: "왜 Vertical Roll-to-Roll인가?",
    verticalDesc:
      "리드프레임 패키징 공정에서 Vertical 이송 방식은 단순한 구조 차이가 아닙니다. 웹 표면의 파티클 낙하, 중력 보조 장력 제어, 수직 공간 활용 — 이 세 가지가 Horizontal 대비 실질적인 공정 이점을 만들어냅니다.",
    verticalPoints: [
      { label: "파티클 낙하", desc: "웹 표면에 파티클이 쌓이지 않습니다." },
      { label: "장력 안정성", desc: "중력 보조로 일관된 웹 장력 유지." },
      { label: "공간 효율", desc: "수직 구조로 라인 풋프린트 최소화." },
      { label: "공정 정밀도", desc: "안정적 이송으로 정렬 반복 정밀도 향상." },
    ],
    pillarsLabel: "6가지 핵심 역량",
    pillars: [
      {
        number: "01",
        title: "웹 핸들링 안정성",
        tagline: "Web Handling Stability",
        body: "Roll-to-Roll 공정에서 웹 장력의 흔들림은 직접적인 품질 불량으로 이어집니다. PRT 장비는 서보 기반 언와인더/리와인더와 댄서 롤러 시스템으로 ±0.3N 이내의 장력 변동을 유지합니다.",
        specs: [
          "Tension control: Servo-based dancer roller",
          "Tension variation: ±0.3N",
          "Web width: Up to 380mm",
          "Speed range: 0.1~5.0 m/min",
        ],
      },
      {
        number: "02",
        title: "정렬 일관성",
        tagline: "Alignment Consistency",
        body: "노광 공정에서 정렬은 한 번의 기준값이 아닙니다. PRT의 8CCD Vision System은 매 쇼트마다 실시간으로 보정하여, 수천 쇼트 이후에도 ±5μm 이내의 정렬 정밀도를 유지합니다.",
        specs: [
          "Alignment accuracy: ±5μm",
          "Vision system: 8CCD cameras",
          "Tact time: 12 sec",
          "Auto-correction: Per-shot real-time",
        ],
      },
      {
        number: "03",
        title: "열·공정 안정성",
        tagline: "Thermal & Process Stability",
        body: "라미네이션 롤의 온도 균일성은 드라이필름 접착력과 직결됩니다. PRT 히팅 롤 시스템은 롤 전면에 걸쳐 ±3°C 이내의 온도 균일성을 확보하며, 가압 제어는 ±0.1kg/㎠ 정밀도를 유지합니다.",
        specs: [
          "Temp uniformity: ±3°C across roll width",
          "Pressure control: ±0.1kg/㎠",
          "Heating: Internal oil circulation",
          "Materials: C7025 / CDA194 / AL42",
        ],
      },
      {
        number: "04",
        title: "빠른 문제 해결",
        tagline: "Fast Troubleshooting",
        body: "양산 라인에서 장비 다운타임은 곧 생산 손실입니다. PRT 장비는 진단 시 복잡한 역엔지니어링이 필요 없도록 설계됩니다. 주요 구동부와 센서에 직접 접근이 가능하고, 오류 메시지는 현장 엔지니어가 즉시 원인을 파악할 수 있는 수준으로 제공됩니다.",
        specs: [
          "Modular drive unit design",
          "Direct sensor access",
          "Diagnostic-grade error messaging",
          "Remote support capability",
        ],
      },
      {
        number: "05",
        title: "유지보수 용이성",
        tagline: "Maintainability",
        body: "장기 가동을 위한 설계입니다. 소모품 교체, 롤 청소, 정기 점검 — 모든 루틴 작업이 특수 공구 없이 가능하도록 구성됩니다. 부품은 글로벌 공급 가능한 표준 산업용 컴포넌트 중심으로 선정합니다.",
        specs: [
          "Tool-free consumable replacement",
          "Standard industrial components: THK, Rexroth, SMC, Omron, Mitsubishi",
          "Global parts availability",
          "PM interval: Documented schedule",
        ],
      },
      {
        number: "06",
        title: "운영자 친화적 설계",
        tagline: "Operator-Friendly Engineering",
        body: "장비는 엔지니어가 아닌 현장 운영자가 매일 다룹니다. PRT는 조작 시퀀스, HMI 레이아웃, 롤 교체 프로세스를 현장 운영자 관점에서 설계합니다. 복잡한 교육 없이도 안전하고 일관되게 운용할 수 있어야 합니다.",
        specs: [
          "Intuitive HMI: Step-by-step operation",
          "Roll change: Single-operator capable",
          "Safety interlocks: Full coverage",
          "Language support: Korean / English / Chinese",
        ],
      },
    ],
    componentLabel: "사용 부품",
    componentBody: "PRT 장비에 사용되는 모든 핵심 구동 부품은 글로벌 공급 가능한 표준 산업용 부품으로 구성됩니다. 제조사 단종이나 현지 공급망 단절에 의한 유지보수 불가 상황을 최소화합니다.",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence"],
    contactCta: "엔지니어링 문의",
    productsCta: "장비 상세",
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
        title: "Fast Troubleshooting",
        tagline: "Fast Troubleshooting",
        body: "Equipment downtime on a production line is production loss. PRT equipment is designed so that field diagnosis does not require reverse engineering. Key drive units and sensors are directly accessible, and error messages are written to allow on-site engineers to identify root causes without specialized tools.",
        specs: [
          "Modular drive unit design",
          "Direct sensor access",
          "Diagnostic-grade error messaging",
          "Remote support capability",
        ],
      },
      {
        number: "05",
        title: "Maintainability",
        tagline: "Maintainability",
        body: "Designed for long-term operation. Consumable replacement, roll cleaning, and routine inspections are all achievable without special tooling. Components are selected from globally available standard industrial suppliers — not proprietary assemblies that create supply chain risk.",
        specs: [
          "Tool-free consumable replacement",
          "Standard industrial components: THK, Rexroth, SMC, Omron, Mitsubishi",
          "Global parts availability",
          "PM interval: Documented schedule",
        ],
      },
      {
        number: "06",
        title: "Operator-Friendly Engineering",
        tagline: "Operator-Friendly Engineering",
        body: "Equipment is used daily by production operators, not just engineers. PRT designs operating sequences, HMI layout, and roll change procedures from the operator's perspective. The system should be safe and consistent to operate without complex training.",
        specs: [
          "Intuitive HMI: Step-by-step operation",
          "Roll change: Single-operator capable",
          "Safety interlocks: Full coverage",
          "Language support: Korean / English / Chinese",
        ],
      },
    ],
    componentLabel: "Component Standards",
    componentBody: "All critical drive components in PRT equipment are selected from globally available standard industrial suppliers. This minimizes risk of end-of-life supply disruptions and ensures parts availability throughout the equipment's service life.",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence"],
    contactCta: "Engineering Inquiry",
    productsCta: "View Equipment",
  },
  zh: {
    meta: "工程技术",
    title: "实际稳定性比\n理论规格更重要。",
    titleSub: "PRT核心竞争力",
    description:
      "规格表上的数字反映的是理想条件下的值。PRT设备的设计目标是在真实量产条件下——温度变化、材料偏差、长时间连续运行——保持一致的运行，而不仅仅是在受控测试环境中。",
    verticalTitle: "为何选择垂直卷对卷？",
    verticalDesc:
      "在引线框架封装工艺中，垂直传输架构不仅仅是结构上的选择。卷材表面颗粒自然脱落、重力辅助张力控制和垂直空间利用，相比水平配置创造了实质性的工艺优势。",
    verticalPoints: [
      { label: "颗粒脱落", desc: "颗粒不会在卷材表面积累。" },
      { label: "张力稳定性", desc: "重力辅助保持一致的卷材张力。" },
      { label: "空间效率", desc: "垂直结构最小化生产线占地面积。" },
      { label: "工艺精度", desc: "稳定传输提高对准重复精度。" },
    ],
    pillarsLabel: "6项核心工程能力",
    pillars: [
      {
        number: "01",
        title: "卷材处理稳定性",
        tagline: "Web Handling Stability",
        body: "在卷对卷工艺中，卷材张力不稳定直接导致良率下降。PRT设备采用基于伺服的放卷/收卷系统和舞辊控制，在连续量产条件下将张力变化维持在±0.3N以内。",
        specs: [
          "张力控制：基于伺服的舞辊",
          "张力变化：±0.3N",
          "卷材宽度：最大380mm",
          "速度范围：0.1~5.0 m/min",
        ],
      },
      {
        number: "02",
        title: "对准一致性",
        tagline: "Alignment Consistency",
        body: "在曝光工艺中，对准不是一次性校准。PRT的8CCD视觉系统对每次曝光进行实时校正，在连续数千次曝光后将对准精度保持在±5μm以内——而不仅仅是设置后的最初几次。",
        specs: [
          "对准精度：±5μm",
          "视觉系统：8CCD摄像头",
          "节拍时间：12秒",
          "自动校正：每次曝光实时进行",
        ],
      },
      {
        number: "03",
        title: "热稳定性与工艺稳定性",
        tagline: "Thermal & Process Stability",
        body: "层压辊的温度均匀性与干膜粘合质量直接相关。PRT加热辊系统在整个辊宽范围内将温度均匀性保持在±3°C以内，压力控制精度达±0.1kg/㎠。",
        specs: [
          "温度均匀性：辊宽范围内±3°C",
          "压力控制：±0.1kg/㎠",
          "加热方式：内部油循环",
          "材料：C7025 / CDA194 / AL42",
        ],
      },
      {
        number: "04",
        title: "快速故障排除",
        tagline: "Fast Troubleshooting",
        body: "量产线上的设备停机就是生产损失。PRT设备的设计使现场诊断无需逆向工程。主要驱动单元和传感器可直接访问，错误信息以现场工程师无需专业工具即可识别根本原因的方式呈现。",
        specs: [
          "模块化驱动单元设计",
          "传感器直接访问",
          "诊断级错误信息",
          "远程支持能力",
        ],
      },
      {
        number: "05",
        title: "易维护性",
        tagline: "Maintainability",
        body: "为长期运行而设计。消耗品更换、辊清洁和例行检查均无需专用工具即可完成。零部件从全球可供应的标准工业供应商中选取，而非制造供应链风险的专有组件。",
        specs: [
          "无工具消耗品更换",
          "标准工业部件：THK、Rexroth、SMC、Omron、Mitsubishi",
          "全球零部件供应",
          "PM间隔：有文档记录的计划",
        ],
      },
      {
        number: "06",
        title: "操作员友好型工程",
        tagline: "Operator-Friendly Engineering",
        body: "设备由量产操作员而非工程师每天使用。PRT从操作员视角设计操作流程、HMI布局和换辊程序。无需复杂培训即可安全、一致地操作。",
        specs: [
          "直观HMI：逐步操作指引",
          "换辊：单人操作可完成",
          "安全联锁：全覆盖",
          "语言支持：韩语/英语/中文",
        ],
      },
    ],
    componentLabel: "部件标准",
    componentBody: "PRT设备中所有关键驱动部件均从全球可供应的标准工业供应商处选取。这将产品停产风险降至最低，并确保整个设备服务周期内的零件可用性。",
    componentBrands: ["THK", "Rexroth", "SMC", "Omron", "Mitsubishi", "Panasonic", "Keyence"],
    contactCta: "工程咨询",
    productsCta: "查看设备",
  },
}

export default function EngineeringPage() {
  const [lang, setLang] = useState<Language>("en")
  const t = translations[lang]

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 42%, rgba(199,168,109,0.8) 42.5%, transparent 43%)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-32 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              {t.titleSub}
            </p>
          </div>
          <h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight whitespace-pre-line mb-8"
          >
            {t.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            {t.description}
          </p>
        </div>
      </section>

      {/* ── Why Vertical R2R ────────────────────────────────── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Architecture
              </p>
              <h2 className="text-2xl font-bold text-white mb-4">{t.verticalTitle}</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">{t.verticalDesc}</p>

              <div className="space-y-4">
                {t.verticalPoints.map((pt, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                      style={{ backgroundColor: "rgba(199,168,109,0.15)", color: "#C7A86D", border: "1px solid rgba(199,168,109,0.3)" }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">{pt.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual comparison */}
            <div className="grid grid-cols-2 gap-4">
              {/* Horizontal */}
              <div className="rounded-lg border border-slate-700 bg-slate-800/40 p-5">
                <p className="text-xs font-semibold text-slate-500 mb-4 text-center uppercase tracking-wider">Horizontal R2R</p>
                {/* Simple diagram */}
                <div className="flex flex-col items-center gap-2 py-4">
                  <div className="h-10 w-10 rounded-full border border-slate-600 bg-slate-700/60 flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full bg-slate-600" />
                  </div>
                  <div className="relative h-1 w-full bg-slate-600 rounded my-2">
                    {[0.25, 0.5, 0.75].map((pos, i) => (
                      <div
                        key={i}
                        className="absolute -top-2 h-2 w-2 rounded-full bg-red-400/70"
                        style={{ left: `${pos * 100}%` }}
                      />
                    ))}
                  </div>
                  <div className="h-10 w-10 rounded-full border border-slate-600 bg-slate-700/60 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-slate-600" />
                  </div>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-red-400/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400/70 flex-shrink-0" />
                    Particle accumulation
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-600 flex-shrink-0" />
                    Larger footprint
                  </div>
                </div>
              </div>

              {/* Vertical */}
              <div className="rounded-lg border bg-slate-800/40 p-5 relative" style={{ borderColor: "rgba(199,168,109,0.4)" }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(199,168,109,0.5), transparent)" }} />
                <p className="text-xs font-semibold mb-4 text-center uppercase tracking-wider" style={{ color: "#C7A86D" }}>Vertical R2R</p>
                <div className="flex justify-center gap-4 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(199,168,109,0.4)", backgroundColor: "rgba(199,168,109,0.08)" }}>
                      <div className="h-5 w-5 rounded-full" style={{ backgroundColor: "rgba(199,168,109,0.3)" }} />
                    </div>
                    <div className="relative w-1 h-16 rounded" style={{ backgroundColor: "rgba(199,168,109,0.4)" }}>
                      {[0.2, 0.5, 0.8].map((pos, i) => (
                        <div
                          key={i}
                          className="absolute left-3 h-1.5 w-1.5 rounded-full bg-green-400/60"
                          style={{ top: `${pos * 100}%` }}
                        />
                      ))}
                    </div>
                    <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(199,168,109,0.4)", backgroundColor: "rgba(199,168,109,0.08)" }}>
                      <div className="h-6 w-6 rounded-full" style={{ backgroundColor: "rgba(199,168,109,0.3)" }} />
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-green-400/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400/70 flex-shrink-0" />
                    Clean web surface
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-green-400/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400/70 flex-shrink-0" />
                    Compact footprint
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 Pillars ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "rgb(30, 41, 59)" }} className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <p className="mb-14 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.pillarsLabel}
          </p>

          <div className="space-y-0">
            {t.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative grid gap-8 lg:grid-cols-[1fr_2fr] pb-14 last:pb-0"
              >
                {/* Left: number + title */}
                <div className="lg:pt-1">
                  <p
                    className="text-[11px] font-bold tracking-[0.2em] mb-2 font-mono"
                    style={{ color: "rgba(199,168,109,0.5)" }}
                  >
                    {pillar.number}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-1">{pillar.title}</h3>
                  <p className="text-xs font-mono text-slate-600 tracking-wider">{pillar.tagline}</p>
                </div>

                {/* Right: body + specs */}
                <div className="relative">
                  <div
                    className="absolute -left-4 top-0 bottom-0 w-px hidden lg:block"
                    style={{ backgroundColor: "rgba(199,168,109,0.12)" }}
                  />
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{pillar.body}</p>
                  <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {pillar.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs font-mono text-slate-500">
                        <span className="h-px w-3 flex-shrink-0 mt-[7px]" style={{ backgroundColor: "#C7A86D", opacity: 0.4 }} />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row separator */}
                {idx < t.pillars.length - 1 && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px lg:left-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  />
                )}
              </div>
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
              style={{ backgroundColor: "#C7A86D" }}
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
