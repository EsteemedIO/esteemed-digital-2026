# Pricing Change Order — Hosting Free-Rebuild Page Allowance + Overage

**Date:** 2026-07-03
**For:** Codex
**Target contract:** `esteemed-platform` (Stripe price/product/seat metadata, entitlements)
**Amends:** `esteemed-pricing-spec-v2.md` — §2 (per-site / managed-service · Hosting),
§3 (Stripe object mapping), §4 (entitlement mapping), §6 (open items)
**Everything not listed here is unchanged.**

---

## 0. Why this exists / what's actually changing

The v2 spec today does **not** define a page count for the Managed Hosting free
rebuild. It defines support hours (2 / 5 / 10) and treats the free rebuild as a **$0
line** on the Managed agreement with no page scope (§1.12). This change order **adds**:

1. A **free-page allowance** per Managed tier (how many pages the $0 rebuild covers).
2. A new **one-time page-overage SKU** ($100/page) for pages beyond the allowance.
3. A documented **soft-cap / Enterprise trip rule** for the $399 tier.

This is an addition, not a rewrite of existing page language — there was none.

**Supersedes** any page numbers seen elsewhere (the GTM doc's old 5/10/20, and the
interim 4/7/9). Canonical scheme is **5 / 12 / full-site + $100/page** below.

---

## 1. The scheme (canonical)

Customer-facing "Managed Web" = catalog **Managed Essential / Growth / Business**.

| Catalog tier | lookup_key base | Price | Free rebuild allowance | Page overage |
|---|---|---|---|---|
| Managed Essential | `managed_essential_*` | $149/mo | **5 pages** | $100/page |
| Managed Growth | `managed_growth_*` | $249/mo | **12 pages** | $100/page |
| Managed Business | `managed_business_*` | $399/mo | **full standard site — no page counting** (soft cap ~30) | none — pages not counted |
| Managed Enterprise | `managed_enterprise_custom` | Contact Sales | bespoke | bespoke |

Rules:
- The free rebuild stays a **$0 line on the Managed agreement — no Stripe product**
  (unchanged from §1.12). The allowance defines how many pages that $0 line covers.
- **Overage applies only to Essential and Growth.** Business and Enterprise never
  count pages.
- Overage is a **one-time** charge (part of the build event), not recurring.
- 12-month term still enforced via `subscription_schedule` (unchanged).

---

## 2. New Stripe object — add to §3

### Product
Use the existing **Esteemed Cloud** product (`module = hosting`). No new product.

### Price / lookup key (add one row to §3 "Prices and lookup keys")

| lookup_key | Amount | Interval | Basis |
|---|---|---|---|
| `hosting_page_overage` | $100 | one-time | per_page (per_unit; quantity = pages over allowance) |

Stripe config:
- `billing_scheme = per_unit`, unit amount $100.00, `usage_type` n/a (one-time).
- Invoiced as a one-time line at build time; `quantity` = number of pages beyond the
  tier allowance. Re-invoiceable later if the site grows and more pages are added.

### Price metadata for `hosting_page_overage`
```
module:      hosting
tier:        addon
interval:    one_time
seat_type:   one_time
founding:    false
entitlement: none        # billing line only, gates no feature
```

---

## 3. Metadata to ADD to existing Managed prices (§3)

Add these keys to the metadata of each Managed monthly **and** annual price so the
platform can display and enforce the allowance:

| Price(s) | `page_allowance` | `page_overage_applies` | `page_soft_cap` |
|---|---|---|---|
| `managed_essential_monthly`, `managed_essential_annual` | `5` | `true` | — |
| `managed_growth_monthly`, `managed_growth_annual` | `12` | `true` | — |
| `managed_business_monthly`, `managed_business_annual` | `unlimited_standard` | `false` | `30` |
| `managed_enterprise_custom` | `bespoke` | `false` | — |

No amount changes to any Managed price. Metadata-only edit.

---

## 4. Entitlement mapping — §4 (no new entitlement)

Page overage is a billing line, not a feature gate. `hosting_page_overage` grants
**no entitlement**. The existing rows stand:
- `managed_*` (essential/growth/business), `managed_enterprise_custom` → `module.hosting`, AI level `hosting_managed`.

The platform reads `page_allowance` / `page_overage_applies` / `page_soft_cap` from
price metadata (§3 above) for build-scoping and invoicing logic — not from an
entitlement key.

---

## 5. Platform enforcement rule (documented constant, not a Stripe object)

For `managed_business` ($399) "full standard site — no page counting":

- No page counting up to a **soft cap of ~30 pages**.
- A build trips to **Managed Enterprise (Contact Sales), bespoke quote** if ANY:
  - more than ~30 pages, **or**
  - multi-location / multi-site, **or**
  - logged-in areas / portals / member or account systems, **or**
  - non-trivial commerce (catalog + cart + checkout beyond a simple store), **or**
  - dedicated infra / SLA requirements.

Encode as a config constant (e.g. `HOSTING_BUSINESS_SOFT_CAP = 30`) plus the trip
conditions, so scoping is a rule, not a per-deal judgment call.

---

## 6. What is NOT changing (guardrails)

- **Self-serve Cloud** (`cloud_basic/plus/pro/multi`) — untouched.
- **Support-hour overage** (`hosting_support_overage`, $75–$85/hr) — untouched; this
  is a separate axis from page overage.
- **Managed monthly/annual amounts** ($149/$249/$399; annual = 2 months free) — untouched.
- **Free-rebuild mechanic** — still a $0 line on the agreement, no Stripe SKU, 12-mo
  term via `subscription_schedule`.
- **Qualification** (established business 2+ yrs, underperforming/absent site) — a
  sales rule; no billing change.

---

## 7. Also update the spec text (§6 open items)

In `esteemed-pricing-spec-v2.md`, resolve/replace the hosting open items to record:

> **Free-rebuild page allowance — RESOLVED: 5 / 12 / full-site.** Managed Essential 5
> pages, Growth 12 pages, Business full standard site (soft cap ~30). Overage
> `hosting_page_overage` $100/page one-time, applies to Essential/Growth only. Business
> does not count pages; 30+ pages or multi-location/portal/commerce → Managed
> Enterprise. Pages priced to close the recurring account, not for margin (Create
> makes extra pages near-free to produce).

---

## 8. Build checklist for Codex

1. Create Stripe price `hosting_page_overage` ($100, one-time, per_unit) under the
   existing Esteemed Cloud product, with the §2 metadata.
2. Add `page_allowance` / `page_overage_applies` / `page_soft_cap` metadata to the six
   Managed price objects per §3.
3. Add `HOSTING_BUSINESS_SOFT_CAP = 30` + trip conditions (§5) to platform config.
4. Wire build-scoping/invoicing to read allowance from metadata and bill overage via
   `hosting_page_overage` for Essential/Growth only.
5. Update `esteemed-pricing-spec-v2.md` §2/§3/§4/§6 to match this order.
