"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Search, Bell, ShoppingCart } from "lucide-react";
import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

function readCartCount() {
  if (typeof window === "undefined") return 0;
  try {
    const parsed = JSON.parse(window.localStorage.getItem("esteemed_cart") || "[]");
    const items = Array.isArray(parsed) ? parsed : parsed.items || [];
    return items.reduce((total, item) => total + Math.max(1, Number(item.quantity) || 1), 0);
  } catch {
    return 0;
  }
}

function getInitials(name, email) {
  if (name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  }
  if (email) {
    return email[0].toUpperCase();
  }
  return "?";
}

export default function ShellTopBar() {
  const { data: session } = useSession();
  const [cartCount, setCartCount] = useState(0);

  const initials = getInitials(session?.user?.name, session?.user?.email);
  const displayName = session?.user?.name || session?.user?.email || "User";

  useEffect(() => {
    function syncCartCount() {
      setCartCount(readCartCount());
    }

    syncCartCount();
    window.addEventListener("storage", syncCartCount);
    window.addEventListener("esteemed-cart-updated", syncCartCount);

    return () => {
      window.removeEventListener("storage", syncCartCount);
      window.removeEventListener("esteemed-cart-updated", syncCartCount);
    };
  }, []);

  return (
    <header
      className="flex items-center justify-end gap-1 px-6 sticky top-0 z-40"
      style={{
        height: 56,
        background: "#FFFFFF",
        borderBottom: "1px solid #D7D7D7",
      }}
    >
      {/* Search */}
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Search"
          >
            <Search size={18} style={{ color: "#565449" }} />
          </button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Search">
          <DropdownItem key="search" textValue="Search coming soon" className="h-14">
            <p className="text-sm font-semibold" style={{ color: "rgba(0,0,0,0.85)" }}>
              Search is coming soon
            </p>
            <p className="text-xs" style={{ color: "#565449" }}>
              Command palette and workspace search will live here.
            </p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Notifications */}
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Notifications"
          >
            <Bell size={18} style={{ color: "#565449" }} />
          </button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Notifications">
          <DropdownItem key="empty" textValue="No notifications" className="h-14">
            <p className="text-sm font-semibold" style={{ color: "rgba(0,0,0,0.85)" }}>
              No notifications yet
            </p>
            <p className="text-xs" style={{ color: "#565449" }}>
              Product updates and account alerts will appear here.
            </p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Link
        href="/dashboard/cart"
        className="relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-black/5"
        aria-label={`Cart${cartCount > 0 ? `, ${cartCount} pending item${cartCount === 1 ? "" : "s"}` : ""}`}
      >
        <ShoppingCart size={18} style={{ color: "#565449" }} />
        {cartCount > 0 && (
          <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold leading-none text-ink">
            {cartCount > 9 ? "9+" : cartCount}
          </span>
        )}
      </Link>

      {/* User avatar dropdown */}
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-full ml-1 focus:outline-none"
            aria-label="User menu"
          >
            <Avatar
              name={initials}
              size="sm"
              classNames={{
                base: "w-8 h-8 text-xs font-bold cursor-pointer",
              }}
              style={{
                background: "rgba(0,0,0,0.85)",
                color: "#FFFFFF",
              }}
            />
          </button>
        </DropdownTrigger>
        <DropdownMenu aria-label="User actions">
          <DropdownItem key="profile" className="h-14 gap-2" textValue={displayName}>
            <p className="font-semibold text-sm" style={{ color: "rgba(0,0,0,0.85)" }}>
              {displayName}
            </p>
            {session?.user?.email && (
              <p className="text-xs" style={{ color: "#565449" }}>
                {session.user.email}
              </p>
            )}
          </DropdownItem>
          <DropdownItem key="settings" href="/dashboard/settings">
            Settings
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onPress={() => signOut({ callbackUrl: "/" })}
          >
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </header>
  );
}
