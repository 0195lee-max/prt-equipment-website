"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Cpu, Zap, Settings, Package } from "lucide-react"
import { Footer } from "@/components/footer"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    title: "장비 플랫폼",
    subtitle: "리드프레임 양산을 위한 장비 플랫폼",
    description: "공정, 생산량, 라인 아키텍처에 따라 구성된 모듈형 R2R 시스템.",
    platforms: [
      {
        name: "R2R Standard",
        processes: ["QFN", "QFP", "SOP", "DFN"],
        application: "대량 리드프레임 라인",
        focus: ["웹 장력 안정성", "인라인 정렬 아키텍처", "연속 운전 설계"]
      },
      {
        name: "R2R Precision",
        processes: ["BGA", "LGA", "CSP"],
        application: "미세 피치 기판 처리",
        focus: ["서브미크론 정렬", "열 보상 제어", "클린룸 호환"]
      },
      {
        name: "R2R Hybrid",
        processes: ["SOIC", "TSSOP", "MSOP"],
        application: "혼합 생산량 환경",
        focus: ["빠른 전환 메커니즘", "다중 포맷 처리", "적응형 속도 제어"]
      },
      {
        name: "R2R Heavy",
        processes: ["TO", "D-PAK", "Power QFN"],
        application: "파워 반도체 리드프레임",
        focus: ["고부하 이송 시스템", "향상된 에지 가이드", "견고한 재료 핸들링"]
      }
    ],
    footnote: "최종 사양은 라인 구성 및 공정 요구 사항에 따라 정의됩니다.",
    applicationLabel: "일반적 적용",
    focusLabel: "엔지니어링 포커스",
    processLabel: "지원 공정"
  },
  en: {
    title: "Equipment Platforms",
    subtitle: "Equipment Platforms for Leadframe Mass Production",
    description: "Modular R2R systems configured by process, volume, and line architecture.",
    platforms: [
      {
        name: "R2R Standard",
        processes: ["QFN", "QFP", "SOP", "DFN"],
        application: "High-volume leadframe lines",
        focus: ["Web tension stability", "Inline alignment architecture", "Continuous operation design"]
      },
      {
        name: "R2R Precision",
        processes: ["BGA", "LGA", "CSP"],
        application: "Fine-pitch substrate processing",
        focus: ["Sub-micron registration", "Thermal compensation control", "Cleanroom compatibility"]
      },
      {
        name: "R2R Hybrid",
        processes: ["SOIC", "TSSOP", "MSOP"],
        application: "Mixed-volume production environments",
        focus: ["Quick changeover mechanism", "Multi-format handling", "Adaptive speed control"]
      },
      {
        name: "R2R Heavy",
        processes: ["TO", "D-PAK", "Power QFN"],
        application: "Power semiconductor leadframes",
        focus: ["High-load transport system", "Enhanced edge guidance", "Robust material handling"]
      }
    ],
    footnote: "Final specifications are defined per line configuration and process requirements.",
    applicationLabel: "Typical Application",
    focusLabel: "Engineering Focus",
    processLabel: "Supported Processes"
  },
  zh: {
    title: "设备平台",
    subtitle: "引线框架量产设备平台",
    description: "按工艺、产量和产线架构配置的模块化R2R系统。",
    platforms: [
      {
        name: "R2R Standard",
        processes: ["QFN", "QFP", "SOP", "DFN"],
        application: "大批量引线框架产线",
        focus: ["卷材张力稳定性", "在线对准架构", "连续运行设计"]
      },
      {
        name: "R2R Precision",
        processes: ["BGA", "LGA", "CSP"],
        application: "精细间距基板处理",
        focus: ["亚微米对准", "热补偿控制", "洁净室兼容"]
      },
      {
        name: "R2R Hybrid",
        processes: ["SOIC", "TSSOP", "MSOP"],
        application: "混合产量生产环境",
        focus: ["快速换型机构", "多格式处理", "自适应速度控制"]
      },
      {
        name: "R2R Heavy",
        processes: ["TO", "D-PAK", "Power QFN"],
        application: "功率半导体引线框架",
        focus: ["高负载传输系统", "增强边缘导向", "坚固材料处理"]
      }
    ],
    footnote: "最终规格根据产线配置和工艺要求定义。",
    applicationLabel: "典型应用",
    focusLabel: "工程重点",
    processLabel: "支持工艺"
  }
}

const platformIcons = [Cpu, Zap, Settings, Package]

export default function SpecificationsPage() {
  const [lang, setLang] = useState<Language>("en")
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
      
      {/* Platform Cards */}
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {t.platforms.map((platform, index) => {
              const Icon = platformIcons[index]
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-slate-700 bg-slate-800/50 p-8 transition-all hover:border-blue-500/50 hover:shadow-lg"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20">
                      <Icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                  </div>
                  
                  {/* Supported Processes */}
                  <div className="mb-6">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                      {t.processLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {platform.processes.map((process, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400"
                        >
                          {process}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Application */}
                  <div className="mb-6">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                      {t.applicationLabel}
                    </p>
                    <p className="font-medium text-white">{platform.application}</p>
                  </div>
                  
                  {/* Engineering Focus */}
                  <div>
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                      {t.focusLabel}
                    </p>
                    <ul className="space-y-2">
                      {platform.focus.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
          
          <p className="mt-12 text-center text-sm text-slate-400">{t.footnote}</p>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  )
}
