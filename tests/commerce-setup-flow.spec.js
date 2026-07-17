import { expect, test } from "@playwright/test";

const baseUrl = process.env.COMMERCE_SETUP_BASE_URL || "http://localhost:3000";

const platformCases = [
  {
    platformName: "WooCommerce",
    startUrlPattern: /platform=woocommerce/,
    planName: "Growth",
    expectedLookupKey: "woo_growth_monthly",
    expectedSuccessProduct: "woocommerce",
  },
  {
    platformName: "Drupal Commerce",
    startUrlPattern: /platform=drupal/,
    planName: "Growth",
    expectedLookupKey: "drupal_growth_monthly",
    expectedSuccessProduct: "drupal",
  },
  {
    platformName: "Esteemed Commerce",
    startUrlPattern: /platform=esteemed/,
    planName: "Launch",
    expectedLookupKey: "commerce_launch_monthly",
    expectedSuccessProduct: "commerce",
  },
];

async function mockSignedInSession(page) {
  await page.route("**/api/auth/session", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        user: {
          name: "Commerce Tester",
          email: "commerce-tester@example.com",
        },
        expires: "2099-01-01T00:00:00.000Z",
      }),
    });
  });
}

test.describe("Commerce setup flow", () => {
  for (const scenario of platformCases) {
    test(`signed-in user can start ${scenario.platformName} setup with the correct checkout item`, async ({ page }) => {
      await mockSignedInSession(page);

      let checkoutUrl;
      await page.route("**/api/checkout**", async (route) => {
        checkoutUrl = route.request().url();
        await route.fulfill({
          status: 200,
          contentType: "text/plain",
          body: "checkout captured",
        });
      });

      await page.goto(`${baseUrl}/websites/ecommerce`);
      const platformCard = page
        .locator(".grid > div")
        .filter({ has: page.getByRole("heading", { name: scenario.platformName }) })
        .first();

      await expect(platformCard).toBeVisible();
      await platformCard.getByRole("link", { name: /Get Started/ }).click();
      await expect(page).toHaveURL(scenario.startUrlPattern);
      await expect(page.getByRole("heading", { name: "Choose your plan" })).toBeVisible();

      const planCard = page
        .locator(".grid > div")
        .filter({ has: page.getByRole("heading", { name: scenario.planName }) })
        .first();

      await expect(planCard).toBeVisible();
      await planCard.getByRole("link", { name: /Get Started/ }).click();

      expect(checkoutUrl).toBeTruthy();
      const checkout = new URL(checkoutUrl);
      expect(checkout.pathname).toBe("/api/checkout");
      expect(checkout.searchParams.get("lookup_key")).toBe(scenario.expectedLookupKey);
      expect(checkout.searchParams.get("success_path")).toBe(
        `/thanks?product=${scenario.expectedSuccessProduct}&tier=${scenario.planName.toLowerCase()}`,
      );
    });
  }
});
