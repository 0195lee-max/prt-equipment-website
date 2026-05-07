"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Zap, Settings, GitBranch, Shield, Droplets, Gauge, Maximize2, Target } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    title: "엔지니어링 설계",
    subtitle: "생산 환경을 위한 엔지니어링",
    description: "안정적인 롤-투-롤 처리, 정밀한 정렬 제어, 생산 라인과의 안정적인 통합에 초점을 맞춘 엔지니어링 접근 방식입니다.",
    verticalSection: {
      title: "Why Vertical Roll-to-Roll?",
      horizontal: "Horizontal R2R",
      vertical: "Vertical R2R",
      features: [
        { title: "오염 제어", desc: "수직 이송 중 파티클이 웹 표면에서 자연스럽게 떨어집니다.", icon: "droplets" },
        { title: "안정적인 웹 핸들링", desc: "중력 보조로 안정적인 장력과 평탄도를 유지합니다.", icon: "gauge" },
        { title: "컴팩트한 설비 공간", desc: "수직 구조로 생산 환경의 풋프린트를 줄입니다.", icon: "maximize" },
        { title: "정밀 공정 제어", desc: "안정적인 웹 이송으로 정렬 정밀도를 향상시킵니다.", icon: "target" }
      ]
    },
    valueProps: [
      {
        title: "생산 안정성",
        description: "안정적인 웹 장력과 정렬 정밀도를 유지합니다.",
        icon: "zap"
      },
      {
        title: "공정 정밀도",
        description: "일관된 라미네이션 및 노광 품질을 보장합니다.",
        icon: "settings"
      },
      {
        title: "생산 라인 통합",
        description: "롤-투-롤 라인에 매끄럽게 통합됩니다.",
        icon: "branch"
      },
      {
        title: "산업용 등급 부품",
        description: "THK, Rexroth, SMC, Omron, Mitsubishi 등 글로벌 부품으로 장기 안정성을 보장합니다.",
        icon: "shield"
      }
    ]
  },
  en: {
    title: "Engineering Design",
    subtitle: "Engineering for Production",
    description: "Our engineering approach focuses on stable roll-to-roll processing, precise alignment control, and reliable integration with production lines.",
    verticalSection: {
      title: "Why Vertical Roll-to-Roll?",
      horizontal: "Horizontal R2R",
      vertical: "Vertical R2R",
      features: [
        { title: "Contamination Control", desc: "Particles naturally fall away from the web surface.", icon: "droplets" },
        { title: "Stable Web Handling", desc: "Gravity-assisted movement maintains stable tension.", icon: "gauge" },
        { title: "Compact Line Layout", desc: "Vertical architecture reduces equipment footprint.", icon: "maximize" },
        { title: "Precision Process Control", desc: "Stable web transport improves alignment accuracy.", icon: "target" }
      ]
    },
    valueProps: [
      {
        title: "Production Stability",
        description: "Maintains stable web tension and alignment accuracy.",
        icon: "zap"
      },
      {
        title: "Process Precision",
        description: "Ensures consistent lamination and exposure quality.",
        icon: "settings"
      },
      {
        title: "Line Integration",
        description: "Designed to integrate smoothly into R2R production lines.",
        icon: "branch"
      },
      {
        title: "Industrial-Grade Components",
        description: "Built with THK, Rexroth, SMC, Omron, Mitsubishi for long-term stability in high-load production.",
        icon: "shield"
      }
    ]
  },
  zh: {
    title: "工程设计",
    subtitle: "为生产而设计的工程",
    description: "我们的工程方法侧重于稳定的卷对卷处理、精确的对准控制以及与生产线的可靠集成。",
    verticalSection: {
      title: "Why Vertical Roll-to-Roll?",
      horizontal: "Horizontal R2R",
      vertical: "Vertical R2R",
      features: [
        { title: "污染控制", desc: "颗粒自然从卷材表面掉落。", icon: "droplets" },
        { title: "稳定的卷材处理", desc: "重力辅助保持稳定的张力。", icon: "gauge" },
        { title: "紧凑的线路布局", desc: "垂直架构减少设备占地面积。", icon: "maximize" },
        { title: "精密工艺控制", desc: "稳定的卷材运输提高对准精度。", icon: "target" }
      ]
    },
    valueProps: [
      {
        title: "生产稳定性",
        description: "保持稳定的卷材张力和对准精度。",
        icon: "zap"
      },
      {
        title: "工艺精度",
        description: "确保一致的层压和曝光质量。",
        icon: "settings"
      },
      {
        title: "生产线集成",
        description: "设计用于平稳集成到卷对卷生产线中。",
        icon: "branch"
      },
      {
        title: "工业级部件",
        description: "采用THK、Rexroth、SMC、Omron、Mitsubishi等全球部件，确保长期稳定性。",
        icon: "shield"
      }
    ]
  }
}

const iconMap = {
  zap: Zap,
  settings: Settings,
  branch: GitBranch,
  shield: Shield,
  droplets: Droplets,
  gauge: Gauge,
  maximize: Maximize2,
  target: Target,
}

export default function EngineeringPage() {
  const [lang, setLang] = useState<Language>("ko")
  const t = translations[lang]
  
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />
      
      {/* Hero Section */}
      <section className="relative border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.4)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-400">{t.title}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {t.subtitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300">
            {t.description}
          </p>
        </div>
      </section>

      {/* Why Vertical Roll-to-Roll Section - MOVED ABOVE FEATURE CARDS */}
      <section className="bg-slate-900 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t.verticalSection.title}</h2>
          </div>

          {/* Comparison Diagram - VISUALLY DOMINANT */}
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            {/* Horizontal R2R */}
            <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 p-8">
              <div className="mb-6 text-center">
                <span className="inline-flex items-center rounded-full bg-slate-700 px-4 py-1.5 text-sm font-medium text-slate-300">
                  {t.verticalSection.horizontal}
                </span>
              </div>
              
              {/* Horizontal Diagram */}
              <div className="relative mx-auto flex h-48 items-center justify-center">
                <div className="relative flex w-full items-center justify-between px-4">
                  {/* Unwind reel */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-600 bg-slate-700">
                      <div className="h-10 w-10 rounded-full bg-slate-600" />
                    </div>
                    <span className="mt-2 text-xs text-slate-400">Unwind</span>
                  </div>
                  
                  {/* Web line with particles */}
                  <div className="relative flex-1 mx-6">
                    <div className="h-1.5 w-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 rounded" />
                    <div className="absolute -top-8 left-1/4 flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-red-400 animate-bounce" style={{animationDelay: '0ms'}} />
                      <div className="h-5 w-px bg-red-400/50 mt-0.5" />
                    </div>
                    <div className="absolute -top-10 left-1/2 flex flex-col items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400 animate-bounce" style={{animationDelay: '200ms'}} />
                      <div className="h-7 w-px bg-red-400/50 mt-0.5" />
                    </div>
                    <div className="absolute -top-7 left-3/4 flex flex-col items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400 animate-bounce" style={{animationDelay: '400ms'}} />
                      <div className="h-4 w-px bg-red-400/50 mt-0.5" />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-red-400">Contamination Risk</span>
                  </div>
                  
                  {/* Rewind reel */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-600 bg-slate-700">
                      <div className="h-12 w-12 rounded-full bg-slate-600" />
                    </div>
                    <span className="mt-2 text-xs text-slate-400">Rewind</span>
                  </div>
                </div>
              </div>
              
              {/* Issues */}
              <div className="mt-8 space-y-2 border-t border-slate-700 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span>Particles settle on web surface</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span>Larger footprint required</span>
                </div>
              </div>
            </div>

            {/* Vertical R2R */}
            <div className="relative overflow-hidden rounded-xl border-2 border-blue-500/50 bg-slate-800/50 p-8 shadow-lg">
              <div className="absolute -right-px -top-px h-8 w-8 border-r-2 border-t-2 border-blue-500" />
              <div className="absolute -bottom-px -left-px h-8 w-8 border-b-2 border-l-2 border-blue-500" />
              
              <div className="mb-6 text-center">
                <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-400">
                  {t.verticalSection.vertical}
                </span>
              </div>
              
              {/* Vertical Diagram */}
              <div className="relative mx-auto flex h-48 items-center justify-center">
                <div className="relative flex flex-col items-center">
                  {/* Unwind reel */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-500/50 bg-blue-500/10">
                      <div className="h-8 w-8 rounded-full bg-blue-500/30" />
                    </div>
                    <span className="mt-1 text-xs text-slate-400">Unwind</span>
                  </div>
                  
                  {/* Vertical web */}
                  <div className="relative my-3 flex items-center">
                    <div className="h-20 w-1.5 bg-gradient-to-b from-blue-500/50 via-blue-400 to-blue-500/50 rounded" />
                    <div className="absolute left-5 top-3 flex items-center">
                      <div className="h-px w-8 bg-green-400/50" />
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    </div>
                    <div className="absolute left-5 top-10 flex items-center">
                      <div className="h-px w-12 bg-green-400/50" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '300ms'}} />
                    </div>
                    <div className="absolute left-5 bottom-3 flex items-center">
                      <div className="h-px w-10 bg-green-400/50" />
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '600ms'}} />
                    </div>
                    <span className="absolute left-20 top-1/2 -translate-y-1/2 text-xs font-medium text-green-400 whitespace-nowrap">Particles fall away</span>
                  </div>
                  
                  {/* Rewind reel */}
                  <div className="flex flex-col items-center">
                    <span className="mb-1 text-xs text-slate-400">Rewind</span>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-500/50 bg-blue-500/10">
                      <div className="h-10 w-10 rounded-full bg-blue-500/30" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="mt-8 space-y-2 border-t border-slate-700 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span>Clean web surface maintained</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span>Compact vertical footprint</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical R2R Feature Points */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.verticalSection.features.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 p-5 transition-all hover:border-slate-600 hover:shadow-sm"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Core Engineering Features - 4 CARDS */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.valueProps.map((prop, index) => {
              const Icon = iconMap[prop.icon as keyof typeof iconMap]
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition-all hover:border-slate-600 hover:shadow-md"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                  
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  
                  <h3 className="text-base font-semibold text-white">{prop.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {prop.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
