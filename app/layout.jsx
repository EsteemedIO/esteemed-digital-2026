import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import MarketingChrome from "@/components/MarketingChrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Esteemed — AI + Human gold standard",
    template: "%s | Esteemed",
  },
  description: "Build everything you need with Esteemed. AI to start. Experts to grow.",
  openGraph: {
    title: "Esteemed — AI + Human gold standard",
    description: "Build everything you need with Esteemed. AI to start. Experts to grow.",
    url: "https://esteemed.io",
    siteName: "Esteemed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esteemed — AI + Human gold standard",
    description: "Build everything you need with Esteemed. AI to start. Experts to grow.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-paper text-ink antialiased font-sans">
        <Providers>
          <MarketingChrome>{children}</MarketingChrome>
        </Providers>
      </body>
    </html>
  );
}
