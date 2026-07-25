"use client";

import { useSession, signIn } from "next-auth/react";
import TickRounded from "@/components/TickRounded";
import { Loader2 } from "lucide-react";

const CREATE_URL = "https://create.esteemed.io";

function GoogleMark() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.05-3.71 1.05-2.86 0-5.29-1.93-6.16-4.52H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.12-1.43.34-2.11V7.05H2.18A10.96 10.96 0 0 0 1 12c0 1.78.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335" />
    </svg>
  );
}

export default function StartPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-zinc-400" />
      </div>
    );
  }

  if (session) {
    if (typeof window !== "undefined") window.location.href = CREATE_URL;
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <p className="text-zinc-500">Launching Esteemed Create...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-zinc-100">
      <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Left — value prop */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Esteemed Create
          </p>
          <h1 className="text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
            Build your website for free today.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-600">
            Sign in to get started with your website. No credit card required.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Create your website in minutes with AI",
              "Get a mobile-friendly, responsive design",
              "Publish to our secure, scalable cloud",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <TickRounded className="w-7 h-7" />
                <span className="text-zinc-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-zinc-400">
            * Free plan includes AI-powered site generation and preview. Hosting included with paid plans.
          </p>
        </div>

        {/* Right — sign in card */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl shadow-ink/5 md:p-10">
            <div className="mb-6 flex items-center justify-center">
              <img src="/esteemed-logo.svg" alt="Esteemed" className="h-8 w-auto" />
            </div>

            <h2 className="mb-2 text-center text-2xl font-bold text-ink">
              Sign in to start building
            </h2>
            <p className="mb-8 text-center text-sm text-zinc-500">
              One account for websites, apps, and cloud.
            </p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => signIn("keycloak", { callbackUrl: CREATE_URL })}
                className="flex min-h-12 w-full items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.015] hover:bg-zinc-800"
              >
                Continue with email
              </button>

              <div className="flex items-center gap-3 py-2">
                <div className="h-px flex-1 bg-zinc-200" />
                <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  or
                </span>
                <div className="h-px flex-1 bg-zinc-200" />
              </div>

              <button
                type="button"
                onClick={() => signIn("keycloak", { callbackUrl: CREATE_URL }, { kc_idp_hint: "google" })}
                className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-ink hover:bg-zinc-50"
              >
                <GoogleMark />
                Continue with Google
              </button>
            </div>

            <p className="mt-8 text-center text-xs leading-5 text-zinc-400">
              By continuing, you agree to the Esteemed Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
