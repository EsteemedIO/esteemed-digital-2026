import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import MarketingChrome from "@/components/MarketingChrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://www.esteemed.io"),
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Esteemed — The AI + Human Platform for Creating and Managing Amazing Websites",
    template: "%s | Esteemed",
  },
  description:
    "Esteemed.io is the platform built for WordPress, Drupal, and Next.js. Our Create AI builder helps your business build, host, and manage your digital needs with ease. Need an expert? Hire from our pool of thousands of experienced professionals.",
  openGraph: {
    title: "Esteemed — The AI + Human Platform for Creating and Managing Amazing Websites",
    description:
      "Build, host, and manage with our Create AI builder. Need an expert? Hire from thousands of experienced professionals.",
    url: "https://www.esteemed.io",
    siteName: "Esteemed",
    type: "website",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Esteemed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esteemed — The AI + Human Platform for Creating and Managing Amazing Websites",
    description:
      "Build, host, and manage with our Create AI builder. Need an expert? Hire from thousands of experienced professionals.",
    images: ["/og-logo.png"],
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
