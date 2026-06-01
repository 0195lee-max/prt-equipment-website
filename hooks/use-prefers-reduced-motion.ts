"use client"

import { useEffect, useState } from "react"

/**
 * Tracks the user's `prefers-reduced-motion` setting. Used to skip
 * JS-driven animations (e.g. count-up) entirely — CSS transitions are
 * already clamped by the global reduced-motion rule in globals.css.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const handler = () => setReduced(mq.matches)
    mq.addEventListener?.("change", handler)
    return () => mq.removeEventListener?.("change", handler)
  }, [])

  return reduced
}
