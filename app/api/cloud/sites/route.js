import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const CREATE_API_BASE = process.env.CREATE_AGENT_RUNNER_URL || "https://create.esteemed.io";

function normalizeApps(payload) {
  if (Array.isArray(payload?.apps)) return payload.apps;
  if (Array.isArray(payload?.data?.apps)) return payload.data.apps;
  if (Array.isArray(payload?.data?.data?.apps)) return payload.data.data.apps;
  return [];
}

function getOwnerId(app) {
  return app.user_id || app.userId || app.owner_id || app.ownerId || app.created_by || app.createdBy || app.cloud?.created_by || app.cloud?.user_id;
}

function getOwnerEmail(app) {
  return app.user_email || app.userEmail || app.owner_email || app.ownerEmail || app.created_by_email || app.createdByEmail || app.cloud?.user_email;
}

function belongsToToken(app, token) {
  const ownerId = getOwnerId(app);
  const ownerEmail = getOwnerEmail(app);
  if (ownerId && token.sub && ownerId === token.sub) return true;
  if (ownerEmail && token.email && ownerEmail.toLowerCase() === token.email.toLowerCase()) return true;
  return false;
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
        ...(token.sub ? { "X-User-Id": token.sub } : {}),
        ...(token.email ? { "X-User-Email": token.email } : {}),
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

    const upstreamApps = normalizeApps(payload);
    const hasScopedOwnership = upstreamApps.some((app) => getOwnerId(app) || getOwnerEmail(app));
    const scopedApps = hasScopedOwnership
      ? upstreamApps.filter((app) => belongsToToken(app, token))
      : [];

    const apps = scopedApps.map((app) => ({
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
      upstreamTotal: upstreamApps.length,
      integrationStatus: hasScopedOwnership ? "scoped" : "unscoped",
      message: hasScopedOwnership
        ? null
        : "Create site inventory is connected, but the upstream endpoint is not returning user ownership fields yet. Global Create inventory is hidden until account scoping is available.",
      upstream: "create",
    });
  } catch (error) {
    console.error("[cloud-sites]", error);
    return NextResponse.json({ error: "Create app inventory is unavailable." }, { status: 502 });
  }
}
