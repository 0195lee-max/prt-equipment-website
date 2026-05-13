"use client"

import { useEffect } from "react"

/**
 * Sync the user-selected language to <html lang> so that CSS
 * `:lang(ko)` rules (defined in app/globals.css) take effect.
 *
 * Pages keep their own `useState<Language>` and call this hook
 * once with the current lang. The hook runs on the client only,
 * so SSR still emits the root layout's static lang="en" — the
 * attribute is corrected on hydration before the first paint
 * Korean character lands on screen.
 */
export function useSyncHtmlLang(lang: string): void {
  useEffect(() => {
    if (typeof document === "undefined") return
    document.documentElement.lang = lang
  }, [lang])
}
