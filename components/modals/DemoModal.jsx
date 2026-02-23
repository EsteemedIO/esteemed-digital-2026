"use client";

import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Input, Select, SelectItem, Textarea, RadioGroup, Radio,
  Button as HButton, Spinner
} from "@heroui/react";

export default function DemoModal({ isOpen, onOpenChange, submitting, onSubmit }) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg" scrollBehavior="inside" backdrop="blur" placement="center">
      <ModalContent>{(onClose) => (<>
        <ModalHeader className="flex flex-col gap-1">Request a Demo</ModalHeader>
        <ModalBody>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input label="Full name" placeholder="First Last" required />
            <Input label="Work email" placeholder="you@example.com" type="email" required />
            <Input label="Company" placeholder="Acme, Inc." className="md:col-span-2" />
            <Select label="Company size" placeholder="Select size">
              <SelectItem key="1-10">1–10</SelectItem><SelectItem key="11-50">11–50</SelectItem>
              <SelectItem key="51-200">51–200</SelectItem><SelectItem key="201-1000">201–1,000</SelectItem>
              <SelectItem key=">1000">1,000+</SelectItem>
            </Select>
            <Select label="Primary interest" placeholder="Pick a product">
              <SelectItem key="intelligence">Esteemed Intelligence</SelectItem>
              <SelectItem key="ai">Esteemed AI</SelectItem>
              <SelectItem key="agents">Esteemed Agents</SelectItem>
              <SelectItem key="appbuilder">AI App Builder (API)</SelectItem>
              <SelectItem key="hcai">Human Capital AI</SelectItem>
            </Select>
            <RadioGroup label="Deployment preference" orientation="horizontal" defaultValue="cloud" className="md:col-span-2">
              <Radio value="cloud">Cloud</Radio><Radio value="private-cloud">Private Cloud</Radio>
              <Radio value="vpc">Your VPC</Radio><Radio value="onprem">On-prem</Radio>
            </RadioGroup>
            <Textarea className="md:col-span-2" label="What would you like to see?"
              placeholder="Tell us about your use case…" minRows={4} />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="px-4 py-2 rounded-full border border-zinc-300/70 dark:border-zinc-700/70" onClick={onClose}>Cancel</button>
          <HButton radius="full" onClick={() => onSubmit({ form: "demo" })} disabled={submitting}>
            {submitting ? <Spinner size="sm" /> : "Request demo"}
          </HButton>
        </ModalFooter>
      </>)}</ModalContent>
    </Modal>
  );
}
