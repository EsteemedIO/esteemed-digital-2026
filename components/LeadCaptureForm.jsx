"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Select, SelectItem, Textarea } from "@heroui/react";

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
  { key: "local-consult", label: "Local consult" },
];

const interestLabels = Object.fromEntries(interestOptions.map((option) => [option.key, option.label]));

const variants = {
  contact: {
    formId: "contact",
    source: "contact-form",
    title: "Get in touch.",
    description: "Tell us about your project or ask us anything. A real person responds within one business day.",
    submitLabel: "Send message",
    defaultInterests: [],
    messageLabel: "Message",
    messagePlaceholder: "Tell us what you need.",
  },
  consult: {
    formId: "local_consult",
    source: "local-consult",
    title: "Book a local consult.",
    description: "Tell us about your business and what you want to improve. We will follow up to schedule a phone, video, or local South Sound conversation.",
    submitLabel: "Request consult",
    defaultInterests: ["local-consult", "website-design", "cloud-hosting"],
    messageLabel: "What should we cover?",
    messagePlaceholder: "Current site, goals, timeline, budget, or anything you want us to know before we talk.",
  },
};

const fieldClassNames = {
  inputWrapper: "rounded-xl border border-zinc-200 bg-white shadow-none data-[hover=true]:border-zinc-400 group-data-[focus=true]:border-zinc-500",
  label: "font-semibold text-zinc-600",
  input: "text-ink",
};

export function getLeadFormVariant(intent) {
  if (intent === "consult" || intent === "book-consult" || intent === "local-consult") return "consult";
  return "contact";
}

export default function LeadCaptureForm({
  variant = "contact",
  compact = false,
  context = {},
  onSubmittedPath = "/thanks",
}) {
  const router = useRouter();
  const config = variants[variant] || variants.contact;
  const initialInterests = useMemo(() => new Set(config.defaultInterests || []), [config.defaultInterests]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    websiteUrl: "",
    message: "",
  });
  const [interests, setInterests] = useState(initialInterests);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const selectedInterests = Array.from(interests).map((key) => interestLabels[key] || key);

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          websiteUrl: form.websiteUrl,
          interests: selectedInterests,
          message: form.message,
          source: config.source,
          formId: config.formId,
          details: {
            ...context,
            phone: form.phone,
            website_url: form.websiteUrl,
            selected_interests: selectedInterests,
            form_variant: variant,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Lead capture failed.");
      }

      router.push(onSubmittedPath);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
      setSubmitting(false);
    }
  }

  return (
    <div className={compact ? "" : "mx-auto max-w-2xl px-6"}>
      {!compact && (
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-5xl font-bold text-ink md:text-6xl">{config.title}</h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600">{config.description}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {error}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <Input
            isRequired
            label="Name"
            value={form.name}
            onValueChange={(value) => updateField("name", value)}
            classNames={fieldClassNames}
          />
          <Input
            isRequired
            type="email"
            label="Email"
            value={form.email}
            onValueChange={(value) => updateField("email", value)}
            classNames={fieldClassNames}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Phone"
            value={form.phone}
            onValueChange={(value) => updateField("phone", value)}
            classNames={fieldClassNames}
          />
          <Input
            label="Company"
            value={form.company}
            onValueChange={(value) => updateField("company", value)}
            classNames={fieldClassNames}
          />
        </div>

        <Input
          isRequired={config.websiteRequired}
          label={config.websiteRequired ? "Current website" : "Website"}
          placeholder="https://"
          value={form.websiteUrl}
          onValueChange={(value) => updateField("websiteUrl", value)}
          classNames={fieldClassNames}
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
            label: "font-semibold text-zinc-600",
            value: "text-sm text-ink",
            popoverContent: "rounded-xl",
          }}
        >
          {interestOptions.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>

        <Textarea
          isRequired
          label={config.messageLabel}
          placeholder={config.messagePlaceholder}
          minRows={5}
          value={form.message}
          onValueChange={(value) => updateField("message", value)}
          classNames={fieldClassNames}
        />

        <Button
          type="submit"
          radius="full"
          isLoading={submitting}
          className="w-full bg-accent text-sm font-bold text-ink transition-colors hover:bg-accent-hover"
        >
          {config.submitLabel}
        </Button>
      </form>

      {!compact && (
        <p className="mt-4 text-center text-xs text-zinc-400">
          We respond within one business day. We do not share your information.
        </p>
      )}
    </div>
  );
}
