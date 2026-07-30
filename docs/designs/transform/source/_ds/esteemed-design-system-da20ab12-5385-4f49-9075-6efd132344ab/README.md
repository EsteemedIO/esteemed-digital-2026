# Esteemed Design System

The complete brand + UI kit for **Esteemed Inc.** — the AI + Human platform for work, powered by 35,000+ vetted professionals ("Colleagues").

This system is built for design and engineering agents to produce branded artifacts: slides, landing pages, app mocks, throwaway prototypes, and production UIs.

---

## Brand context

Esteemed is a multi-channel HR-tech company combining a curated talent network with a suite of AI-driven products. Customers achieve an **80% reduction in time-to-hire** by pairing the Colleagues network with the platform's AI agents.

### Brand architecture
Esteemed has a **parent brand** and one prominent **sub-brand** with its own identity:

| Brand | Logo | Tagline | Usage |
|---|---|---|---|
| **Esteemed** (parent) | gold-star + "esteemed" wordmark (`assets/esteemed-lockup.svg`) | *"Innovation for the modern workplace."* / *"Work smarter. Achieve more."* | esteemed.io, sales material, enterprise contracts, and as the umbrella mark above every product. |
| **Colleagues** (sub-brand) | ramp mark + "colleagues" wordmark (`assets/colleagues-logo.png`) | *"Chart your career journey."* | The talent community / EXP product itself. Use this lockup on Colleagues product surfaces — **not** the parent Esteemed lockup. |

The other products (Hire, Create, Acquire, Intelligence, Cloud) sit under the Esteemed parent mark — they do not (yet) have their own logos.

### Products
| Product | What it is |
|---|---|
| **Esteemed Hire** (Aura ATS/CRM, Talent) | AI-powered talent acquisition + ATS, sourced from the Colleagues network |
| **Esteemed Create** (DrupalX) | Prompt-driven, agentic web/app builder on a headless Drupal foundation |
| **Esteemed Acquire** | System of record — onboarding, payroll, contractor ops across 130 countries |
| **Esteemed Intelligence** | The coherence engine — company brain, memory, retrieval, and agents |
| **Esteemed Cloud** | Integrated hosting tuned to the Esteemed stack |
| **Colleagues** | Talent community / experience platform with 35,000+ vetted professionals |

### Sources consulted
- `uploads/esteemed-logo 1.png` — wordmark (PNG)
- `uploads/esteemed-logo 1 - hire.svg` — full lockup with gold star (SVG, primary brand mark)
- `uploads/Esteemed icon brand yellow 2026.svg` — yellow tile w/ white star
- `uploads/Esteemed gold star icon brand yellow 2027.svg` — gold star alone
- Public site: <https://esteemed.io> (Drupal 10) — surveyed for tone, IA, product naming, photography style.
- LinkedIn / promptloop / press release on franchise program — product taxonomy and metrics.

No codebase or Figma was attached. **If you have a codebase, Figma, or component library, attach it and re-run this design system task to greatly improve fidelity** — particularly in the UI kits.

---

## File index

```
README.md                    ← you are here
SKILL.md                     ← Agent-Skills-compatible entry point
AGENTS.md                    ← Codex-compatible entry point
colors_and_type.css          ← all CSS custom properties + semantic type classes
components/                   ← first-class, importable React components (compiled into _ds_bundle.js)
  Button / Badge / Avatar / Eyebrow (.jsx + .d.ts + dsCard .html each)
assets/                      ← logos, icons, star marks
preview/                     ← review cards (Brand, Colors, Type, Spacing, Components)
ui_kits/
  _shared.css / _shared.jsx  ← cross-kit primitives (Button, Pill, Avatar, Icon, EsStar)
  marketing-site/            ← esteemed.io public site recreation
  colleagues-app/            ← Colleagues product app (feed, jobs, profile, messages)
```

To use the system in any HTML artifact, link `colors_and_type.css` and reference the `--es-*` custom properties or the semantic classes (`.es-h1`, `.es-body`, etc.).

### Importable components
The `components/` directory holds first-class React components compiled into `_ds_bundle.js` and exposed on `window.EsteemedDesignSystem_da20ab`:

| Component | Props |
|---|---|
| `Button` | `variant` (primary/secondary/ghost/link), `size` (sm/md/lg), `leading`, `trailing` |
| `Badge` | `tone` (default/yellow/ink/sky/success/warning/danger/info), `star`, `dot` |
| `Avatar` | `initials`, `color`, `verified`, `size` |
| `Eyebrow` | `star` |

Consume them by loading the bundle and destructuring:
```html
<script src="_ds_bundle.js"></script>
<script>const { Button, Badge, Avatar, Eyebrow } = window.EsteemedDesignSystem_da20ab;</script>
```
Each component ships a `.d.ts` (typed props) and a `dsCard` preview `.html`. The `ui_kits/` JSX files remain browser-Babel reference compositions (loaded via `window.*` globals) — use them for layout patterns, and the `components/` library for typed, importable building blocks.

---

## CONTENT FUNDAMENTALS — Voice & tone

Esteemed's voice is **confident, direct, and practical**. It treats the reader (recruiter, freelancer, founder) as a competent peer — never as someone to be impressed.

### Tone
- **Sentence case, never Title Case.** "Chart your career journey." not "Chart Your Career Journey."
- **Periods at the end of headlines.** Even short ones. ("Work smarter. Achieve more.") This is a signature device.
- **You-voice over we-voice.** "Find your work family." "Chart your career." "Get paid on time."
- **Pair human terms with technical ones.** *Colleagues* (not "candidates"). *Career journey* (not "user funnel"). *Work family* (not "community").
- **Lead with the outcome, then the mechanism.** "Cut time-to-hire by 80%" → then explain Aura + Colleagues + Agents.
- **Specific numbers, never marketing fluff.** 35,000+. 80%. 130 countries. 4,000 workspaces.

### Real examples
| ✅ Do | ❌ Don't |
|---|---|
| "Chart your career journey." | "Empower your career trajectory!" |
| "Work smarter. Achieve more." | "Synergize your professional journey 🚀" |
| "Hire in less than half the time." | "Revolutionary AI-driven HR transformation" |
| "Find your work family." | "Connect with industry-leading talent ecosystems" |
| "Big-company perks. Freelancer freedom." | "Unleashing freelance excellence" |

### Casing & punctuation
- **No ALL CAPS** in copy. Reserved for uppercase tracked eyebrows (`.eyebrow`, 12 px, +.12em tracking).
- **Em-dashes** used freely for clarification — like this.
- **No emoji in product copy.** The gold star (★) is the only allowed symbol, and only as a brand-mark accent (eyebrows, badges, callouts). Even there, prefer the SVG `EsStar` over the unicode ★ glyph.
- **First word capitalized in pill / badge labels:** "Hiring", "Pro Member", "Verified" — never "HIRING".

### Person
- **Marketing:** second-person + outcomes. ("You join. You grow. You hire.")
- **In-product:** descriptive. ("3 new matches", "Sourced from Aura", "Available in 2 weeks")
- **Esteemed AI agent:** first-person, calm, never breathless. ("I scanned 312 postings overnight. Three look like high-confidence fits.")

---

## VISUAL FOUNDATIONS

### Color
- **Brand color: yellow `#FEE546`.** This is the core personality. Used sparingly but unapologetically — large blocks, pill buttons (e.g. "Try Create →"), accent shapes, eyebrow stars.
- **Secondary accent: sky blue `#BFDBFE` (`--es-sky-accent` / `--es-sky-300`).** The one approved companion hue. Pairs with yellow + black on the marketing site and in slide decks — e.g. numbered step badges (sky circle, ink number), highlight fills, and sky-on-ink callouts. Keep it light; use the darker sky tones (`--es-sky-700`+) only for text/borders, never large fills.
- **Ink (`#0A0A0A` → `#111`)** is the workhorse counterpart. Inverted "ink" sections (full black hero panels, AI/Intelligence cards) are part of the rhythm.
- **The trio is yellow · black · sky.** Don't introduce hues beyond these plus the muted semantics below.
- **Warm neutrals** (#FAFAF7 cream page, #F4F3EE secondary surface) — never blue-gray. Page chrome should feel like off-white paper, not Silicon Valley screen.
- **Semantic colors are muted.** Success #1F8A5B, Warning #D08A1F, Danger #C8341F, Info #2A6FDB — all calibrated to sit next to yellow without competing.

### Type
- **Inter** for all body & UI text. Regular (400) on prose, Medium (500) for UI labels, Semibold (600) for buttons & navigation, Bold (700) for emphasis.
- **Manrope** (or the brand's custom display face if one exists) for hero / H1–H3 display headings. Bold (700) and ExtraBold (800).
- Tight tracking on display (`-.025em`). Wide tracking + uppercase on eyebrows (`+.12em`).
- **No serif.** Esteemed is institutional but tech-forward — no editorial / Vogue / Fraunces vibe.
- **`text-wrap: balance`** on all headlines.

### Backgrounds & surfaces
- **Default page:** cream `#FAFAF7` (`--es-bg`). Cards are pure `#FFFFFF` on top.
- **Inverted sections:** ink `#111111`. Used for ~1 hero block per page, CTAs, AI-product cards. Star bleed pattern (giant semi-transparent yellow star at edge) is the signature here.
- **Yellow accents:** filled tiles for stats, primary buttons, eyebrow stars, hiring pills. Never used as a full page background — too aggressive.
- **No gradients.** One exception: the rare 135° yellow-to-light-yellow tonal pour. Avoid in normal use.
- **No textures except an optional 24 px dot/line grid.** Cream and ink do the heavy lifting.

### Ramp pattern (signature graphic device)
Two parallel sweeping curves (`assets/ramp-curves.svg`) from lower-left to upper-right. Used on LinkedIn covers, deck title pages, and hero panels.

**Rules for the ramp:**
- **On ink (`#111`)** → thin white lines (1.2–1.5 px). Pair with a large yellow disc for the canonical lockup.
- **On yellow (`#FEE546`)** → **BLACK lines, 2–3 px stroke.** Thin white-on-yellow is forbidden — too faint to read.
- **On cream / light surfaces** → ink lines at ~22% opacity, 1.5 px.
- **Heavy white-on-yellow (6–10 px)** exists as a *rare* graphic accent only. Use once per artifact at most.
- Never combine the ramp with the star-bleed pattern on the same surface — pick one.

### Imagery
- Real photographs of professionals working — laptops, coworking, hybrid offices. **Warm light, daylight, no filters.** No stock-illustration people. No hand-drawn illustrations.
- When imagery is missing, use a flagged placeholder (cream tile with star + caption) — see `ui_kits/marketing-site/FeatureStack.jsx`. Do **not** invent illustrations.

### Spacing, radii, shadows
- **4 px spacing base** (--es-space-1…24).
- **Generous radii.** Cards use `--es-radius-lg` (16 px) to `--es-radius-2xl` (32 px). Pills use 999. Inputs use 10–12 px. Avoid sharp corners.
- **Soft warm shadows.** Built on `rgba(45, 41, 25, …)` — never blue ambient shadows. One branded `--es-shadow-yellow` exists for hover states on key primary actions but is used sparingly.

### Borders
- Default border: `var(--es-border)` (#E9E7DF) — 1 px, low contrast. Border is for *separation*, not decoration.
- Dashed borders only inside cards (meta-info dividers).
- **No left-border colored accent stripes on cards.** That visual cliché is banned here.

### Hover & press states
- Buttons: background lightens one step on `:hover`, then `translateY(1px)` on `:active`. Never scale.
- Cards: lift by `translateY(-2px)` with `var(--es-shadow-md)`.
- Links: yellow underline (`text-decoration-color: var(--es-yellow-500)`) that thickens or darkens on hover.

### Animation
- **Subtle.** All transitions 120–360 ms with `cubic-bezier(0.22, 1, 0.36, 1)`.
- Fade + small Y-translate. **No bounces, no spring physics, no scroll-jacking.**
- Esteemed AI agent surfaces may use a slow pulsing yellow glow on the star avatar; everything else is still.

### Transparency & blur
- `rgba(255,255,255,.85)` + `backdrop-filter: blur(12px)` on the sticky nav — only here.
- Inside ink cards: `rgba(255,255,255,.07)` chips on top of black to layer info softly. Never use blur inside content.

### Layout
- **1280 px container max-width** on marketing pages, with 32 px gutters.
- **3-column product grids.** 2-column feature stacks. 12-col underlying.
- App shells use a 248 px left sidebar + 300 px right rail (`Colleagues` feed pattern).

### Cards
- White background, `1 px var(--es-border)`, `16 px` radius, `22 px` padding, no shadow by default.
- Featured cards: solid yellow OR solid ink. Pick one — never both at once on the same surface.
- Star bleed on ink cards is the brand-recognizable move.

---

## ICONOGRAPHY

### Brand-owned
- **The five-point gold star** (`assets/icon-yellow-star.svg`) is the *only* truly proprietary mark. It appears in eyebrows, verification badges on Colleague avatars, app tiles, and large at low-opacity inside ink sections ("star bleed").
- **Star-in-yellow-square** (`assets/icon-yellow-square.svg`) is the app-icon-style mark — used at favicon, dock, and OG-image sizes.

### Functional icons
- **Lucide** (1.75 px stroke) is the system's UI icon set. Inlined via SVG in `_shared.jsx` (`<Icon name="home" />`, etc.). CDN: `https://unpkg.com/lucide-static@latest`.
- **No emoji** in product UI or marketing copy. The composer in `FeedView.jsx` shows three emoji on filter chips (🏷️📍💼) as the *only* exception, mirroring real-world public composer UIs — flag and replace with Lucide icons if you want to be strict.
- **No Material/Heroicons mixing.** Pick Lucide and stay.

### Substitutions flagged
- The Manrope-based wordmark may not be a 1:1 match to Esteemed's true logotype, which appears to be a custom mark. The PNG (`assets/esteemed-wordmark.png`) and SVG lockup (`assets/esteemed-lockup.svg`) are the **canonical brand assets** — render the logo with one of those, never typeset the word "esteemed" from Manrope as a substitute.

### Asset inventory (in `assets/`)
- `esteemed-lockup.svg` — primary parent mark: gold star + "esteemed" wordmark
- `esteemed-lockup-white.svg` — all-white variant for ink backgrounds
- `esteemed-lockup-black.svg` — all-black mono variant
- `esteemed-wordmark.png` — wordmark alone (rare)
- `icon-yellow-square.svg` — official app icon: white star on yellow tile
- `icon-yellow-star.svg` — gold star alone (favicon, badge)
- `colleagues-logo.png` — Colleagues sub-brand lockup (ramp mark + wordmark)
- `ramp-curves.svg` — the two-curve ramp graphic device
- `linkedin-cover-2026.svg` — reference: full LinkedIn cover composition
- `product-icons/` — 51×51 yellow-tile product/module icons (black line art on `#FEE546`, 4 px radius, 2 px stroke): `hire`, `create`, `acquire`, `intelligence`, `cloud`, `colleagues`, `curate`, `assist`, `connect`, `support`, `hcmgpt`. Use at their native rounded-square size; do not recolor the tile.

---

## UI Kits

- **`ui_kits/marketing-site/`** — full esteemed.io homepage recreation. Nav, hero, products grid, feature stack, CTA, footer.
- **`ui_kits/colleagues-app/`** — Colleagues product app. Sidebar + topbar + four screens (feed, jobs, profile, messages — Messages includes an Esteemed AI agent thread).

Each kit's `index.html` is interactive — open and click around.

---

## How to use this system

1. Link `colors_and_type.css` and `ui_kits/_shared.css`.
2. Load `ui_kits/_shared.jsx` (after React + Babel) for `<EsStar>`, `<Button>`, `<Pill>`, `<Avatar>`, `<Icon>`, `<Eyebrow>`.
3. Pull patterns from the UI kits rather than inventing new ones.
4. Use the asset files in `assets/` for logos and the star mark — do **not** redraw them.

---

## Open questions & caveats

- **Font substitution:** Manrope is the closest open-source match to the Esteemed wordmark; if Esteemed has an internal display face, please share so the system can be updated.
- **No codebase/Figma was attached.** UI kits were inferred from the public marketing site + product descriptions. Attach a codebase or Figma URL to dramatically improve the kits' fidelity (especially Aura ATS/CRM and Esteemed Hire admin views, which are not represented yet).
- **Imagery placeholders** are intentional. Drop in real photography before publishing anything.
