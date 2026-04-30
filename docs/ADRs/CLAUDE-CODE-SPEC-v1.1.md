# Esteemed App v1.1 Site Build — Claude Code Execution Spec

**Repo:** `https://github.com/EsteemedIO/esteemed-digital-2026`
**Stack:** Next.js 14 (App Router), Tailwind, shadcn/ui, HeroUI, Framer Motion, lucide-react
**Branch strategy:** Create `v1.1-rebuild` branch off `main`, all work in PRs against that branch
**Deployment target:** DigitalOcean App Platform; production domain is `esteemedapp.com` (DNS pointed to the DO app)

**This spec supersedes `CLAUDE-CODE-SPEC-v3.1-rebuild.md`.** That earlier spec was written for a "Esteemed Digital" rebuild at `digital.esteemed.io`. The strategy has since evolved. Read this spec only.

---

## 0. Read These First

Before touching code, read:

1. **Esteemed_Digital_Strategy_v3_1.docx** — the strategic backbone. Sections 4 (three-tier model), 5 (Drupal migration), 6 (new builds + agents), 13 (open questions).
2. **Esteemed_Digital_Pricing_Matrix_v1_1.docx** — complete pricing catalog. Sections 3-9 map directly to site sections.
3. **migrate-page-copy.md** — drafted copy for `/migrate`.

If anything in this spec contradicts those documents, the documents win on substance and pricing. This spec wins on visual treatment, IA, and brand voice — those have evolved past what's in the older docs.

---

## 1. What Just Changed Strategically (And Why The Spec Looks Different)

The earlier v3.1 spec assumed **one brand (Esteemed Digital) at one domain (digital.esteemed.io) serving three customer tiers (SMB / Mid / Institutional) under one umbrella.** The strategy has evolved into a brand split:

- **Esteemed Digital** (existing brand at `digital.esteemed.io`) — institutional services. IEEE, Alvernia, Cambridge Redevelopment Authority. Drupal Care managed hosting for orgs not ready to migrate. Custom enterprise migrations. **Out of scope for this spec.**
- **Esteemed App** (new brand at `esteemedapp.com`) — Lovable/Replit-style chat-driven website builder + agent fleet + hosting + human services. **This is what we're building.**

**Esteemed App's brand thesis:**
- AI builds the customer's first website (chat-driven, Lovable/Replit pattern)
- Real professionals from the Esteemed Colleagues network (35,000-strong staffing pool with full-time recruiting infrastructure) support what gets built — SEO, custom development, digital strategy, sales support, ongoing growth
- This is the Builder.ai model done honestly: humans are part of the value proposition, not hidden behind AI marketing
- "Build something Esteemed" is the headline pattern

**Esteemed Digital's relationship to Esteemed App:**
- Esteemed Digital remains its own brand at its own domain serving institutional customers
- Esteemed App is operationally a sibling brand under the Esteemed parent organization
- Customers of Esteemed App do not need to know about Esteemed Digital
- The 35,000-profile Esteemed Colleagues network powers delivery on both brands

---

## 2. Hard Brand Rules (Non-Negotiable)

These constraints are decisive. Do not deviate without explicit user confirmation.

1. **Domain:** All canonical URLs use `esteemedapp.com`. The DigitalOcean default URL (`esteemed-digital-2026-h4b8x.ondigitalocean.app`) is staging only.
2. **Customer-facing brand is "Esteemed App."** Page titles, meta tags, OG tags, footer wordmark, navbar logo all read "Esteemed App." NOT "Esteemed Digital." NOT "Esteemed Apps." Singular, no qualifier.
3. **Parent disclosure is minimal.** Acknowledge Esteemed (the parent staffing company) once on `/about` as the heritage source. Do NOT mention Esteemed Digital, Cetacean Labs, Oceanic, Trident, Dolphins, or any internal product/platform names anywhere in customer-facing copy. The Oceanic App Builder powers the product but the customer never sees that name.
4. **AI agents use generic descriptive names only.** Voice Agent, Social Agent, Blog Agent, Marketing Agent, Agent Suite, Custom Agents. NEVER "Esteemed Agents" as a product brand. NEVER "Dolphins."
5. **The human-services disclosure is woven into the AI promise, not separated from it.** Every section of the site that describes AI building or AI agents must mention human support nearby. The Builder.ai failure mode was hiding the humans; we make them a visible feature. Specific lines and patterns are detailed in §5.
6. **No fake content.** No fake testimonials. No placeholder company logos for customers we don't have. No fictional team members (Luna Rivera and Finley Park come off entirely). Real names, real customers (with consent), or no names.
7. **Light mode only.** No dark mode toggle. No gradient brand treatment. Pure white background, `#282828` for primary text and dark elements, `#FEE546` for accent, `#FCD72B` for hover states. (See §3.)

---

## 3. Visual System

Replace the existing visual system entirely. The previous gradient (`--brand-start`, `--brand-mid`, `--brand-end`), the dark-mode treatment, and the Three.js dashboard are all retired.

### Color palette (Tailwind config)

```js
// tailwind.config.js — extend theme.colors
colors: {
  ink: '#282828',           // primary text and dark UI
  paper: '#FFFFFF',         // primary background
  accent: '#FEE546',        // primary accent (CTAs, highlights, brand mark)
  'accent-hover': '#FCD72B',// CTA hover state
  // Tailwind defaults remain available for grays, etc.
}
```

Use `bg-ink`, `text-ink`, `bg-paper`, `bg-accent`, `hover:bg-accent-hover` etc. throughout.

### Typography

- Body and headings: **Inter** loaded via `next/font/google` with fallback to `system-ui, -apple-system, sans-serif`
- Configure as default `font-sans` in Tailwind
- No display font pair for v1 — single family, weights 400/500/600/700

### Type scale

- Hero headline: 5xl-7xl bold (responsive — `text-5xl md:text-6xl lg:text-7xl`)
- Section headlines: 3xl-4xl bold
- Body: base, leading-relaxed
- Small/meta: sm, text-zinc-500

### CTA buttons (primary)

- Background: `bg-accent` (`#FEE546`)
- Text: `text-ink` (`#282828`)
- Hover: `hover:bg-accent-hover` (`#FCD72B`)
- Border-radius: `rounded-full` (pill shape, GoDaddy-feel)
- Padding: `px-8 py-4` for hero CTAs, `px-6 py-3` for inline CTAs
- Bold weight, no all-caps

### CTA buttons (secondary)

- Background: `bg-paper` with `border-2 border-ink`
- Text: `text-ink`
- Hover: `bg-ink text-paper` (inversion)
- Same radius and padding patterns as primary

### Card pattern

- Background: `bg-paper`
- Border: `border border-zinc-200`
- Radius: `rounded-2xl`
- Shadow: `shadow-sm` default, `shadow-lg` on hover for interactive cards
- Padding: `p-6` default, `p-8` for prominent cards

### Page section spacing

- Vertical padding: `py-20` standard, `py-28` for hero, `py-16` for compact sections
- Horizontal: `max-w-7xl mx-auto px-6` standard container
- Content sections alternate: white background with subtle dividers (no shaded sections — keep it clean)

### What gets retired

- All existing CSS variables (`--brand-start`, `--brand-mid`, `--brand-end`)
- All gradient backgrounds
- Dark mode classes (`dark:*` variants are removed; light only)
- The `Providers` theme switching wrapper if it exists for theme toggling — keep the wrapper if it does anything else, strip the theme-toggle behavior
- Any `bg-zinc-900`, `bg-zinc-950` dark backgrounds — replace with `bg-paper` or remove
- The `TalentDashboard3D` component — delete the file, remove Three.js dependency from `package.json` if unused elsewhere
- The `HeroCarousel` component — replace with a static chat hero (see §5). Delete the file unless it's reused elsewhere.

---

## 4. Information Architecture — Final Site Map

### Primary nav (top bar, in order):

- **Build** → `/` (home — chat hero is the product)
- **Services** → `/services`
- **Agents** → `/agents`
- **Pricing** → `/pricing`
- **About** → `/about`
- **CTA button (right side):** "Sign in" — for v1 this is a placeholder modal explaining sign-in is coming. Do NOT wire to a real auth system in v1.

### Footer nav (4 columns):

- **Build** — Start building (chat hero), Pricing, Migrate from WordPress/Drupal
- **Services** — Hosting, Migration, SEO, Email, Social, Agents, Custom Development
- **Company** — About, Contact, Esteemed Colleagues
- **Legal** — Privacy, Terms

### Pages and treatment:

| Route | Action | Notes |
|---|---|---|
| `/` (home) | **Full rewrite** | Lovable/Replit-style chat hero is the page (§5) |
| `/migrate` | **CREATE NEW** | Use `migrate-page-copy.md` as base, retune to Esteemed App brand voice |
| `/services` | **Full rewrite** | Services menu page (§6.2) |
| `/agents` | **CREATE NEW** | Agent fleet detail page with human-services pairing (§6.3) |
| `/pricing` | **CREATE NEW** | Full pricing matrix (§6.4) |
| `/about` | **Full rewrite** | Heritage, Esteemed parent, Colleagues network as moat (§6.5) |
| `/contact` | **Light edit** | Form copy aligned, calendar placeholder (§6.6) |
| `/products` | **DELETE** or 301 → `/services` |
| `/solutions` | **DELETE** or 301 → `/services` |
| `/deployment` | **DELETE** |
| `/developers` | **DELETE** |
| `/research` | **DELETE** (return as `/case-studies` post-launch) |
| `/news` | **DELETE** (return as `/blog` post-launch) |
| `/team` | **HIDE FROM NAV** for v1 — single-team-member page is sparse without real list |
| `/careers` | **DELETE** for v1 — careers belong on parent Esteemed brand site, not Esteemed App |
| `/partners` | **DELETE** for v1 |
| `/privacy` | **KEEP**, content review for accuracy |
| `/terms` | **KEEP**, content review for accuracy |

For deletions: delete the page files in `app/<route>/page.jsx`. Update `app/sitemap.js` to remove. Update `next.config.js` redirects where appropriate (especially `/products` and `/solutions` which had nav prominence).

---

## 5. Homepage — The Chat Hero (`app/page.jsx`)

**This is the most important page. It IS the product experience for v1.**

### Structure (top to bottom)

#### Section 1: Chat hero (full viewport on desktop, ~85vh)

- **Vertically centered, single column, max-width ~720px**
- White background, no imagery, no carousel, no animation beyond subtle fade-in on load
- **Top eyebrow (small, ink color):** "Build something Esteemed."
- **Headline (5xl-7xl, bold, ink):** "Tell us what you want your website to do."
- **Subhead (lg, zinc-600):** "We'll build it. Then real people from our team help you grow it."
- **Chat input component (centered, prominent):**
  - Single multi-line textarea, autofocus on page load
  - Placeholder text rotates through 3-4 examples every 3 seconds:
    - "A booking site for my dog grooming business in Olympia..."
    - "A donation site for our nonprofit, with a recurring giving option..."
    - "A site for my law practice with intake forms and case studies..."
    - "An e-commerce store for my pottery, with Square integration..."
  - Border: `border-2 border-zinc-300`, `rounded-2xl`, `p-6`
  - Below input, right-aligned: primary CTA button "Build it →" (accent color)
  - Submit behavior: opens sign-in modal (see §5.5 for modal spec)
- **Below the input (small, zinc-500):** "You're not alone. Real people from our 35,000-strong team help you grow what you build." (This single line is the human-services disclosure that satisfies the brand rule from §2.5.)

#### Section 2: How it works (3-column)

Three columns, equal weight:

1. **Build with AI** — "Tell us what you want. Our AI builds your first version in minutes."
2. **Talk to your site** — "Edit your site by typing what you want changed. No tickets. No waiting on an agency."
3. **Grow with real people** — "Need SEO, custom development, or strategy help? Our 35,000-strong network of professionals is ready when you are."

Each column: large icon (lucide-react, ink color), bold headline, 2-3 sentence description.

#### Section 3: Hosting tier preview

Three cards (Starter $149, Growth $249, Pro $399). Read from `lib/data.js`. "Growth" marked with accent-color "Most popular" ribbon. Each card has features list and "Choose [tier]" CTA → `/pricing`.

#### Section 4: Agent fleet preview

Five cards in a grid (Voice $99, Social $129, Blog $149, Marketing $199, Custom from $299). Each: agent name, price, one-line tagline, lucide icon, link to `/agents`.

Section header: "AI agents that work like part of your team."

Below the grid, small text: "Every agent runs on what you build. Real people on our team help you train them, set them up, and get the most out of them."

#### Section 5: The human network behind it

This is the section that makes the Builder.ai-style positioning explicit. Headline: "AI builds it. Real people help you grow it."

Two-column layout:

- **Left:** 3-paragraph prose explaining that Esteemed App is built on top of Esteemed, a 15-year-old staffing company with a 35,000-strong network of vetted IT professionals. Full-time recruiting infrastructure means we can pull SEO experts, custom developers, digital strategists, and sales support on demand.

- **Right:** Service categories with light hover effects:
  - Custom Development
  - SEO Strategy & Execution
  - Email Marketing Operations
  - Sales & Lead Generation
  - Digital Strategy Consulting
  - 24/7 Support & Concierge

CTA at bottom: "See human services" → `/services`

#### Section 6: Customers we've supported

Headline: "Trusted by organizations that take their websites seriously."

Text-only mention of anchor references (until logo consent):
- IEEE (global professional association)
- Alvernia University (higher education)
- Cambridge Redevelopment Authority (Massachusetts state agency)

No fake logos. No placeholder customer cards. If consent for logos lands later, swap to real logos.

#### Section 7: Final CTA strip

Background: `bg-ink` (full-width black band). White text. Yellow accent CTA.

Headline: "Ready to build something Esteemed?"
CTA: "Start building →" (scrolls back to chat hero, or opens sign-in modal directly)

### What does NOT go on the homepage

- Hero carousel (retired)
- 3D dashboard component (retired)
- Industries grid (delete — was AI-platform framing)
- Developer resources section (delete — wrong audience)
- Esteemed Intelligence / AI / Agents product blocks (delete — those products don't exist in this brand)
- Sarah Johnson testimonial (delete — fake)
- Oracle/Salesforce/Microsoft/Dell/IBM/Accenture logo strip (delete — fake)
- "From Cetacean Labs" eyebrow (delete — brand rule violation)

### Sign-in modal spec (§5.5)

Triggered by: chat input "Build it →" submission, or top-nav "Sign in" button.

Modal contents:
- Headline: "Save what you built" (or "Sign in to continue")
- Body copy: "Sign in to save your work and start collaborating with our team. We'll keep what you typed."
- Email field (required)
- Optional: name field
- Hidden field carries the prompt text from the chat hero (if modal was triggered by chat submit)
- CTA: "Continue" (accent color)
- Below CTA, small text: "We respond within one business day. We don't share your information."

Submission behavior for v1:
- POST to `/api/lead-capture` (Next.js API route, server-side)
- API route performs three operations in parallel:
  1. **Oceanic CRM:** Create a Contact (name + email). Log an Activity on that Contact with the prompt text and a `source` field identifying which page captured the lead (`"home-chat-hero"`, `"migrate-hero"`, `"pricing-cta"`, `"agents-cta"`, `"services-cta"`, `"contact-form"`).
  2. **Resend (prospect):** Send a confirmation email to the submitted email address. Subject: "We got your idea." Body: brief confirmation that includes their submitted prompt text and sets the expectation that a real person will be in touch within one business day.
  3. **Resend (internal):** Send notification email to `chris@esteemedapp.com` (or whichever Gmail box gets set up for inbound) with the lead details (name, email, prompt text, source page, timestamp).
- All three calls wrapped in error handling — if any one fails, the lead is still considered captured and the user is redirected. Failures get logged for retry, not surfaced to the user.
- Redirect to `/welcome` confirmation page that says: "Thanks. We have what you typed. A real person from our team will be in touch within one business day to start building with you."
- Environment variables required: `OCEANIC_CRM_API_KEY`, `OCEANIC_CRM_BASE_URL`, `RESEND_API_KEY`, `INTERNAL_NOTIFICATION_EMAIL`
- For v2: this same modal swaps in real auth + real generation when the Oceanic App Builder integration is ready

**Honest note on this:** The v1 sign-in modal is a lead capture, not a real product login. The user message has been clear that App Builder is in final testing and gets ported in v2. The modal copy explicitly states a person will be in touch — this is honest about the model and avoids the Builder.ai failure mode.

---

## 6. New and Rewritten Pages

### 6.1 `/migrate`

Port `migrate-page-copy.md` to JSX. Keep section structure from that doc. Three changes from the original draft:

- Update brand to "Esteemed App" throughout (was "Esteemed Digital")
- Add the human-services pairing line in the hero subhead and in Section 6 (agents)
- Update footer nav and CTA destinations to match Esteemed App IA

Hero CTA opens the sign-in modal (same modal as homepage), which captures the prospect's current site URL plus their interest in migration.

### 6.2 `/services`

Services menu page. Single source of truth for what Esteemed App offers.

Sections:
1. **Hero** — "Everything you need to run your website" / subhead about consolidating agencies into one team
2. **AI services grid** — 4 cards for the off-the-shelf agents (Voice, Social, Blog, Marketing) + 1 card for Custom Agents
3. **Hosting & Support** — three tier cards (Starter, Growth, Pro), CTA to `/pricing`
4. **Human services grid** — 6 cards covering the human-delivered services backed by the Esteemed Colleagues network:
   - Custom Development (from $150/hr or fixed-scope)
   - SEO Strategy & Management (productized retainers, see /pricing)
   - Email Marketing Management (productized retainers)
   - Social Media Management (Hybrid AI + human, productized retainers)
   - Digital Strategy Consulting (engagement-based)
   - Sales & Lead Generation Support (engagement-based)
5. **Migration** — short section linking to `/migrate`
6. **Final CTA** — "Tell us what you need" → opens sign-in modal

### 6.3 `/agents`

Agent fleet detail page. **The human-services pairing is the differentiator and must be present.**

Sections:
1. **Hero** — "AI agents that work like part of your team. With real people backing them up."
2. **The four off-the-shelf agents** — full detail card per agent (Voice, Social, Blog, Marketing). Each card: name, price, tagline, 3-paragraph description, "Add to my plan" CTA. Each card has a small footer line: "Setup and tuning support available from our team."
3. **Agent Suite bundle** — feature card: "Get all four for $499/mo, save $77 vs a la carte"
4. **Custom Agents** — section explaining custom builds (from $299/mo), with a callout: "Our team builds the agent with you. Tell us what your business needs done; we'll design, build, train, and maintain the agent."
5. **How it works** — 4-step flow:
   - 1) You sign up for an agent (or the Suite)
   - 2) Our team trains it on your content and your voice
   - 3) You review and approve before it goes live
   - 4) Our team monitors and tunes the agent as your business grows
6. **The team behind the agents** — 2-column section. Left: "Every agent gets human oversight." Right: list of human roles available — agent trainers, prompt engineers, voice modelers, custom developers.
7. **Final CTA** → sign-in modal

### 6.4 `/pricing`

Complete pricing catalog. Long page, designed to be honest and procurement-friendly.

Sections (with anchor links at top of page for fast jumping):
1. **Hero** — "Honest pricing. Published openly." / subhead about value-led positioning
2. **Anchor nav strip** — jump links: Hosting / Migration / Agents / SEO / Email / Social / Bundles
3. **Hosting** — three SMB tiers (data from `hostingTiers`)
4. **Migration** — pricing table (data from `migrationPackages`)
5. **Agents** — agent fleet pricing (data from `agents`, `agentSuite`, `customAgents`)
6. **SEO Management** — three SMB tiers (data from `seoTiers`)
7. **Email Marketing** — three SMB tiers (data from `emailTiers`)
8. **Social Media** — AI-only + three Hybrid tiers (data from `socialTiers`)
9. **Bundles** — three bundles (Starter $299, Growth $899, Pro $2,399). "Growth Bundle" marked recommended.
10. **Custom and Enterprise** — short section: "Need something larger? Custom development, enterprise migrations, multi-site portfolios — we scope these per engagement. Contact us for pricing."
11. **FAQ** — 4-6 pricing questions (12-month agreement, cancellation, prorating, discounts, what counts as an "edit hour")
12. **Final CTA** → sign-in modal

### 6.5 `/about`

The brand exception page where parent disclosure happens. Sections:

1. **Hero** — "Built on 15 years of staffing the work."
2. **The story** — 3-paragraph prose:
   - Esteemed App is the website-building product from Esteemed, a staffing company that's been placing IT professionals since 2011.
   - The 35,000-person Esteemed Colleagues network powers everything we build. When you sign up, you're not just getting a website — you're getting access to vetted professionals our recruiting team has been curating for over a decade.
   - This is the difference between us and other AI website builders: AI builds your first version, but real people are there to help you grow it. We've been a staffing company first and an AI company second, and that order matters.
3. **Heritage timeline** — visual timeline:
   - 2011 — Founded as Celebrate Drupal, supporting state and nonprofit websites including WA Veterans Affairs
   - 2015 — Expanded into Esteemed staffing, serving Fortune 500 IT contingent labor needs
   - Today — 35,000 active professional profiles. Operates Drupal Jobs as a community service.
4. **Anchor clients** — text-only mention (IEEE, Alvernia University, Cambridge Redevelopment Authority) until logo consent
5. **Esteemed Colleagues network** — section explaining the 35,000-person pool, the recruiting infrastructure, and how it powers Esteemed App delivery
6. **Drupal community** — short section about ongoing community involvement, links to drupal.org Drupal Jobs page
7. **Parent footnote (single small line at bottom):** "Esteemed App is part of the Esteemed family of companies."
8. **Final CTA** → `/contact`

### 6.6 `/contact`

Form fields: name, email, message, optional phone, optional current website URL.

Update copy: "Tell us what you're building, or what you need. A real person from our team will respond within one business day."

Calendar embed: placeholder div with comment for which calendar tool gets integrated. Recommend Cal.com (open source, embeddable). Flag in `LAUNCH-BLOCKERS.md`.

---

## 7. The `lib/data.js` Rewrite

Replace the file completely. Required exports:

```js
import {
  Phone, Share2, FileText, Mail, Sparkles,
  Code, Search, Send, Megaphone, BarChart3, HeadphonesIcon,
  // ...
} from "lucide-react";

// AI agents — generic descriptive names ONLY
export const agents = [
  { key: "voice", name: "Voice Agent", price: 99, tagline: "Your website answers missed calls.", icon: Phone, description: "..." },
  { key: "social", name: "Social Agent", price: 129, tagline: "Posts in your voice on every platform.", icon: Share2, description: "..." },
  { key: "blog", name: "Blog Agent", price: 149, tagline: "Writes posts that sound like you wrote them.", icon: FileText, description: "..." },
  { key: "marketing", name: "Marketing Agent", price: 199, tagline: "Email campaigns and automation, on autopilot.", icon: Mail, description: "..." },
];

export const agentSuite = {
  name: "Agent Suite",
  price: 499,
  alacarte: 576,
  savings: 77,
  includesKeys: ["voice", "social", "blog", "marketing"],
};

export const customAgents = {
  name: "Custom Agents",
  priceFrom: 299,
  priceDisplay: "From $299/mo",
  description: "Our team builds the agent with you. Tell us what your business needs done; we design, build, train, and maintain it.",
};

// Hosting tiers
export const hostingTiers = [
  { key: "starter", name: "Starter", price: 149, recommended: false, features: [...], cta: "Choose Starter" },
  { key: "growth", name: "Growth", price: 249, recommended: true, features: [...], cta: "Choose Growth" },
  { key: "pro", name: "Pro", price: 399, recommended: false, features: [...], cta: "Choose Pro" },
];

// Institutional hosting (referenced once on /pricing institutional section)
export const institutionalHostingNote = "Institutional hosting starts at $1,499/mo with custom SLAs, multi-environment, and compliance scope. Contact us for details.";

// Migration packages
export const migrationPackages = [
  { key: "standard", name: "Standard", price: 0, priceDisplay: "Free with 12-mo agreement", scope: "Up to 50 pages, content + media, basic forms, redirect map. WordPress or Drupal source." },
  { key: "plus", name: "Plus", price: 3500, priceDisplay: "$3,500", scope: "Up to 150 pages, e-commerce or membership, one custom integration." },
  { key: "pro", name: "Pro", price: 12500, priceDisplay: "$12,500", scope: "Up to 500 pages, multilingual, two integrations, accessibility audit, six-month managed support." },
  { key: "enterprise", name: "Enterprise", priceFrom: 25000, priceDisplay: "From $25,000", scope: "Multi-site, complex permissions, deep integrations. Starts with $5K paid discovery." },
];

// SEO tiers
export const seoTiers = [
  { key: "starter", name: "SEO Starter", price: 399, features: [...] },
  { key: "growth", name: "SEO Growth", price: 799, features: [...] },
  { key: "pro", name: "SEO Pro", price: 1499, features: [...] },
];

// Email marketing tiers
export const emailTiers = [
  { key: "starter", name: "Email Starter", price: 299, features: [...] },
  { key: "growth", name: "Email Growth", price: 599, features: [...] },
  { key: "pro", name: "Email Pro", price: 1199, features: [...] },
];

// Social tiers — AI-only + Hybrid
export const socialTiers = [
  { key: "ai-only", name: "Social Agent (AI-only)", price: 129, type: "ai", features: [...] },
  { key: "hybrid-starter", name: "Hybrid Starter", price: 499, type: "hybrid", features: [...] },
  { key: "hybrid-growth", name: "Hybrid Growth", price: 999, type: "hybrid", features: [...] },
  { key: "hybrid-pro", name: "Hybrid Pro", price: 1799, type: "hybrid", features: [...] },
];

// Bundles
export const bundles = [
  { key: "starter", name: "Starter Bundle", price: 299, alacarte: 377, savings: "21%", recommended: false, includes: ["Starter Hosting", "Voice Agent", "Social Agent"] },
  { key: "growth", name: "Growth Bundle", price: 899, alacarte: 1148, savings: "22%", recommended: true, includes: ["Growth Hosting", "Agent Suite (all 4)", "SEO Starter"] },
  { key: "pro", name: "Pro Bundle", price: 2399, alacarte: 2795, savings: "14%", recommended: false, includes: ["Pro Hosting", "Agent Suite", "SEO Growth", "Email Growth", "Hybrid Social Starter"] },
];

// Human services categories (for /services and homepage Section 5)
export const humanServices = [
  { key: "custom-dev", name: "Custom Development", icon: Code, blurb: "Hourly or fixed-scope. From web apps to integrations.", priceNote: "From $150/hr" },
  { key: "seo", name: "SEO Strategy & Management", icon: Search, blurb: "Real SEO professionals manage your search presence.", priceNote: "From $399/mo" },
  { key: "email", name: "Email Marketing Operations", icon: Send, blurb: "Campaigns, automation, deliverability, all managed.", priceNote: "From $299/mo" },
  { key: "social", name: "Social Media Management", icon: Megaphone, blurb: "AI drafts, real humans engage and grow.", priceNote: "From $499/mo" },
  { key: "strategy", name: "Digital Strategy Consulting", icon: BarChart3, blurb: "Senior strategists from our 35,000-person network.", priceNote: "Engagement-based" },
  { key: "sales", name: "Sales & Lead Generation", icon: HeadphonesIcon, blurb: "Sales support and lead generation services.", priceNote: "Engagement-based" },
];

// Anchor references (text-only until logo consent)
export const anchorReferences = [
  { name: "IEEE", description: "Global professional association" },
  { name: "Alvernia University", description: "Higher education" },
  { name: "Cambridge Redevelopment Authority", description: "Massachusetts state agency" },
];

// Heritage timeline for /about
export const heritage = [
  { year: "2011", event: "Chris McGrath founds Celebrate Drupal, supporting WA Veterans Affairs and a generation of state and nonprofit Drupal websites." },
  { year: "2015", event: "Founded the Olympia Drupal meetup. Esteemed staffing launches, serving Fortune 500 IT contingent labor needs." },
  { year: "2024", event: "Esteemed Colleagues network reaches 35,000 active professional profiles." },
  { year: "Today", event: "Esteemed App launches, combining 15 years of staffing infrastructure with AI-driven website building." },
];

// FAQ for /migrate (from migrate-page-copy.md §8)
export const migrateFAQ = [...];

// FAQ for /pricing
export const pricingFAQ = [...];
```

**Remove from data.js entirely:**
- `products` array (5 enterprise AI products)
- `services` array (old structure)
- `deployments`
- `compliance`
- `partners`
- `research`
- `news`
- `devResources`
- `solutions`
- `team` (Luna and Finley fictional members removed; real team list to be provided separately, hide `/team` from nav until then)
- `Github` icon export

---

## 8. Layout, Navbar, Footer

### `app/layout.jsx`

Update metadata:
```js
export const metadata = {
  title: {
    default: "Esteemed App — Build something Esteemed",
    template: "%s | Esteemed App",
  },
  description: "Tell us what you want your website to do. We'll build it. Then real people from our team help you grow it.",
  keywords: ["AI website builder", "small business website", "WordPress migration", "Drupal migration", "managed hosting", "AI agents for business"],
  openGraph: {
    title: "Esteemed App — Build something Esteemed",
    description: "AI builds your website. Real people help you grow it.",
    url: "https://esteemedapp.com",
    siteName: "Esteemed App",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esteemed App",
    description: "AI builds your website. Real people help you grow it.",
  },
};
```

Update body classes for light-only:
```jsx
<body className="bg-paper text-ink antialiased">
```

Remove the `Providers` theme-toggle wrapper if it only handles dark mode. Keep if it does anything else.

### `components/Navbar.jsx`

Rebuild structure:
- Remove HeroUI `Navbar` if it's adding weight; replace with simple Tailwind nav
- Remove `products` import from `lib/data` (it's gone)
- Logo on left: "Esteemed App" wordmark (text-based for v1, swap to SVG when designed)
- Center/right: Build / Services / Agents / Pricing / About
- Far right: "Sign in" button (accent color, pill, opens placeholder modal explaining auth coming v2)
- Mobile: hamburger menu using `hamburger-react` (already in deps), drawer pattern, same items
- Sticky on scroll with subtle shadow
- Background: `bg-paper`, border-bottom on scroll only

### `components/Footer.jsx`

Rebuild:
- 4-column layout per §4 footer nav
- Top of footer: "Esteemed App" wordmark + tagline ("Build something Esteemed.")
- Bottom strip: copyright + "Part of the Esteemed family of companies." + privacy/terms links
- Background: `bg-ink`, text in `text-paper` and `text-zinc-400`
- Accent color used sparingly for hover states on links
- Remove all references to: Esteemed Intelligence, Esteemed AI, Esteemed Agents (as products), Documentation, Research, Deployment, Partners, Newsroom, Cetacean Labs, Oceanic, Trident, Dolphins

---

## 9. Components to Build, Modify, or Retire

### Build new

- **`components/ChatHero.jsx`** — the homepage chat input (§5.1). Includes rotating placeholder logic, autofocus, submit handler.
- **`components/SignInModal.jsx`** — the sign-in/lead-capture modal (§5.5). Replaces the existing `PartnerModal` and `DemoModal` patterns.
- **`components/AgentCard.jsx`** — reusable agent display card for homepage and `/agents`
- **`components/PricingTier.jsx`** — reusable pricing tier card
- **`components/HumanServiceCard.jsx`** — reusable human services card

### Modify

- **`components/Navbar.jsx`** — full rewrite per §8
- **`components/Footer.jsx`** — full rewrite per §8

### Retire

- **`components/HeroCarousel.jsx`** — delete file
- **`components/TalentDashboard3D.jsx`** — delete file. Remove `three` and `@types/three` from `package.json` if not used elsewhere.
- **`components/modals/PartnerModal.jsx`** — delete or merge into SignInModal pattern
- **`components/modals/DemoModal.jsx`** — delete or merge into SignInModal pattern
- **`components/ui/cog.tsx`, `zap.tsx`, `cpu.tsx`, `users.tsx`, `sparkles.tsx`, `layers.tsx`, `activity.tsx`** — these appear to be custom-styled icon wrappers. Use lucide-react directly instead. Delete unless they have unique behavior.

### Dependencies to remove

After component cleanup, audit `package.json` for unused dependencies:
- `three` and `@types/three` (if TalentDashboard3D is the only consumer)
- `@heroui/react` (if Navbar rebuild eliminates the only use)
- `motion` (vs `framer-motion` — pick one, both are present in `package.json`)

---

## 10. Open Items the User Must Decide

Surface these in `LAUNCH-BLOCKERS.md` at the repo root:

1. **Domain DNS.** `esteemedapp.com` purchased; needs to be pointed at the DigitalOcean App Platform deploy. Add custom domain in DO App settings, configure CNAME at registrar.
2. **Resend domain verification.** Before launch: SPF, DKIM, and DMARC records added to `esteemedapp.com` per Resend's domain setup instructions. Required for transactional email deliverability.
3. **Internal notification email.** A Gmail box at `chris@esteemedapp.com` (or similar) needs to be set up before launch to receive lead notifications. Set as `INTERNAL_NOTIFICATION_EMAIL` env var.
4. **Oceanic CRM API access.** API keys and base URL needed as env vars (`OCEANIC_CRM_API_KEY`, `OCEANIC_CRM_BASE_URL`). Confirm Contact and Activity object shapes with the Oceanic CRM team before integration.
5. **Real team list.** `/team` is hidden from nav; if a team page launches with v1, real names + bios needed.
6. **Anchor logo consent.** Text-only mention is fine for v1. Logo display requires explicit permission.
7. **Calendar tool for `/contact`.** Cal.com recommended. Confirm choice.
8. **Privacy and Terms.** Existing pages need review for accuracy under the new Esteemed App brand.
9. **Real customer testimonials.** None for v1. Plan to collect after first 5 customers.
10. **Service delivery confirmation.** SEO, custom dev, digital strategy: confirmed deliverable from 35,000-pool. Email marketing + human social: confirm with full-time recruiter that profiles are reachable at acceptable cost/time-to-fill before launch.
11. **Custom Development hourly rate.** `humanServices` data shows "From $150/hr" — confirm or adjust.
12. **Navbar "Sign in" wording.** Currently spec'd as "Sign in" opening a placeholder modal. Recommend changing to "Get started" opening the same lead-capture modal as the chat hero — more honest about what happens, matches the funnel. Pending user decision.

---

## 11. Execution Order

Each step is a separate PR.

**PR 1 — Foundation:**
- Tailwind config update with new palette
- `app/layout.jsx` metadata + body classes
- `lib/data.js` complete rewrite per §7
- Inter font setup via `next/font/google`
- Navbar and Footer rewrites
- Delete `/products`, `/solutions`, `/deployment`, `/developers`, `/research`, `/news`, `/team`, `/careers`, `/partners` page files (if Path A from §4)
- Hide `/team` from nav per §4
- Delete retired components (HeroCarousel, TalentDashboard3D, old modals)
- Audit and clean `package.json` dependencies
- Update `app/sitemap.js`

**PR 2 — Homepage + lead capture:**
- New `app/page.jsx` per §5
- New `components/ChatHero.jsx`
- New `components/SignInModal.jsx`
- New `app/api/lead-capture/route.js` server-side handler that calls Oceanic CRM + Resend per §5.5
- New `app/welcome/page.jsx` confirmation page
- Resend client setup (`lib/resend.js` or similar)
- Oceanic CRM client setup (`lib/oceanic-crm.js` or similar) — minimal client, just Contact create + Activity log endpoints
- Environment variable handling — `.env.local.example` documenting required vars (`OCEANIC_CRM_API_KEY`, `OCEANIC_CRM_BASE_URL`, `RESEND_API_KEY`, `INTERNAL_NOTIFICATION_EMAIL`)

**PR 3 — Migrate page:**
- New `app/migrate/page.jsx` from `migrate-page-copy.md` content with brand updates per §6.1
- Reuses SignInModal

**PR 4 — Pricing and Agents:**
- New `app/pricing/page.jsx` per §6.4
- New `app/agents/page.jsx` per §6.3
- Anchor nav strip on pricing page

**PR 5 — Services and About:**
- Rewrite `app/services/page.jsx` per §6.2
- Rewrite `app/about/page.jsx` per §6.5

**PR 6 — Contact and cleanup:**
- Light edit `app/contact/page.jsx` per §6.6
- Final SEO sweep — meta tags, OG images, sitemap.js, robots.ts
- Lighthouse pass

**PR 7 — Launch blockers doc:**
- Create `LAUNCH-BLOCKERS.md` per §10

---

## 12. Definition of Done for v1 Launch

- [ ] All hard brand rules in §2 satisfied
- [ ] Visual system from §3 implemented (light only, palette, Inter, no dark mode artifacts)
- [ ] All placeholder content removed (Sarah Johnson, fake company logos, fictional team members, all enterprise AI product references)
- [ ] All deleted routes removed from nav and sitemap
- [ ] Five primary pages live: `/` (chat hero), `/migrate`, `/services`, `/agents`, `/pricing`, `/about`
- [ ] Chat hero functional with sign-in modal lead capture
- [ ] `/api/lead-capture` integrated with Oceanic CRM (creates Contact + logs Activity with prompt text and source field)
- [ ] Resend integrated (prospect confirmation email + internal notification email to chris@esteemedapp.com)
- [ ] Resend domain verification complete (SPF/DKIM/DMARC on esteemedapp.com)
- [ ] All required env vars set in DigitalOcean App Platform settings
- [ ] Domain `esteemedapp.com` resolves to production deploy
- [ ] All pages mobile-responsive
- [ ] Lighthouse > 90 on Performance, Accessibility, Best Practices
- [ ] Privacy and Terms reviewed
- [ ] `LAUNCH-BLOCKERS.md` exists with all open items addressed or explicitly accepted

---

## 13. What This Spec Does NOT Cover

- Real authentication (v2)
- Oceanic App Builder integration (v2)
- Customer dashboard / portal (v2)
- Payment processing (v2 — required for self-serve checkout)
- A/B testing infrastructure
- Multi-language support
- Anchor case studies as full pages (text-only until consent)
- Blog / content marketing infrastructure
- Tests (existing repo has none; not adding in v1)

---

**End of spec v1.1. Ready for Claude Code execution.**
