"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";

export default function DomainSearchBar({ variant = "light" }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const isDark = variant === "dark";

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) return;
    router.push(`/hosting/domains?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl mx-auto">
      <div className="relative flex-1">
        <Search
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
          strokeWidth={2}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
        className="px-6 py-4 rounded-r-xl bg-ink text-white font-bold text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2 whitespace-nowrap"
      >
        Search
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
