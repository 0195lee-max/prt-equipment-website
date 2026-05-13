"use client"

import { MapPin, Phone, Mail } from "lucide-react"

type Language = "ko" | "en" | "zh"

interface FooterProps {
  lang?: Language
}

const translations = {
  ko: {
    companyHeader: "회사",
    sitemapHeader: "사이트맵",
    focusHeader: "사업 분야",
    address: "대한민국 경기도 안양시",
    phone: "+82-31-469-1103",
    email: "sales@prt-kr.com",
    nav: {
      company: "회사 소개",
      equipment: "장비",
      engineering: "엔지니어링",
      installedBase: "납품 실적",
      news: "뉴스",
      contact: "문의",
    },
    focus: [
      "정밀 롤투롤 기술",
      "리드프레임 & 반도체 패키징",
      "현장 검증 시스템",
    ],
    rights: "© 2026 ㈜PRT. All rights reserved.",
    tagline: "Precision Roll-to-Roll Technology",
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
      "Precision Roll-to-Roll Technology",
      "Leadframe & Semiconductor Packaging",
      "Production-Proven Systems",
    ],
    rights: "© 2026 PRT Co., Ltd. All rights reserved.",
    tagline: "Precision Roll-to-Roll Technology",
  },
  zh: {
    companyHeader: "公司",
    sitemapHeader: "网站地图",
    focusHeader: "业务领域",
    address: "韩国京畿道安养市",
    phone: "+82-31-469-1103",
    email: "sales@prt-kr.com",
    nav: {
      company: "公司",
      equipment: "设备",
      engineering: "工程",
      installedBase: "装机记录",
      news: "新闻",
      contact: "联系我们",
    },
    focus: [
      "精密卷对卷技术",
      "引线框架与半导体封装",
      "量产验证系统",
    ],
    rights: "© 2026 PRT Co., Ltd. 版权所有。",
    tagline: "Precision Roll-to-Roll Technology",
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
            "linear-gradient(to right, transparent, rgba(199,168,109,0.4), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* ── Left: Company Info ───────────────────────── */}
          <div>
            <div className="mb-5">
              <span
                className="block text-2xl font-bold tracking-tight leading-none"
                style={{ color: "#C7A86D" }}
              >
                PRT
              </span>
              <span className="mt-1 block text-[10px] font-medium tracking-[0.18em] uppercase text-white/40">
                {t.tagline}
              </span>
            </div>

            <p className="text-sm font-semibold text-white mb-3">PRT Co., Ltd.</p>

            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="h-3.5 w-3.5 mt-0.5 flex-shrink-0"
                  style={{ color: "#C7A86D" }}
                />
                <span className="leading-relaxed">{t.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="h-3.5 w-3.5 flex-shrink-0"
                  style={{ color: "#C7A86D" }}
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
                  style={{ color: "#C7A86D" }}
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
                    style={{ backgroundColor: "#C7A86D" }}
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
