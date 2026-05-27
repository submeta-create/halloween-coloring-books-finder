import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://cozyhalloweenbooks.com"),
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}