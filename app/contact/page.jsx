"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LeadCaptureForm, { getLeadFormVariant } from "@/components/LeadCaptureForm";

function ContactContent() {
  const searchParams = useSearchParams();
  const variant = getLeadFormVariant(searchParams.get("intent"));

  return (
    <>
      <section className="py-24 md:py-28">
        <LeadCaptureForm
          variant={variant}
          context={{
            page: "/contact",
            intent: searchParams.get("intent") || "contact",
          }}
        />
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<section className="min-h-[calc(100vh-64px)]" />}>
      <ContactContent />
    </Suspense>
  );
}
