import Link from "next/link";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { Cloud, Shield, HardDrive, Activity, ArrowRight } from "lucide-react";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";

export const metadata = {
  title: "Esteemed Cloud - Sites",
  description:
    "Website hosting on Esteemed Cloud. Self-serve and managed plans with SSL, backups, monitoring, and support.",
};

const cloudPlans = cloudPricingPlans();
const managedPlans = managedHostingPricingPlans();

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
            Hosting for sites that are not running on Curate: bring-your-own,
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
              12-month hosting agreement. Essential includes 5 pages, Growth
              includes 12 pages, and Business includes a full standard site with
              a soft cap around 30 pages. Extra Essential/Growth pages are billed
              once at $100/page. Paid migrations are separate productized
              services that move your current site onto Curate.
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
