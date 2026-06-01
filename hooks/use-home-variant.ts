"use client"

import { useEffect, useState } from "react"

/**
 * ─────────────────────────────────────────────────────────────
 * TEMPORARY homepage design-variant switcher.
 *
 * Reads ?variant=a | b | c from the URL and returns it. No param
 * (or any other value) returns null → the CURRENT BASELINE design
 * renders unchanged.
 *
 *   /            → baseline (current design)
 *   /?variant=a  → Variant A · Minimal Industrial
 *   /?variant=b  → Variant B · Technical Overlay
 *   /?variant=c  → Variant C · Premium Equipment Showcase
 *
 * SSR-safe: starts null (matches server output), upgrades on mount.
 * This whole file + the `variant` props threaded through the home
 * components are easy to delete once a direction is chosen.
 * ─────────────────────────────────────────────────────────────
 */
export type HomeVariant = "a" | "b" | "c" | null

export function useHomeVariant(): HomeVariant {
  const [variant, setVariant] = useState<HomeVariant>(null)

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("variant")
    if (p === "a" || p === "b" || p === "c") setVariant(p)
  }, [])

  return variant
}
