"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SHELL_PREFIXES = ["/dashboard"];
const SHELL_EXACT_PATHS = ["/products"];

export default function MarketingChrome({ children }) {
  const pathname = usePathname();
  const isShell =
    SHELL_EXACT_PATHS.includes(pathname) ||
    SHELL_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(prefix + "/")
    );

  if (isShell) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
