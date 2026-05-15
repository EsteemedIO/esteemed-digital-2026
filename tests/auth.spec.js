import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:3000';
const KEYCLOAK_ISSUER = 'https://auth.esteemed.io/realms/esteemed-colleagues';

test.describe('Auth Integration — Keycloak OIDC', () => {

  test('homepage loads successfully', async ({ page }) => {
    const res = await page.goto(BASE);
    expect(res.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navbar shows Login and Sign Up when unauthenticated', async ({ page }) => {
    await page.goto(BASE);
    // Desktop login button
    const loginBtn = page.locator('button:has-text("Login")').first();
    await expect(loginBtn).toBeVisible();
    // Sign Up link
    const signupLink = page.locator('a:has-text("Sign Up")').first();
    await expect(signupLink).toBeVisible();
  });

  test('Login button redirects to Keycloak', async ({ page }) => {
    await page.goto(BASE);
    const loginBtn = page.locator('button:has-text("Login")').first();

    // Click and wait for navigation — should redirect to Keycloak
    const [response] = await Promise.all([
      page.waitForURL(/auth\.esteemed\.io|api\/auth/, { timeout: 15000 }),
      loginBtn.click(),
    ]);

    const url = page.url();
    // Should be at Keycloak or NextAuth's signin route that redirects to Keycloak
    expect(
      url.includes('auth.esteemed.io') || url.includes('/api/auth')
    ).toBeTruthy();
  });

  test('/login page shows auth options and email login redirects to Keycloak', async ({ page }) => {
    await page.goto(`${BASE}/login`);

    // Page should show login options (not auto-redirect)
    await expect(page.locator('h1:has-text("Log in")')).toBeVisible();
    await expect(page.locator('button:has-text("Log in with email")')).toBeVisible();

    // Clicking email login should redirect to Keycloak
    await Promise.all([
      page.waitForURL(/auth\.esteemed\.io|api\/auth/, { timeout: 15000 }),
      page.locator('button:has-text("Log in with email")').click(),
    ]);

    const url = page.url();
    expect(
      url.includes('auth.esteemed.io') || url.includes('/api/auth')
    ).toBeTruthy();
  });

  test('/signup page shows auth options and email signup redirects to Keycloak', async ({ page }) => {
    await page.goto(`${BASE}/signup`);

    await expect(page.locator('h1:has-text("Create your account")')).toBeVisible();
    await expect(page.locator('button:has-text("Sign up with email")')).toBeVisible();

    await Promise.all([
      page.waitForURL(/auth\.esteemed\.io|api\/auth/, { timeout: 15000 }),
      page.locator('button:has-text("Sign up with email")').click(),
    ]);

    const url = page.url();
    expect(
      url.includes('auth.esteemed.io') || url.includes('/api/auth')
    ).toBeTruthy();
  });

  test('Keycloak OIDC discovery endpoint is reachable', async ({ request }) => {
    const res = await request.get(
      `${KEYCLOAK_ISSUER}/.well-known/openid-configuration`
    );
    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(body.issuer).toBe(KEYCLOAK_ISSUER);
    expect(body.authorization_endpoint).toContain('auth.esteemed.io');
    expect(body.token_endpoint).toContain('auth.esteemed.io');
    expect(body.jwks_uri).toContain('auth.esteemed.io');
  });

  test('NextAuth session endpoint returns unauthenticated state', async ({ request }) => {
    const res = await request.get(`${BASE}/api/auth/session`);
    expect(res.status()).toBe(200);

    const body = await res.json();
    // Empty object = no session
    expect(Object.keys(body).length).toBe(0);
  });

  test('NextAuth providers endpoint includes keycloak', async ({ request }) => {
    const res = await request.get(`${BASE}/api/auth/providers`);
    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(body.keycloak).toBeDefined();
    expect(body.keycloak.id).toBe('keycloak');
    expect(body.keycloak.type).toBe('oauth');
  });

  test('ChatHero prompt field is visible and interactive', async ({ page }) => {
    await page.goto(BASE);
    const textarea = page.locator('#chat-hero textarea');
    await expect(textarea).toBeVisible();

    // Type a prompt
    await textarea.fill('A booking site for my yoga studio');
    await expect(textarea).toHaveValue('A booking site for my yoga studio');

    // Build it button should be active
    const buildBtn = page.locator('button:has-text("Build it")');
    await expect(buildBtn).toBeVisible();
  });

  test('ChatHero "Build it" triggers auth flow when unauthenticated', async ({ page }) => {
    await page.goto(BASE);
    const textarea = page.locator('#chat-hero textarea');
    await textarea.fill('A portfolio site');

    const buildBtn = page.locator('button:has-text("Build it")');

    // Click and expect redirect toward Keycloak
    await Promise.all([
      page.waitForURL(/auth\.esteemed\.io|api\/auth/, { timeout: 15000 }),
      buildBtn.click(),
    ]);

    const url = page.url();
    expect(
      url.includes('auth.esteemed.io') || url.includes('/api/auth')
    ).toBeTruthy();
  });

});
