"use client"

import { MapPin, Phone, Mail } from "lucide-react"

type Language = "ko" | "en" | "zh"

interface FooterProps {
  lang?: Language
}

const translations = {
  ko: {
    companyHeader: "Company",
    sitemapHeader: "Sitemap",
    focusHeader: "Business Focus",
    address: "대한민국 경기도 안양시",
    phone: "+82-31-469-1103",
    email: "sales@prt-kr.com",
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      news: "News",
      contact: "Contact",
    },
    focus: [
      "Roll-to-Roll Technology",
      "Leadframe & Semiconductor Packaging",
      "Production-Proven Systems",
    ],
    rights: "© 2026 PRT Co., Ltd. All rights reserved.",
    tagline: "Roll-to-Roll Technology",
  },
  en: {
    companyHeader: "Company",
    sitemapHeader: "Sitemap",
    focusHeader: "Business Focus",
    address: "Anyang-si, Gyeonggi-do, Republic of Korea",
    phone: "+82-31-469-1103",
    email: "sales@prt-kr.com",
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      news: "News",
      contact: "Contact",
    },
    focus: [
      "Roll-to-Roll Technology",
      "Leadframe & Semiconductor Packaging",
      "Production-Proven Systems",
    ],
    rights: "© 2026 PRT Co., Ltd. All rights reserved.",
    tagline: "Roll-to-Roll Technology",
  },
  zh: {
    companyHeader: "Company",
    sitemapHeader: "Sitemap",
    focusHeader: "Business Focus",
    address: "韩国京畿道安养市",
    phone: "+82-31-469-1103",
    email: "sales@prt-kr.com",
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      news: "News",
      contact: "Contact",
    },
    focus: [
      "Roll-to-Roll Technology",
      "Leadframe & Semiconductor Packaging",
      "Production-Proven Systems",
    ],
    rights: "© 2026 PRT Co., Ltd. All rights reserved.",
    tagline: "Roll-to-Roll Technology",
  },
}

export function Footer({ lang = "en" }: FooterProps) {
  const t = translations[lang]

  return (
    <footer className="relative bg-[#060912] border-t border-slate-800/60">
      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(25,118,210,0.4), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* ── Left: Company Info ───────────────────────── */}
          <div>
            <div className="mb-5">
              <img
                src="/images/PRT_logo.svg"
                alt="PRT"
                className="block h-8 w-auto"
              />
              <span className="mt-2 block text-[10px] font-medium tracking-[0.18em] uppercase text-white/40">
                {t.tagline}
              </span>
            </div>

            <p className="text-sm font-semibold text-white mb-3">PRT Co., Ltd.</p>

            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="h-3.5 w-3.5 mt-0.5 flex-shrink-0"
                  style={{ color: "#1976D2" }}
                />
                <span className="leading-relaxed">{t.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="h-3.5 w-3.5 flex-shrink-0"
                  style={{ color: "#1976D2" }}
                />
                <a
                  href={`tel:${t.phone.replace(/[^+0-9]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className="h-3.5 w-3.5 flex-shrink-0"
                  style={{ color: "#1976D2" }}
                />
                <a
                  href={`mailto:${t.email}`}
                  className="hover:text-white transition-colors"
                >
                  {t.email}
                </a>
              </li>
            </ul>
          </div>

          {/* ── Middle: Sitemap ──────────────────────────── */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              {t.sitemapHeader}
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/company"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.company}
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.equipment}
                </a>
              </li>
              <li>
                <a
                  href="/engineering"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.engineering}
                </a>
              </li>
              <li>
                <a
                  href="/installed-base"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.installedBase}
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.news}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* ── Right: Business Focus ────────────────────── */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              {t.focusHeader}
            </p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {t.focus.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#1976D2" }}
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────── */}
        <div className="mt-14 border-t border-slate-800/60 pt-6">
          <p className="text-xs text-slate-500">{t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
