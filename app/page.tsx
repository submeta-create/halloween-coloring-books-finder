import Link from "next/link";
import Image from "next/image";
import { products } from "./data/products";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-black">
            Halloween Coloring Books
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover cute, spooky, cozy, and fun Halloween coloring books
            for kids, teens, and adults.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((book) => (
            <div
              key={book.asin}
              className="rounded-3xl border border-gray-300 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="mb-3 text-2xl font-bold leading-tight text-black">
                {book.title}
              </h2>

              <p className="mb-6 text-gray-500">
                ASIN: {book.asin}
              </p>

              <div className="flex gap-3">
                <a
                  href={`https://www.amazon.com/dp/${book.asin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  View on Amazon
                </a>

                <Link
                  href={`/halloween-coloring-books/${book.asin}`}
                  className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}