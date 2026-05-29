import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/app/components/Footer";
import { site } from "@/app/data/products";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Cozy Halloween Coloring Books",
  description:
    "Cute, spooky and cozy Halloween coloring books for kids, teens and adults.",
  openGraph: {
    title: "Cozy Halloween Coloring Books",
    description:
      "Cute, spooky and cozy Halloween coloring books for kids, teens and adults.",
    url: "https://cozyhalloweenbooks.com",
    siteName: "Cozy Halloween Books",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cozy Halloween Coloring Books",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cozy Halloween Coloring Books",
    description:
      "Cute, spooky and cozy Halloween coloring books for kids, teens and adults.",
    images: ["/og-image.jpg"],
  },
  other: {
    "p:domain_verify": "0cb93d792930ea8778ea575a1cbf90de",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/og-image.jpg`,
    email: site.email,
    description: site.description,
    founder: {
      "@type": "Person",
      name: site.author.name,
      url: `${site.url}/about`,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
