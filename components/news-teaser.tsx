"use client"

import { Calendar, Tag, ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    label: "Latest News",
    viewAll: "View All News",
    items: [
      {
        type: "Exhibition",
        date: "October 27–29, 2026",
        title: "CPCA Show Plus 2026",
        status: "Upcoming",
      },
      {
        type: "Shipment",
        date: "2026년",
        title: "Roll-to-Roll Exposure 시스템 출하 예정",
        status: "Scheduled",
      },
    ],
  },
  en: {
    label: "Latest News",
    viewAll: "View All News",
    items: [
      {
        type: "Exhibition",
        date: "October 27–29, 2026",
        title: "CPCA Show Plus 2026",
        status: "Upcoming",
      },
      {
        type: "Shipment",
        date: "2026",
        title: "Roll-to-Roll Exposure System Delivery",
        status: "Scheduled",
      },
    ],
  },
  zh: {
    label: "Latest News",
    viewAll: "View All News",
    items: [
      {
        type: "Exhibition",
        date: "October 27–29, 2026",
        title: "CPCA Show Plus 2026",
        status: "Upcoming",
      },
      {
        type: "Shipment",
        date: "2026年",
        title: "Roll-to-Roll Exposure 系统交付",
        status: "Scheduled",
      },
    ],
  },
}

interface NewsTeaserProps {
  lang: Language
}

export function NewsTeaser({ lang }: NewsTeaserProps) {
  const t = translations[lang]

  return (
    <section className="relative bg-[#07090F] border-t border-slate-800/60">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.label}
            </p>
          </div>
          <a
            href="/news"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 border-b border-slate-700 pb-1 hover:text-slate-200 hover:border-slate-500 transition-all"
          >
            {t.viewAll} <ArrowRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Compact news list — minimal placeholder */}
        <div className="grid gap-0 sm:grid-cols-2 border-t border-l border-slate-800">
          {t.items.map((item, idx) => (
            <a
              key={idx}
              href="/news"
              className="group relative overflow-hidden border-r border-b border-slate-800 bg-slate-950/40 p-6 transition-colors hover:bg-slate-900/70"
            >
              {/* quiet blue top accent that draws in on hover — subtle connection
                  cue toward "View All News", no glow */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                style={{ backgroundColor: "rgba(25,118,210,0.6)" }}
              />
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#1976D2" }}
                >
                  <Tag className="h-3 w-3" />
                  {item.type}
                </span>
                <span className="h-3 w-px bg-slate-700" />
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </span>
              </div>
              <p className="mb-2 text-base font-semibold leading-snug text-white">
                {item.title}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {item.status}
                </p>
                <ArrowRight className="h-3.5 w-3.5 text-slate-600 transition-all duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-[#1976D2]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
