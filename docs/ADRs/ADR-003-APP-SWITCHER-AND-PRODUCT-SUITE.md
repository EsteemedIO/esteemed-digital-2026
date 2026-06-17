# ADR-003: App Switcher & Product Suite — 9 Apps

**Status:** Proposed
**Date:** 2026-06-08
**Extends:** ADR-002 (Platform Shell Design System)
**Source:** Design handoff OPEN_QUESTIONS Q1, Q2; user direction on Cloud and Connect

---

## Context

The design handoff locked 6 apps in a 2x3 grid. During review, three additional products were confirmed as standalone apps that belong in the switcher:

1. **Curate** (CMS/DAM) — added in the design handoff as the 7th tile
2. **Cloud** (Cloud Sites) — integrated with Create but also usable standalone for hosting-only customers
3. **Connect** (RAG) — originally positioned as an integration surface, but confirmed as a standalone RAG add-on product

This brings the total to **9 apps** in the switcher, matching the brand's 9 products/services.

---

## Decision

### App Switcher: 9 apps in a 3x3 grid

| Row | Col 1 | Col 2 | Col 3 |
|-----|-------|-------|-------|
| 1 | Acquire (CRM) | Hire (ATS) | Create (Sites/Apps) |
| 2 | Intelligence (Memory/Reasoning) | Agents (Marketing Agents) | Connect (RAG) |
| 3 | Curate (CMS · DAM) | Support (Expert Assistance) | Cloud (Integrated Hosting) |

### Key decisions

- **Grid:** Full 3x3 resolves the orphan-row problem from the 7-app layout (Q1). Row 3: Cloud, Curate, Support.
- **App order:** Follows the brief's locked order for row 1-2 (Acquire, Hire, Create / Intelligence, Agents, Connect). Row 3 additions placed by affinity: Cloud near Create (both "build"), Curate alongside.
- **Connect is a standalone app**, not just an integration surface. It is the Esteemed RAG product (Onyx fork) that customers can subscribe to independently. It also powers the retrieval layer for other apps (Intelligence, Agents, Conversations).
- **Cloud is a standalone app.** While tightly integrated with Create (sites built in Create deploy to Cloud), Cloud Sites can be used independently by customers who only need managed hosting (migrations, DNS, CDN, SSL). Pricing per `Esteemed_Digital_Pricing_Matrix_v1.md`.
- **Support is the TAL API surface**, connected to Colleagues. It's the in-platform interface for staffing support — ticket management, resource requests, and talent operations powered by the Talent API (TAL). Colleagues team owns the backend; the shell exposes the UI.
- **"Assist" is fully retired** — replaced by Agents in name, tile, and all callout copy.

### Naming convention (confirmed)

| App | Full name | Sublabel |
|-----|-----------|----------|
| Acquire | Esteemed Acquire | CRM |
| Hire | Esteemed Hire | ATS |
| Create | Esteemed Create | Sites · apps |
| Intelligence | Esteemed Intelligence | Memory · reasoning |
| Agents | Esteemed Agents | Intelligent Agents |
| Connect | Esteemed Connect | Retrieval |
| Curate | Esteemed Curate | CMS · DAM |
| Support | Esteemed Support | Expert Assistance |
| Cloud | Esteemed Cloud | Integrated Hosting |
| HCMGPT | HCMGPT, by Esteemed | *(external link)* |
| Colleagues | Colleagues, by Esteemed | *(external link)* |

HCMGPT and Colleagues are external links in the switcher panel (with arrow icons), not tiles in the grid.

### Pastel ramp assignments

Each app gets a semantic color ramp for labels/pills:

| App | Ramp | fg | bg |
|-----|------|----|----|
| Hire | amber | `#92610F` | `#FBF1DD` |
| Acquire | blue | `#2A6FDB` | `#E2ECFA` |
| Create | teal | `#0E7490` | `#DBEFF3` |
| Intelligence | purple | `#6D28D9` | `#EDE7FC` |
| Agents | coral | `#C2410C` | `#FCE9E0` |
| Curate | pink | `#BE2065` | `#FBE2EE` |
| Connect | slate | `#475569` | `#EDF0F4` |
| Cloud | green | `#15803D` | `#DCFCE7` |
| Support | indigo | `#4338CA` | `#E0E7FF` |

---

## Open Items

- All 9 tile SVGs are now official (in `esteemed-shell-bundle/assets/`)
- Confirm pastel ramp colors for Cloud (green) and Support (indigo)

---

## Consequences

- App Switcher grid changes from 2x3 to 3x3.
- Cloud, Connect, and Support each need product pages on esteemed.io (like the existing `/products/colleagues` page).
- Connect's dual role (standalone product AND retrieval layer for other apps) must be clear in the UI — the top-level "Integrations" nav item is the connector management UI for Connect's data sources, distinct from Settings > Integrations.
