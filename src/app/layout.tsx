import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header, Navbar } from "@/components/common";
import GoogleAnalytic from "@/components/GoogleAnalytics/GoogleAnalytics";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
const inter = Inter({ subsets: ["latin"] });

const title = "Custom Patches, Embroidery Digitizing & Vector Art | Prime Graphics";
const description =
  "Custom embroidered, PVC, leather & sublimation patches with your logo, plus embroidery digitizing and vector art from $9 with 4-hour turnaround. UK, USA & worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Prime Graphics",
  },
  description,
  applicationName: "Prime Graphics",
  keywords: [
    "custom patches",
    "custom embroidered patches",
    "custom PVC patches",
    "custom leather patches",
    "sublimation patches",
    "embroidery digitizing",
    "embroidery digitising",
    "embroidery digitizing services",
    "logo digitizing",
    "DST file",
    "vector art conversion",
    "raster to vector",
    "vectorize logo",
    "custom embroidered patches",
    "PVC patches",
    "leather patches",
    "embroidery digitizing UK",
    "embroidery digitizing USA",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Prime Graphics",
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/assets/embroideryPatch/pvc/custom-pvc-patches.jpg", alt: "Custom patches by Prime Graphics" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/embroideryPatch/pvc/custom-pvc-patches.jpg"],
  },
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
