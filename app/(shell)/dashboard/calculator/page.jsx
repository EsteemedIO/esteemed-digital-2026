"use client";

import { useState, useMemo, useCallback } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Switch } from "@heroui/react";
import {
  Globe,
  Cloud,
  Users,
  Briefcase,
  Brain,
  Bot,
  FileText,
  Sparkles,
  Calculator,
  Minus,
  Plus,
} from "lucide-react";
import { checkoutItemsHref } from "@/lib/pricing-catalog";

/* ------------------------------------------------------------------ */
/*  Pricing data                                                       */
/* ------------------------------------------------------------------ */

/* Pricing from esteemed-pricing-spec-v2.md. Code should use lookup keys in Stripe. */

const CLOUD_TIERS = [
  { label: "Basic", price: 9.99, lookupKey: "cloud_basic_monthly" },
  { label: "Plus", price: 14.99, lookupKey: "cloud_plus_monthly" },
  { label: "Pro", price: 19.99, lookupKey: "cloud_pro_monthly" },
  { label: "Multi", price: 39.99, lookupKey: "cloud_multi_monthly" },
];

const MANAGED_TIERS = [
  { label: "Essential", price: 149, support: "2 hrs/mo", lookupKey: "managed_essential_monthly" },
  { label: "Growth", price: 249, support: "5 hrs/mo", lookupKey: "managed_growth_monthly" },
  { label: "Business", price: 399, support: "10 hrs/mo", lookupKey: "managed_business_monthly" },
];

/* Intelligence — pricing spec: flat per-tenant add-on */
const INTELLIGENCE_TIERS = [
  { label: "Monthly", price: 199, lookupKey: "intelligence_monthly" },
  { label: "Annual", price: 166, note: "$1,990/yr (2 months free)", lookupKey: "intelligence_annual" },
];

/* Per-seat products — from esteemed-pricing-spec.md */
const ACQUIRE_TIERS = [
  { label: "Free", price: 0, lookupKey: "acquire_free" },
  { label: "Starter", price: 149, perSeat: true, lookupKey: "acquire_starter_monthly" },
  { label: "Pro", price: 249, perSeat: true, lookupKey: "acquire_pro_monthly" },
];

const HIRE_TIERS = [
  { label: "Free", price: 0, lookupKey: "hire_free" },
  { label: "Starter", price: 149, perSeat: true, lookupKey: "hire_starter_monthly" },
  { label: "Pro", price: 249, perSeat: true, lookupKey: "hire_pro_monthly" },
];

const SUITE_TIERS = [
  { label: "Bundle", price: 399, perSeat: true, lookupKey: "suite_bundle_monthly" },
];

/* Per-workspace product — Curate */
const CURATE_TIERS = [
  { label: "Starter", price: 49, lookupKey: "curate_starter_monthly" },
  { label: "Pro", price: 299, lookupKey: "curate_pro_monthly" },
];

const ALL_AGENTS = [
  { id: "receptionist", name: "AI Receptionist", price: 99, lookupKey: "agent_receptionist_monthly" },
  { id: "social", name: "Social", price: 129, lookupKey: "agent_social_monthly" },
  { id: "blogger", name: "Blogger", price: 149, lookupKey: "agent_blogger_monthly" },
  { id: "marketer", name: "Marketer", price: 149, lookupKey: "agent_marketer_monthly" },
  { id: "recruiter", name: "Recruiter", price: 149, lookupKey: "agent_recruiter_monthly" },
  { id: "publicist", name: "Publicist", price: 149, lookupKey: "agent_publicist_monthly" },
];
const AGENT_FLEET_PRICE = 199;

const PLATFORM_APPS = [
  {
    id: "cloud",
    name: "Cloud",
    sublabel: "Self-serve hosting",
    icon: Cloud,
    price: null,
    included: false,
    costLabel: "$9.99\u2013$39.99/mo",
    tiered: true,
    tierKey: "cloud",
  },
  {
    id: "managed",
    name: "Managed Hosting",
    sublabel: "Done-for-you",
    icon: Globe,
    price: null,
    included: false,
    costLabel: "$149\u2013$399/mo",
    tiered: true,
    tierKey: "managed",
  },
  {
    id: "suite",
    name: "Suite",
    sublabel: "Acquire + Hire Pro",
    icon: Sparkles,
    price: null,
    included: false,
    costLabel: "$399/seat/mo",
    tiered: true,
    tierKey: "suite",
  },
  {
    id: "acquire",
    name: "Acquire",
    sublabel: "CRM \u00b7 TRM",
    icon: Users,
    price: null,
    included: false,
    costLabel: "Free \u2013 $249/seat/mo",
    tiered: true,
    tierKey: "acquire",
  },
  {
    id: "hire",
    name: "Hire",
    sublabel: "ATS",
    icon: Briefcase,
    price: null,
    included: false,
    costLabel: "Free \u2013 $249/seat/mo",
    tiered: true,
    tierKey: "hire",
  },
  {
    id: "intelligence",
    name: "Intelligence",
    sublabel: "Memory \u00b7 reasoning",
    icon: Brain,
    price: null,
    included: false,
    costLabel: "$199/mo flat",
    tiered: true,
    tierKey: "intelligence",
  },
  {
    id: "agents",
    name: "Agents",
    sublabel: "Intelligent Agents",
    icon: Bot,
    price: null,
    included: false,
    costLabel: "$99\u2013$149/mo each",
    hasAgentPicker: true,
  },
  {
    id: "curate",
    name: "Curate",
    sublabel: "CMS \u00b7 DAM",
    icon: FileText,
    price: null,
    included: false,
    costLabel: "$49\u2013$299/mo",
    tiered: true,
    tierKey: "curate",
  },
];

const TIER_OPTIONS = {
  cloud: CLOUD_TIERS,
  managed: MANAGED_TIERS,
  acquire: ACQUIRE_TIERS,
  hire: HIRE_TIERS,
  suite: SUITE_TIERS,
  intelligence: INTELLIGENCE_TIERS,
  curate: CURATE_TIERS,
};

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const cardStyle = {
  background: "#FFFFFF",
  border: "1px solid #D7D7D7",
  borderRadius: 16,
};

const summaryPanelStyle = {
  background: "#F5F5F4",
  border: "1px solid #D7D7D7",
  borderRadius: 16,
};

/* ------------------------------------------------------------------ */
/*  Helper: format currency                                            */
/* ------------------------------------------------------------------ */

function fmt(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CalculatorPage() {
  const { data: session, status } = useSession();

  /* ---- app toggles ---- */
  const [activeApps, setActiveApps] = useState({});
  const [tierSelections, setTierSelections] = useState({ cloud: 0, managed: 0, acquire: 0, hire: 0, suite: 0, intelligence: 0, curate: 0 });
  const [seats, setSeats] = useState(1);

  /* ---- agent toggles (add-ons for Curate/Acquire) ---- */
  const [activeAgents, setActiveAgents] = useState({});
  const [agentFleetBundle, setAgentFleetBundle] = useState(false);

  /* ---- toggle helpers ---- */
  const toggleApp = useCallback((id) => {
    setActiveApps((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleAgent = useCallback((id) => {
    setActiveAgents((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const allAgentsOn = ALL_AGENTS.every((a) => activeAgents[a.id]);
  const effectiveFleet = agentFleetBundle || allAgentsOn;

  const setTier = useCallback((tierKey, idx) => {
    setTierSelections((prev) => ({ ...prev, [tierKey]: idx }));
  }, []);

  /* ---- line items & total ---- */
  const lineItems = useMemo(() => {
    const items = [];

    // Platform apps
    PLATFORM_APPS.forEach((app) => {
      if (app.comingSoon || !activeApps[app.id]) return;

      if (app.hasAgentPicker) {
        // Agents are handled separately below
        return;
      } else if (app.tiered && app.tierKey) {
        const tiers = TIER_OPTIONS[app.tierKey];
        const tierIdx = tierSelections[app.tierKey] || 0;
        const tier = tiers[tierIdx];
        const amount = tier.perSeat ? tier.price * seats : tier.price;
        const label = tier.perSeat
          ? `${app.name} \u2014 ${tier.label} (\u00d7${seats} seat${seats !== 1 ? "s" : ""})`
          : `${app.name} \u2014 ${tier.label}`;
        items.push({ label, amount, lookupKey: tier.lookupKey, quantity: tier.perSeat ? seats : 1 });
      } else if (app.perSeat) {
        items.push({
          label: `${app.name} (\u00d7${seats} seat${seats !== 1 ? "s" : ""})`,
          amount: app.price * seats,
        });
      } else {
        items.push({ label: app.name, amount: app.price });
      }
    });

    // Agents (add-ons for Curate/Acquire)
    if (activeApps.agents) {
      if (effectiveFleet) {
        items.push({
          label: "Custom / multi-agent bundle",
          amount: AGENT_FLEET_PRICE,
          lookupKey: "agents_bundle_monthly",
          quantity: 1,
        });
      } else {
        ALL_AGENTS.forEach((agent) => {
          if (activeAgents[agent.id]) {
          items.push({ label: `${agent.name} Agent`, amount: agent.price, lookupKey: agent.lookupKey, quantity: 1 });
          }
        });
      }
    }

    return items;
  }, [activeApps, tierSelections, seats, activeAgents, effectiveFleet]);

  const subtotal = useMemo(
    () => lineItems.reduce((sum, li) => sum + li.amount, 0),
    [lineItems]
  );

  const checkoutItems = useMemo(
    () => lineItems.filter((item) => item.lookupKey && item.amount > 0),
    [lineItems]
  );

  const checkoutUrl = useMemo(
    () => checkoutItemsHref(checkoutItems, { successPath: "/thanks", cancelPath: "/dashboard/calculator" }),
    [checkoutItems]
  );

  /* ---- auth gate ---- */
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div
          className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: "#D7D7D7", borderTopColor: "transparent" }}
        />
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/api/auth/signin");
  }

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Calculator size={28} style={{ color: "rgba(0,0,0,0.85)" }} />
          <h1
            className="text-3xl font-semibold tracking-tight"
            style={{ color: "rgba(0,0,0,0.85)" }}
          >
            Calculator
          </h1>
        </div>
        <p className="text-base" style={{ color: "#565449" }}>
          Estimate your monthly cost based on active apps and services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ---- Left column: toggles ---- */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Platform Apps */}
          <section>
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: "rgba(0,0,0,0.85)" }}
            >
              Platform Apps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {PLATFORM_APPS.map((app) => {
                const Icon = app.icon;
                const isActive = !!activeApps[app.id];

                return (
                  <div
                    key={app.id}
                    className="flex flex-col justify-between p-4"
                    style={{
                      ...cardStyle,
                      opacity: app.comingSoon ? 0.5 : 1,
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{
                            background: isActive ? "#FEE546" : "#F0F0ED",
                          }}
                        >
                          <Icon
                            size={18}
                            style={{
                              color: isActive
                                ? "rgba(0,0,0,0.85)"
                                : "#8C8C8C",
                            }}
                          />
                        </div>
                        <div>
                          <p
                            className="text-sm font-semibold leading-tight"
                            style={{ color: "rgba(0,0,0,0.85)" }}
                          >
                            {app.name}
                          </p>
                          <p
                            className="text-xs leading-tight mt-0.5"
                            style={{ color: "#8C8C8C" }}
                          >
                            {app.sublabel}
                          </p>
                        </div>
                      </div>
                      <Switch
                        size="sm"
                        isSelected={isActive}
                        isDisabled={app.comingSoon}
                        onValueChange={() => toggleApp(app.id)}
                        classNames={{
                          wrapper: isActive
                            ? "!bg-[#FEE546] group-data-[selected=true]:!bg-[#FEE546]"
                            : "",
                          thumb: "bg-white",
                        }}
                        aria-label={`Toggle ${app.name}`}
                      />
                    </div>

                    {/* Cost label */}
                    <p
                      className="text-xs font-medium"
                      style={{ color: "#565449" }}
                    >
                      {app.costLabel}
                    </p>

                    {/* Tier selector (Create, Cloud, Intelligence) */}
                    {app.tiered && app.tierKey && isActive && (
                      <div className="flex mt-3 rounded-lg overflow-hidden border"
                        style={{ borderColor: "#D7D7D7" }}
                      >
                        {TIER_OPTIONS[app.tierKey].map((tier, idx) => (
                          <button
                            key={tier.label}
                            onClick={() => setTier(app.tierKey, idx)}
                            className="flex-1 text-xs py-1.5 font-medium transition-colors"
                            style={{
                              background:
                                (tierSelections[app.tierKey] || 0) === idx ? "#FEE546" : "#FFFFFF",
                              color:
                                (tierSelections[app.tierKey] || 0) === idx
                                  ? "rgba(0,0,0,0.85)"
                                  : "#8C8C8C",
                              borderRight:
                                idx < TIER_OPTIONS[app.tierKey].length - 1
                                  ? "1px solid #D7D7D7"
                                  : "none",
                            }}
                          >
                            {tier.label}
                            <br />
                            {fmt(tier.price)}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Agent picker (when Agents is toggled on) */}
                    {app.hasAgentPicker && isActive && (
                      <div className="mt-3 space-y-2">
                        <p className="text-xs font-medium" style={{ color: "#565449" }}>
                          Standalone agents
                        </p>
                        {ALL_AGENTS.map((agent) => (
                          <div key={agent.id} className="flex items-center justify-between">
                            <span className="text-xs" style={{ color: "rgba(0,0,0,0.85)" }}>
                              {agent.name} — {fmt(agent.price)}/mo
                            </span>
                            <Switch
                              size="sm"
                              isSelected={!!activeAgents[agent.id]}
                              onValueChange={() => toggleAgent(agent.id)}
                              classNames={{
                                wrapper: activeAgents[agent.id]
                                  ? "!bg-[#FEE546] group-data-[selected=true]:!bg-[#FEE546]"
                                  : "",
                              }}
                              aria-label={`Toggle ${agent.name}`}
                            />
                          </div>
                        ))}
                        <div
                          className="flex items-center justify-between mt-2 pt-2 border-t"
                          style={{ borderColor: "#D7D7D7" }}
                        >
                          <span className="text-xs font-semibold" style={{ color: "rgba(0,0,0,0.85)" }}>
                            Agent Fleet (all 4) — {fmt(AGENT_FLEET_PRICE)}/mo{" "}
                            <span style={{ color: "#16a34a" }}>from v2 catalog</span>
                          </span>
                          <Switch
                            size="sm"
                            isSelected={effectiveFleet}
                            onValueChange={(val) => {
                              setAgentFleetBundle(val);
                              const next = {};
                              ALL_AGENTS.forEach((a) => { next[a.id] = val; });
                              setActiveAgents((prev) => ({ ...prev, ...next }));
                            }}
                            classNames={{
                              wrapper: effectiveFleet
                                ? "!bg-[#FEE546] group-data-[selected=true]:!bg-[#FEE546]"
                                : "",
                            }}
                            aria-label="Toggle Agent Fleet"
                          />
                        </div>
                        <p className="text-[11px]" style={{ color: "#8C8C8C" }}>
                          Standalone agent SKUs are launch-gated. Curate Pro includes content agents through entitlements.
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Seats */}
          <section>
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: "rgba(0,0,0,0.85)" }}
            >
              Team Seats
            </h2>
            <div className="p-4" style={cardStyle}>
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "rgba(0,0,0,0.85)" }}
                  >
                    Team members
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#8C8C8C" }}>
                    Per-seat pricing applies to Acquire and Hire
                  </p>
                </div>
                <div
                  className="flex items-center rounded-lg overflow-hidden border"
                  style={{ borderColor: "#D7D7D7" }}
                >
                  <button
                    onClick={() => setSeats((s) => Math.max(1, s - 1))}
                    className="px-3 py-2 hover:bg-gray-50 transition-colors"
                    aria-label="Decrease seats"
                  >
                    <Minus size={14} />
                  </button>
                  <input
                    type="number"
                    min={1}
                    max={999}
                    value={seats}
                    onChange={(e) => {
                      const v = parseInt(e.target.value, 10);
                      if (!isNaN(v) && v >= 1 && v <= 999) setSeats(v);
                    }}
                    className="w-16 text-center text-sm border-x py-2 outline-none font-medium"
                    style={{ borderColor: "#D7D7D7", color: "rgba(0,0,0,0.85)" }}
                  />
                  <button
                    onClick={() => setSeats((s) => Math.min(999, s + 1))}
                    className="px-3 py-2 hover:bg-gray-50 transition-colors"
                    aria-label="Increase seats"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ---- Right column: Summary ---- */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-6">
            <div className="p-5" style={summaryPanelStyle}>
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "rgba(0,0,0,0.85)" }}
              >
                Monthly Estimate
              </h2>

              {/* Line items */}
              <div className="flex flex-col gap-2 mb-4">
                {lineItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <span style={{ color: "#565449" }}>
                      {item.label}
                      {item.estimated && (
                        <span
                          className="text-xs ml-1"
                          style={{ color: "#8C8C8C" }}
                        >
                          (est.)
                        </span>
                      )}
                    </span>
                    <span
                      className="font-medium tabular-nums"
                      style={{ color: "rgba(0,0,0,0.85)" }}
                    >
                      {item.amount === 0 ? "Free" : fmt(item.amount)}
                    </span>
                  </div>
                ))}

                {lineItems.length <= 1 && (
                  <p className="text-xs" style={{ color: "#8C8C8C" }}>
                    Toggle apps and services to build your estimate.
                  </p>
                )}
              </div>

              {/* Divider */}
              <div
                className="border-t my-4"
                style={{ borderColor: "#D7D7D7" }}
              />

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-sm font-medium"
                  style={{ color: "#565449" }}
                >
                  Monthly estimate
                </span>
                <span
                  className="text-2xl font-bold tabular-nums"
                  style={{ color: "rgba(0,0,0,0.85)" }}
                >
                  {fmt(subtotal)}
                </span>
              </div>

              {/* CTA */}
              <a
                href={checkoutItems.length > 0 ? checkoutUrl : "/pricing"}
                className="block w-full rounded-xl py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  background: "#FEE546",
                  color: "rgba(0,0,0,0.85)",
                }}
              >
                {checkoutItems.length > 0 ? "Buy Now" : "View hosting plans"}
              </a>

              <a
                href="mailto:sales@esteemed.io"
                className="block text-center text-sm mt-3 underline underline-offset-2 transition-opacity hover:opacity-70"
                style={{ color: "#565449" }}
              >
                Talk to sales for enterprise pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
