"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button, Input } from "@heroui/react";
import { Bell, Search, ShieldCheck, Trash2 } from "lucide-react";
import { checkoutItemsHref } from "@/lib/pricing-catalog";

function normalizeCart(rawValue) {
  if (!rawValue) return [];
  try {
    const parsed = JSON.parse(rawValue);
    const items = Array.isArray(parsed) ? parsed : parsed.items || [];
    return items
      .filter((item) => item && item.lookupKey)
      .map((item) => ({
        name: item.name || item.title || item.lookupKey,
        lookupKey: item.lookupKey,
        quantity: Math.max(1, Number(item.quantity) || 1),
        price: item.price || item.priceLabel || "",
      }));
  } catch {
    return [];
  }
}

function writeCart(items) {
  window.localStorage.setItem("esteemed_cart", JSON.stringify(items));
  window.dispatchEvent(new Event("esteemed-cart-updated"));
}

export default function CartPage() {
  const [items, setItems] = useState([]);
  const [domainSearch, setDomainSearch] = useState("");

  useEffect(() => {
    setItems(normalizeCart(window.localStorage.getItem("esteemed_cart")));
  }, []);

  const checkoutHref = useMemo(
    () => checkoutItemsHref(items, { successPath: "/thanks", cancelPath: "/dashboard/cart" }),
    [items],
  );

  function clearCart() {
    setItems([]);
    writeCart([]);
  }

  function removeItem(lookupKey) {
    const nextItems = items.filter((item) => item.lookupKey !== lookupKey);
    setItems(nextItems);
    writeCart(nextItems);
  }

  return (
    <div className="mx-auto max-w-[1280px]">
      <section className="mb-8 rounded-lg bg-[#E7F1FF] px-5 py-4">
        <div className="flex items-center gap-3 text-sm text-ink">
          <Bell size={18} />
          <span>You have domain and website options available.</span>
          <Link href="/dashboard/settings#domains" className="font-semibold underline underline-offset-4">
            Review Domains
          </Link>
        </div>
      </section>

      {items.length === 0 ? (
        <section className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
          <div>
            <h1 className="text-2xl font-semibold text-ink">Your cart is empty.</h1>
            <p className="mt-2 text-base text-zinc-600">What&apos;s next for your business? Find a domain.</p>

            <form
              className="mt-5 flex max-w-3xl gap-0"
              onSubmit={(event) => {
                event.preventDefault();
                const query = domainSearch.trim();
                if (query) {
                  window.location.href = `/dashboard/settings#domains`;
                }
              }}
            >
              <Input
                aria-label="Search for a domain"
                value={domainSearch}
                onValueChange={setDomainSearch}
                placeholder="Every great idea deserves its own domain name"
                radius="none"
                size="lg"
                classNames={{
                  inputWrapper: "rounded-l-sm rounded-r-none border border-zinc-400 bg-white shadow-none",
                  input: "text-base",
                }}
              />
              <Button
                type="submit"
                isIconOnly
                radius="none"
                size="lg"
                className="rounded-r-sm bg-[#111111] text-white"
                aria-label="Search domains"
              >
                <Search size={20} />
              </Button>
            </form>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={Link} href="/products" radius="sm" variant="bordered" className="border-zinc-200 font-semibold text-ink">
                Back to Home
              </Button>
              <Button as={Link} href="/dashboard/settings#domains" radius="sm" className="bg-accent font-semibold text-ink hover:bg-accent-hover">
                Manage Domains
              </Button>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-sm bg-zinc-50 p-6">
              <h2 className="text-xl font-semibold text-ink">Order Summary</h2>
              <div className="mt-5 border-t border-zinc-200 pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-ink">Subtotal (USD)</p>
                    <p className="mt-1 text-xs text-zinc-500">Subtotal does not include applicable taxes and fees</p>
                  </div>
                  <p className="text-xl font-semibold text-[#007C89]">$0.00</p>
                </div>
              </div>
            </div>

            <div className="rounded-sm bg-zinc-50 p-5 text-center">
              <div className="mb-2 flex items-center justify-center gap-2 text-sm font-semibold text-ink">
                <ShieldCheck size={17} />
                Quality You Can Trust
              </div>
              <p className="text-sm leading-relaxed text-zinc-600">
                Esteemed support is available to help you understand your purchase and launch path.
              </p>
            </div>
          </aside>
        </section>
      ) : (
        <section className="rounded-xl border border-zinc-200 bg-white p-5">
          <div className="divide-y divide-zinc-200">
            {items.map((item) => (
              <div key={item.lookupKey} className="grid gap-4 py-4 md:grid-cols-[1fr_auto_auto] md:items-center">
                <div>
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {item.lookupKey} · Qty {item.quantity}
                  </p>
                </div>
                {item.price && <p className="text-sm font-semibold text-ink">{item.price}</p>}
                <Button
                  isIconOnly
                  radius="sm"
                  variant="light"
                  aria-label={`Remove ${item.name}`}
                  onPress={() => removeItem(item.lookupKey)}
                >
                  <Trash2 size={17} />
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap justify-end gap-3 border-t border-zinc-200 pt-5">
            <Button onPress={clearCart} radius="sm" variant="bordered" className="border-zinc-200 font-semibold text-ink">
              Clear cart
            </Button>
            <Button as="a" href={checkoutHref} radius="sm" className="bg-[#111111] font-semibold text-white hover:bg-[#111111]">
              Checkout
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
