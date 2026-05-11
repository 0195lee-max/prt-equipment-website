"use client"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    engineeringLabel: "Engineering Overview",
    heroTitle: "Precision Web Handling Architecture",
    heroSubtitle:
      "Stable transport architecture for continuous Leadframe and Semiconductor Packaging production.",
    specsRow: [
      "Stable Web Handling",
      "±5μm Alignment Accuracy",
      "Continuous Roll Transport",
      "365nm LED UV Exposure",
    ],
    coreCapabilities: "Core Capabilities",
    cards: [
      {
        label: "WEB TRANSPORT",
        title: "Roll-to-Roll Web Handling",
        desc: "Stable web tension control and continuous transport.",
        specs: ["Speed: 0.1 – 5.0 m/min", "Tension: Servo controlled", "Web Width: Up to 380mm"],
      },
      {
        label: "UV EXPOSURE",
        title: "LED UV Exposure Module",
        desc: "High-precision LED UV exposure for Leadframe patterning.",
        specs: ["Resolution: 20μm ±2μm", "Alignment: ±5μm", "UV: 365nm LED"],
      },
      {
        label: "VISION ALIGNMENT",
        title: "8CCD Vision Alignment",
        desc: "Precision automatic alignment with 8-channel CCD cameras.",
        specs: ["8CCD Vision System", "Tact Time: 12 sec", "Auto alignment"],
      },
    ],
    installedBase: "Installed Base",
    installedStats: [
      { value: "50+", label: "Installed Systems" },
      { value: "Since 2010", label: "Engineering" },
      { value: "5+", label: "Countries" },
    ],
    installedBaseStatement:
      "Running in Leadframe and Semiconductor Packaging production sites today.",
    regions: ["China", "Malaysia", "Taiwan", "Japan", "Korea"],
    customersLabel: "Named Customers",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    customersNote: "and additional manufacturers (confidential)",
    viewMore: "View Full Installed Base",
  },
  en: {
    engineeringLabel: "Engineering Overview",
    heroTitle: "Precision Web Handling Architecture",
    heroSubtitle:
      "Stable transport architecture for continuous Leadframe and Semiconductor Packaging production.",
    specsRow: [
      "Stable Web Handling",
      "±5μm Alignment Accuracy",
      "Continuous Roll Transport",
      "365nm LED UV Exposure",
    ],
    coreCapabilities: "Core Capabilities",
    cards: [
      {
        label: "WEB TRANSPORT",
        title: "Roll-to-Roll Web Handling",
        desc: "Stable web tension control and continuous transport.",
        specs: ["Speed: 0.1 – 5.0 m/min", "Tension: Servo controlled", "Web Width: Up to 380mm"],
      },
      {
        label: "UV EXPOSURE",
        title: "LED UV Exposure Module",
        desc: "High-precision LED UV exposure for Leadframe patterning.",
        specs: ["Resolution: 20μm ±2μm", "Alignment: ±5μm", "UV: 365nm LED"],
      },
      {
        label: "VISION ALIGNMENT",
        title: "8CCD Vision Alignment",
        desc: "Precision automatic alignment with 8-channel CCD cameras.",
        specs: ["8CCD Vision System", "Tact Time: 12 sec", "Auto alignment"],
      },
    ],
    installedBase: "Installed Base",
    installedStats: [
      { value: "50+", label: "Installed Systems" },
      { value: "Since 2010", label: "Engineering" },
      { value: "5+", label: "Countries" },
    ],
    installedBaseStatement:
      "Running in Leadframe and Semiconductor Packaging production sites today.",
    regions: ["China", "Malaysia", "Taiwan", "Japan", "Korea"],
    customersLabel: "Named Customers",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    customersNote: "and additional manufacturers (confidential)",
    viewMore: "View Full Installed Base",
  },
  zh: {
    engineeringLabel: "Engineering Overview",
    heroTitle: "Precision Web Handling Architecture",
    heroSubtitle:
      "Stable transport architecture for continuous Leadframe and Semiconductor Packaging production.",
    specsRow: [
      "Stable Web Handling",
      "±5μm Alignment Accuracy",
      "Continuous Roll Transport",
      "365nm LED UV Exposure",
    ],
    coreCapabilities: "Core Capabilities",
    cards: [
      {
        label: "WEB TRANSPORT",
        title: "Roll-to-Roll Web Handling",
        desc: "Stable web tension control and continuous transport.",
        specs: ["Speed: 0.1 – 5.0 m/min", "Tension: Servo controlled", "Web Width: Up to 380mm"],
      },
      {
        label: "UV EXPOSURE",
        title: "LED UV Exposure Module",
        desc: "High-precision LED UV exposure for Leadframe patterning.",
        specs: ["Resolution: 20μm ±2μm", "Alignment: ±5μm", "UV: 365nm LED"],
      },
      {
        label: "VISION ALIGNMENT",
        title: "8CCD Vision Alignment",
        desc: "Precision automatic alignment with 8-channel CCD cameras.",
        specs: ["8CCD Vision System", "Tact Time: 12 sec", "Auto alignment"],
      },
    ],
    installedBase: "Installed Base",
    installedStats: [
      { value: "50+", label: "Installed Systems" },
      { value: "Since 2010", label: "Engineering" },
      { value: "5+", label: "Countries" },
    ],
    installedBaseStatement:
      "Running in Leadframe and Semiconductor Packaging production sites today.",
    regions: ["China", "Malaysia", "Taiwan", "Japan", "Korea"],
    customersLabel: "Named Customers",
    customersList: ["Luxshare Precision", "Henghui Technology", "Jinchuan Group"],
    customersNote: "and additional manufacturers (confidential)",
    viewMore: "View Full Installed Base",
  },
}

interface ApplicationsSectionProps {
  lang: Language
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-600 to-slate-600" />
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
        {label}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-600 to-slate-600" />
    </div>
  )
}

export function ApplicationsSection({ lang }: ApplicationsSectionProps) {
  const t = translations[lang]

  return (
    <section className="relative">
      <div className="relative bg-[#0F1A2E]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                {t.engineeringLabel}
              </p>
            </div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3">{t.heroTitle}</h2>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">{t.heroSubtitle}</p>
          </div>

          <div className="mb-16 flex flex-wrap items-center gap-3 mt-8">
            {t.specsRow.map((spec, idx) => (
              <span
                key={idx}
                className="inline-flex items-center text-[11px] font-mono text-slate-500 border-l-2 pl-3"
                style={{ borderColor: "rgba(199,168,109,0.4)" }}
              >
                {spec}
              </span>
            ))}
          </div>

          <div className="mb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 mb-8">
              {t.coreCapabilities}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {t.cards.map((card, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900/60 backdrop-blur-sm"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(199,168,109,0.4), transparent)",
                  }}
                />

                {/* Image-ready placeholder — swap to /public/images/equipment/{file}.jpg */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-[#0F1A2E] via-[#0B1220] to-[#060912]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(199,168,109,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,168,109,0.04) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(199,168,109,0.06) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="absolute top-3 left-3 h-2.5 w-2.5 border-l border-t"
                    style={{ borderColor: "rgba(199,168,109,0.35)" }}
                  />
                  <div
                    className="absolute top-3 right-3 h-2.5 w-2.5 border-r border-t"
                    style={{ borderColor: "rgba(199,168,109,0.35)" }}
                  />
                  <div
                    className="absolute bottom-3 left-3 h-2.5 w-2.5 border-l border-b"
                    style={{ borderColor: "rgba(199,168,109,0.35)" }}
                  />
                  <div
                    className="absolute bottom-3 right-3 h-2.5 w-2.5 border-r border-b"
                    style={{ borderColor: "rgba(199,168,109,0.35)" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6">
                      <p className="text-[9px] font-mono text-slate-600 tracking-[0.25em] mb-2">
                        {card.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-400">{card.title}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-700/60 px-6 py-5 bg-slate-900/70">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    {card.title}
                  </p>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{card.desc}</p>
                  <div className="space-y-1">
                    {card.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 text-xs font-mono text-slate-500"
                      >
                        <span
                          className="h-px w-3 flex-shrink-0"
                          style={{ backgroundColor: "#C7A86D", opacity: 0.4 }}
                        />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, #0B1220, transparent)" }}
        />
      </div>

      {/* Installed Base */}
      <div className="relative" style={{ backgroundColor: "#0B1220" }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="text-center">
            <SectionLabel label={t.installedBase} />

            <div className="mb-12 flex items-center justify-center gap-12 sm:gap-20">
              {t.installedStats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="text-4xl lg:text-5xl font-semibold leading-tight"
                    style={{ color: "#C7A86D" }}
                  >
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs text-slate-500 tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-400 mb-10 max-w-2xl mx-auto">
              {t.installedBaseStatement}
            </p>

            <div className="mb-16 flex items-center justify-center gap-2 flex-wrap">
              {t.regions.map((region, idx) => (
                <span key={idx} className="text-sm text-slate-300 tracking-wide">
                  {region}
                  {idx < t.regions.length - 1 && <span className="mx-2 text-slate-600">·</span>}
                </span>
              ))}
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 mb-6">
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
              className="inline-flex items-center gap-2 text-xs text-slate-400 border-b border-slate-700 pb-1 transition-all hover:text-slate-200 hover:border-slate-500 font-medium tracking-wide mt-8"
            >
              {t.viewMore} <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
