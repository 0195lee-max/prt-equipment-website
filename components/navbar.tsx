"use client"

import { useState, useEffect, useRef } from "react"
import { Globe, Menu, X, ChevronDown } from "lucide-react"

type Language = "ko" | "en" | "zh"

const languageNames: Record<Language, string> = {
  en: "EN",
  zh: "中文",
  ko: "KR",
}

// Equipment submenu — category deep-links into /products. Kept in
// English in every language mode (navigation labels are not translated).
const EQUIPMENT_SUBMENU: Array<{ href: string; label: string }> = [
  { href: "/products#cat-exposure", label: "Exposure Systems" },
  { href: "/products#cat-laminators", label: "Laminators" },
  { href: "/products#cat-modules", label: "Line Configuration Modules" },
]

const translations = {
  ko: {
    tagline: "Roll-to-Roll Technology",
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      news: "News",
      contact: "Contact",
    },
  },
  en: {
    tagline: "Roll-to-Roll Technology",
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      news: "News",
      contact: "Contact",
    },
  },
  zh: {
    tagline: "Roll-to-Roll Technology",
    nav: {
      company: "Company",
      equipment: "Equipment",
      engineering: "Engineering",
      installedBase: "Installed Base",
      news: "News",
      contact: "Contact",
    },
  },
}

interface NavbarProps {
  lang: Language
  setLang: (lang: Language) => void
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const t = translations[lang]
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const scrollEl = document.getElementById("home-scroll")
    const target: HTMLElement | Window = scrollEl ?? window

    const handleScroll = () => {
      const currentScrollY = scrollEl ? scrollEl.scrollTop : window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
        setIsMenuOpen(false)
      } else {
        setIsVisible(true)
      }

      setIsScrolled(currentScrollY > 50)
      lastScrollY.current = currentScrollY
    }

    target.addEventListener("scroll", handleScroll, { passive: true } as AddEventListenerOptions)
    return () =>
      target.removeEventListener("scroll", handleScroll as EventListener)
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // At top of page: fully transparent for the clean industrial look.
  // Once scrolled past the hero zone, switch to a semi-solid dark glass
  // so the bar reads as a proper nav when it slides back down over
  // product cards or content sections. Mobile menu also forces solid
  // for legibility of the drawer below.
  const isTransparent = !isScrolled && !isMenuOpen

  const navBgClass = isTransparent
    ? "bg-transparent border-b border-transparent shadow-none"
    : "bg-[rgba(5,10,25,0.94)] border-b border-slate-800/50 backdrop-blur-[12px] shadow-md shadow-black/20"

  const textColor = isTransparent
    ? "text-white/85 hover:text-white"
    : "text-slate-200 hover:text-white"

  const langBgColor = isTransparent
    ? "bg-white/5 border-white/15 hover:bg-white/10 text-white/85"
    : "bg-slate-800/50 border-slate-600/50 hover:bg-slate-700/50 text-slate-300"

  const navLinks: Array<{ href: string; label: string }> = [
    { href: "/company", label: t.nav.company },
    { href: "/products", label: t.nav.equipment },
    { href: "/engineering", label: t.nav.engineering },
    { href: "/installed-base", label: t.nav.installedBase },
    { href: "/news", label: t.nav.news },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex items-center px-6 py-7 md:px-10 lg:px-16 md:py-8 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${navBgClass}`}
      >
        {/* Logo */}
        <div className="flex justify-start md:justify-center md:w-[22vw] flex-1 md:flex-none">
          <a href="/" className="flex items-center transition-opacity hover:opacity-80">
            <img
              src="/images/PRT_logo.svg"
              alt="PRT"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden flex-1 items-center justify-center gap-16 md:flex lg:gap-24">
          {navLinks.map((link) =>
            link.href === "/products" ? (
              // Equipment item + hover/focus dropdown of categories
              <div key={link.href} className="group relative">
                <a
                  href={link.href}
                  className={`inline-flex items-center gap-1 text-base font-medium transition-colors ${textColor}`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </a>
                {/* pt-3 bridges the gap so the menu stays open on hover */}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-[230px] overflow-hidden rounded-lg border border-white/10 bg-slate-900/95 shadow-xl backdrop-blur-xl">
                    {EQUIPMENT_SUBMENU.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors ${textColor}`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Right cluster: Lang + Mobile Hamburger */}
        <div className="flex items-center gap-2 md:w-[22vw] md:justify-start">
          {/* Language selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label="Select language"
              className={`flex items-center justify-center rounded-full border p-2.5 backdrop-blur-sm transition-colors ${langBgColor}`}
            >
              <Globe className="h-4 w-4" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 md:left-0 md:right-auto top-full mt-2 min-w-[140px] overflow-hidden rounded-lg border border-white/10 bg-slate-900/95 shadow-xl backdrop-blur-xl z-50">
                {(["en", "zh", "ko"] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l)
                      setIsLangOpen(false)
                    }}
                    className={`flex w-full items-center gap-2 px-4 py-3 text-sm transition-colors ${
                      lang === l
                        ? "text-white font-medium"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                    style={lang === l ? { backgroundColor: "rgba(25,118,210,0.15)" } : {}}
                  >
                    {languageNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className={`md:hidden flex items-center justify-center rounded-full border p-2.5 backdrop-blur-sm transition-colors ${langBgColor}`}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-x-0 top-[76px] z-40 md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-700/30 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 border-b border-slate-800 transition-colors"
                >
                  {link.label}
                </a>
                {link.href === "/products" && (
                  <ul className="ml-3 border-l border-slate-800">
                    {EQUIPMENT_SUBMENU.map((sub) => (
                      <li key={sub.href}>
                        <a
                          href={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2.5 text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
