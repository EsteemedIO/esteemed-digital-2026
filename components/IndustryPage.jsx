import Image from "next/image";
import Link from "next/link";
import {
  UserCheck,
  Settings,
  BrainCircuit,
  ClipboardCheck,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  BarChart3,
  Target,
  CheckCircle2,
} from "lucide-react";

const insightsBullets = [
  {
    title: "Predictive Hiring",
    description:
      "Leverage AI to identify the best candidates before they even apply.",
  },
  {
    title: "Employee Retention Analytics",
    description:
      "Use data-driven insights to reduce turnover and boost engagement.",
  },
  {
    title: "Personalized Career Growth",
    description:
      "Empower employees with AI-curated development paths tailored to their goals.",
  },
];

const operationsBullets = [
  {
    title: "Centralized Recruiting",
    description:
      "Streamline your hiring process with a single platform for sourcing, screening, and onboarding.",
  },
  {
    title: "Compliance & Risk Management",
    description:
      "Stay ahead of labor laws and regulations with automated compliance monitoring.",
  },
  {
    title: "Employer of Record (EOR)",
    description:
      "Hire globally without establishing local entities — we handle payroll, taxes, and benefits.",
  },
  {
    title: "Reduce Turnover",
    description:
      "Implement proactive retention strategies that keep your best people engaged and growing.",
  },
];

const advantageCards = [
  {
    icon: UserCheck,
    title: "Single Point of Contact",
    description:
      "One dedicated account manager who understands your business and workforce needs.",
  },
  {
    icon: Settings,
    title: "Flexible Hiring",
    description:
      "Contract, contract-to-hire, and direct placement options to match your timeline and budget.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Recruitment",
    description:
      "Machine learning algorithms match candidates to roles faster and more accurately.",
  },
  {
    icon: ClipboardCheck,
    title: "Onboarding & Payroll",
    description:
      "Seamless onboarding workflows and payroll processing so your team hits the ground running.",
  },
  {
    icon: ShieldCheck,
    title: "EOR & Compliance",
    description:
      "Full employer-of-record services with built-in compliance for domestic and international hires.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Workforce Planning",
    description:
      "Scale your team up or down with agility — no long-term commitments required.",
  },
];

export default function IndustryPage({
  title,
  subtitle,
  heroDescription,
  heroImage,
  ctaText = "Get Started",
  ctaHref = "/signup",
  verticals = [],
  services = [],
  closingHeading = "Ready to Transform Your Workforce?",
  closingText = "Partner with Esteemed to build a smarter, more agile workforce. Let's talk about what's possible.",
}) {
  return (
    <main className="bg-paper text-ink">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            {subtitle && (
              <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
                {subtitle}
              </p>
            )}
            <h1 className="heading-3">{title}</h1>
            <p className="subtitle max-w-xl text-ink/70">{heroDescription}</p>
            <Link
              href={ctaHref}
              className="inline-block rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
            >
              {ctaText}
            </Link>
          </div>
          <div className="relative flex-1">
            <Image
              src={heroImage}
              alt={title}
              width={640}
              height={480}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── AI-Powered Workforce Insights ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="relative flex-1">
            <Image
              src="/images/industries/insights.webp"
              alt="AI-Powered Workforce Insights"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">AI-Powered Workforce Insights</h2>
            <ul className="space-y-6">
              {insightsBullets.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Sparkles className="h-3.5 w-3.5 text-ink" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{b.title}</h3>
                    <p className="text-ink/70">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Seamless Operations ── */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">
              Seamless Operations &amp; Workforce Efficiency
            </h2>
            <ul className="space-y-6">
              {operationsBullets.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                    <CheckCircle2 className="h-3.5 w-3.5 text-ink" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{b.title}</h3>
                    <p className="text-ink/70">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/industries/talent-jobs.webp"
              alt="Talent and jobs platform"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Industry Verticals ── */}
      {verticals.length > 0 && (
        <section className="bg-neutral-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="heading-2 mb-14">Industry Verticals</h2>
            <div
              className={`grid gap-10 ${
                verticals.length === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2"
              }`}
            >
              {verticals.map((v) => (
                <div
                  key={v.name}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-paper"
                >
                  <div className="relative h-52 w-full">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-bold">{v.name}</h3>
                    <ul className="space-y-3">
                      {v.items.map((item) => (
                        <li key={item.title} className="flex items-start gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                            <Target className="h-3 w-3 text-ink" />
                          </span>
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-ink/60">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── The Esteemed Advantage ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="heading-2 mb-14">The Esteemed Advantage</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advantageCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition hover:shadow-lg"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                    <Icon className="h-5 w-5 text-ink" />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                  <p className="text-ink/70">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-paper md:text-4xl">
            {closingHeading}
          </h2>
          <p className="mb-8 text-lg text-paper/70">{closingText}</p>
          <Link
            href={ctaHref}
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            {ctaText}
          </Link>
        </div>
      </section>
    </main>
  );
}
