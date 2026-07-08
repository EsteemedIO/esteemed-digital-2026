import Link from "next/link";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { Cloud, Shield, HardDrive, Activity, ArrowRight, Check } from "lucide-react";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";

export const metadata = {
  title: "Esteemed Cloud - Sites",
  description:
    "Website hosting on Esteemed Cloud. Self-serve and managed plans with SSL, backups, monitoring, and support.",
};

const cloudPlans = cloudPricingPlans();
const managedPlans = managedHostingPricingPlans();

const limitedTimeOffer = {
  label: "For a Limited Time",
  title: "Claim your free website rebuild",
  body:
    "Start a 12-month Managed Hosting plan and our team rebuilds your existing website for free. No rebuild fee. No catch. Just a better site with hosting, SSL, backups, and a team behind it.",
  bullets: [
    "$0 rebuild with a 12-month Managed Hosting plan",
    "Website Design Services from $499 for 4 pages",
    "Hosting from $9.99/mo with SSL and backups included",
  ],
  fine:
    "Free rebuild applies to eligible standard sites with an active 12-month Managed Hosting plan. Additional pages and custom work are scoped before work begins.",
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

export default function CloudPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ProductIcon product="cloud" className="mx-auto mb-6 h-14 w-14" />
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Cloud - Sites
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Esteemed Cloud - Sites
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Hosting for sites that are not running on a managed CMS: bring-your-own,
            Create-built, React, Node, and Next sites on Esteemed Cloud.
          </p>
          <div className="mt-10">
            <Link
              href="#plans"
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

      <div id="plans">
        <section id="free-rebuild" className="scroll-mt-24 border-t border-zinc-100 bg-accent/25 py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 rounded-2xl border border-accent bg-white p-8 shadow-sm md:grid-cols-[1.05fr_.95fr] md:p-10">
              <div>
                <span className="inline-flex rounded-md bg-accent px-2.5 py-1 text-xs font-black text-ink">
                  {limitedTimeOffer.label}
                </span>
                <h2 className="mt-4 text-3xl font-black text-ink md:text-4xl">
                  {limitedTimeOffer.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">
                  {limitedTimeOffer.body}
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="space-y-3">
                  {limitedTimeOffer.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm font-semibold leading-6 text-zinc-800">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-accent text-xs font-black text-ink">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs font-medium leading-5 text-zinc-500">
                  {limitedTimeOffer.fine}
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProductPricingBlock
          eyebrow="Cloud plans"
          title="Self-serve Cloud Sites"
          description="GoDaddy-aligned website hosting with SSL included and no forced CMS migration. Best for bring-your-own, Create-built, React, Node, and Next sites."
          productKey="cloud"
          plans={cloudPlans}
          ctaLabel="Buy Now"
        />

        <ProductPricingBlock
          eyebrow="Managed Hosting"
          title="Done-for-you Managed Sites"
          description="Managed Hosting includes support hours and a $0 Create rebuild with a 12-month term: 5 pages on Essential, 12 pages on Growth, and a full standard site on Business."
          productKey="cloud"
          plans={managedPlans}
          ctaLabel="Buy Now"
        />
      </div>

      {/* Integrated with Create */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ink mb-3">
            Integrated with Create
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Create builds plain React, Node, and Next sites. Those sites land on
            Hosting, not a managed CMS, unless you separately choose a CMS
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
              Need a rebuild or a CMS migration?
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Managed Hosting can include a $0 Create rebuild as part of a
              12-month hosting agreement. Essential includes 5 pages, Growth
              includes 12 pages, and Business includes a full standard site with
              a soft cap around 30 pages. Extra Essential/Growth pages are billed
              once at $100/page. Paid migrations are separate productized
              services that move your current WordPress, Drupal, or other CMS
              site onto our AI-first CMS.
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
            href="#plans"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            See plans
          </Link>
        </div>
      </section>
    </div>
  );
}
