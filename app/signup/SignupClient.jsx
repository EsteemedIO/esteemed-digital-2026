"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import SocialLoginButtons from "@/components/SocialLoginButtons";

const CREATE_URL = "https://create.esteemed.io";
const COLLEAGUES_URL = "https://colleagues.esteemed.io";
const PLATFORM_URL = process.env.NEXT_PUBLIC_ESTEEMED_PLATFORM_URL || "https://platform.esteemed.io";

const REDIRECT_URLS = {
  create: CREATE_URL,
  colleagues: COLLEAGUES_URL,
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32);
}

function SignupShell({ children }) {
  return (
    <div className="min-h-[calc(100vh-64px)] px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      {children}
      {error && <span className="mt-2 block text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}

function CurateSignup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organizationName: "",
    requestedSlug: "",
    tier: "starter",
  });
  const [fields, setFields] = useState({});
  const [state, setState] = useState({ status: "idle" });

  const tenantPreview = useMemo(() => {
    const source = form.requestedSlug || form.organizationName;
    const slug = slugify(source || "your-company");
    return `${slug || "your-company"}.curate.esteemed.io`;
  }, [form.organizationName, form.requestedSlug]);

  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
    setFields((current) => ({ ...current, [name]: undefined }));
  }

  async function submit(event) {
    event.preventDefault();
    setState({ status: "submitting" });
    setFields({});

    const response = await fetch("/api/curate/provision", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      setFields(result.fields || {});
      setState({ status: "error", message: result.detail || result.error || "Provisioning request failed." });
      return;
    }

    const platformUrl = new URL(PLATFORM_URL);
    platformUrl.searchParams.set("product", "curate");
    platformUrl.searchParams.set("tenant", result.tenantSlug || "");
    platformUrl.searchParams.set("status", result.status || "provisioning");
    if (result.provisioningId) platformUrl.searchParams.set("provisioningId", result.provisioningId);

    setState({ status: "success", result, platformUrl: platformUrl.toString() });
    signIn("keycloak", { callbackUrl: platformUrl.toString() });
  }

  if (state.status === "success") {
    return (
      <SignupShell>
        <div className="mx-auto max-w-2xl rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-ink" strokeWidth={1.8} />
            <div>
              <h1 className="text-2xl font-bold text-ink">Curate is provisioning</h1>
              <p className="text-sm text-zinc-600">Signing you in to the Esteemed Platform.</p>
            </div>
          </div>
          <div className="rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
            <p className="font-semibold text-ink">{state.result.tenantDomain}</p>
            <p className="mt-1">Status: {state.result.status}</p>
            <p className="mt-1">Admin URL: {state.result.adminUrl}</p>
          </div>
          <p className="mt-6 text-sm text-zinc-600">When provisioning finishes, the Platform will show your Curate status and launch link.</p>
          <Link
            href={state.platformUrl || PLATFORM_URL}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-accent-hover"
          >
            Continue to Platform
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SignupShell>
    );
  }

  return (
    <SignupShell>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <section className="pt-4">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">Esteemed Cloud / Curate</p>
          <h1 className="max-w-xl text-4xl font-bold leading-tight text-ink md:text-6xl">
            Provision your content cloud.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600 md:text-lg">
            Create a dedicated Curate instance for content and media management. Esteemed handles the tenant, database, media storage, and first admin bootstrap.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
            {["Dedicated Curate admin", "DigitalOcean Spaces media", "First admin created automatically", "Cloud provisioning status"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-ink" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <form onSubmit={submit} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-ink">Start Curate</h2>
            <p className="mt-2 text-sm text-zinc-600">This information becomes the first admin account and tenant workspace.</p>
          </div>

          {state.status === "error" && (
            <div className="mb-5 rounded-md border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">
              {state.message}
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="First name" error={fields.firstName}>
              <input className="w-full rounded-md border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-ink" value={form.firstName} onChange={(event) => updateField("firstName", event.target.value)} />
            </Field>
            <Field label="Last name" error={fields.lastName}>
              <input className="w-full rounded-md border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-ink" value={form.lastName} onChange={(event) => updateField("lastName", event.target.value)} />
            </Field>
            <Field label="Work email" error={fields.email}>
              <input type="email" className="w-full rounded-md border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-ink" value={form.email} onChange={(event) => updateField("email", event.target.value)} />
            </Field>
            <Field label="Organization" error={fields.organizationName}>
              <input className="w-full rounded-md border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-ink" value={form.organizationName} onChange={(event) => updateField("organizationName", event.target.value)} />
            </Field>
            <Field label="Workspace URL" error={fields.requestedSlug}>
              <div className="flex rounded-md border border-zinc-300 focus-within:border-ink">
                <input className="min-w-0 flex-1 rounded-l-md px-4 py-3 text-sm outline-none" value={form.requestedSlug} onChange={(event) => updateField("requestedSlug", slugify(event.target.value))} placeholder={slugify(form.organizationName) || "your-company"} />
                <span className="flex items-center rounded-r-md border-l border-zinc-200 bg-zinc-50 px-3 text-xs font-medium text-zinc-500">.curate.esteemed.io</span>
              </div>
            </Field>
            <Field label="Plan" error={fields.tier}>
              <select className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-ink" value={form.tier} onChange={(event) => updateField("tier", event.target.value)}>
                <option value="starter">Starter</option>
                <option value="free">Free</option>
                <option value="pro">Pro</option>
                <option value="business">Business</option>
              </select>
            </Field>
          </div>

          <div className="mt-5 rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
            Tenant preview: <span className="font-semibold text-ink">{tenantPreview}</span>
          </div>

          <button
            type="submit"
            disabled={state.status === "submitting"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-bold text-ink transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
          >
            {state.status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            Provision Curate
          </button>
          <p className="mt-4 text-center text-xs text-zinc-500">
            By provisioning Curate, you agree to our <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
          </p>
        </form>
      </div>
    </SignupShell>
  );
}

function AccountSignup({ callbackUrl }) {
  const { data: session, status } = useSession();

  if (session) {
    if (typeof window !== "undefined") window.location.href = callbackUrl;
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <p className="text-zinc-400">Redirecting...</p>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <p className="text-zinc-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-ink">Create your account</h1>
          <p className="text-sm text-zinc-600">One account for everything Esteemed.</p>
        </div>

        <button onClick={() => signIn("keycloak", { callbackUrl })} className="mb-4 w-full rounded-full bg-accent py-3 text-sm font-bold text-ink transition-colors hover:bg-accent-hover">
          Sign up with email
        </button>

        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-xs text-zinc-400">or</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        <SocialLoginButtons callbackUrl={callbackUrl} />

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account? <a href="/login" className="font-medium text-ink underline underline-offset-4 hover:no-underline">Log in</a>
        </p>

        <p className="mt-6 text-center text-xs text-zinc-400">
          By creating an account, you agree to our <Link href="/terms" className="underline hover:text-zinc-600">Terms</Link> and <Link href="/privacy" className="underline hover:text-zinc-600">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}

function SignupContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");
  const redirectParam = searchParams.get("redirect");
  const promptParam = searchParams.get("prompt");

  if (product === "curate") {
    return <CurateSignup />;
  }

  const callbackBase = (redirectParam && REDIRECT_URLS[redirectParam]) || CREATE_URL;
  const callbackUrl = promptParam ? `${callbackBase}?prompt=${encodeURIComponent(promptParam)}` : callbackBase;
  return <AccountSignup callbackUrl={callbackUrl} />;
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="flex min-h-[calc(100vh-64px)] items-center justify-center"><p className="text-zinc-400">Loading...</p></div>}>
      <SignupContent />
    </Suspense>
  );
}
