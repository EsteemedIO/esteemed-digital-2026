import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blogs | Esteemed",
  description:
    "Professional blogging powered by Esteemed Curate. AI-native content management for your blog.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FileText className="mx-auto mb-6 h-14 w-14 text-ink" strokeWidth={1.5} />
          <p className="text-sm font-medium text-zinc-500 mb-4">Websites</p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Blogs
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Professional blogging powered by Esteemed Curate. AI-native content management built for modern publishing.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-ink mb-3">Powered by Curate</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Curate is Esteemed&apos;s AI-native CMS. Manage your blog content, media, and publishing workflow from one place.
          </p>
          <Link
            href="/products/curate"
            className="inline-flex items-center text-sm font-bold text-ink hover:underline"
          >
            Learn about Curate &rarr;
          </Link>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start your blog today.
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
