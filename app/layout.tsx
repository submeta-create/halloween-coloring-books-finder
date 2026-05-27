import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cozy Halloween Coloring Books",
  description:
    "Cute, spooky and cozy coloring books for kids, teens and adults.",

  openGraph: {
    title: "Cozy Halloween Coloring Books",
    description:
      "Cute, spooky and cozy coloring books for kids, teens and adults.",
    url: "https://halloween-coloring-books-finder.vercel.app",
    siteName: "Ella Tarling",
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
      "Cute, spooky and cozy coloring books for kids, teens and adults.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}