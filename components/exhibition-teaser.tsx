"use client"

import { Calendar, MapPin, Hash, ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    label: "Upcoming Exhibition",
    headline: "Meet PRT at Upcoming Industry Exhibitions",
    body: "Discuss Roll-to-Roll Laminator and Exposure System solutions with our engineering team.",
    fields: { event: "Event", date: "Date", location: "Location", booth: "Booth No." },
    ctaPrimary: "Book a Meeting",
    ctaSecondary: "Contact Sales",
    viewAll: "View All Exhibitions",
  },
  en: {
    label: "Upcoming Exhibition",
    headline: "Meet PRT at Upcoming Industry Exhibitions",
    body: "Discuss Roll-to-Roll Laminator and Exposure System solutions with our engineering team.",
    fields: { event: "Event", date: "Date", location: "Location", booth: "Booth No." },
    ctaPrimary: "Book a Meeting",
    ctaSecondary: "Contact Sales",
    viewAll: "View All Exhibitions",
  },
  zh: {
    label: "Upcoming Exhibition",
    headline: "Meet PRT at Upcoming Industry Exhibitions",
    body: "Discuss Roll-to-Roll Laminator and Exposure System solutions with our engineering team.",
    fields: { event: "Event", date: "Date", location: "Location", booth: "Booth No." },
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
    <section className="relative bg-[#0A0D14] border-t border-slate-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            {t.label}
          </p>
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl mb-4 leading-tight">
          {t.headline}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-10 max-w-2xl">
          {t.body}
        </p>

        {/* Exhibition card */}
        <div className="relative overflow-hidden rounded-lg border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-950/80">
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(199,168,109,0.6), transparent)",
            }}
          />

          <div className="grid lg:grid-cols-[1.5fr_1fr]">
            <div className="p-7 lg:p-9">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 mb-2">
                    {t.fields.event}
                  </p>
                  <p className="text-xl font-bold text-white">{exhibition.eventName}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2 border-t border-slate-800">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Calendar className="h-3 w-3" style={{ color: "#C7A86D" }} />
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {t.fields.date}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-200">{exhibition.date}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <MapPin className="h-3 w-3" style={{ color: "#C7A86D" }} />
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {t.fields.location}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-200">{exhibition.location}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Hash className="h-3 w-3" style={{ color: "#C7A86D" }} />
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {t.fields.booth}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-200">{exhibition.booth}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-3">
                  <a
                    href="/contact?subject=Exhibition+Meeting"
                    className="group inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:shadow-lg hover:shadow-[#C7A86D]/20"
                    style={{ backgroundColor: "#C7A86D" }}
                  >
                    {t.ctaPrimary}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-sm border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
                  >
                    {t.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>

            {/* Right visual panel */}
            <div className="relative bg-gradient-to-br from-[#0B1220] to-[#060912] min-h-[200px] lg:min-h-full overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(199,168,109,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,168,109,0.04) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div
                className="absolute top-4 left-4 h-3 w-3 border-l border-t"
                style={{ borderColor: "rgba(199,168,109,0.3)" }}
              />
              <div
                className="absolute top-4 right-4 h-3 w-3 border-r border-t"
                style={{ borderColor: "rgba(199,168,109,0.3)" }}
              />
              <div
                className="absolute bottom-4 left-4 h-3 w-3 border-l border-b"
                style={{ borderColor: "rgba(199,168,109,0.3)" }}
              />
              <div
                className="absolute bottom-4 right-4 h-3 w-3 border-r border-b"
                style={{ borderColor: "rgba(199,168,109,0.3)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-4xl font-bold tracking-tight opacity-20"
                  style={{ color: "#C7A86D" }}
                >
                  PRT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/exhibitions"
            className="inline-flex items-center gap-2 text-xs text-slate-400 border-b border-slate-700 pb-1 hover:text-slate-200 hover:border-slate-500 transition-all"
          >
            {t.viewAll} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
