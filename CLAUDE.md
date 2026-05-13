# CLAUDE.md

Working notes for this repo. Read before editing.

---

## Project Context

PRT (Precision Roll-to-Roll Technology) — B2B marketing site for industrial
Roll-to-Roll equipment (laminators, exposure systems) for Leadframe /
semiconductor packaging.

### Stack

- **Next.js (App Router)** — routes live under `app/`, **not** `src/app/`.
  When a user says "src/app/page.tsx" they mean `app/page.tsx`.
- **React 19 + TypeScript** (strict). Most leaf components are
  `"use client"` because of `useState` for the language toggle.
- **Tailwind CSS 4** via `@import 'tailwindcss'` in `app/globals.css`.
  Use Tailwind utilities first; only drop to inline `style={{ ... }}`
  for brand-color hex values or one-off gradients.
- **next/image** with `fill` + `sizes` for all product/hero imagery.
- **Vercel** auto-deploys on push to `main`.

### Layout

```
app/
  layout.tsx, globals.css
  page.tsx                  # home (hero + equipment + applications + news + footer)
  company/, products/, engineering/, installed-base/, news/, contact/
components/
  navbar.tsx, footer.tsx
  hero-slider.tsx           # 2-slide carousel (image + video), centered overlay
  equipment-cards.tsx       # 3 cards under hero
  applications-section.tsx  # Why PRT grid + Installed Base KPI bar + CTA
  news-teaser.tsx
public/
  images/, videos/
```

The home page is a single scroll container (`<main id="home-scroll">`)
with `snap-y snap-mandatory` between the hero and the second page.
Snap is dynamically released past ~1.15·viewport so news/footer scroll
free. A wheel handler intercepts the first wheel tick on the hero to
jump straight to `#section-equipment`.

### Brand & visual rules

- Gold: `#C7A86D` (hover `#B89757`). Used for accents, CTAs, key numbers.
- Dark bases: `#07090F`, `#0A0F1A`, `#0A0A0A`. No pure black.
- **No rounded corners on interactive surfaces** (buttons, cards).
  This is industrial — square edges only.
- Image filter for cool-tone correction: `saturate(0.75) brightness(1.15) contrast(1.05)`.
- Navbar is always transparent (only solid when mobile menu is open).
  It hides on scroll-down, returns on scroll-up; it listens to
  `#home-scroll` if present, else `window`.

### i18n pattern

Each page/component carries its own copy inline:

```ts
type Language = "ko" | "en" | "zh"
const translations = {
  ko: { ... },
  en: { ... },
  zh: { ... },
}
```

Selected via `useState<Language>` at the page level and passed down as
a `lang` prop. **Do not** introduce next-i18next, react-intl, or
external i18n libraries unless asked. When you add a string, add it to
all three locales.

### Git / deploy workflow

- Commit and push to `main` after each meaningful change — Vercel deploys
  automatically. Group related edits into one commit.
- Commit message: short imperative subject, optional bullet body, ending
  with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`.
- Never `--amend` after a hook fails — make a new commit.
- Never `--no-verify`, `--force` push to `main`, or change git config
  unless the user explicitly asks.
- The user pushes image assets through GitHub web UI sometimes — if
  push is rejected, stash `.claude/settings.local.json`, `pull --rebase`,
  push, then drop the stash.

### Common pitfalls observed in this repo

- `app/page.tsx` carries the snap-scroll + wheel-intercept logic. Changes
  to home structure usually need an update there too.
- The hero uses `-mt-[120px]` (or similar) to pull under the sticky
  navbar. If you bump navbar padding, bump this offset to match.
- `object-cover` crops equipment images badly — `object-contain` with a
  taller box is the right pattern for product shots.
- The user's environment is Windows + Korean. Git warns about CRLF; that
  is fine, do not "fix" it.
- The user often references the live Vercel URL — if a change doesn't
  appear there, the redeploy may still be running or stuck; check the
  Vercel dashboard rather than the code.

### Things to avoid

- CEO message blocks, vision/mission fluff, generic corporate copy.
- Stock-photo aesthetic, colorful gradients, SaaS landing-page tropes.
- Words like "innovation" or "precision" except where technically real.
- New top-level dependencies unless requested.
- Creating `*.md` or `README` files unless explicitly asked.
- Emoji in code or copy unless explicitly asked.

---

## Working Principles

Lightweight rules — bias toward caution over speed; use judgment on
trivial edits.

### 1. Think before coding

State assumptions out loud. If a request has two reasonable
interpretations, name both before picking. If something is unclear,
stop and ask instead of guessing. Surface tradeoffs the user might not
see (e.g. "centering the text means rewriting the vignette layer too").

### 2. Smallest change that works

Only build what was asked. No speculative abstractions, no extra
configuration knobs, no defensive error handling for cases that can't
happen. If the diff is bigger than the request, you went too far.

### 3. Surgical edits

Touch only what the request requires. Don't reformat, rename, or
"improve" nearby code. Match the existing style even when you'd write
it differently. If you create unused imports or vars with your change,
clean them up — but leave pre-existing dead code alone unless asked.

Every changed line should trace back to the user's request.

### 4. Define done, then verify

Turn fuzzy asks into checkable goals:
- "Fix the spacing" → "CTA visible at 1080p without scrolling"
- "Make it readable" → "Spec text contrast ≥ slate-300 at text-sm"
- "Add a new section" → "Renders on home page below cards, all three locales populated"

For anything multi-step, state the plan briefly before acting, and
verify each step before moving on. Strong success criteria let you
finish without a round-trip.

---

_If these are working: smaller diffs, fewer rewrites, and questions
arrive before the broken commit, not after._
