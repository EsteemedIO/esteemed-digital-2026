"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { CreditCard, Globe, Shield, UserRound } from "lucide-react";

export default function SettingsPage() {
  const { data: session } = useSession();
  const displayName = session?.user?.name || "Account owner";
  const email = session?.user?.email || "Signed in with Esteemed SSO";

  return (
    <div className="mx-auto max-w-[1120px]">
      <section className="mb-6 rounded-xl border border-zinc-200 bg-white p-6">
        <p className="mb-2 text-sm font-semibold text-zinc-500">Workspace</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink">Settings</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-500">
          Manage account identity, website defaults, billing, and security for this Esteemed workspace.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <UserRound size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ink">Account</h2>
              <p className="text-sm text-zinc-500">Identity comes from Esteemed SSO.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg bg-zinc-50 p-3">
              <p className="text-xs font-semibold uppercase text-zinc-400">Name</p>
              <p className="mt-1 font-semibold text-ink">{displayName}</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3">
              <p className="text-xs font-semibold uppercase text-zinc-400">Email</p>
              <p className="mt-1 font-semibold text-ink">{email}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <CreditCard size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ink">Billing</h2>
              <p className="text-sm text-zinc-500">Plan changes and checkout start in Plans.</p>
            </div>
          </div>
          <Button as={Link} href="/dashboard/plans" radius="sm" className="bg-accent font-semibold text-ink hover:bg-accent-hover">
            Manage plans
          </Button>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Globe size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ink">Sites</h2>
              <p className="text-sm text-zinc-500">Create and Cloud inventory lives in Sites.</p>
            </div>
          </div>
          <Button as={Link} href="/dashboard/sites" radius="sm" variant="bordered" className="border-zinc-200 font-semibold text-ink">
            View sites
          </Button>
        </div>

        <div id="domains" className="rounded-xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Globe size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ink">Domains</h2>
              <p className="text-sm text-zinc-500">Registration, transfer, renewal, privacy, nameservers, and DNS handoff.</p>
            </div>
          </div>
          <Button as={Link} href="/dashboard/plans" radius="sm" variant="bordered" className="border-zinc-200 font-semibold text-ink">
            View domain options
          </Button>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Shield size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ink">Security</h2>
              <p className="text-sm text-zinc-500">Password, MFA, and sessions are managed by Keycloak.</p>
            </div>
          </div>
          <a
            href="https://cauthprod.esteemed.io/realms/esteemed-colleagues/account"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-zinc-200 px-4 py-2 text-sm font-semibold text-ink hover:bg-zinc-50"
          >
            Open account security
          </a>
        </div>
      </section>
    </div>
  );
}
