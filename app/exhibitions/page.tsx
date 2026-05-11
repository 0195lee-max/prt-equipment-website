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
    <main className="min-h-screen bg-[#0A0D14]">
      <Navbar lang={lang} setLang={setLang} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center bg-gradient-to-b from-[#060912] via-[#0B1220] to-[#0F1A2E]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
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
      <section className="relative bg-[#0A0D14] py-20">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            {t.upcomingLabel}
          </p>

          <div className="relative overflow-hidden rounded-lg border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-950/80">
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(199,168,109,0.6), transparent)",
              }}
            />

            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              {/* Left: Event details */}
              <div className="p-8 lg:p-10">
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
                  <div className="flex flex-wrap gap-3 pt-4">
                    <a
                      href="/contact?subject=Exhibition+Meeting"
                      className="group inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:shadow-lg hover:shadow-[#C7A86D]/20"
                      style={{ backgroundColor: "#C7A86D" }}
                    >
                      {t.ctaPrimary}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-sm border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
                    >
                      {t.ctaSecondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Image-ready neutral panel */}
              <div className="relative bg-gradient-to-br from-[#0B1220] to-[#060912] min-h-[280px] lg:min-h-full overflow-hidden">
                {/* Replace this block with: <Image src="/images/exhibitions/booth.jpg" alt="" fill className="object-cover" /> */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(199,168,109,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(199,168,109,0.04) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                {/* Corner brackets */}
                <div
                  className="absolute top-5 left-5 h-4 w-4 border-l border-t"
                  style={{ borderColor: "rgba(199,168,109,0.3)" }}
                />
                <div
                  className="absolute top-5 right-5 h-4 w-4 border-r border-t"
                  style={{ borderColor: "rgba(199,168,109,0.3)" }}
                />
                <div
                  className="absolute bottom-5 left-5 h-4 w-4 border-l border-b"
                  style={{ borderColor: "rgba(199,168,109,0.3)" }}
                />
                <div
                  className="absolute bottom-5 right-5 h-4 w-4 border-r border-b"
                  style={{ borderColor: "rgba(199,168,109,0.3)" }}
                />
                {/* Center monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-5xl font-bold tracking-tight opacity-25"
                    style={{ color: "#C7A86D" }}
                  >
                    PRT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Expect ───────────────────────────────── */}
      <section className="relative bg-slate-950 py-20">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            {t.notesLabel}
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {t.notes.map((note, idx) => (
              <div
                key={idx}
                className="flex gap-4 border-l-2 pl-5 py-1"
                style={{ borderColor: "rgba(199,168,109,0.3)" }}
              >
                <p className="text-sm text-slate-300 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Exhibitions placeholder ─────────────────── */}
      <section className="relative bg-[#0A0D14] py-20 border-t border-slate-900">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            {t.pastLabel}
          </p>
          <p className="text-sm text-slate-600 italic">{t.pastEmpty}</p>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  )
}
