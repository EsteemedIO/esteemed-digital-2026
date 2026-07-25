import PlatformGrid from "@/components/PlatformGrid";
import Link from "next/link";
import {
  ArrowRight,
  Paintbrush,
  Code,
  Smartphone,
  Zap,
  Search,
  ShieldCheck,
} from "lucide-react";
import TickRounded from "@/components/TickRounded";
import StickyAnchorNav from "@/components/StickyAnchorNav";
import ProjectCarousel from "./ProjectCarousel";
import ServicePlans from "./ServicePlans";

export const metadata = {
  title: "Website Design | Esteemed",
  description:
    "Custom website design from Esteemed. Beautiful, responsive designs built by expert designers.",
};

const features = [
  {
    icon: Paintbrush,
    title: "Custom Design",
    desc: "Original layouts and visuals tailored to your brand — no templates, no shortcuts.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First",
    desc: "Every site looks and works great on phones, tablets, and desktops.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    desc: "Fast load times, optimized assets, and modern architecture built in from day one.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    desc: "Clean markup, structured data, and content hierarchy designed for search visibility.",
  },
  {
    icon: Code,
    title: "Modern Tech Stack",
    desc: "Built with Next.js, React, WordPress, Drupal, or whatever fits your needs.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Accessible",
    desc: "WCAG-compliant, SSL-ready, and built with security best practices.",
  },
];

const steps = [
  {
    number: "01",
    title: "Say hello",
    desc: "Book a free consultation — phone, video, or in person. Tell us about your business, goals, and what you need.",
  },
  {
    number: "02",
    title: "We design & build",
    desc: "Our designers create mockups, you review and approve, then our developers build it — modern, mobile-ready, and on-brand.",
  },
  {
    number: "03",
    title: "You go live",
    desc: "We publish, point your domain, set up hosting, SSL, and backups. Your new site is live and looked after.",
  },
  {
    number: "04",
    title: "Grow with us",
    desc: "Our WebOps team keeps your site current, secure, and climbing search — with support whenever you need it.",
  },
];

export default function WebsiteDesignPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />

      {/* Hero — split layout */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              Website Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              A website that
              <br />
              <span className="text-zinc-400">works as hard as you do.</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Custom-designed, expertly built websites — from marketing sites
              and landing pages to ecommerce stores and web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Get a free consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-01/team-women.jpg.webp?itok=UlmXLT1n"
                alt="Esteemed design experts collaborating"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "35,000+", l: "Expert network" },
              { n: "500+", l: "Websites designed & built" },
              { n: "2 wks", l: "Typical project turnaround" },
              { n: "4.9/5", l: "Client satisfaction" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="font-extrabold text-2xl md:text-3xl tracking-tight text-accent">
                  {s.n}
                </div>
                <div className="text-sm text-white/70 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              What you get
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Every website project includes strategy, design, development, and
              launch support — managed end to end.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-8 border border-zinc-200"
                >
                  <Icon
                    className="w-8 h-8 text-ink mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Build — carousel with bg-image cards */}
      <ProjectCarousel />

      <PlatformGrid />

      {/* How It Works — stepped with rule lines */}
      <section id="how-it-works" className="bg-zinc-50 py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              From hello to live in four steps
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              A straightforward process — no surprises, no runaround.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="h-0.5 bg-ink mb-4" />
                <div className="text-3xl font-extrabold tracking-tight text-ink mb-2">
                  {step.number}
                </div>
                <h3 className="text-lg font-extrabold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Plans + Contact Modal */}
      <ServicePlans />

      {/* Why Esteemed — split layout */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                Why teams choose Esteemed
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                We're not a template shop or a freelancer marketplace. Every
                project is managed by Esteemed with vetted designers and
                developers from our 35,000+ expert network.
              </p>
              <ul className="space-y-4">
                {[
                  "Vetted designers and developers matched to your project",
                  "Dedicated account management from start to finish",
                  "AI-enhanced workflows for faster delivery",
                  "Flexible engagement — fixed price, hourly, or retainer",
                  "Post-launch support and hosting available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TickRounded className="w-7 h-7" />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Trust cards — 2x2 grid with bg images */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: "https://images.pexels.com/photos/7400281/pexels-photo-7400281.jpeg?auto=compress&cs=tinysrgb&w=600",
                  label: "Strategy & Planning",
                },
                {
                  src: "https://images.pexels.com/photos/29884920/pexels-photo-29884920.jpeg?auto=compress&cs=tinysrgb&w=600",
                  label: "Design & Prototype",
                },
                {
                  src: "https://images.pexels.com/photos/9303590/pexels-photo-9303590.jpeg?auto=compress&cs=tinysrgb&w=600",
                  label: "Build & Launch",
                },
                {
                  src: "https://images.pexels.com/photos/613868/pexels-photo-613868.jpeg?auto=compress&cs=tinysrgb&w=600",
                  label: "Support & Growth",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="relative rounded-xl overflow-hidden"
                  style={{ aspectRatio: "1" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.src}
                    alt={card.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-sm font-bold text-white">
                      {card.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offer band — dark CTA */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto bg-ink rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Get started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to build
                <br />
                your website?
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
                Tell us about your project and we'll match you with the right
                designer — usually within 48 hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  Get a free consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  View pricing
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center p-14 border-l border-white/10">
              <ul className="space-y-5">
                {[
                  "Website Design Services from $499 for 4 pages",
                  "Free rebuild with a 12-month hosting plan",
                  "Hosting from $9.99/mo with SSL & backups",
                  "Additional pages at $85/hr or $75/hr with commitment",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-ink flex items-center justify-center mt-0.5">
                      <TickRounded className="w-7 h-7" />
                    </span>
                    <span className="text-white font-medium text-sm leading-snug">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-20" />
    </div>
  );
}
