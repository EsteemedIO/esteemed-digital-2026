import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Zap,
  Users,
  Globe,
  Headphones,
  TrendingUp,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Solutions for Founders | Esteemed",
  description:
    "Launch MVPs, build your tech team, and scale your stack without the overhead of a full engineering org.",
};

const features = [
  {
    icon: Zap,
    title: "MVP in Minutes",
    description:
      "Esteemed Create builds your first product or website with AI so you can validate ideas before writing a single line of code.",
  },
  {
    icon: Globe,
    title: "Instant Deployment",
    description:
      "Publish to Esteemed Cloud with one click. SSL, CDN, and managed infrastructure included from day one.",
  },
  {
    icon: Users,
    title: "Hire Your First Team",
    description:
      "Colleagues gives you access to 35,000+ vetted professionals -- fractional or full-time, depending on your stage and budget.",
  },
  {
    icon: TrendingUp,
    title: "Scale-Up Support",
    description:
      "Ramp hiring as you close funding rounds. Esteemed handles recruiting, payroll, and compliance so you can focus on product.",
  },
  {
    icon: Headphones,
    title: "Fractional Leadership",
    description:
      "Access fractional CTOs, architects, and technical advisors without the cost of a full-time executive hire.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Services",
    description:
      "From website design to content strategy to SEM, Esteemed experts cover the services founders typically cobble together from five vendors.",
  },
];

const milestones = [
  "Validate your idea with a working prototype in days",
  "Launch a professional website without hiring a developer",
  "Hire your first engineer from a pre-vetted network",
  "Get fractional CTO guidance without full-time overhead",
  "Scale your team from seed stage through Series A and beyond",
  "Access ongoing support as your product and team grow",
];

export default function FoundersPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              By Role
            </p>
            <h1 className="heading-3">For Founders</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Launch MVPs, build your tech team, and scale your stack -- without
              the overhead of a full engineering org.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Get Started Free
              </Link>
              <Link
                href="/products/colleagues"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                Find Talent
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/office-worker.webp"
              alt="Founder building their startup"
              width={640}
              height={480}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="heading-2 mb-4">From Idea to Scale</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Esteemed has been helping founders build since 2011. AI tools plus
            expert talent means you move fast and stay lean.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Milestones */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="relative flex-1">
            <Image
              src="/images/segments/colleagues-exp.webp"
              alt="Startup team collaborating"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Founder Milestones We Help With</h2>
            <ul className="space-y-4">
              {milestones.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-paper md:text-4xl">
            Build your vision
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Start prototyping your idea today with Esteemed Create.
          </p>
          <Link
            href="/login"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </main>
  );
}
