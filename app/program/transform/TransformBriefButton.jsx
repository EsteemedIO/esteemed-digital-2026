"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";
import { ArrowRight, Download, Loader2 } from "lucide-react";

export default function TransformBriefButton() {
  const [open, setOpen] = useState(false);
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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-base font-bold text-white transition hover:border-white/50"
      >
        Download the full brief&nbsp;&darr;
      </button>

      <Modal
        isOpen={open}
        onClose={() => { setOpen(false); setError(""); }}
        size="lg"
        classNames={{
          base: "rounded-2xl",
          header: "border-b border-zinc-100 pb-4",
          body: "py-5",
        }}
      >
        <ModalContent>
          {submitted ? (
            <>
              <ModalBody>
                <div className="text-center py-6">
                  <Download className="w-10 h-10 text-ink mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-ink mb-3">Your brief is ready</h3>
                  <p className="text-zinc-500 mb-6">
                    Thank you, {form.name.split(" ")[0]}. Click below to download.
                  </p>
                  <a
                    href="/downloads/esteemed-transform-brief.pdf"
                    download
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download the Full Brief (PDF)
                  </a>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={() => setOpen(false)} className="font-semibold text-zinc-500">
                  Close
                </Button>
              </ModalFooter>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <ModalHeader>
                <div>
                  <h3 className="text-xl font-bold text-ink">Download the full brief</h3>
                  <p className="text-sm text-zinc-500 font-normal mt-1">
                    Enter your details to receive the complete Transform program overview.
                  </p>
                </div>
              </ModalHeader>
              <ModalBody>
                {error && (
                  <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {error}
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
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
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
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
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={() => setOpen(false)} className="font-semibold text-zinc-500">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  isLoading={submitting}
                  className="bg-ink text-white font-bold px-6"
                  radius="lg"
                >
                  {submitting ? "Submitting..." : "Get the Brief"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
