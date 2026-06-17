# ADR-009: App Activation, Checkout & Cost Calculator

**Status:** Proposed
**Date:** 2026-06-08
**Extends:** ADR-002 (Platform Shell), ADR-003 (App Switcher), ADR-007 (Cost Calculator)

---

## Context

The platform shell is chrome, not a reimplementation of the apps. Nav items and App Switcher tiles route to actual apps (Create, Hire, Acquire, etc.) at their respective URLs. The shell needs two bridge surfaces:

1. **App Activation** — the checkout/onboarding flow when a user clicks an app tile they haven't activated yet
2. **Cost Calculator** — the pricing calculator (sourced from Oceanic Platform) that shows what activating an app will cost

These are the shell's "store" and "checkout" — the UI that bridges browsing to using.

---

## Decision

### Shell-native vs. external app routing

| Surface | Type | Route |
|---------|------|-------|
| Dashboard / Home | Shell-native | `/dashboard` |
| Settings | Shell-native (modal) | `/dashboard/settings` |
| App Activation | Shell-native | `/dashboard/activate/[app]` |
| Calculator | Shell-native | `/dashboard/calculator` |
| Conversations | App route | External or embedded |
| Calendar | App route | External or embedded |
| Projects | App route | External or embedded |
| Workflows | App route (HCMGPT) | External |
| Agents | App route | External or embedded |
| Sources | App route (Connect) | External or embedded |
| Insights | App route | External or embedded |

Nav items for app routes should deep-link to the actual app with SSO (Keycloak session carries over). When an app isn't activated, the nav item or tile redirects to the activation page for that app.

### App Activation page (`/dashboard/activate/[app]`)

The activation flow for each app:

1. **Hero** — app icon tile, name, sublabel, one-line description
2. **Features** — what this app does (3-4 key capabilities)
3. **Pricing** — inline calculator showing what this app adds to the user's bill (pulls from Oceanic)
4. **Activation CTA** — "Activate {App}" yellow primary button
5. **Dependencies** — if the app requires other apps (e.g., Intelligence benefits from Connect), show them
6. **Post-activation** — redirect to the app with onboarding/first-run experience

Each of the 9 apps has its own activation page with app-specific content.

### Cost Calculator (`/dashboard/calculator`)

A standalone pricing page accessible from Settings > Integrations and from any activation page.

- Shows all 9 apps with toggle switches (on/off)
- Active apps show their cost contribution
- Real-time total updates as apps are toggled
- Line items: base platform, per-seat, per-app, usage-based (Connect retrieval, AI services)
- "Current plan" vs. "projected" comparison
- CTA: "Update plan" or "Talk to sales" for enterprise tiers
- Pricing model sourced from Oceanic Platform / Esteemed Digital Pricing Matrix

### App state model

Each app has one of three states per user:

| State | Tile appearance | Click behavior |
|-------|----------------|----------------|
| **Active** | Normal tile, colored border | Opens the app |
| **Available** | Normal tile, grey border | Goes to `/dashboard/activate/[app]` |
| **Coming soon** | Dimmed tile, "Coming soon" badge | No action / waitlist |

---

## Open Items

- Exact pricing per app (from Oceanic Platform calculator)
- Whether activation is instant or requires approval (enterprise plans)
- Free tier / trial period per app
- Payment integration (Stripe? Oceanic billing API?)
- App-specific feature lists for activation pages
- Which apps can be activated independently vs. require a bundle

---

## Consequences

- The shell is thin — it's auth chrome + store/checkout, not a full app reimplementation.
- All nav items for real app surfaces need correct deep-link URLs with SSO.
- App state (active/available/coming-soon) needs to be fetched from a user account API.
- The calculator becomes the commercial hub of the platform — it needs to be polished.
