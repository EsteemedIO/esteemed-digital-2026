# Esteemed v1.5 — Site Build Spec

**Domain:** esteemed.io
**Stack:** React / Next.js (existing repo)
**Pattern:** Replit homepage + Figma Products IA + Login fork (Create | Hire) routing to working apps
**Positioning:** AI + Human gold standard
**Approach:** Revision of existing esteemed.io, not from-scratch rebuild

This spec supersedes all prior specs (v3.1, v1.1, v1.2, v1.3, v1.4).

**v1.5 key change from v1.4:** The Esteemed Create app and Esteemed Colleagues app are both close enough to launch that the marketing site routes directly to them rather than treating the Create side as lead capture. Chat hero submit passes prompt text into the Create app. Login fork routes both Create and Hire to working products. Lead capture remains for Contact Us / Request Demo flows only.

---

## 1. Brand Architecture

**Esteemed** is the parent brand and the technology platform. Everything ships under esteemed.io.

**Six items in the Products & Services dropdown:**

| Item | Type | What it is |
|---|---|---|
| **Esteemed Create** | Product | AI-driven website/app builder. Chat-driven Lovable/Replit-style UX. Includes **Studio** — a built-in web IDE for code-level edits to your Create app. |
| **Esteemed Cloud** | Product | Hosting infrastructure for apps built with Create. |
| **Esteemed Agents** | Product | Off-the-shelf agent fleet starting with **Echo** (RAG AI Assistant). Generic role-based agents follow (web + talent sourcing related). |
| **Esteemed Intelligence** | Product | Rebranded from Trident. Coherence/intelligence layer powering the agents. |
| **Esteemed Colleagues** | Service | Two-sided talent marketplace. Employer Dashboard (formerly Esteemed Talent) + Career Center features merged in. |
| **Esteemed Support** | Service | Productized human support. Available as add-on to Esteemed apps OR standalone for customers with apps elsewhere. |

**Studio note:** Studio is a feature of Create at v1 — not a standalone product, not in the Products & Services dropdown. Mentioned on the Create product page as a built-in capability. Roadmap: spin Studio out as a standalone Enterprise-targeted product in a future release once Create is established.

The dropdown header reads **"Products & Services"** because Colleagues and Support are genuinely services (humans doing work) and the distinction is honest.

**Esteemed Digital** dissolves as a brand. The legal entity persists for IEEE/Alvernia/Cambridge contracts. digital.esteemed.io redirects to esteemed.io/solutions/enterprise (or wherever institutional services land in the new IA — likely under Solutions > Segments).

---

## 2. Positioning

**Tagline pattern (Replit-style):** "Meet Esteemed Create" / "Meet Esteemed Colleagues" / etc.

**Master tagline:** AI + Human gold standard. Yellow star is the brand mark for this pillar.

**The flywheel is the moat:**
- **Create** generates engagements
- **Colleagues** staffs them with vetted humans
- **Agents** automate operational work
- **Intelligence** powers all of it

No competitor has all four under one brand.

---

## 3. Visual System

- **Colors:** `#FFFFFF` paper, `#282828` ink, `#FEE546` accent (yellow star), `#FCD72B` hover
- **Type:** Inter, system-ui fallback
- **Light mode only** — strip dark-mode artifacts
- **Pattern:** GoDaddy-clean structure × Replit/Lovable hero × Figma Products IA
- CTAs: pill-shaped (`rounded-full`), accent bg, ink text, hover swap to `#FCD72B`
- Cards: `rounded-2xl`, `border border-zinc-200`, `shadow-sm`
- Section spacing: generous, white space heavy

---

## 4. Homepage (esteemed.io/)

### Section 1: Chat hero (Replit pattern)

- Centered, ~720px max width, ~85vh
- **Eyebrow:** "AI + Human gold standard"
- **Headline:** "Build everything you need with Esteemed."
- **Subhead:** "AI to start. Experts to grow."
- **Chat input:** autofocus, rotating placeholders ("A booking site for my dog grooming business..." / "An e-commerce store with Square integration..." / "A donation site for our nonprofit..." / "A site for my law practice...")
- **Submit CTA:** "Build it →" (accent, pill)
- **Submit behavior:** Routes directly to the Esteemed Create app with the prompt text passed through as a query parameter (e.g., `https://create.esteemed.io/?prompt=<urlencoded>`). User signs up inside Create to save the session — Replit/Lovable pattern. The chat IS the product entry point, not a lead capture form.

### Section 2: Meet Esteemed Create (featured product)

Full-width feature block, not just a card — Create is the lead product on the homepage.

- **Headline:** "Meet Esteemed Create"
- **Subhead:** "Build websites and apps by talking to AI."
- Three-column "how it works" preview (matches what's on `/products/create`)
- **CTA:** "Try Create →" (opens chat hero focus or scrolls to top)

### Section 3: Powered by Esteemed Colleagues

This is the differentiator block. Sits directly below the Meet Create block.

- **Headline:** "Powered by Esteemed Colleagues"
- **Subhead:** "AI builds your first version. Real experts from our marketplace help you grow it."
- **Replit-style numbered flow (1 → 2 → 3 → 4):**
  1. **Build** — Tell Create what you want. AI builds your first version.
  2. **Match** — Need design polish, custom code, SEO, or strategy? We match you with experts from Colleagues.
  3. **Work** — Your expert delivers. You stay in control with project management built in.
  4. **Grow** — Your site is live. Your expert is on call when you need more.
- **Secondary CTA at bottom of block:** "Already have your app and need expert support? **Post a Job →**" — routes directly to the **Colleagues Hire signup flow** (production app). Not lead capture.
- Yellow star iconography ties this block to the AI+Human gold standard pillar

### Section 4: Other products & services

Five smaller cards (Create is featured above in Sections 2-3, so this section covers the rest):

**Products:**
1. **Esteemed Cloud** — "Hosting that scales with you. Built for what you build."
2. **Esteemed Agents** — "AI agents that handle the work. Starting with Echo."
3. **Esteemed Intelligence** — "The intelligence layer that powers it all."

**Services:**
4. **Esteemed Colleagues** — "The marketplace for vetted experts. Hire or get hired."
5. **Esteemed Support** — "Get expert human help with what you build or existing apps."

### Section 5: Audience segments

Three cards: **Personal** / **Small Business** / **Enterprise**. Each links to the corresponding Solutions > Segments page.

### Section 6: Heritage

Single paragraph: "Founded in 2011 as Drupalcontractors.com. Rebranded to Esteemed in 2019. 20,000+ professionals, real clients including IEEE, Alvernia University, and the Cambridge Redevelopment Authority."

### Section 7: Final CTA

Black band (`bg-ink`), yellow CTA. "Ready to build something Esteemed? Start →" — scrolls to chat hero (which on submit routes directly to the Create app per §1).

---

## 5. Navigation

The existing dropdown shells, hover behavior, and layout patterns stay intact. Only labels and contents change. Audience segmentation moves *inside* Solutions rather than being top-level.

### Top nav (left to right):
- Logo (Esteemed wordmark)
- **Products & Services** (dropdown — was "Personal"): Create, Studio, Cloud, Agents, Intelligence, Colleagues, Support
- **Solutions** (dropdown — was "Small Business"): Use Cases, Roles, Segments
- **Resources** (dropdown — was "Enterprise"): existing dropdown structure with content harvested from current site (Become a Partner, Resource Center, Events, Newsroom, etc.)
- **Help** (existing)
- **Login** (right side, accent CTA — opens Create | Hire fork modal, see §7)

### Products & Services dropdown — visual grouping:

Within the dropdown, group items so customers can scan:

**Products:**
- Esteemed Create — Build websites and apps with AI (includes Studio for code-level edits)
- Esteemed Cloud — Hosting that scales with you
- Esteemed Agents — AI agents that handle the work
- Esteemed Intelligence — The intelligence layer

**Services:**
- Esteemed Colleagues — Hire vetted experts
- Esteemed Support — Get expert human help with what you build or existing apps

A subtle visual separator (or subheading) between the two groups. Same visual treatment otherwise.

### Solutions dropdown structure:

Three columns or sections inside the dropdown:

**Use Cases:** representative customer outcomes (e.g., "Launch a marketing site," "Build an internal tool," "Hire technical talent," "Modernize a legacy site")
**Roles:** who's buying (e.g., "Marketing leaders," "Founders," "IT directors," "HR teams")
**Segments:** company size / vertical (e.g., "Startups," "Small Business," "Mid-market," "Enterprise," "Nonprofits," "Higher Ed")

Use Cases, Roles, and Segments each link to landing pages structured around that filter. Most existing esteemed.io segment content lives here, just reorganized.

### Resources dropdown structure:

Harvest existing menu structure with content updates as needed. Includes things like:
- Become a Partner
- Agency Program
- Business Resource Center / Blog
- Career Catalyst Blog
- Events
- Newsroom
- Help Center

### Footer:
- Products column: Create, Studio, Cloud, Agents, Intelligence
- Services column: Colleagues, Support
- Solutions column: Use Cases, Roles, Segments
- Company column: About, Newsroom, Careers
- Legal column: Privacy, Terms, Code of Conduct
- Star mark + "AI + Human gold standard" tagline

---

## 6. Product Pages

### `/products/create`

Replit-style product page.

- Hero: "Meet Esteemed Create" + chat input (same as homepage)
- Sections: how it works (chat → preview → publish), examples gallery, **Studio feature callout** (built-in web IDE for code-level edits when AI isn't enough), hosting integration with Cloud, agent add-ons, "growing with Colleagues" cross-sell, FAQ
- Pricing pulled from Pricing Matrix v1.1 (carry forward, but note that hosting may now be sold separately as Cloud — see Open Items)
- **Studio section copy:** "Need to go deeper? Studio is built into Create. Open your app in our cloud-based IDE for direct code edits — no local setup, instant preview. (Coming as a standalone Enterprise product in a future release.)"

### `/products/cloud`

Hosting product page.

- Hero: "Meet Esteemed Cloud" + visual of dashboard or stack diagram
- **Subhead:** "Hosting that scales with you. Built for what you build."
- Sections:
  - What it includes: managed hosting, SSL, daily backups, monitoring, deploys-on-push
  - Tier structure (carry forward Starter $149 / Growth $249 / Pro $399 from Pricing Matrix v1.1, plus Institutional tiers)
  - Integrated with Create and Studio — no separate setup
  - Migrations from WordPress / Drupal supported (link to migration content)
- Cross-sell: "Already have a site? We migrate it free with a hosting agreement."

### `/products/agents`

Agent fleet page.

- Hero: "Meet Esteemed Agents — starting with Echo"
- **Echo** featured prominently — the RAG AI Assistant that ships first
- **Roadmap section:** generic role-based agents that follow (web management, talent sourcing, outreach, SEO management, others TBD). Email capture for launch notifications.
- Cross-sell: "Want a custom agent? Build one with Colleagues experts."

### `/products/intelligence`

Intelligence layer page (Trident rebranded as Esteemed Intelligence).

- Hero: "Meet Esteemed Intelligence — the layer that powers everything"
- Technical depth appropriate for developers / enterprise architects / partners
- API / MCP access details
- Direct licensing for institutional customers who want to build on the layer themselves

### `/products/colleagues`

Two-sided marketplace page. This is the entry point for both Hire (employer) and Jobseeker audiences.

- **Hero:** "Meet Esteemed Colleagues" — split treatment with two clear paths
- **For Hire (Employers) — primary, top of page:**
  - Search 20,000+ vetted talent
  - Post engagements
  - Manage projects through built-in tools (Career Center features: scheduling, project mgmt, invoicing)
  - **Primary CTA:** "Sign up to Hire →" (links to Colleagues Hire signup, the new Colleagues rebuild)
- **For Jobseekers — below the Hire block, equal weight content but secondary visual emphasis:**
  - Find work with vetted businesses
  - Get matched to engagements automatically through Esteemed Create
  - Use Career Center tools free for engagements through Esteemed
  - **CTA:** "Sign up as a Jobseeker →" (text link, links to existing/new jobseeker signup flow)
- Career Center feature callout: "Project management, scheduling, and invoicing — free for engagements through Esteemed. Paid tier coming for outside work."
- Pricing: keep current Colleagues membership tiers

### `/services/support`

Productized human support service page.

- Hero: "Meet Esteemed Support" + "Get expert human help with what you build or existing apps."
- **Subhead:** "Whether it's an Esteemed app or one you built elsewhere, our team helps you grow it."
- Sections:
  - **As an add-on:** bundled with Create / Cloud purchases at a discount
  - **As standalone:** customers with apps elsewhere can buy Support without using other Esteemed products
  - **Scope of standard hours ($110/hr):** standard development, SEO, content strategy, content updates, bug fixes, design polish, integrations help, growth strategy. Hours are fungible across these disciplines — customers don't commit to "X hrs of dev" up front.
  - **Specialty work — separate line items at higher rates:** Architecture, security audits, custom AI/ML work, complex data migrations, and other senior-specialist scopes are billed separately at specialty rates (rates TBD per specialty). Available as add-ons to any tier or as standalone engagements. Page should mention this clearly so customers don't expect senior architecture work to come out of standard hours.
  - **Four tiers — all priced at $110/hr base for standard scope:**

| Tier | Hours/mo | Price/mo | Best for |
|---|---|---|---|
| **Starter** | 20 hrs | $2,200 | Light ongoing support — content updates, occasional fixes, monthly check-ins |
| **Plus** | 40 hrs | $4,400 | Active growth — regular SEO work, content production, ongoing improvements |
| **Pro** | 80 hrs | $8,800 | Heavy hands-on — multi-discipline team, named lead, project work alongside support |
| **Enterprise** | 160+ hrs | Custom | Institutional scale — dedicated team, custom SLA, multi-discipline (dev/design/strategy), best for IEEE-tier customers |

  - **Rollover policy:** Hours don't roll over — standard retainer pattern. Reset on the first of each month. State this clearly on the page.
  - **Overage on standard hours:** $110/hr — same as the base rate. No premium.
- Cross-sell: "Need specialty work? Architecture, security, AI/ML — talk to us about specialty rates." → Contact form
- Cross-sell: "Need a specific role longer-term? Browse Colleagues for hiring."

---

## 7. Login Fork & Lead Capture

### 7.1 Login Fork (triggered by "Login" nav button)

Modal or `/login` page with two large path cards:

**[Create]** — "I want to build something."
- Description: "Build a website or app with AI. Real experts help you grow."
- CTA: "Continue as Create →"
- Routes to: **the Esteemed Create app** (production app, not lead capture). External link to wherever Create is deployed (likely `create.esteemed.io` or similar — confirm URL in Open Items).

**[Hire]** — "I want to hire talent."
- Description: "Find vetted experts for your project. Designers, developers, marketers, strategists."
- CTA: "Continue as Hire →"
- Routes to: **the new Esteemed Colleagues rebuild's Hire signup flow** (production app). External link to Colleagues Hire URL.
- **Below the Hire CTA, secondary text link:** "Sign up as a Jobseeker →" — links to the Colleagues jobseeker signup flow.

Both forks route to working products. No lead capture as fallback.

### 7.2 Lead Capture (Contact Us / Request Demo only)

Lead capture remains for visitors who want to talk to us before signing up — Contact Us, Request Demo, "I have questions" CTAs. Not for the main login or chat hero.

Triggered by:
- `/contact` page form
- "Request Demo" CTAs (e.g., on enterprise-flavored pages)
- "Talk to Sales" CTAs (e.g., on Solutions > Segments > Enterprise)
- The "Already have your app and need expert support? Post a Job →" CTA on the homepage Powered by Colleagues block — but this routes to Colleagues Hire signup, not lead capture (correction from v1.4: this is now a real product flow, not a form)

Lead capture flow:
- Fields: name, email, company (optional), message, source page (hidden)
- Submit POSTs to `/api/lead-capture` (Next.js API route or serverless function)
- Server-side parallel calls:
  1. **Oceanic CRM:** Create Contact + log Activity with message + source field (`contact-form`, `request-demo-enterprise`, etc.)
  2. **Resend (prospect):** Confirmation email — "We got your message. A real person from our team will be in touch within one business day."
  3. **Resend (internal):** Notification to designated email (TBD — Chris to confirm)
- Redirect to `/thanks` confirmation page
- Env vars: `OCEANIC_CRM_API_KEY`, `OCEANIC_CRM_BASE_URL`, `RESEND_API_KEY`, `INTERNAL_NOTIFICATION_EMAIL`

CRM tracking for Create signups and Colleagues signups happens **inside those apps' own auth/onboarding flows**, not from esteemed.io. The marketing site only captures leads for visitors who don't sign up directly.

---

## 8. Hard Rules

1. **No "Esteemed Digital" anywhere on esteemed.io.** Brand is dissolved.
2. **No fake content.** No fake testimonials, no fake company logos, no fictional team members.
3. **Light mode only.** Strip all dark-mode classes.
4. **Yellow star iconography** is the visual anchor for the AI+Human gold standard pillar. Use deliberately, not decoratively.
5. **Heritage is correct:** Drupalcontractors.com 2011 → Esteemed 2019. Don't claim "Esteemed since 2011."
6. **Esteemed Intelligence** replaces all Trident references in customer-facing copy. Internal/technical docs can keep Trident as the engine name if needed.

---

## 9. Out of Scope for v1

- Real authentication (v2)
- Oceanic App Builder integration (v2)
- Customer dashboards / portals (v2)
- Career Center as standalone (it's a feature within Colleagues for now)
- Personal/Business positioning rework (separate workstream after this ships)
- Esteemed Digital SPA at digital.esteemed.io (separate, minimal task)

---

## 10. Open Items (Non-Blocking)

- Real team list for /about
- Internal notification email address
- Cal.com or other calendar embed for /contact
- Anchor logo consent (IEEE / Alvernia / Cambridge) — text-only mention until then
- Resend domain verification (SPF/DKIM/DMARC on esteemed.io)
- Service delivery confirmation for SEO/Email/Social productized tiers
- **Esteemed Create app URL** — confirm production URL for the Create app (likely `create.esteemed.io` or similar). Chat hero submit and the Login fork → Create path both route here. Until confirmed, use placeholder.
- **Colleagues rebuild signup URLs** — confirm production URLs for Hire signup and Jobseeker signup. The login fork, the "Post a Job" CTA on homepage, and the Colleagues product page all depend on these. Until confirmed, use placeholder routes (`/colleagues/hire-signup`, `/colleagues/jobseeker-signup`).
- **Prompt pass-through mechanism for Create** — confirm how the Create app accepts an inbound prompt from esteemed.io. Query parameter (`?prompt=...`) is the simplest pattern; verify Create supports it. Alternative: POST to a Create endpoint that creates a session, then redirect.
- **CRM tracking for Create / Colleagues signups** — Oceanic CRM tracking now happens inside the Create and Colleagues apps' own auth/onboarding flows, not from esteemed.io. Confirm those apps are wired to the same Oceanic CRM instance so leads from all sources roll up consistently.
- **Esteemed Studio roadmap** — Studio is a feature of Create at v1, not a standalone product. Future release: spin out as a standalone Enterprise-targeted product. No standalone pricing decision needed for v1.
- **Esteemed Cloud unbundling** — Pricing Matrix v1.1 had hosting bundled into Create's tiers. Confirm: does Create still include hosting, or do customers buy Create + Cloud separately? Affects the /products/create and /products/cloud pricing displays.
- **Esteemed Support pricing — RESOLVED.** Four tiers at $110/hr base for standard scope (dev, SEO, content strategy, fixes, design polish, integrations, growth): Starter (20hr/$2,200), Plus (40hr/$4,400), Pro (80hr/$8,800), Enterprise (160hr+/Custom). No rollover. Overage at $110/hr. Validate with 3-5 prospect conversations before launch.
- **Specialty rates for Support add-ons** — Architecture, security audits, custom AI/ML, complex data migrations, and other senior-specialist scopes priced separately. Specialty rates TBD per discipline. Decision needed before launch — even just publishing rate ranges (e.g., "Architecture from $250/hr") gives customers an honest expectation.
- **Solutions page content** — Use Cases, Roles, Segments need actual copy/landing pages. Most can be harvested from existing esteemed.io content but need restructuring for the new IA.

---

## 11. Execution Order

1. Foundation: visual system, navigation rewrite (Products & Services / Solutions / Resources replacing Personal / Small Business / Enterprise), footer rewrite, light-mode-only sweep
2. Homepage: chat hero (with Create app routing) → Meet Create → Powered by Colleagues block (with Replit-style 1-2-3-4 flow + Post a Job CTA routing to Colleagues Hire) → Other Products & Services (5 cards) → Segments → Heritage → Final CTA
3. Login fork modal: Create | Hire paths routing to live apps, with Jobseeker text link below Hire
4. Lead capture (Contact / Demo flows only): form on /contact + API route + Oceanic CRM + Resend integration + /thanks page
5. Product pages: /products/create (with Studio feature callout), /products/cloud, /products/agents, /products/intelligence, /products/colleagues
6. Services pages: /services/support
7. Solutions structure: /solutions/use-cases, /solutions/roles, /solutions/segments — populate with harvested + restructured existing content
8. Resources structure: harvest existing menu structure + content
9. digital.esteemed.io redirect to esteemed.io/solutions/segments/enterprise (or wherever institutional services land)
10. SEO/meta sweep, Lighthouse pass

---

**End of spec.**
