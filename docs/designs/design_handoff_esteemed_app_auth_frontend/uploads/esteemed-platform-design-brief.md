# Esteemed Platform Shell — Design Brief

**Companion to:** `esteemed-platform-shell-spec.md`
**Downstream target:** Codex (Esteemed build agent)
**Date:** 2026-05-21

---

## Purpose

Take the attached spec and mockups from iterated working state to a production-ready design system and high-fidelity reference set.

**Validate and systematize. Do not redesign.**

The design has been through 10+ rounds of iteration to land on deliberate decisions. The goal of this pass is to elevate, complete, and codify — not to rethink. A fresh design pass that "improves" the layout, color usage, or component vocabulary will undo work, not move it forward.

---

## Inputs you have

- `esteemed-platform-shell-spec.md` — full written spec, source of truth
- Mockup PNGs from the iteration (latest versions only — older versions are obsolete):
  - `esteemed-shell-home-clean.png` — Home dashboard target
  - `esteemed-shell-apps-menu-v3.png` — App Switcher panel
  - `esteemed-shell-calendar.png` — Calendar Agenda view

**If the mockups conflict with the spec, the spec wins.** Specifically: the apps menu mockup currently labels the row-2-col-2 tile as "Assist · Agent builder." The correct name per spec is **"Agents · Marketing agents."** The "Try Assist" callout copy is also stale — use **"Try Agents"** per the spec. Treat the mockup as composition reference; use the spec for naming.

---

## What's locked (do not change)

1. **Six apps in the App Switcher** — Acquire, Hire, Create (row 1) / Intelligence, Agents, Connect (row 2). Names, positions, icons all locked.
2. **Yellow semantic system:**
   - Solid brand yellow `#FEE546` = primary actions only (Create button, chat send, Star icon, section markers)
   - Grey outline circle (`#b8b8b8` 1.5px) = secondary navigation (View all link, card drill-in CTA)
   - Muted yellow `#FCD72B` fill = hover state on secondary navigation; also tile hover glow in App Switcher
   - No yellow text, no yellow card backgrounds, no yellow body surfaces
3. **Carousel pattern for priority cards** — not grid. Three cards visible, pagination dots below, "View all" link in section header. Not a bento, not a list.
4. **White cards with pastel labels** — not pastel card backgrounds. Cards are white with 1px grey border `#e4e4e4`. The URGENT/IN 90 MIN/BY FRIDAY pills and source pills (HIRE/ACQUIRE) carry the color.
5. **No drop shadow on cards.** Border does the definition work.
6. **Hero composition** — date subtitle / greeting / Star input. The greeting stays short ("Good morning, Chris."). The "Three things need your call today..." subtitle line lives under the PRIORITIES section header — NOT in the hero.
7. **Star input has a visible soft drop shadow** for elevation. Critical that this renders cleanly.
8. **24px page padding** between LeftNav edge and content, and content right edge and shell.
9. **Pill shapes** (full radius) for Create button (left nav) and search input (top bar). Same shape language.
10. **Star icon** = AI involvement signal everywhere. Yellow 5-point star, used inline before section labels and as accent on AI-driven elements.

---

## What we need from you

1. **Design tokens as code.** CSS variables and/or Tailwind config covering colors, typography, spacing, radii, shadows. Codex consumes this directly.

2. **Component library with all states.** For each: default, hover, focus, active, disabled, loading. Components to cover:
   - PriorityCard, ArrowCTACircle, StarInput, IntegrationRow
   - AppSwitcher tile, Toggle/Switch
   - Pill (priority and source variants)
   - SectionHeader, PaginationDots, ViewAllCTA
   - LeftNav item, TopBar elements

3. **Missing states to design from scratch:**
   - Loading skeleton for priority cards
   - Empty state when a section has no items
   - Error state for cards (data failed to load)
   - First-run state for Settings > Integrations (welcome layout per spec section 6.4.1)

4. **Mobile breakpoints.** Full mobile design for the three primary screens. The spec is desktop-first; mobile is open territory.

5. **High-fidelity renders:**
   - Home (desktop + mobile)
   - App Switcher panel open (desktop + mobile)
   - Settings > Integrations (desktop + mobile)

6. **Surface inconsistencies.** Flag anywhere the spec and mockups disagree, or where the design vocabulary breaks down. Document them in `OPEN_QUESTIONS.md` — don't silently resolve them.

7. **Standalone HTML/CSS reference output** (optional but valuable) — Codex can hold this open in context while implementing.

---

## What's open / where you can decide

The spec leaves these intentionally open. Use design judgment:

- **Color values for the slate / teal / coral / purple / pink pastel ramps.** Only red, amber, and blue are fully specified. Match the same lightness/saturation logic for the others.
- **Typography weights and line heights** beyond what's in the spec
- **Settings sub-nav visual treatment** — vertical tabs, selected state, hover
- **Cost calculator panel** on Settings > Integrations (visual only — pricing logic is TBD; render a plausible placeholder)
- **Micro-interaction motion** — transitions, easing, durations
- **Iconography refinement** — the Lucide icons listed are sensible defaults; refine where they don't read clearly. The Connect "network nodes" icon was custom-drawn in SVG and could use a polished version.

---

## Output bundle expectations

The downloadable zip should contain:

- **Design system file** — `tokens.css` and/or `tailwind.config.js`
- **Component documentation** — per-component state inventory
- **HTML/CSS references** for the three primary screens
- **Mobile renders**
- **`README.md`** — what's in the bundle and how Codex should consume it
- **`OPEN_QUESTIONS.md`** — anything you flagged as ambiguous and worth resolving before build

When Codex receives this bundle alongside the spec, it should have everything needed to implement the shell without inventing design decisions.
