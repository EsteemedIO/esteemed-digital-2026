import Link from "next/link";

export const metadata = {
  title: "Thanks — Esteemed",
};

export default function ThanksPage({ searchParams = {} }) {
  const isCheckout = Boolean(searchParams.session_id);
  const product = searchParams.product;
  const tier = searchParams.tier;
  const purchaseLabel = [product, tier].filter(Boolean).join(" ");

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold text-ink mb-4">
          {isCheckout ? "You're all set." : "Thanks."}
        </h1>
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          {isCheckout
            ? `Your ${purchaseLabel || "Esteemed"} purchase is complete. We will follow up with account access and next steps.`
            : "We got your message. A real person from our team will be in touch within one business day."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-6 py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Explore products
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
