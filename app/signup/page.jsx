"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const REDIRECT_URLS = {
  create: "https://create.esteemed.io",
  colleagues: "https://colleagues.esteemed.io",
};

function SignupRedirect() {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const redirectParam = searchParams.get("redirect");
  const promptParam = searchParams.get("prompt");

  useEffect(() => {
    if (status === "loading") return;

    if (session) {
      // Already authenticated — redirect to destination
      const base = (redirectParam && REDIRECT_URLS[redirectParam]) || REDIRECT_URLS.create;
      const url = promptParam ? `${base}?prompt=${encodeURIComponent(promptParam)}` : base;
      window.location.href = url;
      return;
    }

    // Not authenticated — redirect to Keycloak registration
    const callbackBase = (redirectParam && REDIRECT_URLS[redirectParam]) || REDIRECT_URLS.create;
    const callbackUrl = promptParam
      ? `${callbackBase}?prompt=${encodeURIComponent(promptParam)}`
      : callbackBase;

    signIn("keycloak", { callbackUrl });
  }, [session, status, redirectParam, promptParam]);

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <p className="text-zinc-400">Redirecting to sign up...</p>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-[calc(100vh-64px)] flex items-center justify-center"><p className="text-zinc-400">Loading...</p></div>}>
      <SignupRedirect />
    </Suspense>
  );
}
