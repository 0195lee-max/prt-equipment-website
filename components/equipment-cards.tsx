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
    <section className="relative bg-[#07090F]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <a key={idx} href={card.href} className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0F1A]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="pt-6">
                <p
                  className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: "#C7A86D" }}
                >
                  {card.tag}
                </p>
                <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-white leading-snug">
                  {card.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  {card.desc}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all"
                  style={{ color: "#C7A86D" }}
                >
                  VIEW MORE
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
