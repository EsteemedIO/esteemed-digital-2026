import Link from "next/link";
import { UserCheck, ArrowRight } from "lucide-react";
import StickyAnchorNav from "@/components/StickyAnchorNav";

export const metadata = {
  title: "Hire an Expert | Esteemed",
  description:
    "Hire vetted experts from Esteemed. Developers, designers, strategists and more — on demand.",
};

export default function HireAnExpertPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <UserCheck className="mx-auto mb-6 h-14 w-14 text-ink" strokeWidth={1.5} />
          <p className="text-sm font-medium text-zinc-500 mb-4">Services</p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Hire an Expert
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Access 35,000+ vetted professionals for contract or direct hire. Developers, designers, strategists, and more.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-ink mb-3">Powered by Colleagues</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Colleagues, by Esteemed is the talent and opportunity marketplace behind our expert network.
          </p>
          <Link
            href="/products/colleagues"
            className="inline-flex items-center text-sm font-bold text-ink hover:underline"
          >
            Learn about Colleagues &rarr;
          </Link>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Find your expert today.
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
