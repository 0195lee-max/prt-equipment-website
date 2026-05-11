"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Hash, ArrowRight } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    meta: "Exhibitions",
    title: "Meet PRT at Upcoming\nIndustry Exhibitions",
    description:
      "Discuss Roll-to-Roll Laminator and Exposure System solutions with our engineering team.",
    upcomingLabel: "Upcoming Exhibition",
    pastLabel: "Past Exhibitions",
    pastEmpty: "Past exhibition records will be listed here.",
    fields: {
      event: "Event",
      date: "Date",
      location: "Location",
      booth: "Booth No.",
    },
    placeholder: "TBD",
    ctaPrimary: "Book a Meeting",
    ctaSecondary: "Contact Sales",
    notesLabel: "What to Expect at Our Booth",
    notes: [
      "Live discussion with PRT engineering team",
      "Equipment specifications & line integration consultation",
      "Reference site introductions (NDA basis)",
      "Custom RFQ intake for production lines",
    ],
  },
  en: {
    meta: "Exhibitions",
    title: "Meet PRT at Upcoming\nIndustry Exhibitions",
    description:
      "Discuss Roll-to-Roll Laminator and Exposure System solutions with our engineering team.",
    upcomingLabel: "Upcoming Exhibition",
    pastLabel: "Past Exhibitions",
    pastEmpty: "Past exhibition records will be listed here.",
    fields: {
      event: "Event",
      date: "Date",
      location: "Location",
      booth: "Booth No.",
    },
    placeholder: "TBD",
    ctaPrimary: "Book a Meeting",
    ctaSecondary: "Contact Sales",
    notesLabel: "What to Expect at Our Booth",
    notes: [
      "Live discussion with PRT engineering team",
      "Equipment specifications & line integration consultation",
      "Reference site introductions (NDA basis)",
      "Custom RFQ intake for production lines",
    ],
  },
  zh: {
    meta: "Exhibitions",
    title: "Meet PRT at Upcoming\nIndustry Exhibitions",
    description:
      "Discuss Roll-to-Roll Laminator and Exposure System solutions with our engineering team.",
    upcomingLabel: "Upcoming Exhibition",
    pastLabel: "Past Exhibitions",
    pastEmpty: "Past exhibition records will be listed here.",
    fields: {
      event: "Event",
      date: "Date",
      location: "Location",
      booth: "Booth No.",
    },
    placeholder: "TBD",
    ctaPrimary: "Book a Meeting",
    ctaSecondary: "Contact Sales",
    notesLabel: "What to Expect at Our Booth",
    notes: [
      "Live discussion with PRT engineering team",
      "Equipment specifications & line integration consultation",
      "Reference site introductions (NDA basis)",
      "Custom RFQ intake for production lines",
    ],
  },
}

// Upcoming exhibition data — replace fields when confirmed
const upcomingExhibition = {
  eventName: "TBD",
  date: "October 2026",
  location: "TBD",
  booth: "TBD",
}

export default function ExhibitionsPage() {
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] whitespace-pre-line mb-6">
            {t.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            {t.description}
          </p>
        </div>
      </section>

      {/* ── Upcoming Exhibition Card ─────────────────────── */}
      <section className="relative bg-[#07090F] py-20">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.upcomingLabel}
            </p>
          </div>

          <div className="relative border border-slate-800 bg-slate-950/50">
            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              {/* Left: Event details */}
              <div className="p-8 lg:p-10 lg:border-r border-slate-800">
                <div className="space-y-7">
                  {/* Event name */}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 mb-2">
                      {t.fields.event}
                    </p>
                    <p className="text-2xl font-bold text-white">
                      {upcomingExhibition.eventName}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-slate-800">
                    {/* Date */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar
                          className="h-3.5 w-3.5"
                          style={{ color: "#C7A86D" }}
                        />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                          {t.fields.date}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-slate-200">
                        {upcomingExhibition.date}
                      </p>
                    </div>

                    {/* Location */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin
                          className="h-3.5 w-3.5"
                          style={{ color: "#C7A86D" }}
                        />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                          {t.fields.location}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-slate-200">
                        {upcomingExhibition.location}
                      </p>
                    </div>

                    {/* Booth */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Hash
                          className="h-3.5 w-3.5"
                          style={{ color: "#C7A86D" }}
                        />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                          {t.fields.booth}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-slate-200">
                        {upcomingExhibition.booth}
                      </p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-5 border-t border-slate-800">
                    <a
                      href="/contact?subject=Exhibition+Meeting"
                      className="group inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-[#B89757]"
                      style={{ backgroundColor: "#C7A86D" }}
                    >
                      {t.ctaPrimary}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-slate-600 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
                    >
                      {t.ctaSecondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Image-ready neutral panel */}
              <div className="relative bg-[#0A0F1A] min-h-[280px] lg:min-h-full overflow-hidden border-t lg:border-t-0 border-slate-800">
                {/* Replace this block with: <Image src="/images/exhibitions/booth.jpg" alt="" fill className="object-cover" /> */}
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
                  <span className="text-4xl font-bold tracking-tight text-slate-700">
                    PRT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Expect ───────────────────────────────── */}
      <section className="relative bg-[#0A0F1A] py-20 border-t border-slate-800/60">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.notesLabel}
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 border-t border-l border-slate-800">
            {t.notes.map((note, idx) => (
              <div
                key={idx}
                className="border-r border-b border-slate-800 bg-slate-950/30 p-6"
              >
                <p className="text-sm text-slate-300 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Exhibitions placeholder ─────────────────── */}
      <section className="relative bg-[#07090F] py-20 border-t border-slate-800/60">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#C7A86D" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.pastLabel}
            </p>
          </div>
          <p className="text-sm text-slate-600 italic">{t.pastEmpty}</p>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  )
}
