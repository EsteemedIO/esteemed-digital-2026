"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Card, CardBody, Chip, Tab, Tabs } from "@heroui/react";
import {
  ArrowRight,
  Briefcase,
  Cloud,
  Grid2X2,
  Headphones,
  Monitor,
  PenLine,
  RefreshCw,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  WandSparkles,
} from "lucide-react";
import ProductIcon from "@/components/ProductIcon";

const categories = [
  { id: "websites", label: "Websites", icon: "window", sub: "Get a website - build it yourself, or have us build it for you." },
  { id: "hosting", label: "Hosting", icon: "cloud", sub: "Fast, managed hosting on Esteemed Cloud. SSL and AI contact form included - and it never doubles at renewal." },
  { id: "content", label: "Content Management", icon: "pen", sub: "Run your content on Esteemed - our AI-native CMS, or your own platform managed by us." },
  { id: "hiring", label: "Hiring & Outreach", icon: "briefcase", sub: "AI-native CRM and ATS, priced per actual user - not company headcount. The AI tier is published, not gated behind a sales call." },
  { id: "ai", label: "AI Add-ons", icon: "sparkles", sub: "Deepen any plan with retrieval, memory, and agents. Attach to anything you already run." },
  { id: "bundles", label: "Bundles", icon: "grid", sub: "Buy together, save together. Compose websites, SaaS, content, and support into one plan." },
  { id: "experts", label: "Hire Experts", icon: "users", sub: "Hire vetted professionals from a 35,000-member network. Free to post a role; pay only when you place." },
  { id: "support", label: "Support", icon: "support", sub: "Managed support packages and expert help, on demand." },
];

const catalog = {
  websites: {
    cards: [
      {
        icon: "create",
        name: "Esteemed Create",
        badge: "Start for free",
        wide: true,
        pills: ["AI builder", "Hosting included"],
        image: "/pricing/assets/create-preview.png",
        imageBg: "#FFF4B8",
        blurb:
          "Our AI website builder. Describe what you want and Create drafts a real, brand-aware site in the Studio IDE - then refine it by prompt or in code. Hosting is included the moment you publish.",
        anchor: "As low as $39/mo · free to start",
        cta: "See Plans",
        href: "/products/create#plans",
        primary: true,
      },
      {
        icon: "refresh",
        name: "Free Website Rebuild",
        pills: ["Done-for-you"],
        blurb:
          "Prefer we build it? Our team rebuilds your existing site for free when you start a 12-month Managed Hosting plan - no rebuild fee, ever.",
        anchor: "As low as $0 with Managed Hosting",
        cta: "Learn More",
        goto: "hosting",
      },
      {
        icon: "pen",
        name: "Website Design Services",
        pills: ["Done-for-you", "4 pages"],
        blurb:
          "Our design experts build your custom, responsive site - free domain & SSL, SEO, and a contact form included. One-time build fee for 4 pages, then a simple annual hosting fee. No surprises.",
        anchor: "$499 one-time build · plus annual hosting",
        cta: "Learn More",
        href: "/contact",
        fine: "Want more?",
        fineLink: "Hire an Expert",
        fineGoto: "experts",
      },
    ],
  },
  hosting: {
    cards: [
      {
        icon: "cloud",
        name: "Esteemed Cloud",
        badge: "Hosting platform",
        pills: ["JavaScript", "WordPress & Drupal", "Managed edge"],
        blurb:
          "Modern hosting for JavaScript, Node, React, WordPress, and Drupal. Bring an existing site or publish from Esteemed Create onto managed cloud infrastructure.",
        anchor: "Cloud hosting from $9.99/mo",
        cta: "Learn More",
        href: "/products/cloud#plans",
        primary: true,
      },
      {
        icon: "window",
        name: "Self-Managed",
        badge: "From $9.99",
        pills: ["Bring your own site", "SSL included", "No renewal hikes"],
        blurb:
          "Self-managed hosting for teams that want control over their app or CMS. Includes SSL, monitoring, backups, and predictable pricing that never doubles at renewal.",
        anchor: "From $9.99/mo · 4 plans",
        cta: "See Plans",
        href: "/products/cloud#plans",
      },
      {
        icon: "server",
        name: "Managed Hosting",
        badge: "Free rebuild",
        pills: ["Done-for-you", "Support included"],
        blurb:
          "Done-for-you hosting with a free site rebuild and dedicated monthly support hours, on a simple 12-month term. We keep your site fast, patched, and online.",
        anchor: "From $149/mo",
        cta: "See Plans",
        href: "/products/cloud#plans",
      },
    ],
    note:
      "Esteemed Create includes hosting at publish - Create customers don't separately buy Cloud. Standalone Hosting is for bring-your-own or non-Create sites.",
  },
  hiring: {
    cards: [
      {
        icon: "acquire",
        name: "Acquire",
        badge: "Free to start",
        founding: true,
        pills: ["Per seat", "Star Assist AI"],
        blurb:
          "An AI-native CRM and TRM for talent and revenue teams. Manage every relationship, score and enrich leads, and let Star draft outreach - you approve. Priced per user, not per headcount.",
        anchor: "Free · paid from $149/seat · Pro $249/seat",
        cta: "See Plans",
        href: "/products/acquire#plans",
        primary: true,
      },
      {
        icon: "hire",
        name: "Hire",
        badge: "Free to start",
        founding: true,
        pills: ["Per seat", "Star Assist AI"],
        blurb:
          "An AI-native applicant tracking system. Post, source, screen, and move candidates with Star drafting and matching alongside you. Published AI pricing - no sales call to see it.",
        anchor: "Free · paid from $149/seat · Pro $249/seat",
        cta: "See Plans",
        href: "/products/hire#plans",
      },
      {
        icon: "users",
        name: "EXP - Colleagues Enterprise",
        pills: ["Enterprise", "Talent experience"],
        blurb:
          "The Colleagues talent experience platform for organizations rolling it out company-wide - engagement, internal mobility, and career growth on one platform.",
        anchor: "Contact Sales",
        cta: "Learn More",
        href: "/contact",
      },
    ],
    note:
      "Buying both? The Suite bundle pairs Acquire + Hire at Pro and saves $99/seat/mo - see Bundles. Deeper AI lives under AI Add-ons.",
  },
  content: {
    cards: [
      {
        icon: "curate",
        name: "Esteemed Curate",
        badge: "AI-native CMS",
        founding: true,
        pills: ["Per workspace", "AI content hub"],
        blurb:
          "Our AI-native CMS, managed in Esteemed Cloud and priced per workspace. Pro switches on the content agents - Blogger, Social, Marketer - with RAG grounding via Connect.",
        anchor: "From $49/mo · Pro $299/mo",
        cta: "See Plans",
        href: "/products/curate#plans",
        primary: true,
      },
      {
        icon: "window",
        name: "Managed CMS",
        pills: ["WordPress & Drupal"],
        blurb:
          "Already on WordPress or Drupal? We host your self-hosted site as-is at the cost of hosting - then pair it with a Support pack for security patching and updates.",
        anchor: "Hosting from $9.99/mo + Support",
        cta: "Learn More",
        goto: "hosting",
      },
      {
        icon: "shield",
        name: "Care",
        pills: ["Managed bridge"],
        blurb:
          "An all-in managed bridge for your current site - security, monitoring, backups, and content edits - with no migration required. Buys you time before you move.",
        anchor: "$399/mo",
        cta: "Learn More",
        href: "/contact",
      },
      {
        icon: "migrate",
        name: "Migration",
        pills: ["One-time service"],
        blurb:
          "Move any platform - WordPress, Squarespace, Wix, Drupal - onto Curate. Productized and publicly priced, from small sites to multilingual enterprise. A paid migration lands you on a Curate subscription.",
        anchor: "One-time · from $6,500",
        cta: "See Plans",
        href: "/migrate",
      },
    ],
    note:
      "Squarespace can't be hosted on our infrastructure (it's closed) - but it's a valid migration source.",
  },
  ai: {
    cards: [
      {
        icon: "connect",
        name: "Connect",
        pills: ["RAG grounding"],
        blurb:
          "The retrieval layer. Connect your systems so Esteemed AI can reason over your real, current data - grounded, not guessing. Included with managed Curate; standalone for any tenant.",
        anchor: "Included with Curate · standalone Contact Sales",
        cta: "Learn More",
        href: "/products/connect#plans",
      },
      {
        icon: "intelligence",
        name: "Intelligence",
        badge: "Most popular",
        pills: ["Attaches to any plan"],
        blurb:
          "The Company Brain. Persistent memory, continual learning, and custom domain memory that deepen Star across every plan it's attached to.",
        anchor: "$199/mo · per tenant",
        cta: "See Plans",
        href: "/products/intelligence#plans",
        primary: true,
      },
      {
        icon: "assist",
        name: "Esteemed Agents",
        badge: "Coming soon",
        soon: true,
        pills: ["Launching soon"],
        blurb:
          "AI coworkers that take real work off your plate - Receptionist, Social, Blogger, Marketer, Recruiter, Publicist. Included with Curate Pro; standalone soon.",
        anchor: "From $99/mo",
        cta: "Learn More",
        href: "/products/agents#plans",
      },
    ],
  },
  bundles: {
    cards: [
      {
        icon: "acquire",
        name: "Esteemed Suite",
        badge: "Most popular",
        founding: true,
        pills: ["CRM + ATS"],
        blurb:
          "Acquire and Hire together, both at Pro, on a single seat. The full talent engine - CRM and ATS - for less than buying each on its own.",
        anchor: "$399/seat/mo · save $99/seat",
        cta: "See Plans",
        href: "/products/acquire#plans",
        primary: true,
      },
      {
        icon: "create",
        name: "Business-in-a-Box",
        pills: ["Websites + SaaS + Support"],
        blurb:
          "Everything to launch and run a business: an Esteemed Create site, Acquire CRM seats, and a managed Support pack - one onboarding, one invoice.",
        anchor: "Bundle pricing on a quick call",
        cta: "Learn More",
        href: "/contact",
      },
      {
        icon: "curate",
        name: "Content Engine",
        pills: ["Curate + Connect + Intelligence"],
        blurb:
          "Your AI content hub, fully wired: Curate Pro with the Connect RAG layer and the Intelligence Company Brain switched on, agents flywheeling.",
        anchor: "Bundle pricing on a quick call",
        cta: "Learn More",
        href: "/contact",
      },
      {
        icon: "assist",
        name: "Agents Bundle",
        badge: "Coming soon",
        soon: true,
        pills: ["Launching soon"],
        blurb:
          "All five content and marketing agents working together on one bill - and included free with Curate Pro.",
        anchor: "From $199/mo",
        cta: "Learn More",
        href: "/products/agents#plans",
      },
    ],
    note:
      "Suite is published; cross-category bundles are priced per mix on a short call, so you only pay for what you take.",
  },
  experts: {
    cards: [
      {
        icon: "users",
        name: "Hire from Colleagues",
        badge: "Most popular",
        pills: ["Pay on placement"],
        blurb:
          "Post roles free and tap a 35,000-member vetted network of professionals. Pay only when you place - no seats, no subscription, no hiring until you find the right person.",
        anchor: "Platform fee as low as 10%",
        cta: "Learn More",
        href: "/products/colleagues",
        primary: true,
      },
    ],
  },
  support: {
    cards: [
      {
        icon: "support",
        name: "Support packs",
        badge: "Most popular",
        pills: ["3 · 6 · 8 · 10 hours", "$85/hr"],
        blurb:
          "Monthly blocks of managed support hours - security patching, feature updates, and hands-on help. Pair with Managed CMS or any plan you run with us.",
        anchor: "$85/hr · monthly support blocks",
        cta: "Learn More",
        href: "/services/support#plans",
        primary: true,
      },
      {
        icon: "users",
        name: "Expert Help",
        pills: ["From the network"],
        blurb:
          "On-demand specialist help sourced from top Colleagues professionals - for the work that needs an expert, not a ticket.",
        anchor: "Contact Sales",
        cta: "Learn More",
        href: "/contact",
      },
    ],
    note:
      "Support packs are final: choose 3, 6, 8, or 10 monthly hours at $85/hr.",
  },
};

const fallbackIcons = {
  window: Monitor,
  cloud: Cloud,
  briefcase: Briefcase,
  pen: PenLine,
  sparkles: Sparkles,
  grid: Grid2X2,
  refresh: RefreshCw,
  shield: ShieldCheck,
  migrate: RefreshCw,
  server: Server,
  users: Users,
  support: Headphones,
};

const officialIcons = new Set(["acquire", "hire", "create", "curate", "connect", "intelligence", "assist", "support", "cloud"]);

function Star({ className = "h-3 w-3", fill = "#B89D1F" }) {
  return (
    <svg viewBox="0 0 268 268" className={className} aria-hidden="true">
      <path d="M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z" fill={fill} />
    </svg>
  );
}

function IconTile({ name, size = "h-12 w-12", official = true }) {
  if (official && officialIcons.has(name)) {
    return <ProductIcon product={name} className={size} />;
  }

  const Icon = fallbackIcons[name] || WandSparkles;
  return (
    <span className={`${size} flex flex-shrink-0 items-center justify-center rounded-xl bg-[#FEE546] text-ink`}>
      <Icon className="h-[56%] w-[56%]" strokeWidth={2} />
    </span>
  );
}

function PlanButton({ card, onGoto }) {
  const className = card.primary
    ? "border-2 border-accent bg-accent text-sm font-bold text-ink hover:border-accent-hover hover:bg-accent-hover"
    : "border-2 border-ink bg-white text-sm font-bold text-ink hover:border-accent-hover hover:bg-accent-hover";

  if (card.goto) {
    return (
      <Button variant={card.primary ? "solid" : "bordered"} radius="full" className={className} onPress={() => onGoto(card.goto)}>
        {card.cta}
      </Button>
    );
  }

  return (
    <Button
      as={Link}
      href={card.href || "/contact"}
      variant={card.primary ? "solid" : "bordered"}
      radius="full"
      className={className}
      isDisabled={card.soon}
    >
      {card.cta}
    </Button>
  );
}

function Tags({ card }) {
  if (!card.pills?.length && !card.founding) return null;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
      {(card.pills || []).map((pill) => (
        <span
          key={pill}
          className="inline font-extrabold leading-none text-ink [background:linear-gradient(to_top,#FEE546_42%,transparent_42%)]"
        >
          {pill}
        </span>
      ))}
      {card.founding && (
        <span className="inline-flex items-center gap-1 font-extrabold leading-none text-ink [background:linear-gradient(to_top,#FEE546_42%,transparent_42%)]">
          <Star className="h-2.5 w-2.5" />
          Founding rates
        </span>
      )}
    </div>
  );
}

function Badge({ card }) {
  if (!card.badge) return null;

  return (
    <Chip
      size="sm"
      radius="full"
      variant="flat"
      classNames={{
        base: "bg-accent-hover px-2.5 py-1 shadow-none",
        content: "px-1 text-[12px] font-bold text-ink",
      }}
    >
      {card.badge}
    </Chip>
  );
}

function StandardLeadCard({ card, onGoto }) {
  return (
    <Card className="lead-card h-full rounded-[18px] border border-zinc-200 bg-white shadow-none transition-colors hover:border-zinc-500">
      <CardBody className="flex h-full flex-col p-[26px]">
        <div className="mb-[18px] flex items-start justify-between gap-3">
          <IconTile name={card.icon} />
          <Badge card={card} />
        </div>

        <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-ink">{card.name}</h3>
        <Tags card={card} />
        <p className="mt-4 text-[14.5px] leading-[1.55] text-zinc-600">{card.blurb}</p>

        <div className="mt-auto pt-[22px]">
          <p className="mb-4 text-[14.5px] font-semibold text-ink">{card.anchor}</p>
          <PlanButton card={card} onGoto={onGoto} />
          {card.fine && (
            <p className="mt-3 flex gap-2 text-xs leading-[1.45] text-zinc-500">
              <Star className="mt-0.5 h-2.5 w-2.5 flex-shrink-0" />
              <span>
                {card.fine}
                {card.fineLink && card.fineGoto && (
                  <>
                    {" "}
                    <button
                      type="button"
                      onClick={() => onGoto(card.fineGoto)}
                      className="font-bold text-ink underline decoration-zinc-300 underline-offset-2 hover:decoration-ink"
                    >
                      {card.fineLink}
                    </button>
                  </>
                )}
              </span>
            </p>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

function WideLeadCard({ card, onGoto }) {
  return (
    <Card className="lead-card h-full overflow-hidden rounded-[18px] border border-zinc-200 bg-white shadow-none transition-colors hover:border-zinc-500 md:col-span-2">
      <div className="grid h-full min-h-[360px] md:grid-cols-[0.46fr_0.54fr]">
        <CardBody className="flex h-full flex-col p-7 md:p-[30px]">
          <div className="mb-4 flex items-start justify-between gap-3">
            <IconTile name={card.icon} size="h-[52px] w-[52px]" />
            <Badge card={card} />
          </div>
          <h3 className="text-[26px] font-extrabold leading-tight tracking-tight text-ink">{card.name}</h3>
          <Tags card={card} />
          <p className="mt-3 max-w-[420px] text-[14.5px] leading-[1.55] text-zinc-600">{card.blurb}</p>
          <div className="mt-auto pt-[22px]">
            <p className="mb-3.5 text-[14.5px] font-semibold text-ink">{card.anchor}</p>
            <PlanButton card={card} onGoto={onGoto} />
          </div>
        </CardBody>
        <div
          className="order-first min-h-[220px] bg-cover bg-left md:order-none md:min-h-0"
          role="img"
          aria-label={`${card.name} preview`}
          style={{
            backgroundColor: card.imageBg || "#EDEDEA",
            backgroundImage: `url(${card.image})`,
          }}
        />
      </div>
    </Card>
  );
}

function LeadCard({ card, onGoto }) {
  if (card.wide) return <WideLeadCard card={card} onGoto={onGoto} />;
  return <StandardLeadCard card={card} onGoto={onGoto} />;
}

export default function PricingPage() {
  const [active, setActive] = useState("websites");
  const category = categories.find((item) => item.id === active) || categories[0];
  const data = catalog[active] || catalog.websites;

  const goto = (id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-ink">
      <section className="bg-[#FAFAF7]">
        <div className="mx-auto max-w-[1800px] px-6 py-[52px] pb-[26px]">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">
            <Star className="h-3 w-3" />
            Plans & pricing
          </p>
          <h1 className="mt-3.5 max-w-[800px] text-[clamp(38px,4.6vw,56px)] font-extrabold leading-[1.03] tracking-tight text-ink">
            Pick what you need. Pay for nothing you don't.
          </h1>
          <p className="mt-4 max-w-[600px] text-[17px] leading-[1.5] text-zinc-600">
            Transparent, published pricing across the platform. Annual plans include two months free.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1E25] text-white">
        <div className="mx-auto flex max-w-[1800px] flex-wrap items-center gap-3 px-6 py-4">
          <Star className="h-[15px] w-[15px]" fill="#FEE546" />
          <p className="m-0 text-sm leading-[1.5] text-white/85">
            <strong className="text-white">Every offering is a separate purchase - none requires another.</strong>{" "}
            Host without migrating. Hire without the website. Take only what you need.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF7]">
        <div className="pane mx-auto flex max-w-[1800px] items-start gap-11 px-6 py-9 pb-6 max-[900px]:flex-col max-[900px]:gap-6">
          <aside className="w-[248px] flex-shrink-0 max-[900px]:sticky max-[900px]:top-16 max-[900px]:z-20 max-[900px]:-mx-6 max-[900px]:w-[calc(100%+3rem)] max-[900px]:border-b max-[900px]:border-zinc-200 max-[900px]:bg-[#FAFAF7] max-[900px]:px-6 max-[900px]:py-2">
            <div className="sticky top-[92px] max-[900px]:static">
              <p className="mb-3 pl-3 text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 max-[900px]:hidden">Browse by need</p>
              <Tabs
                aria-label="Pricing categories"
                selectedKey={active}
                onSelectionChange={(key) => setActive(String(key))}
                classNames={{
                  base: "w-full",
                  tabList:
                    "w-full flex-col gap-0 rounded-none bg-transparent p-0 max-[900px]:flex-row max-[900px]:gap-1.5 max-[900px]:overflow-x-auto max-[900px]:pb-1",
                  cursor: "hidden",
                  tab:
                    "group/tab h-auto w-full justify-start rounded-[10px] px-3 py-[11px] hover:bg-[#EDEDEA] max-[900px]:w-auto max-[900px]:flex-shrink-0 max-[900px]:rounded-full max-[900px]:border max-[900px]:border-zinc-200 max-[900px]:bg-white max-[900px]:px-3.5 max-[900px]:py-2.5 data-[selected=true]:bg-[#EDEDEA] max-[900px]:data-[selected=true]:bg-[#1B1E25]",
                  tabContent:
                    "w-full text-left text-[14px] font-semibold text-zinc-600 group-data-[selected=true]:font-bold group-data-[selected=true]:text-ink max-[900px]:group-data-[selected=true]:text-white",
                  panel: "hidden",
                }}
              >
                {categories.map((item) => (
                  <Tab
                    key={item.id}
                    title={
                      <span className="flex w-full items-center justify-between gap-3">
                        <span>{item.label}</span>
                        <ArrowRight className={`h-[15px] w-[15px] flex-shrink-0 text-ink transition-opacity max-[900px]:hidden ${active === item.id ? "opacity-100" : "opacity-0 group-hover/tab:opacity-60"}`} strokeWidth={2} />
                      </span>
                    }
                  />
                ))}
              </Tabs>

              <Card className="mt-[22px] rounded-[18px] border border-zinc-200 bg-[#EDEDEA] shadow-none max-[900px]:hidden">
                <CardBody className="p-[18px]">
                  <p className="text-sm font-bold text-ink">Not sure where to start?</p>
                  <p className="mt-1.5 text-[13px] leading-[1.45] text-zinc-600">Tell us about your team and we'll map the right plan.</p>
                  <Button as={Link} href="/contact" radius="full" className="mt-3 w-full bg-ink text-sm font-bold text-white transition-transform hover:scale-[1.03]">
                    Talk to us
                  </Button>
                </CardBody>
              </Card>
            </div>
          </aside>

          <section key={active} className="min-w-0 flex-1">
            <div className="grid items-stretch gap-[18px] md:grid-cols-2 xl:grid-cols-3">
              {data.cards.map((card) => (
                <LeadCard key={card.name} card={card} onGoto={goto} />
              ))}
            </div>

            {data.note && (
              <div className="mt-5 flex max-w-[880px] items-start gap-2.5">
                <Star className="mt-0.5 h-3 w-3 flex-shrink-0" />
                <p className="m-0 text-[12.5px] leading-[1.5] text-zinc-500">{data.note}</p>
              </div>
            )}

          </section>
        </div>
      </section>
    </main>
  );
}
