"use client"

import type { CSSProperties } from "react"
import { ArrowUpRight } from "lucide-react"

// Equipment quick navigation — sits directly below the post-Hero video
// band and above Why PRT, as a clean navigation strip at the bottom of
// the post-Hero block. Labels stay English in every locale (navigation
// labels are not translated). Exposure must come first.
const QUICK_LINKS: Array<{ href: string; label: string }> = [
  { href: "/products#cat-exposure", label: "Exposure Systems" },
  { href: "/products#cat-laminators", label: "Laminators" },
]

export function EquipmentQuickNav() {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <p
              data-reveal="label"
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500"
            >
              Explore Equipment
            </p>
            {/* Equipment controls grouped together as one action bar. */}
            <div
              data-reveal="ui"
              style={{ "--reveal-delay": "100ms" } as CSSProperties}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2.5 border border-slate-600 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-[#1976D2] hover:bg-[#1976D2]/[0.08] hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 flex-shrink-0"
                    style={{ backgroundColor: "#1976D2" }}
                  />
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1976D2]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
