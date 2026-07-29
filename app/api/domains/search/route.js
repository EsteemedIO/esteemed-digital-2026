import { NextResponse } from "next/server";
import { lookupDomain, getDomainPrice } from "@/lib/opensrs";

const TLDS = [".com", ".io", ".net", ".org", ".co", ".dev", ".app", ".ai", ".us", ".tech", ".online", ".store", ".site"];

export async function GET(request) {
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
      const exact = await lookupDomain(query.toLowerCase());
      const tld = "." + query.split(".").slice(1).join(".");
      results.push({ ...exact, price: getDomainPrice(tld), tld });
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
    results.push(...tldResults);

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
