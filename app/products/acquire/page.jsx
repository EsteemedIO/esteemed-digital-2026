import Link from "next/link";
import {
  Target,
  Brain,
  Users,
  Building2,
  UserPlus,
  LineChart,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Acquire",
  description:
    "Meet Esteemed Acquire. CRM for client and talent acquisition, powered by Intelligence.",
};

const features = [
  {
    icon: Building2,
    title: "Client Acquisition",
    description:
      "Track prospects, manage outreach, and close deals. Intelligence scores leads and suggests next actions based on engagement signals.",
  },
  {
    icon: UserPlus,
    title: "Talent Acquisition",
    description:
      "Build and nurture your talent pipeline. Acquire syncs with Colleagues so sourced candidates flow into your CRM automatically.",
  },
  {
    icon: Brain,
    title: "Intelligence-Powered Insights",
    description:
      "Esteemed Intelligence enriches every contact with skills data, engagement history, and predictive scoring — so you focus on the right people.",
  },
  {
    icon: Mail,
    title: "Outreach Automation",
    description:
      "Drip campaigns, follow-up sequences, and personalized messaging — all orchestrated by Intelligence and triggered by pipeline stage changes.",
  },
  {
    icon: LineChart,
    title: "Pipeline Analytics",
    description:
      "Conversion rates, deal velocity, revenue forecasts, and talent pipeline health. Real-time dashboards powered by the Intelligence reporting layer.",
  },
];

export default function AcquirePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Acquire
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Meet Esteemed Acquire
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            One CRM for both sides of your business. Acquire clients and talent
            in the same place, powered by Esteemed Intelligence for smarter
            outreach and better conversion.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/signup?redirect=create"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-ink font-bold hover:bg-accent-hover transition-colors"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/intelligence"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-ink text-ink font-bold hover:bg-ink hover:text-white transition-colors"
            >
              See Intelligence
            </Link>
          </div>
        </div>
      </section>

      {/* Dual pipeline */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Two pipelines, one platform
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Most CRMs are built for one thing. Acquire is built for the dual reality of services businesses — winning clients and sourcing talent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-zinc-200 p-8 md:p-10">
              <Building2 className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-ink mb-2">
                Client Pipeline
              </h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Track every prospect from first touch to signed contract. Intelligence analyzes engagement patterns and recommends when to follow up, what to say, and which deals to prioritize.
              </p>
              <ul className="space-y-3">
                {[
                  "Lead scoring powered by Intelligence",
                  "Automated follow-up sequences",
                  "Deal stage tracking with revenue forecasts",
                  "Integrates with Hire for staffing sold engagements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-8 md:p-10">
              <UserPlus className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-ink mb-2">
                Talent Pipeline
              </h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Build relationships with talent before you need them. Acquire syncs with Colleagues and Hire so your sourced candidates are always warm and ready.
              </p>
              <ul className="space-y-3">
                {[
                  "Talent relationship management (TRM)",
                  "Syncs with Colleagues network profiles",
                  "Nurture campaigns for passive candidates",
                  "Feeds directly into Hire when roles open",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform connections */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Connected across the platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F5F5F5" }}>
              <Brain className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-ink mb-2">Intelligence</h3>
              <p className="text-sm text-zinc-600">
                Every contact is enriched with Intelligence data. Lead scoring, talent matching, and predictive insights are built in — not bolted on.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F5F5F5" }}>
              <Users className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-ink mb-2">Colleagues</h3>
              <p className="text-sm text-zinc-600">
                Talent profiles from Colleagues sync into Acquire. When you source someone, their skills, availability, and history come with them.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F5F5F5" }}>
              <Target className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-ink mb-2">Hire</h3>
              <p className="text-sm text-zinc-600">
                When a talent relationship is ready, push them into a Hire pipeline with one click. No re-entering data, no context lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Built for acquisition teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <f.icon className="w-6 h-6 text-ink flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-bold text-ink mb-1">{f.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Win clients. Source talent. One CRM.
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Acquire brings both sides of your business into one Intelligence-powered platform.
          </p>
          <Link
            href="/signup?redirect=create"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink font-bold hover:bg-accent-hover transition-colors"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
