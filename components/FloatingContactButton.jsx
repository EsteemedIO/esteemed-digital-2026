"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function FloatingContactButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center gap-2 rounded-full border-4 border-accent bg-white px-5 py-3 text-base font-bold text-ink shadow-xl transition-transform hover:scale-[1.03] hover:border-accent-hover sm:bottom-6 sm:right-6 sm:px-6"
    >
      <MessageSquare className="h-5 w-5" strokeWidth={2.3} />
      Contact Us
    </Link>
  );
}
