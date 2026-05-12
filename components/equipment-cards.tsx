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
    <section className="relative bg-[#0A0A0A] snap-start">
      {/* Full-bleed — no max-width, no horizontal padding */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {cards.map((card, idx) => (
          <a key={idx} href={card.href} className="group flex flex-col">
            {/* Square image, no border, blends to page bg */}
            <div className="relative aspect-square w-full overflow-hidden bg-[#0A0A0A]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  objectPosition: "center",
                  filter: "saturate(0.75) brightness(1.15) contrast(1.05)",
                }}
              />
            </div>
            {/* Text below image */}
            <div className="px-6 py-7 lg:px-10 lg:py-9">
              <p
                className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em]"
                style={{ color: "#C7A86D" }}
              >
                {card.tag}
              </p>
              <h3 className="mb-3 text-xl lg:text-2xl font-semibold text-white leading-snug">
                {card.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-400">
                {card.desc}
              </p>
              <span
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] transition-all"
                style={{ color: "#C7A86D" }}
              >
                VIEW MORE
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
