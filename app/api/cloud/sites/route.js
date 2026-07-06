import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const CREATE_API_BASE = process.env.CREATE_AGENT_RUNNER_URL || "https://create.esteemed.io";

function normalizeApps(payload) {
  if (Array.isArray(payload?.apps)) return payload.apps;
  if (Array.isArray(payload?.data?.apps)) return payload.data.apps;
  if (Array.isArray(payload?.data?.data?.apps)) return payload.data.data.apps;
  return [];
}

export async function GET(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  const upstream = new URL("/api/app-builder/apps", CREATE_API_BASE);
  if (status) upstream.searchParams.set("status", status);

  try {
    const response = await fetch(upstream, {
      headers: {
        Accept: "application/json",
        ...(token.accessToken ? { Authorization: `Bearer ${token.accessToken}` } : {}),
      },
      cache: "no-store",
    });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        { error: payload.error || "Unable to load Create sites." },
        { status: response.status },
      );
    }

    const apps = normalizeApps(payload).map((app) => ({
      id: app.id,
      name: app.name || app.cloud_name || app.id,
      framework: app.framework || "react",
      status: app.status || app.cloud?.status || "built",
      previewUrl: app.previewUrl || app.preview_url || null,
      publishedUrl: app.publishedUrl || app.published_url || app.cloud?.deploy_url || null,
      createdAt: app.createdAt || app.created_at || null,
      updatedAt: app.updatedAt || app.updated_at || app.cloud?.last_deploy || app.createdAt || null,
      source: app.source || app.cloud?.source || "create",
      sourceUrl: app.sourceUrl || app.source_url || app.cloud?.source_url || null,
      branch: app.branch || app.cloud?.branch || null,
      cloud: app.cloud || null,
    }));

    return NextResponse.json({
      success: true,
      apps,
      total: apps.length,
      upstream: "create",
    });
  } catch (error) {
    console.error("[cloud-sites]", error);
    return NextResponse.json({ error: "Create app inventory is unavailable." }, { status: 502 });
  }
}
