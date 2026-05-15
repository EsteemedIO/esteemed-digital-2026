"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (session) {
      // Already logged in — go home
      window.location.href = "/";
      return;
    }

    // Not logged in — redirect to Keycloak
    signIn("keycloak", { callbackUrl: "/" });
  }, [session, status]);

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <p className="text-zinc-400">Redirecting to login...</p>
    </div>
  );
}
