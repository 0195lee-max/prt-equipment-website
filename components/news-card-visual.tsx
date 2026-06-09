// Shared visual for News cards (Home Latest News + /news Latest Updates).
// "logo"  → centered logo on a clean white panel over a dark card.
// "photo" → real field photo, object-cover, with a subtle bottom gradient
//            so it stays consistent with the dark industrial card style.

type Kind = "logo" | "photo"

export function NewsCardVisual({ src, alt, kind }: { src: string; alt: string; kind: Kind }) {
  if (kind === "logo") {
    return (
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-slate-800/60 bg-[#0A0F1A] p-6">
        <span className="absolute top-3 left-3 h-2 w-2 border-l border-t" style={{ borderColor: "rgba(25,118,210,0.4)" }} />
        <span className="absolute top-3 right-3 h-2 w-2 border-r border-t" style={{ borderColor: "rgba(25,118,210,0.4)" }} />
        <span className="absolute bottom-3 left-3 h-2 w-2 border-l border-b" style={{ borderColor: "rgba(25,118,210,0.4)" }} />
        <span className="absolute bottom-3 right-3 h-2 w-2 border-r border-b" style={{ borderColor: "rgba(25,118,210,0.4)" }} />
        <div className="w-[72%] max-w-[260px] border border-slate-300 bg-white px-6 py-4">
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
