import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Esteemed Digital",
    template: "%s | Esteemed Digital",
  },
  description: "AI Lab • Services • Products — built on Esteemed Intelligence, Esteemed AI, and Esteemed Agents.",
  keywords: ["AI", "machine learning", "enterprise AI", "RAG", "agents", "neural memory"],
  authors: [{ name: "Esteemed Digital" }],
  openGraph: {
    title: "Esteemed Digital",
    description: "AI Lab • Services • Products — built on Esteemed Intelligence, Esteemed AI, and Esteemed Agents.",
    url: "https://esteemed.digital",
    siteName: "Esteemed Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esteemed Digital",
    description: "AI Lab • Services • Products",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
