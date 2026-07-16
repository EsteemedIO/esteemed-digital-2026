# Esteemed Pricing Page — Left-Rail Design Spec (for Claude Design)

**Date:** 2026-06-18 (rev 2 — 8-category taxonomy)
**For:** Claude Design
**Source of truth for all numbers:** `esteemed-pricing-spec-v2.md` (locked). Do not invent prices, tiers, or lookup keys. Every locked figure below is copied from that spec. Cards drawing on offerings *not* in that spec are marked **[price TBD]** and listed together in §5.0 — render those as "Contact Sales" until a number is set.
**Layout reference:** GoDaddy pricing — left-rail category navigation; pick a category, that category's cards render on the right. Builder (Create) sold separately from Hosting, the GoDaddy way.
**Component library:** HeroUI (see §3.1).
**Directive:** *Organize and render. Do not redesign the catalog or invent pricing.*

---

## 0. Confirm or redirect (4 decisions — built on defaults below)

1. **Unpriced cards (now down to one real blocker).** Create is priced from the live page; Managed CMS is resolved (host-at-cost + Support pack). The remaining gap is the **Support pack ladder** — it's referenced by both the Support category and Managed CMS, and it's on the original Create+Support page below the screenshot fold. Send that section and the page has effectively zero placeholders. Minor TBDs (Custom Build floor, standalone Connect, extra Bundles) are consolidated in **§5.0**.
2. **Founding rates.** Built to **show** founding (list struck through + "Founding · locked 12 mo" chip). Switch to list-only if preferred.
3. **Agents.** Built as **"Coming soon"** (launch-gated, not GA). Omit if preferred.
4. **HeroUI version.** v2 and v3 name the brand color token differently (v2 `primary` via Tailwind plugin; v3 `accent` via CSS `@theme`). Confirm which is installed so the build maps the yellow to the right token — design intent is identical either way.

**Placement calls I made (flagging, not asking):** Migration lives under **Content Management** (it's the "move onto a managed CMS" service). Suite lives under **Bundles** (cross-linked from Hiring & Outreach). Managed Hosting lives under **Hosting** (cross-linked from Websites, since the free rebuild lands on a Managed plan). Care bridge lives under **Content Management**. Say the word if you want any moved.

---

## 1. Page goal

One pricing page that holds Esteemed's full catalog without overwhelming any one buyer. The left rail segments by what the buyer wants; the right panel shows only that category. Several categories show **two or more sub-groups** ("feature types") on one page — e.g. Hosting shows self-serve and managed side by side. A monthly/annual toggle and a founding chip are global. The independence rule — **every offering is a separate purchase, none requires another** — is stated once, prominently, so the page reads as "compose what you need," not a forced funnel.

> Note: the public page shows self-serve/platform pricing. The Olympia local-hosting motion (Griffin) sells the **same** Hosting/Managed tiers human-led — a sales motion, not a separate price page. No separate numbers.

---

## 2. Layout & interaction

- **Two-pane layout.** Left rail = category list (sticky, ~240px). Right panel = the selected category's heading, one-line description, and its sub-groups + cards.
- **Default selected category:** Websites (top of rail, the "get online" entry).
- **Sub-groups within a category** ("feature types"): rendered as labeled sections in the right panel, separated by a heading + `Divider` (or a secondary segmented control where there are exactly two). This is how Hosting, Content Management, AI Add-ons, and Websites each show more than one offering family on a single page.
- **Selected state in the rail:** left yellow (#FEE546) indicator bar + bold label; others grey, regular weight.
- **Global monthly/annual toggle**, top-right of the right panel. Annual = **2 months free** on every recurring tier; show the annual price + a small "2 months free" tag. Toggle does not affect one-time Migration prices or the Colleagues fee model.
- **Founding chip** on cards with a founding rate (Acquire, Hire, Suite, Curate): list struck through, founding price prominent, "Founding · locked 12 mo."
- **Enterprise / Contact Sales** is a card within each category that has one — not its own rail item.
- **Mobile:** left rail collapses to a horizontal scrolling tab strip (or a dropdown category selector) pinned under the hero; cards stack single-column. Mobile-first — this must read cleanly on a phone.

---

## 3. Brand tokens & card style (carry from the rest of the site build — do not introduce new colors)

The site uses **HeroUI**. Build with HeroUI components and theme tokens; do not hand-roll custom card/button CSS or hardcode hex per element. Drive the brand through the theme, not inline styles.

- **Palette:** black, white, brand yellow **#FEE546** only. Hover/secondary yellow **#FCD72B**. No teal/navy/coral.
- **Brand color via theme token.** Set yellow as HeroUI's brand/accent color in the theme (the `primary`/`accent` token — see §3.1) so it propagates to every component. Because the brand is a *light* yellow, the token's **foreground must be near-black**, not the default white, or text/icons on yellow will be unreadable. The one easy mistake to avoid.
- **Cards:** HeroUI `Card` on white/surface, **1px default border, no drop shadows.** Generous padding, rounded corners consistent with the platform shell.
- **Pastel colors only on label pills** (tier name, "Coming soon," "Most popular") — never on card backgrounds.
- **Brand yellow reserved for the primary action only** — the buy CTA on the recommended card uses the solid brand-color button; all other CTAs are bordered/light variants. (HeroUI: one `color="primary"` solid button per sub-group; the rest `variant="bordered"`.)
- **CTA chips/arrows:** 1.5px grey outline circle, fill to #FCD72B on hover.
- **"Most popular" highlight:** the recommended tier in each ladder gets a thin yellow top border + a pill — not a colored card body.
- Typography, spacing, and radius follow the existing HeroUI theme; this page introduces no new type scale or custom tokens.

---

## 3.1 HeroUI component mapping

Map each piece of the page to an existing HeroUI component so this page matches the rest of the site and inherits its accessibility for free:

| Page element | HeroUI component | Notes |
|---|---|---|
| Left category rail | `Tabs` (vertical) — or `Listbox` | Vertical Tabs is the natural left-rail fit; selected state carries the yellow indicator. Listbox is the fallback for richer rows. |
| Sub-group header within a category | Section heading + `Divider` | The "feature types on page" pattern — e.g. "Self-serve Cloud" and "Managed Hosting" as two labeled groups under Hosting. |
| Pricing card | `Card` (`CardHeader` / `CardBody` / `CardFooter`) | Tier name + price in header, feature list in body, CTA in footer. |
| Buy / primary CTA | `Button` `color="primary"` (solid) | One per sub-group — the recommended tier. Yellow with near-black foreground. |
| Secondary / Enterprise / TBD CTA | `Button` `variant="bordered"` | "Contact Sales," "Notify me," "Get a quote." |
| Monthly / annual toggle | `Switch` (or a 2-option `Tabs`) | Global, top-right of the right panel. "2 months free" tag beside it. |
| Tier / status pills ("Most popular," "Coming soon," "Founding") | `Chip` | Pastel/flat variants only; never on the card body. |
| Acquire vs Hire ladders | `Tabs` (horizontal) | Two ladders share pricing — tab between them rather than doubling cards. |
| Add-on / fine-print rows | `Divider` + small text, or `Listbox` rows | Curate add-ons; support-overage notes. |

**Theming instruction (version-dependent — see decision 4):**
- **HeroUI v2:** set the brand in the `heroui()` Tailwind plugin under `themes.light.colors.primary` (DEFAULT `#FEE546` + generated 50–900 scale); set `primary-foreground` near-black.
- **HeroUI v3:** set `--accent: #FEE546` (and `--accent-foreground` near-black) in theme CSS under `@theme`; v3 renames `primary` to `accent` and uses `className` not `classNames`.
- Either way: **one brand token, set once, flowing to all components.** Do not scatter `#FEE546` across component overrides.

---

## 4. Left-rail category taxonomy (the core deliverable)

Order top to bottom:

| # | Rail label | Right-panel subhead | Sub-groups ("feature types") on the page |
|---|---|---|---|
| 1 | **Websites** | Get a website — build it yourself or have us build it. | Create (build your own) · Done-for-you build / free rebuild |
| 2 | **Hosting** | Fast, managed hosting on Esteemed Cloud. SSL and AI contact form included; never doubles at renewal. | Self-serve Cloud · Managed Hosting |
| 3 | **Hiring & Outreach** | Source, hire, and reach talent with AI in the workflow. | Acquire (CRM) · Hire (ATS) |
| 4 | **Content Management** | Run your content on Esteemed — our AI-native CMS, or your platform managed by us. | Esteemed Curate · Managed CMS (WordPress / Drupal) · Migration |
| 5 | **AI Add-ons** | Deepen any plan with retrieval, memory, and agents. | Connect (RAG) · Intelligence (Company Brain) · Agents |
| 6 | **Bundles** | Buy together, save together. | Suite · Agents bundle · (more TBD) |
| 7 | **Hire Experts** *(Colleagues)* | Hire from a 35,000-member professional network. | Membership · Hire from Colleagues · EXP (Enterprise) |
| 8 | **Support** | Managed support packages and expert help. | Support packs · Expert help (from Colleagues) |

Eight categories, no second-level rail. Within a category, sub-groups stack vertically with their own heading; if a single sub-group exceeds 4 cards, collapse secondary tiers under a "compare all plans" expander.

---

## 5. Per-category card content

All recurring prices show monthly by default; annual on toggle. **2 months free** = annual is 10× monthly. **[price TBD]** = not in the locked spec; render as Contact Sales (see §5.0).

### Category 1 — Websites

**Sub-group A — Esteemed Create (build it yourself)**
*AI-powered building with Studio IDE. Credits power every prompt, refinement, and rebuild. A typical landing page takes 30–50 credits.* This ladder is the **existing, shipped Create pricing** (per the live page) — match it exactly; do not re-derive.

| Tier | Monthly | Credits | Tagline | Key features | CTA |
|---|---|---|---|---|---|
| **Free** | $0 | 30 + 5 daily | Try it, build a small static site | 1 project · publish to esteemed.app subdomain · Studio IDE included · community support | Try free |
| **Core** *(most popular)* | $39 | 100/mo | Build and launch one real site | Unlimited projects · custom domain + SSL · Studio IDE + code editing · Colleagues marketplace access · agent add-ons available · hosting included at publish · email support | Get started |
| **Pro** | $79 | 300/mo | Build, iterate, multi-site | Everything in Core · multi-site management · priority support · advanced analytics · team collaboration (up to 3) · credit top-ups at reduced rate | Get started |
| **Business** | $169 | 800/mo | Heavy iteration, team collaboration | Everything in Pro · team collaboration (up to 10) · Agents+ eligible · dedicated onboarding · SSO · premium support | Get started |
| **Enterprise** | Custom | Custom | Tailored allowance, dedicated team | Everything in Business · custom credit allowance · dedicated account team · custom SLAs · on-premises deployment · advanced security · volume pricing | Contact us |

Monthly/Yearly toggle applies (Yearly = Save). **Note the interaction:** Create **includes hosting at publish** (Core and up), so a Create customer does not separately buy Cloud hosting — the standalone Hosting category (§Category 2) is for bring-your-own / non-Create sites. Create's tier names (Core/Pro/Business) are its own ladder and deliberately differ in price from the same-named tiers in other categories; the left rail keeps each ladder isolated so the numbers don't read as conflicting.

**Sub-group B — Done-for-you (we build it)**

| Card | Price | Includes |
|---|---|---|
| **Free Rebuild** | $0 with a 12-month Managed Hosting plan | We rebuild your site free; lands on a Managed Hosting plan (see Hosting). $0 line on the agreement, not a SKU. |
| **Custom Build** | **[price TBD]** / Contact Sales | Bespoke build for larger sites. |

> Managed Hosting plans (build + host + support bundled) live under **Hosting** — cross-link there from the Free Rebuild card.

---

### Category 2 — Hosting (Esteemed Cloud)

**Sub-group A — Self-serve Cloud** (bring your site or a Create build)

| Card | Monthly | Annual | Includes |
|---|---|---|---|
| **Cloud Basic** | $9.99 | $99 | 1 site, SSL, AI contact form |
| **Cloud Plus** | $14.99 | $149 | 1 site + staging + CDN |
| **Cloud Pro** *(most popular)* | $19.99 | $199 | 1 site + priority support |
| **Cloud Multi** | $39.99 | $399 | up to 5 sites |

GoDaddy microcopy (optional, small): *vs. GoDaddy ~$15/mo at renewal, SSL extra, self-managed.*

**Sub-group B — Managed Hosting** (done-for-you; free rebuild + support; 12-mo term)

| Card | Monthly | Annual | Includes |
|---|---|---|---|
| **Essential** | $149 | $1,490 | 1 site, 2 support hrs/mo |
| **Growth** *(most popular)* | $249 | $2,490 | 1 site, 5 support hrs/mo |
| **Business** | $399 | $3,990 | 1 site, 10 support hrs/mo |
| **Enterprise** | Contact Sales | — | multi-site / dedicated / SLA |

Overage microcopy: *additional hours at market rate beyond included* (no internal cost language — customer-facing).

---

### Category 3 — Hiring & Outreach

Subhead: *Per actual user, not company headcount. AI is published, not gated behind a sales call.* Render **Acquire** and **Hire** as two tabbed ladders (identical pricing).

**Acquire (CRM)** and **Hire (ATS)** — same pricing:

| Tier | Monthly | Annual | Founding (12 mo) | Includes |
|---|---|---|---|---|
| **Free** | $0 | $0 | — | 1 user, core records + pipeline |
| **Starter** | $149/seat | $1,490/seat | **$99/seat** | multi-user, full workflow, analytics, parsing, Chat-level AI |
| **Pro** *(most popular)* | $249/seat | $2,490/seat | **$199/seat** | + full Star Assist AI (sourcing, outreach drafting, screening — human approves) |
| **Enterprise** | Contact Sales | — | — | SSO, SOC 2, deep integrations, autonomous Star |

> Buying both? The **Suite** bundle lives under **Bundles** — cross-link it here. Deeper AI (Intelligence) lives under **AI Add-ons**.

---

### Category 4 — Content Management

**Sub-group A — Esteemed Curate** (our AI-native CMS, per workspace)

| Card | Monthly | Annual | Founding (12 mo) | Includes |
|---|---|---|---|---|
| **Starter** | $49 | $490 | **$39** | 1 site, ~3 editors, core CMS workflow |
| **Pro** *(most popular)* | $299 | $2,990 | **$199** | up to 5 sites, ~10 editors, AI content hub (Blogger/Social/Marketer), RAG via Connect, SSO |
| **Enterprise** | Contact Sales | — | — | unlimited sites, dedicated cloud, SAML/SCIM, advanced RAG |

Add-ons (small): *Extra editor seat $19/mo · Additional site $39/mo · Traffic overage metered.*

**Sub-group B — Managed CMS** (your platform — WordPress, Drupal — hosted by us)

*The model (per Chris):* **We host your existing site at the cost of hosting** — your choice of self-serve **Cloud** or **Managed Hosting** (the §Category 2 prices, no CMS premium). **You then pay separately for support and feature updates** via a Support pack (§Category 8). So there is no standalone "managed WordPress price" — it's *hosting plan + Support pack*, composed.

*Scope:* only **self-hostable** platforms qualify — **WordPress, Drupal,** and our own **Curate.** **Squarespace is excluded** here: it's a closed, hosted-only platform that can't run on our infrastructure. (Squarespace is still a valid *migration source* — see Sub-group C.)

| Card | Price | Includes |
|---|---|---|
| **Host your CMS** (WordPress / Drupal) | Hosting at cost — from **$9.99/mo** (Cloud) or a **Managed Hosting** plan ($149+) | We host your self-hosted site as-is. Pick the hosting tier in §Category 2. |
| **+ Support pack** | see §Category 8 (Support) | Support, security patching (incl. Drupal D7/D9 LTS), and feature updates. Required for managed care; optional for bare hosting. |
| **Care (managed bridge)** | $399/mo | All-in: security, monitoring, backups, content edits on your current site — no migration. Buys time. |

> Render this sub-group as one explainer card + pointers to Hosting and Support, **not** invented price tiers. The only number still to set is the Support pack ladder (§5.0).

**Sub-group C — Migration** (move any platform → Curate; one-time)

*Sources:* WordPress, **Squarespace,** Wix, Drupal, Joomla, or custom. Squarespace and other hosted-only platforms are fine to migrate *off of* — you just can't be hosted *on* them through us.

| Card | Price |
|---|---|
| **SMB — Standard** (≤50 pages) | $6,500 |
| **SMB — Plus** (≤150 pages, commerce/membership) | $9,500 |
| **Mid — Pro** (≤500 pages, multilingual) | $18,500 |
| **Mid — Pro+** (≤1,500 pages, WCAG 2.2 AA) | $32,500 |
| **Enterprise** | Custom from $75,000 |
| **Enterprise Discovery** (refundable against project) | $7,500 |

Microcopy: *A paid migration lands you on a Curate subscription (Sub-group A).* Toggle disabled for this sub-group (one-time).

---

### Category 5 — AI Add-ons

Subhead: *Attach to any paid plan.*

| Card | Monthly | Status | Includes |
|---|---|---|---|
| **Connect (RAG)** | **[price TBD]** — included with managed Curate; standalone Contact Sales | Available | Retrieval/grounding layer; connects your systems for AI to reason over. Limit governed by number of connected systems. |
| **Intelligence (Company Brain)** | $199/mo flat | Available | Persistent memory depth, continual learning, custom domain memory. Attaches to any paid tier. |
| **Esteemed Agents** | from $99/mo | **Coming soon** | Receptionist $99 · individual agents $129–$149 · bundle from $199. Content & marketing agents. |

Agents render as a **"Coming soon"** card (chip, muted, no buy button — "Notify me"). (Per decision 3.)

---

### Category 6 — Bundles

| Card | Monthly | Annual | Founding (12 mo) | Includes |
|---|---|---|---|---|
| **Suite** (Acquire + Hire, Pro) | $399/seat | $3,990/seat | **$319/seat** | Both Pro apps. Saves $99/seat/mo vs. buying separately. |
| **Agents Bundle** | from $199/mo | — | — | All five content/marketing agents. **Coming soon.** |
| **(More bundles)** | **[TBD]** | — | — | e.g. Curate + Connect, Hosting + Create, Suite + Intelligence — tell me which to publish. |

---

### Category 7 — Hire Experts (Colleagues)

Subhead: *A 35,000-member professional network. Free to join; pay only when you place.*

| Card | Price | Includes |
|---|---|---|
| **Membership** | Free | Profile, community, career tools. Free to professionals, forever. |
| **Hire from Colleagues** | 20% placement fee (employer) | Free to post; 20% fee to the employer on a placement. No seat cost. |
| **EXP — Colleagues Enterprise** | Contact Sales | Talent experience platform tier for organizations. |

This category is a **fee/model card set**, not seat tiers — the monthly/annual toggle is hidden here.

---

### Category 8 — Support

Subhead: *Managed support packages and expert help, on demand.*

| Card | Price | Includes |
|---|---|---|
| **Support Pack — Small** | **[price TBD]** | Monthly block of managed support hours. |
| **Support Pack — Standard** | **[price TBD]** | Larger monthly block; priority response. |
| **Support Pack — Business** | **[price TBD]** | Largest block; fastest response. |
| **Expert Help** | **[price TBD]** / Contact Sales | Specialist help sourced from top Colleagues professionals. |

> Reuse the **same pack ladder** attached to Managed CMS (§Category 4 B). Define it once. (Precedent on record: blended managed-support engagements have run ~$110–$125/hr — productize into monthly blocks before publishing.)

---

## 5.0 Unpriced cards — needs a number before publish (consolidated)

Two of the earlier gaps are now **resolved**: **Create** is priced from the live page (Free / Core $39 / Pro $79 / Business $169 / Enterprise), and **Managed CMS hosting** is resolved as *hosting-at-cost* (reuses the §Category 2 Cloud/Managed prices — no CMS premium). What remains:

| Category | Card(s) | What's needed |
|---|---|---|
| **Support** *(linchpin)* | Support Packs (Small/Standard/Business); Expert Help | The pack ladder — support + feature-update price. **Blocks both Support and Managed CMS.** It's on the original Create+Support page (below the screenshot fold) — share that section and I'll wire in exact numbers. |
| Websites | Custom Build | Done-for-you custom-build floor, or confirm Contact Sales |
| AI Add-ons | Connect (RAG) standalone | Standalone price, or "included with Curate only" |
| Bundles | Additional bundles beyond Suite/Agents | Which bundles to publish, and at what price |

Everything else on the page is locked (v2 spec or the live Create page).

---

## 6. Global components

- **Independence strip** (top of page, under hero): *Websites, Hosting, the CRM, Content Management, and the rest are separate purchases that compose on your terms. Host without migrating. Hire without the website. Take only what you need.*
- **Monthly / annual toggle:** global, top-right of right panel; "2 months free" tag on annual. Hidden for Migration (one-time) and Hire Experts (fee model).
- **Founding chip:** on Acquire/Hire/Suite/Curate cards — list struck through, founding price prominent, "Founding · locked 12 mo."
- **Enterprise / Contact Sales pattern:** consistent across categories — bordered CTA, short value line, no fabricated "starting at" unless you set one.
- **Footer CTA band:** "Not sure where to start? Talk to us." → contact / book flow.

---

## 7. What Claude Design owns vs. what's locked

**Locked (do not change):** all prices, tier names, what each tier includes, the 8-category taxonomy and order, the sub-group structure, **HeroUI as the component library (§3.1) with brand yellow set as the single theme token**, card style (white/1px border/no shadow), yellow-for-primary-only, "2 months free" annual convention, the independence rule, and the **[price TBD] → Contact Sales** treatment (no invented numbers).

**Claude Design decides:** card internal layout and feature-list styling, the rail's exact visual treatment, sub-group section styling (heading + divider vs. segmented control), how Acquire/Hire tab within category 3, the "most popular" highlight execution, restrained iconography, responsive breakpoints and the mobile rail pattern, spacing/rhythm within the existing type system.

**Surface in OPEN_QUESTIONS.md:** the §5.0 unpriced cards; whether Create gets richer treatment once its model is set; whether the GoDaddy comparison microcopy stays public; the shared Support-pack ladder (used in both Content Management and Support); Curate Connect "connected systems" per tier (not yet set).
