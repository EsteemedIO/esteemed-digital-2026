import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Business Email | Esteemed",
  description:
    "Professional business email solutions from Esteemed. Custom domains, reliable delivery, enterprise-ready.",
};

export default function BusinessEmailPage() {
  return (
    <div className="min-h-screen">
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Mail className="mx-auto mb-6 h-14 w-14 text-ink" strokeWidth={1.5} />
          <p className="text-sm font-medium text-zinc-500 mb-4">Business Tools</p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Business Email
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Professional business email with custom domains. Reliable, secure, enterprise-ready.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Get professional email for your business.
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
