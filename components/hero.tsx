"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    sectionLabel: "Core Equipment",
    heading: "Built for Stable Mass Production",
    sub: "Production-proven Roll-to-Roll systems engineered for Leadframe and Semiconductor Packaging lines.",
    laminator: {
      name: "Roll-to-Roll Laminator",
      model: "PRTLA-350A-PT",
      desc: "Continuous dry-film lamination for Leadframe mass production.",
      specs: [
        "Web Width: Up to 350mm",
        "Speed: 0.1 – 5.0 m/min",
        "Temp Accuracy: ±3°C",
        "Pressure: ±0.1 kg/㎠",
      ],
      cta: "View Details",
    },
    exposure: {
      name: "Roll-to-Roll Exposure System",
      model: "PRTEX-380VAN-LF-LED",
      desc: "Vertical Roll-to-Roll LED exposure for Leadframe patterning.",
      specs: [
        "Resolution: 20μm ±2μm",
        "Alignment: ±5μm",
        "UV: 365nm LED",
        "Tact Time: 12 sec",
      ],
      cta: "View Details",
    },
  },
  en: {
    sectionLabel: "Core Equipment",
    heading: "Built for Stable Mass Production",
    sub: "Production-proven Roll-to-Roll systems engineered for Leadframe and Semiconductor Packaging lines.",
    laminator: {
      name: "Roll-to-Roll Laminator",
      model: "PRTLA-350A-PT",
      desc: "Continuous dry-film lamination for Leadframe mass production.",
      specs: [
        "Web Width: Up to 350mm",
        "Speed: 0.1 – 5.0 m/min",
        "Temp Accuracy: ±3°C",
        "Pressure: ±0.1 kg/㎠",
      ],
      cta: "View Details",
    },
    exposure: {
      name: "Roll-to-Roll Exposure System",
      model: "PRTEX-380VAN-LF-LED",
      desc: "Vertical Roll-to-Roll LED exposure for Leadframe patterning.",
      specs: [
        "Resolution: 20μm ±2μm",
        "Alignment: ±5μm",
        "UV: 365nm LED",
        "Tact Time: 12 sec",
      ],
      cta: "View Details",
    },
  },
  zh: {
    sectionLabel: "Core Equipment",
    heading: "Built for Stable Mass Production",
    sub: "Production-proven Roll-to-Roll systems engineered for Leadframe and Semiconductor Packaging lines.",
    laminator: {
      name: "Roll-to-Roll Laminator",
      model: "PRTLA-350A-PT",
      desc: "Continuous dry-film lamination for Leadframe mass production.",
      specs: [
        "Web Width: Up to 350mm",
        "Speed: 0.1 – 5.0 m/min",
        "Temp Accuracy: ±3°C",
        "Pressure: ±0.1 kg/㎠",
      ],
      cta: "View Details",
    },
    exposure: {
      name: "Roll-to-Roll Exposure System",
      model: "PRTEX-380VAN-LF-LED",
      desc: "Vertical Roll-to-Roll LED exposure for Leadframe patterning.",
      specs: [
        "Resolution: 20μm ±2μm",
        "Alignment: ±5μm",
        "UV: 365nm LED",
        "Tact Time: 12 sec",
      ],
      cta: "View Details",
    },
  },
}

interface HeroProps {
  lang: Language
}

/**
 * Image-ready placeholder block for equipment cards.
 * Swap to <Image src="/images/equipment/{model}.jpg" ... /> when real photos are available.
 */
function EquipmentImagePlaceholder({ model, index }: { model: string; index: string }) {
  return (
    <div className="relative aspect-[16/9] bg-gradient-to-br from-[#0F1A2E] via-[#0B1220] to-[#060912] overflow-hidden">
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
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(199,168,109,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-4 left-4 h-3 w-3 border-l border-t"
        style={{ borderColor: "rgba(199,168,109,0.35)" }}
      />
      <div
        className="absolute top-4 right-4 h-3 w-3 border-r border-t"
        style={{ borderColor: "rgba(199,168,109,0.35)" }}
      />
      <div
        className="absolute bottom-4 left-4 h-3 w-3 border-l border-b"
        style={{ borderColor: "rgba(199,168,109,0.35)" }}
      />
      <div
        className="absolute bottom-4 right-4 h-3 w-3 border-r border-b"
        style={{ borderColor: "rgba(199,168,109,0.35)" }}
      />
      <div className="absolute left-4 top-4 flex items-center gap-1.5 pl-5">
        <span className="text-[9px] font-mono text-slate-600">{index}</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-3xl font-bold tracking-tight opacity-25"
          style={{ color: "#C7A86D" }}
        >
          {model.split("-")[0]}
        </span>
      </div>
    </div>
  )
}

export function Hero({ lang }: HeroProps) {
  const t = translations[lang]

  return (
    <section id="about" className="relative min-h-screen bg-[#0A0D14]">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #060912 0%, #0B1220 50%, #0F1A2E 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0D14] to-transparent pointer-events-none z-10"
      />

      <div className="relative flex min-h-screen flex-col justify-center px-6 py-16 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                {t.sectionLabel}
              </p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
              {t.heading}
            </h2>
            <p className="max-w-2xl text-sm text-slate-400 leading-relaxed">{t.sub}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* Laminator */}
            <div className="group relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm shadow-xl transition-colors hover:border-slate-600">
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(199,168,109,0.5), transparent)",
                }}
              />
              <EquipmentImagePlaceholder model={t.laminator.model} index="01" />

              <div className="border-t border-slate-700/50 p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "#C7A86D" }}
                  />
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: "#C7A86D" }}
                  >
                    {t.laminator.model}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{t.laminator.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t.laminator.desc}
                </p>

                <div className="mt-4 space-y-1.5">
                  {t.laminator.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-mono text-slate-400"
                    >
                      <span
                        className="h-px w-3 flex-shrink-0"
                        style={{ backgroundColor: "#C7A86D", opacity: 0.4 }}
                      />
                      {spec}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="default"
                  className="mt-5 w-full border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                  asChild
                >
                  <a href="/products">
                    {t.laminator.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Exposure */}
            <div className="group relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm shadow-xl transition-colors hover:border-slate-600">
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(199,168,109,0.5), transparent)",
                }}
              />
              <EquipmentImagePlaceholder model={t.exposure.model} index="02" />

              <div className="border-t border-slate-700/50 p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "#C7A86D" }}
                  />
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: "#C7A86D" }}
                  >
                    {t.exposure.model}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{t.exposure.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t.exposure.desc}
                </p>

                <div className="mt-4 space-y-1.5">
                  {t.exposure.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-mono text-slate-400"
                    >
                      <span
                        className="h-px w-3 flex-shrink-0"
                        style={{ backgroundColor: "#C7A86D", opacity: 0.4 }}
                      />
                      {spec}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="default"
                  className="mt-5 w-full border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                  asChild
                >
                  <a href="/products">
                    {t.exposure.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
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
