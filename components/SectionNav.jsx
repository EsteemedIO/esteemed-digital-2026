"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

/**
 * GoDaddy-style secondary navigation bar.
 *
 * Desktop: horizontal sticky bar with tab-style links.
 * Mobile: collapsible dropdown with "All {section} Options" header + CTA.
 *
 * Props:
 *  - sectionLabel  — e.g. "Hosting", "Hire an Expert"
 *  - sectionHref   — optional link for the section label (omit for title-only)
 *  - links         — [{ name, href }]
 *  - ctaLabel      — optional CTA button text (e.g. "See Plans")
 *  - ctaHref       — optional CTA button href
 */
export default function SectionNav({ sectionLabel, sectionHref, links, ctaLabel, ctaHref }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const LabelTag = sectionHref ? Link : "span";
  const labelProps = sectionHref
    ? { href: sectionHref, className: `text-sm font-bold text-ink whitespace-nowrap pr-4 mr-2 border-r border-zinc-200 py-3 hover:underline ${pathname === sectionHref ? "underline" : ""}` }
    : { className: "text-sm font-bold text-ink whitespace-nowrap pr-4 mr-2 border-r border-zinc-200 py-3" };

  return (
    <div className="sticky top-[64px] z-40 bg-white border-b border-zinc-200 shadow-sm">
      {/* Desktop */}
      <nav className="hidden md:block max-w-6xl mx-auto px-6 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1 min-w-max py-0">
          <LabelTag {...labelProps}>
            {sectionLabel}
          </LabelTag>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 text-sm font-medium whitespace-nowrap border-b-[3px] transition-colors ${
                pathname === link.href
                  ? "border-accent text-ink font-bold"
                  : "border-transparent text-zinc-500 hover:text-ink hover:border-zinc-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="ml-auto text-sm font-bold text-white bg-ink px-5 py-2 rounded-full hover:bg-zinc-800 transition-colors whitespace-nowrap"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2"
          >
            <ChevronDown
              className={`w-5 h-5 text-ink transition-transform ${open ? "rotate-180" : ""}`}
              strokeWidth={2.5}
            />
            <div className="text-left">
              <span className="block text-xs text-zinc-500 leading-tight">
                All {sectionLabel} Options
              </span>
              <span className="block text-sm font-bold text-ink leading-tight">
                {sectionLabel}
              </span>
            </div>
          </button>
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="text-sm font-bold text-white bg-ink px-5 py-2 rounded-full hover:bg-zinc-800 transition-colors"
            >
              {ctaLabel}
            </Link>
          )}
        </div>

        {open && (
          <div className="border-t border-zinc-200 px-5 pb-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm border-b border-zinc-100 last:border-b-0 ${
                  pathname === link.href
                    ? "font-bold text-ink"
                    : "text-zinc-700 hover:text-ink"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
