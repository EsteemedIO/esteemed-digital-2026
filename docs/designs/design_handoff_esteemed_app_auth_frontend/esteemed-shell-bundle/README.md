# Esteemed Platform Shell — Design Bundle

Production-ready design system + high-fidelity references for the Esteemed Platform Shell.
Built by validating and systematizing the spec + iterated mockups — **not** redesigning them.

**Companion to:** `esteemed-platform-shell-spec.md` (source of truth)
**Downstream target:** Codex (Esteemed build agent)

---

## ⚠️ Read first — what this bundle was built from

The written spec `esteemed-platform-shell-spec.md` was **not provided** when this pass ran.
This bundle was derived from:

- `esteemed-platform-design-brief.md` (the brief + its 10 locked decisions)
- The three latest mockup PNGs (Home, App Switcher v3, Calendar Agenda)
- The Esteemed Design System (brand color, type, star mark, voice)
- The product icon SVGs (Acquire, Hire, Create, Curate)

Everywhere a decision would normally come from the spec, it was **inferred and flagged** in
`OPEN_QUESTIONS.md`. **Drop the spec in and re-run to lock those down** — especially the
Integrations first-run copy (spec §6.4.1) and the cost-calculator pricing logic.

---

## What's in the bundle

| File | What it is | How Codex uses it |
|---|---|---|
| `tokens.css` | **The design system.** All colors, type, spacing, radii, shadows, motion as CSS custom properties. Locked vs. derived values annotated inline. | Import once at app root; reference `var(--es-*)`. |
| `tailwind.config.js` | The same tokens as a Tailwind theme (`es` namespace). | Use instead of `tokens.css` if the build is Tailwind-based. Values are identical. |
| `shell.css` | Component + layout styles for every shell element. | The component CSS reference. Port to your component framework. |
| `icons.js` | Inline icon sprite (Lucide-derived) + the brand star. Curate glyph = the monochrome line version of the provided brand tile. | Reference for which glyph each element uses. |
| `index.html` | Bundle hub — links the prototype + references. | Start here. |
| `Esteemed Shell.html` | **The clickable prototype.** Whole shell wired: view switching (Home · Conversations · Calendar), Create dropdown, App Switcher (7 apps, your real icons), Settings full-takeover modal, live toggles + cost calc. | The interactive reference — click through it. |
| `app.js` | Prototype interactions (view switching, menus, modal, toggles, persistence). | Behavior reference. |
| `components.html` | Component library — every state, incl. loading / empty / error / first-run. | The state inventory. Open alongside the code. |
| `assets/` | Brand lockup, gold star, product tiles (your `acquire/hire/create/curate`, plus composed `intelligence/agents/connect`). | Use these files directly — do not redraw. |
| `OPEN_QUESTIONS.md` | Every spec/mockup conflict + inferred decision + the HeroUI mapping table. | Resolve before build. |

All screens are **responsive** — resize below 760px to see the mobile breakpoint (top bar +
bottom tab bar + FAB, single-column carousel, stacked settings).

---

## The system in one screen

- **One brand color, used as a system, not decoration.** Solid yellow `#FEE546` is *primary
  actions only* (Create, send, Star icon, section markers, toggle-on, current-app border).
  Grey `#B8B8B8` outline circles are *secondary navigation*. Muted yellow `#FCD72B` is the
  *hover* on secondary nav and the App Switcher tile glow. Never yellow text, never yellow card
  backgrounds.
- **White cards carry no color — pastel *labels* do.** Cards are white, 1px `#E4E4E4`, no
  shadow. The pills (URGENT / IN 90 MIN / source) carry the ramp color.
- **The Star is the AI signal**, gold, before every section label and on every AI surface.
- **One elevation on Home:** the Star input's soft drop shadow. Everything else is border-defined.
- **Manrope ExtraBold** for the greeting + page titles; **Inter** everywhere else.

---

## Components covered (with states)

PriorityCard · ArrowCTACircle · StarInput · IntegrationRow · AppSwitcher tile · Toggle/Switch ·
Pill (priority + source) · SectionHeader · PaginationDots · ViewAllCTA · LeftNav item · TopBar
(search, apps, bell, avatar). Each: default · hover · focus · active · disabled · loading where
applicable. Plus the four designed-from-scratch states: **loading skeleton, empty, error,
first-run**.

---

## How to consume (suggested order)

1. Open `index.html`.
2. Read `OPEN_QUESTIONS.md` — resolve or accept each flag.
3. Wire `tokens.css` (or `tailwind.config.js`).
4. Build from `components.html` (states) + `Esteemed Shell.html` (composition + behavior).
5. Keep the spec open as source of truth; this bundle never overrides it.
