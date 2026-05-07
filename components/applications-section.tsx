"use client"

type Language = "ko" | "en" | "zh";

const translations = {
  ko: {
    engineeringLabel: "Engineering Overview",
    heroTitle: "Vertical Roll-to-Roll Systems\nfor Lead Frame Production",
    heroSubtitle: "연속 리드프레임 생산 라인을 위한\n맞춤 설계 라미네이션 및 노광 시스템",
    coreSystems: "Core Systems",
    appItems: [
      { title: "Roll-to-Roll Lamination", desc: "연속 드라이필름 라미네이션" },
      { title: "Roll-to-Roll Exposure", desc: "연속 패턴 노광" },
      { title: "Custom Integration", desc: "생산 라인 맞춤 통합" },
    ],
    productionEnv: "Production Environment",
    productionFeatures: [
      "Stable Web Handling",
      "Precision Alignment",
      "Fine Pattern Processing",
      "Custom Line Integration"
    ],
    processFlow: "Process Flow",
    installedBase: "Installed Base",
    installedStats: [
      { value: "50+", label: "Installed Systems" },
      { value: "Lead Frame", label: "Production Lines" },
      { value: "Asia", label: "Manufacturing Sites" },
    ],
    regions: ["China", "Malaysia", "Singapore", "Vietnam", "Korea"],
    installedBaseStatement: "Installed in continuous lead frame production environments",
    customersList: ["Luxshare ICT", "Jinchuan Group", "Henghui Technology"],
    viewMore: "View Installed Base",
  },
  en: {
    engineeringLabel: "Engineering Overview",
    heroTitle: "Vertical Roll-to-Roll Systems\nfor Lead Frame Production",
    heroSubtitle: "Custom-engineered lamination and exposure systems\nfor continuous lead frame manufacturing lines.",
    coreSystems: "Core Systems",
    appItems: [
      { title: "Roll-to-Roll Lamination", desc: "Continuous dry film lamination" },
      { title: "Roll-to-Roll Exposure", desc: "Continuous pattern exposure" },
      { title: "Custom Integration", desc: "Production line integration" },
    ],
    productionEnv: "Production Environment",
    productionFeatures: [
      "Stable Web Handling",
      "Precision Alignment",
      "Fine Pattern Processing",
      "Custom Line Integration"
    ],
    processFlow: "Process Flow",
    installedBase: "Installed Base",
    installedStats: [
      { value: "50+", label: "Installed Systems" },
      { value: "Lead Frame", label: "Production Lines" },
      { value: "Asia", label: "Manufacturing Sites" },
    ],
    regions: ["China", "Malaysia", "Singapore", "Vietnam", "Korea"],
    installedBaseStatement: "Installed in continuous lead frame production environments",
    customersList: ["Luxshare ICT", "Jinchuan Group", "Henghui Technology"],
    viewMore: "View Installed Base",
  },
  zh: {
    engineeringLabel: "Engineering Overview",
    heroTitle: "Vertical Roll-to-Roll Systems\nfor Lead Frame Production",
    heroSubtitle: "用于连续引线框架制造线的\n定制工程层压和曝光系统",
    coreSystems: "Core Systems",
    appItems: [
      { title: "Roll-to-Roll Lamination", desc: "连续干膜层压" },
      { title: "Roll-to-Roll Exposure", desc: "连续图案曝光" },
      { title: "Custom Integration", desc: "生产线集成" },
    ],
    productionEnv: "Production Environment",
    productionFeatures: [
      "Stable Web Handling",
      "Precision Alignment",
      "Fine Pattern Processing",
      "Custom Line Integration"
    ],
    processFlow: "Process Flow",
    installedBase: "Installed Base",
    installedStats: [
      { value: "50+", label: "Installed Systems" },
      { value: "Lead Frame", label: "Production Lines" },
      { value: "Asia", label: "Manufacturing Sites" },
    ],
    regions: ["China", "Malaysia", "Singapore", "Vietnam", "Korea"],
    installedBaseStatement: "Installed in continuous lead frame production environments",
    customersList: ["Luxshare ICT", "Jinchuan Group", "Henghui Technology"],
    viewMore: "View Installed Base",
  },
}

interface ApplicationsSectionProps {
  lang: Language
}

function SectionLabel({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${light ? 'via-slate-600 to-slate-600' : 'via-slate-700 to-slate-700'}`} />
      <h2 className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-slate-400' : 'text-slate-500'}`}>
        {label}
      </h2>
      <div className={`h-px flex-1 bg-gradient-to-l from-transparent ${light ? 'via-slate-600 to-slate-600' : 'via-slate-700 to-slate-700'}`} />
    </div>
  )
}

export function ApplicationsSection({ lang }: ApplicationsSectionProps) {
  const t = translations[lang]

  return (
    <section className="relative">
      {/* Dark industrial section - continues from hero */}
      <div className="relative bg-slate-800">
        {/* Subtle industrial grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {/* ── Engineering Overview Header ── */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-3">{t.engineeringLabel}</h2>
            <p className="text-sm text-slate-400 max-w-2xl">Stable transport architecture for continuous lead frame production</p>
          </div>

          {/* ── Technical Specs Tag Row ── */}
          <div className="mb-16 flex flex-wrap items-center gap-3">
            {[
              "● Stable Web Handling",
              "● ±5μm Alignment",
              "● Continuous Roll Transport",
              "● Fine Pattern Exposure"
            ].map((spec, idx) => (
              <span key={idx} className="inline-flex items-center text-xs font-mono text-slate-500 border-l border-slate-700 pl-3">
                {spec}
              </span>
            ))}
          </div>

          {/* ── Industrial Machinery Details - Enlarged by 25% ── */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Card 1: Roller Assembly */}
            <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900/60 backdrop-blur-sm group">
              {/* Background with enhanced blueprint overlay */}
              <div className="aspect-square bg-gradient-to-br from-slate-850 via-slate-900 to-slate-950 relative">
                {/* Dense technical grid blueprint */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:0.75rem_0.75rem]" />
                
                {/* Scanning light effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
                
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/50 to-slate-900/70" />
                
                {/* Technical content */}
                <div className="absolute inset-0 flex flex-col items-center justify-between p-8">
                  {/* Top: Technical label */}
                  <div className="text-xs font-mono text-slate-500/80 tracking-wider">ROLLER_ASM_V2.1</div>
                  
                  {/* Center: Mechanical visualization - Enlarged */}
                  <div className="relative w-full flex items-center justify-center py-6">
                    {/* Technical lines - left guide */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/15 to-transparent" />
                    
                    {/* Roller assembly - precision detail */}
                    <div className="relative flex flex-col items-center gap-4">
                      {/* Top roller with detail */}
                      <div className="relative">
                        <div className="h-3 w-32 rounded-full border border-slate-500 bg-slate-800 shadow-lg" />
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/70" />
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/70" />
                      </div>
                      
                      {/* Web path indicator */}
                      <div className="w-20 h-0.5 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600" />
                      
                      {/* Bottom roller with detail */}
                      <div className="relative">
                        <div className="h-3 w-32 rounded-full border border-slate-500 bg-slate-800 shadow-lg" />
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/70" />
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/70" />
                      </div>
                    </div>
                    
                    {/* Technical lines - right guide */}
                    <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/15 to-transparent" />
                  </div>
                  
                  {/* Bottom: Specs - Enhanced */}
                  <div className="text-xs text-slate-500 space-y-0.5 text-center">
                    <div className="font-mono">Ø350mm / ±0.1mm</div>
                    <div className="font-mono">0.5-3.0 m/min</div>
                  </div>
                </div>
              </div>
              
              {/* Card footer */}
              <div className="border-t border-slate-700/60 px-6 py-4 bg-slate-900/70">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Roller Assembly</p>
                <p className="text-xs text-slate-500">Stable web transport control</p>
              </div>
            </div>

            {/* Card 2: UV Exposure Module */}
            <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900/60 backdrop-blur-sm group">
              {/* Background with enhanced technical overlay */}
              <div className="aspect-square bg-gradient-to-br from-slate-850 via-slate-900 to-slate-950 relative">
                {/* Dense technical grid blueprint */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:0.75rem_0.75rem]" />
                
                {/* Scanning light effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-slate-900/80" />
                
                {/* Technical content */}
                <div className="absolute inset-0 flex flex-col items-center justify-between p-8">
                  {/* Top: Technical label */}
                  <div className="text-xs font-mono text-slate-500/80 tracking-wider">UV_EXP_LED_V3</div>
                  
                  {/* Center: UV chamber visualization - Enlarged */}
                  <div className="relative w-full flex items-center justify-center">
                    <div className="relative w-36 h-28">
                      {/* UV chamber housing */}
                      <div className="absolute inset-0 border-2 border-slate-600 rounded bg-slate-800/60" />
                      
                      {/* UV lamp element - enhanced glow */}
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-3 rounded-full bg-gradient-to-r from-blue-500/50 via-violet-500/60 to-blue-500/50 blur-sm group-hover:blur-lg transition-all shadow-lg shadow-blue-500/30" />
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-500/40 via-violet-500/50 to-blue-500/40 rounded-full" />
                      
                      {/* Optical elements */}
                      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-20 h-2 border border-slate-500 rounded-full bg-slate-700/70" />
                      
                      {/* Alignment crosshairs - Enhanced */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-slate-600" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-slate-700/50" />
                    </div>
                  </div>
                  
                  {/* Bottom: Specs - Enhanced */}
                  <div className="text-xs text-slate-500 space-y-0.5 text-center">
                    <div className="font-mono">Resolution: ±10μm</div>
                    <div className="font-mono">365nm LED</div>
                  </div>
                </div>
              </div>
              
              {/* Card footer */}
              <div className="border-t border-slate-700/60 px-6 py-4 bg-slate-900/70">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">UV Exposure Module</p>
                <p className="text-xs text-slate-500">Uniform exposure stability</p>
              </div>
            </div>

            {/* Card 3: Tension Control System */}
            <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900/60 backdrop-blur-sm group">
              {/* Background with enhanced technical overlay */}
              <div className="aspect-square bg-gradient-to-br from-slate-850 via-slate-900 to-slate-950 relative">
                {/* Dense technical grid blueprint */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:0.75rem_0.75rem]" />
                
                {/* Scanning light effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-slate-900/80" />
                
                {/* Technical content */}
                <div className="absolute inset-0 flex flex-col items-center justify-between p-8">
                  {/* Top: Technical label */}
                  <div className="text-xs font-mono text-slate-500/80 tracking-wider">SERVO_CTRL_V4.2</div>
                  
                  {/* Center: Servo mechanism - Enlarged */}
                  <div className="relative w-full flex items-center justify-center">
                    <div className="relative w-36 h-28">
                      {/* Motor body */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-slate-600 bg-slate-800 shadow-md shadow-blue-500/20" />
                      
                      {/* Drive shaft */}
                      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-1.5 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full" />
                      
                      {/* Feedback sensor - Enhanced */}
                      <div className="absolute right-3 top-1/4 w-2.5 h-2.5 rounded-full border border-blue-500/70 bg-blue-500/30" />
                      
                      {/* Tension readout lines */}
                      <div className="absolute right-0 top-1/4 w-8 space-y-0.5">
                        <div className="h-px w-full bg-gradient-to-l from-slate-500 to-transparent" />
                        <div className="h-px w-6 bg-gradient-to-l from-slate-500 to-transparent" />
                        <div className="h-px w-5 bg-gradient-to-l from-slate-500 to-transparent" />
                      </div>
                      
                      {/* Bottom feedback indicator */}
                      <div className="absolute right-3 bottom-1/4 w-2.5 h-2.5 rounded-full border border-blue-500/70 bg-blue-500/30" />
                      <div className="absolute right-0 bottom-1/4 w-8 space-y-0.5">
                        <div className="h-px w-5 bg-gradient-to-l from-slate-500 to-transparent" />
                        <div className="h-px w-6 bg-gradient-to-l from-slate-500 to-transparent" />
                        <div className="h-px w-8 bg-gradient-to-l from-slate-500 to-transparent" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom: Specs - Enhanced */}
                  <div className="text-xs text-slate-500 space-y-0.5 text-center">
                    <div className="font-mono">Accuracy: ±0.05N</div>
                    <div className="font-mono">{"<100ms Response"}</div>
                  </div>
                </div>
              </div>
              
              {/* Card footer */}
              <div className="border-t border-slate-700/60 px-6 py-4 bg-slate-900/70">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Tension Control System</p>
                <p className="text-xs text-slate-500">Continuous web tension regulation</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient transition to slightly lighter section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-850 to-transparent pointer-events-none" style={{ background: 'linear-gradient(to top, rgb(30, 41, 59), transparent)' }} />
      </div>

      {/* Slightly lighter industrial section for Installed Base */}
      <div className="relative bg-slate-800" style={{ backgroundColor: 'rgb(30, 41, 59)' }}>
        {/* Subtle industrial grid continues */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-40 lg:px-8">
          {/* ── Installed Base - Editorial Layout ── */}
          <div className="text-center">
            <SectionLabel label={t.installedBase} light />
            
            {/* Large Statistic - Reduced by 12% */}
            <div className="mb-6">
              <div className="text-6xl lg:text-7xl font-semibold text-white leading-tight">
                50+
              </div>
              <p className="text-xl text-slate-300 mt-4">Installed Systems Across Asia</p>
            </div>

            {/* Supporting Statement - Lower emphasis */}
            <p className="text-sm text-slate-500 mb-14">{t.installedBaseStatement}</p>

            {/* Regional Footprint - Increased opacity */}
            <div className="mb-20 flex items-center justify-center gap-2">
              {t.regions.map((region, index) => (
                <span key={index} className="text-sm text-slate-300 tracking-wide">
                  {region}
                  {index < t.regions.length - 1 && <span className="mx-2 text-slate-500">·</span>}
                </span>
              ))}
            </div>

            {/* Major Customers Label */}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-8">Major Customers</p>

            {/* Customer Badges - Horizontal layout */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
              {t.customersList.map((customer, index) => (
                <span key={index} className="inline-flex items-center rounded-full border border-slate-600 bg-slate-700/50 px-4 py-2 text-sm font-medium text-slate-300">
                  {customer}
                </span>
              ))}
              <span className="inline-flex items-center rounded-full border border-slate-600/60 bg-slate-700/30 px-4 py-2 text-sm font-medium text-slate-400">
                + More
              </span>
            </div>
            
            {/* CTA Button - Below customer badges */}
            <a
              href="/installed-base"
              className="inline-flex items-center gap-2 text-xs text-slate-400 border-b border-slate-700 pb-1 transition-all hover:text-slate-300 hover:border-slate-600 font-medium tracking-wide"
            >
              {t.viewMore}
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
