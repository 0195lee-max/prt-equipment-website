"use client"

// EXPERIMENTAL: soft scroll-reveal driver (preview only — easy to remove).
//
// One IntersectionObserver reveals every [data-reveal] element the first time
// it enters the viewport (adds `.is-revealed`; the actual motion lives in
// globals.css). A MutationObserver picks up elements added later (client-side
// route changes, the Equipment category tabs, etc.). Reveal is a one-shot:
// once revealed, the element is unobserved so it never re-animates on scroll.
//
// Gating: it only runs when `html.reveal-on` is set, which the inline head
// script in layout.tsx adds only when JS is active AND prefers-reduced-motion
// is off — so no-JS / reduced-motion users get fully visible content.
//
// To remove the whole experiment: delete this file + its <RevealProvider/> and
// the inline script in layout.tsx, the globals.css reveal block, and the
// data-reveal attributes scattered across the section components.

import { useEffect } from "react"

export function RevealProvider() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains("reveal-on")) return

    const pending = new Set<Element>()
    const revealed = new Set<Element>()

    const reveal = (el: Element) => {
      el.classList.add("is-revealed")
      pending.delete(el)
      revealed.add(el)
      io?.unobserve(el)
    }

    // IntersectionObserver is the primary, efficient trigger.
    let io: IntersectionObserver | null = null
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) if (entry.isIntersecting) reveal(entry.target)
        },
        // Reveal as soon as a section starts entering the viewport (small
        // bottom dead-zone) so content never sits blank while already on screen.
        { threshold: 0.1, rootMargin: "0px 0px -4% 0px" },
      )
    }

    // Fallback sweep: reveal anything already inside the viewport band. Covers
    // above-the-fold elements on load and guarantees content never stays hidden
    // if IO is unavailable or slow (e.g. older browsers, restored scroll).
    const inViewBand = (el: Element) => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight * 0.96 && r.bottom > 0
    }
    const sweep = () => {
      for (const el of [...pending]) if (inViewBand(el)) reveal(el)
    }

    const track = (el: Element) => {
      if (el.classList.contains("is-revealed")) return
      pending.add(el)
      io?.observe(el)
    }
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(track)

    let raf = 0
    const onScrollOrResize = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        sweep()
      })
    }
    // Initial in-view sweep (rAF + a short timeout as belt-and-suspenders).
    requestAnimationFrame(sweep)
    const t = window.setTimeout(sweep, 200)
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize, { passive: true })

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.matches("[data-reveal]")) track(node)
          node.querySelectorAll?.("[data-reveal]").forEach(track)
        })
      }
      sweep()
    })
    mo.observe(document.body, { childList: true, subtree: true })

    // Keep already-revealed elements revealed even if a re-render rewrites their
    // className and strips the imperatively-added `.is-revealed` — e.g. when a
    // reveal element's className is language-dependent and changes on language
    // switch. Re-assert a static final-state class (no animation) before paint,
    // so the content never snaps back to the initial blur and never replays the
    // reveal. (Skip the moment of the first reveal, which keeps `.is-revealed`.)
    const classMo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        const el = m.target as Element
        if (
          revealed.has(el) &&
          !el.classList.contains("is-revealed") &&
          !el.classList.contains("reveal-static")
        ) {
          el.classList.add("reveal-static")
        }
      }
    })
    classMo.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true,
    })

    return () => {
      io?.disconnect()
      mo.disconnect()
      classMo.disconnect()
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
      window.clearTimeout(t)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
