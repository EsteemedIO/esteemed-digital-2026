"use client";

import { signIn } from "next-auth/react";

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

export default function AuthEntryCard({ mode = "login", callbackUrl = "/" }) {
  const isSignup = mode === "signup";

  function continueWithEmail() {
    signIn("keycloak", { callbackUrl });
  }

  function continueWithGoogle() {
    signIn("keycloak", { callbackUrl }, { kc_idp_hint: "google" });
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-accent px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-ink/10 bg-white p-6 shadow-xl shadow-ink/10 md:p-10">
        <div className="mx-auto mb-8 flex w-fit items-center justify-center rounded-xl border border-zinc-200 bg-white px-8 py-5 shadow-sm">
          <img src="/esteemed-logo.svg" alt="Esteemed" className="h-10 w-auto" />
        </div>

        <div className="mb-6 text-center">
          <h1 className="text-3xl font-black text-ink md:text-4xl">
            {isSignup ? "Create your account" : "Welcome"}
          </h1>
          <p className="mt-2 text-base text-zinc-600">
            One Esteemed account for websites, apps, Cloud, and support.
          </p>
        </div>

        <div className="mb-6 grid rounded-xl bg-zinc-100 p-1 text-sm font-bold">
          <div className="grid grid-cols-2">
            <a
              href="/login"
              className={`rounded-lg px-4 py-3 text-center transition-colors ${!isSignup ? "bg-white text-ink shadow-sm" : "text-zinc-500 hover:text-ink"}`}
            >
              Login
            </a>
            <a
              href="/signup"
              className={`rounded-lg px-4 py-3 text-center transition-colors ${isSignup ? "bg-white text-ink shadow-sm" : "text-zinc-500 hover:text-ink"}`}
            >
              Sign Up
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={continueWithEmail}
            className="flex min-h-12 w-full items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-black text-white transition-transform hover:scale-[1.015] hover:bg-zinc-800"
          >
            {isSignup ? "Continue with email" : "Sign in with email"}
          </button>

          <div className="flex items-center gap-3 py-2">
            <div className="h-px flex-1 bg-zinc-200" />
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">or continue with</span>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <button
            type="button"
            onClick={continueWithGoogle}
            className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-black text-ink transition-colors hover:border-ink hover:bg-zinc-50"
          >
            <GoogleMark />
            Google
          </button>
        </div>

        <p className="mt-8 text-center text-xs leading-5 text-zinc-500">
          By continuing, you agree to the Esteemed Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
