import Link from "next/link";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import ServicesCarousel from "@/components/ServicesCarousel/ServicesCarousel";
import PlatformGrid from "@/components/PlatformGrid";
import VideoHero from "@/components/VideoHero";
import PromptToSiteAnimated from "@/components/builder-visuals/PromptToSiteAnimated";
import SectionNav from "@/components/SectionNav";
import { Cloud, Shield, HardDrive, Activity, ArrowRight, Check } from "lucide-react";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";

export const metadata = {
  title: "Esteemed Cloud - Sites",
  description:
    "Website hosting on Esteemed Cloud. Self-serve and managed plans with SSL, backups, monitoring, and support.",
};

const capabilities = [
  { title: "Online Store", headline: "Sell online", body: "Sell products with a fast, secure checkout, powered by our Commerce stack.", img: "cap-store", src: "https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=1400" },
  { title: "Scheduling", headline: "Get booked", body: "Seamless appointment booking and calendar management, right from your site.", img: "cap-book", src: "https://images.pexels.com/photos/35134952/pexels-photo-35134952.jpeg?auto=compress&cs=tinysrgb&w=1400" },
  { title: "Blog", headline: "Publish with ease", body: "Share news and stories yourself — no developer required.", img: "cap-blog", src: "https://images.pexels.com/photos/29884920/pexels-photo-29884920.jpeg?auto=compress&cs=tinysrgb&w=1400" },
  { title: "Forms", headline: "Capture every lead", body: "Turn visitors into customers with an AI-assisted contact form, built right in.", img: "cap-forms", src: "https://images.pexels.com/photos/9303590/pexels-photo-9303590.jpeg?auto=compress&cs=tinysrgb&w=1400" },
  { title: "Donations", headline: "Raise more", body: "Accept one-time and recurring gifts — with goals, receipts and donor updates built in.", img: "cap-donate", src: "https://images.pexels.com/photos/34164459/pexels-photo-34164459.jpeg?auto=compress&cs=tinysrgb&w=1400" },
  { title: "Memberships", headline: "Grow your community", body: "Offer member-only content, classes and perks with recurring subscriptions.", img: "cap-member", src: "https://images.pexels.com/photos/613868/pexels-photo-613868.jpeg?auto=compress&cs=tinysrgb&w=1400" },
  { title: "SEO", headline: "Get found online", body: "Rank higher in search and show up in AI answers — wherever your customers are.", img: "cap-seo", src: "https://images.pexels.com/photos/7400281/pexels-photo-7400281.jpeg?auto=compress&cs=tinysrgb&w=1400" },
  { title: "Galleries", headline: "Show your best work", body: "Present your work, menu or portfolio with rich, fast media layouts.", img: "cap-gallery", src: "https://images.pexels.com/photos/12735489/pexels-photo-12735489.jpeg?auto=compress&cs=tinysrgb&w=1400" },
];

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
      <SectionNav
        sectionLabel="Hosting"
        sectionHref="/websites/hosting"
        links={[
          { name: "WordPress Hosting", href: "/websites/hosting/wordpress-hosting" },
          { name: "Drupal Hosting", href: "/websites/hosting/drupal-hosting" },
          { name: "Next.js Hosting", href: "/websites/hosting/nextjs-hosting" },
          { name: "Curate CMS", href: "/websites/hosting/curate-cms" },
          { name: "Premium Support", href: "/websites/hosting/premium-support" },
        ]}
        ctaLabel="See Plans"
        ctaHref="#plans"
      />

      {/* Hero — video background with progress nav */}
      <VideoHero>
        <p className="text-sm font-medium text-white/70 mb-4">
          Esteemed Cloud / Sites
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          A website is<br className="hidden md:inline" /> your digital front door.
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Let us help you create or redesign your site free.
        </p>
        <div className="mt-10">
          <Link
            href="#managed-hosting"
            className="px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get Started
          </Link>
        </div>
      </VideoHero>

      {/* Services carousel */}
      <ServicesCarousel
        capabilities={capabilities}
        title="Everything your site needs to grow."
        subtitle="Built-in tools that come with your Cloud site."
      />

      <PlatformGrid />

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
          defaultBilling="monthly"
        />

        <ProductPricingBlock
          id="managed-hosting"
          eyebrow="Managed Hosting"
          title="Done-for-you Managed Sites"
          description="Managed Hosting includes support hours and a $0 Create rebuild with a 12-month term: 5 pages on Essential, 12 pages on Growth, and a full standard site on Business."
          productKey="cloud"
          defaultBilling="monthly"
          plans={managedPlans}
          ctaLabel="Buy Now"
        />
      </div>

      {/* Integrated with Create */}
      <section className="px-6 py-20">
        <div className="mx-auto bg-zinc-100 rounded-3xl px-8 md:px-14 py-14 md:py-20" style={{ maxWidth: 1800 }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Esteemed Website Builder
              </p>
              <ProductIcon product="create" className="mb-6 h-12 w-12" />
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Integrated with Create
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                <strong>Esteemed Create</strong> builds your website in minutes from a prompt using React and Node JS. Then you can deploy to our scalable cloud. You can also choose to use WordPress, Drupal, or Esteemed Curate CMS.
              </p>
              <Link
                href="/websites/website-builder/start"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Try Create free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[350px] md:h-[420px]">
              <PromptToSiteAnimated />
            </div>
          </div>
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
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">
            Launch your site today.
          </h2>
          <Link
            href="#plans"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            See plans
          </Link>
        </div>
      </section>
    </div>
  );
}
