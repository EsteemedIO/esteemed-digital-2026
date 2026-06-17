# ADR-002: Platform Shell Design System & Authenticated Experience

**Status:** Proposed
**Date:** 2026-06-08
**Supersedes:** Extends ADR-001 (Account-Centric Homepage)
**Source:** `docs/designs/design_handoff_esteemed_app_auth_frontend/`

---

## Context

The esteemed.io marketing site is evolving into a full platform shell — the authenticated experience users see after login. A design handoff bundle has been produced containing a complete design system (tokens, components, prototype) derived from the platform spec, mockups, and brand system.

This ADR captures the architectural decisions for the shell's design system, navigation, and component framework.

---

## Decision

Adopt the design handoff bundle as the reference for the authenticated platform shell. The shell is built with:

- **Design tokens:** `tokens.css` / `tailwind.config.js` (`--es-*` namespace) as the single source of truth for colors, type, spacing, radii, shadows, and motion.
- **Component library:** HeroUI primitives (Dropdown, Modal, Switch, Chip, Popover, Tabs, Avatar) styled via the token system — HeroUI is the implementation library, not the design language.
- **Charts:** Recharts for all data visualization (Insights/Reports).
- **Typography:** Inter variable (100-900) only. Manrope is dropped.

### Navigation & Information Architecture

The left nav contains:

1. **New +** (renamed from "Create" to avoid collision with the Create app) — Calendly-style dropdown: Candidate, Event (Meeting/Interview), Contact, Company
2. **Nav order:** Home, Conversations, Calendar, Projects, Workflows, Agents, Integrations, Insights
3. **Footer:** Plans & features, Settings, Support

Top bar: search icon (command palette), app switcher grid, notifications bell, user avatar.

### Key Design Principles (locked)

- Solid yellow `#FEE546` = primary actions only
- Grey outline circles `#B8B8B8` = secondary navigation
- White cards with pastel labels (never pastel card backgrounds)
- No drop shadows on cards; Star input gets the one elevation shadow
- Star icon = AI involvement signal everywhere
- 24px page padding
- Pill shapes for Create button and search input

### Settings

Full-takeover modal (HeroUI `Modal`, backdrop blur, Esc/click-away to close). Should also be a real `/settings` route for deep-linking.

### Responsive

Desktop-first. Mobile: top bar + bottom tab bar + FAB, single-column carousel, stacked settings.

---

## Open Items

- Bottom tab bar IA for mobile (which 4 destinations)
- Search icon behavior (command palette recommended)
- Calendar launch scope: Agenda only, or Day/Week/Month too

---

## Consequences

- All new authenticated UI must reference `tokens.css` / the Tailwind config — no ad-hoc colors or type sizes.
- Components built to the state inventory in `components.html` (default, hover, focus, active, disabled, loading, empty, error, first-run).
- The marketing site (unauthenticated) and platform shell (authenticated) share the same Next.js app but diverge at the layout level based on session state.
