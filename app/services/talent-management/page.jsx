import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Talent Management | Esteemed",
  description:
    "End-to-end talent management services from Esteemed. Source, vet, and manage your workforce.",
};

export default function TalentManagementPage() {
  return (
    <div className="min-h-screen">
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Users className="mx-auto mb-6 h-14 w-14 text-ink" strokeWidth={1.5} />
          <p className="text-sm font-medium text-zinc-500 mb-4">Services</p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Talent Management
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            End-to-end talent management. Source, vet, and manage your workforce with Esteemed.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Build a better team.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
