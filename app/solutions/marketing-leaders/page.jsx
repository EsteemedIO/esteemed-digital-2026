import HeroImageComposite from "@/components/HeroImageComposite";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  PenTool,
  Bot,
  BarChart3,
  Eye,
  Megaphone,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Solutions for Marketing Leaders | Esteemed",
  description:
    "Launch sites faster, hire creative talent on demand, and automate content with AI agents trained on your brand voice.",
};

const features = [
  {
    icon: Zap,
    title: "AI Page Builder",
    desc: "Esteemed Create lets your marketing team spin up landing pages, microsites, and campaign pages with AI. Describe what you need in plain language and get a responsive, on-brand page in minutes. No engineering tickets, no design queue, no agency timelines.",
  },
  {
    icon: PenTool,
    title: "On-Demand Creative Talent",
    desc: "Need a designer for a product launch? A copywriter for a rebrand? A video editor for a campaign? Colleagues connects you with vetted creative professionals who can hit the ground running without the overhead of agency retainers or long procurement cycles.",
  },
  {
    icon: Bot,
    title: "AI Content Agents",
    desc: "Automate blog publishing, social media scheduling, email nurture sequences, and content refreshes with AI agents trained on your brand voice. Agents learn your style, tone, and messaging guidelines, and improve with feedback over time.",
  },
  {
    icon: BarChart3,
    title: "Campaign Analytics",
    desc: "Track page performance, conversion rates, traffic sources, and engagement metrics across all your marketing properties with Intelligence dashboards. Know what is working, what is not, and where to invest your next dollar.",
  },
  {
    icon: Eye,
    title: "AI Visibility & SEO",
    desc: "Traditional SEO is table stakes. AI Visibility ensures your brand and content are surfaced by AI-powered search engines, chatbots, and recommendation systems. Our service optimizes structured data, schema markup, and content signals for the next generation of discovery.",
  },
  {
    icon: Megaphone,
    title: "Content at Scale",
    desc: "Combine AI content generation with expert editorial oversight for blogs, emails, social posts, case studies, and thought leadership. Esteemed handles the production pipeline so your team focuses on strategy and creative direction.",
  },
];

const steps = [
  {
    number: "01",
    title: "Describe the campaign",
    desc: "Share your goals, audience, brand guidelines, and timeline. AI generates a starting point for pages, copy, and creative direction.",
  },
  {
    number: "02",
    title: "Build and launch pages",
    desc: "Create builds responsive landing pages and microsites in minutes. Review, refine, and publish to Cloud with one click.",
  },
  {
    number: "03",
    title: "Bring in specialists",
    desc: "When you need custom design, photography, video, or advanced copy, Colleagues matches you with vetted creative talent on demand.",
  },
  {
    number: "04",
    title: "Automate and scale",
    desc: "Set up AI Agents for content publishing, social media, and engagement. Track everything with Intelligence dashboards.",
  },
];

export default function MarketingLeadersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#E8EDE4" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              By Role
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Ship campaigns 3x faster without adding headcount.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              Marketing leaders are under pressure to ship more, faster, across more channels.
              Engineering is a bottleneck. Agencies are expensive and slow. Esteemed gives your team
              AI tools to build pages instantly, creative talent on demand, and AI agents that keep
              content flowing on autopilot.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "Launch landing pages without engineering tickets",
                "Vetted designers, copywriters, and strategists on demand",
                "AI agents that publish content in your brand voice",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                  <CheckCircle className="w-4 h-4 text-ink flex-shrink-0" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:order-1">
            <HeroImageComposite
              src="/images/segments/woman-working-coffee.webp"
              alt="Marketing leader planning campaigns with Esteemed tools"
              variant="role-marketing"
              objectPosition="center top"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "3X", l: "Faster page launches" },
              { n: "35,000+", l: "Creative experts available" },
              { n: "5 min", l: "AI page generation" },
              { n: "24/7", l: "AI agent content ops" },
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

      {/* Educational block */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                Why marketing teams hit a wall
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Every marketing leader knows the frustration. You have a campaign ready to go, but the landing page is stuck in engineering's backlog. The agency needs two weeks for scoping before they can start. And your content calendar has more gaps than posts because no one has bandwidth to write, design, and publish at the pace the business demands.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                The pressure to demonstrate ROI makes it worse. You cannot justify the cost of a full-time designer for seasonal campaigns. You cannot wait four weeks for an agency to deliver a landing page that should have launched yesterday. And you cannot keep recycling the same page template because it is the only thing your team can update without developer help.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Esteemed eliminates these bottlenecks. AI builds pages in minutes, not weeks. Vetted creative talent is available on demand without retainers. And AI agents handle the repetitive content work so your team focuses on strategy, creative direction, and the campaigns that move the needle.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/segments/colleagues-feature.webp"
                alt="Marketing team collaborating on campaign strategy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Tools and talent for modern marketing
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              AI-powered page building, on-demand creative talent, automated content ops, and analytics that prove ROI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-xl p-8 border border-zinc-200">
                  <Icon className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-50 py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              From brief to live campaign in four steps
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              No scoping calls, no SOWs, no waiting. Describe what your campaign needs, and start building today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="h-0.5 bg-ink mb-4" />
                <div className="text-3xl font-extrabold tracking-tight text-ink mb-2">{step.number}</div>
                <h3 className="text-lg font-extrabold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes — split */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/segments/woman-working-coffee.webp", label: "Build Pages" },
                { src: "/images/segments/colleagues-feature.webp", label: "Hire Creatives" },
                { src: "/images/segments/office-worker.webp", label: "Automate Content" },
                { src: "/images/segments/talent-jobs.webp", label: "Measure ROI" },
              ].map((card) => (
                <div key={card.label} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "1" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.src} alt={card.label} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-sm font-bold text-white">{card.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                What marketing teams achieve
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Marketing leaders use Esteemed to eliminate the bottlenecks that keep campaigns from launching on time and at scale.
              </p>
              <ul className="space-y-4">
                {[
                  "Ship campaign pages in days instead of weeks",
                  "Eliminate dependency on engineering for marketing site changes",
                  "Maintain brand consistency across every digital touchpoint",
                  "Automate repetitive content, social media, and email tasks",
                  "Access specialized creative talent without agency retainers",
                  "Justify ROI with built-in campaign performance tracking",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HireExpertFAQ items={[
        { q: "How is Esteemed different from an agency?", a: "Agencies require retainers, long scoping processes, and weeks of lead time. Esteemed gives you AI tools to build pages yourself in minutes, plus on-demand access to vetted creative talent for the work that needs a human touch. No retainers, no minimums, no long timelines." },
        { q: "Can my marketing team actually use Create?", a: "Yes. Create is designed for non-technical users. You describe what you need in plain language and AI generates a responsive, branded page. Your team can edit copy, swap images, and publish without developer help." },
        { q: "What about brand guidelines?", a: "Create respects your brand palette, typography, and tone of voice. Upload a style guide or point to your existing site, and AI matches it automatically. Colleagues creatives are briefed on your brand standards before starting any project." },
        { q: "How much does it cost?", a: "Create is free to start and Cloud hosting starts at $9.99/month. Creative talent from Colleagues is available hourly or on a project basis. There are no retainers or minimum commitments. You pay for what you use." },
        { q: "How fast can we launch a campaign page?", a: "AI generates a working page in under 5 minutes. After review and refinement, you can publish to Cloud with one click. Most teams go from brief to live page in under a day." },
        { q: "Can AI agents really write in our brand voice?", a: "Yes. Agents are trained on your existing content, style guides, and messaging frameworks. They improve with feedback over time. For high-stakes content, you can pair agents with Colleagues editors for human review before publishing." },
      ]} />

      {/* Bottom CTA */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto bg-ink rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Get started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Accelerate your
                <br />
                marketing engine.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
                Build pages with AI, hire creatives on demand, and automate content ops. Your marketing team deserves better tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/websites/website-builder/start"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/hire-experts/content-strategy"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Hire an Expert
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center p-14 border-l border-white/10">
              <ul className="space-y-5">
                {[
                  "AI page generation in under 5 minutes",
                  "Vetted designers and copywriters from Colleagues",
                  "AI agents for blog, social, and email automation",
                  "Campaign analytics with Intelligence dashboards",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-ink flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                    <span className="text-white font-medium text-sm leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
