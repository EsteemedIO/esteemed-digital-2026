"use client";

import { useState } from "react";
import Link from "next/link";
import { Tab, Tabs } from "@heroui/react";
import { ArrowRight, Check } from "lucide-react";
import { checkoutHref, formatMoney } from "@/lib/pricing-catalog";
import ProductIcon from "@/components/ProductIcon";

function getPlanPrice(plan, billing) {
  if (plan.monthly === null) {
    return {
      headline: "Custom",
      suffix: "",
      note: plan.basis || "Sales-led plan",
      lookupKey: null,
    };
  }

  if (plan.monthly === 0) {
    return {
      headline: "Free",
      suffix: "",
      note: plan.basis || "No monthly subscription",
      lookupKey: plan.lookupKey,
    };
  }

  if (billing === "annual" && plan.annual) {
    return {
      headline: formatMoney(plan.annual / 12),
      suffix: "/mo",
      note: `Billed ${formatMoney(plan.annual)}/yr`,
      lookupKey: plan.annualLookupKey || plan.lookupKey,
      badge: "2 months free",
    };
  }

  return {
    headline: formatMoney(plan.monthly),
    suffix: "/mo",
    note: plan.basis || "Monthly billing",
    lookupKey: plan.lookupKey,
  };
}

function planCtaHref({ plan, productKey, billing, freeHref, contactHref, fallbackHref }) {
  if (plan.monthly === null) return contactHref || "/contact";
  if (plan.monthly === 0) return freeHref || `/signup?product=${productKey}&tier=${plan.key}`;

  const price = getPlanPrice(plan, billing);
  if (!price.lookupKey) {
    if (fallbackHref) return fallbackHref;
    const params = new URLSearchParams({
      product: productKey || "product",
      tier: plan.key,
      billing,
    });
    return `/signup?${params.toString()}`;
  }

  return checkoutHref({
    lookupKey: price.lookupKey,
    successPath: `/thanks?product=${productKey || "product"}&tier=${plan.key}`,
    cancelPath: productKey ? `/products/${productKey}` : undefined,
  });
}

function PricingCard({
  plan,
  productKey,
  billing,
  ctaLabel,
  freeHref,
  contactHref,
  fallbackHref,
}) {
  const price = getPlanPrice(plan, billing);
  const highlighted = plan.recommended;
  const href = planCtaHref({ plan, productKey, billing, freeHref, contactHref, fallbackHref });

  return (
    <article className={`relative flex h-full flex-col rounded-lg border bg-white p-6 shadow-sm ${highlighted ? "border-accent ring-4 ring-accent/25" : "border-zinc-200"}`}>
      {highlighted && (
        <div className="absolute inset-x-0 top-0 rounded-t-lg bg-accent px-6 py-3 text-xs font-black uppercase tracking-wide text-ink">
          Recommended
        </div>
      )}
      <div className={highlighted ? "pt-8" : ""}>
        <h3 className="text-2xl font-black text-ink">{plan.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-600">{plan.description || plan.basis}</p>
        <div className="mt-5">
          {price.badge && <span className="mb-2 inline-flex rounded-md bg-amber-100 px-2 py-1 text-xs font-black text-ink">{price.badge}</span>}
          <div className="flex items-end gap-1">
            <span className="text-4xl font-black text-ink">{price.headline}</span>
            {price.suffix && <span className="pb-1 text-sm font-bold text-zinc-700">{price.suffix}</span>}
          </div>
          {price.note && <p className="mt-1 text-xs font-semibold text-zinc-600">{price.note}</p>}
          {plan.founding && billing === "monthly" && (
            <p className="mt-1 text-xs text-zinc-500">Founding rate: {formatMoney(plan.founding)}/mo for first 12 months.</p>
          )}
        </div>
      </div>

      <Link
        href={href}
        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-black text-white transition-colors hover:bg-zinc-800"
      >
        {plan.monthly === null ? "Contact Sales" : plan.monthly === 0 ? "Start Free" : ctaLabel || "Checkout"}
      </Link>

      <ul className="mt-6 space-y-3">
        {(plan.features || []).map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-5 text-zinc-700">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-zinc-200">
              <Check className="h-4 w-4 text-ink" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ProductPricingBlock({
  eyebrow = "Plans",
  title,
  description,
  productKey,
  plans,
  ctaLabel = "Checkout",
  freeHref,
  contactHref = "/contact",
  fallbackHref,
  calculatorHref = "/dashboard/calculator",
}) {
  const hasAnnual = plans.some((plan) => plan.annual);
  const [billing, setBilling] = useState(hasAnnual ? "annual" : "monthly");

  return (
    <section className="border-t border-zinc-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white">
              <ProductIcon product={productKey} className="h-9 w-9" />
            </span>
            <div>
              <p className="mb-2 text-xs font-black uppercase tracking-wide text-zinc-500">{eyebrow}</p>
              <h2 className="text-3xl font-black text-ink md:text-4xl">{title}</h2>
              {description && <p className="mt-3 max-w-3xl leading-7 text-zinc-600">{description}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            {hasAnnual && (
              <Tabs
                aria-label={`${title} billing`}
                selectedKey={billing}
                onSelectionChange={(key) => setBilling(String(key))}
                classNames={{
                  tabList: "rounded-full border border-zinc-200 bg-white p-1",
                  cursor: "hidden",
                  tab: "h-10 rounded-full px-5 data-[selected=true]:bg-ink",
                  tabContent: "font-bold text-zinc-600 group-data-[selected=true]:text-white",
                }}
              >
                <Tab key="monthly" title="Monthly" />
                <Tab key="annual" title="Annual" />
              </Tabs>
            )}
            {calculatorHref && (
              <Link href={calculatorHref} className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-zinc-300 px-4 text-sm font-bold text-ink transition-colors hover:border-ink">
                Calculator <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard
              key={plan.key}
              plan={plan}
              productKey={productKey}
              billing={billing}
              ctaLabel={ctaLabel}
              freeHref={freeHref}
              contactHref={contactHref}
              fallbackHref={fallbackHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
