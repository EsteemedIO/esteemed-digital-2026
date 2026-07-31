"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Select, SelectItem } from "@heroui/react";
import { Download, Loader2 } from "lucide-react";

const TITLES = [
  { key: "ceo", label: "CEO" },
  { key: "coo", label: "COO" },
  { key: "cfo", label: "CFO" },
  { key: "other", label: "Other" },
];

const COMPANY_TYPES = [
  { key: "staffing", label: "Staffing" },
  { key: "msp", label: "Managed Services Provider" },
  { key: "other", label: "Other" },
];

const REVENUE_RANGES = [
  { key: "1-3m", label: "$1–3M" },
  { key: "3-5m", label: "$3–5M" },
  { key: "5-10m", label: "$5–10M" },
  { key: "10-20m", label: "$10–20M" },
  { key: "20m+", label: "$20M+" },
];

const inputClass = "w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm font-medium text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent";

const selectClassNames = {
  trigger: "min-h-12 rounded-xl border border-zinc-200 bg-white px-4 shadow-none data-[hover=true]:border-zinc-400",
  value: "text-sm font-medium text-ink",
  popoverContent: "z-[100] rounded-xl border border-zinc-200 bg-white shadow-xl",
};

export default function TransformBriefButton() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", title: "",
    company: "", website: "", phone: "", companyType: "",
    revenue: "", notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.firstName || !form.lastName) {
      setError("First name, last name, and email are required.");
      return;
    }
    setSubmitting(true);
    setError("");

    try {
      const titleLabel = TITLES.find((t) => t.key === form.title)?.label || form.title;
      const typeLabel = COMPANY_TYPES.find((t) => t.key === form.companyType)?.label || form.companyType;
      const revenueLabel = REVENUE_RANGES.find((r) => r.key === form.revenue)?.label || form.revenue;

      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          company: form.company,
          phone: form.phone,
          websiteUrl: form.website,
          source: "transform-program",
          formId: "transform_brief",
          interests: ["Merger Prospects"],
          message: form.notes || "Requested Transform brief download",
          details: {
            campaign: "Merger Prospects",
            tenant: "Esteemed",
            firstName: form.firstName,
            lastName: form.lastName,
            title: titleLabel,
            companyType: typeLabel,
            annualRevenue: revenueLabel,
            website: form.website,
            notes: form.notes,
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
        size="2xl"
        scrollBehavior="inside"
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
                <div className="text-center py-8">
                  <Download className="w-10 h-10 text-ink mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-ink mb-3">Your brief is ready</h3>
                  <p className="text-zinc-500 mb-6">
                    Thank you, {form.firstName}. Click below to download.
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
                    Tell us about yourself and your business. We&apos;ll send the complete Transform program overview.
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
                  <input required type="text" placeholder="First name" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass} />
                  <input required type="text" placeholder="Last name" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <input required type="email" placeholder="Business email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                  <Select
                    aria-label="Title"
                    placeholder="Title"
                    selectedKeys={form.title ? new Set([form.title]) : new Set()}
                    onSelectionChange={(keys) => update("title", [...keys][0] || "")}
                    variant="bordered"
                    classNames={selectClassNames}
                  >
                    {TITLES.map((t) => <SelectItem key={t.key}>{t.label}</SelectItem>)}
                  </Select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <input type="text" placeholder="Company name" value={form.company} onChange={(e) => update("company", e.target.value)} className={inputClass} />
                  <input type="url" placeholder="Website" value={form.website} onChange={(e) => update("website", e.target.value)} className={inputClass} />
                </div>

                <div className="grid gap-4 sm:grid-cols-3 mt-4">
                  <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                  <Select
                    aria-label="Type of company"
                    placeholder="Type of company"
                    selectedKeys={form.companyType ? new Set([form.companyType]) : new Set()}
                    onSelectionChange={(keys) => update("companyType", [...keys][0] || "")}
                    variant="bordered"
                    classNames={selectClassNames}
                  >
                    {COMPANY_TYPES.map((t) => <SelectItem key={t.key}>{t.label}</SelectItem>)}
                  </Select>
                  <Select
                    aria-label="Annual revenue"
                    placeholder="Annual revenue"
                    selectedKeys={form.revenue ? new Set([form.revenue]) : new Set()}
                    onSelectionChange={(keys) => update("revenue", [...keys][0] || "")}
                    variant="bordered"
                    classNames={selectClassNames}
                  >
                    {REVENUE_RANGES.map((r) => <SelectItem key={r.key}>{r.label}</SelectItem>)}
                  </Select>
                </div>

                <textarea
                  placeholder="Anything else that you would like us to know."
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  rows={3}
                  className={`${inputClass} mt-4 resize-none`}
                />
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
                  Get the Brief
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
