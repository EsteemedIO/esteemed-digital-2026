"use client";

import { Sparkles, Users, X } from "lucide-react";

export default function LoginFork({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative w-full max-w-3xl mx-6 rounded-2xl bg-paper border border-zinc-200 shadow-2xl p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-ink transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Create card */}
          <div className="rounded-2xl border border-zinc-200 p-8 flex flex-col items-center text-center">
            <Sparkles className="w-10 h-10 text-ink mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-ink mb-2">I want to build something.</h3>
            <p className="text-sm text-zinc-600 mb-6">
              Build a website or app with AI. Real experts help you grow.
            </p>
            <button
              onClick={() => {
                window.location.href = "https://create.esteemed.io/login";
              }}
              className="w-full py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Continue as Create &rarr;
            </button>
          </div>

          {/* Hire card */}
          <div className="rounded-2xl border border-zinc-200 p-8 flex flex-col items-center text-center">
            <Users className="w-10 h-10 text-ink mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-ink mb-2">I want to hire talent.</h3>
            <p className="text-sm text-zinc-600 mb-6">
              Find vetted experts for your project. Designers, developers, marketers, strategists.
            </p>
            <button
              onClick={() => {
                window.location.href = "/colleagues/hire-signup";
              }}
              className="w-full py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Continue as Hire &rarr;
            </button>
            <a
              href="/colleagues/jobseeker-signup"
              className="mt-4 text-sm text-zinc-500 underline underline-offset-4 hover:text-ink transition-colors"
            >
              Sign up as a Jobseeker &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
