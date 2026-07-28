# Esteemed Domains — Build Spec (OpenSRS)

**Date:** 2026-07-07
**Status:** Build-ready except premium/.ai amounts (TBD on wholesale list) and go-live (blocked on signed agreement, §7).
**Build agent:** Codex (only)
**Owner contract:** `esteemed-platform` (Stripe price/product/seat metadata, entitlements, TLD retail map, lead routing)
**Consumes:** `esteemed-pricing-spec-v2.md` (canonical catalog — do not invent names/keys outside it)
**Reseller backend:** OpenSRS (Tucows)

> Domain registration/renewal/transfer, fully white-labeled, billed through Stripe. Registration
> (OpenSRS) is separate from DNS (Cloudflare/DO) is separate from Hosting. Standalone-purchasable;
> composes with Hosting/Curate, never required by them.

---

## 1. Human prerequisites (Codex cannot run without these)

| Prerequisite | Purpose | Status |
|---|---|---|
| Signed **OpenSRS reseller agreement** + account | Enables live reseller access | pending |
| **API credentials — OT&E (test) + live** | Build/test on OT&E first, then live key | pending |
| **OpenSRS wholesale price list** | Margin floor; sets premium/.ai amounts | pending (blocker, §7) |
| **Default DNS decision** — Cloudflare or DO | Default nameservers on registration | pending |
| Domains section appended to `esteemed-pricing-spec-v2.md` | Canonical spec Codex consumes | pending |

Codex builds the full integration against **OT&E test creds + a placeholder price map** in
parallel with these. Only go-live waits.

---

## 2. OpenSRS API integration

Build an API client (against the **OT&E test environment first**), white-labeled end to end.
Confirm exact call signatures against current OpenSRS API docs — the surface has evolved.

Required operations:
- Availability lookup + suggestion
- Register
- Renew
- Transfer in / transfer out
- WHOIS / contact management
- Nameserver management
- Auto-renew toggle
- **Contact Privacy — on by default (free)**
- TLD price-list sync (pull wholesale for the margin guardrail)

White-label: privacy on; **no Tucows/OpenSRS branding surfaced anywhere** the customer sees.

---

## 3. Pricing / margin logic (`esteemed-platform`)

- **TLD → retail map** sourced from **GoDaddy standard (renewal) list prices** — flat, every-year,
  no first-year promo. Snapshot refreshed periodically; anchor to *standard*, never rotating promos.
- **Guardrail: never sell below OpenSRS wholesale.** GoDaddy promo prices can dip under wholesale —
  which is exactly why we map to standard, not promo.
- `domain_standard_annual` = **$19.99** (set). Premium / .ai bands = **TBD** until wholesale list in hand.
- Bands (`standard` / `premium` / `ai`) are **metadata/entitlement grouping only — NOT the price
  source.** Price comes from the per-TLD map.

---

## 4. Stripe catalog

**Product:** `Esteemed Domains`, metadata `module = domains`.

**Pricing mechanic — do NOT pre-build hundreds of SKUs.** Create the Stripe Price **dynamically
via `price_data`, or create-and-cache on first sale** of a given TLD, off the TLD retail map.

| Rule | Spec |
|---|---|
| Registration | Per-TLD price from the map; each domain = a yearly-recurring subscription item; `usage_type = licensed`, `quantity` = domains in band |
| Auto-renew | On by default |
| **Transfer** | Bills at the **matching band's registration price** — **no separate `domain_transfer` Price object** |
| **Privacy** | Free **feature flag** — **NOT a Stripe Price object** |
| Standard retail | $19.99 (`domain_standard_annual`) |
| Premium / .ai | Bands exist; amounts TBD → create as drafts or leave unpriced until wholesale list lands |

**Price metadata (every Price):**
```
module:      domains
tier:        standard | premium | ai
interval:    year
seat_type:   licensed_per_seat
founding:    false
entitlement: module.domains
```

---

## 5. Entitlement

| Grants | Gates |
|---|---|
| `module.domains` | The domain-management surface in **Settings only** — **not** app/AI features. It's a billed service, not a capability tier. |

---

## 6. Boundaries

- **Registration (OpenSRS) ≠ DNS (Cloudflare/DO) ≠ Hosting.** Keep the layers separable; a customer
  can register without hosting, and host without registering here.
- **Cloudflare Registrar = Esteemed's own internal domains only.** It does not permit markup/resale —
  it is **not** the resale path. The resale path is OpenSRS, full stop.

---

## 7. Blocker

Signed **OpenSRS reseller agreement + wholesale price list**. Without it: no live API creds, and no
margin floor for the premium/.ai bands. Everything else builds against OT&E + placeholder map now;
go-live flips on when this lands.

---

## 8. Build order

1. OpenSRS API client on **OT&E test** (availability → register → renew → transfer → WHOIS →
   nameservers → auto-renew → privacy-on).
2. TLD retail map in `esteemed-platform` (GoDaddy-standard source) + **wholesale-floor guardrail**.
3. Stripe: `Esteemed Domains` product + **dynamic `price_data`/create-and-cache** pricing + `module.domains` entitlement.
4. Wire checkout → registration; auto-renew; privacy free.
5. Swap OT&E → live creds; fill premium/.ai amounts from wholesale list. **Go live.**
