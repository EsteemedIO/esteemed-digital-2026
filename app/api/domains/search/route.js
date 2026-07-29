import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { lookupDomain, getDomainPrice, normalizeDomainName, SUPPORTED_DOMAIN_TLDS } from "@/lib/opensrs";

const TLDS = SUPPORTED_DOMAIN_TLDS.filter((tld) => tld !== ".biz" && tld !== ".info" && tld !== ".xyz");

export async function GET(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim();

  if (!query || query.length < 2) {
    return NextResponse.json({ error: "Search query is required (min 2 chars)." }, { status: 400 });
  }

  // Extract the base name (strip any TLD the user typed)
  const baseName = query.replace(/\.[a-z]{2,}$/i, "").replace(/[^a-z0-9-]/gi, "").toLowerCase();

  if (!baseName) {
    return NextResponse.json({ error: "Invalid domain name." }, { status: 400 });
  }

  try {
    // Check exact domain if user typed a full one
    const results = [];

    if (query.includes(".")) {
      const exactDomain = normalizeDomainName(query);
      if (!exactDomain) {
        return NextResponse.json({ error: "Invalid domain format." }, { status: 400 });
      }
      const exact = await lookupDomain(exactDomain);
      const tld = "." + exactDomain.split(".").slice(1).join(".");
      const price = getDomainPrice(tld);
      if (price === null) {
        return NextResponse.json({ error: "That TLD is not available for launch checkout yet." }, { status: 400 });
      }
      results.push({ ...exact, price, tld });
    }

    // Check popular TLDs in parallel
    const checks = TLDS
      .filter((tld) => !results.some((r) => r.domain === baseName + tld))
      .map(async (tld) => {
        const domain = baseName + tld;
        const lookup = await lookupDomain(domain);
        return { ...lookup, price: getDomainPrice(tld), tld };
      });

    const tldResults = await Promise.all(checks);
    results.push(...tldResults.filter((result) => result.price !== null));

    // Sort: available first, then by price
    results.sort((a, b) => {
      if (a.available !== b.available) return a.available ? -1 : 1;
      return a.price - b.price;
    });

    return NextResponse.json({ query, baseName, results });
  } catch (error) {
    console.error("[domains/search]", error.message);
    return NextResponse.json({ error: error.message }, { status: 502 });
  }
}
