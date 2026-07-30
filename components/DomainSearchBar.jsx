"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { SUPPORTED_DOMAIN_TLDS } from "@/lib/opensrs";

export default function DomainSearchBar({ variant = "light" }) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef(null);

  const isDark = variant === "dark";

  // Extract base name for suggestions
  const baseName = query.trim().replace(/\.[a-z]{2,}$/i, "").replace(/[^a-z0-9-]/gi, "").toLowerCase();

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) return;
    setShowSuggestions(false);
    router.push(`/hosting/domains?q=${encodeURIComponent(trimmed)}`);
  }

  function selectSuggestion(domain) {
    setQuery(domain);
    setShowSuggestions(false);
    router.push(`/hosting/domains?q=${encodeURIComponent(domain)}`);
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const suggestions = baseName.length >= 2
    ? SUPPORTED_DOMAIN_TLDS.map((tld) => baseName + tld)
    : [];

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex w-full">
        <div className="relative flex-1">
          <Search
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
            strokeWidth={2}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(e.target.value.trim().length >= 2);
            }}
            onFocus={() => {
              if (baseName.length >= 2) setShowSuggestions(true);
            }}
            placeholder="Find your perfect domain name"
            className={`w-full pl-12 pr-4 py-4 rounded-l-xl border text-base font-medium focus:outline-none focus:ring-2 focus:ring-accent ${
              isDark
                ? "bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                : "bg-white border-zinc-200 text-ink placeholder:text-zinc-400"
            }`}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-4 rounded-r-xl bg-white text-ink font-bold text-sm border border-l-0 border-zinc-200 hover:bg-zinc-50 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          Search Domains
        </button>
      </form>

      {/* TLD suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-1 z-50 rounded-xl border border-zinc-200 bg-white shadow-xl overflow-hidden">
          <div className="max-h-[320px] overflow-y-auto">
            {suggestions.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => selectSuggestion(domain)}
                className="w-full text-left px-5 py-3 text-sm text-zinc-700 hover:bg-zinc-50 border-b border-zinc-100 last:border-b-0 transition-colors flex items-center justify-between"
              >
                <span className="font-medium">{domain}</span>
                <span className="text-xs text-zinc-400">Search</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
