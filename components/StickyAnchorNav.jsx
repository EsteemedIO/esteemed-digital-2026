"use client";

import SectionNav from "@/components/SectionNav";

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
  return (
    <SectionNav
      sectionLabel="Hire an Expert"
      links={serviceLinks}
    />
  );
}
