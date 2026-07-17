import Link from "next/link";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import BuilderCards from "./BuilderCards";
import { createPricingPlans } from "@/lib/product-page-pricing";
import PromptToSiteAnimated from "@/components/builder-visuals/PromptToSiteAnimated";
import {
  MessageSquare,
  Eye,
  Rocket,
  Code,
  Cloud,
  Bot,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "AI Website Builder | Esteemed",
  description:
    "Build websites and apps by talking to AI. Chat, preview, publish — powered by Esteemed Create.",
};

const steps = [
  {
    icon: MessageSquare,
    title: "Chat",
    description:
      "Describe what you want in plain English. Our AI understands your intent and builds a complete, working site — not a wireframe.",
  },
  {
    icon: Eye,
    title: "Preview",
    description:
      "See every change in a live preview before anything goes public. Share preview links with your team for feedback.",
  },
  {
    icon: Rocket,
    title: "Publish",
    description:
      "One click to go live on your custom domain. SSL, backups, and monitoring are included automatically via Cloud.",
  },
];

const pricingPlans = createPricingPlans();

export default function WebsiteBuilderPage() {
  return (
    <div className="min-h-screen">
      {/* Hero — split layout */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split bg-zinc-100">
          <div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              Esteemed Website Builder
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              Build your website
              <br />
              by talking to AI.
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Describe what you want in plain English. <strong>Esteemed Create</strong> builds a
              complete, working site in minutes — then publish instantly to our secure, scalable cloud.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/websites/website-builder/start"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Try Create free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#plans"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
              >
                See pricing
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <PromptToSiteAnimated />
          </div>
        </div>
      </section>

      {/* Builder visuals — cascading cards */}
      <BuilderCards />

      {/* How it works */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-zinc-200 p-8 text-center"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-ink text-sm font-bold mx-auto mb-4">
                  {i + 1}
                </span>
                <step.icon
                  className="w-8 h-8 text-ink mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="plans">
        <ProductPricingBlock
          eyebrow="Create plans"
          title="Build with Esteemed Create"
          description="AI-powered building with Studio IDE. Credits power prompts, refinements, and rebuilds; paid plans include hosting at publish."
          productKey="create"
          plans={pricingPlans}
          ctaLabel="Buy Now"
          fallbackHref="/websites/website-builder/start"
          freeHref="/websites/website-builder/start"
          defaultBilling="monthly"
          maxWidth={1800}
        />
      </div>

      {/* Studio callout */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-accent p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <Code
                className="w-8 h-8 text-ink flex-shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h2 className="text-2xl font-bold text-ink mb-3">
                  Need to go deeper? Studio is built into Create.
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  Open your app in our cloud-based IDE for direct code edits —
                  no local setup, instant preview. Studio gives developers full
                  control without leaving the Esteemed platform. Edit components,
                  add custom logic, or integrate third-party libraries right in
                  your browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting integration */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <Cloud
              className="w-8 h-8 text-ink flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <h2 className="text-2xl font-bold text-ink mb-3">
                Hosting included with Cloud
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Everything you build in Create deploys to Esteemed Cloud — managed
                hosting with SSL, daily backups, monitoring, and a global edge
                network. No separate hosting provider to configure.
              </p>
              <Link
                href="/websites/hosting"
                className="inline-flex items-center text-sm font-bold text-ink hover:underline"
              >
                Learn about Cloud &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agent add-ons */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <Bot
              className="w-8 h-8 text-ink flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <h2 className="text-2xl font-bold text-ink mb-3">
                Supercharge with Agents
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Add AI agents to your Create project — Star for customer Q&A,
                Voice for missed calls, Social for automated posting, Blog for
                content, and Marketing for email campaigns. Each agent plugs
                directly into what you build.
              </p>
              <Link
                href="/products/agents"
                className="inline-flex items-center text-sm font-bold text-ink hover:underline"
              >
                Explore Agents &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Colleagues */}
      <section className="bg-zinc-50 py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
                Powered by Colleagues
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                Need a human expert?
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                AI gets you started — Colleagues takes you further. Access
                35,000+ vetted designers, developers, and strategists to refine,
                customize, or extend anything you build.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Vetted designers and developers matched to your project",
                  "On-demand or ongoing engagement — hourly, retainer, or contract",
                  "Seamlessly pick up where Create left off",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/hire-experts/website-design"
                className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:underline"
              >
                Talk to an Expert <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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

      {/* Bottom CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start building in 30 seconds.
          </h2>
          <Link
            href="/websites/website-builder/start"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Try Create &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
