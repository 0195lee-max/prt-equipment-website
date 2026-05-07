"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    title: "장비",
    intro: "생산 환경을 위한 리드프레임 양산 장비",
    introSub: "Vertical Roll-to-Roll 라미네이터 및 노광 시스템",
    mainSystems: "메인 시스템",
    mainSystemsDesc: "Roll-to-Roll 리드프레임 생산 라인의 핵심 시스템입니다.",
    lineConfiguration: "라인 구성 모듈",
    lineConfigurationDesc: "메인 생산 장비와 통합되는 생산라인 구성 시스템입니다.",
    customStatement: "모든 시스템은 웹 폭, 소재 취급, 공정 흐름, 자동화 수준, 라인 연계 요구사항에 따라 설계됩니다.",
    viewDetails: "상세 보기",
    mainProducts: [
      {
        title: "Roll-to-Roll Laminator",
        description: "연속 롤투롤 드라이필름 라미네이션 시스템. 안정적인 웹 장력 제어와 정밀 정렬을 기반으로 양산 환경에 최적화되었습니다."
      },
      {
        title: "Roll-to-Roll Exposure System",
        description: "연속 롤투롤 노광 시스템. 미세 패턴 정렬 정확도와 안정적인 웹 이송을 통해 고정밀 리드프레임 생산에 대응합니다."
      }
    ],
    lineProducts: [
      { title: "Unwinder / Rewinder", description: "소재 공급 및 수취를 위한 고정밀 릴 시스템" },
      { title: "Pre Heater", description: "최적의 라미네이션을 위한 소재 예열 시스템" },
      { title: "Cleaning System", description: "이물질 제거를 위한 웹 클리닝 시스템" }
    ]
  },
  en: {
    title: "Equipment",
    intro: "Production Equipment for Lead Frame Lines",
    introSub: "Vertical Roll-to-Roll laminator and exposure systems configured for real production environments.",
    mainSystems: "Main Systems",
    mainSystemsDesc: "Core systems for roll-to-roll lead frame production lines.",
    lineConfiguration: "Line Configuration Modules",
    lineConfigurationDesc: "Production line configuration systems that integrate with main production equipment.",
    customStatement: "Each system is configured based on web width, material handling, process flow, automation level, and line integration requirements.",
    viewDetails: "View Details",
    mainProducts: [
      {
        title: "Roll-to-Roll Laminator",
        description: "Continuous roll-to-roll dry film lamination system. Optimized for mass production environments with stable web tension control and precision alignment."
      },
      {
        title: "Roll-to-Roll Exposure System",
        description: "Continuous roll-to-roll exposure system. Addresses high-precision lead frame production through fine pattern alignment accuracy and stable web transport."
      }
    ],
    lineProducts: [
      { title: "Unwinder / Rewinder", description: "High-precision reel system for material supply and take-up" },
      { title: "Pre Heater", description: "Material preheating system for optimal lamination" },
      { title: "Cleaning System", description: "Web cleaning system for particle removal" }
    ]
  },
  zh: {
    title: "设备",
    intro: "引线框架生产线的生产设备",
    introSub: "为真实生产环境配置的垂直卷对卷层压机和曝光系统。",
    mainSystems: "主系统",
    mainSystemsDesc: "卷对卷引线框架生产线的核心系统。",
    lineConfiguration: "生产线配置模块",
    lineConfigurationDesc: "与主生产设备集成的生产线配置系统。",
    customStatement: "每个系统都根据卷材宽度、物料处理、工艺流程、自动化水平和生产线集成要求进行配置。",
    viewDetails: "查看详情",
    mainProducts: [
      {
        title: "卷对卷层压机",
        description: "连续卷对卷干膜层压系统。基于稳定的卷材张力控制和精密对准，针对批量生产环境进行了优化。"
      },
      {
        title: "卷对卷曝光系统",
        description: "连续卷对卷曝光系统。通过精细图案对准精度和稳定的卷材传输，满足高精度引线框架生产需求。"
      }
    ],
    lineProducts: [
      { title: "放卷机 / 收卷机", description: "用于材料供应和收取的高精度卷轴系统" },
      { title: "预热器", description: "用于最佳层压的材料预热系统" },
      { title: "清洁系统", description: "用于颗粒去除的卷材清洁系统" }
    ]
  }
}

export default function ProductsPage() {
  const [lang, setLang] = useState<Language>("ko")
  const t = translations[lang]

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />
      
      <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.4)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Page Header - Engineering Focused */}
          <div className="mb-24 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Production Systems</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.intro}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
              {t.introSub}
            </p>
          </div>

          {/* Main Systems Section */}
          <div className="mb-32">
            <div className="mb-6 flex items-center gap-6">
              <div className="h-px flex-1 bg-slate-700" />
              <h2 className="text-2xl font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap">
                Core Systems
              </h2>
              <div className="h-px flex-1 bg-slate-700" />
            </div>
            <p className="mb-20 text-center text-sm text-slate-400">
              {t.mainSystemsDesc}
            </p>

            {/* Main Products - Larger Industrial Cards */}
            <div className="grid gap-6 lg:grid-cols-2">
              {t.mainProducts.map((product, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm transition-all hover:border-slate-600 hover:shadow-2xl"
                >
                  {/* Industrial corner accents */}
                  <div className="absolute -left-px -top-px h-8 w-8 border-l-2 border-t-2 border-slate-500/30" />
                  <div className="absolute -right-px -top-px h-8 w-8 border-r-2 border-t-2 border-slate-500/30" />
                  <div className="absolute -bottom-px -left-px h-8 w-8 border-b-2 border-l-2 border-slate-500/30" />
                  <div className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-slate-500/30" />

                  {/* Product Image Area - Enlarged */}
                  <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                    {/* Industrial grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-lg border border-slate-600/40 bg-slate-800/50 shadow-lg">
                          <svg className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            {index === 0 ? (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            )}
                          </svg>
                        </div>
                        <p className="text-base font-semibold text-slate-300">{product.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-10">
                    <h3 className="mb-4 text-3xl font-semibold text-white">{product.title}</h3>
                    <p className="mb-10 text-lg leading-relaxed text-slate-300">
                      {product.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full border-slate-600 bg-slate-800/50 text-slate-200 hover:border-slate-500 hover:bg-slate-700">
                      {t.viewDetails}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Line Configuration Modules Section */}
          <div className="mb-32">
            <div className="mb-12 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-700" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                {t.lineConfiguration}
              </h2>
              <div className="h-px flex-1 bg-slate-700" />
            </div>
            <p className="mb-16 text-center text-sm text-slate-400">
              {t.lineConfigurationDesc}
            </p>

            {/* Line Configuration Products */}
            <div className="grid gap-6 sm:grid-cols-3">
              {t.lineProducts.map((product, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 transition-all hover:border-slate-600 hover:shadow-lg"
                >
                  <div className="absolute -left-px -top-px h-4 w-4 border-l border-t border-slate-500/20" />
                  <div className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-slate-500/20" />
                  
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700/50 border border-slate-600/50">
                    <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-sm font-semibold text-slate-100">{product.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-400">{product.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Production Configuration Statement */}
          <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
            <div className="absolute -left-px -top-px h-8 w-8 border-l-2 border-t-2 border-slate-500/20" />
            <div className="absolute -right-px -top-px h-8 w-8 border-r-2 border-t-2 border-slate-500/20" />
            <div className="absolute -bottom-px -left-px h-8 w-8 border-b-2 border-l-2 border-slate-500/20" />
            <div className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-slate-500/20" />
            
            <div className="p-12 lg:p-16">
              <p className="mb-12 text-center text-base font-light text-slate-200">
                {t.customStatement}
              </p>
              
              {/* Configuration Keywords */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border-l-2 border-slate-600/50 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Web Width</p>
                  <p className="text-sm text-slate-200">Custom configuration for material dimensions</p>
                </div>
                <div className="border-l-2 border-slate-600/50 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Process Integration</p>
                  <p className="text-sm text-slate-200">Optimized for specific manufacturing workflows</p>
                </div>
                <div className="border-l-2 border-slate-600/50 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Automation Configuration</p>
                  <p className="text-sm text-slate-200">Flexible automation levels for production scale</p>
                </div>
                <div className="border-l-2 border-slate-600/50 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Line Engineering</p>
                  <p className="text-sm text-slate-200">Complete production line system integration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical decoration */}
          <div className="mt-20 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-slate-700" />
            <div className="h-2 w-2 rounded-full border border-slate-600" />
            <div className="h-px w-16 bg-slate-700" />
          </div>
        </div>
      </div>
    </main>
  )
}
