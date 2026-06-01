"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Returns [ref, inView]. `inView` flips true the first time the element
 * enters the viewport, then the observer disconnects (one-shot — used
 * for entrance animations that should play once). SSR/no-IO safe: reveals
 * immediately when IntersectionObserver is unavailable.
 */
export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.25 }
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setInView(true)
        obs.disconnect()
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView]
}
