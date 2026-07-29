"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  BarChart3,
  CalendarDays,
  Mail,
  Megaphone,
  MessageSquare,
  Globe,
  Plus,
  ExternalLink,
  Server,
  Headphones,
  ShoppingBag,
  Store,
  Tag,
  Users,
  Cloud,
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
  { label: "Home", href: "/products", icon: Home },
];

const siteMenuItems = [
  { label: "Dashboard", hash: "", icon: BarChart3 },
  { label: "Domain", hash: "domain", icon: Globe },
  { label: "Website", hash: "website", icon: Cloud },
  { label: "Email", hash: "email", icon: Mail },
  { label: "Commerce", hash: "commerce", icon: Store },
  { label: "Appointments", hash: "appointments", icon: CalendarDays },
  { label: "Marketing", hash: "marketing", icon: Megaphone },
  { label: "Conversations", hash: "conversations", icon: MessageSquare },
  { label: "Customers", hash: "customers", icon: Users },
  { label: "Deals", hash: "deals", icon: Tag },
  { label: "Marketplace", hash: "marketplace", icon: ShoppingBag },
];

export default function ShellNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const siteDetailMatch = pathname.match(/^\/dashboard\/sites\/([^/]+)/);
  const activeSitePath = siteDetailMatch ? `/dashboard/sites/${siteDetailMatch[1]}` : "";

  function isActive(href) {
    if (href === "/products") return pathname === "/products";
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
          background: "#F5F5F0",
          borderRight: "1px solid #D7D7D7",
        }}
      >
        {/* Brand */}
        <div className="px-5 py-5">
          <Link href="/products" className="flex items-center">
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
                } else if (key === "domain") {
                  router.push("/dashboard/domains");
                } else {
                  openNew(key);
                }
              }}
            >
              <DropdownItem
                key="domain"
                startContent={<Globe size={16} className="text-zinc-500" />}
              >
                Domain
              </DropdownItem>
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

          {activeSitePath && (
            <div className="mt-4 border-t border-zinc-300 pt-4">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Site
              </p>
              <ul className="space-y-0.5">
                {siteMenuItems.map((item) => {
                  const Icon = item.icon;
                  const href = item.hash ? `${activeSitePath}#${item.hash}` : activeSitePath;
                  return (
                    <li key={item.label}>
                      <Link
                        href={href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#565449] transition-colors hover:bg-white hover:text-ink"
                      >
                        <Icon size={18} strokeWidth={1.8} />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </nav>
      </aside>

      <NewItemModal
        isOpen={modalOpen}
        type={modalType}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
