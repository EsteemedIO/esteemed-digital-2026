"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button, Chip } from "@heroui/react";
import {
  AlertCircle,
  CheckCircle2,
  Code2,
  Globe,
  Plus,
  RefreshCw,
  Rocket,
  Server,
} from "lucide-react";
import SiteCard from "@/components/dashboard/SiteCard";
import { CREATE_BASE } from "@/components/dashboard/site-utils";

export default function SitesPage() {
  const { status } = useSession();
  const [sites, setSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [inventoryMessage, setInventoryMessage] = useState("");

  async function loadSites() {
    setIsLoading(true);
    setError("");
    setInventoryMessage("");
    try {
      const response = await fetch("/api/cloud/sites", { cache: "no-store" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || "Unable to load sites.");
      setSites(payload.apps || []);
      if (payload.message) setInventoryMessage(payload.message);
    } catch (loadError) {
      setError(loadError.message || "Unable to load sites.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (status === "authenticated") loadSites();
  }, [status]);

  const stats = useMemo(() => {
    const live = sites.filter((site) => ["published", "deployed", "live"].includes(site.status)).length;
    const importing = sites.filter((site) => ["importing", "deploying"].includes(site.status)).length;
    return {
      total: sites.length,
      live,
      drafts: Math.max(0, sites.length - live - importing),
      importing,
    };
  }, [sites]);

  if (status === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-200 border-t-transparent" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/api/auth/signin");
  }


  return (
    <div className="mx-auto max-w-[1440px]">
      <section className="mb-6 rounded-xl border border-zinc-200 bg-white p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <Chip
              size="sm"
              variant="flat"
              classNames={{
                base: "mb-4 bg-accent/30 text-ink",
                content: "font-semibold",
              }}
            >
              Cloud Sites
            </Chip>
            <h1 className="text-3xl font-semibold tracking-tight text-ink">
              Manage Websites
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-500">
              Sites created in Esteemed Create and sites deployed through Esteemed Cloud appear here with their live URL, preview, framework, deployment state, and Studio access.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              as="a"
              href={`${CREATE_BASE}/`}
              target="_blank"
              rel="noopener noreferrer"
              radius="sm"
              className="bg-accent px-5 font-semibold text-ink hover:bg-accent-hover"
              startContent={<Plus size={16} />}
            >
              New Site
            </Button>
            <Button
              onPress={loadSites}
              isLoading={isLoading}
              radius="sm"
              variant="bordered"
              className="border-zinc-200 font-semibold text-ink"
              startContent={!isLoading ? <RefreshCw size={16} /> : null}
            >
              Refresh
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          { label: "Total sites", value: stats.total, icon: Globe },
          { label: "Live", value: stats.live, icon: CheckCircle2 },
          { label: "Built drafts", value: stats.drafts, icon: Code2 },
          { label: "In flight", value: stats.importing, icon: Rocket },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-xl border border-zinc-200 bg-white p-5">
              <Icon size={18} className="mb-3 text-zinc-500" />
              <p className="text-[32px] font-bold leading-none text-ink">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-zinc-500">{item.label}</p>
            </div>
          );
        })}
      </section>

      <section className="mb-8">
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-ink">Site Inventory</h2>
              <p className="text-sm text-zinc-500">Pulled from the existing Create app inventory API.</p>
            </div>
            <Button
              as={Link}
              href="/dashboard/plans"
              radius="sm"
              variant="light"
              className="font-semibold text-ink"
            >
              Plans
            </Button>
          </div>

          {error && (
            <div className="mb-4 flex gap-3 rounded-lg border border-[#F4C7C3] bg-[#FFF4F2] p-4 text-sm text-[#8A1F11]">
              <AlertCircle size={18} className="shrink-0" />
              <div>
                <p className="font-semibold">Create inventory is unavailable</p>
                <p>{error}</p>
              </div>
            </div>
          )}

          {inventoryMessage && (
            <div className="mb-4 flex gap-3 rounded-lg border border-zinc-200 bg-accent-hover p-4 text-sm text-ink">
              <AlertCircle size={18} className="shrink-0" />
              <div>
                <p className="font-semibold">Account site inventory is pending Create scoping</p>
                <p>{inventoryMessage}</p>
              </div>
            </div>
          )}

          {isLoading ? (
            <div className="flex min-h-[260px] items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-200 border-t-transparent" />
            </div>
          ) : sites.length === 0 ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-8 text-center">
              <Server size={40} className="mb-4 text-zinc-400" />
              <h3 className="text-lg font-semibold text-ink">No sites yet</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
                Build a new site in Create or import a GitHub repo. Published apps deployed to Esteemed Cloud will appear here.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Button
                  as="a"
                  href={CREATE_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  radius="sm"
                  className="bg-accent font-semibold text-ink hover:bg-accent-hover"
                >
                  New Site
                </Button>
                <Button as={Link} href="/websites/hosting#plans" radius="sm" variant="bordered" className="border-zinc-200 font-semibold text-ink">
                  Cloud Plans
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
              {sites.map((site) => (
                <SiteCard key={site.id} site={site} />
              ))}
            </div>
          )}
        </div>

      </section>
    </div>
  );
}
