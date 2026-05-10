"use client"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    engineeringLabel: "Engineering Overview",
    heroTitle: "Vertical Roll-to-Roll Systems\nfor Leadframe & Semiconductor Packaging",
    heroSubtitle: "리드프레임 및 반도체 패키징 양산 라인을 위한\n맞춤 설계 라미네이션 및 노광 시스템",
    specsRow: [
      "● Stable Web Handling",
      "● ±5μm Alignment Accuracy",
      "● Continuous Roll Transport",
      "● 365nm LED UV Exposure",
    ],
    coreCapabilities: "핵심 기술",
    cards: [
      {
        label: "WEB TRANSPORT",
        title: "Roll-to-Roll Web Handling",
        desc: "안정적인 웹 장력 제어 및 연속 이송 시스템",
        specs: ["Speed: 0.1~5.0 m/min", "Tension: Servo controlled", "Web Width: Up to 380mm"],
      },
      {
        label: "UV EXPOSURE",
        title: "LED UV Exposure Module",
        desc: "고정밀 LED UV 노광 모듈. 리드프레임 패턴 형성용",
        specs: ["Resolution: 20μm ±2μm", "Alignment: ±5μm", "UV: 365nm LED"],
      },
      {
        label: "VISION ALIGNMENT",
        title: "8CCD Vision Alignment",
        desc: "8채널 CCD 카메라 기반 정밀 자동 정렬 시스템",
        specs: ["8CCD Vision System", "Tact Time: 12 sec", "Auto alignment"],
      },
    ],
    installedBase: "납품 실적",
    installedStats: [
      { value: "50+", label: "납품 시스템" },
      { value: "2010~", label: "엔지니어링 경험" },
      { value: "5+", label: "진출 국가" },
    ],
    installedBaseStatement: "리드프레임 및 반도체 패키징 양산 환경에 납품",
    regions: ["China", "Malaysia", "Taiwan", "Japan", "Korea"],
    customersLabel: "주요 고객사",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    customersNote: "및 다수의 리드프레임·반도체 패키징 제조사",
    viewMore: "납품 실적 전체 보기",
  },
  en: {
    engineeringLabel: "Engineering Overview",
    heroTitle: "Vertical Roll-to-Roll Systems\nfor Leadframe & Semiconductor Packaging",
    heroSubtitle: "Custom-engineered lamination and exposure systems\nfor continuous Leadframe and Semiconductor Packaging manufacturing lines.",
    specsRow: [
      "● Stable Web Handling",
      "● ±5μm Alignment Accuracy",
      "● Continuous Roll Transport",
      "● 365nm LED UV Exposure",
    ],
    coreCapabilities: "Core Capabilities",
    cards: [
      {
        label: "WEB TRANSPORT",
        title: "Roll-to-Roll Web Handling",
        desc: "Stable web tension control and continuous transport system",
        specs: ["Speed: 0.1~5.0 m/min", "Tension: Servo controlled", "Web Width: Up to 380mm"],
      },
      {
        label: "UV EXPOSURE",
        title: "LED UV Exposure Module",
        desc: "High-precision LED UV exposure module for Leadframe patterning",
        specs: ["Resolution: 20μm ±2μm", "Alignment: ±5μm", "UV: 365nm LED"],
      },
      {
        label: "VISION ALIGNMENT",
        title: "8CCD Vision Alignment",
        desc: "Precision automatic alignment system based on 8-channel CCD cameras",
        specs: ["8CCD Vision System", "Tact Time: 12 sec", "Auto alignment"],
      },
    ],
    installedBase: "Installed Base",
    installedStats: [
      { value: "50+", label: "Installed Systems" },
      { value: "2010~", label: "Engineering History" },
      { value: "5+", label: "Countries" },
    ],
    installedBaseStatement: "Installed in Leadframe and Semiconductor Packaging production environments",
    regions: ["China", "Malaysia", "Taiwan", "Japan", "Korea"],
    customersLabel: "Major Customers",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    customersNote: "and more Leadframe & Semiconductor Packaging manufacturers",
    viewMore: "View Full Installed Base",
  },
  zh: {
    engineeringLabel: "工程技术概述",
    heroTitle: "垂直卷对卷系统\n用于引线框架 & 半导体封装",
    heroSubtitle: "为连续引线框架及半导体封装制造线\n定制工程层压和曝光系统",
    specsRow: [
      "● 稳定卷材传输",
      "● ±5μm 对准精度",
      "● 连续卷对卷传输",
      "● 365nm LED UV曝光",
    ],
    coreCapabilities: "核心技术",
    cards: [
      {
        label: "卷材传输",
        title: "卷对卷卷材处理",
        desc: "稳定的卷材张力控制和连续传输系统",
        specs: ["速度: 0.1~5.0 m/min", "张力: 伺服控制", "卷材宽度: 最大380mm"],
      },
      {
        label: "UV曝光",
        title: "LED UV曝光模块",
        desc: "用于引线框架图案形成的高精度LED UV曝光模块",
        specs: ["分辨率: 20μm ±2μm", "对准精度: ±5μm", "UV: 365nm LED"],
      },
      {
        label: "视觉对准",
        title: "8CCD视觉对准",
        desc: "基于8通道CCD相机的精密自动对准系统",
        specs: ["8CCD视觉系统", "节拍时间: 12 sec", "自动对准"],
      },
    ],
    installedBase: "交付业绩",
    installedStats: [
      { value: "50+", label: "已交付系统" },
      { value: "2010~", label: "工程经验" },
      { value: "5+", label: "覆盖国家" },
    ],
    installedBaseStatement: "已安装于引线框架及半导体封装量产环境",
    regions: ["中国", "马来西亚", "台湾", "日本", "韩国"],
    customersLabel: "主要客户",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    customersNote: "及多家引线框架·半导体封装制造商",
    viewMore: "查看完整交付业绩",
  },
}

interface ApplicationsSectionProps {
  lang: Language
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-600 to-slate-600" />
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{label}</h2>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-600 to-slate-600" />
    </div>
  )
}

export function ApplicationsSection({ lang }: ApplicationsSectionProps) {
  const t = translations[lang]

  return (
    <section className="relative">
      {/* Engineering Overview */}
      <div className="relative bg-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-3">
              {t.engineeringLabel}
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Stable transport architecture for continuous Leadframe and Semiconductor Packaging production
            </p>
          </div>

          {/* Spec tag row */}
          <div className="mb-16 flex flex-wrap items-center gap-3">
            {t.specsRow.map((spec, idx) => (
              <span
                key={idx}
                className="inline-flex items-center text-xs font-mono text-slate-500 border-l border-slate-700 pl-3"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Core capability cards — real engineering data, no fake drawings */}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-8">
              {t.coreCapabilities}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {t.cards.map((card, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900/60 backdrop-blur-sm"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(199,168,109,0.4), transparent)",
                  }}
                />

                {/* Placeholder area — replace with real equipment photo */}
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-850 via-slate-900 to-slate-950 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(199,168,109,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(199,168,109,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                  <div className="text-center px-6">
                    <p className="text-xs font-mono text-slate-600 mb-3 tracking-wider">{card.label}</p>
                    <p className="text-sm font-semibold text-slate-400">{card.title}</p>
                    <p
                      className="mt-3 text-[10px] font-mono tracking-widest uppercase"
                      style={{ color: "rgba(199,168,109,0.4)" }}
                    >
                      Photo available on request
                    </p>
                  </div>
                </div>

                {/* Card info */}
                <div className="border-t border-slate-700/60 px-6 py-5 bg-slate-900/70">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    {card.title}
                  </p>
                  <p className="text-xs text-slate-500 mb-4">{card.desc}</p>
                  <div className="space-y-1">
                    {card.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-slate-500">
                        <span className="h-px w-3 bg-slate-700 flex-shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgb(30, 41, 59), transparent)" }}
        />
      </div>

      {/* Installed Base Section */}
      <div className="relative" style={{ backgroundColor: "rgb(30, 41, 59)" }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="text-center">
            <SectionLabel label={t.installedBase} />

            {/* Stats row */}
            <div className="mb-12 flex items-center justify-center gap-12 sm:gap-20">
              {t.installedStats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="text-4xl lg:text-5xl font-semibold leading-tight"
                    style={{ color: "#C7A86D" }}
                  >
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs text-slate-500 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-500 mb-10">{t.installedBaseStatement}</p>

            {/* Regions */}
            <div className="mb-16 flex items-center justify-center gap-2 flex-wrap">
              {t.regions.map((region, idx) => (
                <span key={idx} className="text-sm text-slate-300 tracking-wide">
                  {region}
                  {idx < t.regions.length - 1 && (
                    <span className="mx-2 text-slate-600">·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Customers */}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-6">
              {t.customersLabel}
            </p>
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
              {t.customersList.map((customer, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-full border border-slate-600 bg-slate-700/40 px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {customer}
                </span>
              ))}
              <span className="inline-flex items-center rounded-full border border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm text-slate-500">
                {t.customersNote}
              </span>
            </div>

            <a
              href="/installed-base"
              className="inline-flex items-center gap-2 text-xs text-slate-400 border-b border-slate-700 pb-1 transition-all hover:text-slate-300 hover:border-slate-500 font-medium tracking-wide mt-8"
            >
              {t.viewMore} <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
