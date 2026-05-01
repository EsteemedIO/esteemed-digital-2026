# Auth Integration Plan — Keycloak as Central IdP

## Decision

All Esteemed apps use **Keycloak** as the central identity provider via OpenID Connect. esteemed.io, Create, and Colleagues are all OIDC clients. No app manages its own user registration — Keycloak is the source of truth for identity.

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
- **Realm name:** `esteemed`
- **Login theme:** Custom branded (Esteemed yellow star, Inter font, ink/paper colors)

### Clients (OIDC)

| Client ID | App | Redirect URIs | Type |
|---|---|---|---|
| `esteemed-web` | esteemed.io | `https://esteemed.io/*` | public (PKCE) or confidential |
| `esteemed-create` | Create app | `https://create.esteemed.io/*` | public (PKCE) |
| `esteemed-colleagues` | Colleagues app | `https://colleagues.esteemed.io/*` | public (PKCE) |

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

## Migration Path for Existing Auth

### Create app
- Currently: custom JWT auth in agent-runner (Express + bcrypt + PostgreSQL users table)
- Migration: Replace with Keycloak OIDC client. Use `keycloak-connect` middleware or validate Keycloak JWTs directly.
- User migration: Export existing users from PG → import into Keycloak realm (Keycloak has a bulk import API). Passwords need to be re-hashed or users forced to reset on first Keycloak login.

### Colleagues app
- Currently: has its own auth (not on this machine to inspect)
- Migration: Same pattern — replace with Keycloak OIDC client. Import existing users.

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
# esteemed.io
KEYCLOAK_ISSUER=https://auth.esteemed.io/realms/esteemed
KEYCLOAK_CLIENT_ID=esteemed-web
KEYCLOAK_CLIENT_SECRET=<from keycloak admin>
NEXTAUTH_URL=https://esteemed.io
NEXTAUTH_SECRET=<random secret>

# Create
KEYCLOAK_ISSUER=https://auth.esteemed.io/realms/esteemed
KEYCLOAK_CLIENT_ID=esteemed-create

# Colleagues
KEYCLOAK_ISSUER=https://auth.esteemed.io/realms/esteemed
KEYCLOAK_CLIENT_ID=esteemed-colleagues
```

---

## DNS

- `auth.esteemed.io` → Keycloak instance
- `esteemed.io` → this marketing site
- `create.esteemed.io` → Create app
- `colleagues.esteemed.io` → Colleagues app

---

## Implementation Order

1. **Stand up Keycloak** on DO with `esteemed` realm, custom theme
2. **Create three OIDC clients** (esteemed-web, esteemed-create, esteemed-colleagues)
3. **Wire esteemed.io** signup/login to Keycloak via NextAuth.js or openid-client
4. **Update `/signup` page** to redirect to Keycloak registration, then path chooser
5. **Update Create** to validate Keycloak tokens instead of its own JWT
6. **Update Colleagues** to validate Keycloak tokens
7. **Import existing users** from both apps into Keycloak
8. **Add social login** (Google, GitHub) as Keycloak identity providers
9. **Custom Keycloak theme** matching Esteemed branding

---

## Open Questions

1. **Keycloak hosting:** DO droplet, DO App Platform, or cloud-hosted service for v1?
2. **Social login providers:** Google and GitHub for v1, or add later?
3. **Colleagues auth details:** What's the current auth implementation? Need to inspect the latest code to plan migration.
4. **Custom Keycloak theme:** Do we want to embed Keycloak forms in esteemed.io (headless mode) or redirect to a branded Keycloak login page?
5. **User migration timing:** Import existing Create users into Keycloak before or after the switchover?
