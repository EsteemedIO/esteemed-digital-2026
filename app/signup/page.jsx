"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import SocialLoginButtons from "@/components/SocialLoginButtons";

const CREATE_URL = "https://create.esteemed.io";
const COLLEAGUES_URL = "https://colleagues.esteemed.io";

const REDIRECT_URLS = {
  create: CREATE_URL,
  colleagues: COLLEAGUES_URL,
};

function SignupContent() {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const redirectParam = searchParams.get("redirect");
  const promptParam = searchParams.get("prompt");

  const callbackBase = (redirectParam && REDIRECT_URLS[redirectParam]) || CREATE_URL;
  const callbackUrl = promptParam
    ? `${callbackBase}?prompt=${encodeURIComponent(promptParam)}`
    : callbackBase;

  // Already authenticated — redirect to destination
  if (session) {
    if (typeof window !== "undefined") window.location.href = callbackUrl;
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <p className="text-zinc-400">Redirecting...</p>
      </div>
    );
  }

  if (status === "loading") {
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
          <h1 className="text-3xl font-bold text-ink mb-2">Create your account</h1>
          <p className="text-sm text-zinc-600">One account for everything Esteemed.</p>
        </div>

        <button
          onClick={() => signIn("keycloak", { callbackUrl })}
          className="w-full py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors mb-4"
        >
          Sign up with email
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-zinc-200" />
          <span className="text-xs text-zinc-400">or</span>
          <div className="flex-1 h-px bg-zinc-200" />
        </div>

        <SocialLoginButtons callbackUrl={callbackUrl} />

        <p className="text-center mt-6 text-sm text-zinc-500">
          Already have an account?{" "}
          <Link href="/login" className="text-ink font-medium underline underline-offset-4 hover:no-underline">
            Log in
          </Link>
        </p>

        <p className="text-xs text-zinc-400 mt-6 text-center">
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-zinc-600">Terms</Link> and{" "}
          <Link href="/privacy" className="underline hover:text-zinc-600">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-[calc(100vh-64px)] flex items-center justify-center"><p className="text-zinc-400">Loading...</p></div>}>
      <SignupContent />
    </Suspense>
  );
}
