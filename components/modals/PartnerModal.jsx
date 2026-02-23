"use client";

import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Input, Select, SelectItem, Textarea, Checkbox,
  Button as HButton, Spinner
} from "@heroui/react";

export default function PartnerModal({ isOpen, onOpenChange, submitting, onSubmit }) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg" scrollBehavior="inside" backdrop="blur" placement="center">
      <ModalContent>{(onClose) => (<>
        <ModalHeader className="flex flex-col gap-1">Become a Partner</ModalHeader>
        <ModalBody>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input label="Company" placeholder="Acme, Inc." required />
            <Input label="Website" placeholder="https://example.com" type="url" />
            <Input label="Contact name" placeholder="First Last" required />
            <Input label="Work email" placeholder="you@example.com" type="email" required />
            <Select label="Region" placeholder="Select region">
              <SelectItem key="na">North America</SelectItem>
              <SelectItem key="eu">Europe</SelectItem>
              <SelectItem key="apac">APAC</SelectItem>
              <SelectItem key="latam">LATAM</SelectItem>
            </Select>
            <Select label="Partner type" placeholder="Select type">
              <SelectItem key="solution">Solution Partner</SelectItem>
              <SelectItem key="tech">Technology Partner</SelectItem>
              <SelectItem key="cloud">Cloud Partner</SelectItem>
            </Select>
            <div className="md:col-span-2"><Checkbox defaultSelected>Agree to program terms</Checkbox></div>
            <Textarea className="md:col-span-2" label="How do you plan to partner?"
              placeholder="Integrations, co-sell, marketplace, services…" minRows={4} />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="px-4 py-2 rounded-full border border-zinc-300/70 dark:border-zinc-700/70" onClick={onClose}>Cancel</button>
          <HButton radius="full" onClick={() => onSubmit({ form: "partner" })} disabled={submitting}>
            {submitting ? <Spinner size="sm" /> : "Apply"}
          </HButton>
        </ModalFooter>
      </>)}</ModalContent>
    </Modal>
  );
}
