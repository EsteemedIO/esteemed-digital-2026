import { NextResponse } from "next/server";
import { registerDomain } from "@/lib/opensrs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { domain, period = 1, contact = {} } = body;

    if (!domain || typeof domain !== "string") {
      return NextResponse.json(
        { error: "Domain name is required." },
        { status: 400 }
      );
    }

    const sanitized = domain.trim().toLowerCase();
    if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?\.[a-z]{2,}$/.test(sanitized)) {
      return NextResponse.json(
        { error: "Invalid domain format." },
        { status: 400 }
      );
    }

    if (period < 1 || period > 10) {
      return NextResponse.json(
        { error: "Registration period must be 1-10 years." },
        { status: 400 }
      );
    }

    const result = await registerDomain(sanitized, period, contact);

    if (!result.isSuccess) {
      return NextResponse.json(
        {
          error: result.responseText || "Registration failed.",
          code: result.responseCode,
        },
        { status: 422 }
      );
    }

    return NextResponse.json({
      success: true,
      domain: sanitized,
      period,
      message: `Domain ${sanitized} registered successfully.`,
    });
  } catch (error) {
    console.error("[domains/register]", error.message);
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: 502 }
    );
  }
}
