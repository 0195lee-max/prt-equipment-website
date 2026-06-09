"use client"

// Reusable enlarge-on-click viewer for equipment images (Exposure + Laminators).
//
// Future-proofing: it already accepts an ARRAY of images plus the active index,
// so a model can later expose multiple views (main / roller detail / control
// panel / web-handling path / alignment) without refactoring the call sites.
// For now each equipment item passes a single real image, so the gallery
// controls (prev / next / dots) only render when images.length > 1. No fake or
// placeholder part images are added.

import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export interface LightboxImage {
  src: string
  alt: string
}

export function EquipmentImageLightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onIndexChange?: (i: number) => void
}) {
  const multi = images.length > 1

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (multi && onIndexChange) {
        if (e.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length)
        if (e.key === "ArrowRight") onIndexChange((index + 1) % images.length)
      }
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [index, images.length, multi, onClose, onIndexChange])

  const current = images[index]
  if (!current) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/30 text-white/80 transition-colors hover:border-white/70 hover:text-white"
      >
        <X className="h-5 w-5" />
      </button>

      {multi && onIndexChange && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onIndexChange((index - 1 + images.length) % images.length)
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 text-white/80 transition-colors hover:border-white/70 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onIndexChange((index + 1) % images.length)
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 text-white/80 transition-colors hover:border-white/70 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Aspect ratio preserved, never stretched, never larger than the viewport.
          Clicking the image itself also closes the viewer (same as the backdrop
          / X button); cursor-zoom-out signals this. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={current.src}
        alt={current.alt}
        onClick={onClose}
        className="max-h-[88vh] max-w-[92vw] cursor-zoom-out object-contain"
      />

      {multi && (
        <div
          className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onIndexChange?.(i)}
              aria-label={`Show image ${i + 1}`}
              className="h-1.5 w-6 transition-colors"
              style={{ backgroundColor: i === index ? "#1976D2" : "rgba(255,255,255,0.35)" }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
