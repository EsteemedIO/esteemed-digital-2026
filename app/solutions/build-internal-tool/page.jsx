import HeroImageComposite from "@/components/HeroImageComposite";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import Link from "next/link";
import {
  ArrowRight,
  Layout,
  Database,
  ShieldCheck,
  Bot,
  Users,
  Wrench,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Build an Internal Tool | Esteemed",
  description:
    "Turn team workflows into lightweight apps with Esteemed Create. No engineering tickets, no months-long backlogs. Ship internal tools in days.",
};

const features = [
  {
    icon: Layout,
    title: "Visual App Builder",
    desc: "Esteemed Create lets business users design forms, dashboards, portals, and admin panels visually. Describe what you need in plain language and AI scaffolds the interface, data model, and logic. No frontend or backend expertise required.",
  },
  {
    icon: Database,
    title: "Connect Your Data",
    desc: "Pull from existing databases, REST APIs, spreadsheets, and third-party services. Esteemed Intelligence provides shared context and memory across tools so your internal apps stay in sync with the systems your team already uses.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    desc: "Deploy on Esteemed Cloud with role-based access control, SSO integration, SSL, and enterprise-grade infrastructure. Every internal tool inherits the same security posture as your production systems without additional configuration.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Add Esteemed Agents to automate approvals, notifications, data transformations, and reporting inside your tool. Agents handle the repetitive workflows so your team focuses on judgment calls, not data entry.",
  },
  {
    icon: Users,
    title: "Expert Extension",
    desc: "Need custom integrations, complex business logic, or a data pipeline that AI cannot scaffold? Colleagues engineers extend your tool without consuming your core engineering team's bandwidth or disrupting their sprint.",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance",
    desc: "Esteemed Support plans keep your internal tools updated, monitored, and running smoothly. Get bug fixes, performance tuning, and feature additions without pulling your own engineers off roadmap work.",
  },
];

const steps = [
  {
    number: "01",
    title: "Define the workflow",
    desc: "Describe the process your team is doing manually or in spreadsheets. What data do you track? Who needs to see it? What decisions does it drive?",
  },
  {
    number: "02",
    title: "Build with Create",
    desc: "AI scaffolds the app with forms, views, and logic based on your description. Review, adjust, and add your real data. Iterate as fast as you can type.",
  },
  {
    number: "03",
    title: "Deploy to Cloud",
    desc: "Publish your tool on Esteemed Cloud with one click. Role-based access controls ensure only the right people see the right data.",
  },
  {
    number: "04",
    title: "Extend with Colleagues",
    desc: "When you need custom integrations, complex business logic, or advanced data pipelines, vetted engineers from the Colleagues network step in on demand.",
  },
];

export default function BuildInternalToolPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#E0E5F0" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Use Case
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Build internal tools without the backlog.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              Engineering backlogs are months deep. Off-the-shelf tools never quite fit. And shadow IT
              creates security nightmares. Esteemed Create lets your team build the exact tool they need,
              deploy it securely, and extend it with real engineers when the scope grows.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "AI scaffolds apps from a plain-language description",
                "Secure deployment with role-based access on Cloud",
                "Expert engineers extend your tool without disrupting sprints",
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
              src="/images/segments/engineer-monitoring.webp"
              alt="Engineer building an internal tool with Esteemed Create"
              variant="usecase-build"
              objectPosition="center 20%"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "10X", l: "Faster than custom dev" },
              { n: "35,000+", l: "Experts available" },
              { n: "$0", l: "To start building" },
              { n: "99.9%", l: "Cloud uptime SLA" },
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
                src="/images/segments/tech-team.webp"
                alt="Team discussing internal tool requirements"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                Why internal tools get stuck in backlogs
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Every organization has workflows that live in spreadsheets, email chains, and sticky notes. HR tracks onboarding in Google Docs. Ops manages inventory in Excel. Client services juggles status updates across three tools. Everyone knows a purpose-built app would save hours per week, but engineering is focused on the product roadmap.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Off-the-shelf tools rarely fit. They require your team to adapt their workflow to the software, not the other way around. And when teams build their own solutions with no-code tools that lack governance, IT inherits a shadow IT problem with no visibility into data flows or security posture.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Esteemed Create bridges the gap. Business users describe what they need. AI builds it. Cloud deploys it securely. And when the tool needs to connect to internal systems or handle complex logic, Colleagues engineers step in without pulling your core team off their roadmap.
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
              Build without consuming engineering cycles
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              From visual building to secure deployment to expert extension, everything you need to ship internal tools fast.
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
              From workflow to working app in four steps
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              No project plans, no sprint planning, no months of waiting. Describe what your team needs, and start building today.
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

      {/* What teams are building — split */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                What teams are building
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Teams across every department use Esteemed to replace spreadsheets and manual processes with purpose-built tools that work exactly the way they need.
              </p>
              <ul className="space-y-4">
                {[
                  "Employee onboarding portals with automated checklists and reminders",
                  "Project intake forms with routing, approvals, and status dashboards",
                  "Internal knowledge bases with AI-powered search and tagging",
                  "Client-facing status dashboards pulling from multiple data sources",
                  "Inventory and asset tracking with barcode scanning and alerts",
                  "Procurement approval workflows with budget controls and audit trails",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/segments/engineer-monitoring.webp", label: "Build" },
                { src: "/images/segments/tech-team.webp", label: "Deploy" },
                { src: "/images/segments/colleagues-feature.webp", label: "Extend" },
                { src: "/images/segments/office-worker.webp", label: "Maintain" },
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
        { q: "What kinds of internal tools can I build?", a: "Anything your team currently does in spreadsheets, email, or disconnected apps. Common examples include onboarding portals, approval workflows, project trackers, client dashboards, inventory systems, and knowledge bases. If you can describe the workflow, Create can scaffold the tool." },
        { q: "Do I need to know how to code?", a: "No. Esteemed Create generates apps from plain-language descriptions. You describe what the tool should do, and AI handles the interface, data model, and logic. For complex integrations or custom business rules, Colleagues engineers are available on demand." },
        { q: "How secure are internal tools built with Esteemed?", a: "Every tool deployed on Esteemed Cloud gets role-based access control, SSL encryption, SSO integration, and enterprise-grade infrastructure by default. You control who can view, edit, and administer each tool without managing servers or security configurations." },
        { q: "Can it connect to our existing systems?", a: "Yes. Create supports connections to REST APIs, databases, spreadsheets, and common SaaS tools. Esteemed Intelligence provides shared context across integrations so your internal tools stay in sync with the systems your team already uses." },
        { q: "What about ongoing maintenance?", a: "Esteemed Support plans provide monitoring, bug fixes, performance tuning, and feature additions for your internal tools. You get dedicated support without pulling your own engineers off their product roadmap." },
        { q: "How much does it cost?", a: "Creating and prototyping tools is free. Cloud hosting starts at $9.99/month per tool. Expert development from Colleagues is available hourly or on a project basis, with rates depending on complexity and skill level." },
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
                Stop waiting on
                <br />
                the backlog.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
                Build the internal tool your team has been asking for. Start with AI, extend with experts.
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
                  href="/hire-experts"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Hire an Expert
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center p-14 border-l border-white/10">
              <ul className="space-y-5">
                {[
                  "AI scaffolds your app from a text description",
                  "Secure deployment with role-based access on Cloud",
                  "Connect to existing databases, APIs, and SaaS tools",
                  "Expert engineers available from the Colleagues network",
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
