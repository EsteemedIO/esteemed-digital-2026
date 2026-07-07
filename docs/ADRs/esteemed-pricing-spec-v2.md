# Esteemed Pricing Spec — Acquire, Hire, Curate, Hosting & Migration

**Date:** 2026-06-17 (v2 — merges Hosting + Migration into the 2026-06-08 locked spec)
**Status:** Acquire/Hire/Curate/Suite/Intelligence = **locked** (unchanged from v1). Hosting + Migration = **new, draft for review.**
**Owner contract:** `esteemed-platform` (Stripe price/product/seat metadata, entitlements)
**Build agent:** Codex

> Single source of truth for the Esteemed Stripe catalog. No app invents its own
> price names, lookup keys, or entitlement strings. All values below are canonical.
>
> **Four billing axes:** **per-seat** (Acquire, Hire, Suite, Intelligence) · **per-workspace**
> (Curate — sites + traffic + editor seats) · **per-site / managed-service** (Hosting — Esteemed
> Cloud) · **one-time service** (Migration, plus the Care bridge subscription).
>
> **Offerings are independent — none requires another.** Hosting, Curate (CMS), Acquire (CRM),
> and Migration are separate purchases that compose on the customer's terms, not a forced funnel.
> A customer can host with us without migrating; migrate onto Curate without taking the CRM; or
> run the CRM without hosting here.

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

**Hosting + Migration (new):**

9. **Offerings are independent.** Hosting, Curate (CMS), Acquire (CRM), and Migration are
   separate purchases; none is a prerequisite for another.
10. **Hosting is per-site / managed-service, not per-workspace.** Two families under Esteemed
    Cloud: **self-serve Cloud** (bring-your-own-site, GoDaddy-aligned) and **Managed Hosting**
    (done-for-you, free rebuild + support). Distinct from Curate — Curate is the CMS content hub
    (and includes hosting *of Curate sites*); Hosting is for sites **not** running on Curate.
11. **Migration is a one-time productized service** (any platform → Curate), priced publicly,
    plus an optional **Care** bridge subscription. A paid migration results in a **Curate**
    subscription (per the locked Curate prices), not a Hosting subscription.
12. **The Tier-2 "free rebuild" is not a paid migration.** It is a $0 Create build — a plain
    **React / Node / Next** site with **no CMS, not Curate-driven** — bundled with a 12-month
    **Managed Hosting** commitment. A hosting-acquisition mechanic, distinct from the paid Tier-1
    Curate migrations. No Stripe SKU; tracked as a $0 line on the hosting agreement.
13. **Hosting annual = 2 months free** (same convention). Hosting uses the **free-rebuild + 12-mo
    term** as its acquisition lever rather than a founding discount.

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
for RAG. Both boundaries are now decided:
- **Agents — DECIDED: included in Curate, SKU-gated.** The content Agents are layered into the
  product. The platform gates **config & activation by SKU/entitlement** — Curate Pro's `content_ai`
  entitlement turns the in-Curate agents on; which agents are configured/active is controlled by
  platform SKU-gating, **not** a metered allowance or a separate purchase. (The same agents also sell
  standalone on esteemed.io and run as HCMGPT Assist skills.)
- **Connect (RAG) — DECIDED: present on managed Curate, gated by connected systems.** A managed Curate
  instance **includes Connect** by default. The governing limit is the **number of connected systems**
  (data sources) — each tier allows N connected systems, with more on higher tiers / Enterprise.

### Per-site / managed-service product — Hosting (Esteemed Cloud)

Managed website hosting on Esteemed Cloud (DigitalOcean subnet). **Not Curate** — this hosts a
customer's site as-is (bring-your-own or Create-built), with no CMS re-platform required.

**Self-serve Cloud** (bring-your-own-site, GoDaddy-aligned):

| Tier | Monthly | Annual (2 mo free) | Basis |
|---|---|---|---|
| **Cloud Basic** | $9.99/mo | $99/yr | 1 site |
| **Cloud Plus** | $14.99/mo | $149/yr | 1 site (+ staging/CDN) |
| **Cloud Pro** | $19.99/mo | $199/yr | 1 site (+ priority) |
| **Cloud Multi** | $39.99/mo | $399/yr | up to 5 sites |

**Managed Hosting** (done-for-you; free rebuild + support; 12-month term):

| Tier | Monthly | Annual (2 mo free) | Basis |
|---|---|---|---|
| **Managed Essential** | $149/mo | $1,490/yr | 1 site, 2 support hrs/mo, 5-page Create rebuild allowance |
| **Managed Growth** | $249/mo | $2,490/yr | 1 site, 5 support hrs/mo, 12-page Create rebuild allowance |
| **Managed Business** | $399/mo | $3,990/yr | 1 site, 10 support hrs/mo, full standard-site Create rebuild, soft cap ~30 pages |
| **Managed Enterprise** | Contact Sales | custom | multi-site / dedicated / SLA |

Hosting add-ons: **support overage** billed at the $75–$85/hr market rate beyond included hours;
**managed DB / infra** marked up over DO cost (priced to market). Free rebuild = $0 line on a
Managed plan (see §1.12). Essential/Growth rebuild page overage is billed once at **$100/page**
via `hosting_page_overage`; Business does not count pages unless the scope trips to Enterprise.
*Tier names are deliberately distinct from the per-seat apps: Hosting uses
**Essential / Growth / Business / Enterprise** so its $149/$399 tiers aren't confused with the
Acquire/Hire Starter/Pro seats or the $399 Suite seat.*

### One-time service — Migration (any platform → Curate)

Productized migration off WordPress / Squarespace / Wix / Drupal / Joomla / custom onto **Curate**.
One-time fees; a paid migration lands the customer on a **Curate subscription** (locked prices above).

| Package | Price | Type |
|---|---|---|
| **Care** (managed bridge — current platform, no migration) | $399/mo | subscription |
| **SMB Migration — Standard** (≤50 pages) | $6,500 | one-time |
| **SMB Migration — Plus** (≤150 pages, commerce/membership) | $9,500 | one-time |
| **Mid Migration — Pro** (≤500 pages, multilingual) | $18,500 | one-time |
| **Mid Migration — Pro+** (≤1,500 pages, WCAG 2.2 AA) | $32,500 | one-time |
| **Enterprise Migration** | Custom from $75,000 | one-time |
| **Enterprise Discovery** (refundable against project) | $7,500 | one-time |

Public migration pricing is itself the differentiator vs opaque "contact us" agency quotes.

### Add-on product — Esteemed Agents (AI add-ons)

The content/marketing Agents sell three ways: **standalone** SKUs deployable into a tenant, **bundled
into Curate** (SKU-gated, §2 boundaries), and as **HCMGPT Assist** skills. **Pricing locked; the agents
are not yet GA** — set up the SKUs, but they are launch-gated (not sold to market yet).

| Add-on | Monthly | Notes |
|---|---|---|
| **AI Receptionist** (Star call-answering) | $99/mo | Entry AI wedge for Tier-2 hosting |
| **Individual agent** (Social, Blogger, Marketer, Recruiter, Publicist) | $129–$149/mo | Blogger includes SOnA voice training |
| **Custom / multi-agent bundle** | from $199/mo | — |
| **Intelligence add-on** | $199/mo | (already in per-seat catalog; deep substrate) |

When bundled in Curate Pro, agent **use** is included; the standalone SKUs above apply only to
non-Curate deployments (Tier-2 hosting add-ons, HCMGPT, or direct tenant installs).

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
| Esteemed Create | `create` | AI-assisted website and app builder with Studio IDE |
| Esteemed Cloud | `hosting` | Per-site managed website hosting (self-serve + managed) |
| Esteemed Migration | `migration` | One-time migration service (any platform → Curate) + Care bridge |
| Esteemed Agents | `agents` | AI add-ons — standalone SKUs, bundled in Curate, HCMGPT Assist skills (not yet GA) |

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
| `create_free` | $0 | month | flat |
| `create_core_monthly` | $39 | month | flat |
| `create_core_annual` | $348 | year | flat |
| `create_pro_monthly` | $79 | month | flat |
| `create_pro_annual` | $708 | year | flat |
| `create_business_monthly` | $169 | month | flat |
| `create_business_annual` | $1,548 | year | flat |
| `create_enterprise_custom` | custom | — | per contract |
| `cloud_basic_monthly` | $9.99 | month | flat (1 site) |
| `cloud_basic_annual` | $99 | year | flat (1 site) |
| `cloud_plus_monthly` | $14.99 | month | flat (1 site) |
| `cloud_plus_annual` | $149 | year | flat (1 site) |
| `cloud_pro_monthly` | $19.99 | month | flat (1 site) |
| `cloud_pro_annual` | $199 | year | flat (1 site) |
| `cloud_multi_monthly` | $39.99 | month | flat (up to 5 sites) |
| `cloud_multi_annual` | $399 | year | flat (up to 5 sites) |
| `managed_essential_monthly` | $149 | month | flat (1 site) |
| `managed_essential_annual` | $1,490 | year | flat (1 site) |
| `managed_growth_monthly` | $249 | month | flat (1 site) |
| `managed_growth_annual` | $2,490 | year | flat (1 site) |
| `managed_business_monthly` | $399 | month | flat (1 site) |
| `managed_business_annual` | $3,990 | year | flat (1 site) |
| `managed_enterprise_custom` | custom | — | per contract |
| `hosting_page_overage` | $100 | one-time | per_page (per_unit; quantity = pages over allowance) |
| `hosting_support_overage` | metered | month | usage (per hour, $75–$85) |
| `migration_care_monthly` | $399 | month | flat (1 site, bridge) |
| `migration_smb_standard` | $6,500 | one-time | service |
| `migration_smb_plus` | $9,500 | one-time | service |
| `migration_mid_pro` | $18,500 | one-time | service |
| `migration_mid_proplus` | $32,500 | one-time | service |
| `migration_enterprise_custom` | custom | one-time | service (from $75K) |
| `migration_discovery` | $7,500 | one-time | service (refundable) |
| `agent_receptionist_monthly` | $99 | month | flat (per tenant) |
| `agent_social_monthly` | $129 | month | flat (per tenant) |
| `agent_blogger_monthly` | $149 | month | flat (per tenant, incl. SOnA) |
| `agent_marketer_monthly` | $149 | month | flat (per tenant) |
| `agent_recruiter_monthly` | $149 | month | flat (per tenant) |
| `agent_publicist_monthly` | $149 | month | flat (per tenant) |
| `agents_bundle_monthly` | $199 | month | flat (per tenant) |

### Price metadata (every Price object)

```
module:        acquire | hire | suite | intelligence | curate | hosting | migration | agents
tier:          free | starter | growth | pro | business | enterprise | basic | plus | multi | care | addon
interval:      month | year | one_time
seat_type:     licensed_per_seat | flat | metered | one_time
founding:      true | false
entitlement:   <entitlement_key from §4>
```

Managed Hosting price metadata also carries build-scoping fields:

| Price(s) | `page_allowance` | `page_overage_applies` | `page_soft_cap` |
|---|---|---|---|
| `managed_essential_monthly`, `managed_essential_annual` | `5` | `true` | — |
| `managed_growth_monthly`, `managed_growth_annual` | `12` | `true` | — |
| `managed_business_monthly`, `managed_business_annual` | `unlimited_standard` | `false` | `30` |
| `managed_enterprise_custom` | `bespoke` | `false` | — |

`hosting_page_overage` is a billing-only one-time price under Esteemed Cloud. It grants no
entitlement and is invoiced with `quantity = pages over allowance` for Managed Essential/Growth
rebuilds only.

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
| `curate_pro_*`, `curate_enterprise_custom` | `module.curate` | content_ai (Agents included, SKU-gated for config/activation; managed instance includes `module.connect`, gated by number of connected systems) |
| `curate_editor_seat_*`, `curate_site_addon_*`, `curate_traffic_overage` | extends `module.curate` | — |
| `agent_*` (standalone), `agents_bundle_monthly` | `module.agents` (non-Curate deployments) | per-agent activation |
| `cloud_*` (basic/plus/pro/multi) | `module.hosting` | hosting_self_serve |
| `managed_*` (essential/growth/business), `managed_enterprise_custom` | `module.hosting` | hosting_managed |
| `hosting_page_overage` | none — billing line only | — |
| `migration_care_monthly` | `module.hosting` (bridge on current platform) | — |
| `migration_*` (one-time packages) | none directly — results in a `module.curate` subscription | — |

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

**Hosting — Esteemed Cloud (June 2026):**
- **GoDaddy:** managed WordPress ~$6.99 intro, renews ~$14.99; SSL/email/domain extra; one site per
  plan; self-managed. Self-serve Cloud matches the price point ($9.99+) but includes SSL + AI and
  doesn't double at renewal.
- **WP Engine / Kinsta:** ~$25–$400/mo managed. Self-serve Cloud undercuts; Managed Hosting moves
  upmarket with the free-rebuild + done-for-you local motion.
- **DigitalOcean (our cost):** static ~$0–$3/site, dynamic container from $5, managed Postgres $15.
  Hosting margin is markup over this near-zero cost (see Internal Margin Reference).

**Migration (June 2026):**
- Local/freelance builds run **$5K–$12K** one-time (build-and-leave, opaque quotes). Productized,
  publicly-priced migration ($6,500+) onto a managed AI-native CMS is the transparency differentiator.
- WordPress/Squarespace migration services are typically per-project quotes; Esteemed's public tiers
  plus the recurring Curate destination make migration a land-and-recur motion, not one-time revenue.

---

## 6. Open items (flagged, not blocking the Stripe build)

- **Autonomous tier** — add as a fourth per-seat tier (~$449–599) or fold into Enterprise. Decision
  pending; Pro currently caps at Assist (human-approved), not autonomous execution.
- **Acquire price parity vs HubSpot anchor** — Acquire Pro at $249 (AI-native market). Set lower if
  Acquire should undercut toward HubSpot Pro ($100).
- **Curate bundling — RESOLVED.** Agents are **included in Curate**, gated by SKU/entitlement in the
  platform for config & activation (not metered, not a separate purchase). Connect is **present on
  managed Curate instances**, governed by the **number of connected systems**. (See §2 boundaries.)
- **Agents pricing — LOCKED, not yet GA.** Price points set ($99 / $129–$149 / $199); SKUs can be
  built, but the agents are launch-gated and not sold to market yet — not a launch blocker.
  *Per-connected-system count per Curate tier still to be set when Connect GA's.*
- **Enterprise list anchors** — custom-only across all products. Set a published "starting at" before
  sales conversations if wanted.
- **Annual founding** — only monthly founding prices defined. Add `*_founding_annual` if needed.
- **Curate traffic allocation** — included views/visits per tier and the overage rate per 1,000 not
  yet set; Esteemed Cloud (DigitalOcean) bandwidth is cheap, so allocations can be generous.

**Hosting + Migration open items (new):**

- **Create vs Curate — RESOLVED.** Create builds plain **React / Node / Next** sites (no CMS); they
  are **not** Curate-driven and land on a **Hosting** subscription. Curate is the CMS destination for
  **paid migrations** only. So Tier-2 free-rebuild customers sit on Hosting; Tier-1 migration
  customers sit on Curate. No forced convergence.
- **Hosting vs Curate boundary.** Curate includes hosting *of Curate sites*; standalone Hosting is
  for non-Curate sites. Confirm a customer never pays both for the same site (Curate sub already
  covers its hosting).
- **Name collision — RESOLVED.** Hosting tiers renamed to **Essential / Growth / Business /
  Enterprise** so the $149/$399 hosting prices aren't confused with the Acquire/Hire Starter/Pro
  seats or the $399 Suite seat. (Self-serve Cloud keeps Basic/Plus/Pro/Multi — clearly distinct.)
- **Free-rebuild page allowance — RESOLVED: 5 / 12 / full-site.** Managed Essential includes 5
  pages, Growth includes 12 pages, and Business includes a full standard site with a soft cap around
  30 pages. Overage `hosting_page_overage` is $100/page one-time and applies to Essential/Growth
  only. Business does not count pages; 30+ pages or multi-location / portal / non-trivial commerce /
  dedicated SLA scopes trip to Managed Enterprise. The $0 rebuild is tracked as a line on the Managed
  Hosting agreement, not a Stripe product, and the 12-month term is enforced via
  `subscription_schedule`.
- **Managed Hosting founding rates** — none defined (free-rebuild is the lever instead). Confirm.
- **Care bridge → migration conversion — DECIDED: discretionary closing lever.** No advertised or
  automatic credit. As a rep-discretion closing tool, credit up to **3 months of Care paid (cap
  ~$1,200)** against an **SMB** migration ($6,500 / $9,500) when a Care subscriber converts within
  12 months. Used at the point of conversion, never published. Capped + SMB-only so it never erodes
  Mid/Enterprise migration value, and it's money already collected — so it accelerates the move onto
  a recurring Curate subscription at negligible net cost.
- **Migration support hours — RESOLVED: 2 / 5 / 10** (Essential / Growth / Business). Single number
  across all docs.
