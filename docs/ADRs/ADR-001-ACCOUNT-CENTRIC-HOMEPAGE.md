# ADR: Account-Centric Homepage with Unified Create/Hire Prompt

**Status:** Proposed
**Date:** 2026-05-12
**Supersedes:** N/A (extends current ChatHero implementation)

---

## Context

The current homepage is a marketing-first landing page with a chat-style prompt field, app-type buttons, and scroll-through sections. It works well for first-time visitors but doesn't serve returning users.

GoDaddy's recent redesign centers the experience around the user account: auto-login, "Pick up where you left off" cards, and contextual upsells. This creates stickiness and reduces friction for repeat visits.

We want to merge that account-centric approach with our existing prompt-driven hero, creating a single entry point that serves both new and returning users across our two primary actions: **Create** (build an app) and **Hire** (staff a team).

---

## Decision

Evolve the homepage hero into a dual-mode prompt field with account-aware personalization, implemented progressively across four phases.

---

## Design

### Prompt Field with Mode Toggle

The existing search/chat box becomes a unified prompt field with a **toggle** on the left side (similar to a search engine's scope selector):

```
┌─────────────────────────────────────────────────────────┐
│ [Create v]  A booking site for my dog grooming...       │
│                                                         │
│  [+]                                    [Build it ->]   │
└─────────────────────────────────────────────────────────┘
```

**Toggle modes:**

| Mode | Label | Sub-description | Behavior |
|------|-------|-----------------|----------|
| **Create** | App | Describe what you want to build | Routes to Esteemed Create with prompt |
| **Create** | Team | Describe who you need to hire | Routes to Esteemed Colleagues with context |

The toggle is a dropdown or segmented control at the left of the input. Switching modes changes:
- Placeholder cycling text (app prompts vs. hiring prompts)
- CTA button label ("Build it" vs. "Find talent")
- App type buttons below (app types vs. role types)

### App Type Buttons (Updated)

**Create (App) mode:**
- Mobile App, Website, Web App, Data Visualization, Slides, **Ecommerce** (new)

**Create (Team) mode:**
- Frontend Dev, Backend Dev, Designer, DevOps, Project Manager, Full-Stack

### Authenticated "Pick Up Where You Left Off" Section

For logged-in users, display **3 contextual cards** between the prompt and the rest of the page:

| Card | Content | Link |
|------|---------|------|
| **Recent workspace** | "Continue working on {project name}" | Deep link to Create project or Colleagues job |
| **Hire an expert** | "Get support for {project name}" or generic "Hire an expert" | Link to Colleagues / Support |
| **Rotational promo** | "Learn more about Esteemed Intelligence" / seasonal promo | Rotating product spotlight |

Cards are data-driven from the user's account state (recent projects, open jobs, etc.).

### Auto-Login

Leverage Keycloak SSO (per ADR-000-AUTH-ACCOUNT-INTEGRATION.md) to silently restore sessions. If a valid refresh token exists, the homepage renders the authenticated state immediately — no login click required.

---

## Implementation Phases

### Phase 1: Mode Toggle + Ecommerce Button
**Scope:** Frontend only, no auth required

- Add mode toggle (App / Team) to ChatHero prompt field
- Swap placeholder prompts, CTA label, and type buttons based on mode
- Add "Ecommerce" to app type buttons
- Team mode type buttons route to `/signup?redirect=colleagues`
- App mode continues routing to `/signup?redirect=create`

**Files:** `components/ChatHero.jsx`

### Phase 2: Authenticated Homepage State
**Scope:** Requires Keycloak integration (see ADR-000-AUTH-ACCOUNT-INTEGRATION.md)

- Detect authenticated session via Keycloak token
- Auto-login: silently restore session on page load
- Show user avatar / name in navbar when logged in
- Conditionally render "Pick up where you left off" card row below prompt

**Files:** `components/ChatHero.jsx`, `components/Navbar.jsx`, new `components/ResumeCards.jsx`, auth context/provider

### Phase 3: Account-Driven Resume Cards
**Scope:** Requires API for user project/job data

- Fetch recent workspaces from Create API and Colleagues API
- Populate the 3 contextual cards with real data:
  - Most recent project/workspace
  - Relevant hire/support CTA based on project state
  - Rotational promo (static at first, CMS-driven later)
- Fallback cards for users with no activity yet

**Files:** `components/ResumeCards.jsx`, API integration layer

### Phase 4: Personalization + Promo Rotation
**Scope:** CMS or config-driven content

- Rotational promo card pulls from a content source (CMS, config, or API)
- Promo rotation: Esteemed Intelligence spotlight, seasonal offers, feature announcements
- Analytics: track card clicks, mode toggle usage, prompt submissions by mode
- A/B test authenticated vs. anonymous homepage conversion

**Files:** `components/ResumeCards.jsx`, analytics integration, CMS config

---

## Consequences

**Positive:**
- Returning users get immediate value without scrolling
- Single prompt field serves both product lines (Create + Colleagues)
- Ecommerce addition addresses a common use case gap
- Progressive rollout — Phase 1 ships without any backend dependency

**Negative:**
- Mode toggle adds cognitive load vs. single-purpose prompt
- Resume cards require API endpoints that don't exist yet (Phase 3)
- Auto-login depends on Keycloak deployment timeline

**Mitigations:**
- Default to "App" mode so first-time experience is unchanged
- Phase 1 is purely frontend — can ship and validate before committing to backend work
- Resume cards degrade gracefully to static CTAs when no user data exists

---

## Products Section: Bento Grid with Category Filters

Replace the current flat 3x2 icon grid (Section 4 in `app/page.jsx`) with a GoDaddy-style bento layout.

### Category Filter Pills

Centered pill buttons above the grid that filter visible cards:

| Filter | Products shown |
|--------|---------------|
| **Build** (default) | Create, Cloud, Studio |
| **Hire** | Colleagues, Support |
| **AI Platform** | Agents, Intelligence |

Active pill gets `bg-ink text-white`; inactive pills get `border border-zinc-300 text-ink`.

### Bento Grid Layout

Each category view shows a **1 large + 2 small** card layout:

```
┌──────────────────────────┐  ┌─────────────────────┐
│                          │  │  Product B           │
│   Featured Product A     │  │  description + CTA   │
│   (large hero visual)    │  ├─────────────────────┤
│                          │  │  Product C           │
│   label + heading +      │  │  description + CTA   │
│   description + CTA      │  │                     │
└──────────────────────────┘  └─────────────────────┘
```

- Large card: ~60% width, full height, prominent visual area with product screenshot/illustration
- Small cards: ~40% width, stacked, with thumbnail visual on right
- Card backgrounds alternate between soft pastels (cream, light grey, light blue) matching brand palette
- Each card has: category label (uppercase, small), heading, description, and a CTA button (`bg-ink text-white rounded-full`)
- Cards animate in on filter change (fade + slight slide)

### Category Content Map

**Build:**
- Featured: **Esteemed Create** — "Build websites and apps by talking to AI" / CTA: "Start building"
- Card 2: **Esteemed Cloud** — "Hosting that scales with you" / CTA: "See plans"
- Card 3: **Studio** — "Code-level editing built into Create" / CTA: "Learn more"

**Hire:**
- Featured: **Esteemed Colleagues** — "The marketplace for 35,000+ vetted experts" / CTA: "Post a job"
- Card 2: **Esteemed Support** — "Expert human help for what you build" / CTA: "Get support"
- Card 3: **Enterprise Services** — "Dedicated teams for large-scale projects" / CTA: "Contact us"

**AI Platform:**
- Featured: **Esteemed Intelligence** — "The intelligence layer that powers it all" / CTA: "Explore"
- Card 2: **Esteemed Agents** — "AI agents that handle the work" / CTA: "Meet the agents"
- Card 3: **API & Integrations** — "Connect Intelligence to your stack" / CTA: "View docs"

### Implementation

Part of **Phase 1** — purely frontend, no auth required. Replace the `products` array and grid in `app/page.jsx` Section 4 with the new `ProductsBento` component.

**Files:** new `components/ProductsBento.jsx`, update `app/page.jsx`

---

## Build Target

This site is a **dynamic, account-centric application** — not a static marketing site. Next.js runs in SSR/dynamic mode. Pages are server-rendered with client interactivity. Auth state, user data, and personalized content are first-class concerns, not bolted-on extras.

---

## References

- `docs/ADRs/ADR-000-AUTH-ACCOUNT-INTEGRATION.md` — Keycloak SSO architecture
- `docs/ADRs/CLAUDE-CODE-SPEC-v1.5.md` — Current site spec and brand architecture
- GoDaddy account-centric homepage (2026 redesign) — inspiration for resume cards and auto-login
- `components/ChatHero.jsx` — Current prompt field implementation
