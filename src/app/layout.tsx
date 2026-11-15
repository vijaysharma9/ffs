import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { COMPANY_INFO } from "@/data/company";

export const viewport: Viewport = {
  themeColor: "#092c62",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.website),
  title: {
    default: "Fast Fincorp Services | Your Trusted Loan Partner (Pan India)",
    template: "%s | Fast Fincorp Services",
  },
  description:
    "Explore Personal, Business, Home, Car, Loan Against Property, Overdraft and Debt Consolidation loan options with guided assistance from Fast Fincorp Services across India.",
  keywords: [
    "Loan assistance India",
    "Personal loan Pan India",
    "Business loan DSA",
    "Home loan consultation",
    "Car loan assistance",
    "Loan against property",
    "Overdraft facility",
    "Debt consolidation India",
    "Fast Fincorp Services",
  ],
  authors: [{ name: "Fast Fincorp Services" }],
  creator: "Fast Fincorp Services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: COMPANY_INFO.website,
    title: "Fast Fincorp Services | Your Trusted Loan Partner (Pan India)",
    description:
      "Explore personal, business, home and other loan options with professional assistance from Fast Fincorp Services. Pan India loan enquiry support.",
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 341,
        alt: "Fast Fincorp Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Fincorp Services | Your Trusted Loan Partner",
    description:
      "Guided loan enquiry assistance for personal, business, and property financing across India.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    telephone: COMPANY_INFO.phone,
    url: COMPANY_INFO.website,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Delhi NCR & Pan India",
    },
    openingHours: "Mo-Sa 09:30-19:00",
    priceRange: "₹₹",
    image: `${COMPANY_INFO.website}/images/logo.png`,
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-ink bg-white antialiased flex flex-col min-h-screen">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
