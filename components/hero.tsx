"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    headline: "리드프레임 제조 장비",
    headlineSub: "Roll-to-Roll Laminator\n& Exposure Systems",
    subheadline: "리드프레임 양산 환경을 위한 Vertical Roll-to-Roll 공정 장비",
    equipmentPreview: "장비",
    laminator: {
      name: "Roll-to-Roll Laminator",
      model: "PRTLA-350A-LF",
      desc: "롤투롤 드라이필름 라미네이션을 위한 정밀 공정 장비",
      specs: [
        "Max Width: 350mm",
        "Speed: 0.5-3.0 m/min",
        "Temp: ±1°C"
      ],
      cta: "View System",
    },
    exposure: {
      name: "Roll-to-Roll Exposure",
      model: "PRTEX-V350A-LF",
      desc: "고정밀 롤투롤 노광 시스템. 리드프레임 패턴 형성용",
      specs: [
        "Resolution: ±10μm",
        "Alignment: ±5μm",
        "UV: LED/Mercury"
      ],
      cta: "View System",
    },
  },
  en: {
    headline: "Lead Frame Manufacturing Equipment",
    headlineSub: "Roll-to-Roll Laminator\n& Exposure Systems",
    subheadline: "Vertical Roll-to-Roll process equipment for mass production lead frame manufacturing environments.",
    equipmentPreview: "Equipment",
    laminator: {
      name: "Roll-to-Roll Laminator",
      model: "PRTLA-350A-LF",
      desc: "Precision process equipment for continuous roll-to-roll dry film lamination",
      specs: [
        "Max Width: 350mm",
        "Speed: 0.5-3.0 m/min",
        "Temp: ±1°C"
      ],
      cta: "View Details",
    },
    exposure: {
      name: "Roll-to-Roll Exposure",
      model: "PRTEX-V350A-LF",
      desc: "High-precision roll-to-roll exposure system for leadframe patterning",
      specs: [
        "Resolution: ±10μm",
        "Alignment: ±5μm",
        "UV: LED/Mercury"
      ],
      cta: "View Details",
    },
  },
  zh: {
    headline: "Lead Frame Manufacturing Equipment",
    headlineSub: "Roll-to-Roll Laminator\n& Exposure Systems",
    subheadline: "用于引线框架批量生产环境的垂直卷对卷工艺设备",
    equipmentPreview: "设备",
    laminator: {
      name: "卷对卷层压机",
      model: "PRTLA-350A-LF",
      desc: "用于连续卷对卷干膜层压的精密工艺设备",
      specs: [
        "Max Width: 350mm",
        "Speed: 0.5-3.0 m/min",
        "Temp: ±1°C"
      ],
      cta: "查看详情",
    },
    exposure: {
      name: "卷对卷曝光系统",
      model: "PRTEX-V350A-LF",
      desc: "高精度卷对卷曝光系统，用于引线框架图案形成",
      specs: [
        "Resolution: ±10μm",
        "Alignment: ±5μm",
        "UV: LED/Mercury"
      ],
      cta: "查看详情",
    },
  },
}

interface HeroProps {
  lang: Language
}

export function Hero({ lang }: HeroProps) {
  const t = translations[lang]

  return (
    <section id="about" className="relative min-h-screen bg-slate-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/equipment-bg.jpg')" }}
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-slate-900/75" />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      {/* Bottom fade — maintains dark industrial tone into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-800 to-transparent pointer-events-none z-10" />
      
      {/* Hero Section */}
      <div className="relative flex min-h-screen flex-col justify-center px-6 py-16 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          {/* Header - Scaled up */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block text-slate-400 text-lg sm:text-xl lg:text-2xl font-normal mb-4">{t.headline}</span>
              <span className="block leading-tight whitespace-pre-line">{t.headlineSub}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400 leading-relaxed">
              {t.subheadline}
            </p>
          </div>

          {/* Equipment Section Label */}
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-slate-600" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t.equipmentPreview}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-600 via-slate-700 to-transparent" />
          </div>

          {/* Side-by-Side Equipment Cards - Enlarged */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Laminator Card */}
            <div className="group relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm shadow-xl">
              {/* Blueprint corners */}
              <div className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-blue-500/40" />
              <div className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-blue-500/40" />
              <div className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-blue-500/40" />
              <div className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-blue-500/40" />
              
              {/* Image Area - Larger */}
              <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-700 to-slate-800">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-xl border border-slate-600 bg-slate-700/80 shadow-lg">
                      <svg className="h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                      </svg>
                    </div>
                    <p className="text-base font-semibold text-slate-300">{t.laminator.model}</p>
                    <p className="text-sm text-slate-500">Equipment Image</p>
                  </div>
                </div>
                
                {/* Corner markers */}
                <div className="absolute left-4 top-4 flex items-center gap-1">
                  <div className="h-2 w-2 border-l border-t border-slate-500/50" />
                  <span className="text-[9px] font-mono text-slate-500">01</span>
                </div>
                <div className="absolute right-4 bottom-4 flex items-center gap-1">
                  <span className="text-[9px] font-mono text-slate-500">350mm</span>
                  <div className="h-2 w-2 border-r border-b border-slate-500/50" />
                </div>
              </div>
              
              {/* Info Panel - Larger padding */}
              <div className="border-t border-slate-700/50 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">{t.laminator.model}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{t.laminator.name}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-400">{t.laminator.desc}</p>
                
                {/* Specs */}
                <div className="mt-5 space-y-2">
                  {t.laminator.specs.map((spec, idx) => (
                    <div key={idx} className="text-xs font-mono text-slate-400">
                      {spec}
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" size="lg" className="mt-5 w-full border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white text-base" asChild>
                  <a href="/products">
                    {t.laminator.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Exposure Card */}
            <div className="group relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm shadow-xl">
              {/* Blueprint corners */}
              <div className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-blue-500/40" />
              <div className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-blue-500/40" />
              <div className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-blue-500/40" />
              <div className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-blue-500/40" />
              
              {/* Image Area - Larger */}
              <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-700 to-slate-800">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-xl border border-slate-600 bg-slate-700/80 shadow-lg">
                      <svg className="h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                    </div>
                    <p className="text-base font-semibold text-slate-300">{t.exposure.model}</p>
                    <p className="text-sm text-slate-500">Equipment Image</p>
                  </div>
                </div>
                
                {/* Corner markers */}
                <div className="absolute left-4 top-4 flex items-center gap-1">
                  <div className="h-2 w-2 border-l border-t border-slate-500/50" />
                  <span className="text-[9px] font-mono text-slate-500">02</span>
                </div>
                <div className="absolute right-4 bottom-4 flex items-center gap-1">
                  <span className="text-[9px] font-mono text-slate-500">±10μm</span>
                  <div className="h-2 w-2 border-r border-b border-slate-500/50" />
                </div>
              </div>
              
              {/* Info Panel - Larger padding */}
              <div className="border-t border-slate-700/50 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">{t.exposure.model}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{t.exposure.name}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-400">{t.exposure.desc}</p>
                
                {/* Specs */}
                <div className="mt-5 space-y-2">
                  {t.exposure.specs.map((spec, idx) => (
                    <div key={idx} className="text-xs font-mono text-slate-400">
                      {spec}
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" size="lg" className="mt-5 w-full border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white text-base" asChild>
                  <a href="/products">
                    {t.exposure.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
