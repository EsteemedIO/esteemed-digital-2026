"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  Paintbrush,
  Cloud,
  Target,
  FileUser,
  Brain,
  Bot,
  Plug,
  BookOpen,
  Headphones,
  Sparkles,
  Layers,
  Rocket,
  Users,
  BarChart3,
  Mail,
  Megaphone,
  Calendar,
  Search,
  Shield,
  Zap,
  Database,
  Globe,
  Lock,
  Activity,
  Terminal,
  Cpu,
  Lightbulb,
  Link2,
  RefreshCw,
  Eye,
  Tag,
  Share2,
  UserCheck,
  Wrench,
  ArrowUpRight,
  ChevronLeft,
  Check,
} from "lucide-react";
import { RadioGroup, Radio } from "@heroui/react";

/* ------------------------------------------------------------------ */
/*  App data                                                           */
/* ------------------------------------------------------------------ */

const APP_DATA = {
  create: {
    name: "Create",
    sublabel: "Sites \u00b7 apps",
    price: "Included",
    priceNote: "Included with your plan",
    description:
      "Build websites and apps with AI-powered prompt-driven editing. Deploy instantly to Esteemed Cloud.",
    icon: Paintbrush,
    features: [
      {
        icon: Sparkles,
        title: "AI prompt-driven builder",
        description:
          "Describe what you want in natural language and watch it build in real time.",
      },
      {
        icon: Users,
        title: "Real-time collaboration",
        description:
          "Work with your team simultaneously on the same project with live cursors.",
      },
      {
        icon: Rocket,
        title: "Instant deployment to Cloud",
        description:
          "One-click deploy to Esteemed Cloud with SSL, CDN, and monitoring included.",
      },
      {
        icon: Layers,
        title: "Component library",
        description:
          "Hundreds of pre-built, customizable components ready to drag and drop.",
      },
    ],
    worksWith: [
      { key: "cloud", name: "Cloud", reason: "for managed hosting and deployment" },
      { key: "curate", name: "Curate", reason: "for content management" },
      { key: "intelligence", name: "Intelligence", reason: "for AI-powered editing" },
    ],
    included: [
      "Unlimited projects",
      "AI prompt builder",
      "Component library access",
      "Cloud deployment",
    ],
  },
  cloud: {
    name: "Cloud",
    sublabel: "Integrated Hosting",
    price: "From $149/mo",
    priceNote: "Free for 14 days, then from $149/mo",
    description:
      "Managed hosting with SSL, backups, monitoring, and the prompt-driven editing experience.",
    icon: Cloud,
    features: [
      {
        icon: Lock,
        title: "SSL + daily backups",
        description:
          "Automatic SSL certificates and daily backups with one-click restore.",
      },
      {
        icon: Activity,
        title: "Uptime monitoring",
        description:
          "24/7 uptime monitoring with instant alerts and automatic failover.",
      },
      {
        icon: Sparkles,
        title: "Prompt-driven editing",
        description:
          "Edit your live sites with natural language prompts, no code required.",
      },
      {
        icon: Layers,
        title: "Staging environments",
        description:
          "Preview changes in staging before pushing to production with one click.",
      },
    ],
    tiers: [
      { name: "Starter", price: 149, features: ["5 sites", "50GB storage", "100K visits/mo"] },
      { name: "Growth", price: 249, features: ["15 sites", "150GB storage", "500K visits/mo"] },
      { name: "Pro", price: 399, features: ["Unlimited sites", "500GB storage", "2M visits/mo"] },
    ],
    worksWith: [
      { key: "create", name: "Create", reason: "for AI-powered site building" },
      { key: "curate", name: "Curate", reason: "for headless CMS on Cloud" },
      { key: "connect", name: "Connect", reason: "for data source integration" },
    ],
    included: [
      "SSL certificates",
      "Daily backups",
      "CDN included",
      "99.9% uptime SLA",
    ],
  },
  acquire: {
    name: "Acquire",
    sublabel: "CRM",
    price: "$49/mo per seat",
    priceNote: "Free for 14 days, then $49/mo per seat",
    description:
      "CRM for client and talent acquisition, powered by Intelligence for AI-driven insights.",
    icon: Target,
    features: [
      {
        icon: Users,
        title: "Contact & deal management",
        description:
          "Organize contacts, companies, and deals in a unified pipeline view.",
      },
      {
        icon: BarChart3,
        title: "Pipeline visualization",
        description:
          "Drag-and-drop Kanban boards for every stage of your sales cycle.",
      },
      {
        icon: Sparkles,
        title: "AI-powered lead scoring",
        description:
          "Intelligence scores and ranks leads so you focus on what converts.",
      },
      {
        icon: Mail,
        title: "Email integration",
        description:
          "Two-way email sync with templates, sequences, and open tracking.",
      },
    ],
    worksWith: [
      { key: "intelligence", name: "Intelligence", reason: "for AI-driven lead scoring" },
      { key: "agents", name: "Agents", reason: "for automated outreach sequences" },
      { key: "hire", name: "Hire", reason: "for talent-to-client pipeline" },
    ],
    included: [
      "Unlimited contacts",
      "Pipeline management",
      "Email sync",
      "Basic reporting",
    ],
  },
  hire: {
    name: "Hire",
    sublabel: "ATS",
    price: "$49/mo per seat",
    priceNote: "Free for 14 days, then $49/mo per seat",
    description:
      "Applicant tracking that integrates with Colleagues and Intelligence for smarter hiring.",
    icon: FileUser,
    features: [
      {
        icon: Megaphone,
        title: "Job posting & distribution",
        description:
          "Post to multiple job boards simultaneously with one-click distribution.",
      },
      {
        icon: Users,
        title: "Candidate pipeline",
        description:
          "Visual pipeline with customizable stages, tags, and bulk actions.",
      },
      {
        icon: Sparkles,
        title: "AI candidate matching",
        description:
          "Intelligence matches candidates to roles based on skills, culture, and fit.",
      },
      {
        icon: Calendar,
        title: "Interview scheduling",
        description:
          "Self-serve scheduling links with calendar sync and automated reminders.",
      },
    ],
    worksWith: [
      { key: "intelligence", name: "Intelligence", reason: "for AI-powered candidate matching" },
      { key: "acquire", name: "Acquire", reason: "for talent-to-client conversion" },
      { key: "agents", name: "Agents", reason: "for automated candidate screening" },
    ],
    included: [
      "Unlimited job postings",
      "Candidate pipeline",
      "Interview scheduling",
      "Basic analytics",
    ],
  },
  intelligence: {
    name: "Intelligence",
    sublabel: "Memory \u00b7 reasoning",
    price: "$99/mo",
    priceNote: "Free for 14 days, then $99/mo",
    description:
      "The shared intelligence layer powering all Esteemed products. Memory, reasoning, and context across your workspace.",
    icon: Brain,
    features: [
      {
        icon: Database,
        title: "Cross-app memory",
        description:
          "Persistent memory that spans every Esteemed app in your workspace.",
      },
      {
        icon: Lightbulb,
        title: "Contextual reasoning",
        description:
          "AI that understands your business context and makes relevant suggestions.",
      },
      {
        icon: Link2,
        title: "Knowledge synthesis",
        description:
          "Connects dots across conversations, contacts, projects, and documents.",
      },
      {
        icon: Eye,
        title: "Predictive insights",
        description:
          "Proactive alerts and recommendations based on patterns in your data.",
      },
    ],
    worksWith: [
      { key: "acquire", name: "Acquire", reason: "for AI-driven lead scoring" },
      { key: "hire", name: "Hire", reason: "for candidate matching" },
      { key: "connect", name: "Connect", reason: "for RAG-powered retrieval" },
      { key: "agents", name: "Agents", reason: "as the reasoning engine for agents" },
    ],
    included: [
      "Cross-app memory",
      "Contextual AI",
      "10K queries/mo",
      "Knowledge graph",
    ],
  },
  agents: {
    name: "Agents",
    sublabel: "Intelligent Agents",
    price: "$129/mo",
    priceNote: "Free for 14 days, then $129/mo",
    description:
      "AI agents that execute tasks autonomously across your apps \u2014 outreach, screening, follow-ups, and workflows.",
    icon: Bot,
    features: [
      {
        icon: Cpu,
        title: "5 pre-built agents",
        description:
          "Ready-to-deploy agents for outreach, screening, scheduling, follow-ups, and reporting.",
      },
      {
        icon: Terminal,
        title: "Custom agent builder",
        description:
          "Build your own agents with natural language instructions and guardrails.",
      },
      {
        icon: Layers,
        title: "Multi-app orchestration",
        description:
          "Agents work across Acquire, Hire, and other apps in coordinated workflows.",
      },
      {
        icon: Zap,
        title: "Autonomous task execution",
        description:
          "Set goals and let agents handle the steps \u2014 with human-in-the-loop controls.",
      },
    ],
    worksWith: [
      { key: "intelligence", name: "Intelligence", reason: "as the reasoning engine" },
      { key: "acquire", name: "Acquire", reason: "for automated outreach" },
      { key: "hire", name: "Hire", reason: "for candidate screening workflows" },
    ],
    included: [
      "5 pre-built agents",
      "Custom agent builder",
      "1,000 executions/mo",
      "Audit logs",
    ],
  },
  connect: {
    name: "Connect",
    sublabel: "Retrieval",
    price: "$99/mo",
    priceNote: "Free for 14 days, then $99/mo",
    description:
      "Connect your data sources and make them searchable by AI across all Esteemed apps. RAG-powered retrieval.",
    icon: Plug,
    features: [
      {
        icon: Link2,
        title: "12+ data connectors",
        description:
          "Google Drive, Notion, Slack, Salesforce, HubSpot, and more out of the box.",
      },
      {
        icon: RefreshCw,
        title: "Real-time sync",
        description:
          "Changes in your data sources are reflected in minutes, not hours.",
      },
      {
        icon: Search,
        title: "Semantic search",
        description:
          "Search by meaning, not just keywords \u2014 powered by vector embeddings.",
      },
      {
        icon: Shield,
        title: "Access controls",
        description:
          "Fine-grained permissions ensure users only see data they are authorized to access.",
      },
    ],
    worksWith: [
      { key: "intelligence", name: "Intelligence", reason: "for RAG-powered reasoning" },
      { key: "agents", name: "Agents", reason: "for data-informed agent actions" },
      { key: "curate", name: "Curate", reason: "for content indexing" },
    ],
    included: [
      "12+ connectors",
      "Real-time sync",
      "100K documents",
      "Semantic search",
    ],
  },
  curate: {
    name: "Curate",
    sublabel: "CMS \u00b7 DAM",
    price: "$49/mo",
    priceNote: "Free for 14 days, then $49/mo",
    description:
      "AI-native content management and digital asset management on Esteemed Cloud.",
    icon: BookOpen,
    features: [
      {
        icon: Globe,
        title: "Headless CMS",
        description:
          "API-first content management that delivers to any front end or channel.",
      },
      {
        icon: Layers,
        title: "Digital asset management",
        description:
          "Centralized media library with automatic optimization and transformations.",
      },
      {
        icon: Tag,
        title: "AI content tagging",
        description:
          "Intelligence auto-tags and categorizes content for instant discoverability.",
      },
      {
        icon: Share2,
        title: "Multi-channel publishing",
        description:
          "Publish once, deliver everywhere \u2014 web, mobile, email, and social.",
      },
    ],
    worksWith: [
      { key: "cloud", name: "Cloud", reason: "for integrated hosting" },
      { key: "create", name: "Create", reason: "for visual site building" },
      { key: "intelligence", name: "Intelligence", reason: "for AI content tagging" },
    ],
    included: [
      "Unlimited content types",
      "Media library",
      "API access",
      "AI tagging",
    ],
  },
  support: {
    name: "Support",
    sublabel: "Expert Assistance",
    price: "$110/hr",
    priceNote: "Billed hourly at $110/hr",
    description:
      "Expert human help for your Esteemed apps or anything you built elsewhere. The TAL API surface connected to Colleagues.",
    icon: Headphones,
    features: [
      {
        icon: UserCheck,
        title: "Dedicated account manager",
        description:
          "A named expert who knows your stack and your business goals.",
      },
      {
        icon: Zap,
        title: "Priority response",
        description:
          "Guaranteed response times with escalation paths for critical issues.",
      },
      {
        icon: Wrench,
        title: "Custom development",
        description:
          "Hands-on development, integrations, and custom feature builds.",
      },
      {
        icon: ArrowUpRight,
        title: "Migration assistance",
        description:
          "Full-service migration from your current platform to Esteemed.",
      },
    ],
    worksWith: [
      { key: "create", name: "Create", reason: "for custom site development" },
      { key: "cloud", name: "Cloud", reason: "for infrastructure management" },
      { key: "intelligence", name: "Intelligence", reason: "for AI configuration" },
    ],
    included: [
      "Dedicated account manager",
      "Priority support",
      "Custom development",
      "Migration help",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Lucide icon map for "works with" chips                             */
/* ------------------------------------------------------------------ */

const APP_ICONS = {
  create: Paintbrush,
  cloud: Cloud,
  acquire: Target,
  hire: FileUser,
  intelligence: Brain,
  agents: Bot,
  connect: Plug,
  curate: BookOpen,
  support: Headphones,
};

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function ActivateAppPage({ params }) {
  const { app: appSlug } = use(params);
  const [selectedTier, setSelectedTier] = useState("Starter");

  const appData = APP_DATA[appSlug];

  /* Unknown app slug ------------------------------------------------ */
  if (!appData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
          style={{ border: "2px solid #D7D7D7" }}
        >
          <Search className="w-7 h-7 text-[#999]" />
        </div>
        <h1
          className="text-2xl font-semibold mb-2"
          style={{ color: "rgba(0,0,0,0.85)" }}
        >
          App not found
        </h1>
        <p className="text-sm mb-6" style={{ color: "#565449" }}>
          The app &ldquo;{appSlug}&rdquo; doesn&rsquo;t exist or isn&rsquo;t
          available for activation.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: "rgba(0,0,0,0.85)" }}
        >
          <ChevronLeft size={16} />
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const AppIcon = appData.icon;
  const currentTier = appData.tiers?.find((t) => t.name === selectedTier);
  const displayPrice = currentTier
    ? `$${currentTier.price}/mo`
    : appData.price;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back link */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 transition-colors hover:opacity-70"
        style={{ color: "#565449" }}
      >
        <ChevronLeft size={16} />
        Back to Dashboard
      </Link>

      {/* ------------------------------------------------------------ */}
      {/*  Header                                                       */}
      {/* ------------------------------------------------------------ */}
      <div className="flex items-start gap-5 mb-10">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ border: "2px solid #FEE546", background: "#FFFEF5" }}
        >
          <AppIcon className="w-7 h-7" style={{ color: "rgba(0,0,0,0.85)" }} />
        </div>
        <div>
          <h1
            className="text-3xl font-semibold tracking-tight mb-0.5"
            style={{ color: "rgba(0,0,0,0.85)" }}
          >
            Esteemed {appData.name}
          </h1>
          <p className="text-sm font-medium mb-2" style={{ color: "#999" }}>
            {appData.sublabel}
          </p>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#565449" }}>
            {appData.description}
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/*  Two-column layout                                            */}
      {/* ------------------------------------------------------------ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column — features + works with */}
        <div className="lg:col-span-2 space-y-8">
          {/* Features */}
          <section>
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: "rgba(0,0,0,0.85)" }}
            >
              What you get
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appData.features.map((feature) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl p-5 transition-shadow hover:shadow-md"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #D7D7D7",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "#FFFEF5", border: "1px solid #FEE546" }}
                    >
                      <FeatureIcon
                        className="w-5 h-5"
                        style={{ color: "rgba(0,0,0,0.85)" }}
                      />
                    </div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ color: "rgba(0,0,0,0.85)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#565449" }}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Works with */}
          <section>
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: "rgba(0,0,0,0.85)" }}
            >
              Works with
            </h2>
            <div className="space-y-3">
              {appData.worksWith.map((integration) => {
                const IntIcon = APP_ICONS[integration.key];
                return (
                  <Link
                    key={integration.key}
                    href={`/dashboard/activate/${integration.key}`}
                    className="flex items-center gap-3 rounded-2xl p-4 transition-shadow hover:shadow-md"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #D7D7D7",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ border: "1px solid #FEE546", background: "#FFFEF5" }}
                    >
                      <IntIcon
                        className="w-5 h-5"
                        style={{ color: "rgba(0,0,0,0.85)" }}
                      />
                    </div>
                    <div>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "rgba(0,0,0,0.85)" }}
                      >
                        {integration.name}
                      </span>
                      <span className="text-sm ml-1.5" style={{ color: "#565449" }}>
                        {integration.reason}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right column — pricing card */}
        <div className="lg:col-span-1">
          <div
            className="rounded-2xl p-6 sticky top-8"
            style={{
              background: "#FFFFFF",
              border: "1px solid #D7D7D7",
            }}
          >
            <h2
              className="text-lg font-semibold mb-1"
              style={{ color: "rgba(0,0,0,0.85)" }}
            >
              Pricing
            </h2>
            <p
              className="text-3xl font-bold tracking-tight mb-4"
              style={{ color: "rgba(0,0,0,0.85)" }}
            >
              {displayPrice}
            </p>

            {/* Cloud tier selector */}
            {appData.tiers && (
              <div className="mb-5">
                <RadioGroup
                  value={selectedTier}
                  onValueChange={setSelectedTier}
                  classNames={{
                    wrapper: "gap-2",
                  }}
                >
                  {appData.tiers.map((tier) => (
                    <Radio
                      key={tier.name}
                      value={tier.name}
                      classNames={{
                        base: [
                          "inline-flex m-0 items-center",
                          "cursor-pointer rounded-xl p-4 w-full max-w-full",
                          "border transition-colors",
                          selectedTier === tier.name
                            ? "border-[#FEE546] bg-[#FFFEF5]"
                            : "border-[#D7D7D7] bg-white hover:border-[#FEE546]",
                        ].join(" "),
                        label: "w-full",
                      }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "rgba(0,0,0,0.85)" }}
                        >
                          {tier.name}
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "rgba(0,0,0,0.85)" }}
                        >
                          ${tier.price}/mo
                        </span>
                      </div>
                      <div className="mt-1.5">
                        {tier.features.map((f) => (
                          <span
                            key={f}
                            className="text-xs mr-3"
                            style={{ color: "#565449" }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </Radio>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Included list */}
            <div className="mb-5">
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "#999" }}
              >
                Included
              </p>
              <ul className="space-y-2">
                {appData.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#565449" }}
                  >
                    <Check
                      size={15}
                      className="flex-shrink-0"
                      style={{ color: "rgba(0,0,0,0.85)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* See full pricing link */}
            <Link
              href="/dashboard/calculator"
              className="inline-flex items-center gap-1 text-sm font-medium mb-6 transition-colors hover:opacity-70"
              style={{ color: "rgba(0,0,0,0.85)" }}
            >
              See full pricing
              <ArrowUpRight size={14} />
            </Link>

            {/* Activation CTA */}
            <button
              type="button"
              className="w-full rounded-full py-3 text-sm font-semibold transition-opacity hover:opacity-90 active:opacity-80 mb-2"
              style={{
                background: "#FEE546",
                color: "rgba(0,0,0,0.85)",
              }}
              onClick={() => {
                alert(
                  `${appData.name} activation started. This will connect to the activation API once available.`
                );
              }}
            >
              Activate {appData.name}
            </button>
            <p className="text-xs text-center mb-4" style={{ color: "#999" }}>
              {appData.priceNote}
            </p>

            {/* Talk to sales */}
            <button
              type="button"
              className="w-full rounded-full py-3 text-sm font-medium transition-colors hover:bg-neutral-100"
              style={{
                background: "transparent",
                color: "rgba(0,0,0,0.85)",
                border: "1px solid #D7D7D7",
              }}
              onClick={() => {
                window.location.href = "mailto:sales@esteemed.io?subject=Enterprise inquiry - " + appData.name;
              }}
            >
              Talk to sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
