"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Squeeze as Hamburger } from "hamburger-react";
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import ProductIcon from "@/components/ProductIcon";

const websitesGroup = [
  { key: "website-design", name: "Website Design", href: "/services/website-design" },
  { key: "create", name: "AI Website Builder", href: "/products/create" },
  { key: "cloud", name: "Website Hosting", href: "/products/cloud" },
  { key: "ecommerce", name: "Ecommerce", href: "/services/ecommerce" },
  { key: "blogs", name: "Blogs", href: "/services/blogs" },
  { key: "seo", name: "SEO", href: "/services/seo" },
];

const businessToolsGroup = [
  { key: "business-email", name: "Business Email", href: "/services/business-email" },
  { key: "curate", name: "Content Management", href: "/products/curate" },
  { key: "acquire", name: "Customer Relationship Management", href: "/products/acquire" },
  { key: "hire", name: "Applicant Tracking", href: "/products/hire" },
  { key: "intelligence", name: "Business Intelligence + Memory", href: "/products/intelligence" },
  { key: "hcmgpt", name: "Human Capital Intelligence", href: "https://hcmgpt.com", external: true },
  { key: "agents", name: "AI Agents", href: "/products/agents" },
];

const servicesGroup = [
  { key: "hire-expert", name: "Hire an Expert", href: "/services/hire-an-expert" },
  { key: "web-support", name: "Web Support Plans", href: "/services/support" },
  { key: "talent-management", name: "Talent Management", href: "/services/talent-management" },
  { key: "content-strategy", name: "Content Strategy", href: "/services/content-strategy" },
  { key: "content-production", name: "Content Production", href: "/services/content-production" },
  { key: "sem", name: "Search Engine Marketing", href: "/services/search-engine-marketing" },
  { key: "ai-visibility", name: "AI Visibility", href: "/services/ai-visibility" },
];

const solutionsUseCases = [
  { key: "launch-marketing", name: "Launch a marketing site", href: "/solutions/launch-marketing-site" },
  { key: "build-internal", name: "Build an internal tool", href: "/solutions/build-internal-tool" },
  { key: "hire-talent", name: "Hire technical talent", href: "/solutions/hire-technical-talent" },
  { key: "modernize-legacy", name: "Modernize a legacy site", href: "/solutions/modernize-legacy-site" },
];

const solutionsRoles = [
  { key: "marketing-leaders", name: "Marketing leaders", href: "/solutions/marketing-leaders" },
  { key: "founders", name: "Founders", href: "/solutions/founders" },
  { key: "it-directors", name: "IT directors", href: "/solutions/it-directors" },
  { key: "hr-teams", name: "HR teams", href: "/solutions/hr-teams" },
];

const solutionsSegments = [
  { key: "startups", name: "Startups", href: "/solutions/startups" },
  { key: "small-business", name: "Small Business", href: "/solutions/small-business" },
  { key: "mid-market", name: "Mid-market", href: "/solutions/mid-market" },
  { key: "enterprise", name: "Enterprise", href: "/solutions/enterprise" },
  { key: "nonprofits", name: "Nonprofits", href: "/solutions/nonprofits" },
  { key: "higher-ed", name: "Higher Ed", href: "/solutions/higher-ed" },
];

const solutionsIndustries = [
  { key: "consumer-hospitality", name: "Consumer & Hospitality", href: "/solutions/industries/consumer-and-hospitality" },
  { key: "construction", name: "Construction", href: "/solutions/industries/construction" },
  { key: "financial-services", name: "Financial Services", href: "/solutions/industries/financial-services" },
  { key: "gov-edu-nonprofit", name: "Government, Education & Non-profit", href: "/solutions/industries/government-education-and-non-profit" },
  { key: "healthcare", name: "Healthcare & Life Sciences", href: "/solutions/industries/healthcare-and-life-sciences" },
  { key: "professional-services", name: "Professional & Business Services", href: "/solutions/industries/professional-and-business-services" },
  { key: "tech-media", name: "Technology & Media", href: "/solutions/industries/technology-and-media" },
];

const resourceItems = [
  { key: "resource-center", name: "Business Resource Center", href: "/resources" },
  { key: "career-catalyst", name: "Career Catalyst Blog", href: "/blog/career-catalyst" },
  { key: "newsroom", name: "Newsroom", href: "/newsroom" },
  { key: "documentation", name: "Documentation", href: "https://help.esteemed.io", external: true },
];

const communityItems = [
  { key: "events", name: "Events", href: "/resources/events" },
  { key: "discord", name: "Discord", href: "https://discord.gg/esteemed", external: true },
];

const resourceFeatured = [
  { key: "agency-program", name: "Agency Program", href: "/program/agencies" },
  { key: "partner", name: "Become a Partner", href: "/partners/partner-registration" },
];

const mobileSections = [
  {
    label: "Products & Services",
    subgroups: [
      { heading: "Websites", items: websitesGroup },
      { heading: "Business Tools", items: businessToolsGroup },
      { heading: "Services", items: servicesGroup },
    ],
  },
  {
    label: "Solutions",
    subgroups: [
      { heading: "Use Cases", items: solutionsUseCases },
      { heading: "Roles", items: solutionsRoles },
      { heading: "Segments", items: solutionsSegments },
      { heading: "Industries Served", items: solutionsIndustries },
    ],
  },
  {
    label: "Resources",
    subgroups: [
      { heading: "Resources", items: resourceItems },
      { heading: "Community", items: communityItems },
    ],
  },
];

/* Blue circle arrow — matches live site: w-5 h-5 bg-blue-200 rounded-full */
function BlueArrow() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full flex-shrink-0">
      <ArrowRightIcon className="w-3 h-3 text-[#282828] stroke-[3]" />
    </span>
  );
}

/* Section heading — matches live: !font-bold flex gap-2 mb-2 pb-2 border-b items-center text-sm md:text-lg */
function SectionHeading({ children, href }) {
  const Tag = href ? Link : "div";
  return (
    <Tag
      {...(href ? { href } : {})}
      className="font-bold flex gap-2 mb-2 pb-2 border-b border-zinc-200 items-center text-sm md:text-lg text-ink mt-0 hover:underline"
    >
      {children}
      <BlueArrow />
    </Tag>
  );
}

/* Menu link */
function MegaMenuLink({ href, children, desc, onClick, external, icon }) {
  const props = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
  const Tag = external ? "a" : Link;
  return (
    <Tag {...props} onClick={onClick} className="group flex items-center justify-between py-2 px-3 -mx-3 rounded-lg border border-transparent hover:border-[#282828] transition-all">
      <div className="flex items-start gap-3">
        {icon && <ProductIcon product={icon} className="mt-0.5 h-6 w-6 flex-shrink-0" />}
        <div>
          <span className="text-[1rem] font-medium text-[#282828] group-hover:font-bold">
            {children}
            {external && <span className="inline-block ml-1 text-[#282828]">↗</span>}
          </span>
          {desc && <span className="block text-xs text-[#444] mt-0.5">{desc}</span>}
        </div>
      </div>
      <ArrowRightIcon className="w-4 h-4 text-[#282828] stroke-[2.5] opacity-0 group-hover:opacity-100 transition-opacity ml-4 flex-shrink-0" />
    </Tag>
  );
}

/* Featured card — matches live: hotlink !bg-neutral-100 rounded-md !font-semibold tracking-tight */
function FeaturedCard({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex w-full items-center justify-between gap-x-2 rounded-md bg-neutral-100 hover:bg-neutral-200 px-3 py-3 font-semibold tracking-tight text-sm lg:text-lg text-ink transition-colors"
    >
      {children}
      <BlueArrow />
    </Link>
  );
}

export default function Navbar() {
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  // Menu closes on mouse leave (hover-driven)

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedSection(null);
  };

  const closeMenu = () => setOpenMenu(null);
  const toggleMenu = (name) => setOpenMenu(openMenu === name ? null : name);

  return (
    <>
      <header ref={navRef} className="sticky top-0 z-50 bg-white border-b border-zinc-200" onMouseLeave={() => setOpenMenu(null)}>
        {/* Nav container widened for the product-heavy mega menu. */}
        <nav className="mx-auto px-6 flex items-center justify-between h-16" style={{ maxWidth: "1800px" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img src="/esteemed-logo.svg" alt="Esteemed" className="w-32 md:w-40 h-auto" fetchPriority="high" />
          </Link>

          {/* Desktop nav — centered */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Products & Services", key: "products" },
              { label: "Solutions", key: "solutions" },
              { label: "Resources", key: "resources" },
            ].map((item) => (
              <div
                key={item.key}
                onMouseEnter={() => setOpenMenu(item.key)}
              >
                <button
                  className={`flex items-center gap-1.5 px-5 py-2 text-[.875rem] rounded-full transition-all ${
                    openMenu === item.key
                      ? "bg-accent-hover text-[#282828] font-extrabold"
                      : "text-[#282828] font-medium hover:bg-accent-hover"
                  }`}
                >
                  {item.label}
                  <ChevronDownIcon className={`w-3.5 h-3.5 text-[#282828] stroke-[2.5] transition-transform ${openMenu === item.key ? "rotate-180" : ""}`} />
                </button>
              </div>
            ))}

            <Link href="/pricing" className="px-5 py-2 text-[.875rem] font-medium text-[#282828] rounded-full border border-transparent hover:border-[#282828] hover:font-bold transition-all">
              Pricing
            </Link>

          </div>

          {/* CTAs + Mobile hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {session ? (
              <>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full border-2 border-ink bg-white text-ink text-sm font-semibold hover:bg-accent hover:border-accent transition-colors"
                >
                  Log out
                </button>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-3 md:px-4 rounded-full border-2 border-accent bg-accent text-ink text-sm font-semibold hover:bg-accent-hover hover:border-accent-hover transition-colors leading-none"
                  style={{ paddingTop: 6, paddingBottom: 6 }}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-white text-xs font-bold flex-shrink-0">
                    {session.user?.name?.charAt(0)?.toUpperCase() || session.user?.email?.charAt(0)?.toUpperCase() || "?"}
                  </span>
                  <span className="hidden md:inline">{session.user?.name?.split(" ")[0] || "Account"}</span>
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => signIn("keycloak")}
                  className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full border-2 border-ink bg-white text-ink text-sm font-semibold hover:bg-accent hover:border-accent transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => signIn("keycloak")}
                  className="md:hidden text-sm font-semibold text-ink hover:underline"
                >
                  Log In
                </button>
                <a
                  href="/signup"
                  className="inline-flex items-center px-3 md:px-4 rounded-full border-2 border-accent bg-accent text-ink text-sm font-semibold hover:bg-accent-hover hover:border-accent-hover transition-colors leading-none"
                  style={{ paddingTop: 6, paddingBottom: 6 }}
                >
                  Sign Up
                </a>
              </>
            )}
            <div className="md:hidden bg-white relative z-10">
              <Hamburger toggled={mobileOpen} toggle={setMobileOpen} size={22} color="#282828" rounded />
            </div>
          </div>
        </nav>

        {/* ---- Mega menu panels ---- */}

        {openMenu === "products" && (
          <div className="hidden md:block absolute left-0 right-0 border-t border-zinc-200 bg-white shadow-lg">
            <div className="mx-auto px-6 py-8" style={{ maxWidth: "1800px" }}>
              <div className="grid grid-cols-4 gap-x-8">
                <div>
                  <SectionHeading>Websites</SectionHeading>
                  {websitesGroup.map((item) => (
                    <MegaMenuLink key={item.key} href={item.href} onClick={closeMenu} external={item.external} icon={item.key}>{item.name}</MegaMenuLink>
                  ))}
                </div>
                <div>
                  <SectionHeading>Business Tools</SectionHeading>
                  {businessToolsGroup.map((item) => (
                    <MegaMenuLink key={item.key} href={item.href} onClick={closeMenu} external={item.external} icon={item.key}>{item.name}</MegaMenuLink>
                  ))}
                </div>
                <div>
                  <SectionHeading href="/services">Services</SectionHeading>
                  {servicesGroup.map((item) => (
                    <MegaMenuLink key={item.key} href={item.href} onClick={closeMenu} external={item.external} icon={item.key}>{item.name}</MegaMenuLink>
                  ))}
                </div>
                <div className="space-y-3 mt-8">
                  <FeaturedCard href="/products/create" onClick={closeMenu}>Try Esteemed Create</FeaturedCard>
                  <FeaturedCard href="/products" onClick={closeMenu}>Products by Name</FeaturedCard>
                  <FeaturedCard href="/services/support" onClick={closeMenu}>Get Support</FeaturedCard>
                </div>
              </div>
            </div>
          </div>
        )}

        {openMenu === "solutions" && (
          <div className="hidden md:block absolute left-0 right-0 border-t border-zinc-200 bg-white shadow-lg">
            <div className="mx-auto px-6 py-8" style={{ maxWidth: "1800px" }}>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <SectionHeading>Use Cases</SectionHeading>
                  {solutionsUseCases.map((item) => (
                    <MegaMenuLink key={item.key} href={item.href} onClick={closeMenu}>{item.name}</MegaMenuLink>
                  ))}
                </div>
                <div>
                  <SectionHeading>Roles</SectionHeading>
                  {solutionsRoles.map((item) => (
                    <MegaMenuLink key={item.key} href={item.href} onClick={closeMenu}>{item.name}</MegaMenuLink>
                  ))}
                </div>
                <div>
                  <SectionHeading>Segments</SectionHeading>
                  {solutionsSegments.map((item) => (
                    <MegaMenuLink key={item.key} href={item.href} onClick={closeMenu}>{item.name}</MegaMenuLink>
                  ))}
                </div>
                <div>
                  <SectionHeading>Industries Served</SectionHeading>
                  {solutionsIndustries.map((item) => (
                    <MegaMenuLink key={item.key} href={item.href} onClick={closeMenu}>{item.name}</MegaMenuLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {openMenu === "resources" && (
          <div className="hidden md:block absolute left-0 right-0 border-t border-zinc-200 bg-white shadow-lg">
            <div className="mx-auto px-6 py-8" style={{ maxWidth: "1800px" }}>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <SectionHeading>Resources</SectionHeading>
                  {resourceItems.map((item) => (
                    <MegaMenuLink key={item.key} href={item.href} onClick={closeMenu} external={item.external}>{item.name}</MegaMenuLink>
                  ))}
                </div>
                <div>
                  <SectionHeading>Community</SectionHeading>
                  {communityItems.map((item) => (
                    <MegaMenuLink key={item.key} href={item.href} onClick={closeMenu} external={item.external}>{item.name}</MegaMenuLink>
                  ))}
                </div>
                <div />
                <div className="space-y-3">
                  {resourceFeatured.map((item) => (
                    <FeaturedCard key={item.key} href={item.href} onClick={closeMenu}>{item.name}</FeaturedCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={closeMobile} />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-full max-w-sm bg-white z-50 transform transition-transform duration-300 md:hidden overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav>
          {mobileSections.map((section) => (
            <div key={section.label} className="border-b border-zinc-200">
              <button
                onClick={() => setExpandedSection(expandedSection === section.label ? null : section.label)}
                className="flex items-center justify-between w-full text-left px-5 py-4"
              >
                <span className="text-[16px] font-bold text-[#282828]">{section.label}</span>
                <ChevronDownIcon className={`w-5 h-5 text-[#282828] stroke-[2.5] transition-transform ${expandedSection === section.label ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedSection === section.label ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-5 pb-4">
                  {section.subgroups.map((group) => (
                    <div key={group.heading} className="mb-4 last:mb-0">
                      <p className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#282828] opacity-50 mb-2 mt-2">{group.heading}</p>
                      {group.items.map((item) => (
                        <Link key={item.key} href={item.href} onClick={closeMobile} className="group flex items-center justify-between py-2 px-3 -mx-3 rounded-lg hover:bg-accent-hover transition-colors">
                          <div>
                            <span className="text-[14px] font-medium text-[#282828]">{item.name}</span>
                            {item.desc && <span className="block text-xs text-[#444] mt-0.5">{item.desc}</span>}
                          </div>
                          <ArrowRightIcon className="w-5 h-5 text-[#282828] stroke-[2.5] opacity-0 group-hover:opacity-100 transition-opacity ml-4 flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link href="/pricing" onClick={closeMobile} className="block px-5 py-4 text-[16px] font-bold text-[#282828] border-b border-zinc-200">
            Pricing
          </Link>
        </nav>
        <div className="p-5 space-y-3">
          <FeaturedCard href="/products/create" onClick={closeMobile}>Try Esteemed Create</FeaturedCard>
          <FeaturedCard href="/products" onClick={closeMobile}>Products by Name</FeaturedCard>
          <FeaturedCard href="/services/support" onClick={closeMobile}>Get Support</FeaturedCard>
        </div>
      </div>
    </>
  );
}
