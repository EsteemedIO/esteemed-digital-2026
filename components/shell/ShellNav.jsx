"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Globe,
  Sparkles,
  Settings,
  HelpCircle,
  Plus,
  ExternalLink,
  Server,
  Headphones,
  Users,
} from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import NewItemModal from "@/components/shell/NewItemModal";

const navItems = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Sites", href: "/dashboard/sites", icon: Globe },
];

const footerItems = [
  { label: "Plans & features", href: "/dashboard/plans", icon: Sparkles },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Support", href: "/dashboard/support", icon: HelpCircle },
];

export default function ShellNav() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  function isActive(href) {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  }

  function openNew(type) {
    setModalType(type);
    setModalOpen(true);
  }

  return (
    <>
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
        <div className="px-5 py-5">
          <Link href="/dashboard" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/esteemed-logo.svg" alt="Esteemed" className="h-7 w-auto" />
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
            <DropdownMenu
              aria-label="Create new"
              onAction={(key) => {
                if (key === "hire") {
                  window.open("https://colleagues.esteemed.io/jobs/new", "_blank");
                } else {
                  openNew(key);
                }
              }}
            >
              <DropdownItem
                key="website"
                startContent={<Globe size={16} className="text-zinc-500" />}
              >
                Website
              </DropdownItem>
              <DropdownItem
                key="vps"
                startContent={<Server size={16} className="text-zinc-500" />}
              >
                VPS
              </DropdownItem>
              <DropdownItem
                key="support"
                startContent={<Headphones size={16} className="text-zinc-500" />}
              >
                Support Request
              </DropdownItem>
              <DropdownItem
                key="hire"
                startContent={<Users size={16} className="text-zinc-500" />}
                endContent={<ExternalLink size={14} className="text-zinc-400" />}
              >
                Hire (Post a Job)
              </DropdownItem>
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

      <NewItemModal
        isOpen={modalOpen}
        type={modalType}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
