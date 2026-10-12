import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header, Navbar } from "@/components/common";
import GoogleAnalytic from "@/components/GoogleAnalytics/GoogleAnalytics";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { HOME_DESCRIPTION, HOME_TITLE, SITE_URL } from "@/lib/site";
const inter = Inter({ subsets: ["latin"] });

// Fallback metadata. Every page sets its own title, description, canonical and social tags
// with pageMetadata() from src/lib/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Prime Graphics",
  },
  description: HOME_DESCRIPTION,
  applicationName: "Prime Graphics",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "e7B3G4vpyzjJI0hGemBMZoE0GcKs3oL5gZ1PJWGZH1o" },
  icons: { icon: "/assets/logo.png", apple: "/assets/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrganizationJsonLd />
        <Header />
        <GoogleAnalytic />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
