"use client";

import { useState } from "react";
import { ArrowRight, Download, Loader2 } from "lucide-react";

export default function TransformLeadForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.name) {
      setError("Name and email are required.");
      return;
    }
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          source: "transform-program",
          formId: "transform_brief",
          interests: ["Merger Prospects"],
          message: "Requested Transform brief download",
          details: {
            campaign: "Merger Prospects",
            tenant: "Esteemed",
          },
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent bg-white p-8 text-center">
        <Download className="w-10 h-10 text-ink mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-ink mb-3">Your brief is ready</h3>
        <p className="text-zinc-500 mb-6">Thank you, {form.name.split(" ")[0]}. Click below to download.</p>
        <a
          href="/downloads/esteemed-transform-brief.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download the Full Brief (PDF)
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-8">
      <h3 className="text-2xl font-bold text-ink mb-2">Download the full brief</h3>
      <p className="text-zinc-500 mb-6">Enter your details to receive the complete Transform program overview.</p>

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <input
          required
          type="text"
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-xl border border-zinc-200 px-4 py-3 text-base font-medium text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          required
          type="email"
          placeholder="Business email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="rounded-xl border border-zinc-200 px-4 py-3 text-base font-medium text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <input
          type="text"
          placeholder="Company name"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="rounded-xl border border-zinc-200 px-4 py-3 text-base font-medium text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="rounded-xl border border-zinc-200 px-4 py-3 text-base font-medium text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors disabled:opacity-50"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Get the Brief
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-zinc-400">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
