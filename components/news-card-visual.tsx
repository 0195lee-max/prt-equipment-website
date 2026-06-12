// Shared visual for News cards (Home Latest News + /news Latest Updates).
// "logo"  → centered logo on a clean white panel over a dark card.
// "photo" → real field photo, object-cover, with a subtle bottom gradient
//            so it stays consistent with the dark industrial card style.

type Kind = "logo" | "photo"

export function NewsCardVisual({ src, alt, kind }: { src: string; alt: string; kind: Kind }) {
  if (kind === "logo") {
    return (
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-[#0C1220] to-[#080B12] p-6">
        {/* Logo lockup on a grounded white plate (soft shadow + thin ring) so it
            reads as an intentional brand mark over the dark card, not a
            placeholder. Logo is shown object-contain — never cropped/distorted. */}
        <div className="w-[60%] max-w-[220px] rounded-sm bg-white px-7 py-5 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] ring-1 ring-slate-200/70">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="h-auto w-full object-contain" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-800/60 bg-[#0A0F1A]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(2,6,23,0.45) 0%, transparent 45%)" }}
      />
    </div>
  )
}
