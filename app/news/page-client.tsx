"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, ArrowRight, Tag } from "lucide-react"

type Language = "ko" | "en" | "zh"

type NewsType =
  | "Exhibition"
  | "Shipment"
  | "Installation"
  | "FAT"
  | "Repeat Order"
  | "Engineering"
  | "Expansion"

interface NewsItem {
  type: NewsType
  date: string
  title: string
  description: string
  status?: "Upcoming" | "Scheduled"
}

const translations = {
  ko: {
    meta: "News",
    title: "News & Updates",
    headline: "PRT Engineering, Production & Field Activities",
    description:
      "Equipment deliveries, engineering activities, production support, and industry participation.",
    ctaPrimary: "Contact Sales",
    ctaSecondary: "Book a Meeting",
    latestLabel: "Latest Updates",
    emptyNote: "Additional updates will be published as production milestones occur.",
  },
  en: {
    meta: "News",
    title: "News & Updates",
    headline: "PRT Engineering, Production & Field Activities",
    description:
      "Equipment deliveries, engineering activities, production support, and industry participation.",
    ctaPrimary: "Contact Sales",
    ctaSecondary: "Book a Meeting",
    latestLabel: "Latest Updates",
    emptyNote: "Additional updates will be published as production milestones occur.",
  },
  zh: {
    meta: "News",
    title: "News & Updates",
    headline: "PRT Engineering, Production & Field Activities",
    description:
      "Equipment deliveries, engineering activities, production support, and industry participation.",
    ctaPrimary: "Contact Sales",
    ctaSecondary: "Book a Meeting",
    latestLabel: "Latest Updates",
    emptyNote: "Additional updates will be published as production milestones occur.",
  },
}

// Minimal placeholder set — replace with real entries as they occur.
const newsItems: NewsItem[] = [
  {
    type: "Exhibition",
    date: "October 2026",
    title: "Upcoming Industry Exhibition",
    description:
      "PRT engineering team participation. Event and booth details to be announced.",
    status: "Upcoming",
  },
  {
    type: "Shipment",
    date: "2026",
    title: "Equipment Delivery — Roll-to-Roll Exposure System",
    description:
      "Scheduled delivery of Roll-to-Roll Exposure System to an Asia production line.",
    status: "Scheduled",
  },
]

function NewsImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-[#0A0F1A] border-b border-slate-800/60">
      {/* Image swap target: <Image src="/images/news/{slug}.jpg" alt="" fill className="object-cover" /> */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
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
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-600">
          {label}
        </span>
      </div>
    </div>
  )
}

export default function NewsPage() {
  const [lang, setLang] = useState<Language>("en")
  const t = translations[lang]

  return (
    <main className="min-h-screen bg-[#07090F]">
      <Navbar lang={lang} setLang={setLang} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center bg-[#07090F] border-b border-slate-800/60">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.meta}
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] mb-4">
            {t.title}
          </h1>
          <p
            className="text-xl font-light leading-relaxed mb-6 sm:text-2xl max-w-3xl"
            style={{ color: "#C7A86D" }}
          >
            {t.headline}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 mb-10">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-[#B89757]"
              style={{ backgroundColor: "#C7A86D" }}
            >
              {t.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/contact?subject=Meeting+Request"
              className="inline-flex items-center gap-2 border border-slate-600 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ── News Grid ────────────────────────────────────── */}
      <section className="relative bg-[#07090F] py-20">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.latestLabel}
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 border-t border-l border-slate-800">
            {newsItems.map((item, idx) => (
              <article
                key={idx}
                className="group relative border-r border-b border-slate-800 bg-slate-950/50 transition-colors hover:bg-slate-950/80"
              >
                <NewsImagePlaceholder label={item.type} />

                <div className="p-6 lg:p-7">
                  {/* Type + Date */}
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
                    {item.status && (
                      <>
                        <span className="h-3 w-px bg-slate-700" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                          {item.status}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-xs text-slate-600 italic">{t.emptyNote}</p>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  )
}
