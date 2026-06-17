"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  MessageSquare,
  Calendar,
  FolderKanban,
  Workflow,
  Bot,
  Database,
  BarChart3,
  Sparkles,
  Settings,
  HelpCircle,
  Plus,
  Star,
  User,
  CalendarPlus,
  Contact,
  Building2,
} from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

const navItems = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Conversations", href: "/dashboard/conversations", icon: MessageSquare },
  { label: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { label: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { label: "Workflows", href: "/dashboard/workflows", icon: Workflow },
  { label: "Agents", href: "/dashboard/agents", icon: Bot },
  { label: "Sources", href: "/dashboard/sources", icon: Database },
  { label: "Insights", href: "/dashboard/insights", icon: BarChart3 },
];

const footerItems = [
  { label: "Plans & features", href: "/dashboard/plans", icon: Sparkles },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Support", href: "/dashboard/support", icon: HelpCircle },
];

const newMenuItems = [
  { key: "candidate", label: "Candidate", icon: User },
  { key: "event", label: "Event", icon: CalendarPlus },
  { key: "contact", label: "Contact", icon: Contact },
  { key: "company", label: "Company", icon: Building2 },
];

export default function ShellNav() {
  const pathname = usePathname();

  function isActive(href) {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  }

  return (
    <aside
      className="flex flex-col h-screen sticky top-0"
      style={{
        width: 248,
        minWidth: 248,
        background: "#FFFFFF",
        borderRight: "1px solid #D7D7D7",
      }}
    >
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-5 py-5">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <Star
            className="flex-shrink-0"
            size={22}
            fill="#FEE546"
            stroke="#FEE546"
          />
          <span
            className="text-[17px] font-semibold tracking-tight"
            style={{ color: "rgba(0,0,0,0.85)" }}
          >
            esteemed
          </span>
        </Link>
      </div>

      {/* New button */}
      <div className="px-3 mb-2">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <Button
              className="w-full font-semibold text-sm"
              style={{
                background: "#FEE546",
                color: "rgba(0,0,0,0.85)",
                borderRadius: 9999,
                height: 36,
              }}
              startContent={<Plus size={16} strokeWidth={2.5} />}
            >
              New
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Create new">
            {newMenuItems.map((item) => (
              <DropdownItem
                key={item.key}
                startContent={<item.icon size={16} className="text-[#565449]" />}
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Main nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-2">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors"
                  style={{
                    background: active ? "rgba(0,0,0,0.05)" : "transparent",
                    fontWeight: active ? 600 : 400,
                    color: active ? "rgba(0,0,0,0.85)" : "#565449",
                  }}
                >
                  <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer nav */}
      <div className="px-3 py-3 border-t" style={{ borderColor: "#D7D7D7" }}>
        <ul className="space-y-0.5">
          {footerItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors"
                  style={{
                    background: active ? "rgba(0,0,0,0.05)" : "transparent",
                    fontWeight: active ? 600 : 400,
                    color: active ? "rgba(0,0,0,0.85)" : "#565449",
                  }}
                >
                  <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
