"use client"

import { useCallback, useEffect, useState } from "react"
import { useSyncHtmlLang } from "@/hooks/use-sync-html-lang"

export type Language = "ko" | "en" | "zh"

const STORAGE_KEY = "prt-lang"
const VALID: ReadonlyArray<Language> = ["ko", "en", "zh"]

function readStored(): Language | null {
  if (typeof window === "undefined") return null
  const v = window.localStorage.getItem(STORAGE_KEY)
  return v && (VALID as readonly string[]).includes(v) ? (v as Language) : null
}

/**
 * Single source of truth for the user-selected language.
 * - SSR-safe: starts as "en" so the server-rendered HTML matches,
 *   then upgrades to the stored choice on mount (before paint).
 * - Persists to localStorage so language survives page navigation
 *   and full reloads.
 * - Syncs the <html lang> attribute so :lang(ko) CSS rules apply.
 * - Listens to the `storage` event so changes in another tab are
 *   mirrored here.
 */
export function useLanguage(): [Language, (next: Language) => void] {
  const [lang, setLangState] = useState<Language>("en")

  useEffect(() => {
    const stored = readStored()
    if (stored && stored !== lang) setLangState(stored)
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return
      if (e.newValue && (VALID as readonly string[]).includes(e.newValue)) {
        setLangState(e.newValue as Language)
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useSyncHtmlLang(lang)

  const setLang = useCallback((next: Language) => {
    setLangState(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }, [])

  return [lang, setLang]
}
