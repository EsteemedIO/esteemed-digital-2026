"use client";

import { useState } from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@heroui/react";

const partnershipTypes = ["Agency", "Talent Channel Partner", "Software Channel Partner"];

const fieldClasses = {
  inputWrapper: "rounded-xl border border-zinc-200 bg-white shadow-none data-[hover=true]:border-zinc-400 group-data-[focus=true]:border-ink",
  label: "font-semibold text-zinc-600",
};

export default function PartnerRegistrationForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    websiteUrl: "",
    phone: "",
    partnershipType: "",
    partneringNeeds: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (key) => (event) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const name = `${values.firstName} ${values.lastName}`.trim();
    const message = [
      values.partneringNeeds,
      values.partnershipType ? `Partnership type: ${values.partnershipType}` : "",
      values.websiteUrl ? `Website: ${values.websiteUrl}` : "",
      values.phone ? `Phone: ${values.phone}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: values.email,
          company: "",
          interests: ["Partner application", values.partnershipType].filter(Boolean),
          message,
          source: "partner-application",
          formId: "partner_application",
          details: {
            first_name: values.firstName,
            last_name: values.lastName,
            website_url: values.websiteUrl,
            phone: values.phone,
            partnership_type: values.partnershipType,
            partnering_needs: values.partneringNeeds,
          },
        }),
      });

      if (!response.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-[600px] rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center text-emerald-900">
        <p className="text-lg font-bold">Thank you. Your application has been received.</p>
        <p className="mt-2 text-sm">We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid max-w-[600px] gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          isRequired
          label="First Name"
          value={values.firstName}
          onChange={update("firstName")}
          classNames={fieldClasses}
        />
        <Input
          isRequired
          label="Last Name"
          value={values.lastName}
          onChange={update("lastName")}
          classNames={fieldClasses}
        />
      </div>
      <Input
        isRequired
        type="email"
        label="Email"
        value={values.email}
        onChange={update("email")}
        classNames={fieldClasses}
      />
      <Input
        type="url"
        label="Website URL"
        value={values.websiteUrl}
        onChange={update("websiteUrl")}
        classNames={fieldClasses}
      />
      <Input
        type="tel"
        label="Phone Number"
        value={values.phone}
        onChange={update("phone")}
        classNames={fieldClasses}
      />
      <Select
        isRequired
        label="What type of partnership are you interested in?"
        selectedKeys={values.partnershipType ? new Set([values.partnershipType]) : new Set([])}
        onSelectionChange={(keys) => {
          const next = Array.from(keys)[0] || "";
          setValues((current) => ({ ...current, partnershipType: next }));
        }}
        classNames={{
          trigger: "min-h-14 rounded-xl border border-zinc-200 bg-white shadow-none data-[hover=true]:border-zinc-400",
          label: "font-semibold text-zinc-600",
          value: "text-sm text-ink",
          popoverContent: "rounded-xl",
        }}
      >
        {partnershipTypes.map((type) => (
          <SelectItem key={type}>{type}</SelectItem>
        ))}
      </Select>
      <Textarea
        label="How would you best describe your partnering needs?"
        minRows={5}
        value={values.partneringNeeds}
        onChange={update("partneringNeeds")}
        classNames={fieldClasses}
      />
      {error && <p className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      <Button
        type="submit"
        isLoading={submitting}
        radius="full"
        className="mt-2 bg-ink py-6 text-base font-bold text-white transition-transform hover:scale-[1.02]"
      >
        Apply
      </Button>
    </form>
  );
}
