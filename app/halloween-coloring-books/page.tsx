import Link from "next/link";
import { products } from "../data/products";

export const metadata = {
  title: "Halloween Coloring Books",
  description:
    "Browse cute and spooky Halloween coloring books available on Amazon.",
};

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold md:text-6xl">
          Halloween Coloring Books
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-zinc-700">
          A curated list of Halloween coloring books with direct Amazon links.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((book) => (
            <div
              key={book.asin}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-200"
            >
              <img
                src={`/covers/${book.asin}.jpg`}
                alt={book.title}
                className="aspect-square w-full rounded-2xl object-cover"
              />

              <h2 className="mt-5 text-2xl font-bold leading-tight">
                {book.title}
              </h2>

              <p className="mt-3 text-sm text-zinc-600">
                ASIN: {book.asin}
              </p>

              <div className="mt-5 flex gap-3">
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white"
                >
                  View on Amazon
                </a>

                <Link
                  href={`/halloween-coloring-books/${book.asin}`}
                  className="rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-semibold"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link href="/" className="text-sm font-medium underline">
            ← Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}