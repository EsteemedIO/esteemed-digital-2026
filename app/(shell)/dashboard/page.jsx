"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Brush,
  Cloud,
  Target,
  Briefcase,
  Brain,
  Bot,
  Link as LinkIcon,
  LayoutGrid,
  Headphones,
  Calculator,
  Settings,
  BookOpen,
  ExternalLink,
  MessageSquare,
  Users,
} from "lucide-react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

const apps = [
  { name: "Create", sublabel: "Esteemed Create", icon: Brush, status: "active", url: "https://create.esteemed.io" },
  { name: "Cloud", sublabel: "Esteemed Cloud", icon: Cloud, status: "active", url: "https://cloud.esteemed.io" },
  { name: "Acquire", sublabel: "Esteemed Acquire", icon: Target, status: "available", slug: "acquire" },
  { name: "Hire", sublabel: "Esteemed Hire", icon: Briefcase, status: "available", slug: "hire" },
  { name: "Intelligence", sublabel: "Esteemed Intelligence", icon: Brain, status: "available", slug: "intelligence" },
  { name: "Agents", sublabel: "Esteemed Agents", icon: Bot, status: "available", slug: "agents" },
  { name: "Connect", sublabel: "Esteemed Connect", icon: LinkIcon, status: "available", slug: "connect" },
  { name: "Curate", sublabel: "Esteemed Curate", icon: LayoutGrid, status: "available", slug: "curate" },
  { name: "Support", sublabel: "Esteemed Support", icon: Headphones, status: "available", slug: "support" },
];

const quickLinks = [
  { label: "Calculator", description: "Estimate your monthly cost", href: "/dashboard/calculator", icon: Calculator },
  { label: "Settings", description: "Manage your account", href: "/dashboard/settings", icon: Settings },
  { label: "Documentation", description: "Help and guides", href: "https://docs.esteemed.io", icon: BookOpen, external: true },
];

export default function DashboardPage() {
  const { data: session, status } = useSession();

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

  const firstName =
    session?.user?.name?.split(" ")[0] ||
    session?.user?.email?.split("@")[0] ||
    "there";

  const greeting = getGreeting();

  return (
    <div>
      {/* Header */}
      <h1 className="text-es-3xl font-es-semibold tracking-es-tight text-es-fg-1 mb-1">
        {greeting}, {firstName}
      </h1>
      <p className="text-es-base text-es-fg-2 mb-8">
        Here is what is happening across your workspace.
      </p>

      {/* Your Apps */}
      <h2 className="text-es-lg font-es-semibold text-es-fg-1 mb-4">Your Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-es-4">
        {apps.map((app) => {
          const Icon = app.icon;
          const isActive = app.status === "active";

          return (
            <div
              key={app.name}
              className="bg-es-surface border border-es-border rounded-es-lg p-es-5 flex flex-col gap-es-4 transition-shadow duration-es-base ease-es-out hover:shadow-es-md"
            >
              {/* Top row: icon + status */}
              <div className="flex items-start justify-between">
                <div
                  className="flex items-center justify-center rounded-es-sm"
                  style={{
                    width: 48,
                    height: 48,
                    border: "2px solid #FEE546",
                  }}
                >
                  <Icon size={24} className="text-es-fg-1" strokeWidth={1.5} />
                </div>
                <div className="flex items-center gap-es-2">
                  <span
                    className="inline-block rounded-full"
                    style={{
                      width: 8,
                      height: 8,
                      backgroundColor: isActive ? "#07BC0C" : "#B8B8B8",
                    }}
                  />
                  <span className="text-es-sm text-es-fg-2">
                    {isActive ? "Active" : "Available"}
                  </span>
                </div>
              </div>

              {/* Name + sublabel */}
              <div>
                <p className="text-es-base font-es-semibold text-es-fg-1">{app.name}</p>
                <p className="text-es-sm text-es-fg-3">{app.sublabel}</p>
              </div>

              {/* Action button */}
              {isActive ? (
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-es-2 rounded-es-sm border border-es-border px-es-4 py-es-2 text-es-sm font-es-medium text-es-fg-1 bg-es-surface transition-colors duration-es-fast hover:bg-es-surface-alt"
                >
                  Manage
                  <ExternalLink size={14} />
                </a>
              ) : (
                <Link
                  href={`/dashboard/activate/${app.slug}`}
                  className="mt-auto inline-flex items-center justify-center rounded-es-sm bg-es-yellow px-es-4 py-es-2 text-es-sm font-es-medium text-es-fg-on-yellow transition-colors duration-es-fast hover:bg-es-yellow-hover"
                >
                  Activate
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Links */}
      <h2 className="text-es-lg font-es-semibold text-es-fg-1 mt-10 mb-4">Quick Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-es-4">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          const Wrapper = link.external ? "a" : Link;
          const extraProps = link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Wrapper
              key={link.label}
              href={link.href}
              {...extraProps}
              className="flex items-center gap-es-4 bg-es-surface border border-es-border rounded-es-lg p-es-5 transition-shadow duration-es-base ease-es-out hover:shadow-es-md"
            >
              <div className="flex items-center justify-center rounded-es-sm bg-es-surface-alt" style={{ width: 40, height: 40 }}>
                <Icon size={20} className="text-es-fg-2" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-es-base font-es-medium text-es-fg-1">{link.label}</p>
                <p className="text-es-sm text-es-fg-3">{link.description}</p>
              </div>
              {link.external && <ExternalLink size={14} className="ml-auto text-es-fg-3" />}
            </Wrapper>
          );
        })}
      </div>

      {/* External Apps */}
      <h2 className="text-es-lg font-es-semibold text-es-fg-1 mt-10 mb-4">External Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-es-4">
        <a
          href="https://hcmgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-es-surface border border-es-border rounded-es-lg p-es-5 transition-shadow duration-es-base ease-es-out hover:shadow-es-md"
        >
          <div className="flex items-center gap-es-4">
            <div className="flex items-center justify-center rounded-es-sm bg-es-surface-alt" style={{ width: 40, height: 40 }}>
              <MessageSquare size={20} className="text-es-fg-2" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-es-base font-es-medium text-es-fg-1">HCMGPT, by Esteemed</p>
              <p className="text-es-sm text-es-fg-3">Open HCMGPT</p>
            </div>
          </div>
          <ExternalLink size={16} className="text-es-fg-3" />
        </a>
        <a
          href="https://colleagues.esteemed.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-es-surface border border-es-border rounded-es-lg p-es-5 transition-shadow duration-es-base ease-es-out hover:shadow-es-md"
        >
          <div className="flex items-center gap-es-4">
            <div className="flex items-center justify-center rounded-es-sm bg-es-surface-alt" style={{ width: 40, height: 40 }}>
              <Users size={20} className="text-es-fg-2" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-es-base font-es-medium text-es-fg-1">Colleagues, by Esteemed</p>
              <p className="text-es-sm text-es-fg-3">Open Colleagues</p>
            </div>
          </div>
          <ExternalLink size={16} className="text-es-fg-3" />
        </a>
      </div>
    </div>
  );
}
