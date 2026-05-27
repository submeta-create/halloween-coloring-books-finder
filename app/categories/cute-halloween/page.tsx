import { products } from "@/app/data/products";
import Link from "next/link";

export default function CuteHalloweenPage() {
  const books = products.slice(0, 12);

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="rounded-full bg-white px-5 py-3 text-sm font-bold shadow-sm"
        >
          ← Back Home
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Halloween Category
          </p>

          <h1 className="mt-3 text-5xl font-black leading-tight">
            Cute Halloween Coloring Books
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-700">
            Discover cute Halloween coloring books with cozy ghosts,
            pumpkins, kawaii animals, spooky autumn vibes, and relaxing
            coloring pages for kids, teens, and adults.
          </p>
        </header>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.asin}
              className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/books/${book.asin}`}>
                <img
                  src={`/covers/${book.asin}.jpg`}
                  alt={book.title}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </Link>

              <h2 className="mt-5 line-clamp-3 text-2xl font-black leading-tight">
                {book.title}
              </h2>

              <p className="mt-3 text-zinc-500">
                ASIN: {book.asin}
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href={`https://www.amazon.com/dp/${book.asin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-black px-5 py-3 font-semibold text-white"
                >
                  Amazon
                </a>

                <Link
                  href={`/books/${book.asin}`}
                  className="rounded-2xl border border-zinc-300 px-5 py-3 font-semibold"
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