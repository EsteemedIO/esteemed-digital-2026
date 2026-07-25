import HeroImageComposite from "@/components/HeroImageComposite";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import TickRounded from "@/components/TickRounded";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Headphones,
  Rocket,
} from "lucide-react";

export const metadata = {
  title: "Solutions for Founders | Esteemed",
  description:
    "Launch MVPs, build your tech team, and scale your stack without the overhead of a full engineering org. Esteemed for founders at every stage.",
};

const features = [
  {
    icon: Zap,
    title: "MVP in Minutes",
    desc: "Esteemed Create builds your first product, landing page, or web app with AI so you can validate ideas before writing a line of code. Describe what you are building and get a working prototype you can show investors, test with users, and iterate on immediately.",
  },
  {
    icon: Globe,
    title: "Instant Deployment",
    desc: "Publish to Esteemed Cloud with one click. SSL, CDN, managed backups, and monitoring are included from day one. No need to set up AWS, configure servers, or hire a DevOps engineer before you even have product-market fit.",
  },
  {
    icon: Users,
    title: "Hire Your First Team",
    desc: "Colleagues gives you access to 35,000+ vetted professionals for your first engineering, design, or product hire. Contract, contract-to-hire, or direct placement. Scale your team as you close funding rounds without overhiring.",
  },
  {
    icon: TrendingUp,
    title: "Scale-Up Support",
    desc: "As you grow from prototype to production, Esteemed scales with you. Ramp hiring through Colleagues, expand infrastructure on Cloud, and add AI-powered tools without switching platforms or rebuilding from scratch.",
  },
  {
    icon: Headphones,
    title: "Fractional Leadership",
    desc: "Access fractional CTOs, VPs of Engineering, architects, and technical advisors without the $300K+ cost of a full-time executive hire. Get strategic guidance on architecture, hiring, and technical due diligence at a fraction of the cost.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Services",
    desc: "From website design to content strategy to SEM to recruiting, Esteemed experts cover the services founders typically cobble together from five different vendors. One relationship, one platform, all the expertise you need.",
  },
];

const steps = [
  {
    number: "01",
    title: "Validate your idea",
    desc: "Use Create to build a working prototype or landing page in minutes. Test it with real users and potential investors before investing in custom development.",
  },
  {
    number: "02",
    title: "Launch your product",
    desc: "Deploy to Cloud with one click. Get SSL, CDN, and managed infrastructure without hiring DevOps. Focus on customers, not servers.",
  },
  {
    number: "03",
    title: "Make your first hires",
    desc: "When you need dedicated talent, Colleagues matches you with vetted engineers, designers, and product managers. Start with contract and convert to full-time when you are ready.",
  },
  {
    number: "04",
    title: "Scale with confidence",
    desc: "Add fractional leadership for strategic guidance. Ramp your team as you close funding rounds. Esteemed grows with you from pre-seed through Series A and beyond.",
  },
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#EDE8E0" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              By Role
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              From prototype to production without the overhead.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              Founders waste months and thousands of dollars building MVPs the hard way. Esteemed
              Create lets you go from idea to working product in minutes with AI. When you are ready
              to hire, the Colleagues network gives you access to 35,000+ vetted professionals without
              the risk and overhead of traditional recruiting.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "Build and deploy an MVP without writing code",
                "Hire vetted engineers, designers, and fractional CTOs",
                "Scale infrastructure and team as you raise funding",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                  <TickRounded className="w-7 h-7" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/websites/website-builder/start"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:order-1">
            <HeroImageComposite
              src="/images/segments/office-worker.webp"
              alt="Founder building their startup with Esteemed"
              variant="role-founder"
              objectPosition="center 15%"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "48 hrs", l: "MVP turnaround" },
              { n: "$0", l: "To start building" },
              { n: "35,000+", l: "Vetted professionals" },
              { n: "60%", l: "Less than FTE CTO cost" },
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
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/segments/colleagues-exp.webp"
                alt="Startup team collaborating"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                The founder's dilemma at every stage
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                <strong>Pre-seed:</strong> You need to validate fast, but you cannot afford to hire developers yet. Every dollar spent on custom development is a dollar not spent on learning what customers actually want. You need a way to build and test without burning through your runway.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                <strong>Seed stage:</strong> You have early traction and need your first technical hires. But competing for talent against well-funded companies is brutal. You need access to vetted professionals who can start quickly, without the months-long recruiting process that burns critical time.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                <strong>Series A and beyond:</strong> You need to scale without breaking. That means infrastructure that grows with you, a team that can ramp up fast, and strategic technical guidance that does not require a $300K executive hire. Esteemed supports founders at every stage with AI tools, expert talent, and managed infrastructure that scales from prototype to production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              From idea to scale
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              AI-powered building, instant deployment, on-demand talent, and fractional leadership. Everything a founder needs at every stage.
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
              Your startup journey with Esteemed
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Start free, scale gradually, and add team and infrastructure as your business grows.
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

      {/* Milestones — split */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                How we Help Founders
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Whether you are validating an idea or scaling a funded startup, Esteemed supports the milestones that matter most.
              </p>
              <ul className="space-y-4">
                {[
                  "Validate your idea with a working prototype in days, not months",
                  "Launch a professional website and product without hiring a full-time developer",
                  "Hire your first engineer from a pre-vetted network of 35,000+ professionals",
                  "Get fractional CTO guidance on architecture, hiring, and technical due diligence",
                  "Scale your team from seed stage through Series A and beyond",
                  "Access ongoing design, content, marketing, and development support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TickRounded className="w-7 h-7" />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/segments/office-worker.webp", label: "Prototype" },
                { src: "/images/segments/engineer-monitoring.webp", label: "Build" },
                { src: "/images/segments/colleagues-exp.webp", label: "Hire" },
                { src: "/images/segments/tech-team.webp", label: "Scale" },
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HireExpertFAQ items={[
        { q: "Can I really build without coding?", a: "Yes. Esteemed Create generates working web apps, landing pages, and prototypes from plain-language descriptions. You describe what you are building, AI handles the interface, layout, and logic. For complex custom features, Colleagues developers are available to extend what AI builds." },
        { q: "How do I hire my first developer?", a: "Tell us about the role, skills needed, and your timeline. Esteemed Intelligence matches candidates from our 35,000+ network. You get a curated shortlist within 48 hours. Start with contract to reduce risk, and convert to full-time when you are ready." },
        { q: "What is a fractional CTO?", a: "A fractional CTO is an experienced technology executive who works with your company part-time. They provide strategic guidance on architecture, hiring, vendor selection, and technical due diligence without the $300K+ cost of a full-time CTO. It is ideal for pre-seed through Series A founders." },
        { q: "How much does it cost at early stage?", a: "Create is free to start. Cloud hosting starts at $9.99/month. Fractional leadership and contract talent are available hourly. There are no retainers or minimums. You pay for what you use and scale spending as your company grows." },
        { q: "How fast can I get an MVP built?", a: "Simple prototypes can be generated by AI in minutes. More complex MVPs with custom features typically take 1-2 weeks with a Colleagues developer. Compare that to 2-3 months with traditional development approaches." },
        { q: "Can Esteemed scale with me as I grow?", a: "Yes. That is the point. Start with AI-generated prototypes, add Cloud hosting, hire your first engineer, bring in fractional leadership, and ramp your team as you raise rounds. Esteemed is designed to grow with founders from idea through scale." },
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
                Build your vision.
                <br />
                Start today.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
                Go from idea to working product in minutes. Hire your first team when you are ready. Scale with confidence.
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
                  href="/products/colleagues"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Explore Colleagues
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center p-14 border-l border-white/10">
              <ul className="space-y-5">
                {[
                  "AI-powered MVP generation in minutes",
                  "One-click deployment to Esteemed Cloud",
                  "35,000+ vetted professionals for your first hires",
                  "Fractional CTO guidance at a fraction of the cost",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-ink flex items-center justify-center mt-0.5">
                      <TickRounded className="w-7 h-7" />
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
