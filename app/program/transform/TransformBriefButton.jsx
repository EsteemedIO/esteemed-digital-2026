"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select, SelectItem, Textarea } from "@heroui/react";
import { Download } from "lucide-react";

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

const fieldClassNames = {
  inputWrapper: "min-h-12 rounded-xl border border-zinc-200 bg-white shadow-none data-[hover=true]:border-zinc-400 group-data-[focus=true]:border-zinc-500",
  input: "text-sm font-medium text-ink placeholder:text-zinc-400",
};

const selectClassNames = {
  trigger: "relative min-h-12 rounded-xl border border-zinc-200 bg-white px-4 shadow-none data-[hover=true]:border-zinc-400 data-[focus=true]:border-zinc-500",
  innerWrapper: "pr-8",
  value: "text-sm font-medium text-ink",
  selectorIcon: "left-auto right-4 text-zinc-500",
  popoverContent: "z-[100] rounded-xl border border-zinc-200 bg-white shadow-xl",
};

const textareaClassNames = {
  ...fieldClassNames,
  inputWrapper: "min-h-24 rounded-xl border border-zinc-200 bg-white shadow-none data-[hover=true]:border-zinc-400 group-data-[focus=true]:border-zinc-500",
  input: "min-h-16 text-sm font-medium leading-6 text-ink placeholder:text-zinc-400",
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
            leadSource: "web",
            utmSource: "esteemed.io",
            utmCampaign: "transform-program",
          },
          bestEffort: true,
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
          base: "rounded-2xl bg-white",
          backdrop: "bg-black/50",
          header: "border-b border-zinc-100 pb-4",
          body: "py-5",
          closeButton: "top-4 right-4 text-zinc-400 hover:text-ink",
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
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
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
                  <Input required type="text" placeholder="First name" value={form.firstName} onValueChange={(value) => update("firstName", value)} variant="bordered" classNames={fieldClassNames} />
                  <Input required type="text" placeholder="Last name" value={form.lastName} onValueChange={(value) => update("lastName", value)} variant="bordered" classNames={fieldClassNames} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <Input required type="email" placeholder="Business email" value={form.email} onValueChange={(value) => update("email", value)} variant="bordered" classNames={fieldClassNames} />
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
                  <Input type="text" placeholder="Company name" value={form.company} onValueChange={(value) => update("company", value)} variant="bordered" classNames={fieldClassNames} />
                  <Input type="url" placeholder="Website" value={form.website} onValueChange={(value) => update("website", value)} variant="bordered" classNames={fieldClassNames} />
                </div>

                <div className="grid gap-4 sm:grid-cols-3 mt-4">
                  <Input type="tel" placeholder="Phone" value={form.phone} onValueChange={(value) => update("phone", value)} variant="bordered" classNames={fieldClassNames} />
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

                <Textarea
                  placeholder="Anything else that you would like us to know."
                  value={form.notes}
                  onValueChange={(value) => update("notes", value)}
                  minRows={3}
                  variant="bordered"
                  className="mt-4"
                  classNames={textareaClassNames}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  isLoading={submitting}
                  radius="full"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-accent-hover disabled:opacity-50"
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
