"use client"

import { useState, useEffect, type CSSProperties } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsCardVisual } from "@/components/news-card-visual"
import { Calendar, ArrowRight, Tag, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage, type Language } from "@/hooks/use-language"

// ── Data model ───────────────────────────────────────────────
// Categories are intentionally limited to what we actually have material
// for today. Adding a new category later is just a new union member + a
// label entry; adding a new story is one more object in each locale's
// `newsItems`. Multiple photos per story go in `images[]` and the modal
// gallery lights up automatically (thumbnails + prev/next).
type Category = "exhibition" | "shipment"
type NewsStatus = "Upcoming" | "Scheduled"

interface NewsBase {
  id: string
  category: Category
  date: string
  status?: NewsStatus
  images: string[]
  imageAlt: string
  imageKind: "logo" | "photo"
}

interface NewsItem extends NewsBase {
  title: string
  summary: string
}

// Locale-independent fields shared by every locale (only title/summary are
// localized). Titles stay English as they are product / proper names.
const EXHIBITION_BASE: NewsBase = {
  id: "cpca-show-plus-2026",
  category: "exhibition",
  date: "October 27–29, 2026",
  status: "Upcoming",
  images: ["/images/cpca_show_plus_logo.jpg"],
  imageAlt: "CPCA Show Plus 2026",
  imageKind: "logo",
}

const SHIPMENT_BASE: NewsBase = {
  id: "rtr-exposure-shipment-2026",
  category: "shipment",
  date: "2026",
  status: "Scheduled",
  images: ["/images/news_shipment_delivery_blue_wrapped.jpg"],
  imageAlt: "Equipment Delivery — Roll-to-Roll Exposure System",
  imageKind: "photo",
}

// Localized display labels for the category + status pills. Section/proper
// nouns stay English in en/zh; ko gets native labels.
const CATEGORY_LABELS: Record<Language, Record<Category, string>> = {
  ko: { exhibition: "전시", shipment: "출하" },
  en: { exhibition: "Exhibition", shipment: "Shipment" },
  zh: { exhibition: "Exhibition", shipment: "Shipment" },
}
const STATUS_LABELS: Record<Language, Record<NewsStatus, string>> = {
  ko: { Upcoming: "예정", Scheduled: "예정" },
  en: { Upcoming: "Upcoming", Scheduled: "Scheduled" },
  zh: { Upcoming: "Upcoming", Scheduled: "Scheduled" },
}

const translations = {
  ko: {
    meta: "News",
    title: "News & Updates",
    headline: "PRT 엔지니어링, 생산 현장 및 출하 소식",
    description:
      "장비 출하, 엔지니어링 활동, 생산 지원 및 산업 전시 소식을 전합니다.",
    ctaPrimary: "Contact Sales",
    ctaSecondary: "Book a Meeting",
    latestLabel: "Latest Updates",
    viewLabel: "자세히 보기",
    closeLabel: "닫기",
    emptyNote: "추가 소식은 생산 및 출하 일정에 따라 업데이트됩니다.",
    newsItems: [
      {
        ...EXHIBITION_BASE,
        title: "CPCA Show Plus 2026",
        summary:
          "PRT는 2026년 10월 27일부터 29일까지 열리는 CPCA Show Plus 2026 전시회에 참가할 예정입니다. 부스 정보 및 미팅 관련 세부 내용은 추후 공지됩니다.",
      },
      {
        ...SHIPMENT_BASE,
        title: "Equipment Delivery — Roll-to-Roll Exposure System",
        summary:
          "아시아 양산 라인으로 납품 예정인 Roll-to-Roll Exposure System 출하 소식입니다.",
      },
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
    viewLabel: "View",
    closeLabel: "Close",
    emptyNote: "Additional updates will be published as production milestones occur.",
    newsItems: [
      {
        ...EXHIBITION_BASE,
        title: "CPCA Show Plus 2026",
        summary:
          "PRT will participate in CPCA Show Plus 2026, held from October 27 to 29, 2026. Booth details and meeting information will be announced.",
      },
      {
        ...SHIPMENT_BASE,
        title: "Equipment Delivery — Roll-to-Roll Exposure System",
        summary:
          "Scheduled delivery of Roll-to-Roll Exposure System to an Asia production line.",
      },
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
    viewLabel: "查看",
    closeLabel: "关闭",
    emptyNote: "更多消息将随生产与出货进度陆续更新。",
    newsItems: [
      {
        ...EXHIBITION_BASE,
        title: "CPCA Show Plus 2026",
        summary:
          "PRT 将参加于 2026 年 10 月 27 日至 29 日举办的 CPCA Show Plus 2026 展会。展位信息及会议安排将另行公布。",
      },
      {
        ...SHIPMENT_BASE,
        title: "Equipment Delivery — Roll-to-Roll Exposure System",
        summary:
          "面向亚洲量产产线交付的 Roll-to-Roll Exposure System 出货信息。",
      },
    ] as NewsItem[],
  },
}

export default function NewsPage({ initialLang }: { initialLang?: Language }) {
  const [lang, setLang] = useLanguage(initialLang)
  const t = translations[lang]

  // Modal gallery state. `active` = the story being viewed; `imgIndex` = the
  // photo currently shown within that story's images[].
  const [active, setActive] = useState<NewsItem | null>(null)
  const [imgIndex, setImgIndex] = useState(0)

  const openNews = (item: NewsItem) => {
    setActive(item)
    setImgIndex(0)
  }

  useEffect(() => {
    if (!active) return
    const count = active.images.length
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
      else if (count > 1 && e.key === "ArrowLeft") setImgIndex((i) => (i - 1 + count) % count)
      else if (count > 1 && e.key === "ArrowRight") setImgIndex((i) => (i + 1) % count)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [active])

  const hasGallery = !!active && active.images.length > 1

  return (
    <main className="min-h-svh bg-[#07090F]">
      <Navbar lang={lang} setLang={setLang} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[40vh] items-center bg-[#07090F] border-b border-slate-800/60">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div data-reveal className="relative mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20 w-full">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.meta}
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] mb-4">
            {t.title}
          </h1>
          <p
            className="text-xl font-light leading-relaxed mb-4 sm:text-2xl max-w-3xl"
            style={{ color: "#1976D2" }}
          >
            {t.headline}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 mb-7">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 transition-colors hover:bg-[#0D47A1]"
              style={{ backgroundColor: "#1976D2" }}
            >
              {t.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </a>
            <a
              href="/contact?subject=Meeting+Request"
              className="inline-flex items-center gap-2 border border-slate-600 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-slate-300 hover:border-slate-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ── Latest Updates ───────────────────────────────── */}
      <section className="relative bg-[#07090F] py-14">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div data-reveal="label" className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#1976D2" }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.latestLabel}
            </p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 border-t border-l border-slate-800">
            {t.newsItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openNews(item)}
                data-reveal="ui"
                style={{ "--reveal-delay": `${idx * 90}ms` } as CSSProperties}
                className="group relative block w-full text-left border-r border-b border-slate-800 bg-slate-950/50 transition-colors hover:bg-slate-950/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1976D2]"
              >
                <NewsCardVisual src={item.images[0]} alt={item.imageAlt} kind={item.imageKind} />

                <div className="p-5 lg:p-6">
                  {/* Category + Date + Status */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "#1976D2" }}
                    >
                      <Tag className="h-3 w-3" />
                      {CATEGORY_LABELS[lang][item.category]}
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
                          {STATUS_LABELS[lang][item.status]}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.summary}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 transition-colors group-hover:text-[#1976D2]">
                    {t.viewLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>

          <p data-reveal className="mt-8 text-xs text-slate-600 italic">{t.emptyNote}</p>
        </div>
      </section>

      <Footer lang={lang} />

      {/* ── Modal gallery ────────────────────────────────── */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden border border-slate-700 bg-[#0A0F1A] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label={t.closeLabel}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border border-white/30 bg-black/40 text-white/80 backdrop-blur-sm transition-colors hover:border-white/70 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image stage — logos sit on white, photos on black; both object-contain (never cropped) */}
            <div
              className={`relative flex items-center justify-center ${
                active.imageKind === "logo" ? "bg-white p-8" : "bg-black"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.images[imgIndex]}
                alt={active.imageAlt}
                className="max-h-[50vh] w-full object-contain"
              />

              {hasGallery && (
                <>
                  <button
                    type="button"
                    onClick={() => setImgIndex((i) => (i - 1 + active.images.length) % active.images.length)}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/40 text-white/80 backdrop-blur-sm transition-colors hover:border-white/70 hover:text-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setImgIndex((i) => (i + 1) % active.images.length)}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/40 text-white/80 backdrop-blur-sm transition-colors hover:border-white/70 hover:text-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <span className="absolute bottom-3 right-3 bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white/80">
                    {imgIndex + 1} / {active.images.length}
                  </span>
                </>
              )}
            </div>

            {/* Thumbnails — only when there is more than one photo */}
            {hasGallery && (
              <div className="flex gap-2 overflow-x-auto border-t border-slate-800 bg-[#080B12] p-3">
                {active.images.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setImgIndex(i)}
                    aria-label={`Image ${i + 1}`}
                    className={`relative h-14 w-20 shrink-0 overflow-hidden border transition-opacity ${
                      i === imgIndex
                        ? "border-[#1976D2] opacity-100"
                        : "border-slate-700 opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="overflow-y-auto p-6 lg:p-7">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#1976D2" }}
                >
                  <Tag className="h-3 w-3" />
                  {CATEGORY_LABELS[lang][active.category]}
                </span>
                <span className="h-3 w-px bg-slate-700" />
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <Calendar className="h-3 w-3" />
                  {active.date}
                </span>
                {active.status && (
                  <>
                    <span className="h-3 w-px bg-slate-700" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {STATUS_LABELS[lang][active.status]}
                    </span>
                  </>
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                {active.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">{active.summary}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
