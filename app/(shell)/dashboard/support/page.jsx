import Link from "next/link";
import { ExternalLink, Headphones, LifeBuoy } from "lucide-react";

export const metadata = {
  title: "Support",
};

const supportPlans = [
  {
    name: "3-Hour Support Pack",
    price: "$255/mo",
    description: "Light help for fixes, content updates, troubleshooting, and small requests",
    lookupKey: "support_3_hours_monthly",
  },
  {
    name: "6-Hour Support Pack",
    price: "$510/mo",
    description: "Priority support for active sites, app configuration, and recurring operational help",
    lookupKey: "support_6_hours_monthly",
  },
  {
    name: "8-Hour Support Pack",
    price: "$680/mo",
    description: "Ongoing technical support, optimization, and managed requests",
    lookupKey: "support_8_hours_monthly",
  },
  {
    name: "10-Hour Support Pack",
    price: "$850/mo",
    description: "Maximum standard monthly support block for launch customers",
    lookupKey: "support_10_hours_monthly",
  },
];

function checkoutHref(lookupKey) {
  const params = new URLSearchParams({
    lookup_key: lookupKey,
    quantity: "1",
    success_path: "/dashboard/support?purchased=true",
    cancel_path: "/dashboard/support",
  });
  return `/api/checkout?${params.toString()}`;
}

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <section className="mb-6 rounded-xl border border-zinc-200 bg-white p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-zinc-500">Account support</p>
            <h1 className="text-3xl font-semibold tracking-tight text-ink">Support</h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-500">
              Buy a monthly support block, open the public support plan details, or post expert work through Colleagues.
            </p>
          </div>
          <Link
            href="/hire-experts/web-support"
            className="inline-flex items-center justify-center rounded-md border border-zinc-200 px-4 py-2 text-sm font-semibold text-ink hover:bg-zinc-50"
          >
            View plan details
          </Link>
        </div>
      </section>

      <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {supportPlans.map((tier) => (
          <article key={tier.lookupKey} className="flex min-h-[250px] flex-col rounded-xl border border-zinc-200 bg-white p-5">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Headphones size={20} />
            </div>
            <h2 className="text-lg font-semibold text-ink">{tier.name}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-ink">{tier.price}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">{tier.description}</p>
            <a
              href={checkoutHref(tier.lookupKey)}
              className="mt-auto inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink hover:bg-accent-hover"
            >
              Buy support
            </a>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <a
          href="https://colleagues.esteemed.io/jobs/new"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100">
              <ExternalLink size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ink">Hire an expert</h2>
              <p className="text-sm text-zinc-500">Post scoped work to Colleagues.</p>
            </div>
          </div>
          <ExternalLink size={16} className="text-zinc-400" />
        </a>

        <Link
          href="/dashboard/sites"
          className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:bg-zinc-50"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100">
              <LifeBuoy size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ink">Site support context</h2>
              <p className="text-sm text-zinc-500">Review active sites before opening a request.</p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
