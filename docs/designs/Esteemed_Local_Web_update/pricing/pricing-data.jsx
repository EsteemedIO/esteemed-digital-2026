/* ============================================================
   Esteemed Pricing — catalog (lead-in model, GoDaddy shared-page pattern)
   Each card is a LEAD-IN to a product page — prose + price anchor + "See plans".
   Tier ladders (Free/Core/Pro/…) live on each product's own page, not here.
   Numbers locked from esteemed-pricing-spec-v2. [TBD] -> Contact Sales.
   Hire & Acquire are standalone SaaS — NOT tied to Colleagues.
   ============================================================ */

const CATEGORIES = [
  { id: 'websites',   label: 'Websites',          icon: 'window',    sub: 'Get a website — build it yourself, or have us build it for you.' },
  { id: 'hosting',    label: 'Hosting',           icon: 'cloud',     sub: 'Fast, managed hosting on Esteemed Cloud. SSL and AI contact form included — and it never doubles at renewal.' },
  { id: 'hiring',     label: 'Hiring & Outreach', icon: 'briefcase', sub: 'AI-native CRM and ATS, priced per actual user — not company headcount. The AI tier is published, not gated behind a sales call.' },
  { id: 'content',    label: 'Content Management',icon: 'pen',       sub: 'Run your content on Esteemed — our AI-native CMS, or your own platform managed by us.' },
  { id: 'ai',         label: 'AI Add-ons',        icon: 'sparkles',  sub: 'Deepen any plan with retrieval, memory, and agents. Attach to anything you already run.' },
  { id: 'bundles',    label: 'Bundles',           icon: 'grid',      sub: 'Buy together, save together. Compose websites, SaaS, content, and support into one plan.' },
  { id: 'experts',    label: 'Hire Experts',      icon: 'users',     sub: 'Hire vetted professionals from a 35,000-member network. Free to post a role; pay only when you place.' },
  { id: 'support',    label: 'Support',           icon: 'support',   sub: 'Managed support packages and expert help, on demand.' },
];

const CATALOG = {
  websites: {
    cards: [
      { icon: 'create', name: 'Esteemed Create', badge: 'Start for free', wide: true, pills: ['AI builder', 'Hosting included'],
        image: 'pricing/assets/create-preview.png', imageBg: '#FFF4B8',
        blurb: 'Our AI website builder. Describe what you want and Create drafts a real, brand-aware site in the Studio IDE — then refine it by prompt or in code. Hosting is included the moment you publish.',
        anchor: 'As low as $39/mo · free to start', cta: 'See Create plans', primary: true, seePlans: true },
      { icon: 'refresh', name: 'Free Website Rebuild', pills: ['Done-for-you'],
        blurb: 'Prefer we build it? Our team rebuilds your existing site for free when you start a 12-month Managed Hosting plan — no rebuild fee, ever.',
        anchor: 'As low as $0 with Managed Hosting', cta: 'See Managed Hosting', goto: 'hosting' },
      { icon: 'pen', name: 'Website Design Services', pills: ['Done-for-you', '4 pages'],
        blurb: 'Our design experts build your custom, responsive site — free domain & SSL, SEO, and a contact form included. One-time build fee for 4 pages, then a simple annual hosting fee. No surprises.',
        anchor: '$499 one-time build · plus annual hosting', cta: 'Start my site',
        fine: 'Want more? Engage a designer to extend your project at $85/hr (3 hr min) — or $75/hr with a 10 hr commitment, used within 40 hrs of purchase.' },
    ],
  },

  hosting: {
    cards: [
      { icon: 'cloud', name: 'Self-serve Cloud', badge: 'From $9.99', pills: ['SSL included', 'No renewal hikes'],
        blurb: 'Bring your own site or a Create build. Fast, fully managed hosting with free SSL and an AI contact form built in — and a price that never doubles at renewal.',
        anchor: 'From $9.99/mo · 4 plans', cta: 'See Cloud plans', primary: true, seePlans: true },
      { icon: 'cloud', name: 'Managed Hosting', badge: 'Free rebuild', pills: ['Done-for-you', 'Support included'],
        blurb: 'Done-for-you hosting with a free site rebuild and dedicated monthly support hours, on a simple 12-month term. We keep your site fast, patched, and online.',
        anchor: 'From $149/mo', cta: 'See Managed plans', seePlans: true },
    ],
    note: 'Esteemed Create includes hosting at publish — Create customers don’t separately buy Cloud. Standalone Hosting is for bring-your-own or non-Create sites.',
  },

  hiring: {
    cards: [
      { icon: 'acquire', name: 'Acquire', badge: 'Free to start', founding: true, pills: ['Per seat', 'Star Assist AI'],
        blurb: 'An AI-native CRM and TRM for talent and revenue teams. Manage every relationship, score and enrich leads, and let Star draft outreach — you approve. Priced per user, not per headcount.',
        anchor: 'Free · paid from $149/seat · Pro $249/seat', cta: 'See Acquire plans', primary: true, seePlans: true },
      { icon: 'hire', name: 'Hire', badge: 'Free to start', founding: true, pills: ['Per seat', 'Star Assist AI'],
        blurb: 'An AI-native applicant tracking system. Post, source, screen, and move candidates with Star drafting and matching alongside you. Published AI pricing — no sales call to see it.',
        anchor: 'Free · paid from $149/seat · Pro $249/seat', cta: 'See Hire plans', seePlans: true },
      { icon: 'users', name: 'EXP — Colleagues Enterprise', pills: ['Enterprise', 'Talent experience'],
        blurb: 'The Colleagues talent experience platform for organizations rolling it out company-wide — engagement, internal mobility, and career growth on one platform.',
        anchor: 'Contact Sales', cta: 'Talk to us' },
    ],
    note: 'Buying both? The Suite bundle pairs Acquire + Hire at Pro and saves $99/seat/mo — see Bundles. Deeper AI lives under AI Add-ons.',
  },

  content: {
    cards: [
      { icon: 'curate', name: 'Esteemed Curate', badge: 'AI-native CMS', founding: true, pills: ['Per workspace', 'AI content hub'],
        blurb: 'Our AI-native CMS, managed in Esteemed Cloud and priced per workspace. Pro switches on the content agents — Blogger, Social, Marketer — with RAG grounding via Connect.',
        anchor: 'From $49/mo · Pro $299/mo', cta: 'See Curate plans', primary: true, seePlans: true },
      { icon: 'window', name: 'Managed CMS', pills: ['WordPress & Drupal'],
        blurb: 'Already on WordPress or Drupal? We host your self-hosted site as-is at the cost of hosting — then pair it with a Support pack for security patching and updates.',
        anchor: 'Hosting from $9.99/mo + Support', cta: 'See Hosting', goto: 'hosting' },
      { icon: 'shield', name: 'Care', pills: ['Managed bridge'],
        blurb: 'An all-in managed bridge for your current site — security, monitoring, backups, and content edits — with no migration required. Buys you time before you move.',
        anchor: '$399/mo', cta: 'Start Care' },
      { icon: 'migrate', name: 'Migration', pills: ['One-time service'],
        blurb: 'Move any platform — WordPress, Squarespace, Wix, Drupal — onto Curate. Productized and publicly priced, from small sites to multilingual enterprise. A paid migration lands you on a Curate subscription.',
        anchor: 'One-time · from $6,500', cta: 'See migration packages', seePlans: true },
    ],
    note: 'Squarespace can’t be hosted on our infrastructure (it’s closed) — but it’s a valid migration source.',
  },

  ai: {
    cards: [
      { icon: 'connect', name: 'Connect', pills: ['RAG grounding'],
        blurb: 'The retrieval layer. Connect your systems so Esteemed AI can reason over your real, current data — grounded, not guessing. Included with managed Curate; standalone for any tenant.',
        anchor: 'Included with Curate · standalone Contact Sales', cta: 'Contact Sales' },
      { icon: 'intelligence', name: 'Intelligence', badge: 'Most popular', pills: ['Attaches to any plan'],
        blurb: 'The Company Brain. Persistent memory, continual learning, and custom domain memory that deepen Star across every plan it’s attached to.',
        anchor: '$199/mo · per tenant', cta: 'Add Intelligence', primary: true },
      { icon: 'assist', name: 'Esteemed Agents', badge: 'Coming soon', soon: true, pills: ['Launching soon'],
        blurb: 'AI coworkers that take real work off your plate — Receptionist, Social, Blogger, Marketer, Recruiter, Publicist. Included with Curate Pro; standalone soon.',
        anchor: 'From $99/mo', cta: 'Notify me' },
    ],
  },

  bundles: {
    cards: [
      { icon: 'acquire', name: 'Esteemed Suite', badge: 'Most popular', founding: true, pills: ['CRM + ATS'],
        blurb: 'Acquire and Hire together, both at Pro, on a single seat. The full talent engine — CRM and ATS — for less than buying each on its own.',
        anchor: '$399/seat/mo · save $99/seat', cta: 'See Suite plans', primary: true, seePlans: true },
      { icon: 'create', name: 'Business-in-a-Box', pills: ['Websites + SaaS + Support'],
        blurb: 'Everything to launch and run a business: an Esteemed Create site, Acquire CRM seats, and a managed Support pack — one onboarding, one invoice.',
        anchor: 'Bundle pricing on a quick call', cta: 'Build this bundle' },
      { icon: 'curate', name: 'Content Engine', pills: ['Curate + Connect + Intelligence'],
        blurb: 'Your AI content hub, fully wired: Curate Pro with the Connect RAG layer and the Intelligence Company Brain switched on, agents flywheeling.',
        anchor: 'Bundle pricing on a quick call', cta: 'Build this bundle' },
      { icon: 'assist', name: 'Agents Bundle', badge: 'Coming soon', soon: true, pills: ['Launching soon'],
        blurb: 'All five content and marketing agents working together on one bill — and included free with Curate Pro.',
        anchor: 'From $199/mo', cta: 'Notify me' },
    ],
    note: 'Suite is published; cross-category bundles are priced per mix on a short call, so you only pay for what you take.',
  },

  experts: {
    cards: [
      { icon: 'users', name: 'Hire from Colleagues', badge: 'Most popular', pills: ['Pay on placement'],
        blurb: 'Post roles free and tap a 35,000-member vetted network of professionals. Pay only when you place — no seats, no subscription, no hiring until you find the right person.',
        anchor: 'Platform fee as low as 10%', cta: 'Post a role', primary: true, seePlans: true },
    ],
  },

  support: {
    cards: [
      { icon: 'support', name: 'Support packs', badge: 'Most popular', pills: ['Small · Standard · Business'],
        blurb: 'Monthly blocks of managed support hours — security patching, feature updates, and hands-on help. Pair with Managed CMS or any plan you run with us.',
        anchor: 'Get a quote', cta: 'Get a quote', primary: true },
      { icon: 'users', name: 'Expert Help', pills: ['From the network'],
        blurb: 'On-demand specialist help sourced from top Colleagues professionals — for the work that needs an expert, not a ticket.',
        anchor: 'Contact Sales', cta: 'Talk to us' },
    ],
    note: 'Support pack pricing is being finalized — request a quote and we’ll size a block to your needs.',
  },
};

window.PRICING = { CATEGORIES, CATALOG };
