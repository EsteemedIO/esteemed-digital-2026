"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Chip, Tab, Tabs } from "@heroui/react";
import { Check, CreditCard, ExternalLink, FolderKanban, Settings } from "lucide-react";
import {
  cloudTiers,
  createTiers,
  managedHostingTiers,
} from "@/lib/data";
import { checkoutHref, formatMoney, productIconPaths } from "@/lib/pricing-catalog";

const websitePlanGroups = [
  {
    key: "create",
    label: "Create",
    description: "AI-assisted website creation for new projects.",
    icon: productIconPaths.create,
    tiers: createTiers.filter((tier) => ["core", "pro", "business"].includes(tier.key)),
    highlight: "Core is the default starting point for most new website sales.",
  },
  {
    key: "cloud",
    label: "Cloud Sites",
    description: "Self-managed hosting for modern JavaScript, WordPress, and Drupal.",
    icon: productIconPaths.cloud,
    tiers: cloudTiers,
    highlight: "Cloud Plus is the default for one production site with staging and CDN.",
  },
  {
    key: "managed",
    label: "Managed Sites",
    description: "Done-for-you hosting with monthly expert support hours.",
    icon: productIconPaths.support,
    tiers: managedHostingTiers.filter((tier) => tier.monthly !== null),
    highlight: "Managed Growth gives most customers enough recurring support to launch and improve.",
  },
];

function priceFor(tier, interval) {
  if (interval === "annual") return tier.annual;
  return tier.monthly;
}

function lookupFor(tier, interval) {
  if (interval === "annual") return tier.annualLookupKey;
  return tier.lookupKey;
}

function displayPrice(tier, interval) {
  const price = priceFor(tier, interval);
  if (price === 0) return "Free";
  if (price === null || price === undefined) return "Custom";
  return formatMoney(price);
}

function intervalNote(tier, interval) {
  if (interval === "annual") return "per year";
  if (tier.basis) return tier.basis;
  return "per month";
}

function IconTile({ src, alt }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-zinc-200 bg-white">
      <Image src={src} alt={alt} width={32} height={32} className="h-8 w-8 object-contain" />
    </div>
  );
}

export default function PlansPage() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <section className="mb-6 rounded-xl border border-zinc-200 bg-white p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Chip
              size="sm"
              variant="flat"
              classNames={{
                base: "mb-4 bg-accent-hover text-ink",
                content: "font-semibold",
              }}
            >
              Account management
            </Chip>
            <h1 className="text-3xl font-semibold tracking-tight text-ink">
              Plans & features
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-500">
              Choose the website plan to sell or activate first. Purchase uses Stripe lookup keys, so this page can support the launch flow before deeper subscription management is wired in.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:min-w-[520px]">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <CreditCard size={18} className="mb-2 text-ink" />
              <p className="text-sm font-semibold text-ink">Subscriptions</p>
              <p className="text-xs text-zinc-500">Stripe checkout ready</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <FolderKanban size={18} className="mb-2 text-ink" />
              <p className="text-sm font-semibold text-ink">Projects</p>
              <p className="text-xs text-zinc-500">Launch work tracked here</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <Settings size={18} className="mb-2 text-ink" />
              <p className="text-sm font-semibold text-ink">Workspace</p>
              <p className="text-xs text-zinc-500">Profile and team next</p>
            </div>
          </div>
        </div>
      </section>

      <Tabs
        aria-label="Billing interval"
        radius="full"
        classNames={{
          base: "mb-5",
          tabList: "bg-white border border-zinc-200 p-1",
          cursor: "bg-[#111111]",
          tab: "h-10 px-5",
          tabContent: "font-semibold group-data-[selected=true]:text-white",
        }}
      >
        {["monthly", "annual"].map((interval) => (
          <Tab key={interval} title={interval === "monthly" ? "Monthly" : "Annual"}>
            <div className="space-y-8">
              {websitePlanGroups.map((group) => (
                <section key={group.key}>
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex items-start gap-3">
                      <IconTile src={group.icon} alt="" />
                      <div>
                        <h2 className="text-lg font-semibold tracking-tight text-ink">{group.label}</h2>
                        <p className="text-sm text-zinc-500">{group.description}</p>
                      </div>
                    </div>
                    <p className="max-w-xl text-sm text-zinc-500">{group.highlight}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                    {group.tiers.map((tier) => {
                      const lookupKey = lookupFor(tier, interval);
                      const price = priceFor(tier, interval);
                      const canCheckout = !!lookupKey && price !== null;
                      const features = tier.features || [
                        tier.description,
                        tier.supportHours ? `${tier.supportHours} support hours/month` : null,
                        group.key === "managed" && tier.pageAllowance && tier.pageOverageApplies
                          ? `Free Create rebuild up to ${tier.pageAllowance} pages`
                          : null,
                        group.key === "managed" && tier.pageOverageApplies
                          ? "$100/page one-time overage beyond allowance"
                          : null,
                        group.key === "managed" && tier.pageSoftCap
                          ? `Full standard site included, soft cap around ${tier.pageSoftCap} pages`
                          : null,
                        group.key === "cloud" ? "SSL, backups, monitoring" : null,
                        group.key === "cloud" ? "Modern JavaScript, WordPress, and Drupal ready" : null,
                      ].filter(Boolean);

                      return (
                        <article
                          key={tier.key}
                          className={`flex min-h-[360px] flex-col rounded-xl border bg-white p-5 ${
                            tier.recommended ? "border-accent" : "border-zinc-200"
                          }`}
                        >
                          <div className="mb-4 flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-lg font-semibold tracking-tight text-ink">{tier.name}</h3>
                              <p className="mt-1 text-sm text-zinc-500">{tier.description}</p>
                            </div>
                            {tier.recommended && (
                              <Chip
                                size="sm"
                                variant="flat"
                                classNames={{
                                  base: "bg-accent-hover text-ink",
                                  content: "font-semibold",
                                }}
                              >
                                Popular
                              </Chip>
                            )}
                          </div>

                          <div className="mb-4">
                            <div className="flex items-end gap-1">
                              <span className="text-[34px] font-bold leading-none tracking-tight text-ink">
                                {displayPrice(tier, interval)}
                              </span>
                              {price !== 0 && price !== null && (
                                <span className="pb-1 text-sm font-semibold text-zinc-500">
                                  {interval === "monthly" ? "/mo" : "/yr"}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-xs text-zinc-400">{intervalNote(tier, interval)}</p>
                          </div>

                          <ul className="space-y-2">
                            {features.slice(0, 6).map((feature) => (
                              <li key={feature} className="flex gap-2 text-sm text-zinc-500">
                                <Check size={16} className="mt-0.5 shrink-0 text-ink" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-auto flex gap-2 pt-5">
                            <Button
                              as="a"
                              href={
                                canCheckout
                                  ? checkoutHref({
                                      lookupKey,
                                      successPath: "/thanks",
                                      cancelPath: "/dashboard/plans",
                                    })
                                  : "/contact"
                              }
                              className="flex-1 bg-accent font-semibold text-ink hover:bg-accent-hover"
                              radius="sm"
                            >
                              {canCheckout ? "Buy Now" : "Talk to Us"}
                            </Button>
                            <Button
                              as={Link}
                              href={group.key === "create" ? "/websites/website-builder" : "/websites/hosting"}
                              radius="sm"
                              variant="bordered"
                              className="border-zinc-200 font-semibold text-ink"
                              isIconOnly
                              aria-label={`View ${group.label} details`}
                            >
                              <ExternalLink size={16} />
                            </Button>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
