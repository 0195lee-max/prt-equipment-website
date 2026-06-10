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

      <div data-reveal className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.label}
            </p>
          </div>
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 border-b border-slate-700 pb-1 hover:text-slate-200 hover:border-slate-500 transition-all"
          >
            {t.viewAll} <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        {/* Compact news list — minimal placeholder */}
        <div className="grid gap-0 sm:grid-cols-2 border-t border-l border-slate-800">
          {t.items.map((item, idx) => (
            <a
              key={idx}
              href="/news"
              className="group relative border-r border-b border-slate-800 bg-slate-950/40 p-6 transition-colors hover:bg-slate-950/80"
            >
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
              <p className="text-base font-semibold text-white mb-1.5 leading-snug">
                {item.title}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.status}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
