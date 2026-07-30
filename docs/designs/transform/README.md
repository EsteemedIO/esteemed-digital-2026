# Esteemed — Owner-Partner Landing Page

Deliverable package for `esteemed.io/partners`.

## What's in here

```
esteemed-partners-standalone.html   ← drop-in, self-contained page (all CSS/JS/images inlined)
source/                             ← editable source
  Owner Partner Landing.dc.html     ← the page markup + logic
  Blocks.jsx                        ← hero blocks icon (framer-motion hover animation)
  image-slot.js                     ← image placeholder component (Transform block)
  support.js                        ← component runtime
  assets/                           ← logos, headshots, product icons, brief PDF
  _ds/                              ← Esteemed design system (tokens, shared CSS, bundle)
```

## Fastest path to live

Upload `esteemed-partners-standalone.html` as-is. It has no external dependencies except
the framer-motion CDN script and works from any static host or CMS "raw HTML" block.

## Recommended path (for a real page on the site)

Rebuild the markup inside your Drupal template using `source/` as the reference, and keep
these design-system files as the styling foundation:

- `_ds/.../colors_and_type.css` — all `--es-*` tokens (color, type, spacing, radii, shadows)
- `_ds/.../ui_kits/_shared.css` — `.btn`, `.pill`, `.eyebrow`, `.avatar` classes

Everything else in the page is inline-styled, so it ports section by section without a
stylesheet migration.

## Before you publish — action items

1. **Booking link.** Both "Start a conversation" CTAs point to `#book`. Replace with the real
   calendar URL (search `#book`, or set the `calendarUrl` prop).
2. **Brief PDF.** "Download the full brief ↓" links `assets/valuation-arbitrage-brief.pdf`.
   Confirm this is the document you want publicly downloadable, or repoint it.
3. **Audio overview.** The "Listen — 20 min" block and nav link point to the NotebookLM share
   URL. If you'd rather not send traffic to Google, host the audio yourself and swap the href.
4. **Transform block image.** Currently `assets/team-meeting.jpg`. Swap if you have stronger
   photography (warm daylight, real professionals — per brand imagery rules).
5. **Disclaimer.** Footer legal language is included. Have counsel review before launch —
   the page shows forward-looking valuation figures.

## Notes

- Motion: sections fade + rise on scroll; the hero blocks icon animates on hover only.
- Responsive down to tablet. Recommend a mobile QA pass — the multi-column grids
  (comps table, trajectory table, 3-up product cards) will want single-column stacking
  below ~700px.
- Fonts (Inter + Manrope) load from Google Fonts in the standalone file.
