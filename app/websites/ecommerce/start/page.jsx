"use client";

import { Suspense } from "react";
import { useSession, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { checkoutHref } from "@/lib/pricing-catalog";

const plans = [
  {
    key: "develop",
    name: "Develop",
    price: "$29",
    desc: "Build and test your store. Fixed compute, 5 GB storage.",
    lookupKey: "commerce_develop_monthly",
  },
  {
    key: "launch",
    name: "Launch",
    price: "$99",
    desc: "Go live with autoscaling, custom domains, and backups.",
    lookupKey: "commerce_launch_monthly",
    recommended: true,
  },
  {
    key: "scale",
    name: "Scale",
    price: "$299",
    desc: "Dedicated workers, priority support, 3 Cloud seats.",
    lookupKey: "commerce_scale_monthly",
  },
];

function GoogleMark() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.05-3.71 1.05-2.86 0-5.29-1.93-6.16-4.52H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.12-1.43.34-2.11V7.05H2.18A10.96 10.96 0 0 0 1 12c0 1.78.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335" />
    </svg>
  );
}

const platformLabels = {
  woocommerce: "WooCommerce",
  drupal: "Drupal Commerce",
  esteemed: "Esteemed Commerce",
};

function EcommerceStartContent() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const platform = searchParams.get("platform") || "";
  const platformName = platformLabels[platform] || "";

  if (status === "loading") {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-zinc-400" />
      </div>
    );
  }

  // Signed in — show plan picker that goes straight to Stripe checkout
  if (session) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-zinc-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              {platformName || "Esteemed Commerce"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
              Choose your plan
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              All plans include unlimited products, orders, and customers with 0% transaction fees. Auto-provisioned on Esteemed Cloud.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.key}
                className={`relative rounded-2xl bg-white p-8 flex flex-col ${plan.recommended ? "ring-4 ring-accent/25 border-accent border" : "border border-zinc-200"}`}
              >
                {plan.recommended && (
                  <div className="absolute inset-x-0 top-0 rounded-t-2xl bg-accent px-4 py-2 text-xs font-black uppercase tracking-wide text-ink text-center">
                    Recommended
                  </div>
                )}
                <div className={plan.recommended ? "pt-6" : ""}>
                  <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-4xl font-black text-ink">{plan.price}</span>
                    <span className="text-sm font-bold text-zinc-500 pb-1">/mo</span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{plan.desc}</p>
                </div>
                <a
                  href={checkoutHref({
                    lookupKey: plan.lookupKey,
                    successPath: `/thanks?product=commerce&tier=${plan.key}`,
                    cancelPath: "/websites/ecommerce",
                  })}
                  className={`mt-6 w-full text-center inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors ${plan.recommended ? "bg-ink text-white hover:bg-zinc-800" : "bg-zinc-100 text-ink hover:bg-zinc-200"}`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-zinc-500">
              Need Enterprise? <Link href="/contact" className="font-bold text-ink hover:underline">Talk to sales</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Not signed in — auth card
  return (
    <div className="min-h-[calc(100vh-64px)] bg-zinc-100">
      <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Esteemed Commerce
          </p>
          <h1 className="text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
            Launch your store today.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-600">
            Sign up and choose from WooCommerce, Drupal Commerce, or Esteemed Commerce hosted on our cloud.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Auto-provisioned on Esteemed Cloud",
              "Unlimited products, orders, and customers",
              "0% GMV — no transaction fees",
              "Deploy from GitHub, scale on demand",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink" strokeWidth={2} />
                <span className="text-zinc-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl shadow-ink/5 md:p-10">
            <div className="mb-6 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/esteemed-logo.svg" alt="Esteemed" className="h-8 w-auto" />
            </div>
            <h2 className="mb-2 text-center text-2xl font-bold text-ink">
              Sign in to get started
            </h2>
            <p className="mb-8 text-center text-sm text-zinc-500">
              One account for commerce, hosting, and cloud.
            </p>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => signIn("keycloak", { callbackUrl: "/websites/ecommerce/start" })}
                className="flex min-h-12 w-full items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.015] hover:bg-zinc-800"
              >
                Continue with email
              </button>
              <div className="flex items-center gap-3 py-2">
                <div className="h-px flex-1 bg-zinc-200" />
                <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">or</span>
                <div className="h-px flex-1 bg-zinc-200" />
              </div>
              <button
                type="button"
                onClick={() => signIn("keycloak", { callbackUrl: "/websites/ecommerce/start" }, { kc_idp_hint: "google" })}
                className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-ink hover:bg-zinc-50"
              >
                <GoogleMark />
                Continue with Google
              </button>
            </div>
            <p className="mt-8 text-center text-xs leading-5 text-zinc-400">
              By continuing, you agree to the Esteemed Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EcommerceStartPage() {
  return (
    <Suspense fallback={<div className="flex min-h-[calc(100vh-64px)] items-center justify-center"><Loader2 className="h-6 w-6 animate-spin text-zinc-400" /></div>}>
      <EcommerceStartContent />
    </Suspense>
  );
}
