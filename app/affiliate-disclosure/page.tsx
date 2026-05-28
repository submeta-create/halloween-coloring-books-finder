import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Cozy Halloween Books",
  description: "Affiliate disclosure for Cozy Halloween Books.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 font-semibold"
        >
          Back Home
        </Link>

        <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-black text-black">
            Affiliate Disclosure
          </h1>

          <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-700">
            <p>
              As an Amazon Associate, we may earn from qualifying purchases.
            </p>

            <p>
              Some links on Cozy Halloween Books may lead to Amazon product
              pages. These links help readers find current product information,
              availability, and reviews directly on Amazon.
            </p>

            <p>
              Editorial selections are presented as curated Halloween coloring
              book picks and do not include manually copied Amazon ratings or
              review counts.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
