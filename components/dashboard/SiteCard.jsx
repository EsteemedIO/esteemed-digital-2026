"use client";

import Link from "next/link";
import { Button, Chip } from "@heroui/react";
import { Cloud, GitBranch } from "lucide-react";
import {
  formatSiteDate,
  siteLiveUrl,
  siteStatusClass,
  siteStatusLabel,
} from "@/components/dashboard/site-utils";

export default function SiteCard({ site, compact = false }) {
  const liveUrl = siteLiveUrl(site);

  return (
    <article className="flex min-h-[280px] flex-col rounded-xl border border-zinc-200 bg-white p-5">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-zinc-200 bg-accent">
          {site.source === "github" ? <GitBranch size={24} /> : <Cloud size={24} />}
        </div>
        <Chip
          size="sm"
          variant="flat"
          classNames={{
            base: siteStatusClass(site.status),
            content: "font-semibold",
          }}
        >
          {siteStatusLabel(site.status)}
        </Chip>
      </div>

      <h2 className="text-lg font-semibold tracking-tight text-ink">{site.name}</h2>
      <p className="mt-1 truncate text-sm text-zinc-500">{liveUrl || site.id}</p>

      {!compact && (
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-zinc-50 p-3">
            <p className="mb-1 text-xs font-semibold uppercase text-zinc-400">Framework</p>
            <p className="font-semibold text-ink">{site.framework || "React"}</p>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3">
            <p className="mb-1 text-xs font-semibold uppercase text-zinc-400">Updated</p>
            <p className="font-semibold text-ink">{formatSiteDate(site.updatedAt)}</p>
          </div>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <Button
          as={Link}
          href={`/dashboard/sites/${encodeURIComponent(site.id)}`}
          radius="sm"
          className="bg-accent font-semibold text-ink hover:bg-accent-hover"
        >
          Manage
        </Button>
        {liveUrl && (
          <Button
            as="a"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            radius="sm"
            variant="light"
            className="font-semibold text-ink"
          >
            Visit
          </Button>
        )}
      </div>
    </article>
  );
}
