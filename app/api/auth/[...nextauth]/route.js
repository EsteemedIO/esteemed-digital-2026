import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const THIRTY_DAYS = 30 * 24 * 60 * 60;

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
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
