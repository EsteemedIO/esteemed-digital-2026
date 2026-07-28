"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tab, Tabs } from "@heroui/react";
import { Globe, Server, Headphones, Loader2 } from "lucide-react";
import { checkoutHref } from "@/lib/pricing-catalog";
import { cloudTiers, managedHostingTiers, supportTiers, vpsTiers } from "@/lib/data";

function planFromTier(tier) {
  return {
    name: tier.name,
    price: typeof tier.monthly === "number" ? `$${tier.monthly}/mo` : tier.price || "Custom",
    desc: tier.description,
    lookupKey: tier.lookupKey,
  };
}

const PLANS = {
  website: {
    title: "New Website",
    icon: Globe,
    tabs: {
      "self-managed": {
        label: "Self-Managed",
        plans: cloudTiers.map(planFromTier),
      },
      managed: {
        label: "Managed",
        plans: managedHostingTiers.filter((tier) => tier.monthly !== null).map(planFromTier),
      },
    },
  },
  vps: {
    title: "New VPS",
    icon: Server,
    plans: vpsTiers.map(planFromTier),
  },
  support: {
    title: "Support Request",
    icon: Headphones,
    plans: supportTiers.filter((tier) => tier.lookupKey).map(planFromTier),
  },
};

function PlanCard({ plan, onSelect, loading }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(plan)}
      disabled={loading}
      className="w-full text-left rounded-xl border border-zinc-200 bg-white p-4 hover:border-zinc-400 hover:shadow-sm transition-all disabled:opacity-50"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-ink">{plan.name}</span>
        <span className="text-sm font-bold text-ink">{plan.price}</span>
      </div>
      <p className="text-sm text-zinc-500">{plan.desc}</p>
    </button>
  );
}

export default function NewItemModal({ isOpen, type, onClose }) {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("self-managed");

  if (!type || !PLANS[type]) return null;

  const config = PLANS[type];
  const Icon = config.icon;
  const hasTabs = !!config.tabs;
  const plans = hasTabs ? config.tabs[activeTab]?.plans || [] : config.plans || [];

  function handleSelect(plan) {
    setLoading(true);
    const href = checkoutHref({
      lookupKey: plan.lookupKey,
      successPath: "/dashboard/sites?purchased=true",
      cancelPath: "/dashboard/sites",
    });
    window.location.href = href;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => { setLoading(false); onClose(); }}
      size="lg"
      classNames={{
        base: "rounded-2xl",
        header: "border-b border-zinc-100 pb-4",
        body: "py-5",
      }}
    >
      <ModalContent>
        <ModalHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <Icon size={20} className="text-ink" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-ink">{config.title}</h2>
              <p className="text-sm text-zinc-500 font-normal">Select a plan to continue to checkout</p>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          {hasTabs && (
            <Tabs
              selectedKey={activeTab}
              onSelectionChange={(key) => setActiveTab(String(key))}
              classNames={{
                tabList: "bg-zinc-100 rounded-lg p-1 mb-4",
                tab: "rounded-md text-sm font-semibold",
                cursor: "bg-white shadow-sm rounded-md",
              }}
            >
              {Object.entries(config.tabs).map(([key, tab]) => (
                <Tab key={key} title={tab.label} />
              ))}
            </Tabs>
          )}
          <div className="space-y-3">
            {plans.map((plan) => (
              <PlanCard key={plan.lookupKey} plan={plan} onSelect={handleSelect} loading={loading} />
            ))}
          </div>
          {loading && (
            <div className="flex items-center justify-center gap-2 pt-4 text-sm text-zinc-500">
              <Loader2 className="w-4 h-4 animate-spin" />
              Redirecting to checkout…
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose} className="font-semibold text-zinc-500">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
