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
  Input,
} from "@heroui/react";
import {
  AlertCircle,
  ArrowRight,
  AtSign,
  CalendarDays,
  Cloud,
  CreditCard,
  ExternalLink,
  Globe,
  Headphones,
  Megaphone,
  Package,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Server,
  ShoppingBag,
  Users,
} from "lucide-react";
import {
  CREATE_BASE,
  siteLiveUrl,
  sitePrimaryDomain,
  siteStatusClass,
  siteStatusLabel,
} from "@/components/dashboard/site-utils";
import ShellFrame from "@/components/shell/ShellFrame";

const productAccordions = [
  {
    key: "domains",
    title: "Domains",
    subtitle: "Registration, DNS, renewals, privacy, and nameservers.",
    manageHref: "/dashboard/settings#domains",
    manageLabel: "Manage All",
    icon: Globe,
    rows: [],
  },
  {
    key: "websites",
    title: "Websites + Marketing",
    subtitle: "Create, Studio, publishing, Coming Soon pages, and launch readiness.",
    manageHref: "/dashboard/sites",
    manageLabel: "Manage All",
    icon: Cloud,
  },
  {
    key: "commerce",
    title: "Commerce & Payments",
    subtitle: "Storefronts, checkout, payments, subscriptions, and selling tools.",
    manageHref: "/websites/ecommerce",
    manageLabel: "Manage All",
    icon: CreditCard,
  },
  {
    key: "wordpress",
    title: "Managed WordPress",
    subtitle: "Managed hosting, migrations, security, and updates.",
    manageHref: "/websites/hosting/wordpress-hosting",
    manageLabel: "Manage All",
    icon: Server,
  },
  {
    key: "additional",
    title: "Additional Products",
    subtitle: "Email, CRM, appointments, conversations, deals, and support add-ons.",
    manageHref: "/dashboard/plans",
    manageLabel: "Manage All",
    icon: Package,
  },
  {
    key: "partners",
    title: "Partner Offers",
    subtitle: "Business formation, operations, and launch services.",
    manageHref: "/dashboard/support",
    manageLabel: "View Offers",
    icon: Headphones,
  },
];

function ProductAccordionTitle({ section }) {
  const Icon = section.icon;

  return (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-ink">
        <Icon size={19} />
      </span>
      <span>
        <span className="block text-2xl font-semibold text-ink">{section.title}</span>
        <span className="block text-sm font-normal text-zinc-500">{section.subtitle}</span>
      </span>
    </div>
  );
}

function ProductSiteCard({ site, index }) {
  const href = `/dashboard/sites/${encodeURIComponent(site.id)}`;
  const domain = sitePrimaryDomain(site) || siteLiveUrl(site) || site.id;
  const services = [domain ? "Domain" : null, "Website"].filter(Boolean).join(", ");
  const imageClasses = [
    "bg-[linear-gradient(135deg,#f4f1ff,#ffffff_45%,#fee546)]",
    "bg-[linear-gradient(135deg,#111111,#374151_52%,#fee546)]",
    "bg-[linear-gradient(135deg,#e8f8ea,#ffffff_45%,#a7f3d0)]",
    "bg-[linear-gradient(135deg,#fef3c7,#ffffff_45%,#fcd34d)]",
    "bg-[linear-gradient(135deg,#dbeafe,#ffffff_45%,#93c5fd)]",
    "bg-[linear-gradient(135deg,#fce7f3,#ffffff_45%,#f9a8d4)]",
  ];

  return (
    <Link href={href} className="block overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors hover:bg-zinc-50">
      <div className={`h-36 border-b border-zinc-200 ${imageClasses[index % imageClasses.length]}`}>
        <div className="flex h-full items-start justify-between p-4">
          <Chip
            size="sm"
            variant="flat"
            classNames={{ base: siteStatusClass(site.status), content: "font-semibold" }}
          >
            {siteStatusLabel(site.status)}
          </Chip>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
            {site.source || "Create"}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="truncate text-xl font-semibold text-ink">{site.name}</h3>
        <p className="mt-1 truncate text-sm text-zinc-500">{domain}</p>
        <p className="mt-2 text-sm text-zinc-500">{services}</p>
      </div>
    </Link>
  );
}

function ProductRow({ title, detail, action, href, icon: Icon, external = false }) {
  const Tag = external ? "a" : Link;
  const props = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

  return (
    <div className="grid gap-4 border-t border-zinc-200 py-5 md:grid-cols-[1fr_auto_auto] md:items-center">
      <div className="flex items-start gap-4">
        <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-50 text-ink">
          <Icon size={18} />
        </span>
        <div>
          <p className="font-semibold text-ink">{title}</p>
          <p className="mt-1 text-sm text-zinc-500">{detail}</p>
        </div>
      </div>
      <Tag {...props} className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline underline-offset-4">
        {action}
        {external ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
      </Tag>
    </div>
  );
}

function defaultRowsForSection(section) {
  if (section.key === "commerce") {
    return [
      {
        title: "Add commerce tools",
        detail: "Products, payments, checkout, and selling features for this workspace.",
        action: "Add Commerce",
        href: "/websites/ecommerce",
        icon: ShoppingBag,
      },
      {
        title: "Appointments",
        detail: "Booking flows for calls, consultations, and service businesses.",
        action: "Set Up Booking",
        href: "/dashboard/support",
        icon: CalendarDays,
      },
    ];
  }

  if (section.key === "wordpress") {
    return [
      {
        title: "Managed Hosting for WordPress - Free Trial",
        detail: "Managed hosting, migration support, backups, and security updates.",
        action: "Start for Free",
        href: "/websites/hosting/wordpress-hosting",
        icon: Server,
      },
    ];
  }

  if (section.key === "additional") {
    return [
      {
        title: "Professional email",
        detail: "Create branded email addresses for your domain.",
        action: "Create Email",
        href: "/business-tools/business-email",
        icon: AtSign,
      },
      {
        title: "CRM, conversations, and deals",
        detail: "Manage customers, inbound messages, and sales pipeline activity.",
        action: "Activate CRM",
        href: "/dashboard/activate/acquire",
        icon: Users,
      },
      {
        title: "Marketing",
        detail: "Create campaigns, social posts, and launch promotion.",
        action: "Start Marketing",
        href: "/hire-experts/search-engine-marketing",
        icon: Megaphone,
      },
    ];
  }

  if (section.key === "partners") {
    return [
      {
        title: "Request launch support",
        detail: "Get help with DNS, content, QA, launch cleanup, migration, or product setup.",
        action: "Request Support",
        href: "/dashboard/support",
        icon: Headphones,
      },
      {
        title: "Post a job on Colleagues",
        detail: "Bring in vetted talent for design, development, content, or operations.",
        action: "Post a Job",
        href: "https://colleagues.esteemed.io/jobs/new",
        icon: Users,
        external: true,
      },
    ];
  }

  return [
    {
      title: section.title,
      detail: section.subtitle,
      action: section.manageLabel,
      href: section.manageHref,
      icon: section.icon,
    },
  ];
}

function ProductsHomeContent() {
  const { data: session, status } = useSession();
  const [sites, setSites] = useState([]);
  const [isLoadingSites, setIsLoadingSites] = useState(true);
  const [sitesError, setSitesError] = useState("");
  const [query, setQuery] = useState("");
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
  const normalizedQuery = query.trim().toLowerCase();
  const filteredSites = normalizedQuery
    ? sites.filter((site) => {
        const haystack = [
          site.name,
          site.id,
          sitePrimaryDomain(site),
          siteLiveUrl(site),
          site.source,
          site.framework,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalizedQuery);
      })
    : sites;
  const visibleSites = filteredSites.slice(0, 6);
  const productSections = (() => {
    const domains = sites
      .map((site) => sitePrimaryDomain(site) || siteLiveUrl(site))
      .filter(Boolean)
      .slice(0, 5);

    if (!primarySite) return productAccordions;

    return productAccordions.map((section) => {
      if (section.key === "domains") {
        return {
          ...section,
          rows: domains.length
            ? domains.map((domain) => ({
                title: domain.replace(/^https?:\/\//, ""),
                detail: "DNS and registration controls",
                action: "Manage",
                href: "/dashboard/settings#domains",
                icon: Globe,
              }))
            : [
                {
                  title: "Register or transfer a domain",
                  detail: "Start domain setup through Esteemed Domains.",
                  action: "Manage Domains",
                  href: "/dashboard/settings#domains",
                  icon: Globe,
                },
              ],
        };
      }

      if (section.key !== "websites") return section;

      return {
        ...section,
        rows: [
          ...sites.map((site) => ({
            title: site.name || site.id,
            detail: sitePrimaryDomain(site) || siteLiveUrl(site) || "Website dashboard, Studio, publishing, and Coming Soon page.",
            action: "Manage",
            href: `/dashboard/sites/${encodeURIComponent(site.id)}`,
            icon: Cloud,
          })),
          {
            title: "Publish a Coming Soon page",
            detail: "Put a branded holding page live while the full site is built.",
            action: "Choose Site",
            href: `/dashboard/sites/${encodeURIComponent(primarySite.id)}`,
            icon: Rocket,
          },
          {
            title: "Set up a new website",
            detail: "Start another site in Esteemed Create.",
            action: "Start",
            href: CREATE_BASE,
            icon: Plus,
            external: true,
          },
        ],
      };
    });
  })();

  return (
    <div className="mx-auto max-w-[1280px]">
      <section className="mb-8 pt-4">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 md:flex-row">
          <Input
            aria-label="Search products"
            value={query}
            onValueChange={setQuery}
            placeholder="Search using your business name or desired domain name"
            radius="sm"
            size="lg"
            startContent={<Search size={18} className="text-zinc-400" />}
            classNames={{
              inputWrapper: "border border-zinc-300 bg-white shadow-none",
              input: "text-base",
            }}
          />
          <Button
            as="a"
            href={CREATE_BASE}
            target="_blank"
            rel="noopener noreferrer"
            radius="sm"
            size="lg"
            variant="bordered"
            className="shrink-0 border-zinc-300 bg-white px-6 font-semibold text-ink"
            startContent={<Plus size={18} />}
          >
            Set up a free website
          </Button>
        </div>
        <h1 className="mt-10 text-center text-2xl font-semibold text-ink">
          What do you want to work on today, {firstName}?
        </h1>
        {sites.length > 0 && (
          <p className="mt-3 text-center text-sm text-zinc-500">
            {sites.length} product{sites.length === 1 ? "" : "s"} in this workspace. {liveCount} live.
          </p>
        )}
      </section>

      <section className="mb-8">
        <div className="mb-4 flex justify-end">
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
          <div className="flex min-h-[360px] items-center justify-center rounded-xl border border-zinc-200 bg-white">
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
        ) : visibleSites.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-200 bg-white p-8 text-center">
            <Search size={32} className="mx-auto mb-4 text-zinc-400" />
            <h2 className="text-xl font-semibold text-ink">No products match that search</h2>
            <p className="mt-2 text-sm text-zinc-500">Try a site name, domain, framework, or product type.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleSites.map((site, index) => (
              <ProductSiteCard key={site.id} site={site} index={index} />
            ))}
          </div>
        )}
      </section>

      <section className="mb-8">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-ink">All Products and Services</h2>
        </div>
        <Accordion
          variant="splitted"
          selectionMode="multiple"
          defaultExpandedKeys={["domains", "websites", "wordpress", "partners"]}
          itemClasses={{
            base: "rounded-xl border border-zinc-200 bg-white shadow-none",
            title: "text-ink",
            trigger: "px-6 py-6",
            content: "px-8 pb-6 pt-0",
          }}
        >
          {productSections.map((section) => (
            <AccordionItem
              key={section.key}
              aria-label={section.title}
              title={<ProductAccordionTitle section={section} />}
              indicator={<ArrowRight size={22} />}
            >
              <div className="mb-4 flex justify-end border-t border-zinc-200 pt-4">
                <Button
                  as={Link}
                  href={section.manageHref}
                  radius="sm"
                  variant="light"
                  className="font-semibold text-ink"
                  endContent={<ArrowRight size={16} />}
                >
                  {section.manageLabel}
                </Button>
              </div>
              {(section.rows || defaultRowsForSection(section)).map((row) => (
                <ProductRow key={`${section.key}-${row.title}`} {...row} />
              ))}
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
