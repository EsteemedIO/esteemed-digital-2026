"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button, Chip, Input } from "@heroui/react";
import {
  AlertCircle,
  CheckCircle2,
  Cloud,
  Code2,
  ExternalLink,
  GitBranch,
  Globe,
  Plus,
  RefreshCw,
  Rocket,
  Server,
} from "lucide-react";

const CREATE_BASE = "https://create.esteemed.io";

function absoluteCreateUrl(url) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${CREATE_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

function formatDate(value) {
  if (!value) return "Not yet";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not yet";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function statusClass(status) {
  if (status === "published" || status === "deployed" || status === "live") {
    return "bg-[#E8F8EA] text-[#126B24]";
  }
  if (status === "importing" || status === "deploying") {
    return "bg-es-yellow-hover text-es-fg-1";
  }
  return "bg-es-surface-alt text-es-fg-2";
}

function siteStatusLabel(status) {
  if (status === "published" || status === "deployed" || status === "live") return "Live";
  if (status === "built") return "Built";
  if (status === "importing") return "Importing";
  if (status === "deploying") return "Deploying";
  return status || "Draft";
}

function SiteCard({ site }) {
  const liveUrl = absoluteCreateUrl(site.publishedUrl);
  const previewUrl = absoluteCreateUrl(site.previewUrl);
  const studioUrl = `${CREATE_BASE}/apps/studio/${site.id}`;
  const deployUrl = `${CREATE_BASE}/apps/studio/${site.id}?publish=1`;

  return (
    <article className="flex min-h-[300px] flex-col rounded-es-lg border border-es-border bg-white p-5">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-es-border bg-es-yellow">
          {site.source === "github" ? <GitBranch size={24} /> : <Cloud size={24} />}
        </div>
        <Chip
          size="sm"
          variant="flat"
          classNames={{
            base: statusClass(site.status),
            content: "font-semibold",
          }}
        >
          {siteStatusLabel(site.status)}
        </Chip>
      </div>

      <h2 className="text-es-xl font-es-semibold tracking-es-tight text-es-fg-1">{site.name}</h2>
      <p className="mt-1 text-es-sm text-es-fg-2">{site.id}</p>

      <div className="mt-5 grid grid-cols-2 gap-3 text-es-sm">
        <div className="rounded-es-sm bg-es-surface-alt p-3">
          <p className="mb-1 text-es-xs font-es-semibold uppercase text-es-fg-3">Framework</p>
          <p className="font-es-semibold text-es-fg-1">{site.framework || "React"}</p>
        </div>
        <div className="rounded-es-sm bg-es-surface-alt p-3">
          <p className="mb-1 text-es-xs font-es-semibold uppercase text-es-fg-3">Updated</p>
          <p className="font-es-semibold text-es-fg-1">{formatDate(site.updatedAt)}</p>
        </div>
      </div>

      {site.sourceUrl && (
        <div className="mt-3 rounded-es-sm border border-es-border bg-white p-3 text-es-sm text-es-fg-2">
          <div className="mb-1 flex items-center gap-2 font-es-semibold text-es-fg-1">
            <GitBranch size={15} />
            {site.branch || "main"}
          </div>
          <p className="truncate">{site.sourceUrl}</p>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <Button
          as="a"
          href={studioUrl}
          target="_blank"
          rel="noopener noreferrer"
          radius="sm"
          className="bg-es-yellow font-semibold text-es-fg-on-yellow hover:bg-es-yellow-hover"
          endContent={<ExternalLink size={15} />}
        >
          Studio
        </Button>
        {liveUrl ? (
          <Button
            as="a"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            radius="sm"
            variant="bordered"
            className="border-es-border font-semibold text-es-fg-1"
          >
            Visit
          </Button>
        ) : (
          <Button
            as="a"
            href={deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            radius="sm"
            variant="bordered"
            className="border-es-border font-semibold text-es-fg-1"
          >
            Deploy
          </Button>
        )}
        {previewUrl && (
          <Button
            as="a"
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            radius="sm"
            variant="light"
            className="font-semibold text-es-fg-1"
          >
            Preview
          </Button>
        )}
      </div>
    </article>
  );
}

export default function SitesPage() {
  const { status } = useSession();
  const [sites, setSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [inventoryMessage, setInventoryMessage] = useState("");
  const [isImporting, setIsImporting] = useState(false);
  const [importStatus, setImportStatus] = useState("");
  const [form, setForm] = useState({ repoUrl: "", branch: "main", name: "" });

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
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-es-border border-t-transparent" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/api/auth/signin");
  }

  async function submitImport(event) {
    event.preventDefault();
    setIsImporting(true);
    setImportStatus("");
    try {
      const response = await fetch("/api/cloud/import-github", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || "Unable to import repo.");
      setImportStatus("Import started. Refreshing site inventory.");
      setForm({ repoUrl: "", branch: "main", name: "" });
      await loadSites();
    } catch (importError) {
      setImportStatus(importError.message || "Unable to import repo.");
    } finally {
      setIsImporting(false);
    }
  }

  return (
    <div className="mx-auto max-w-[1440px]">
      <section className="mb-6 rounded-es-lg border border-es-border bg-white p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <Chip
              size="sm"
              variant="flat"
              classNames={{
                base: "mb-4 bg-es-yellow-hover text-es-fg-1",
                content: "font-semibold",
              }}
            >
              Cloud Sites
            </Chip>
            <h1 className="text-es-3xl font-es-semibold tracking-es-tight text-es-fg-1">
              Manage Websites
            </h1>
            <p className="mt-3 max-w-3xl text-es-base leading-es-relaxed text-es-fg-2">
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
              className="bg-es-yellow px-5 font-semibold text-es-fg-on-yellow hover:bg-es-yellow-hover"
              startContent={<Plus size={16} />}
            >
              New Site
            </Button>
            <Button
              onPress={loadSites}
              isLoading={isLoading}
              radius="sm"
              variant="bordered"
              className="border-es-border font-semibold text-es-fg-1"
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
            <div key={item.label} className="rounded-es-lg border border-es-border bg-white p-5">
              <Icon size={18} className="mb-3 text-es-fg-2" />
              <p className="text-[32px] font-es-bold leading-none text-es-fg-1">{item.value}</p>
              <p className="mt-2 text-es-sm font-es-semibold text-es-fg-2">{item.label}</p>
            </div>
          );
        })}
      </section>

      <section className="mb-8 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_420px]">
        <div className="rounded-es-lg border border-es-border bg-white p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-es-lg font-es-semibold text-es-fg-1">Site Inventory</h2>
              <p className="text-es-sm text-es-fg-2">Pulled from the existing Create app inventory API.</p>
            </div>
            <Button
              as={Link}
              href="/dashboard/plans"
              radius="sm"
              variant="light"
              className="font-semibold text-es-fg-1"
            >
              Plans
            </Button>
          </div>

          {error && (
            <div className="mb-4 flex gap-3 rounded-es-sm border border-[#F4C7C3] bg-[#FFF4F2] p-4 text-es-sm text-[#8A1F11]">
              <AlertCircle size={18} className="shrink-0" />
              <div>
                <p className="font-es-semibold">Create inventory is unavailable</p>
                <p>{error}</p>
              </div>
            </div>
          )}

          {inventoryMessage && (
            <div className="mb-4 flex gap-3 rounded-es-sm border border-es-border bg-es-yellow-hover p-4 text-es-sm text-es-fg-1">
              <AlertCircle size={18} className="shrink-0" />
              <div>
                <p className="font-es-semibold">Account site inventory is pending Create scoping</p>
                <p>{inventoryMessage}</p>
              </div>
            </div>
          )}

          {isLoading ? (
            <div className="flex min-h-[260px] items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-es-border border-t-transparent" />
            </div>
          ) : sites.length === 0 ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center rounded-es-lg border border-dashed border-es-border bg-es-surface-alt p-8 text-center">
              <Server size={40} className="mb-4 text-es-fg-3" />
              <h3 className="text-es-xl font-es-semibold text-es-fg-1">No sites yet</h3>
              <p className="mt-2 max-w-md text-es-sm leading-es-relaxed text-es-fg-2">
                Build a new site in Create or import a GitHub repo. Published apps deployed to Esteemed Cloud will appear here.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Button
                  as="a"
                  href={CREATE_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  radius="sm"
                  className="bg-es-yellow font-semibold text-es-fg-on-yellow hover:bg-es-yellow-hover"
                >
                  New Site
                </Button>
                <Button as={Link} href="/products/cloud#plans" radius="sm" variant="bordered" className="border-es-border font-semibold text-es-fg-1">
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

        <aside className="space-y-4">
          <form onSubmit={submitImport} className="rounded-es-lg border border-es-border bg-white p-5">
            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-es-sm bg-es-yellow">
                <GitBranch size={20} />
              </div>
              <div>
                <h2 className="text-es-lg font-es-semibold text-es-fg-1">Import Git Repo</h2>
                <p className="text-es-sm leading-es-relaxed text-es-fg-2">
                  Register an existing GitHub site with Esteemed Cloud and start the Create import flow.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <Input
                label="Repository URL"
                placeholder="https://github.com/org/site"
                value={form.repoUrl}
                onValueChange={(repoUrl) => setForm((current) => ({ ...current, repoUrl }))}
                radius="sm"
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <Input
                  label="Branch"
                  value={form.branch}
                  onValueChange={(branch) => setForm((current) => ({ ...current, branch }))}
                  radius="sm"
                />
                <Input
                  label="Site name"
                  placeholder="Optional"
                  value={form.name}
                  onValueChange={(name) => setForm((current) => ({ ...current, name }))}
                  radius="sm"
                />
              </div>
              <Button
                type="submit"
                isLoading={isImporting}
                radius="sm"
                className="w-full bg-[#111111] font-semibold text-white hover:scale-[1.02] hover:bg-[#111111]"
              >
                Import Repo
              </Button>
              {importStatus && <p className="text-es-sm text-es-fg-2">{importStatus}</p>}
            </div>
          </form>

          <div className="rounded-es-lg border border-es-border bg-white p-5">
            <h2 className="text-es-lg font-es-semibold text-es-fg-1">Managed Hosting Allowance</h2>
            <div className="mt-4 space-y-3">
              {[
                ["Essential", "5-page Create rebuild included"],
                ["Growth", "12-page Create rebuild included"],
                ["Business", "Full standard site included, soft cap around 30 pages"],
              ].map(([name, value]) => (
                <div key={name} className="rounded-es-sm bg-es-surface-alt p-3">
                  <p className="text-es-sm font-es-semibold text-es-fg-1">{name}</p>
                  <p className="text-es-sm text-es-fg-2">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-es-sm leading-es-relaxed text-es-fg-2">
              Essential and Growth overage is billed as the live Stripe `hosting_page_overage` item at $100/page.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
