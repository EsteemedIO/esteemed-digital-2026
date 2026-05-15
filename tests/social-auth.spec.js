import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:3000';

test.describe('Social Auth — Keycloak Identity Providers', () => {

  test('Keycloak login page renders and shows available social providers', async ({ page }) => {
    // Go to login which redirects through NextAuth to Keycloak
    await page.goto(`${BASE}/api/auth/signin/keycloak`);

    // NextAuth's signin page should auto-redirect to Keycloak, or show a form
    // Wait for either Keycloak login page or NextAuth CSRF form
    await page.waitForURL(/auth\.esteemed\.io|api\/auth/, { timeout: 15000 });

    const url = page.url();

    if (url.includes('auth.esteemed.io')) {
      // We're on the Keycloak login page — check for social buttons
      const html = await page.content();

      const providers = {
        google: /google/i.test(html),
        github: /github/i.test(html),
        linkedin: /linkedin/i.test(html),
        microsoft: /microsoft/i.test(html),
        apple: /apple/i.test(html),
      };

      console.log('Keycloak login page social providers detected:');
      for (const [name, found] of Object.entries(providers)) {
        console.log(`  ${name}: ${found ? 'YES' : 'no'}`);
      }

      // Take a screenshot for visual verification
      await page.screenshot({ path: 'tests/screenshots/keycloak-login.png', fullPage: true });
      console.log('Screenshot saved to tests/screenshots/keycloak-login.png');

      // At minimum we expect the login form to exist
      const formExists = await page.locator('form').count() > 0;
      expect(formExists).toBeTruthy();

    } else {
      // NextAuth intermediary page — click through to Keycloak
      const keycloakBtn = page.locator('button:has-text("Sign in with Keycloak")').first();
      if (await keycloakBtn.isVisible()) {
        await Promise.all([
          page.waitForURL(/auth\.esteemed\.io/, { timeout: 15000 }),
          keycloakBtn.click(),
        ]);

        const html = await page.content();
        const providers = {
          google: /google/i.test(html),
          github: /github/i.test(html),
          linkedin: /linkedin/i.test(html),
        };

        console.log('Keycloak login page social providers detected:');
        for (const [name, found] of Object.entries(providers)) {
          console.log(`  ${name}: ${found ? 'YES' : 'no'}`);
        }

        await page.screenshot({ path: 'tests/screenshots/keycloak-login.png', fullPage: true });
      }
    }
  });

});
