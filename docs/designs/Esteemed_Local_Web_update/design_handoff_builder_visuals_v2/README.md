# Handoff: Esteemed — Builder Visuals v2

## Overview
A set of four hi-fidelity marketing visuals for the Esteemed website builder narrative —
each one paired to a step (**Create / Customize / Manage / Grow**) and rendered as a side-by-side
"pastel card" canvas. Each card shows the corresponding product moment as a realistic in-app mock
(prompt-to-site, drag-and-drop editor, agent-at-work, multi-device preview).

These visuals are intended for use on the marketing site or in a deck — not as a real product surface.

## About the Design Files
The files in this bundle are **design references created in HTML** — React + inline Babel prototypes
showing the intended look. They are NOT production code to copy directly.

The task is to **recreate these HTML designs in the target codebase's existing environment**
(Next.js / React / whatever stack the marketing site uses) using its established patterns and libraries.
Lift exact values — hex codes, spacing, typography, copy — but rebuild the components properly.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and visual composition are intended.
Recreate pixel-perfectly using the target codebase's existing component library and design tokens.

## Active iteration: Card 04 (Grow)
**The 4th card visual is the active iteration spot.** Right now it uses `<MultiDeviceV2 />` —
a multi-device site preview (desktop + mobile of a fictional "FIELDNOTES" journal site). There is
also a `HumanSupportV2` component defined in `visuals-v2.jsx` that uses a real photo of a support
specialist (`assets/grow-human.png`) with floating expert chips and a name/title overlay — this is
the *alternative* direction we explored. It's wired up in the file but not currently used by Card 04.

When iterating on Card 04: swap `<MultiDeviceV2 />` → `<HumanSupportV2 />` in `Builder Visuals v2.html`
to A/B between the two directions, or replace `assets/grow-human.png` with a different photo.

## Layout — DesignCanvas
The whole page is a horizontal canvas with two sections:

1. **Hi-fi pastel cards** — four 1100×620 cards in a row, each with the structure described below
2. **Standalone visuals** — same four visuals at 500px wide, no card chrome (for use as inline marketing imagery)
3. **Pastel palette swatches** — the 5-color pastel system

Pan/zoom is provided by the `DesignCanvas` host component. End consumers will only ever see the
individual card or visual rendered on its own — the canvas is just a presentation tool.

## Card structure (CardV2)
Every card is a 1100×620 rectangle with a 2-column grid:

- **Left column (50%):** vertical layout with 52px/56px padding
  - Top: small uppercase label (e.g. "CREATE"), 13px, letter-spacing 2px, weight 600, color `rgba(40,40,40,0.65)`
  - Bottom: title (56px, weight 700, letter-spacing -1.5, line-height 1.05), copy (16px, line-height 1.5, max-width 380px), CTA button (12/22px padding, border-radius 24px, dark fill)
- **Right column (50%):** the visual mock, full-bleed against the pastel background

Card border-radius: 18px. Box-shadow: `0 24px 50px -20px rgba(26,26,26,0.18)`.

## Card content

| # | Tone | Label | Title | Copy | CTA | Visual |
|---|------|-------|-------|------|-----|--------|
| 1 | Butter `#FFF4B8` | CREATE | Describe. | Tell our AI what you need. It drafts a real, brand-aware site in seconds — copy, layout, photography and all. | Try a prompt → | `<PromptToSiteV2 />` |
| 2 | Sky `#E0E9F2` | CUSTOMIZE | Refine. | Tailor your site by chatting with the agent — no templates to fight. | See the editor → | `<DragAndDropV2 />` |
| 3 | Lilac `#E4DBF0` | MANAGE | Ship. | You focus on the business, count on us for responsive design, hosting, daily backups, fast everywhere, all included. | Watch it work → | `<CascadingAgentV2 />` |
| 4 | Mint `#DCEDE0` | GROW | Supported by humans. | You create it. Real experts from our 35,000-strong network help you grow it. | Meet the network → | `<MultiDeviceV2 />` (active) / `<HumanSupportV2 />` (alt) |

## Visuals — what each one shows

### `PromptToSiteV2` (Card 01)
- A "prompt input" card at top-left with a blinking cursor and a "Generate" pill
- An animated dotted arrow from the prompt down-right to the generated site preview
- A realistic juice/wellness brand site preview (FRESH&CO) — full nav, hero, product cards
- Soft butter halo behind everything

### `DragAndDropV2` (Card 02)
- A site editor canvas (Northbloom florist) with a drag handle on a section being repositioned
- A "ghost" placeholder rectangle showing where the section will land
- A floating "Story · being placed" indicator chip in periwinkle blue
- Faint grid background to communicate "editor mode"

### `CascadingAgentV2` (Card 03)
- A vertical agent task list (5 rows) with checkmarks, animated progress bar at 72%
- A "Generate logo" / "Create social" pair of agent action chips floating to the right
- Behind it, a partially-built brand site (Nocturnal Animal Candles) emerging
- Animated pulse dots on in-progress task items

### `MultiDeviceV2` (Card 04 — active)
- A desktop browser frame showing a journal site (FIELDNOTES) on the left
- An iPhone frame showing the mobile version of the same site on the right
- Both frames sit on the mint background with a soft halo

### `HumanSupportV2` (Card 04 — alternative)
- A polaroid-style photo card centered with `assets/grow-human.png`, slightly tilted
- A name/title chip overlaid on the photo (bottom-left): "Maya Chen / Brand designer · Brooklyn"
- "Online" pill (green) overlaid bottom-right of the photo
- Two floating expert chips (James Reyes / SEO strategist; Aida Tovar / Copywriter)
- A "35,000+ Vetted experts" black counter card top-right
- An avatar cluster with "+12 available now" bottom-left
- All chip props are configurable: `name`, `title`, `showOnline`, `showJames`, `showAida`, `showCounter`, `showAvatars`

## Interactions & Behavior
- Most visuals have subtle ambient motion: pulsing dots, a progress bar that breathes between 68%-76%, a flame flicker on the candle product. All implemented as CSS keyframe animations — keep these in the final implementation if budget allows; they make the static visuals feel alive.
- The cards themselves are static (no hover/click states defined for the marketing usage).
- Tweaks panel is wired up via `tweaks-panel.jsx` but most controls are stubs — the production version doesn't need it.

## Design Tokens

### Pastel palette (the system)
| Name | Hex | Use |
|---|---|---|
| Butter | `#FFF4B8` | Card 01 background |
| Butter Deep | `#FEE89B` | Butter accents |
| Sky | `#E0E9F2` | Card 02 background |
| Lilac | `#E4DBF0` | Card 03 background |
| Mint | `#DCEDE0` | Card 04 background |
| Mint Deep | `#B8DCC2` | Mint accents |
| Blush | `#F8DAD0` | Reserved for future cards |
| Cream | `#F4F0E6` | Neutral backdrop |

### Neutrals
| Name | Hex | Use |
|---|---|---|
| Ink | `#282828` | All primary text, button backgrounds |
| Ink 65% | `rgba(40,40,40,0.65)` | Body copy, secondary labels |
| Ink 5-6% | `rgba(26,26,26,0.05-0.06)` | Hairline borders |
| White | `#FFFFFF` | Inverse text on dark, surface elevated |

### Accent colors used inside visuals
| Hex | Use |
|---|---|
| `#FEE546` | Yellow agent star (Card 01 prompt avatar) |
| `#3CC97A` | "Online" status green (Card 04 alt) |
| `#7C5BC9` | Agent purple (Card 03 chips) |
| `#3F5BA8` | Drop-zone blue (Card 02 ghost) |
| `#2F4A38` | FIELDNOTES forest green (Card 04 desktop wireframe) |
| `#1F5A52` | Northbloom dark green button (Card 02) |
| `#E8624D` | James chip orange (Card 04 alt) |

### Typography
- **Sans:** `ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", sans-serif`
- **Serif (used inside the brand mocks):** `Georgia, "Times New Roman", serif`
- Card title: 56px / weight 700 / letter-spacing -1.5 / line-height 1.05
- Card copy: 16px / line-height 1.5 / weight 400
- Card label: 13px / letter-spacing 2 / weight 600 / uppercase
- CTA button: 14px / weight 600 / padding 12×22 / border-radius 24

### Spacing & radius
- Card padding: 52px (vertical) / 56px (horizontal)
- Card border-radius: 18px
- Inner UI surface radius: 12-14px
- Pill / chip radius: 12px (or fully rounded for buttons)

### Shadows
- Card: `0 24px 50px -20px rgba(26,26,26,0.18)`
- Floating chip: `0 14px 30px -10px rgba(26,26,26,0.2), 0 0 0 1px rgba(26,26,26,0.05)`
- Photo card: `0 30px 60px -20px rgba(26,26,26,0.35), 0 0 0 1px rgba(26,26,26,0.06)`

## Assets
- `assets/grow-human.png` — 862×862 photo used in `HumanSupportV2`. Currently a stock-style portrait of a woman with headphones smiling. **The team explicitly wants this image to be swappable.** When porting, store it as a CMS asset or a simple prop on the Grow card component.

## Files in this bundle
- `Builder Visuals v2.html` — entry point; wires the four cards onto a DesignCanvas
- `visuals-v2.jsx` — the five visual components (`PromptToSiteV2`, `DragAndDropV2`, `CascadingAgentV2`, `MultiDeviceV2`, `HumanSupportV2`) plus pastel palette `P` and shared CSS keyframes
- `design-canvas.jsx` — the pan/zoom canvas host with `DCSection` and `DCArtboard` (presentation-only; not needed in production)
- `tweaks-panel.jsx` — the tweaks panel scaffolding (not needed in production)
- `assets/grow-human.png` — referenced by `HumanSupportV2`

## Recommended implementation approach
1. Build `<BuilderCard tone label title copy cta visual />` as a real component matching the structure described above.
2. Build each of the four visual components (`PromptToSite`, `DragAndDrop`, `CascadingAgent`, `MultiDevice`, plus optional `HumanSupport`) as standalone components — they're each ~150-300 lines of straightforward absolutely-positioned JSX. Lift the markup from `visuals-v2.jsx` and replace inline styles with the codebase's styling solution (CSS modules, Tailwind, styled-components — whatever's already in use).
3. Map the four cards into the marketing page in a vertical or horizontal scroll — both work; the design works at any scale ≥ 600px wide.
4. Keep the CSS keyframe animations (`@keyframes pulseV2`, `growV2`, `flicker`, `dotV2`). They're defined inline at the top of `visuals-v2.jsx`.
5. Optimize the human photo (or replace it). Current PNG is 712 KB; a 600px WebP would be under 80 KB.
