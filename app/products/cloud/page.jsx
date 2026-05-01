import Link from "next/link";
import { Cloud, Shield, HardDrive, Activity, Check, ArrowRight } from "lucide-react";
import { cloudTiers } from "@/lib/data";

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
            Hosting that scales with you. Built for what you build.
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
            Pick your plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudTiers.map((tier) => (
              <div
                key={tier.key}
                className="rounded-2xl border border-zinc-200 p-6"
              >
                <h3 className="text-2xl font-bold text-ink mb-1">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  {tier.annual === null ? (
                    <span className="text-2xl font-bold text-ink">Custom</span>
                  ) : (
                    <>
                      {tier.fromPrice && <span className="text-sm text-zinc-500">From </span>}
                      <span className="text-3xl font-bold text-ink">
                        ${tier.annual}
                      </span>
                      <span className="text-sm text-zinc-500 font-normal">
                        /mo
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-zinc-600 mb-6">{tier.description}</p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  {tier.annual === null ? "Contact us" : "Get started"}
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
            Everything you build in Esteemed Create deploys directly to Cloud.
            No configuration, no separate hosting setup. Build, preview, and
            publish — all in one workflow.
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
              Already have a site? We migrate it free.
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              We handle the full migration — content, media, redirects, forms —
              at no extra cost with a hosting agreement. WordPress, Drupal, or
              custom CMS. Your SEO stays intact.
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
