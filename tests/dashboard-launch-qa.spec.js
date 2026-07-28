import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";
import { globSync } from "node:fs";
import { join } from "node:path";
import { getAllowedLookupKeys } from "../lib/pricing-catalog.js";
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
