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
  Link,
  FileText,
  Headphones,
  Mic,
  Share2,
  PenLine,
  Sparkles,
  Calculator,
  Minus,
  Plus,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Pricing data                                                       */
/* ------------------------------------------------------------------ */

/* Pricing from Stripe (live products) + Esteemed Digital Pricing Matrix v1 */

const CREATE_TIERS = [
  { label: "Core", price: 39, credits: "100 credits/mo", stripeId: "prod_UQwEwrbhIisLeS" },
  { label: "Pro", price: 79, credits: "300 credits/mo", stripeId: "prod_UQwEE1YiHZNjS7" },
  { label: "Business", price: 169, credits: "800 credits/mo", stripeId: "prod_UQwEP83DYTWwyN" },
];

const CLOUD_TIERS = [
  { label: "Starter", price: 149 },
  { label: "Growth", price: 249 },
  { label: "Pro", price: 399 },
];

/* Intelligence — pricing spec: flat per-tenant add-on */
const INTELLIGENCE_TIERS = [
  { label: "Monthly", price: 199 },
  { label: "Annual", price: 166, note: "$1,990/yr (2 months free)" },
];

const CONNECT_TIERS = [
  { label: "Builder", price: 15, perSeat: true },
  { label: "Pro", price: 29, perSeat: true },
  { label: "Scale", price: 49, perSeat: true },
];

/* Per-seat products — from esteemed-pricing-spec.md */
const ACQUIRE_TIERS = [
  { label: "Free", price: 0 },
  { label: "Starter", price: 149, perSeat: true },
  { label: "Pro", price: 249, perSeat: true },
];

const HIRE_TIERS = [
  { label: "Free", price: 0 },
  { label: "Starter", price: 149, perSeat: true },
  { label: "Pro", price: 249, perSeat: true },
];

/* Per-workspace product — Curate */
const CURATE_TIERS = [
  { label: "Starter", price: 49 },
  { label: "Pro", price: 299 },
];

// Agents are add-ons for Curate and Acquire
const CURATE_AGENTS = [
  { id: "publicist", name: "Publicist", price: 129 },
  { id: "writer", name: "Writer", price: 149 },
];
const ACQUIRE_AGENTS = [
  { id: "marketer", name: "Marketer", price: 199 },
  { id: "recruiter", name: "Recruiter", price: 199 },
];
const ALL_AGENTS = [...CURATE_AGENTS, ...ACQUIRE_AGENTS];
const AGENT_FLEET_PRICE = 599;
const AGENT_FLEET_ALACARTE = 676;
const AGENT_FLEET_SAVINGS = AGENT_FLEET_ALACARTE - AGENT_FLEET_PRICE; // 77

const PLATFORM_APPS = [
  {
    id: "create",
    name: "Create",
    sublabel: "Sites \u00b7 apps",
    icon: Globe,
    price: null,
    included: false,
    costLabel: "$39\u2013$169/mo",
    tiered: true,
    tierKey: "create",
    stripeId: "prod_UQwEwrbhIisLeS",
  },
  {
    id: "cloud",
    name: "Cloud",
    sublabel: "Integrated Hosting",
    icon: Cloud,
    price: null,
    included: false,
    costLabel: "$149\u2013$399/mo",
    tiered: true,
    tierKey: "cloud",
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
    costLabel: "$129\u2013$199/mo each",
    hasAgentPicker: true,
  },
  {
    id: "connect",
    name: "Connect",
    sublabel: "Retrieval",
    icon: Link,
    price: null,
    included: false,
    costLabel: "$15\u2013$49/user/mo",
    tiered: true,
    tierKey: "connect",
    perSeat: true,
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
  {
    id: "support",
    name: "Support",
    sublabel: "Expert Assistance",
    icon: Headphones,
    price: 110,
    included: false,
    costLabel: "$110/hr",
    hourly: true,
  },
];

const AI_SERVICES = [
  {
    id: "voice-crm",
    name: "Voice CRM Auto-Reply",
    icon: Mic,
    price: 99,
    desc: "Powered by Esteemed Intelligence",
  },
  {
    id: "social-posting",
    name: "AI Social Posting",
    icon: Share2,
    price: 129,
    desc: "Powered by Esteemed Intelligence",
  },
  {
    id: "blog-voice",
    name: "Blog-in-Your-Voice",
    icon: PenLine,
    price: 149,
    desc: "Powered by Esteemed Intelligence",
  },
];

const AI_BUNDLE_PRICE = 329;
const AI_INDIVIDUAL_TOTAL = 99 + 129 + 149; // 377
const AI_BUNDLE_SAVINGS = AI_INDIVIDUAL_TOTAL - AI_BUNDLE_PRICE; // 48

const TIER_OPTIONS = {
  create: CREATE_TIERS,
  cloud: CLOUD_TIERS,
  acquire: ACQUIRE_TIERS,
  hire: HIRE_TIERS,
  intelligence: INTELLIGENCE_TIERS,
  connect: CONNECT_TIERS,
  curate: CURATE_TIERS,
};

const SUPPORT_ESTIMATED_HOURS = 10;

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
  const [tierSelections, setTierSelections] = useState({ create: 0, cloud: 0, acquire: 0, hire: 0, intelligence: 0, connect: 0, curate: 0 });
  const [seats, setSeats] = useState(1);

  /* ---- AI service toggles ---- */
  const [activeServices, setActiveServices] = useState({});
  const [aiBundle, setAiBundle] = useState(false);

  /* ---- agent toggles (add-ons for Curate/Acquire) ---- */
  const [activeAgents, setActiveAgents] = useState({});
  const [agentFleetBundle, setAgentFleetBundle] = useState(false);

  /* ---- support hours ---- */
  const [supportHours, setSupportHours] = useState(SUPPORT_ESTIMATED_HOURS);

  /* ---- toggle helpers ---- */
  const toggleApp = useCallback((id) => {
    setActiveApps((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleService = useCallback((id) => {
    setActiveServices((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleAgent = useCallback((id) => {
    setActiveAgents((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const allAgentsOn = ALL_AGENTS.every((a) => activeAgents[a.id]);
  const effectiveFleet = agentFleetBundle || allAgentsOn;

  const setTier = useCallback((tierKey, idx) => {
    setTierSelections((prev) => ({ ...prev, [tierKey]: idx }));
  }, []);

  /* Auto-bundle: if all 3 individual AI services are on, flip the bundle on */
  const allThreeServicesOn =
    activeServices["voice-crm"] &&
    activeServices["social-posting"] &&
    activeServices["blog-voice"];

  const effectiveBundle = aiBundle || allThreeServicesOn;

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
        items.push({ label, amount });
      } else if (app.hourly) {
        const est = supportHours * app.price;
        items.push({
          label: `Support (~${supportHours} hrs \u00d7 ${fmt(app.price)}/hr)`,
          amount: est,
          estimated: true,
        });
      } else if (app.perSeat) {
        items.push({
          label: `${app.name} (\u00d7${seats} seat${seats !== 1 ? "s" : ""})`,
          amount: app.price * seats,
        });
      } else {
        items.push({ label: app.name, amount: app.price });
      }
    });

    // AI Services — powered by Esteemed Intelligence
    if (effectiveBundle) {
      items.push({
        label: `Intelligence AI Suite (save ${fmt(AI_BUNDLE_SAVINGS)})`,
        amount: AI_BUNDLE_PRICE,
      });
    } else {
      AI_SERVICES.forEach((svc) => {
        if (activeServices[svc.id]) {
          items.push({ label: svc.name, amount: svc.price });
        }
      });
    }

    // Agents (add-ons for Curate/Acquire)
    if (activeApps.agents) {
      if (effectiveFleet) {
        items.push({
          label: `Agent Fleet (save ${fmt(AGENT_FLEET_SAVINGS)})`,
          amount: AGENT_FLEET_PRICE,
        });
      } else {
        ALL_AGENTS.forEach((agent) => {
          if (activeAgents[agent.id]) {
            items.push({ label: `${agent.name} Agent`, amount: agent.price });
          }
        });
      }
    }

    return items;
  }, [activeApps, tierSelections, seats, activeServices, effectiveBundle, activeAgents, effectiveFleet, supportHours]);

  const subtotal = useMemo(
    () => lineItems.reduce((sum, li) => sum + li.amount, 0),
    [lineItems]
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
                          Curate add-ons
                        </p>
                        {CURATE_AGENTS.map((agent) => (
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
                        <p className="text-xs font-medium mt-2" style={{ color: "#565449" }}>
                          Acquire add-ons
                        </p>
                        {ACQUIRE_AGENTS.map((agent) => (
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
                            <span style={{ color: "#16a34a" }}>save {fmt(AGENT_FLEET_SAVINGS)}</span>
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
                      </div>
                    )}

                    {/* Support hours input */}
                    {app.hourly && isActive && (
                      <div className="flex items-center gap-2 mt-3">
                        <span
                          className="text-xs"
                          style={{ color: "#565449" }}
                        >
                          Est. hours
                        </span>
                        <div
                          className="flex items-center rounded-lg overflow-hidden border"
                          style={{ borderColor: "#D7D7D7" }}
                        >
                          <button
                            onClick={() =>
                              setSupportHours((h) => Math.max(1, h - 1))
                            }
                            className="px-2 py-1 hover:bg-gray-50"
                            aria-label="Decrease hours"
                          >
                            <Minus size={12} />
                          </button>
                          <input
                            type="number"
                            min={1}
                            max={200}
                            value={supportHours}
                            onChange={(e) => {
                              const v = parseInt(e.target.value, 10);
                              if (!isNaN(v) && v >= 1 && v <= 200)
                                setSupportHours(v);
                            }}
                            className="w-12 text-center text-xs border-x py-1 outline-none"
                            style={{ borderColor: "#D7D7D7" }}
                          />
                          <button
                            onClick={() =>
                              setSupportHours((h) => Math.min(200, h + 1))
                            }
                            className="px-2 py-1 hover:bg-gray-50"
                            aria-label="Increase hours"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* AI Services */}
          <section>
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: "rgba(0,0,0,0.85)" }}
            >
              AI Services — Powered by Esteemed Intelligence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {AI_SERVICES.map((svc) => {
                const Icon = svc.icon;
                const isActive = !!activeServices[svc.id];

                return (
                  <div
                    key={svc.id}
                    className="flex items-start justify-between p-4"
                    style={cardStyle}
                  >
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
                          {svc.name}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "#565449" }}
                        >
                          {fmt(svc.price)}/mo
                        </p>
                      </div>
                    </div>
                    <Switch
                      size="sm"
                      isSelected={isActive}
                      onValueChange={() => toggleService(svc.id)}
                      classNames={{
                        wrapper: isActive
                          ? "!bg-[#FEE546] group-data-[selected=true]:!bg-[#FEE546]"
                          : "",
                        thumb: "bg-white",
                      }}
                      aria-label={`Toggle ${svc.name}`}
                    />
                  </div>
                );
              })}

              {/* Intelligence AI Suite Bundle */}
              <div
                className="flex items-start justify-between p-4"
                style={{
                  ...cardStyle,
                  border: effectiveBundle
                    ? "2px solid #FEE546"
                    : "1px solid #D7D7D7",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: effectiveBundle ? "#FEE546" : "#F0F0ED",
                    }}
                  >
                    <Sparkles
                      size={18}
                      style={{
                        color: effectiveBundle
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
                      Intelligence AI Suite
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#565449" }}
                    >
                      {fmt(AI_BUNDLE_PRICE)}/mo{" "}
                      <span
                        className="font-medium"
                        style={{ color: "#16a34a" }}
                      >
                        save {fmt(AI_BUNDLE_SAVINGS)}
                      </span>
                    </p>
                  </div>
                </div>
                <Switch
                  size="sm"
                  isSelected={effectiveBundle}
                  onValueChange={(val) => {
                    setAiBundle(val);
                    if (val) {
                      setActiveServices((prev) => ({
                        ...prev,
                        "voice-crm": true,
                        "social-posting": true,
                        "blog-voice": true,
                      }));
                    } else {
                      setActiveServices((prev) => ({
                        ...prev,
                        "voice-crm": false,
                        "social-posting": false,
                        "blog-voice": false,
                      }));
                    }
                  }}
                  classNames={{
                    wrapper: effectiveBundle
                      ? "!bg-[#FEE546] group-data-[selected=true]:!bg-[#FEE546]"
                      : "",
                    thumb: "bg-white",
                  }}
                  aria-label="Toggle Intelligence AI Suite"
                />
              </div>
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
              <button
                className="w-full py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  background: "#FEE546",
                  color: "rgba(0,0,0,0.85)",
                }}
              >
                Update plan
              </button>

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
