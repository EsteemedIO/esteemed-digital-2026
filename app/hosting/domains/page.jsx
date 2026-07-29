"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import DomainSearchBar from "@/components/DomainSearchBar";
import SectionNav from "@/components/SectionNav";
import { hostingLinks } from "@/lib/hosting-nav-links";
import { Check, X, Loader2, ShoppingCart } from "lucide-react";

export default function DomainSearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (initialQuery) search(initialQuery);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function search(q) {
    const trimmed = (q || query).trim();
    if (!trimmed || trimmed.length < 2) return;
    setLoading(true);
    setSearched(true);
    try {
      const res = await fetch(`/api/domains/search?q=${encodeURIComponent(trimmed)}`);
      const data = await res.json();
      if (data.results) {
        setResults(data.results);
      } else if (data.error) {
        setResults([]);
      }
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      <SectionNav
        sectionLabel="Hosting"
        links={hostingLinks}
        ctaLabel="See Plans"
        ctaHref="/hosting#plans"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">Find your domain</h1>
          <p className="text-lg text-zinc-500 mb-8">Search for the perfect domain name for your business.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              search();
            }}
            className="flex w-full max-w-2xl mx-auto"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter a domain name"
              className="flex-1 pl-5 pr-4 py-4 rounded-l-xl border border-zinc-200 text-base font-medium text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-4 rounded-r-xl bg-ink text-white font-bold text-sm hover:bg-zinc-800 transition-colors whitespace-nowrap"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>
      </section>

      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-zinc-300" />
        </div>
      )}

      {!loading && searched && results.length > 0 && (
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-3">
              {results.map((r) => (
                <div
                  key={r.domain}
                  className={`flex items-center justify-between rounded-xl border p-5 transition-all ${
                    r.available
                      ? "border-zinc-200 bg-white hover:border-accent hover:shadow-sm"
                      : "border-zinc-100 bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {r.available ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                    ) : (
                      <X className="w-5 h-5 text-zinc-300 flex-shrink-0" strokeWidth={2.5} />
                    )}
                    <div>
                      <span className={`text-base font-bold ${r.available ? "text-ink" : "text-zinc-400"}`}>
                        {r.domain}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-lg font-bold ${r.available ? "text-ink" : "text-zinc-300"}`}>
                      ${r.price}/yr
                    </span>
                    {r.available ? (
                      <Link
                        href={`/signup?product=domain&domain=${encodeURIComponent(r.domain)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Get It
                      </Link>
                    ) : (
                      <span className="px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-400 text-sm font-bold">
                        Taken
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!loading && searched && results.length === 0 && (
        <div className="text-center py-16">
          <p className="text-zinc-500">No results found. Try a different search.</p>
        </div>
      )}

      <section className="bg-accent py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">Need hosting too?</h2>
          <p className="text-zinc-700 mb-6">Pair your domain with Esteemed Cloud hosting — SSL, backups, and CDN included.</p>
          <Link
            href="/hosting#plans"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
          >
            See Hosting Plans
          </Link>
        </div>
      </section>
    </div>
  );
}
