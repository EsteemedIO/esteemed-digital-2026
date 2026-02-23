"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Navbar as HNavbar, NavbarBrand, NavbarContent, NavbarItem,
  useDisclosure
} from "@heroui/react";
import { Squeeze as Hamburger } from "hamburger-react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { products } from "@/lib/data";
import { theme } from "@/lib/theme";
import PartnerModal from "./modals/PartnerModal";
import DemoModal from "./modals/DemoModal";

const mobileMenuItems = [
  {
    label: "Products",
    items: [
      { name: "Esteemed Intelligence", href: "/products" },
      { name: "Esteemed AI", href: "/products" },
      { name: "Esteemed Agents", href: "/products" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { name: "Staffing & Recruiting", href: "/solutions" },
      { name: "SaaS & Technology", href: "/solutions" },
      { name: "Financial Services", href: "/solutions" },
      { name: "Healthcare", href: "/solutions" },
      { name: "Manufacturing", href: "/solutions" },
    ],
  },
  {
    label: "Resources",
    items: [
      { name: "Documentation", href: "/developers" },
      { name: "Research Papers", href: "/research" },
      { name: "Case Studies", href: "/research" },
      { name: "Deployment Guide", href: "/deployment" },
      { name: "API Reference", href: "/developers" },
      { name: "Partner Program", href: "/partners" },
    ],
  },
  {
    label: "Company",
    items: [
      { name: "About", href: "/about" },
      { name: "Newsroom", href: "/news" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const CTA = ({ children, ...props }) => (
  <button {...props}
    className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white"
    style={{ background: "linear-gradient(90deg,var(--brand-start),var(--brand-mid),var(--brand-end))" }}>
    {children}
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

export default function Navbar() {
  const partnerModal = useDisclosure();
  const demoModal = useDisclosure();
  const [submitting, setSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const router = useRouter();
  const pathname = usePathname();

  const toggleSection = (label) => {
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedSections({});
  };

  const mockSubmit = async (payload) => {
    try {
      setSubmitting(true);
      await new Promise(r => setTimeout(r, 900));
      console.log("Form payload", payload);
      setSubmitting(false);
      demoModal.onClose();
      alert("Thanks! We'll follow up shortly.");
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitting(false);
    }
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <HNavbar maxWidth="xl"
        className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur
                   dark:border-zinc-800/70 dark:bg-zinc-950/60"
        style={{ height: '75.5px' }}>
        <NavbarBrand className="cursor-pointer" onClick={() => router.push("/")}>
          <img src="/Group (1).svg" alt="Esteemed Digital" className="mr-3 w-auto" style={{ height: '1.7rem' }} />
          <span className="text-lg font-semibold">Esteemed Digital</span>
        </NavbarBrand>

        <NavbarContent className="hidden md:flex gap-1" justify="center">

          {/* Custom Mega Menu */}
          <NavbarItem>
            <div className="relative group">
              <button className="px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200">
                Products
              </button>
              <div className="fixed top-[75.5px] left-0 right-0 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Products Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">PRODUCTS</h3>
                      <div className="space-y-4">
                        {products.map((p) => (
                          <Link key={p.key} href="/products" className="block group/item">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full" style={{ background: "var(--brand-start)" }}></div>
                              <div>
                                <div className="text-sm font-medium text-zinc-900 dark:text-white group-hover/item:text-[var(--brand-start)]">{p.name}</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">{p.tagline}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Solutions Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">SOLUTIONS</h3>
                      <div className="space-y-3">
                        {[
                          { name: "Staffing Ops Automation", to: "/solutions" },
                          { name: "SaaS GTM & Support", to: "/solutions" },
                          { name: "Enterprise AI Enablement", to: "/solutions" },
                          { name: "Human Capital AI", to: "/solutions" },
                          { name: "AI App Builder", to: "/solutions" },
                        ].map((s, i) => (
                          <Link key={i} href={s.to} className="block text-sm text-zinc-700 dark:text-zinc-300 hover:text-[var(--brand-start)] dark:hover:text-[var(--brand-start)]">
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Resources Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">RESOURCES</h3>
                      <div className="space-y-3">
                        {[
                          { name: "Documentation", to: "/developers" },
                          { name: "Research Papers", to: "/research" },
                          { name: "Case Studies", to: "/research" },
                          { name: "Deployment Guide", to: "/deployment" },
                          { name: "API Reference", to: "/developers" },
                          { name: "Partner Program", to: "/partners" },
                        ].map((r, i) => (
                          <Link key={i} href={r.to} className="block text-sm text-zinc-700 dark:text-zinc-300 hover:text-[var(--brand-start)] dark:hover:text-[var(--brand-start)]">
                            {r.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Featured Card */}
                    <div>
                      <div className="rounded-2xl p-6 h-full" style={{ background: "linear-gradient(135deg, var(--brand-start), var(--brand-mid), var(--brand-end))" }}>
                        <div className="text-white">
                          <h4 className="text-lg font-semibold mb-2">Esteemed Intelligence</h4>
                          <p className="text-sm text-white/90 mb-4">Neural memory and organizational intelligence powered by our agent workforce.</p>
                          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80">
                            Explore Intelligence
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavbarItem>

          {/* Solutions Mega Menu */}
          <NavbarItem>
            <div className="relative group">
              <button className="px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200">
                Solutions
              </button>
              <div className="fixed top-[75.5px] left-0 right-0 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Industries Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">INDUSTRIES</h3>
                      <div className="space-y-3">
                        {[
                          { name: "Staffing & Recruiting", desc: "Automated screening and matching" },
                          { name: "SaaS & Technology", desc: "GTM and customer support" },
                          { name: "Financial Services", desc: "Compliance and analytics" },
                          { name: "Healthcare", desc: "Documentation and workflow" },
                          { name: "Manufacturing", desc: "Process optimization" },
                        ].map((s, i) => (
                          <Link key={i} href="/solutions" className="block group/item">
                            <div className="text-sm font-medium text-zinc-900 dark:text-white group-hover/item:text-[var(--brand-start)]">{s.name}</div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">{s.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">USE CASES</h3>
                      <div className="space-y-3">
                        {[
                          "Document Intelligence",
                          "Customer Support Automation",
                          "Sales Enablement",
                          "HR & Recruiting",
                          "Business Intelligence",
                          "Compliance & Audit",
                        ].map((u, i) => (
                          <Link key={i} href="/solutions" className="block text-sm text-zinc-700 dark:text-zinc-300 hover:text-[var(--brand-start)] dark:hover:text-[var(--brand-start)]">
                            {u}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Featured Solution */}
                    <div>
                      <div className="rounded-2xl p-6 h-full bg-gradient-to-br from-purple-500 to-pink-500">
                        <div className="text-white">
                          <h4 className="text-lg font-semibold mb-2">Enterprise AI</h4>
                          <p className="text-sm text-white/90 mb-4">RAG + agent workflows across departments with RBAC, audit, and residency.</p>
                          <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80">
                            Explore Solutions
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavbarItem>
          <NavbarItem>
            <Link href="/research" className={`px-3 py-1.5 text-sm ${isActive('/research') ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"}`}>
              Research
            </Link>
          </NavbarItem>
          {/* Company Mega Menu */}
          <NavbarItem>
            <div className="relative group">
              <button className="px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200">
                Company
              </button>
              <div className="fixed top-[75.5px] left-0 right-0 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="max-w-7xl mx-auto px-6 py-6">
                  <div className="max-w-xs">
                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">COMPANY</h3>
                    <div className="space-y-3">
                      <Link href="/about" className="block text-sm text-zinc-700 dark:text-zinc-300 hover:text-[var(--brand-start)] dark:hover:text-[var(--brand-start)]">
                        About
                      </Link>
                      <Link href="/news" className="block text-sm text-zinc-700 dark:text-zinc-300 hover:text-[var(--brand-start)] dark:hover:text-[var(--brand-start)]">
                        Newsroom
                      </Link>
                      <Link href="/careers" className="block text-sm text-zinc-700 dark:text-zinc-300 hover:text-[var(--brand-start)] dark:hover:text-[var(--brand-start)]">
                        Careers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact" className={`px-3 py-1.5 text-sm ${isActive('/contact') ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"}`}>
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-2">
          <NavbarItem className="hidden md:flex">
            <CTA onClick={() => {
              console.log("Get Started clicked");
              demoModal.onOpen();
            }}>
              Get Started
            </CTA>
          </NavbarItem>

          {/* Mobile Hamburger */}
          <NavbarItem className="md:hidden">
            <Hamburger
              toggled={mobileMenuOpen}
              toggle={setMobileMenuOpen}
              size={22}
              color="currentColor"
              rounded
            />
          </NavbarItem>
        </NavbarContent>
      </HNavbar>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[75.5px] right-0 bottom-0 w-full max-w-sm bg-white dark:bg-zinc-950 z-50 transform transition-transform duration-300 ease-out md:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Featured Tile */}
          <div
            className="rounded-2xl p-6 mb-6"
            style={{
              background:
                "linear-gradient(135deg, var(--brand-start), var(--brand-mid), var(--brand-end))",
            }}
          >
            <h4 className="text-lg font-semibold text-white mb-2">
              Esteemed Intelligence
            </h4>
            <p className="text-sm text-white/90 mb-4">
              Neural memory and organizational intelligence powered by AI agents.
            </p>
            <Link
              href="/products"
              onClick={closeMobileMenu}
              className="inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Explore
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Menu Sections */}
          <nav className="space-y-2">
            {mobileMenuItems.map((section) => (
              <div key={section.label} className="border-b border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={() => toggleSection(section.label)}
                  className="flex items-center justify-between w-full py-4 text-left"
                >
                  <span className="text-base font-medium text-zinc-900 dark:text-white">
                    {section.label}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-zinc-500 transition-transform duration-200 ${
                      expandedSections[section.label] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expandable Items */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSections[section.label]
                      ? "max-h-96 opacity-100 pb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-3 pl-4">
                    {section.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Direct Links */}
            <Link
              href="/research"
              onClick={closeMobileMenu}
              className="block py-4 text-base font-medium text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800"
            >
              Research
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                closeMobileMenu();
                demoModal.onOpen();
              }}
              className="w-full py-3 px-6 rounded-full text-white font-medium"
              style={{
                background:
                  "linear-gradient(90deg, var(--brand-start), var(--brand-mid), var(--brand-end))",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <PartnerModal
        isOpen={partnerModal.isOpen}
        onOpenChange={partnerModal.onOpenChange}
        submitting={submitting}
        onSubmit={mockSubmit}
      />

      <DemoModal
        isOpen={demoModal.isOpen}
        onOpenChange={demoModal.onOpenChange}
        submitting={submitting}
        onSubmit={mockSubmit}
      />
    </>
  );
}
