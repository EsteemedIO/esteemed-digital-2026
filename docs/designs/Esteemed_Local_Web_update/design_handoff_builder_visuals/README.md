# Handoff: Esteemed Builder Cards (Match / Work / Grow)

## Overview
Right-side visual illustrations for the cascading "Build / Customize / Automate / Responsive" cards on the Esteemed homepage. Each card is a 50/50 split: copy on the left, an animated stylized UI illustration on the right that depicts a different facet of the website builder (AI prompt, drag-and-drop editor, agent at work, multi-device preview).

## About the Design Files
The files in this bundle (`Builder Visuals.html`, `visuals.jsx`, `design-canvas.jsx`) are **design references created in HTML** — prototypes showing the intended look and behavior. They are not production code to copy verbatim.

The task is to **recreate these illustrations in the Esteemed codebase's existing environment** (React/Next.js based on the screenshots) using its established patterns, design tokens, and component library. The `design-canvas.jsx` file is just the side-by-side review harness — it is **not** part of the deliverable. Only the four visual components inside `visuals.jsx` (`PromptToSite`, `DragAndDrop`, `CascadingAgent`, `MultiDevice`) need to be ported, plus the surrounding card shell.

## Fidelity
**High-fidelity.** Final colors, type scale, spacing, ratios, and ambient animations are all in the prototype. Recreate pixel-perfect using the codebase's existing libraries and patterns.

## Screens / Views

There is one screen — a vertical stack of four full-width cards, each 1000×460 (16:7.4 ratio at this size; scale fluidly). The card shell is shared; only the right-side visual changes per card.

### Shared card shell
- **Container**: `border-radius: 18px`, `box-shadow: 0 24px 50px -20px rgba(15,17,21,0.18)`, `overflow: hidden`.
- **Grid**: `grid-template-columns: 1fr 1fr` — left = copy, right = visual.
- **Left pane padding**: `52px 56px`.
- **Eyebrow label** (top-left): `font-size: 13px`, `letter-spacing: 0.15em`, `font-weight: 600`, uppercase, `color: tone.sub`.
- **Title (h2)**: `font-size: 56px`, `font-weight: 700`, `letter-spacing: -1.5px`, `line-height: 1.05`, `margin-bottom: 18px`.
- **Body copy**: `font-size: 16px`, `line-height: 1.5`, `max-width: 380px`, `margin-bottom: 26px`, `color: tone.sub`.
- **CTA button**: `padding: 12px 22px`, `border-radius: 24px`, `font-size: 14px`, `font-weight: 600`. Background and foreground per tone.

### Card 01 — Build (Yellow)
- **Tone**: bg `#FFE15A`, text `#0F1115`, sub `rgba(15,17,21,0.7)`, btn bg `#0F1115`, btn fg `#FFFFFF`.
- **Copy**: eyebrow "BUILD" · title "Describe." · body "Tell our AI what you need. It drafts a real, brand-aware site in seconds — copy, layout, and all." · CTA "Try a prompt →"
- **Visual**: `PromptToSite` — a chat-style prompt card cascades into a live site preview, dotted connector + sparkles. The prompt card header shows the **white-on-yellow Esteemed star app icon** (22×22, `border-radius: 6px`, yellow bg, white star, 1px ink hairline) followed by "esteemed · Describe your site". The prompt body has "warm tones" highlighted with a translucent yellow background. The site preview is a small browser mock showing a dental-practice page with a peach-toned hero. Caret blinks at 1s steps.

### Card 02 — Customize (Gray)
- **Tone**: bg `#EDEDEA`, text `#0F1115`, sub `rgba(15,17,21,0.65)`, btn bg `#0F1115`, btn fg `#FFFFFF`.
- **Copy**: eyebrow "CUSTOMIZE" · title "Refine." · body "Drag, drop, edit anything inline. Hundreds of sections snap into place — no templates to fight." · CTA "See the editor →"
- **Visual**: `DragAndDrop` — left rail component palette (Hero / Pricing / Gallery / Form previews), main canvas showing a page with a hero block placed and a 3-up section, plus a dashed indigo "DROP HERE" zone. A phantom block is mid-drag at -3° rotation, drifting on a 2.4s loop. A black mouse cursor with white outline nudges in sync.

### Card 03 — Automate (Dark)
- **Tone**: bg `#1B1E25`, text `#FFFFFF`, sub `rgba(255,255,255,0.75)`, btn bg `#FFE15A`, btn fg `#0F1115`.
- **Copy**: eyebrow "AUTOMATE" · title "Ship." · body "AI agents handle SEO, images, forms, and publishing while you focus on the business." · CTA "Watch it work →"
- **Visual**: `CascadingAgent` — three cascading panels: agent log (back-left, with checklist of completed/active/pending tasks + 62% progress bar that pulses), code editor (middle, syntax-highlighted HTML being typed live with blinking yellow caret), and a finished site preview (front-right, dark browser). Indigo radial glow behind. The active step has a spinning `◐` icon and three indigo pulse-dots.

### Card 04 — Responsive (Paper)
- **Tone**: bg `#FAFAF8`, text `#0F1115`, sub `rgba(15,17,21,0.65)`, btn bg `#0F1115`, btn fg `#FFFFFF`.
- **Copy**: eyebrow "RESPONSIVE" · title "Everywhere." · body "One site, every screen. Preview desktop, tablet, and mobile side-by-side as you build." · CTA "Preview live →"
- **Visual**: `MultiDevice` — desktop browser (back), tablet at -2° rotation (middle), phone at +4° rotation with notch (front). All three render the same site (bold ink heading, indigo→purple hero image, yellow CTA). Yellow radial halo bottom-right. Black "ONE SITE · ANY SCREEN" badge bottom-left with green status dot.

## Interactions & Behavior
All four visuals run **looped ambient animations** — no user input required. Loops are CSS keyframes; total CPU cost is minimal.

- **PromptToSite**: caret blink (`1s steps(1) infinite`).
- **DragAndDrop**: phantom block drift `2.4s ease-in-out infinite` (translate -6px,-3px + rotate -4°); cursor nudge synced to drift.
- **CascadingAgent**: active-step icon spin `1.4s linear infinite`; three pulse-dots `1.2s ease-in-out infinite` with 0.2s/0.4s staggered delays; code caret blink `0.8s steps(1) infinite`; progress bar grows 58%↔66% on `2.4s ease-in-out infinite alternate`.
- **MultiDevice**: static (no motion).

If reduced-motion is set, freeze all animations.

## State Management
None. These are pure presentational illustrations.

## Design Tokens

### Colors
- **Yellow (brand)**: `#FFE15A`
- **Indigo**: `#6366F1` (primary), `#4F46E5` (deep)
- **Purple**: `#8B5CF6` (used in gradients with indigo)
- **Ink (near-black)**: `#0F1115`
- **Dark surface**: `#1B1E25`, `#15171C`
- **Paper (off-white)**: `#FAFAF8`, `#F4F4F2`
- **Light gray surface**: `#EDEDEA`
- **Hairline**: `rgba(15,17,21,0.06)` to `rgba(15,17,21,0.10)`
- **Status green**: `#22C55E`
- **Code accent (pink)**: `#F472B6`
- **Code accent (violet)**: `#A78BFA`
- **Code accent (amber)**: `#FBBF24`
- **Peach (preview accent)**: `#E8B57A`, `#F1DCC0`

### Spacing
- Card outer radius: 18px
- Inner panels: 12–14px radius
- Buttons / pills: 6–8px radius (24px for the big card CTAs)
- Card padding: 52px / 56px

### Typography
- **Sans stack**: `ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", sans-serif`
- **Mono stack**: `ui-monospace, SFMono-Regular, Menlo, monospace`
- **Title**: 56px / 700 / -1.5px
- **Body**: 16px / 400 / 1.5
- **Eyebrow**: 13px / 600 / 0.15em / uppercase

### Shadows
- Card: `0 24px 50px -20px rgba(15,17,21,0.18)`
- Inner panels (light): `0 12px 30px -16px rgba(15,17,21,0.18)` to `0 18px 40px -18px rgba(15,17,21,0.22)`
- Inner panels (dark): `0 30px 60px -20px rgba(0,0,0,0.6)`
- Floating drag block: `0 16px 30px -12px rgba(15,17,21,0.35), 0 0 0 1.5px #6366F1`

## Assets
- **Esteemed logo mark**: white star on yellow rounded square. The prototype uses a Unicode `★` glyph as a placeholder — replace with your real SVG mark.
- All other "imagery" inside the visuals (peach hero, indigo→purple hero, head-shots, etc.) is drawn with CSS gradients/shapes as stylized stand-ins. Do **not** swap in real photos for these — the abstraction is intentional; the visuals depict UI, not content.

## Files
- `Builder Visuals.html` — the canvas wrapper showing all four cards. Contains the `Card` shell component inline (search for `const Card = `).
- `visuals.jsx` — the four visual components (`PromptToSite`, `DragAndDrop`, `CascadingAgent`, `MultiDevice`) plus shared `Browser` and `Pill` primitives. **This is the main file to port.**
- `design-canvas.jsx` — review harness only; ignore for implementation.

## Implementation notes
- All four visuals are designed to fill a parent of any aspect ratio — they use percentage-based positioning with absolute children. Drop them into a `div` that's `position: relative` and they'll fill it.
- The Esteemed brand mark currently uses the `★` Unicode character with `color: white` on a `background: #FFE15A` square. Swap for the real SVG when you wire this up.
- Animations use plain CSS keyframes inside `<style>` tags scoped per component. Move these to your CSS modules / Tailwind plugin / styled-components per house style.
