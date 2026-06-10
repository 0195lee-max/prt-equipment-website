"use client"

import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import { useSyncHtmlLang } from "@/hooks/use-sync-html-lang"

export type Language = "ko" | "en" | "zh"

// Same name for both the localStorage key and the cookie.
const STORAGE_KEY = "prt-lang"
const VALID: ReadonlyArray<Language> = ["ko", "en", "zh"]
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

function isValid(v: string | null | undefined): v is Language {
  return !!v && (VALID as readonly string[]).includes(v)
}

function readStored(): Language | null {
  if (typeof window === "undefined") return null
  const v = window.localStorage.getItem(STORAGE_KEY)
  return isValid(v) ? v : null
}

function readCookie(): Language | null {
  if (typeof document === "undefined") return null
  const m = document.cookie.match(/(?:^|;\s*)prt-lang=([^;]+)/)
  const v = m ? decodeURIComponent(m[1]) : null
  return isValid(v) ? v : null
}

// Persist to BOTH cookie (so the server can read it on the next request) and
// localStorage (client backup + cross-tab sync).
function persist(next: Language) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    /* ignore quota/private-mode errors */
  }
  document.cookie = `${STORAGE_KEY}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`
}

// Remembers the resolved language across client-side route changes (extra
// safety on top of the cookie, which the server reads on every navigation).
let cachedLang: Language | null = null

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

/**
 * Single source of truth for the user-selected language.
 *
 * - `initialLang` comes from the server (read from the cookie in the route's
 *   server `page.tsx`). The lazy initializer uses it, so the FIRST client render
 *   matches the server-rendered HTML exactly — correct language from frame one,
 *   no English flash and no hydration mismatch, on hard reload / direct URL /
 *   client navigation alike.
 * - Changing the language writes both the cookie and localStorage.
 * - One-time migration: visitors who chose a language before cookies existed
 *   (localStorage only) get the cookie written on first load.
 * - Cross-tab changes are mirrored via the `storage` event.
 */
export function useLanguage(initialLang?: Language): [Language, (next: Language) => void] {
  const [lang, setLangState] = useState<Language>(() => initialLang ?? cachedLang ?? "en")

  const setLang = useCallback((next: Language) => {
    cachedLang = next
    setLangState(next)
    persist(next)
  }, [])

  useIsoLayoutEffect(() => {
    cachedLang = lang

    // If the server didn't have a cookie (so it rendered the default), but a
    // prior localStorage choice exists, adopt it and write the cookie so every
    // future server render is already correct. Otherwise just ensure the cookie
    // mirrors the current language.
    if (!readCookie()) {
      const stored = readStored()
      if (stored && stored !== lang) setLang(stored)
      else persist(lang)
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return
      if (isValid(e.newValue)) {
        cachedLang = e.newValue
        setLangState(e.newValue)
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useSyncHtmlLang(lang)

  return [lang, setLang]
}
