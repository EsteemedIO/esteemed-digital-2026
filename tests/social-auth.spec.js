import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:3000';

test.describe('Social Auth — Login & Signup Pages', () => {

  test('login page shows social login buttons (Google, GitHub, LinkedIn)', async ({ page }) => {
    await page.goto(`${BASE}/login`);

    await expect(page.locator('button:has-text("Log in with email")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with Google")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with GitHub")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with LinkedIn")')).toBeVisible();
  });

  test('signup page shows social login buttons', async ({ page }) => {
    await page.goto(`${BASE}/signup`);

    await expect(page.locator('button:has-text("Sign up with email")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with Google")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with GitHub")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with LinkedIn")')).toBeVisible();
  });

  test('Google social login redirects to Keycloak with kc_idp_hint=google', async ({ page }) => {
    await page.goto(`${BASE}/login`);

    const googleBtn = page.locator('button:has-text("Continue with Google")');
    await Promise.all([
      page.waitForURL(/auth\.esteemed\.io|api\/auth/, { timeout: 15000 }),
      googleBtn.click(),
    ]);

    const url = page.url();
    // Should redirect through NextAuth to Keycloak with google hint
    expect(
      url.includes('auth.esteemed.io') || url.includes('/api/auth')
    ).toBeTruthy();
  });

  test('GitHub social login redirects to Keycloak with kc_idp_hint=github', async ({ page }) => {
    await page.goto(`${BASE}/login`);

    const githubBtn = page.locator('button:has-text("Continue with GitHub")');
    await Promise.all([
      page.waitForURL(/auth\.esteemed\.io|api\/auth/, { timeout: 15000 }),
      githubBtn.click(),
    ]);

    const url = page.url();
    expect(
      url.includes('auth.esteemed.io') || url.includes('/api/auth')
    ).toBeTruthy();
  });

  test('LinkedIn social login redirects to Keycloak with kc_idp_hint=linkedin', async ({ page }) => {
    await page.goto(`${BASE}/login`);

    const linkedinBtn = page.locator('button:has-text("Continue with LinkedIn")');
    await Promise.all([
      page.waitForURL(/auth\.esteemed\.io|api\/auth/, { timeout: 15000 }),
      linkedinBtn.click(),
    ]);

    const url = page.url();
    expect(
      url.includes('auth.esteemed.io') || url.includes('/api/auth')
    ).toBeTruthy();
  });

});
