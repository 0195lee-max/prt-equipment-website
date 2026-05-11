"use client"

import { Calendar, MapPin, Hash, ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    label: "Upcoming Exhibition",
    headline: "Meet PRT Engineering Team in Person.",
    body: "Discuss Roll-to-Roll Laminator and Exposure System integration on your production line.",
    fields: { event: "Event", date: "Date", location: "Location", booth: "Booth" },
    ctaPrimary: "Book a Meeting",
    ctaSecondary: "Contact Sales",
    viewAll: "View All Exhibitions",
  },
  en: {
    label: "Upcoming Exhibition",
    headline: "Meet PRT Engineering Team in Person.",
    body: "Discuss Roll-to-Roll Laminator and Exposure System integration on your production line.",
    fields: { event: "Event", date: "Date", location: "Location", booth: "Booth" },
    ctaPrimary: "Book a Meeting",
    ctaSecondary: "Contact Sales",
    viewAll: "View All Exhibitions",
  },
  zh: {
    label: "Upcoming Exhibition",
    headline: "Meet PRT Engineering Team in Person.",
    body: "Discuss Roll-to-Roll Laminator and Exposure System integration on your production line.",
    fields: { event: "Event", date: "Date", location: "Location", booth: "Booth" },
    ctaPrimary: "Book a Meeting",
    ctaSecondary: "Contact Sales",
    viewAll: "View All Exhibitions",
  },
}

const exhibition = {
  eventName: "TBD",
  date: "October 2026",
  location: "TBD",
  booth: "TBD",
}

interface ExhibitionTeaserProps {
  lang: Language
}

export function ExhibitionTeaser({ lang }: ExhibitionTeaserProps) {
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

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            {t.label}
          </p>
        </div>
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4 leading-tight tracking-tight max-w-2xl">
          {t.headline}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-12 max-w-2xl">
          {t.body}
        </p>

        {/* Exhibition card — structural */}
        <div className="relative border border-slate-800 bg-slate-950/50">
          <div className="grid lg:grid-cols-[1.5fr_1fr]">
            <div className="p-8 lg:p-10 lg:border-r border-slate-800">
              <div className="space-y-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 mb-2">
                    {t.fields.event}
                  </p>
                  <p className="text-2xl font-bold text-white tracking-tight">
                    {exhibition.eventName}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-slate-800">
                  <div className="py-5 sm:pr-6 sm:border-r border-slate-800">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Calendar className="h-3 w-3" style={{ color: "#C7A86D" }} />
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {t.fields.date}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-200">{exhibition.date}</p>
                  </div>

                  <div className="py-5 sm:px-6 sm:border-r border-slate-800">
                    <div className="flex items-center gap-1.5 mb-2">
                      <MapPin className="h-3 w-3" style={{ color: "#C7A86D" }} />
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {t.fields.location}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-200">{exhibition.location}</p>
                  </div>

                  <div className="py-5 sm:pl-6">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Hash className="h-3 w-3" style={{ color: "#C7A86D" }} />
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {t.fields.booth}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-200">{exhibition.booth}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-800">
                  <a
                    href="/contact?subject=Exhibition+Meeting"
                    className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-[#B89757]"
                    style={{ backgroundColor: "#C7A86D" }}
                  >
                    {t.ctaPrimary}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-slate-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
                  >
                    {t.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>

            {/* Right neutral panel */}
            <div className="relative bg-[#0A0F1A] min-h-[220px] lg:min-h-full overflow-hidden border-t lg:border-t-0 border-slate-800">
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
                className="absolute top-4 left-4 h-2 w-2 border-l border-t"
                style={{ borderColor: "rgba(199,168,109,0.4)" }}
              />
              <div
                className="absolute top-4 right-4 h-2 w-2 border-r border-t"
                style={{ borderColor: "rgba(199,168,109,0.4)" }}
              />
              <div
                className="absolute bottom-4 left-4 h-2 w-2 border-l border-b"
                style={{ borderColor: "rgba(199,168,109,0.4)" }}
              />
              <div
                className="absolute bottom-4 right-4 h-2 w-2 border-r border-b"
                style={{ borderColor: "rgba(199,168,109,0.4)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold tracking-tight text-slate-700">
                  PRT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/exhibitions"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 border-b border-slate-700 pb-1 hover:text-slate-200 hover:border-slate-500 transition-all"
          >
            {t.viewAll} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
