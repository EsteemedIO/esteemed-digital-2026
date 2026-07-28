"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
} from "@heroui/react";
import {
  AlertCircle,
  ArrowRight,
  AtSign,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Cloud,
  CreditCard,
  ExternalLink,
  Globe,
  Headphones,
  Megaphone,
  MessageSquare,
  Package,
  Plus,
  RefreshCw,
  Rocket,
  Server,
  ShoppingBag,
  Tag,
  Users,
} from "lucide-react";
import SiteCard from "@/components/dashboard/SiteCard";
import { CREATE_BASE } from "@/components/dashboard/site-utils";
import ShellFrame from "@/components/shell/ShellFrame";

const productAccordions = [
  {
    key: "website",
    title: "Website",
    subtitle: "Create, Studio, publishing, Coming Soon pages, and launch readiness.",
    icon: Cloud,
    items: [
      { label: "Publish Coming Soon", href: "/dashboard/sites", icon: Rocket },
      { label: "Create a new website", href: CREATE_BASE, icon: Plus, external: true },
      { label: "View site inventory", href: "/dashboard/sites", icon: Cloud },
    ],
  },
  {
    key: "domain",
    title: "Domain",
    subtitle: "Registration, transfers, renewals, privacy, nameservers, and DNS handoff.",
    icon: Globe,
    items: [
      { label: "Manage domains", href: "/dashboard/settings#domains", icon: Globe },
      { label: "View domain build spec", href: "/dashboard/settings#domains", icon: CheckCircle2 },
    ],
  },
  {
    key: "email",
    title: "Email",
    subtitle: "Professional mailboxes and domain-based business email.",
    icon: AtSign,
    items: [
      { label: "Create email address", href: "/business-tools/business-email", icon: AtSign },
      { label: "Email setup support", href: "/dashboard/support", icon: Headphones },
    ],
  },
  {
    key: "commerce",
    title: "Commerce",
    subtitle: "Storefronts, checkout, payments, subscriptions, and selling tools.",
    icon: CreditCard,
    items: [
      { label: "Add commerce", href: "/dashboard/activate/commerce", icon: ShoppingBag },
      { label: "View ecommerce plans", href: "/websites/ecommerce", icon: CreditCard },
    ],
  },
  {
    key: "appointments",
    title: "Appointments",
    subtitle: "Booking flows for calls, consults, field service, and local businesses.",
    icon: CalendarDays,
    items: [
      { label: "Set up booking", href: "/dashboard/activate/appointments", icon: CalendarDays },
      { label: "Request setup help", href: "/dashboard/support", icon: Headphones },
    ],
  },
  {
    key: "marketing",
    title: "Marketing",
    subtitle: "Social posts, campaigns, search visibility, and launch promotion.",
    icon: Megaphone,
    items: [
      { label: "Start marketing", href: "/dashboard/activate/marketing", icon: Megaphone },
      { label: "AI visibility", href: "/hire-experts/ai-visibility", icon: BarChart3 },
    ],
  },
  {
    key: "customers",
    title: "Customers, conversations, and deals",
    subtitle: "CRM, inbound messages, contacts, pipelines, and customer follow-up.",
    icon: Users,
    items: [
      { label: "Activate CRM", href: "/dashboard/activate/acquire", icon: Users },
      { label: "Conversations", href: "/dashboard/activate/conversations", icon: MessageSquare },
      { label: "Deals", href: "/dashboard/activate/deals", icon: Tag },
    ],
  },
  {
    key: "support",
    title: "Support and marketplace",
    subtitle: "Support hours, expert help, add-ons, and services for the selected site.",
    icon: Headphones,
    items: [
      { label: "Request support", href: "/dashboard/support", icon: Headphones },
      { label: "Plans and features", href: "/dashboard/plans", icon: Package },
    ],
  },
];

const quickActions = [
  { label: "New website", href: CREATE_BASE, icon: Rocket, external: true },
  { label: "Add domain", href: "/dashboard/settings#domains", icon: Globe },
  { label: "Business email", href: "/business-tools/business-email", icon: AtSign },
  { label: "Support", href: "/dashboard/support", icon: Headphones },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function ProductAccordionTitle({ section }) {
  const Icon = section.icon;

  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-ink">
        <Icon size={19} />
      </span>
      <span>
        <span className="block text-base font-semibold text-ink">{section.title}</span>
        <span className="block text-sm font-normal text-zinc-500">{section.subtitle}</span>
      </span>
    </div>
  );
}

function ProductsHomeContent() {
  const { data: session, status } = useSession();
  const [sites, setSites] = useState([]);
  const [isLoadingSites, setIsLoadingSites] = useState(true);
  const [sitesError, setSitesError] = useState("");
  const liveCount = sites.filter((site) => ["published", "deployed", "live"].includes(site.status)).length;

  async function loadSites() {
    setIsLoadingSites(true);
    setSitesError("");
    try {
      const response = await fetch("/api/cloud/sites", { cache: "no-store" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || "Unable to load sites.");
      setSites(payload.apps || []);
    } catch (error) {
      setSitesError(error.message || "Unable to load sites.");
    } finally {
      setIsLoadingSites(false);
    }
  }

  useEffect(() => {
    if (status === "authenticated") loadSites();
  }, [status]);

  if (status === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-200 border-t-transparent" />
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

  const primarySite = sites[0];

  return (
    <div className="mx-auto max-w-[1440px]">
      <section className="mb-6 rounded-xl border border-zinc-200 bg-white p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-zinc-500">
              {getGreeting()}, {firstName}
            </p>
            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-ink">
              Products
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-500">
              {primarySite
                ? `${sites.length} site${sites.length === 1 ? "" : "s"} in this workspace. ${liveCount} live. Manage websites, domains, email, commerce, marketing, and support from one place.`
                : "Create a site, publish a Coming Soon page, connect a domain, and add the products needed to launch."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              as="a"
              href={CREATE_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent px-5 font-semibold text-ink hover:bg-accent-hover"
              radius="sm"
              endContent={<ExternalLink size={16} />}
            >
              New site
            </Button>
            <Button
              as={Link}
              href="/dashboard/plans"
              className="bg-[#111111] px-5 font-semibold text-white hover:bg-[#111111]"
              radius="sm"
              variant="solid"
            >
              Plans
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        {quickActions.map((action) => {
          const Icon = action.icon;
          const className = "flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-sm font-semibold text-ink transition-colors hover:bg-zinc-50";
          if (action.external) {
            return (
              <a key={action.label} href={action.href} target="_blank" rel="noopener noreferrer" className={className}>
                <Icon size={18} />
                {action.label}
              </a>
            );
          }
          return (
            <Link key={action.label} href={action.href} className={className}>
              <Icon size={18} />
              {action.label}
            </Link>
          );
        })}
      </section>

      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-ink">Your sites</h2>
            <p className="text-sm text-zinc-500">Click a site to manage its detail menu, launch actions, domains, and add-ons.</p>
          </div>
          <Button
            onPress={loadSites}
            isLoading={isLoadingSites}
            radius="sm"
            variant="bordered"
            className="border-zinc-200 font-semibold text-ink"
            startContent={!isLoadingSites ? <RefreshCw size={16} /> : null}
          >
            Refresh
          </Button>
        </div>

        {sitesError && (
          <div className="mb-4 flex gap-3 rounded-lg border border-[#F4C7C3] bg-[#FFF4F2] p-4 text-sm text-[#8A1F11]">
            <AlertCircle size={18} className="shrink-0" />
            <div>
              <p className="font-semibold">Site inventory is unavailable</p>
              <p>{sitesError}</p>
            </div>
          </div>
        )}

        {isLoadingSites ? (
          <div className="flex min-h-[260px] items-center justify-center rounded-xl border border-zinc-200 bg-white">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-200 border-t-transparent" />
          </div>
        ) : sites.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-200 bg-white p-8">
            <Server size={36} className="mb-4 text-zinc-400" />
            <h2 className="text-xl font-semibold text-ink">No sites yet</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500">
              Create a site, import one from GitHub, or start with a Coming Soon page while your launch plan comes together.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button as="a" href={CREATE_BASE} target="_blank" rel="noopener noreferrer" radius="sm" className="bg-accent font-semibold text-ink hover:bg-accent-hover">
                Create site
              </Button>
              <Button as={Link} href="/dashboard/sites" radius="sm" variant="bordered" className="border-zinc-200 font-semibold text-ink">
                Import site
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {sites.map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        )}
      </section>

      <section className="mb-8">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-ink">Products and add-ons</h2>
          <p className="text-sm text-zinc-500">New products can be added here as expandable sections beneath the site grid.</p>
        </div>
        <Accordion
          variant="splitted"
          selectionMode="multiple"
          defaultExpandedKeys={["website", "domain"]}
          itemClasses={{
            base: "rounded-xl border border-zinc-200 bg-white shadow-none",
            title: "text-ink",
            trigger: "px-5 py-4",
            content: "px-5 pb-5 pt-0",
          }}
        >
          {productAccordions.map((section) => (
            <AccordionItem
              key={section.key}
              aria-label={section.title}
              title={<ProductAccordionTitle section={section} />}
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const className = "flex min-h-[84px] items-center justify-between gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-left hover:bg-white";
                  const content = (
                    <>
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                          <Icon size={17} />
                        </span>
                        <span className="text-sm font-semibold text-ink">{item.label}</span>
                      </span>
                      {item.external ? <ExternalLink size={15} className="text-zinc-400" /> : <ArrowRight size={15} className="text-zinc-400" />}
                    </>
                  );

                  if (item.external) {
                    return (
                      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                        {content}
                      </a>
                    );
                  }

                  return (
                    <Link key={item.label} href={item.href} className={className}>
                      {content}
                    </Link>
                  );
                })}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <ShellFrame>
      <ProductsHomeContent />
    </ShellFrame>
  );
}
