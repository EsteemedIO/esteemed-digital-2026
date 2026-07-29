"use client";

import { useState, useCallback, useEffect } from "react";
import { Search, ShoppingCart, Globe, Loader2, AlertCircle } from "lucide-react";

export default function DomainsPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const parsed = JSON.parse(window.localStorage.getItem("esteemed_cart") || "[]");
      const items = Array.isArray(parsed) ? parsed : parsed.items || [];
      setCart(
        items
          .filter((item) => item.type === "domain_registration" && item.domain)
          .map((item) => {
            const price = typeof item.price === "number"
              ? item.price
              : Number.parseFloat(String(item.price || item.priceLabel || "").replace(/[^0-9.]/g, "")) || 0;
            return {
              ...item,
              price,
              priceLabel: item.priceLabel || (price ? `$${price.toFixed(2)}/yr` : ""),
            };
          })
      );
    } catch {
      setCart([]);
    }
  }, []);

  function writeCart(nextDomainItems) {
    let existingItems = [];
    try {
      const parsed = JSON.parse(window.localStorage.getItem("esteemed_cart") || "[]");
      existingItems = Array.isArray(parsed) ? parsed : parsed.items || [];
    } catch {
      existingItems = [];
    }
    const nonDomainItems = existingItems.filter((item) => item.type !== "domain_registration");
    window.localStorage.setItem("esteemed_cart", JSON.stringify([...nonDomainItems, ...nextDomainItems]));
    window.dispatchEvent(new Event("esteemed-cart-updated"));
  }

  const search = useCallback(async (e) => {
    e?.preventDefault();
    const q = query.trim();
    if (!q || q.length < 2) return;

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const res = await fetch(`/api/domains/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Search failed.");
      setResults(data.results || []);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  function addToCart(domain) {
    if (!cart.some((d) => d.domain === domain.domain)) {
      setCart((prev) => {
        const nextCart = [
          ...prev,
          {
            type: "domain_registration",
            name: `Domain: ${domain.domain}`,
            domain: domain.domain,
            tld: domain.tld,
            price: domain.price,
            priceLabel: `$${domain.price.toFixed(2)}/yr`,
            quantity: 1,
          },
        ];
        writeCart(nextCart);
        return nextCart;
      });
    }
  }

  function removeFromCart(domainName) {
    setCart((prev) => {
      const nextCart = prev.filter((d) => d.domain !== domainName);
      writeCart(nextCart);
      return nextCart;
    });
  }

  function isInCart(domainName) {
    return cart.some((d) => d.domain === domainName);
  }

  async function handleCheckout() {
    if (cart.length === 0) return;

    try {
      const res = await fetch("/api/domains/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domains: cart.map((d) => ({ domain: d.domain })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed.");
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 mb-1">Domains</h1>
        <p className="text-zinc-500 text-sm">
          Search, register, and manage your domain names.
        </p>
      </div>

      {/* Search */}
      <form onSubmit={search} className="mb-8">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find your domain"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: "#FEE546",
              color: "rgba(0,0,0,0.85)",
            }}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      {/* Error */}
      {error && (
        <div className="mb-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      {/* Cart */}
      {cart.length > 0 && (
        <div className="mb-6 rounded-xl border border-zinc-200 bg-white p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ShoppingCart size={18} className="text-zinc-600" />
              <span className="text-sm font-semibold text-zinc-900">
                Cart ({cart.length} domain{cart.length !== 1 ? "s" : ""})
              </span>
            </div>
            <span className="text-sm font-semibold text-zinc-900">
              ${cart.reduce((sum, d) => sum + d.price, 0).toFixed(2)}/yr
            </span>
          </div>
          <div className="space-y-2 mb-3">
            {cart.map((d) => (
              <div
                key={d.domain}
                className="flex items-center justify-between text-sm"
              >
                <span className="font-medium text-zinc-700">{d.domain}</span>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-500">${d.price.toFixed(2)}/yr</span>
                  <button
                    onClick={() => removeFromCart(d.domain)}
                    className="text-xs text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleCheckout}
            className="w-full py-2.5 rounded-xl font-semibold text-sm transition-colors"
            style={{
              background: "#FEE546",
              color: "rgba(0,0,0,0.85)",
            }}
          >
            Checkout
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={24} className="animate-spin text-zinc-400" />
          <span className="ml-3 text-sm text-zinc-500">
            Checking availability across TLDs...
          </span>
        </div>
      )}

      {/* Results */}
      {!loading && searched && results.length > 0 && (
        <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
          <div className="px-4 py-3 border-b border-zinc-100 bg-zinc-50">
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {results.length} results
            </span>
          </div>
          <div className="divide-y divide-zinc-100">
            {results.map((r) => (
              <div
                key={r.domain}
                className={`flex items-center justify-between px-4 py-3.5 transition-colors ${
                  r.available ? "hover:bg-zinc-50" : "opacity-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Globe
                    size={18}
                    className={r.available ? "text-green-500" : "text-zinc-300"}
                  />
                  <div>
                    <span className="text-sm font-medium text-zinc-900">
                      {r.domain}
                    </span>
                    {r.available && (
                      <span className="ml-2 text-xs text-green-600 font-medium">
                        Available
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm font-medium ${
                      r.available ? "text-zinc-900" : "text-zinc-400"
                    }`}
                  >
                    ${r.price.toFixed(2)}/yr
                  </span>
                  {r.available ? (
                    isInCart(r.domain) ? (
                      <button
                        onClick={() => removeFromCart(r.domain)}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold border border-zinc-300 text-zinc-600 hover:bg-zinc-100 transition-colors"
                      >
                        In Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(r)}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold transition-colors"
                        style={{
                          background: "#FEE546",
                          color: "rgba(0,0,0,0.85)",
                        }}
                      >
                        Add to Cart
                      </button>
                    )
                  ) : (
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-400">
                      Taken
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {!loading && searched && results.length === 0 && !error && (
        <div className="text-center py-16">
          <Globe size={40} className="mx-auto mb-3 text-zinc-300" />
          <p className="text-sm text-zinc-500">
            No results found. Try a different search term.
          </p>
        </div>
      )}

      {/* Initial state */}
      {!searched && !loading && (
        <div className="text-center py-16">
          <Globe size={40} className="mx-auto mb-3 text-zinc-300" />
          <p className="text-sm text-zinc-500">
            Enter a domain name above to check availability and pricing.
          </p>
        </div>
      )}
    </div>
  );
}
