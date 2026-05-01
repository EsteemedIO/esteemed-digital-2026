"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Sparkles, Users } from "lucide-react";

const REDIRECT_URLS = {
  create: "https://create.esteemed.io",
  colleagues: "/colleagues/hire-signup",
};

export default function SignupPage() {
  const searchParams = useSearchParams();
  const redirectParam = searchParams.get("redirect");
  const promptParam = searchParams.get("prompt");

  const [step, setStep] = useState("form"); // "form" | "choose"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // v1: placeholder — real auth in v2
    // POST to lead capture so we capture the signup
    try {
      await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          prompt: promptParam || "",
          source: redirectParam ? `signup-${redirectParam}` : "signup",
        }),
      });
    } catch {
      // Don't block user
    }

    setSubmitting(false);

    // If redirect param exists, go straight there
    if (redirectParam && REDIRECT_URLS[redirectParam]) {
      const url = REDIRECT_URLS[redirectParam];
      if (redirectParam === "create" && promptParam) {
        window.location.href = `${url}?prompt=${encodeURIComponent(promptParam)}`;
      } else {
        window.location.href = url;
      }
      return;
    }

    // Otherwise show the path chooser
    setStep("choose");
  };

  if (step === "choose") {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-ink mb-3">Welcome to Esteemed.</h1>
            <p className="text-zinc-600">What would you like to do?</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Create path */}
            <a
              href={REDIRECT_URLS.create}
              className="group rounded-2xl border-2 border-zinc-200 p-8 text-center hover:border-accent hover:shadow-lg transition-all"
            >
              <Sparkles className="w-10 h-10 text-ink mx-auto mb-4" strokeWidth={1.5} />
              <h2 className="text-xl font-bold text-ink mb-2">Build something</h2>
              <p className="text-sm text-zinc-600 mb-4">
                Build a website or app with AI. Real experts help you grow.
              </p>
              <span className="inline-flex items-center px-6 py-2.5 rounded-full bg-accent text-ink text-sm font-semibold group-hover:bg-accent-hover transition-colors">
                Open Create →
              </span>
            </a>

            {/* Hire path */}
            <a
              href={REDIRECT_URLS.colleagues}
              className="group rounded-2xl border-2 border-zinc-200 p-8 text-center hover:border-accent hover:shadow-lg transition-all"
            >
              <Users className="w-10 h-10 text-ink mx-auto mb-4" strokeWidth={1.5} />
              <h2 className="text-xl font-bold text-ink mb-2">Hire talent</h2>
              <p className="text-sm text-zinc-600 mb-4">
                Find vetted experts for your project. Designers, developers, marketers, strategists.
              </p>
              <span className="inline-flex items-center px-6 py-2.5 rounded-full bg-accent text-ink text-sm font-semibold group-hover:bg-accent-hover transition-colors">
                Open Colleagues →
              </span>
            </a>
          </div>

          <p className="text-center mt-6">
            <a href="/colleagues/jobseeker-signup" className="text-sm text-zinc-500 hover:text-ink underline underline-offset-4">
              Looking for work? Sign up as a Jobseeker →
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-ink mb-2">Create your account</h1>
          <p className="text-sm text-zinc-600">One account for everything Esteemed.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-ink outline-none focus:border-zinc-400 transition-colors"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-ink outline-none focus:border-zinc-400 transition-colors"
          />
          <input
            type="password"
            required
            minLength={8}
            placeholder="Password (8+ characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-ink outline-none focus:border-zinc-400 transition-colors"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors disabled:opacity-60"
          >
            {submitting ? "Creating account..." : "Create account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-zinc-500">
            Already have an account?{" "}
            <Link href="/login" className="text-ink font-medium underline underline-offset-4 hover:no-underline">
              Log in
            </Link>
          </p>
        </div>

        <p className="text-xs text-zinc-400 mt-6 text-center">
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-zinc-600">Terms</Link> and{" "}
          <Link href="/privacy" className="underline hover:text-zinc-600">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
