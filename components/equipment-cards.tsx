"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

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
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-4 lg:px-8 lg:pt-12 lg:pb-6">
        <div className="grid gap-6 md:gap-6 md:grid-cols-3 md:items-start">
          {cards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              className="group flex flex-col"
            >
              {/* Image area — full-width on top, taller, no crop */}
              <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden bg-[#0A0A0A] mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 32vw, 90vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    objectPosition: "center",
                    filter: "saturate(0.75) brightness(1.15) contrast(1.05)",
                  }}
                />
              </div>
              <div className="min-w-0">
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
    </section>
  )
}
