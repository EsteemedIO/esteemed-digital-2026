import Link from "next/link";
import { Cloud, Shield, HardDrive, Activity, Check, ArrowRight } from "lucide-react";
import { cloudTiers, managedHostingTiers } from "@/lib/data";

export const metadata = {
  title: "Cloud",
  description:
    "Hosting that scales with you. Managed hosting with SSL, daily backups, monitoring, and a global edge network.",
};

const includes = [
  {
    icon: Cloud,
    title: "Managed hosting",
    description:
      "Modern cloud infrastructure with automatic failover, redundancy, and a global edge network. No servers to manage.",
  },
  {
    icon: Shield,
    title: "SSL included",
    description:
      "Every site gets HTTPS automatically. No certificates to manage, no renewals to track. Secure by default.",
  },
  {
    icon: HardDrive,
    title: "Daily backups",
    description:
      "Automatic daily backups with one-click restore. Your content is safe even if something goes wrong.",
  },
  {
    icon: Activity,
    title: "24/7 monitoring",
    description:
      "We watch your site around the clock. If something breaks, we know before you do — and we fix it.",
  },
];

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}

export default function CloudPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Cloud
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Meet Esteemed Cloud
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Hosting for sites that are not running on Curate: bring-your-own,
            Create-built, React, Node, and Next sites on Esteemed Cloud.
          </p>
          <div className="mt-10">
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              See plans
            </Link>
          </div>
        </div>
      </section>

      {/* What it includes */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">
            What&apos;s included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {includes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 p-6"
              >
                <item.icon
                  className="w-8 h-8 text-ink mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-bold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier structure */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">
            Self-serve Cloud
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-zinc-600">
            GoDaddy-aligned pricing with SSL included and no forced CMS migration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudTiers.map((tier) => (
              <div
                key={tier.key}
                className="rounded-2xl border border-zinc-200 p-6"
              >
                <h3 className="text-2xl font-bold text-ink mb-1">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-ink">
                    {formatMoney(tier.monthly)}
                  </span>
                  <span className="text-sm text-zinc-500 font-normal">/mo</span>
                  <p className="mt-1 text-xs text-zinc-500">{formatMoney(tier.annual)}/yr</p>
                </div>
                <p className="text-sm text-zinc-600 mb-6">{tier.description}</p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Hosting */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-4 text-center">
            Managed Hosting
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-zinc-600">
            Done-for-you hosting with included support hours. Managed plans can
            include a $0 Create rebuild with a 12-month term.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {managedHostingTiers.map((tier) => (
              <div key={tier.key} className="rounded-2xl border border-zinc-200 p-6">
                <h3 className="text-2xl font-bold text-ink mb-1">{tier.name}</h3>
                <div className="mb-4">
                  {tier.monthly === null ? (
                    <span className="text-2xl font-bold text-ink">Custom</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-ink">{formatMoney(tier.monthly)}</span>
                      <span className="text-sm text-zinc-500 font-normal">/mo</span>
                      <p className="mt-1 text-xs text-zinc-500">{formatMoney(tier.annual)}/yr</p>
                    </>
                  )}
                </div>
                <p className="text-sm text-zinc-600 mb-3">{tier.description}</p>
                {tier.supportHours && (
                  <p className="text-sm font-semibold text-ink">{tier.supportHours} support hrs/mo included</p>
                )}
                <Link href="/pricing" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-accent-hover">
                  {tier.monthly === null ? "Contact us" : "Get started"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated with Create */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ink mb-3">
            Integrated with Create
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Create builds plain React, Node, and Next sites. Those sites land on
            Hosting, not Curate, unless you separately choose a Curate CMS
            migration.
          </p>
          <Link
            href="/products/create"
            className="inline-flex items-center text-sm font-bold text-ink hover:underline"
          >
            Learn about Create &rarr;
          </Link>
        </div>
      </section>

      {/* Migrations */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-accent p-8 md:p-10">
            <h2 className="text-2xl font-bold text-ink mb-3">
              Need a rebuild or a Curate migration?
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Managed Hosting can include a $0 Create rebuild as part of a
              12-month hosting agreement. Paid migrations are separate
              productized services that move your current site onto Curate.
            </p>
            <Link
              href="/migrate"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Learn about migrations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Launch your site today.
          </h2>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            See plans
          </Link>
        </div>
      </section>
    </div>
  );
}
