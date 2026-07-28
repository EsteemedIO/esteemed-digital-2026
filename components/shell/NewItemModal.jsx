"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tab, Tabs } from "@heroui/react";
import { ArrowRight, Globe, Server, Headphones, Loader2 } from "lucide-react";
import { checkoutHref } from "@/lib/pricing-catalog";

const PLANS = {
  website: {
    title: "New Website",
    icon: Globe,
    tabs: {
      "self-managed": {
        label: "Self-Managed",
        plans: [
          { name: "Cloud Basic", price: "$9.99/mo", desc: "1 site, 25 GB storage, SSL, CDN", lookupKey: "cloud_basic_monthly" },
          { name: "Cloud Plus", price: "$14.99/mo", desc: "1 site, 50 GB, staging environment", lookupKey: "cloud_plus_monthly" },
          { name: "Cloud Pro", price: "$19.99/mo", desc: "1 site, 100 GB, priority support", lookupKey: "cloud_pro_monthly" },
          { name: "Cloud Multi", price: "$39.99/mo", desc: "Up to 5 sites, 200 GB", lookupKey: "cloud_multi_monthly" },
        ],
      },
      managed: {
        label: "Managed",
        plans: [
          { name: "Essential", price: "$149/mo", desc: "Done-for-you hosting, 5-page rebuild, 3 support hrs/mo", lookupKey: "managed_essential_monthly" },
          { name: "Growth", price: "$249/mo", desc: "12-page rebuild, 6 support hrs/mo", lookupKey: "managed_growth_monthly" },
          { name: "Business", price: "$499/mo", desc: "Full standard site, 10 support hrs/mo", lookupKey: "managed_business_monthly" },
        ],
      },
    },
  },
  vps: {
    title: "New VPS",
    icon: Server,
    plans: [
      { name: "VPS Starter", price: "$19.99/mo", desc: "2 GB RAM, 1 vCPU, 50 GB NVMe SSD", lookupKey: "vps_starter_monthly" },
      { name: "VPS Standard", price: "$39.99/mo", desc: "4 GB RAM, 2 vCPUs, 80 GB NVMe SSD", lookupKey: "vps_standard_monthly" },
      { name: "VPS Performance", price: "$79.99/mo", desc: "8 GB RAM, 4 vCPUs, 160 GB NVMe SSD", lookupKey: "vps_performance_monthly" },
      { name: "VPS Enterprise", price: "$159.99/mo", desc: "16 GB RAM, 8 vCPUs, 320 GB NVMe SSD", lookupKey: "vps_enterprise_monthly" },
    ],
  },
  support: {
    title: "Support Request",
    icon: Headphones,
    plans: [
      { name: "3 Hours", price: "$255/mo", desc: "3 hours/mo at $85/hr", lookupKey: "support_3hr_monthly" },
      { name: "6 Hours", price: "$510/mo", desc: "6 hours/mo at $85/hr", lookupKey: "support_6hr_monthly" },
      { name: "8 Hours", price: "$680/mo", desc: "8 hours/mo at $85/hr", lookupKey: "support_8hr_monthly" },
      { name: "10 Hours", price: "$850/mo", desc: "10 hours/mo at $85/hr", lookupKey: "support_10hr_monthly" },
    ],
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
