"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Select, SelectItem } from "@heroui/react";

const interestOptions = [
  { key: "create", label: "Create" },
  { key: "cloud-hosting", label: "Cloud hosting" },
  { key: "curate", label: "Curate" },
  { key: "acquire", label: "Acquire" },
  { key: "hire", label: "Hire" },
  { key: "intelligence", label: "Intelligence" },
  { key: "agents", label: "Agents" },
  { key: "colleagues", label: "Colleagues" },
  { key: "support", label: "Support" },
  { key: "website-design", label: "Website design" },
];
const interestLabels = Object.fromEntries(interestOptions.map((option) => [option.key, option.label]));

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [interests, setInterests] = useState(new Set([]));
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const selectedInterests = Array.from(interests).map((key) => interestLabels[key] || key);

    try {
      await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          interests: selectedInterests,
          message,
          source: "contact-form",
        }),
      });
    } catch {
      // Failures logged server-side; don't block the user
    }

    router.push("/thanks");
  };

  return (
    <>
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">Get in touch.</h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Tell us about your project or ask us anything. A real person responds within one business day.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm outline-none focus:border-zinc-400 transition-colors"
            />
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm outline-none focus:border-zinc-400 transition-colors"
            />
            <input
              type="text"
              placeholder="Company (optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm outline-none focus:border-zinc-400 transition-colors"
            />
            <Select
              label="What are you interested in?"
              placeholder="Select one or more"
              selectionMode="multiple"
              selectedKeys={interests}
              onSelectionChange={(keys) => setInterests(keys === "all" ? new Set(interestOptions.map((option) => option.key)) : keys)}
              radius="lg"
              classNames={{
                trigger: "min-h-12 rounded-xl border border-zinc-200 bg-white shadow-none data-[hover=true]:border-zinc-400",
                label: "text-zinc-500",
                value: "text-sm text-ink",
                popoverContent: "rounded-xl",
              }}
            >
              {interestOptions.map((option) => (
                <SelectItem key={option.key}>{option.label}</SelectItem>
              ))}
            </Select>
            <textarea
              required
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm outline-none focus:border-zinc-400 transition-colors resize-none"
            />
            <input type="hidden" name="source" value="contact-form" />
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send message"}
            </button>
          </form>
          <p className="text-xs text-zinc-400 mt-4 text-center">
            We respond within one business day. We don't share your information.
          </p>

          {/* Calendar section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-ink mb-4">Prefer to talk live?</h2>
            <p className="text-zinc-600 mb-6">
              Book a 15-minute call. No pressure, no pitch — just an honest conversation about what you need.
            </p>
            {/* Cal.com embed placeholder */}
            <div className="rounded-2xl border border-zinc-200 p-8 text-zinc-400 text-sm">
              Calendar booking — coming soon
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
