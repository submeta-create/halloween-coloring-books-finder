import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Halloween Coloring Books | Cute, Cozy & Spooky Books",
  description:
    "Discover cute, cozy, spooky, and bold Halloween coloring books for kids, teens, and adults.",
  keywords: [
    "Halloween coloring books",
    "cute Halloween coloring book",
    "spooky coloring books",
    "cozy Halloween books",
    "Halloween gifts",
    "coloring books for adults",
    "coloring books for kids",
  ],
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