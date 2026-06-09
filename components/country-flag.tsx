// Subtle, refined SVG flag markers for the Installed Base "Deployment Regions"
// cards. Hand-drawn simplified flags (NOT emoji) so they render consistently
// across platforms. Colors are toned down by the caller via a CSS filter and a
// soft ring, so they integrate with the dark navy B2B page instead of looking
// loud or decorative. All flags share a 30x20 (3:2) viewBox for consistent
// sizing. `code` matches the region data (CN / MY / TW / JP / KR).

type FlagCode = "CN" | "MY" | "TW" | "JP" | "KR" | string

// 5-point (or n-point) star polygon points, pointing up by default; `rot` in
// radians rotates the star (used to angle China's small stars toward the big one).
function starPoints(
  cx: number,
  cy: number,
  outer: number,
  inner: number,
  points: number,
  rot = 0,
): string {
  const pts: string[] = []
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const ang = (Math.PI / points) * i - Math.PI / 2 + rot
    pts.push(`${(cx + r * Math.cos(ang)).toFixed(2)},${(cy + r * Math.sin(ang)).toFixed(2)}`)
  }
  return pts.join(" ")
}

function aimAt(cx: number, cy: number, tx: number, ty: number): number {
  return Math.atan2(ty - cy, tx - cx) + Math.PI / 2
}

function FlagBody({ code }: { code: FlagCode }) {
  switch (code) {
    case "CN":
      return (
        <>
          <rect width="30" height="20" fill="#DE2910" />
          <g fill="#FFDE00">
            <polygon points={starPoints(5, 5, 3, 1.45, 5)} />
            <polygon points={starPoints(10, 2, 1, 0.48, 5, aimAt(10, 2, 5, 5))} />
            <polygon points={starPoints(12, 4.2, 1, 0.48, 5, aimAt(12, 4.2, 5, 5))} />
            <polygon points={starPoints(12, 7, 1, 0.48, 5, aimAt(12, 7, 5, 5))} />
            <polygon points={starPoints(10, 9, 1, 0.48, 5, aimAt(10, 9, 5, 5))} />
          </g>
        </>
      )

    case "JP":
      return (
        <>
          <rect width="30" height="20" fill="#ffffff" />
          <circle cx="15" cy="10" r="6" fill="#BC002D" />
        </>
      )

    case "TW":
      return (
        <>
          <rect width="30" height="20" fill="#FE0000" />
          <rect width="15" height="10" fill="#000095" />
          <g fill="#ffffff">
            <polygon points={starPoints(7.5, 5, 3.7, 1.85, 12)} />
            <circle cx="7.5" cy="5" r="2" />
          </g>
        </>
      )

    case "MY": {
      const h = 20 / 14
      const redStripes = [0, 2, 4, 6, 8, 10, 12]
      return (
        <>
          <rect width="30" height="20" fill="#ffffff" />
          {redStripes.map((i) => (
            <rect key={i} y={i * h} width="30" height={h + 0.02} fill="#CC0001" />
          ))}
          <rect width="15" height={h * 7} fill="#010066" />
          {/* Crescent: yellow disc partly cut by a blue disc */}
          <circle cx="5.6" cy="5" r="2.7" fill="#FFCC00" />
          <circle cx="6.6" cy="5" r="2.25" fill="#010066" />
          {/* 14-point star */}
          <polygon points={starPoints(9.4, 5, 2, 0.9, 14)} fill="#FFCC00" />
        </>
      )
    }

    case "KR":
      return (
        <>
          <rect width="30" height="20" fill="#ffffff" />
          {/* Taegeuk */}
          <circle cx="15" cy="10" r="4" fill="#0047A0" />
          <path
            d="M11,10 A4,4 0 0 1 19,10 A2,2 0 0 1 15,10 A2,2 0 0 0 11,10 Z"
            fill="#CD2E3A"
          />
          {/* Four trigrams (simplified bar clusters), toned soft-dark */}
          <g fill="#2A2E35">
            {[
              { x: 6, y: 5, r: -55 },
              { x: 24, y: 5, r: 55 },
              { x: 6, y: 15, r: 55 },
              { x: 24, y: 15, r: -55 },
            ].map((g, i) => (
              <g key={i} transform={`translate(${g.x},${g.y}) rotate(${g.r})`}>
                <rect x="-2" y="-1.1" width="4" height="0.6" />
                <rect x="-2" y="-0.3" width="4" height="0.6" />
                <rect x="-2" y="0.5" width="4" height="0.6" />
              </g>
            ))}
          </g>
        </>
      )

    default:
      return <rect width="30" height="20" fill="#1f2937" />
  }
}

export function CountryFlag({ code, className }: { code: FlagCode; className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <FlagBody code={code} />
    </svg>
  )
}
