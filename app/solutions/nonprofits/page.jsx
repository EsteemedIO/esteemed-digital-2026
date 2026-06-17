import Image from "next/image";
import Link from "next/link";
import {
  DollarSign,
  ShieldCheck,
  UserCheck,
  Monitor,
  Check,
  Heart,
  Globe,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Solutions for Nonprofits | Esteemed",
  description:
    "Nonprofits face unique challenges — tight budgets, complex compliance, and scaling programs. Esteemed delivers HR, IT, and digital services to support your mission without compromising your goals.",
};

const features = [
  {
    icon: DollarSign,
    title: "Cost-Efficient Technology",
    description:
      "AI-powered tools and managed services designed for nonprofit budgets. Build websites, donor portals, and event pages without expensive development costs.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Governance",
    description:
      "Stay compliant with nonprofit regulations, grant requirements, and data privacy standards. Automated monitoring reduces administrative burden.",
  },
  {
    icon: UserCheck,
    title: "Mission-Critical Talent",
    description:
      "Source specialized talent for program management, grant writing, fundraising, and technical roles from a vetted network of professionals.",
  },
  {
    icon: Monitor,
    title: "Managed IT Services",
    description:
      "Reliable IT infrastructure, security, and support without the cost of a full internal IT team. We keep your systems running so you can focus on impact.",
  },
];

const missionBullets = [
  {
    title: "Nonprofit-Friendly Pricing",
    description:
      "Special pricing for qualifying nonprofits across all Esteemed products and services.",
  },
  {
    title: "Donor & Grant Management",
    description:
      "Build custom donor portals, grant tracking systems, and reporting dashboards.",
  },
  {
    title: "Volunteer & Staff Management",
    description:
      "Onboarding, scheduling, and time tracking for both paid staff and volunteers.",
  },
  {
    title: "Digital Presence",
    description:
      "Professional websites and digital campaigns that amplify your mission and drive donations.",
  },
];

const whyBullets = [
  "Special nonprofit pricing across all products",
  "Deep experience serving nonprofits since 2011",
  "Salesforce, WordPress, and Drupal expertise",
  "Background in education and government sectors",
  "Dedicated account management for nonprofit clients",
  "Compliance-ready infrastructure and workflows",
];

export default function NonprofitsPage() {
  return (
    <main className="bg-paper text-ink">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              Nonprofits
            </p>
            <h1 className="heading-3">Solutions for Nonprofits</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Nonprofits face unique challenges — tight budgets, complex
              compliance, and scaling programs. Esteemed delivers HR, IT, and
              digital services to support your mission without compromising your
              goals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Talk to Us
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                Nonprofit Pricing
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/engineer-monitoring.webp"
              alt="Nonprofit technology support"
              width={640}
              height={480}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="heading-2 mb-4">Technology That Serves Your Mission</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Purpose-built tools and services that help nonprofits maximize impact
            while minimizing overhead.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-neutral-200 bg-paper p-8 transition hover:shadow-lg"
                >
                  <span className="icon-badge icon-badge-lg mb-4">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                  <p className="text-ink/70">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mission Support ── */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="relative flex-1">
            <Image
              src="/images/segments/colleagues-exp.webp"
              alt="Nonprofit team collaboration"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Built to Support Your Mission</h2>
            <ul className="space-y-6">
              {missionBullets.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="icon-badge icon-badge-md mt-1">
                    <Heart className="h-3.5 w-3.5" />
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

      {/* ── Why Esteemed ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Why Nonprofits Choose Esteemed</h2>
            <p className="text-lg text-ink/70">
              Esteemed has a long history of serving the nonprofit community,
              from our roots in open-source CMS platforms to our partnerships
              with educational institutions and government agencies.
            </p>
            <ul className="space-y-4">
              {whyBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/talent-jobs.webp"
              alt="Nonprofit talent network"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="heading-2 mb-4">How We Help Nonprofits</h2>
          <p className="mx-auto mb-14 max-w-2xl text-lg text-ink/60">
            From technology to talent, Esteemed provides end-to-end support for
            nonprofit organizations.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Monitor,
                title: "Technology & IT",
                text: "Managed hosting, website development, CRM integration, and IT support.",
              },
              {
                icon: Globe,
                title: "HR & Workforce",
                text: "Recruitment, onboarding, payroll, and compliance for nonprofit staff and contractors.",
              },
              {
                icon: BookOpen,
                title: "Digital Services",
                text: "Content strategy, marketing automation, donor engagement, and analytics.",
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8"
                >
                  <span className="icon-badge icon-badge-lg mx-auto mb-4">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                  <p className="text-ink/70">{s.text}</p>
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
            Amplify your mission
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Ask about nonprofit pricing for Esteemed products and services.
            We are here to help your organization make a bigger impact.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
