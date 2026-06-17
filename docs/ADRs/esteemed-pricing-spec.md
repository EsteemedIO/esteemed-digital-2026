# Esteemed Pricing Spec — Acquire, Hire & Curate

**Date:** 2026-06-08
**Status:** Locked for Stripe build (Esteemed App surface)
**Owner contract:** `esteemed-platform` (Stripe price/product/seat metadata, entitlements)
**Build agent:** Codex

> Single source of truth for the Acquire, Hire, and Curate Stripe catalog. No app invents its own
> price names, lookup keys, or entitlement strings. All values below are canonical.
>
> Two pricing axes: **per-seat** (Acquire, Hire, Suite, Intelligence) and **per-workspace**
> (Curate — sites + traffic + editor seats, the Acquia / WP Engine / Payload model).

---

## 1. Decisions locked

1. **Per-seat = per actual user (recruiter / rep), not per total headcount.** Loxo's model; the
   deliberate attack on Greenhouse and Lever, which bill on company headcount.
2. **Four-tier shape, mirroring Loxo: Free → Starter → Pro → Enterprise.** Free drives adoption;
   Starter is the no-AI workflow tier; Pro is the AI tier; Enterprise is sales-led.
3. **AI is the premium, and it is published.** Loxo gates AI behind a sales call at $269–$500+/seat.
   Esteemed Pro is published at $249 with full Star AI — transparent AND under Loxo's AI floor.
4. **Split the AI by autonomy, not access.** Starter = Chat-level AI; Pro = Assist (AI drafts and
   recommends, human approves); a higher Autonomous tier / Enterprise = Star runs work end-to-end.
   Autonomous execution is the premium the frontier providers throttle and vertical AI charges most
   for — it is not given away in Pro.
5. **Curate prices per workspace, not per seat** — sites, traffic, and editor seats, following
   Acquia / WP Engine / Payload Cloud. It is an AI-native content hub, not managed hosting.
6. **Founding = ~20–35% off list, locked 12 months,** then converts to list. Anchored to committed
   rates: Starter founding $99/seat (TheraEd base seat), Pro founding $199/seat (Intelligence anchor).
7. **Annual billing = 2 months free** (10× monthly).
8. **Acquire and Hire at price parity.** Acquire Pro is priced to the AI-native CRM market, not
   commodity HubSpot ($100/seat). Revisit if Acquire should undercut toward HubSpot.

---

## 2. Product catalog

### Per-seat products

| Module | Tier | Monthly (list) | Annual (list) | Founding (12-mo) | Seat basis |
|---|---|---|---|---|---|
| **Acquire** (CRM/TRM) | Free | $0 | $0 | — | 1 user |
| | Starter | $149/seat | $1,490/seat/yr | $99/seat | per user |
| | Pro | $249/seat | $2,490/seat/yr | $199/seat | per user |
| | Enterprise | custom | custom | — | per user |
| **Hire** (ATS) | Free | $0 | $0 | — | 1 user |
| | Starter | $149/seat | $1,490/seat/yr | $99/seat | per user |
| | Pro | $249/seat | $2,490/seat/yr | $199/seat | per user |
| | Enterprise | custom | custom | — | per user |
| **Suite** (Acquire + Hire, Pro) | Bundle | $399/seat | $3,990/seat/yr | $319/seat | per user |
| **Intelligence** (add-on) | — | $199/mo | $1,990/yr | — (the anchor) | flat per tenant |

Suite saves $99/seat/mo vs two Pro tiers separately ($498 → $399).

**Optional Autonomous tier** (open decision, §6): ~$449–$599/seat — Star runs sourcing, campaigns,
and guarded outreach end-to-end. Built as a distinct tier or as the Enterprise capability.

### Per-workspace product — Curate (CMS / content hub)

| Tier | Monthly (list) | Annual (list) | Founding (12-mo) | Basis |
|---|---|---|---|---|
| **Curate** Starter | $49/mo | $490/yr | $39/mo | 1 site, ~3 editor seats |
| **Curate** Pro | $299/mo | $2,990/yr | $199/mo | up to 5 sites, ~10 editors |
| **Curate** Enterprise | custom | custom | — | dedicated cloud |

Curate add-ons: editor seat $19/seat/mo (beyond included), additional site $39/site/mo, traffic
overage metered. Pro founding ($199) lands at Payload Cloud Pro's price — managed + AI-native at
their self-hosted-Pro rate.

### What each tier carries

**Per-seat — Free** — 1 user, forever. Core records and pipeline. No Star AI, no multi-user, no
analytics. The on-ramp Greenhouse has no answer to.

**Per-seat — Starter** — multi-user, full workflow, analytics, parsing. Chat-level AI only (basic
drafting, no autonomous sourcing/outreach). Mirrors Loxo Basic ($169), priced under. No onboarding
fee — contrast vs HubSpot ($1,500 / $3,500) and Greenhouse ($1K–15K).

**Per-seat — Pro** — Starter plus full Star Assist AI: AI sourcing, automated outreach drafting,
generative drafting, screening/decisioning (human approves). The published answer to Loxo's
$269–$500+ custom AI tier.

**Per-seat — Enterprise** — sales-led. SSO, SOC 2, deep integrations (Workday / Bullhorn / BambooHR
via `esteemed-platform`), dedicated support, deep Intelligence (custom domain training, LoRA
sidecar), and autonomous Star execution.

**Intelligence add-on** — the deep-substrate upgrade on top of Pro's Star: persistent memory depth,
continual learning, coherence at scale, custom domain memory. Flat per-tenant, attachable to any
paid tier.

**Curate — Starter** — 1 site, managed in Esteemed Cloud, core CMS, ~3 editor seats, content workflow
(draft → review → approved → published). Curate is a complete, shipped product — a fork of Payload
Community, fully Esteemed-branded. Undercuts/matches Payload Cloud Standard ($35) but managed and
Esteemed-branded.

**Curate — Pro** — up to 5 sites, ~10 editors, **AI content hub on**: Esteemed Intelligence and the
content Agents (Blogger, Social, Marketer) are layered into the fork, driving the write-and-pull
flywheel (Blogger writes drafts, hcmgpt.com publishes, Social/Marketer repurpose), plus publishing
workflows and SSO. Connects to **Esteemed Connect** for RAG/grounding. Sits at Payload Cloud Pro
($199 list there) but managed + AI; a fraction of Acquia.

**Curate — Enterprise** — sales-led. Dedicated Esteemed Cloud, unlimited sites, custom traffic, SLA,
SAML/SCIM, advanced RAG / domain training, multi-tenant. The Acquia / Payload Enterprise competitor.

**Curate architecture & commercial boundaries:** Curate is a fork of Payload Community with Esteemed
Intelligence and the content Agents layered directly into the product, connecting to Esteemed Connect
for RAG. Two boundaries are genuine pricing decisions (see §6):
- **Agents** are layered into Curate AND exist as standalone SKUs (esteemed.io) and HCMGPT Assist
  skills. Decide whether Curate Pro includes unlimited agent use, a metered allowance, or whether
  heavy use draws on the standalone Agent SKUs.
- **Connect (RAG)** is a separate product Curate integrates with. Decide whether Curate Pro bundles a
  Connect entitlement or requires a separate Connect subscription.

---

## 3. Stripe object mapping

> `price_id` values are generated by Stripe. Code references the **lookup_key**, never the raw id.
> Per-seat paid tiers: `recurring.usage_type = licensed`, `billing_scheme = per_unit`, subscription
> `quantity` = seats. Flat tiers (Intelligence, Curate base): `quantity` = 1. Metered (Curate
> traffic): `usage_type = metered`. Free tiers: a real $0 recurring price so every tenant carries a
> subscription object and entitlements flow one uniform way.

### Products (Stripe `Product`)

| Product name | metadata `module` | Notes |
|---|---|---|
| Esteemed Acquire | `acquire` | CRM/TRM, dual pipeline |
| Esteemed Hire | `hire` | ATS |
| Esteemed Suite | `suite` | Entitles acquire + hire at Pro |
| Esteemed Intelligence | `intelligence` | Per-seat add-on substrate |
| Esteemed Curate | `curate` | Per-workspace CMS / content hub |

### Prices and lookup keys

| lookup_key | Amount | Interval | Basis |
|---|---|---|---|
| `acquire_free` | $0 | month | flat (1 user) |
| `acquire_starter_monthly` | $149 | month | per_seat |
| `acquire_starter_annual` | $1,490 | year | per_seat |
| `acquire_starter_founding_monthly` | $99 | month | per_seat |
| `acquire_pro_monthly` | $249 | month | per_seat |
| `acquire_pro_annual` | $2,490 | year | per_seat |
| `acquire_pro_founding_monthly` | $199 | month | per_seat |
| `acquire_enterprise_custom` | custom | — | per contract |
| `hire_free` | $0 | month | flat (1 user) |
| `hire_starter_monthly` | $149 | month | per_seat |
| `hire_starter_annual` | $1,490 | year | per_seat |
| `hire_starter_founding_monthly` | $99 | month | per_seat |
| `hire_pro_monthly` | $249 | month | per_seat |
| `hire_pro_annual` | $2,490 | year | per_seat |
| `hire_pro_founding_monthly` | $199 | month | per_seat |
| `hire_enterprise_custom` | custom | — | per contract |
| `suite_bundle_monthly` | $399 | month | per_seat |
| `suite_bundle_annual` | $3,990 | year | per_seat |
| `suite_bundle_founding_monthly` | $319 | month | per_seat |
| `intelligence_monthly` | $199 | month | flat |
| `intelligence_annual` | $1,990 | year | flat |
| `curate_starter_monthly` | $49 | month | flat (workspace) |
| `curate_starter_annual` | $490 | year | flat (workspace) |
| `curate_starter_founding_monthly` | $39 | month | flat (workspace) |
| `curate_pro_monthly` | $299 | month | flat (workspace) |
| `curate_pro_annual` | $2,990 | year | flat (workspace) |
| `curate_pro_founding_monthly` | $199 | month | flat (workspace) |
| `curate_enterprise_custom` | custom | — | per contract |
| `curate_editor_seat_monthly` | $19 | month | per_seat (add-on) |
| `curate_site_addon_monthly` | $39 | month | per_site (add-on) |
| `curate_traffic_overage` | metered | month | usage (per 1,000 views) |

### Price metadata (every Price object)

```
module:        acquire | hire | suite | intelligence | curate
tier:          free | starter | pro | enterprise | addon
interval:      month | year
seat_type:     licensed_per_seat | flat | metered
founding:      true | false
entitlement:   <entitlement_key from §4>
```

### Founding-rate mechanic

Founding is its own Price object (not a coupon). Contract term enforces the 12-month lock; at the
boundary a `subscription_schedule` swaps the item to the matching list price.

---

## 4. Entitlement mapping (`esteemed-platform`)

Roles gate *views*; entitlements gate *access*. A user needs both. Roles are necessary, not sufficient.

| Price (lookup_key) | Grants entitlement | AI level |
|---|---|---|
| `acquire_free`, `acquire_starter_*` | `module.acquire` | assist_light |
| `acquire_pro_*`, `acquire_enterprise_custom` | `module.acquire` | star_full |
| `hire_free`, `hire_starter_*` | `module.hire` | assist_light |
| `hire_pro_*`, `hire_enterprise_custom` | `module.hire` | star_full |
| `suite_bundle_*` | `module.acquire` + `module.hire` | star_full |
| `intelligence_*` | `addon.intelligence` | substrate_deep |
| `curate_starter_*` | `module.curate` | content_basic |
| `curate_pro_*`, `curate_enterprise_custom` | `module.curate` | content_ai (Intelligence + Agents layered in; integrates `module.connect` for RAG) |
| `curate_editor_seat_*`, `curate_site_addon_*`, `curate_traffic_overage` | extends `module.curate` | — |

Entitlement gates: frontend nav, API access, background jobs, AI tool access, messaging/outreach
actions, setup/onboarding. Advanced Star AI gates to `star_full`; autonomous execution gates to the
Autonomous tier / `tier = enterprise`; deep Intelligence to `addon.intelligence`. Curate AI content
hub (RAG + agent flywheel) gates to `content_ai`.

---

## 5. Competitive basis (why these numbers — for the record)

Current as of June 2026.

**Acquire / Hire — recruiting & CRM:**
- **Loxo:** Free Forever (1 user); Basic $169/seat (ATS + Sales CRM, no advanced AI);
  Professional/Enterprise custom ~$269–$500+/seat where AI sourcing, automated outreach, GenAI live.
  Esteemed copies the tier shape but publishes the AI tier at $249.
- **Greenhouse:** ~$6.5K/yr Essential to $70K+ Expert, per total headcount, AI/CRM mostly top-tier,
  $1K–15K implementation, 8–15% renewal hikes. Hire's Free + published per-seat Pro counter this.
- **Bullhorn:** $99–$315+/user, add-on fees (custom-field hosting $1,500 + $500/mo), locked seats.
- **HubSpot Sales Hub:** Starter $15/seat, Pro $100/seat (+$1,500), Ent $150/seat (+$3,500);
  sequences email-only, no AI personalization.
- **Lever (TRM):** quote-only, per headcount; ~$12K/yr at 200 employees, ~$63K at 1,000.

**Frontier-provider vertical benchmark** (the real "beaten by frontier" test — not the $20 horizontal
assistant): Claude for Enterprise $40/seat (25-seat min); Claude for Financial Services / Life Sciences
are tailored versions sold via private offers; Enterprise moved to token unbundling (~$20 seat + full
API token rates, where token consumption dominates TCO for agentic work). These are assistant overlays,
not systems of record. Esteemed's edge: **predictable per-seat with AI included, vs cheap seat + a
runaway token bill.** Hold the system-of-record frame so the $40 seat doesn't become the buyer's anchor.

**Vertical-AI ceiling:** CoCounsel ~$220/seat (legal, no minimum); Harvey ~$1,200–$2,000+/seat
mid-market. Confirms $249 sits at the floor of the vertical-AI band — deliberate value positioning,
with room above via the Autonomous tier.

**Curate — CMS / content hub:**
- **Payload Cloud** (Curate is a fork of Payload Community): Self-hosted free (MIT), Standard $35/mo,
  Pro $199/mo, Enterprise ~$833/mo; Enterprise priced by admin seat. Curate Pro founding ($199)
  deliberately matches Payload Cloud Pro — a complete, Esteemed-branded, AI-native fork (Intelligence
  + Agents layered in, Connect for RAG) at their self-hosted price. Same open-source-fork + commercial
  pattern as Esteemed Connect (fork of Onyx CE).
- **Acquia (DXP / Drupal pattern):** listed entry ~$134/mo, real deployments ~$100K/yr, priced by
  monthly views/visits across dev/staging/prod environments. Curate undercuts at a fraction.
- **WP Engine:** Startup ~$25–30/mo (1 site), Scale ~$77–95/mo (10 sites, 200K visits), Core $400/mo,
  Enterprise custom; $2 per 1,000 visits overage. Curate sits above commodity hosting on AI value.

---

## 6. Open items (flagged, not blocking the Stripe build)

- **Autonomous tier** — add as a fourth per-seat tier (~$449–599) or fold into Enterprise. Decision
  pending; Pro currently caps at Assist (human-approved), not autonomous execution.
- **Acquire price parity vs HubSpot anchor** — Acquire Pro at $249 (AI-native market). Set lower if
  Acquire should undercut toward HubSpot Pro ($100).
- **Curate bundling — Agents and Connect** — Agents are layered into Curate but also sold standalone;
  decide whether Curate Pro includes unlimited agent use, a metered allowance, or draws on the
  standalone Agent SKUs. Separately, decide whether Curate Pro bundles a Connect (RAG) entitlement or
  requires a separate Connect subscription.
- **Enterprise list anchors** — custom-only across all products. Set a published "starting at" before
  sales conversations if wanted.
- **Annual founding** — only monthly founding prices defined. Add `*_founding_annual` if needed.
- **Curate traffic allocation** — included views/visits per tier and the overage rate per 1,000 not
  yet set; Esteemed Cloud (DigitalOcean) bandwidth is cheap, so allocations can be generous.
