import Link from "next/link";
import { BarChart3, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Dashboards | Esteemed",
  description:
    "Custom dashboards and business intelligence tools from Esteemed. Visualize your data with powerful, tailored dashboards.",
};

export default function DashboardsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BarChart3 className="mx-auto mb-6 h-14 w-14 text-ink" strokeWidth={1.5} />
          <p className="text-sm font-medium text-zinc-500 mb-4">Websites</p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Dashboards
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Custom dashboards and business intelligence tools. Visualize your data with powerful, tailored reporting.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-ink mb-3">Powered by Esteemed Intelligence</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Esteemed Intelligence provides the shared data layer that powers dashboards across all Esteemed products.
          </p>
          <Link
            href="/products/intelligence"
            className="inline-flex items-center text-sm font-bold text-ink hover:underline"
          >
            Learn about Intelligence &rarr;
          </Link>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            See your data clearly.
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
