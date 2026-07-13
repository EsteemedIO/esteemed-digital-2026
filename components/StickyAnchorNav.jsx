"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { name: "Website Design", href: "/services/website-design" },
  { name: "Web Support", href: "/services/support" },
  { name: "Content Strategy", href: "/services/content-strategy" },
  { name: "Content Production", href: "/services/content-production" },
  { name: "Search Engine Marketing", href: "/services/search-engine-marketing" },
  { name: "AI Visibility", href: "/services/ai-visibility" },
  { name: "Talent Management", href: "/services/talent-management" },
];

export default function StickyAnchorNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-[64px] z-40 bg-white border-b border-zinc-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1 min-w-max py-0">
          <span className="text-sm font-bold text-ink whitespace-nowrap pr-4 mr-2 border-r border-zinc-200 py-3">
            Hire an Expert
          </span>
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
