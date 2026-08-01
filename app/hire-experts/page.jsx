import Link from "next/link";
import { ArrowRight, ExternalLink, Wrench, LifeBuoy, Users, Lightbulb, PenTool, Megaphone, Eye, CheckCircle2, Database, UserCheck } from "lucide-react";
import StickyAnchorNav from "@/components/StickyAnchorNav";
import TickRounded from "@/components/TickRounded";

export const metadata = {
  title: "Hire an Expert | Esteemed",
  description:
    "On-demand help from builders, designers, and operators. Sourced from the 35,000-member Esteemed Colleagues network.",
};

const services = [
  { name: "Website Design", desc: "Custom sites, rebuilds, landing pages, and launch support.", icon: PenTool, href: "/hire-experts/website-design" },
  { name: "Web Support Plans", desc: "Monthly support blocks for site fixes and improvements.", icon: LifeBuoy, href: "/hire-experts/web-support" },
  { name: "Talent Management", desc: "Recruiting, onboarding, workforce, and HR operations.", icon: Users, href: "/hire-experts/talent-management" },
  { name: "Content Strategy", desc: "Messaging, editorial planning, and conversion paths.", icon: Lightbulb, href: "/hire-experts/content-strategy" },
  { name: "Content Production", desc: "Copy, campaigns, pages, blogs, and launch content.", icon: PenTool, href: "/hire-experts/content-production" },
  { name: "Search Engine Marketing", desc: "Paid search setup, landing pages, and campaign support.", icon: Megaphone, href: "/hire-experts/search-engine-marketing" },
  { name: "AI Visibility", desc: "Make your business easier for AI search to understand.", icon: Eye, href: "/hire-experts/ai-visibility" },
];

export default function HireExpertsPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />

      {/* Hero */}
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
              Get expert support for websites, content, marketing, and talent — matched to your project from our 35,000-member Esteemed Colleagues network.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Talk to Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://colleagues.esteemed.io/post-job"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              >
                Post a Job
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Colleagues network highlight */}
      <section className="py-20 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">Powered by Colleagues</p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
                In-depth candidate profiles beyond the resume.
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                With 100+ data points like skill proficiency, location preferences, career goals, culture fit and more, our candidate matches feel just like internal referrals.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "35,000+ vetted IT professionals",
                  "Full-time recruiting infrastructure since 2015",
                  "Quality and skill alignment are our priority",
                  "Start in days, not weeks",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-700">
                    <TickRounded className="w-7 h-7" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://colleagues.esteemed.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:underline"
              >
                Visit Colleagues
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="md:order-1 relative rounded-2xl overflow-hidden aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://esteemed.io/sites/default/files/styles/global_webp/public/2024-12/woman-on-colleagues-mobile_0.png.webp?itok=Xg46bP99"
                alt="Colleagues talent platform on mobile"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "35,000+", label: "Vetted Professionals" },
            { value: "8hrs", label: "Avg. Time to Match" },
            { value: "15+", label: "Years Operating" },
            { value: "100+", label: "Data Points Per Profile" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-accent">{s.value}</div>
              <div className="text-sm font-semibold text-white/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Expert services</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Every expert is sourced from the Esteemed Colleagues network — vetted, matched, and ready to deliver.
            </p>
          </div>
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

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Not sure what you need? Let&apos;s talk.
          </h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Tell us about your project. We&apos;ll match you with the right expert from our Colleagues network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
            >
              Talk to Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://colleagues.esteemed.io/post-job"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink/10 transition-colors"
            >
              Post a Job
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
