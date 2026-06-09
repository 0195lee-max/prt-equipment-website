"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsCardVisual } from "@/components/news-card-visual"
import { Calendar, ArrowRight, Tag, X } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

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
  image?: string
  imageKind?: "logo" | "photo"
}

// Shipment card content is identical across locales (kept English).
const SHIPMENT_ITEM: NewsItem = {
  type: "Shipment",
  date: "2026",
  title: "Equipment Delivery — Roll-to-Roll Exposure System",
  description:
    "Scheduled delivery of Roll-to-Roll Exposure System to an Asia production line.",
  status: "Scheduled",
  image: "/images/news_shipment_delivery_blue_wrapped.jpg",
  imageKind: "photo",
}

// Exhibition card — type/date/title/status English in every locale;
// only the body copy is localized.
const EXHIBITION_BASE = {
  type: "Exhibition" as NewsType,
  date: "October 27–29, 2026",
  title: "CPCA Show Plus 2026",
  status: "Upcoming" as const,
  image: "/images/cpca_show_plus_logo.jpg",
  imageKind: "logo" as const,
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
    newsItems: [
      {
        ...EXHIBITION_BASE,
        description:
          "PRT는 2026년 10월 27일부터 29일까지 열리는 CPCA Show Plus 2026 전시회에 참가할 예정입니다. 부스 정보 및 미팅 관련 세부 내용은 추후 공지됩니다.",
      },
      SHIPMENT_ITEM,
    ] as NewsItem[],
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
    newsItems: [
      {
        ...EXHIBITION_BASE,
        description:
          "PRT will participate in CPCA Show Plus 2026, held from October 27 to 29, 2026. Booth details and meeting information will be announced.",
      },
      SHIPMENT_ITEM,
    ] as NewsItem[],
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
    newsItems: [
      {
        ...EXHIBITION_BASE,
        description:
          "PRT 将参加于 2026 年 10 月 27 日至 29 日举办的 CPCA Show Plus 2026 展会。展位信息及会议安排将另行公布。",
      },
      SHIPMENT_ITEM,
    ] as NewsItem[],
  },
}

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
        style={{ borderColor: "rgba(25,118,210,0.4)" }}
      />
      <div
        className="absolute top-3 right-3 h-2 w-2 border-r border-t"
        style={{ borderColor: "rgba(25,118,210,0.4)" }}
      />
      <div
        className="absolute bottom-3 left-3 h-2 w-2 border-l border-b"
        style={{ borderColor: "rgba(25,118,210,0.4)" }}
      />
      <div
        className="absolute bottom-3 right-3 h-2 w-2 border-r border-b"
        style={{ borderColor: "rgba(25,118,210,0.4)" }}
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
  const [lang, setLang] = useLanguage()
  const t = translations[lang]
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [lightbox])

  return (
    <main className="min-h-svh bg-[#07090F]">
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
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.meta}
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] mb-4">
            {t.title}
          </h1>
          <p
            className="text-xl font-light leading-relaxed mb-6 sm:text-2xl max-w-3xl"
            style={{ color: "#1976D2" }}
          >
            {t.headline}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 mb-10">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-[#0D47A1]"
              style={{ backgroundColor: "#1976D2" }}
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
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.latestLabel}
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 border-t border-l border-slate-800">
            {t.newsItems.map((item, idx) => (
              <article
                key={idx}
                className="group relative border-r border-b border-slate-800 bg-slate-950/50 transition-colors hover:bg-slate-950/80"
              >
                {item.image && item.imageKind === "photo" ? (
                  <button
                    type="button"
                    onClick={() => setLightbox({ src: item.image!, alt: item.title })}
                    aria-label="Enlarge image"
                    className="block w-full cursor-zoom-in"
                  >
                    <NewsCardVisual src={item.image} alt={item.title} kind="photo" />
                  </button>
                ) : item.image && item.imageKind === "logo" ? (
                  <NewsCardVisual src={item.image} alt={item.title} kind="logo" />
                ) : (
                  <NewsImagePlaceholder label={item.type} />
                )}

                <div className="p-6 lg:p-7">
                  {/* Type + Date */}
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

      {/* ── Image lightbox (shipment photo) ──────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/30 text-white/80 transition-colors hover:border-white/70 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] border border-white/10 object-contain"
          />
        </div>
      )}
    </main>
  )
}
