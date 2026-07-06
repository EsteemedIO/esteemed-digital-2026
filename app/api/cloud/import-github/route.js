import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const CREATE_CLOUD_BASE = process.env.CREATE_CLOUD_CONSOLE_URL || "https://create.esteemed.io/cloud/";

export async function POST(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  if (!body.repoUrl) {
    return NextResponse.json({ error: "GitHub repo URL is required." }, { status: 400 });
  }

  try {
    const response = await fetch(new URL("api/cloud/github/import", CREATE_CLOUD_BASE), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token.accessToken ? { Authorization: `Bearer ${token.accessToken}` } : {}),
        ...(token.sub ? { "X-User-Id": token.sub } : {}),
      },
      body: JSON.stringify({
        repoUrl: body.repoUrl,
        branch: body.branch || "main",
        name: body.name || undefined,
      }),
    });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        { error: payload.error || "Unable to import GitHub repo." },
        { status: response.status },
      );
    }

    return NextResponse.json(payload);
  } catch (error) {
    console.error("[cloud-import-github]", error);
    return NextResponse.json({ error: "Create Cloud import is unavailable." }, { status: 502 });
  }
}
