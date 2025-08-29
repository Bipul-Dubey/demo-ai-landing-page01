import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // pick what you need
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://ai-landing-01.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BD – AI‑Powered Inventory & Operations",
    template: "%s | BD",
  },
  description:
    "Optimize inventory with AI demand forecasting, automated replenishment, and real‑time analytics. Prevent stockouts, cut excess, and scale efficiently.",
  keywords: [
    "inventory management",
    "demand forecasting",
    "replenishment",
    "supply chain",
    "AI analytics",
    "SaaS",
  ],
  authors: [{ name: "BD", url: SITE_URL }],
  creator: "BD",
  publisher: "BD",
  applicationName: "BD",

  // Open Graph (Facebook/LinkedIn)
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "BD – AI‑Powered Inventory & Operations",
    description:
      "AI demand forecasting, automated reorder points, and real‑time analytics to prevent stockouts and reduce excess.",
    siteName: "BD",
    images: [
      {
        url: "/og/og-cover.png",
        width: 1200,
        height: 630,
        alt: "BD – AI‑Powered Inventory & Operations",
      },
    ],
    locale: "en_US",
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "BD – AI‑Powered Inventory & Operations",
    description:
      "Predict demand, automate replenishment, and optimize inventory with AI.",
    creator: "@yourhandle",
    site: "@yourhandle",
    images: ["/og/og-cover.png"],
  },

  // Icons & theme color
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicons/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b0c12" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c12" },
  ],

  // SEO / indexing controls
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1, // No limit
      "max-image-preview": "large", // Large image previews
      "max-snippet": -1, // No limit
    },
  },

  // Additional
  category: "technology",
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
