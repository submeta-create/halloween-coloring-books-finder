import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Cozy Halloween Books",
  description: "Privacy information for Cozy Halloween Books.",
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-black text-black">Privacy Policy</h1>

          <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-700">
            <p>
              Cozy Halloween Books is a simple content and recommendation site
              for Halloween coloring books.
            </p>

            <p>
              The site uses Vercel Analytics to understand basic anonymous usage
              patterns, such as page visits and general site performance.
            </p>

            <p>
              There is currently no account creation, no newsletter signup, and
              no direct payment processing on this website.
            </p>

            <p>
              Links to Amazon open external product pages. Any purchase,
              checkout, review, availability, or payment information is handled
              by Amazon, not by Cozy Halloween Books.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
