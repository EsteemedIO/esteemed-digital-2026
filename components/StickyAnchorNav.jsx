"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { name: "Website Design", href: "/hire-experts/website-design" },
  { name: "Web Support", href: "/hire-experts/web-support" },
  { name: "Content Strategy", href: "/hire-experts/content-strategy" },
  { name: "Content Production", href: "/hire-experts/content-production" },
  { name: "Search Engine Marketing", href: "/hire-experts/search-engine-marketing" },
  { name: "AI Visibility", href: "/hire-experts/ai-visibility" },
  { name: "Talent Management", href: "/hire-experts/talent-management" },
];

export default function StickyAnchorNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-[64px] z-40 bg-white border-b border-zinc-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1 min-w-max py-0">
          <Link
            href="/hire-experts"
            className="text-sm font-bold text-ink whitespace-nowrap pr-4 mr-2 border-r border-zinc-200 py-3 hover:underline"
          >
            Hire an Expert
          </Link>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                pathname === link.href
                  ? "border-ink text-ink font-bold"
                  : "border-transparent text-zinc-500 hover:text-ink hover:border-zinc-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
