"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    sectionLabel: "Core Equipment",
    heading: "Built for Stable Mass Production",
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
 * Equipment card image block. Renders <Image> when imageSrc is provided,
 * otherwise falls back to the dark schematic placeholder.
 */
function EquipmentImagePlaceholder({
  model,
  index,
  imageSrc,
  alt,
}: {
  model: string
  index: string
  imageSrc?: string
  alt?: string
}) {
  if (imageSrc) {
    return (
      <div className="relative aspect-[16/9] bg-[#0A0F1A] overflow-hidden border-b border-slate-800/60">
        <Image
          src={imageSrc}
          alt={alt ?? model}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute top-3 left-3 pl-4 z-10">
          <span className="text-[9px] font-mono text-white/60 tracking-wider">{index}</span>
        </div>
      </div>
    )
  }
  return (
    <div className="relative aspect-[16/9] bg-[#0A0F1A] overflow-hidden border-b border-slate-800/60">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute top-3 left-3 h-2 w-2 border-l border-t"
        style={{ borderColor: "rgba(199,168,109,0.4)" }}
      />
      <div
        className="absolute top-3 right-3 h-2 w-2 border-r border-t"
        style={{ borderColor: "rgba(199,168,109,0.4)" }}
      />
      <div
        className="absolute bottom-3 left-3 h-2 w-2 border-l border-b"
        style={{ borderColor: "rgba(199,168,109,0.4)" }}
      />
      <div
        className="absolute bottom-3 right-3 h-2 w-2 border-r border-b"
        style={{ borderColor: "rgba(199,168,109,0.4)" }}
      />
      <div className="absolute top-3 left-3 pl-4">
        <span className="text-[9px] font-mono text-slate-600 tracking-wider">{index}</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-2xl font-bold tracking-tight text-slate-700"
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
    <section id="about" className="relative min-h-screen bg-[#0A0F1A]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.heading}
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* Laminator */}
            <div className="group relative overflow-hidden border border-slate-800 bg-slate-900/40 transition-colors hover:border-slate-700">
              <EquipmentImagePlaceholder
                model={t.laminator.model}
                index="01"
                imageSrc="/images/product-laminator.jpg"
                alt={t.laminator.name}
              />

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
                  className="mt-5 w-full rounded-none border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white text-xs font-semibold uppercase tracking-[0.08em]"
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
            <div className="group relative overflow-hidden border border-slate-800 bg-slate-900/40 transition-colors hover:border-slate-700">
              <EquipmentImagePlaceholder
                model={t.exposure.model}
                index="02"
                imageSrc="/images/product-exposure.jpg"
                alt={t.exposure.name}
              />

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
                  className="mt-5 w-full rounded-none border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white text-xs font-semibold uppercase tracking-[0.08em]"
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
