"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Tab, Tabs } from "@heroui/react";
import {
  ArrowRight,
  Briefcase,
  Cloud,
  Grid2X2,
  Headphones,
  Monitor,
  PenLine,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Users,
  WandSparkles,
} from "lucide-react";
import ProductIcon from "@/components/ProductIcon";

const categories = [
  {
    id: "websites",
    label: "Websites",
    icon: Monitor,
    sub: "Get a website — build it yourself, or have us build it for you.",
    cards: [
      {
        iconProduct: "create",
        name: "Esteemed Create",
        badge: "Start for free",
        tags: ["AI builder", "Hosting included"],
        blurb:
          "Our AI website builder. Describe what you want and Create drafts a real, brand-aware site in the Studio IDE, then refine it by prompt or in code.",
        anchor: "As low as $39/mo · free to start",
        cta: "See Create plans",
        href: "/products/create#plans",
        primary: true,
      },
      {
        icon: RefreshCw,
        name: "Free Website Rebuild",
        tags: ["Done-for-you", "12-month term"],
        blurb:
          "Prefer we build it? Our team rebuilds your existing site for free when you start a 12-month Managed Hosting plan.",
        anchor: "$0 with Managed Hosting",
        cta: "See Managed Hosting",
        goto: "hosting",
      },
      {
        icon: PenLine,
        name: "Website Design Services",
        tags: ["Done-for-you", "Custom build"],
        blurb:
          "Our design experts build your custom, responsive site with SSL, SEO basics, and a contact form included.",
        anchor: "Custom build · Contact Sales",
        cta: "Start my site",
        href: "/contact",
      },
    ],
  },
  {
    id: "hosting",
    label: "Hosting",
    icon: Cloud,
    sub: "Fast, managed hosting on Esteemed Cloud. SSL and AI contact form included; never doubles at renewal.",
    cards: [
      {
        iconProduct: "cloud",
        name: "Self-serve Cloud",
        badge: "From $9.99",
        tags: ["SSL included", "No renewal hikes"],
        blurb:
          "Bring your own site or a Create build. Fast, fully managed hosting with free SSL and an AI contact form built in.",
        anchor: "From $9.99/mo · 4 plans",
        cta: "See Cloud plans",
        href: "/products/cloud#plans",
        primary: true,
      },
      {
        iconProduct: "cloud",
        name: "Managed Hosting",
        badge: "Free rebuild",
        tags: ["Done-for-you", "Support included"],
        blurb:
          "Done-for-you hosting with a free site rebuild and dedicated monthly support hours on a simple 12-month term.",
        anchor: "From $149/mo",
        cta: "See Managed plans",
        href: "/products/cloud#plans",
      },
    ],
    note:
      "Create includes hosting at publish. Standalone Hosting is for bring-your-own, non-Create, or existing sites.",
  },
  {
    id: "hiring",
    label: "Hiring & Outreach",
    icon: Briefcase,
    sub: "AI-native CRM and ATS, priced per actual user — not company headcount.",
    cards: [
      {
        iconProduct: "acquire",
        name: "Acquire",
        badge: "Free to start",
        founding: true,
        tags: ["Per seat", "Star Assist AI"],
        blurb:
          "An AI-native CRM and TRM for talent and revenue teams. Manage relationships, score leads, and let Star draft outreach.",
        anchor: "Free · paid from $149/seat · Pro $249/seat",
        cta: "See Acquire plans",
        href: "/products/acquire#plans",
        primary: true,
      },
      {
        iconProduct: "hire",
        name: "Hire",
        badge: "Free to start",
        founding: true,
        tags: ["Per seat", "Star Assist AI"],
        blurb:
          "An AI-native applicant tracking system. Post, source, screen, and move candidates with Star drafting and matching alongside you.",
        anchor: "Free · paid from $149/seat · Pro $249/seat",
        cta: "See Hire plans",
        href: "/products/hire#plans",
      },
      {
        icon: Users,
        name: "EXP — Colleagues Enterprise",
        tags: ["Enterprise", "Talent experience"],
        blurb:
          "The Colleagues talent experience platform for organizations rolling it out company-wide.",
        anchor: "Contact Sales",
        cta: "Talk to us",
        href: "/contact",
      },
    ],
    note: "Buying both? Suite pairs Acquire + Hire at Pro and saves $99/seat/mo.",
  },
  {
    id: "content",
    label: "Content Management",
    icon: PenLine,
    sub: "Run your content on Esteemed — our AI-native CMS, or your own platform managed by us.",
    cards: [
      {
        iconProduct: "curate",
        name: "Esteemed Curate",
        badge: "AI-native CMS",
        founding: true,
        tags: ["Per workspace", "AI content hub"],
        blurb:
          "Our AI-native CMS, managed in Esteemed Cloud and priced per workspace. Pro switches on content agents with RAG grounding via Connect.",
        anchor: "From $49/mo · Pro $299/mo",
        cta: "See Curate plans",
        href: "/products/curate#plans",
        primary: true,
      },
      {
        icon: Monitor,
        name: "Managed CMS",
        tags: ["WordPress", "Drupal"],
        blurb:
          "Already on WordPress or Drupal? We host your self-hosted site as-is, then pair it with a Support pack for security and updates.",
        anchor: "Hosting from $9.99/mo + Support",
        cta: "See Hosting",
        goto: "hosting",
      },
      {
        icon: ShieldCheck,
        name: "Care",
        tags: ["Managed bridge"],
        blurb:
          "An all-in managed bridge for your current site: security, monitoring, backups, and content edits with no migration required.",
        anchor: "$399/mo",
        cta: "Start Care",
        href: "/contact",
      },
      {
        icon: RefreshCw,
        name: "Migration",
        tags: ["One-time service"],
        blurb:
          "Move WordPress, Squarespace, Wix, Drupal, Joomla, or custom systems onto Curate with public package pricing.",
        anchor: "One-time · from $6,500",
        cta: "See migration packages",
        href: "/migrate",
      },
    ],
    note:
      "Squarespace is a valid migration source, but it cannot be hosted on our infrastructure as-is.",
  },
  {
    id: "ai",
    label: "AI Add-ons",
    icon: Sparkles,
    sub: "Deepen any plan with retrieval, memory, and agents. Attach to anything you already run.",
    cards: [
      {
        iconProduct: "connect",
        name: "Connect",
        tags: ["RAG grounding"],
        blurb:
          "The retrieval layer. Connect your systems so Esteemed AI can reason over your real, current data.",
        anchor: "Included with Curate · standalone Contact Sales",
        cta: "Contact Sales",
        href: "/products/connect#plans",
      },
      {
        iconProduct: "intelligence",
        name: "Intelligence",
        badge: "Most popular",
        tags: ["Company Brain"],
        blurb:
          "Persistent memory, continual learning, and custom domain memory that deepen Star across every plan it is attached to.",
        anchor: "$199/mo · per tenant",
        cta: "Add Intelligence",
        href: "/products/intelligence#plans",
        primary: true,
      },
      {
        iconProduct: "assist",
        name: "Esteemed Agents",
        badge: "Coming soon",
        soon: true,
        tags: ["Launching soon"],
        blurb:
          "AI coworkers that take real work off your plate: Receptionist, Social, Blogger, Marketer, Recruiter, and Publicist.",
        anchor: "From $99/mo",
        cta: "Notify me",
        href: "/products/agents#plans",
      },
    ],
  },
  {
    id: "bundles",
    label: "Bundles",
    icon: Grid2X2,
    sub: "Buy together, save together. Compose websites, SaaS, content, and support into one plan.",
    cards: [
      {
        iconProduct: "acquire",
        name: "Esteemed Suite",
        badge: "Most popular",
        founding: true,
        tags: ["CRM + ATS"],
        blurb:
          "Acquire and Hire together, both at Pro, on a single seat. The full talent engine for less than buying each on its own.",
        anchor: "$399/seat/mo · save $99/seat",
        cta: "See Suite plans",
        href: "/products/acquire#plans",
        primary: true,
      },
      {
        iconProduct: "create",
        name: "Business-in-a-Box",
        tags: ["Websites", "SaaS", "Support"],
        blurb:
          "Everything to launch and run a business: a Create site, Acquire seats, and a managed Support pack.",
        anchor: "Bundle pricing on a quick call",
        cta: "Build this bundle",
        href: "/contact",
      },
      {
        iconProduct: "curate",
        name: "Content Engine",
        tags: ["Curate", "Connect", "Intelligence"],
        blurb:
          "Your AI content hub, fully wired: Curate Pro with Connect and the Intelligence Company Brain switched on.",
        anchor: "Bundle pricing on a quick call",
        cta: "Build this bundle",
        href: "/contact",
      },
    ],
    note:
      "Suite is published; cross-category bundles are priced per mix on a short call.",
  },
  {
    id: "experts",
    label: "Hire Experts",
    icon: Users,
    sub: "Hire from a 35,000-member professional network. Free to join; pay only when you place.",
    cards: [
      {
        icon: Users,
        name: "Membership",
        badge: "Free",
        tags: ["Professionals"],
        blurb:
          "Profile, community, and career tools for professionals in the Esteemed Colleagues network.",
        anchor: "Free to professionals, forever",
        cta: "Join Colleagues",
        href: "/products/colleagues",
      },
      {
        icon: Briefcase,
        name: "Hire from Colleagues",
        badge: "Most popular",
        tags: ["Pay on placement"],
        blurb:
          "Post roles free and tap a 35,000-member vetted professional network. Pay only when you place.",
        anchor: "Platform fee as low as 10%",
        cta: "Post a role",
        href: "/products/colleagues",
        primary: true,
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: Headphones,
    sub: "Managed support packages and expert help, on demand.",
    cards: [
      {
        iconProduct: "support",
        name: "Support packs",
        badge: "Most popular",
        tags: ["2 hr", "5 hr", "10 hr"],
        blurb:
          "Monthly blocks of managed support hours for security patching, feature updates, troubleshooting, and hands-on help.",
        anchor: "From $170/mo",
        cta: "See Support plans",
        href: "/services/support#plans",
        primary: true,
      },
      {
        icon: Users,
        name: "Expert Help",
        tags: ["From the network"],
        blurb:
          "On-demand specialist help sourced from top Colleagues professionals for work that needs an expert, not a ticket.",
        anchor: "Contact Sales",
        cta: "Talk to us",
        href: "/contact",
      },
    ],
  },
];

function Star({ className = "h-3 w-3", fill = "#B89D1F" }) {
  return (
    <svg viewBox="0 0 268 268" className={className} aria-hidden="true">
      <path d="M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z" fill={fill} />
    </svg>
  );
}

function IconTile({ item, size = "h-12 w-12" }) {
  if (item.iconProduct) {
    return (
      <span className={`${size} flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white`}>
        <ProductIcon product={item.iconProduct} className="h-9 w-9" />
      </span>
    );
  }

  const Icon = item.icon || WandSparkles;
  return (
    <span className={`${size} flex flex-shrink-0 items-center justify-center rounded-xl bg-accent text-ink`}>
      <Icon className="h-6 w-6" strokeWidth={2} />
    </span>
  );
}

function LeadCard({ card, onGoto }) {
  const href = card.goto ? undefined : card.href || "/contact";
  const cta = card.goto ? (
    <Button
      variant={card.primary ? "solid" : "bordered"}
      color={card.primary ? "primary" : "default"}
      radius="full"
      className={card.primary ? "bg-accent text-ink font-bold" : "border-zinc-300 font-bold text-ink"}
      onPress={() => onGoto(card.goto)}
      endContent={<ArrowRight className="h-4 w-4" />}
    >
      {card.cta}
    </Button>
  ) : (
    <Button
      as={Link}
      href={href}
      variant={card.primary ? "solid" : "bordered"}
      color={card.primary ? "primary" : "default"}
      radius="full"
      className={card.primary ? "bg-accent text-ink font-bold" : "border-zinc-300 font-bold text-ink"}
      endContent={<ArrowRight className="h-4 w-4" />}
    >
      {card.cta}
    </Button>
  );

  return (
    <Card className="h-full rounded-2xl border border-zinc-200 bg-white shadow-none transition-colors hover:border-zinc-900">
      <CardHeader className="flex items-start justify-between gap-4 p-6 pb-0">
        <IconTile item={card} />
        {card.badge && (
          <Chip
            size="sm"
            variant="flat"
            className={card.soon ? "bg-zinc-100 text-zinc-600" : "bg-accent text-ink"}
          >
            {card.badge}
          </Chip>
        )}
      </CardHeader>
      <CardBody className="flex flex-col p-6">
        <h3 className="text-2xl font-black tracking-tight text-ink">{card.name}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {(card.tags || []).map((tag) => (
            <Chip key={tag} size="sm" variant="bordered" className="border-zinc-200 text-zinc-600">
              {tag}
            </Chip>
          ))}
          {card.founding && (
            <Chip size="sm" variant="bordered" className="border-zinc-300 text-zinc-700" startContent={<Star className="h-3 w-3" />}>
              Founding rates
            </Chip>
          )}
        </div>
        <p className="mt-4 text-sm leading-6 text-zinc-600">{card.blurb}</p>
      </CardBody>
      <CardFooter className="flex flex-col items-start gap-4 p-6 pt-0">
        <p className="text-sm font-bold text-ink">{card.anchor}</p>
        {cta}
      </CardFooter>
    </Card>
  );
}

export default function PricingPage() {
  const [active, setActive] = useState("websites");
  const category = categories.find((item) => item.id === active) || categories[0];
  const ActiveIcon = category.icon;

  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-zinc-500">
            <Star className="h-3.5 w-3.5" />
            Plans & pricing
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight text-ink md:text-6xl">
            Pick what you need. Pay for nothing you don't.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Transparent, published pricing across the platform. Annual plans include two months free on recurring products.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 py-4 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <Star className="h-4 w-4" fill="#FEE546" />
          <p className="m-0 text-sm leading-6 text-white/85">
            <strong className="text-white">Every offering is a separate purchase — none requires another.</strong>{" "}
            Host without migrating. Hire without the website. Take only what you need.
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[260px_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <p className="mb-3 px-3 text-xs font-black uppercase tracking-[0.14em] text-zinc-500">Browse by need</p>
            <Tabs
              aria-label="Pricing categories"
              selectedKey={active}
              onSelectionChange={(key) => setActive(String(key))}
              classNames={{
                base: "w-full",
                tabList: "w-full gap-1 rounded-2xl border border-zinc-200 bg-white p-2 lg:flex-col",
                cursor: "hidden",
                tab: "h-auto justify-start rounded-xl px-3 py-3 data-[selected=true]:bg-accent",
                tabContent: "w-full text-left font-semibold text-zinc-600 group-data-[selected=true]:text-ink",
                panel: "hidden",
              }}
            >
              {categories.map((item) => (
                <Tab
                  key={item.id}
                  title={
                    <span className="flex w-full items-center justify-between gap-3">
                      <span>{item.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-50" />
                    </span>
                  }
                />
              ))}
            </Tabs>

            <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="font-bold text-ink">Not sure where to start?</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">Tell us about your team and we'll map the right plan.</p>
              <Button as={Link} href="/contact" radius="full" className="mt-4 w-full bg-ink font-bold text-white">
                Talk to us
              </Button>
            </div>
          </aside>

          <section>
            <div className="mb-8 flex max-w-3xl items-start gap-4">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-accent text-ink">
                <ActiveIcon className="h-7 w-7" strokeWidth={2} />
              </span>
              <div>
                <h2 className="text-3xl font-black tracking-tight text-ink md:text-4xl">{category.label}</h2>
                <p className="mt-2 text-base leading-7 text-zinc-600">{category.sub}</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {category.cards.map((card) => (
                <LeadCard key={card.name} card={card} onGoto={setActive} />
              ))}
            </div>

            {category.note && (
              <div className="mt-6 flex max-w-4xl items-start gap-3 text-sm leading-6 text-zinc-500">
                <Star className="mt-1 h-3.5 w-3.5 flex-shrink-0" />
                <p>{category.note}</p>
              </div>
            )}

            <div className="mt-8 border-t border-zinc-200 pt-5 text-sm text-zinc-500">
              Showing <strong className="text-zinc-700">{category.cards.length}</strong> of{" "}
              <strong className="text-zinc-700">{category.cards.length}</strong> {category.label.toLowerCase()} options.
            </div>
          </section>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-2xl bg-ink p-8 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Not sure where to start?</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              We can map websites, hosting, SaaS, content, AI, support, and hiring into one practical plan.
            </p>
          </div>
          <Button as={Link} href="/contact" radius="full" className="bg-accent px-7 font-bold text-ink" endContent={<ArrowRight className="h-4 w-4" />}>
            Talk to us
          </Button>
        </div>
      </section>
    </main>
  );
}
