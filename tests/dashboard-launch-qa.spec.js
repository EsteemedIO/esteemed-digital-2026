import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";
import { globSync } from "node:fs";
import { join } from "node:path";
import { getAllowedLookupKeys } from "../lib/pricing-catalog.js";
import { escapeXml, getDomainPrice, normalizeDomainName } from "../lib/opensrs.js";
import { cloudTiers, managedHostingTiers, supportTiers, vpsTiers } from "../lib/data.js";

test("dashboard New menu checkout lookup keys are allowed", () => {
  const allowed = getAllowedLookupKeys();
  const launchMenuKeys = [
    ...cloudTiers.map((tier) => tier.lookupKey),
    ...managedHostingTiers.filter((tier) => tier.monthly !== null).map((tier) => tier.lookupKey),
    ...vpsTiers.map((tier) => tier.lookupKey),
    ...supportTiers.filter((tier) => tier.lookupKey).map((tier) => tier.lookupKey),
  ];

  for (const lookupKey of launchMenuKeys) {
    expect(allowed.has(lookupKey), `${lookupKey} should be accepted by /api/checkout`).toBe(true);
  }
});

test("dashboard routes do not render placeholder pages", () => {
  const routeFiles = globSync(join(process.cwd(), "app/(shell)/dashboard/**/page.jsx"));

  for (const routeFile of routeFiles) {
    const source = readFileSync(routeFile, "utf8");
    expect(source, `${routeFile} should not import ShellPlaceholder`).not.toContain("ShellPlaceholder");
    expect(source, `${routeFile} should not show In progress copy`).not.toMatch(/In progress|In Progress/);
  }
});

test("products home site cards manage site detail pages", () => {
  const productsHome = readFileSync(join(process.cwd(), "app/products/page.jsx"), "utf8");

  expect(productsHome).toContain("Accordion");
  expect(productsHome).toContain("indicator={({ isOpen })");
  expect(productsHome).toContain("isOpen ? <ChevronDown");
  expect(productsHome).toContain("function ProductSiteCard");
  expect(productsHome).toContain("const href = `/dashboard/sites/${encodeURIComponent(site.id)}`");
  expect(productsHome).toContain("<Link href={href}");
  expect(productsHome).toContain("action: \"Manage\"");
});

test("dashboard cart surface and badge are wired", () => {
  const topBar = readFileSync(join(process.cwd(), "components/shell/ShellTopBar.jsx"), "utf8");
  const cartPage = readFileSync(join(process.cwd(), "app/(shell)/dashboard/cart/page.jsx"), "utf8");

  expect(topBar).toContain("href=\"/dashboard/cart\"");
  expect(topBar).toContain("esteemed_cart");
  expect(cartPage).toContain("checkoutItemsHref");
  expect(cartPage).toContain("Your cart is empty");
});

test("domain launch APIs are auth-gated and checkout-owned", () => {
  const searchRoute = readFileSync(join(process.cwd(), "app/api/domains/search/route.js"), "utf8");
  const checkoutRoute = readFileSync(join(process.cwd(), "app/api/domains/checkout/route.js"), "utf8");
  const registerRoute = readFileSync(join(process.cwd(), "app/api/domains/register/route.js"), "utf8");

  // Domain search is intentionally public (no auth) for homepage/hosting search bars
  expect(searchRoute).toContain("lookupDomain");
  expect(checkoutRoute).toContain("getToken");
  expect(checkoutRoute).toContain("body.set(\"mode\", \"subscription\")");
  expect(checkoutRoute).toContain("getDomainPrice");
  expect(checkoutRoute).not.toContain("price: d.price");
  expect(registerRoute).toContain("DOMAIN_REGISTRATION_INTERNAL_TOKEN");
  expect(registerRoute).toContain("verified checkout completion");
});

test("domain helpers normalize supported domains and escape XML", () => {
  expect(normalizeDomainName("Example.COM")).toBe("example.com");
  expect(normalizeDomainName("bad domain.com")).toBe(null);
  expect(escapeXml(`A&B <owner> "quote"`)).toBe("A&amp;B &lt;owner&gt; &quot;quote&quot;");
  expect(getDomainPrice(".com")).toBe(19.99);
  expect(getDomainPrice(".ai")).toBe(null);
});

test("domain dashboard uses shared cart storage without top-level nav item", () => {
  const domainsPage = readFileSync(join(process.cwd(), "app/(shell)/dashboard/domains/page.jsx"), "utf8");
  const cartPage = readFileSync(join(process.cwd(), "app/(shell)/dashboard/cart/page.jsx"), "utf8");
  const shellNav = readFileSync(join(process.cwd(), "components/shell/ShellNav.jsx"), "utf8");

  expect(domainsPage).toContain("esteemed_cart");
  expect(domainsPage).toContain("domain_registration");
  expect(cartPage).toContain("/api/domains/checkout");
  expect(shellNav).not.toContain("label: \"Domains\"");
});

test("marketing heroes use mobile dots, padding, and sticky contact CTA", () => {
  const heroCarousel = readFileSync(join(process.cwd(), "components/HeroCarousel.jsx"), "utf8");
  const videoHero = readFileSync(join(process.cwd(), "components/VideoHero.jsx"), "utf8");
  const floatingContactButton = readFileSync(join(process.cwd(), "components/FloatingContactButton.jsx"), "utf8");
  const marketingChrome = readFileSync(join(process.cwd(), "components/MarketingChrome.jsx"), "utf8");
  const globals = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");

  expect(heroCarousel).not.toContain("HeroContactButton");
  expect(videoHero).not.toContain("HeroContactButton");
  expect(heroCarousel).toContain("h-2.5 w-2.5");
  expect(videoHero).toContain("h-2.5 w-2.5");
  expect(floatingContactButton).toContain("fixed bottom-5 right-5");
  expect(floatingContactButton).toContain("border-accent");
  expect(floatingContactButton).toContain("href=\"/contact\"");
  expect(floatingContactButton).toContain("Contact Us");
  expect(marketingChrome).toContain("FloatingContactButton");
  expect(globals).toContain("padding: 1.5rem 1.25rem 2rem");
});
