import Link from "next/link";
import { ArrowRight, Wrench, LifeBuoy, Users, Lightbulb, PenTool, Megaphone, Eye } from "lucide-react";
import StickyAnchorNav from "@/components/StickyAnchorNav";

export const metadata = {
  title: "Hire an Expert | Esteemed",
  description:
    "On-demand help from builders, designers, and operators. Website design, support, content, marketing, and talent management.",
};

const services = [
  {
    name: "Website Design",
    desc: "Custom sites, rebuilds, landing pages, and launch support.",
    icon: PenTool,
    href: "/hire-experts/website-design",
  },
  {
    name: "Web Support Plans",
    desc: "Monthly support blocks for site fixes and improvements.",
    icon: LifeBuoy,
    href: "/hire-experts/web-support",
  },
  {
    name: "Talent Management",
    desc: "Recruiting, onboarding, workforce, and HR operations.",
    icon: Users,
    href: "/hire-experts/talent-management",
  },
  {
    name: "Content Strategy",
    desc: "Messaging, editorial planning, and conversion paths.",
    icon: Lightbulb,
    href: "/hire-experts/content-strategy",
  },
  {
    name: "Content Production",
    desc: "Copy, campaigns, pages, blogs, and launch content.",
    icon: PenTool,
    href: "/hire-experts/content-production",
  },
  {
    name: "Search Engine Marketing",
    desc: "Paid search setup, landing pages, and campaign support.",
    icon: Megaphone,
    href: "/hire-experts/search-engine-marketing",
  },
  {
    name: "AI Visibility",
    desc: "Make your business easier for AI search to understand.",
    icon: Eye,
    href: "/hire-experts/ai-visibility",
  },
];

export default function HireExpertsPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />

      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#1A1A1A" }}>
          <div className="md:order-2 relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[380px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-01/pexels-mikhail-nilov-6894014_0.jpg.webp?itok=z4WAyZ_q"
              alt="Expert professional working"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#FEE546" }}>
              Hire an Expert
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              On-demand help from builders, designers, and operators.
            </h1>
            <p className="text-base text-white/75 leading-relaxed mb-8 max-w-lg">
              Get expert support for websites, content, marketing, and talent — matched to your project, on your schedule.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Talk to Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-lg hover:border-accent transition-all"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-zinc-100 mb-4">
                  <item.icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
                </span>
                <h3 className="text-xl font-bold text-ink mb-2">{item.name}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                <span className="mt-auto pt-4 text-sm font-bold text-ink group-hover:underline flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">
            Not sure what you need? Let&apos;s talk.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </div>
  );
}
