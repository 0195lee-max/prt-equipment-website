"use client"

import { useEffect, useRef } from "react"

// Post-Hero video band (TEST). Sits between the PRT AT A GLANCE / KPI
// block and the Explore Equipment row. Wide horizontal band constrained
// to the current content width. Square edges, no rounded card, no heavy
// border, no glow/neon, no captions/controls/audio. Subtle dark overlay
// so it does not read as a second Hero.
export function PostHeroVideoBand() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    // Modest pacing lift. Respect reduced-motion (keep normal speed there).
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    v.playbackRate = reduce ? 1 : 1.12
  }, [])

  return (
    <div className="bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8 lg:pb-16">
        <div
          data-reveal="ui"
          className="relative h-[200px] overflow-hidden bg-black sm:h-[260px] md:h-[340px] lg:h-[420px]"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="h-full w-full object-cover"
            style={{
              objectPosition: "center 22%",
              // Subtle brightness lift + slight contrast support so machinery
              // reads better while keeping the dark premium tone (no color shift).
              filter: "brightness(1.12) contrast(1.05)",
            }}
          >
            <source src="/videos/hero_loop_v10_final_2048.mp4" type="video/mp4" />
          </video>

          {/* Subtle dark overlay — lighter flat dim + gentle edge darkening
              so the band is not too bright and never competes with the
              sections, without washing out the blacks. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ backgroundColor: "rgba(10,10,10,0.18)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0) 22%, rgba(10,10,10,0) 78%, rgba(10,10,10,0.5) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
