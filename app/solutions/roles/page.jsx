import Link from "next/link";

export const metadata = {
  title: "Solutions by Role",
  description: "Explore how Esteemed serves marketing leaders, founders, IT directors, and HR teams with tailored solutions.",
};

const roles = [
  { name: "Marketing Leaders", href: "/solutions/marketing-leaders", desc: "Launch sites faster, hire creative talent on demand, and automate with AI." },
  { name: "Founders", href: "/solutions/founders", desc: "Launch MVPs, build your tech team, and scale without overhead." },
  { name: "IT Directors", href: "/solutions/it-directors", desc: "Modernize infrastructure, augment teams, and deploy AI securely." },
  { name: "HR Teams", href: "/solutions/hr-teams", desc: "Source vetted technical talent and streamline hiring workflows." },
];

export default function RolesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Solutions by Role
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Whatever your role, Esteemed has tools and talent tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {roles.map((role) => (
              <Link key={role.name} href={role.href} className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-400 transition-colors">
                <h3 className="text-lg font-semibold text-ink mb-2">{role.name}</h3>
                <p className="text-sm text-zinc-500">{role.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Not sure where to start?</h2>
          <p className="text-zinc-400 mb-8">Talk to our team and we will match you with the right solution.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
