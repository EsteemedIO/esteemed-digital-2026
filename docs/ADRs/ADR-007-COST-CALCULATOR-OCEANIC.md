# ADR-007: Cost Calculator — Oceanic Platform Pricing

**Status:** Proposed
**Date:** 2026-06-08
**Extends:** ADR-002 (Platform Shell Design System)
**Source:** Design handoff OPEN_QUESTIONS Q6, Oceanic Platform pricing

---

## Context

The design handoff includes a cost calculator panel in Settings > Integrations, but flags the pricing logic as TBD with placeholder numbers. The Oceanic Platform (by Cetacean Labs) already has a calculator that can be referenced for the real pricing model.

---

## Decision

### Source the cost calculator from Oceanic Platform

The Settings > Integrations cost calculator should pull its pricing model from the existing Oceanic Platform calculator rather than inventing a new one. Oceanic is the infrastructure backbone — all Esteemed apps run on it — so its pricing inputs are the canonical source.

### Calculator location

Lives in **Settings > Integrations** as a panel alongside the tool-connection rows. It shows the user's current estimated cost based on their usage.

### Likely pricing inputs (per Esteemed Digital Pricing Matrix v1)

| Line Item | Driver | Reference |
|-----------|--------|-----------|
| Platform | Base subscription tier (SMB / Mid-Market / Institutional) | Pricing Matrix tiers |
| Seats | Per-seat cost x active users | Pricing Matrix |
| Connected sources | Number of active Connect (RAG) connectors | Connect product |
| Retrieval volume | RAG query volume / indexed document count | Connect / Echo |
| Hosting | Cloud Sites tier ($149-$4,999+) | Pricing Matrix hosting tiers |
| AI services | Trident (AI engine) usage | Pricing Matrix AI services |
| Support | Support tier / hourly rate ($110/hr) | Pricing Matrix support |

### Implementation approach

1. Reference the Oceanic Platform's existing calculator for the pricing model and formula
2. Wire the shell's calculator UI to display real inputs from the user's account
3. Show per-line-item breakdown with a total
4. Update dynamically as the user enables/disables integrations

---

## Open Items

- Get the Oceanic Platform calculator source (API endpoint or calculation logic)
- Confirm billing period (monthly vs. annual with discount)
- Confirm which line items are usage-based vs. fixed subscription
- Whether the calculator is read-only (informational) or interactive (plan selection)

---

## Consequences

- The calculator depends on account/billing data from the Oceanic Platform — needs an API or data feed.
- Pricing changes in Oceanic must propagate to the shell calculator.
- No need to design pricing logic from scratch — reuse what exists.
