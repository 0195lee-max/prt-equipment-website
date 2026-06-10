import { cookies } from "next/headers"

export type Language = "ko" | "en" | "zh"

// Cookie that carries the user-selected language so the SERVER can render the
// first HTML in the correct language (no English flash on hard reload / direct
// URL). Same name as the localStorage key for consistency. Written client-side
// by useLanguage (path=/, sameSite=lax, 1-year max-age).
export const LANG_COOKIE = "prt-lang"

const VALID: ReadonlyArray<Language> = ["ko", "en", "zh"]
export const DEFAULT_LANG: Language = "en"

/**
 * Reads the language cookie during server rendering. Returns the default
 * ("en") when no valid cookie is present. Using cookies() opts the route into
 * dynamic rendering so each request is rendered in the visitor's language.
 */
export async function getServerLanguage(): Promise<Language> {
  const store = await cookies()
  const value = store.get(LANG_COOKIE)?.value
  return value && (VALID as readonly string[]).includes(value)
    ? (value as Language)
    : DEFAULT_LANG
}
