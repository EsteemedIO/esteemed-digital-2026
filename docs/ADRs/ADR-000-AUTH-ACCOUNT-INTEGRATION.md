# ADR-000: Auth & Account Integration — Keycloak as Central IdP

**Status:** In Progress
**Date:** 2026-05-12 (originally drafted earlier, promoted to ADR-000)
**Primary integration target:** `create.esteemed.io`

---

## Decision

All Esteemed apps use **Keycloak** as the central identity provider via OpenID Connect. esteemed.io, Create, and Colleagues are all OIDC clients. No app manages its own user registration — Keycloak is the source of truth for identity.

---

## Active Integration: esteemed.io <-> create.esteemed.io

The first live integration connects the esteemed.io homepage to the Create app at `create.esteemed.io`. This is the critical path — the homepage prompt field and account system must route authenticated users seamlessly into Create.

### Priority Flow (ship first)

1. User lands on `esteemed.io`
2. If existing session (Keycloak refresh token valid) → auto-login, show authenticated state
3. User types prompt in hero, clicks "Build it"
4. If not authenticated → redirect to Keycloak login/register → callback → redirect to `create.esteemed.io/?prompt=...`
5. If already authenticated → redirect directly to `create.esteemed.io/?prompt=...` with SSO token
6. User lands in Create already logged in (Keycloak SSO), prompt pre-filled

### What esteemed.io needs now

- NextAuth.js wired to Keycloak provider
- Auth API routes (`/api/auth/[...nextauth]`)
- Auth context/provider wrapping the app (`SessionProvider`)
- Navbar: login/logout button, user avatar when authenticated
- ChatHero submit: check auth state before routing to `create.esteemed.io`
- `.env.local` with Keycloak endpoints (see Environment Variables below)
- Remove static export assumptions — this is a dynamic SSR app

### Implementation Steps (esteemed.io side)

1. `npm install next-auth`
2. Create `/app/api/auth/[...nextauth]/route.js` with Keycloak provider
3. Create `/components/AuthProvider.jsx` — wraps app in `SessionProvider`
4. Update `/app/layout.jsx` — wrap children in `AuthProvider`
5. Update `/components/Navbar.jsx` — show Login/avatar based on `useSession()`
6. Update `/components/ChatHero.jsx` — `handleSubmit` checks session, routes to `create.esteemed.io`
7. Create `/app/login/page.jsx` — redirect to Keycloak (or remove if using NextAuth's built-in)
8. Update `next.config.js` — remove `images.unoptimized` if no longer doing static export, add `create.esteemed.io` to allowed redirect domains

---

## Architecture

```
                        ┌─────────────┐
                        │  Keycloak   │
                        │  (IdP)      │
                        │  auth.esteemed.io
                        └──────┬──────┘
                               │ OIDC
              ┌────────────────┼────────────────┐
              │                │                │
     ┌────────▼───────┐ ┌─────▼──────┐ ┌───────▼────────┐
     │  esteemed.io   │ │  Create    │ │  Colleagues    │
     │  (marketing +  │ │  (app      │ │  (talent       │
     │   auth gateway)│ │   builder) │ │   marketplace) │
     └────────────────┘ └────────────┘ └────────────────┘
```

### Flow

1. **User clicks "Create Account" or "Login"** on esteemed.io
2. esteemed.io redirects to Keycloak's login/registration page (or uses Keycloak's embedded forms)
3. Keycloak handles signup, login, password reset, MFA, social login (Google/GitHub)
4. Keycloak redirects back to esteemed.io with an authorization code
5. esteemed.io exchanges code for tokens (access + refresh + id_token)
6. Based on `redirect` param, esteemed.io sends the user to Create or Colleagues
7. Create and Colleagues validate the same Keycloak-issued tokens — SSO works automatically

### What Keycloak gives us for free
- Unified user registration + login
- Google / GitHub / LinkedIn social login
- Password reset, email verification
- MFA (TOTP, WebAuthn)
- Session management across all apps (SSO)
- User roles and groups (creator, employer, jobseeker, admin)
- Admin console for user management
- Token refresh without re-login
- Account self-service (profile, password, sessions)

---

## Keycloak Setup

### Realm
- **Realm name:** `esteemed-colleagues` (shared realm for all Esteemed apps)
- **Issuer:** `https://auth.esteemed.io/realms/esteemed-colleagues`
- **OIDC discovery:** `https://auth.esteemed.io/realms/esteemed-colleagues/.well-known/openid-configuration`
- **Login theme:** Custom branded (Esteemed yellow star, Inter font, ink/paper colors)

### Clients (OIDC)

| Client ID | App | Redirect URIs | Type | Status |
|---|---|---|---|---|
| `esteemed-web` | esteemed.io | `https://esteemed.io/*` | confidential + PKCE S256 | **LIVE** (created 2026-05-15) |
| `esteemed-create` | Create app | `https://create.esteemed.io/*` | confidential + PKCE | **LIVE** (secret: provided) |
| `esteemed-colleagues` | Colleagues app | `https://colleagues.esteemed.io/*` | confidential | **LIVE** |

### Roles
- `creator` — default for users who sign up via homepage/Create flow
- `employer` — users who sign up via Colleagues Hire flow
- `jobseeker` — users who sign up via Colleagues Jobseeker flow
- `admin` — internal team

Users can have multiple roles (a creator can also be an employer).

### User Attributes (custom)
- `redirect_origin` — where the user first signed up from (for analytics)
- `prompt_text` — if they came from the chat hero, capture what they typed

---

## esteemed.io Implementation

### Dependencies
```bash
npm install next-auth   # or openid-client directly
```

**Option 1: NextAuth.js** with Keycloak provider (simplest for Next.js)
```js
// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER, // https://auth.esteemed.io/realms/esteemed
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
```

**Option 2: openid-client** (more control, no NextAuth overhead)

### Updated Signup Flow

1. User hits `/signup` (or `/signup?redirect=create&prompt=...`)
2. Page stores `redirect` and `prompt` in sessionStorage
3. Page redirects to Keycloak registration URL:
   ```
   https://auth.esteemed.io/realms/esteemed/protocol/openid-connect/registrations
     ?client_id=esteemed-web
     &redirect_uri=https://esteemed.io/api/auth/callback
     &response_type=code
     &scope=openid profile email
   ```
4. User registers in Keycloak (branded form)
5. Keycloak redirects back to `/api/auth/callback` with code
6. Callback exchanges code for tokens, sets session cookie
7. Callback reads `redirect` from sessionStorage:
   - `create` → redirect to `https://create.esteemed.io` (token passed via Keycloak SSO — Create is also a Keycloak client, so the user is already logged in)
   - `colleagues` → redirect to `https://colleagues.esteemed.io`
   - none → show path chooser tiles

### Updated Login Flow

1. User hits `/login`
2. Redirect to Keycloak login:
   ```
   https://auth.esteemed.io/realms/esteemed/protocol/openid-connect/auth
     ?client_id=esteemed-web
     &redirect_uri=https://esteemed.io/api/auth/callback
     &response_type=code
     &scope=openid profile email
   ```
3. Same callback flow as signup

### Chat Hero Submit

1. User types prompt, clicks "Build it →"
2. Store prompt in sessionStorage
3. Redirect to Keycloak registration (if not logged in) or straight to Create (if already logged in)
4. After auth, redirect to Create with prompt: `https://create.esteemed.io/?prompt=...`

---

## Current Auth State (as of 2026-05-12)

### Colleagues app (EsteemedIO/colleagues)
- **Production uses Keycloak** — the GitHub repo may not reflect the deployed state
- `keycloak_id` column in `user-entity` table is active
- **TAL (Talent API) integration is the Create team's responsibility**, not esteemed.io's

### Create app
- Custom JWT auth in agent-runner (Express + bcrypt + PostgreSQL users table)
- Needs migration to Keycloak OIDC client

---

## Hosting Keycloak

| Option | Pros | Cons |
|---|---|---|
| **Self-hosted on DO** | Full control, cheap ($12-24/mo droplet) | Maintenance, upgrades, backups |
| **DO Managed Database + DO App** | Keycloak as Docker on DO App Platform, PG on managed DB | Slightly more cost, less ops |
| **Phase 1 (cloud hosted)** | Use cloud Keycloak (e.g., cloud-iam.com, Phase Two) while building | Fast to start, migrate later |

**Recommendation:** Start with a DO droplet running Keycloak Docker image at `auth.esteemed.io`. It's a single container, low traffic initially, and you have full control over theming and config.

```bash
docker run -d --name keycloak \
  -p 8080:8080 \
  -e KC_DB=postgres \
  -e KC_DB_URL=jdbc:postgresql://db:5432/keycloak \
  -e KC_DB_USERNAME=keycloak \
  -e KC_DB_PASSWORD=<password> \
  -e KC_HOSTNAME=auth.esteemed.io \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=<admin-password> \
  quay.io/keycloak/keycloak:latest start
```

---

## Environment Variables

```
# esteemed.io (needs esteemed-web client created in Keycloak first)
KEYCLOAK_ISSUER=https://auth.esteemed.io/realms/esteemed-colleagues
KEYCLOAK_CLIENT_ID=esteemed-web
KEYCLOAK_CLIENT_SECRET=<set in .env.local>
NEXTAUTH_URL=https://esteemed.io
NEXTAUTH_SECRET=<random secret>

# Create (LIVE — OIDC wired 2026-05-14)
KEYCLOAK_ISSUER=https://auth.esteemed.io/realms/esteemed-colleagues
KEYCLOAK_CLIENT_ID=esteemed-create
KEYCLOAK_CLIENT_SECRET=<set on droplet>
APP_BASE_URL=https://create.esteemed.io

# Colleagues (LIVE)
KEYCLOAK_ISSUER=https://auth.esteemed.io/realms/esteemed-colleagues
KEYCLOAK_CLIENT_ID=esteemed-colleagues
```

---

## DNS (confirmed 2026-05-12)

- `auth.esteemed.io` → `44.217.90.28` (Keycloak instance — already exists)
- `cauth.esteemed.io` → `143.198.187.212` (Colleagues auth — already exists)
- `esteemed.io` → this marketing site
- `create.esteemed.io` → Create app
- `colleagues.esteemed.io` → Colleagues app

---

## Implementation Order

1. ~~**Stand up Keycloak**~~ DONE — `auth.esteemed.io` (44.217.90.28), realm `esteemed-colleagues`
2. **Create OIDC clients:**
   - ~~`esteemed-create`~~ DONE (confidential + PKCE, wired 2026-05-14)
   - ~~`esteemed-colleagues`~~ DONE (production)
   - ~~`esteemed-web`~~ DONE (confidential + PKCE S256, created 2026-05-15)
3. ~~**Wire esteemed.io** NextAuth scaffolding~~ DONE — `next-auth` installed, route + SessionProvider + auth-aware Navbar/ChatHero in place. Waiting on `esteemed-web` client secret.
4. ~~**Update `/signup` + `/login` pages**~~ DONE — both redirect through Keycloak via NextAuth
5. ~~**Wire Create OIDC SSO**~~ DONE — `/api/auth/oidc/login` + `/oidc/callback`, PKCE, JWKS verification, user upsert, "Login with Esteemed" button on login page
6. ~~**Update Colleagues**~~ DONE — already on Keycloak in production
7. **Import existing Create users** into Keycloak — pending
8. **Add social login** (Google, GitHub) as Keycloak identity providers — pending
9. **Custom Keycloak theme** matching Esteemed branding — pending

---

## Open Questions

1. ~~**Keycloak hosting:**~~ DECIDED — dedicated `auth.esteemed.io` subdomain. All apps share `.esteemed.io` parent domain for seamless SSO cookies. Hosting infra TBD (DO droplet, DO App Platform, or cloud-hosted).
2. **Social login providers:** Google and GitHub for v1, or add later? (Colleagues currently has Google OAuth only)
3. ~~**Colleagues auth details:**~~ RESOLVED — production uses Keycloak. Custom JWT in repo was a temporary dev-time approach.
4. **Custom Keycloak theme:** Do we want to embed Keycloak forms in esteemed.io (headless mode) or redirect to a branded Keycloak login page?
5. **User migration timing:** Import existing Create users into Keycloak before or after the switchover?
6. **Colleagues as reference:** Colleagues is already on Keycloak in production — use it as the proven pattern for esteemed.io integration.
