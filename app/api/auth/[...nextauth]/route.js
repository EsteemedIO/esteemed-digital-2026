import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const THIRTY_DAYS = 30 * 24 * 60 * 60;

async function refreshAccessToken(token) {
  try {
    const response = await fetch(`${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        client_id: process.env.KEYCLOAK_CLIENT_ID,
        client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
        refresh_token: token.refreshToken,
      }),
      cache: "no-store",
    });
    const refreshed = await response.json();
    if (!response.ok) throw new Error(refreshed.error_description || "Token refresh failed");

    return {
      ...token,
      accessToken: refreshed.access_token,
      idToken: refreshed.id_token || token.idToken,
      expiresAt: Math.floor(Date.now() / 1000) + refreshed.expires_in,
      refreshToken: refreshed.refresh_token || token.refreshToken,
      error: undefined,
    };
  } catch (error) {
    console.error("[auth] Unable to refresh Keycloak access token", error);
    return { ...token, error: "RefreshAccessTokenError" };
  }
}

const TRUSTED_APP_URLS = [
  process.env.NEXT_PUBLIC_CREATE_URL || "https://create.esteemed.io",
  process.env.NEXT_PUBLIC_COLLEAGUES_URL || "https://colleagues.esteemed.io",
  process.env.NEXT_PUBLIC_ESTEEMED_PLATFORM_URL || "https://platform.esteemed.io",
];

const TRUSTED_APP_ORIGINS = new Set(
  TRUSTED_APP_URLS.map((url) => {
    try {
      return new URL(url).origin;
    } catch {
      return null;
    }
  }).filter(Boolean)
);

const handler = NextAuth({
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: THIRTY_DAYS,
  },
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // NextAuth only permits same-origin callbacks by default. Esteemed uses
      // one Keycloak realm across several first-party apps, so product CTAs
      // must be able to finish authentication in the app that initiated it.
      if (url.startsWith("/")) return new URL(url, baseUrl).toString();

      try {
        const destination = new URL(url);
        const siteOrigin = new URL(baseUrl).origin;

        if (
          destination.origin === siteOrigin ||
          TRUSTED_APP_ORIGINS.has(destination.origin)
        ) {
          return destination.toString();
        }
      } catch {
        // Invalid and untrusted callback URLs fall back to the marketing site.
      }

      return baseUrl;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.idToken = account.id_token;
        token.expiresAt = account.expires_at;
        return token;
      }

      const expiresAt = Number(token.expiresAt || 0) * 1000;
      if (!expiresAt || Date.now() < expiresAt - 30_000) return token;
      if (!token.refreshToken) return { ...token, error: "RefreshAccessTokenError" };

      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
