"use client";

import { Suspense, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import SocialLoginButtons from "@/components/SocialLoginButtons";

function LoginContent() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  useEffect(() => {
    if (status === "loading") return;
    if (session) {
      window.location.href = callbackUrl;
    }
  }, [callbackUrl, session, status]);

  if (status === "loading" || session) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <p className="text-zinc-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-ink mb-2">Log in</h1>
          <p className="text-sm text-zinc-600">One account for everything Esteemed.</p>
        </div>

        <button
          onClick={() => signIn("keycloak", { callbackUrl })}
          className="w-full py-3 rounded-full bg-ink text-white text-sm font-bold hover:bg-ink/90 transition-colors mb-4"
        >
          Log in with email
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-zinc-200" />
          <span className="text-xs text-zinc-400">or</span>
          <div className="flex-1 h-px bg-zinc-200" />
        </div>

        <SocialLoginButtons callbackUrl={callbackUrl} />

        <p className="text-center mt-6 text-sm text-zinc-500">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-ink font-medium underline underline-offset-4 hover:no-underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[calc(100vh-64px)] flex items-center justify-center"><p className="text-zinc-400">Loading...</p></div>}>
      <LoginContent />
    </Suspense>
  );
}
