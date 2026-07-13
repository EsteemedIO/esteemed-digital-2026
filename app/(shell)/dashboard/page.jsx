"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import {
  ArrowRight,
  Calculator,
  Check,
  Cloud,
  ExternalLink,
  Headphones,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import { checkoutHref, productIconPaths } from "@/lib/pricing-catalog";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

const websitePaths = [
  {
    name: "Build a new website",
    product: "Esteemed Create Core",
    icon: productIconPaths.create,
    price: "$39/mo",
    note: "AI-assisted website creation with hosting included at publish.",
    lookupKey: "create_core_monthly",
    href: "/websites/website-builder",
    bullets: ["Custom domain + SSL", "Studio IDE and prompt editing", "Colleagues marketplace access"],
    cta: "Buy Now",
    chip: "Start Here",
  },
  {
    name: "Host an existing site",
    product: "Esteemed Cloud - Sites Plus",
    icon: productIconPaths.cloud,
    price: "$14.99/mo",
    note: "Fast self-managed hosting for JavaScript, WordPress, and Drupal sites.",
    lookupKey: "cloud_plus_monthly",
    href: "/products/cloud",
    bullets: ["Node + React ready", "Staging and CDN", "SSL, backups, monitoring"],
    cta: "Buy Now",
    chip: "Popular",
  },
  {
    name: "Let us manage it",
    product: "Managed Growth",
    icon: productIconPaths.cloud,
    price: "$249/mo",
    note: "Done-for-you managed hosting with monthly expert support.",
    lookupKey: "managed_growth_monthly",
    href: "/products/cloud",
    bullets: ["12-page Create rebuild included", "5 support hours/month", "$100/page overage beyond allowance"],
    cta: "Buy Now",
    chip: "Managed",
  },
];

const accountCards = [
  {
    label: "Plans & billing",
    description: "Choose a website plan, review subscriptions, and purchase.",
    href: "/dashboard/plans",
    icon: Calculator,
    primary: true,
  },
  {
    label: "Sites",
    description: "Manage Create builds, Cloud deploys, live URLs, and Git imports.",
    href: "/dashboard/sites",
    icon: Cloud,
  },
  {
    label: "Settings",
    description: "Manage workspace profile, team access, and billing details.",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    label: "Support",
    description: "Get help with your site, apps, integrations, or launch plan.",
    href: "/dashboard/support",
    icon: Headphones,
  },
];

const apps = [
  { name: "Create", sublabel: "Sites and apps", icon: productIconPaths.create, status: "active", url: "https://create.esteemed.io" },
  { name: "Cloud", sublabel: "Integrated hosting", icon: productIconPaths.cloud, status: "active", url: "https://cloud.esteemed.io" },
  { name: "Acquire", sublabel: "CRM and TRM", icon: productIconPaths.acquire, status: "available", slug: "acquire" },
  { name: "Hire", sublabel: "ATS", icon: productIconPaths.hire, status: "available", slug: "hire" },
  { name: "Intelligence", sublabel: "Memory and reasoning", icon: productIconPaths.intelligence, status: "available", slug: "intelligence" },
  { name: "Agents", sublabel: "Intelligent agents", icon: productIconPaths.agents, status: "available", slug: "agents" },
  { name: "Connect", sublabel: "Retrieval", icon: productIconPaths.connect, status: "available", slug: "connect" },
  { name: "Curate", sublabel: "CMS and DAM", icon: productIconPaths.curate, status: "available", slug: "curate" },
  { name: "Support", sublabel: "Expert assistance", icon: productIconPaths.support, status: "available", slug: "support" },
];

const externalApps = [
  {
    label: "HCMGPT, by Esteemed",
    description: "Open HCMGPT",
    href: "https://hcmgpt.com",
    icon: MessageSquare,
  },
  {
    label: "Colleagues, by Esteemed",
    description: "Open Colleagues",
    href: "https://colleagues.esteemed.io",
    icon: Users,
  },
];

function IconTile({ src, alt, className = "" }) {
  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-[8px] border border-es-border bg-white ${className}`}>
      <Image src={src} alt={alt} width={34} height={34} className="h-8 w-8 object-contain" />
    </div>
  );
}

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"
          style={{ borderColor: "#D7D7D7", borderTopColor: "transparent" }}
        />
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/api/auth/signin");
  }

  const firstName =
    session?.user?.name?.split(" ")[0] ||
    session?.user?.email?.split("@")[0] ||
    "there";

  return (
    <div className="mx-auto max-w-[1440px]">
      <section className="mb-6 rounded-es-lg border border-es-border bg-white p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-es-sm font-es-semibold text-es-fg-2">
              {getGreeting()}, {firstName}
            </p>
            <h1 className="max-w-4xl text-es-3xl font-es-semibold tracking-es-tight text-es-fg-1">
              Website command center
            </h1>
            <p className="mt-3 max-w-3xl text-es-base leading-es-relaxed text-es-fg-2">
              Start a new website, host an existing one, or hand it to Esteemed for managed delivery. This is the account surface for website sales first, with the rest of the Esteemed Platform available as the workspace grows.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              as={Link}
              href="/dashboard/plans"
              className="bg-es-yellow px-5 font-semibold text-es-fg-on-yellow hover:bg-es-yellow-hover"
              radius="sm"
              endContent={<ArrowRight size={16} />}
            >
              See Plans
            </Button>
            <Button
              as={Link}
              href="/products/cloud"
              className="bg-[#111111] px-5 font-semibold text-white hover:scale-[1.02] hover:bg-[#111111]"
              radius="sm"
              variant="solid"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-es-lg font-es-semibold text-es-fg-1">Launch a Website</h2>
            <p className="text-es-sm text-es-fg-2">The three checkout paths we need working for launch.</p>
          </div>
          <Link href="/dashboard/plans" className="text-es-sm font-es-semibold text-es-fg-1 underline underline-offset-4">
            Manage plans
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {websitePaths.map((plan) => (
            <article key={plan.product} className="flex min-h-[360px] flex-col rounded-es-lg border border-es-border bg-white p-5">
              <div className="mb-5 flex items-start justify-between gap-3">
                <IconTile src={plan.icon} alt="" />
                <Chip
                  size="sm"
                  variant="flat"
                  classNames={{
                    base: "bg-es-yellow-hover text-es-fg-1",
                    content: "font-semibold",
                  }}
                >
                  {plan.chip}
                </Chip>
              </div>
              <p className="text-es-sm font-es-semibold text-es-fg-2">{plan.name}</p>
              <h3 className="mt-1 text-es-xl font-es-semibold tracking-es-tight text-es-fg-1">{plan.product}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-[34px] font-es-bold leading-none tracking-es-tight text-es-fg-1">{plan.price}</span>
              </div>
              <p className="mt-3 min-h-[48px] text-es-sm leading-es-relaxed text-es-fg-2">{plan.note}</p>
              <ul className="mt-4 space-y-2">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-es-sm text-es-fg-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-es-fg-1" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-2 pt-5">
                <Button
                  as="a"
                  href={checkoutHref({
                    lookupKey: plan.lookupKey,
                    successPath: "/thanks",
                    cancelPath: "/dashboard",
                  })}
                  className="flex-1 bg-es-yellow font-semibold text-es-fg-on-yellow hover:bg-es-yellow-hover"
                  radius="sm"
                >
                  {plan.cta}
                </Button>
                <Button as={Link} href={plan.href} radius="sm" variant="bordered" className="border-es-border font-semibold text-es-fg-1">
                  Details
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
        {accountCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              className="rounded-es-lg border border-es-border bg-white p-5 transition-colors hover:bg-es-surface-alt"
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-es-sm"
                style={{ background: card.primary ? "#FEE546" : "#F5F5F4" }}
              >
                <Icon size={20} className="text-es-fg-1" strokeWidth={1.8} />
              </div>
              <p className="text-es-base font-es-semibold text-es-fg-1">{card.label}</p>
              <p className="mt-1 text-es-sm leading-es-relaxed text-es-fg-2">{card.description}</p>
            </Link>
          );
        })}
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-es-lg font-es-semibold text-es-fg-1">Esteemed Platform</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {apps.map((app) => {
            const isActive = app.status === "active";
            return (
              <div key={app.name} className="flex flex-col gap-4 rounded-es-lg border border-es-border bg-white p-5 transition-colors hover:bg-es-surface-alt">
                <div className="flex items-start justify-between">
                  <IconTile src={app.icon} alt="" />
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: isActive ? "#07BC0C" : "#B8B8B8" }} />
                    <span className="text-es-sm text-es-fg-2">{isActive ? "Active" : "Available"}</span>
                  </div>
                </div>
                <div>
                  <p className="text-es-base font-es-semibold text-es-fg-1">{app.name}</p>
                  <p className="text-es-sm text-es-fg-3">{app.sublabel}</p>
                </div>
                {isActive ? (
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-es-sm border border-es-border bg-white px-es-4 py-es-2 text-es-sm font-es-semibold text-es-fg-1 transition-colors hover:bg-es-surface-alt"
                  >
                    Manage
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <Link
                    href={`/dashboard/activate/${app.slug}`}
                    className="mt-auto inline-flex items-center justify-center rounded-es-sm bg-es-yellow px-es-4 py-es-2 text-es-sm font-es-semibold text-es-fg-on-yellow transition-colors hover:bg-es-yellow-hover"
                  >
                    Activate
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-es-lg font-es-semibold text-es-fg-1">Related Apps</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {externalApps.map((app) => {
            const Icon = app.icon;
            return (
              <a
                key={app.label}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-es-lg border border-es-border bg-white p-5 transition-colors hover:bg-es-surface-alt"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-es-sm bg-es-surface-alt">
                    <Icon size={20} className="text-es-fg-2" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-es-base font-es-semibold text-es-fg-1">{app.label}</p>
                    <p className="text-es-sm text-es-fg-3">{app.description}</p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-es-fg-3" />
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
