"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle2, Globe, Users, Settings, ShieldCheck } from "lucide-react"

type Language = "ko" | "en" | "zh"

const whyPoints = [
  { title: "Production-Proven Systems", sub: "50+ systems in continuous production operation" },
  { title: "Stable Web Handling", sub: "±0.3N tension variation under continuous runs" },
  { title: "Fast Field Support", sub: "Direct-access mechanical structure for faster troubleshooting and maintenance." },
  { title: "Repeat Orders from Existing Customers", sub: "Majority of orders from returning production accounts" },
]

const kpis = [
  { icon: Globe, top: "GLOBAL EXPERIENCE", value: "50+", sub: "Installed Systems" },
  { icon: Users, top: "ENGINEERING", value: "Since 2010", sub: "Experience" },
  { icon: Settings, top: "SYSTEMS", value: "5+", sub: "Countries" },
  { icon: ShieldCheck, top: "PRODUCTION LINES", value: "Across Asia", sub: "Active Today" },
]

const cards = [
  {
    tag: "LAMINATOR",
    title: "High Precision Laminating",
    desc: "Stable process with advanced tension control and alignment technology.",
    image: "/images/laminator_card.png",
    href: "/products",
  },
  {
    tag: "EXPOSURE",
    title: "Advanced Exposure",
    desc: "High accuracy alignment and uniform exposure for fine patterns.",
    image: "/images/exposure_card.png",
    href: "/products",
  },
  {
    tag: "LINE INTEGRATION",
    title: "Full Line Integration",
    desc: "Unwinder to rewinder — complete process line supply and integration.",
    image: "/images/automation_card.png",
    href: "/engineering",
  },
]

interface EquipmentCardsProps {
  lang: Language
}

export function EquipmentCards({ lang: _lang }: EquipmentCardsProps) {
  return (
    <section className="relative bg-[#0A0A0A]">
      {/* ── Product cards — square, full-image (no crop) ──────── */}
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-14 lg:px-8 lg:pt-12 lg:pb-16">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {cards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              className="group flex flex-col"
            >
              {/* Square image area — object-contain so image is never cropped */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#0A0A0A]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 32vw, 90vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{
                    objectPosition: "center",
                    filter: "saturate(0.75) brightness(1.15) contrast(1.05)",
                  }}
                />
              </div>
              <div className="mt-5 min-w-0">
                <p
                  className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: "#C7A86D" }}
                >
                  {card.tag}
                </p>
                <h3 className="mb-2 text-base lg:text-lg font-semibold text-white leading-snug">
                  {card.title}
                </h3>
                <p className="mb-3 text-xs lg:text-[13px] leading-relaxed text-slate-400">
                  {card.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all"
                  style={{ color: "#C7A86D" }}
                >
                  VIEW MORE
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Why PRT — merged from former 3rd section ─────────── */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              Why PRT
            </p>
          </div>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-800">
            {whyPoints.map((point, idx) => (
              <div
                key={idx}
                className="border-r border-b border-slate-800 bg-slate-950/30 px-6 py-7 flex items-start gap-3"
              >
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 flex-shrink-0"
                  style={{ color: "#C7A86D" }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-200 leading-snug mb-1.5">
                    {point.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {point.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Installed Base KPI bar ───────────────────────────── */}
      <div className="relative border-t border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((kpi, idx) => {
              const Icon = kpi.icon
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-5 py-10 px-6 ${
                    idx > 0 ? "lg:border-l border-slate-800/80" : ""
                  } ${idx === 2 ? "lg:border-l border-slate-800/80" : ""} ${
                    idx === 1 || idx === 3 ? "sm:border-l border-slate-800/80 lg:border-l" : ""
                  }`}
                >
                  <Icon
                    className="h-12 w-12 flex-shrink-0"
                    style={{ color: "#C7A86D" }}
                    strokeWidth={1.2}
                  />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 mb-1.5">
                      {kpi.top}
                    </p>
                    <p
                      className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight"
                      style={{ color: "#C7A86D" }}
                    >
                      {kpi.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      {kpi.sub}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
