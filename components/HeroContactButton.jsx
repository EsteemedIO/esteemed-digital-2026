"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function HeroContactButton({
  label = "Contact Us",
  context = {},
  className = "",
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center justify-center gap-2 rounded-full border-4 border-[#7A3FF2] bg-white px-6 py-3 text-base font-bold text-ink shadow-xl transition-transform hover:scale-[1.03] ${className}`}
      >
        <MessageSquare className="h-5 w-5" strokeWidth={2.3} />
        {label}
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        placement="center"
        size="2xl"
        scrollBehavior="inside"
        classNames={{
          base: "rounded-2xl",
          body: "px-0 pb-6",
          closeButton: "right-4 top-4",
        }}
      >
        <ModalContent>
          <ModalHeader className="px-6 pb-0 pt-6 text-2xl font-bold text-ink">
            Contact Us
          </ModalHeader>
          <ModalBody>
            <div className="px-6">
              <LeadCaptureForm
                compact
                context={{
                  source_surface: "hero_contact_button",
                  ...context,
                }}
                preselectedInterests={["hire-experts"]}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
