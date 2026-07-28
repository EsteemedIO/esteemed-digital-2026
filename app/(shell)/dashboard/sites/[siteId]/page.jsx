"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button, Chip } from "@heroui/react";
import {
  ArrowRight,
  AtSign,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Cloud,
  CreditCard,
  ExternalLink,
  Gift,
  Globe,
  Headphones,
  Mail,
  Megaphone,
  MessageSquare,
  RefreshCw,
  Rocket,
  Settings,
  ShoppingBag,
  Store,
  Tag,
  Users,
  Wrench,
} from "lucide-react";
import {
  formatSiteDate,
  siteComingSoonUrl,
  siteDeployUrl,
  siteLiveUrl,
  sitePrimaryDomain,
  siteStatusClass,
  siteStatusLabel,
  siteStudioUrl,
} from "@/components/dashboard/site-utils";

const siteMenu = [
  { label: "Dashboard", icon: BarChart3 },
  { label: "Domain", icon: Globe },
  { label: "Website", icon: Cloud },
  { label: "Email", icon: Mail },
  { label: "Commerce", icon: Store },
  { label: "Appointments", icon: CalendarDays },
  { label: "Marketing", icon: Megaphone },
  { label: "Conversations", icon: MessageSquare },
  { label: "Customers", icon: Users },
  { label: "Deals", icon: Tag },
  { label: "Marketplace", icon: ShoppingBag },
];

function encodeSiteId(siteId) {
  return encodeURIComponent(siteId || "");
}

export default function SiteDetailPage() {
  const { siteId } = useParams();
  const decodedSiteId = useMemo(() => decodeURIComponent(siteId || ""), [siteId]);
  const { status } = useSession();
  const [sites, setSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadSites() {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/cloud/sites", { cache: "no-store" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || "Unable to load site details.");
      setSites(payload.apps || []);
    } catch (loadError) {
      setError(loadError.message || "Unable to load site details.");
    } finally {
      setIsLoading(false);
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

  const site = sites.find((item) => item.id === decodedSiteId);
  const liveUrl = site ? siteLiveUrl(site) : "";
  const primaryDomain = site ? sitePrimaryDomain(site) : "";
  const siteName = site?.name || decodedSiteId || "Website";

  const primaryActions = site
    ? [
        {
          title: "Publish a Coming Soon page",
          description: "Launch a branded holding page while the full site is being built.",
          cta: "Publish Coming Soon",
          href: siteComingSoonUrl(site.id),
          icon: Rocket,
          external: true,
          accent: true,
        },
        {
          title: liveUrl ? "Edit your website" : "Finish website build",
          description: "Open Studio to update content, design, sections, and launch settings.",
          cta: "Open Studio",
          href: siteStudioUrl(site.id),
          icon: Wrench,
          external: true,
        },
        {
          title: "Publish latest version",
          description: "Push the current build live through the Create publishing flow.",
          cta: "Publish site",
          href: siteDeployUrl(site.id),
          icon: CheckCircle2,
          external: true,
        },
      ]
    : [];

  const growthActions = [
    {
      title: "Connect or register a domain",
      description: "Use Esteemed Domains for registration, transfer, renewals, privacy, nameservers, and DNS handoff.",
      cta: "Manage Domain",
      href: "/dashboard/settings#domains",
      icon: Globe,
    },
    {
      title: "Create email address",
      description: "Use a branded mailbox on the domain customers already recognize.",
      cta: "Create Email",
      href: "/business-tools/business-email",
      icon: AtSign,
    },
    {
      title: "Build brand awareness",
      description: "Create social posts, campaigns, and launch updates around this site.",
      cta: "Start Marketing",
      href: "/dashboard/activate/marketing",
      icon: Megaphone,
    },
    {
      title: "Add commerce tools",
      description: "Prepare products, payments, checkout, and service add-ons when this site needs to sell.",
      cta: "Add Commerce",
      href: "/dashboard/activate/commerce",
      icon: CreditCard,
    },
    {
      title: "Offer appointments",
      description: "Add booking flows for calls, consultations, and local services.",
      cta: "Set Up Booking",
      href: "/dashboard/activate/appointments",
      icon: CalendarDays,
    },
    {
      title: "Request launch support",
      description: "Buy support hours for DNS, content, QA, launch cleanup, and migration help.",
      cta: "Get Support",
      href: "/dashboard/support",
      icon: Headphones,
    },
  ];

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-5">
        <Link href="/dashboard/sites" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-ink">
          <ArrowRight size={14} className="rotate-180" />
          Back to Sites
        </Link>
      </div>

      <section className="mb-6 rounded-xl border border-zinc-200 bg-white p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-zinc-500">Website dashboard</p>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-ink">{siteName}</h1>
              {site && (
                <Chip
                  size="sm"
                  variant="flat"
                  classNames={{ base: siteStatusClass(site.status), content: "font-semibold" }}
                >
                  {siteStatusLabel(site.status)}
                </Chip>
              )}
            </div>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-500">
              {primaryDomain || liveUrl || decodedSiteId}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {liveUrl && (
              <Button
                as="a"
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                radius="sm"
                variant="bordered"
                className="border-zinc-200 font-semibold text-ink"
                endContent={<ExternalLink size={15} />}
              >
                Visit website
              </Button>
            )}
            {site && (
              <Button
                as="a"
                href={siteStudioUrl(site.id)}
                target="_blank"
                rel="noopener noreferrer"
                radius="sm"
                className="bg-accent font-semibold text-ink hover:bg-accent-hover"
                endContent={<ExternalLink size={15} />}
              >
                Edit website
              </Button>
            )}
            <Button
              onPress={loadSites}
              isLoading={isLoading}
              radius="sm"
              variant="light"
              className="font-semibold text-ink"
              startContent={!isLoading ? <RefreshCw size={16} /> : null}
            >
              Refresh
            </Button>
          </div>
        </div>
      </section>

      {error && (
        <div className="mb-6 rounded-lg border border-[#F4C7C3] bg-[#FFF4F2] p-4 text-sm text-[#8A1F11]">
          <p className="font-semibold">Site details are unavailable</p>
          <p>{error}</p>
        </div>
      )}

      {isLoading ? (
        <div className="flex min-h-[360px] items-center justify-center rounded-xl border border-zinc-200 bg-white">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-200 border-t-transparent" />
        </div>
      ) : !site ? (
        <div className="rounded-xl border border-dashed border-zinc-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-ink">Site not found</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500">
            This site was not returned by the current Create inventory endpoint.
          </p>
          <Button as={Link} href="/dashboard/sites" radius="sm" className="mt-5 bg-accent font-semibold text-ink hover:bg-accent-hover">
            View all sites
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[260px_minmax(0,1fr)_340px]">
          <aside className="rounded-xl border border-zinc-200 bg-white p-3 xl:sticky xl:top-24 xl:self-start">
            <nav className="space-y-1">
              {siteMenu.map((item, index) => {
                const Icon = item.icon;
                const href = index === 0 ? `/dashboard/sites/${encodeSiteId(site.id)}` : `#${item.label.toLowerCase()}`;
                return (
                  <a
                    key={item.label}
                    href={href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold ${index === 0 ? "bg-accent text-ink" : "text-zinc-600 hover:bg-zinc-50 hover:text-ink"}`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </aside>

          <main className="space-y-6">
            <section className="rounded-xl border border-zinc-200 bg-white p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-ink">Launch actions</h2>
                  <p className="text-sm text-zinc-500">The core work for getting this site public and useful.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {primaryActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <article key={action.title} className={`flex min-h-[230px] flex-col rounded-xl border p-5 ${action.accent ? "border-accent bg-accent/10" : "border-zinc-200 bg-white"}`}>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-ink">{action.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{action.description}</p>
                      <Button
                        as="a"
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noopener noreferrer" : undefined}
                        radius="sm"
                        className="mt-auto w-fit bg-[#111111] font-semibold text-white hover:bg-[#111111]"
                        endContent={<ExternalLink size={14} />}
                      >
                        {action.cta}
                      </Button>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="rounded-xl border border-zinc-200 bg-white p-5">
              <h2 className="text-xl font-semibold text-ink">More ways to grow</h2>
              <div className="mt-5 space-y-4">
                {growthActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <article key={action.title} className="grid gap-4 rounded-xl border border-zinc-200 p-5 md:grid-cols-[1fr_auto] md:items-center">
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                            <Icon size={18} />
                          </div>
                          <h3 className="text-lg font-semibold text-ink">{action.title}</h3>
                        </div>
                        <p className="max-w-3xl text-sm leading-relaxed text-zinc-500">{action.description}</p>
                      </div>
                      <Button as={Link} href={action.href} radius="sm" variant="bordered" className="w-fit border-zinc-200 font-semibold text-ink">
                        {action.cta}
                      </Button>
                    </article>
                  );
                })}
              </div>
            </section>
          </main>

          <aside className="space-y-4">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-ink">Website</h2>
                <Chip size="sm" variant="flat" classNames={{ base: "bg-[#E8F8EA] text-[#126B24]", content: "font-semibold" }}>
                  Connected
                </Chip>
              </div>
              <div className="space-y-3 text-sm">
                <div className="rounded-lg bg-zinc-50 p-3">
                  <p className="text-xs font-semibold uppercase text-zinc-400">Framework</p>
                  <p className="mt-1 font-semibold text-ink">{site.framework || "React"}</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-3">
                  <p className="text-xs font-semibold uppercase text-zinc-400">Updated</p>
                  <p className="mt-1 font-semibold text-ink">{formatSiteDate(site.updatedAt)}</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-3">
                  <p className="text-xs font-semibold uppercase text-zinc-400">Site ID</p>
                  <p className="mt-1 truncate font-semibold text-ink">{site.id}</p>
                </div>
              </div>
            </div>

            <div id="domain" className="rounded-xl border border-zinc-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-ink">Domain</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Registration, transfer, renewal, privacy, and nameserver controls will run through Esteemed Domains.
              </p>
              <Button as={Link} href="/dashboard/settings#domains" radius="sm" className="mt-4 bg-[#111111] font-semibold text-white hover:bg-[#111111]">
                Manage Domain
              </Button>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-ink">Quick links</h2>
              <div className="mt-4 space-y-3">
                {[
                  { label: "Manage Domain", href: "/dashboard/settings#domains", icon: Settings },
                  { label: "Create Social Post", href: "/dashboard/activate/marketing", icon: Gift },
                  { label: "Business Email", href: "/business-tools/business-email", icon: Mail },
                  { label: "Support Request", href: "/dashboard/support", icon: BriefcaseBusiness },
                ].map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link key={link.label} href={link.href} className="flex items-center gap-3 rounded-lg p-2 text-sm font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-ink">
                      <Icon size={18} />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
