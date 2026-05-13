"use client"

import { Calendar, Tag, ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    label: "최신 소식",
    viewAll: "전체 뉴스 보기",
    items: [
      {
        type: "전시회",
        date: "2026년 10월",
        title: "산업 전시회 출전 예정",
        status: "예정",
      },
      {
        type: "납품",
        date: "2026년",
        title: "롤투롤 노광 시스템 출하 예정",
        status: "예정",
      },
    ],
  },
  en: {
    label: "Latest News",
    viewAll: "View All News",
    items: [
      {
        type: "Exhibition",
        date: "October 2026",
        title: "Upcoming Industry Exhibition",
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
    label: "最新动态",
    viewAll: "查看全部新闻",
    items: [
      {
        type: "展会",
        date: "2026年10月",
        title: "即将参加行业展会",
        status: "即将举行",
      },
      {
        type: "出货",
        date: "2026年",
        title: "卷对卷曝光系统交付",
        status: "计划中",
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
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
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
                  style={{ color: "#C7A86D" }}
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
