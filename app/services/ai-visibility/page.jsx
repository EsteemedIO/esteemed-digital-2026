import Link from "next/link";
import { Eye, ArrowRight } from "lucide-react";

export const metadata = {
  title: "AI Visibility | Esteemed",
  description:
    "AI visibility services from Esteemed. Ensure your brand shows up in AI-powered search and assistants.",
};

export default function AIVisibilityPage() {
  return (
    <div className="min-h-screen">
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Eye className="mx-auto mb-6 h-14 w-14 text-ink" strokeWidth={1.5} />
          <p className="text-sm font-medium text-zinc-500 mb-4">Services</p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            AI Visibility
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Ensure your brand shows up in AI-powered search, assistants, and LLM responses. The new frontier of discoverability.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Be visible to AI.
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
