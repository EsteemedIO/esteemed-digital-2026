import Link from "next/link";
import {
  Users,
  Search,
  Briefcase,
  ClipboardList,
  Calendar,
  Receipt,
  UserPlus,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Colleagues",
  description:
    "Esteemed Colleagues. Talent and opportunity marketplace. Post opportunities and hire contract or direct employees.",
};

export default function ColleaguesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Services / Colleagues
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Esteemed Colleagues
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            The talent and opportunity marketplace. Post opportunities and hire
            contract or direct employees. Whether you&apos;re building a team or
            looking for your next role, Colleagues connects the right people
            to the right projects.
          </p>
        </div>
      </section>

      {/* Split treatment */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Hire (Employers) — primary */}
            <div className="rounded-2xl border border-accent p-8 md:p-10">
              <Briefcase
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h2 className="text-2xl font-bold text-ink mb-2">
                For Hire (Employers)
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Search 35,000+ vetted professionals across development, design,
                marketing, strategy, and more. Post engagements, review matched
                candidates, and manage projects — all in one platform.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Search and filter by skill, experience, and availability",
                  "Post engagements and receive matched candidates",
                  "Manage projects, milestones, and deliverables",
                  "Built-in time tracking and invoicing",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-600"
                  >
                    <Search
                      className="w-4 h-4 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/colleagues/hire-signup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Sign up to Hire
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* For Jobseekers — secondary */}
            <div className="rounded-2xl border border-zinc-200 p-8 md:p-10">
              <UserPlus
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h2 className="text-2xl font-bold text-ink mb-2">
                For Jobseekers
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Find work that matches your skills and availability. Get matched
                automatically to engagements, build your profile, and manage
                your career — all from one dashboard.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Create a professional profile in minutes",
                  "Get matched automatically to relevant engagements",
                  "Track applications and active projects",
                  "Get paid on time with built-in invoicing",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-600"
                  >
                    <Search
                      className="w-4 h-4 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/colleagues/jobseeker-signup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors"
              >
                Sign up as a Jobseeker
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Center callout */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10">
            Career Center
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <ClipboardList
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-ink mb-2">
                Project management
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Track milestones, deliverables, and progress across all your
                engagements. Stay organized without a separate PM tool.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <Calendar
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-ink mb-2">Scheduling</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Coordinate availability, set deadlines, and manage timelines
                across teams and projects — all in one place.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <Receipt
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-ink mb-2">Invoicing</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Built-in time tracking and invoicing for contractors.
                Transparent billing for employers. No third-party tools
                required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">
            The right people for the right work.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/colleagues/hire-signup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Sign up to Hire
            </Link>
            <Link
              href="/colleagues/jobseeker-signup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-white hover:text-ink transition-colors"
            >
              Sign up as a Jobseeker
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
