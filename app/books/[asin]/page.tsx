import Link from "next/link";
import { products } from "./data/products";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5efe6] text-zinc-900">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Halloween Coloring Books
          </h1>

          <p className="mt-6 text-xl text-zinc-700">
            Discover cute, spooky, cozy, and relaxing Halloween coloring books
            for kids, teens, and adults.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">
              Cute Halloween
            </div>

            <div className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">
              Cozy Coloring
            </div>

            <div className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">
              Ghosts & Pumpkins
            </div>

            <div className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">
              Bold & Easy
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-4xl font-black">{products.length}</div>
            <div className="mt-2 text-zinc-600">Halloween Books</div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-4xl font-black">Kids</div>
            <div className="mt-2 text-zinc-600">Fun Coloring Pages</div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-4xl font-black">Teens</div>
            <div className="mt-2 text-zinc-600">Cozy & Spooky Art</div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-4xl font-black">Adults</div>
            <div className="mt-2 text-zinc-600">Relaxing Coloring</div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((book) => (
            <Link
              key={book.asin}
              href={`/books/${book.asin}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={`/covers/${book.asin}.png`}
                  alt={book.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h2 className="line-clamp-2 text-xl font-bold">
                  {book.title}
                </h2>

                <p className="mt-3 text-sm text-zinc-600">
                  ASIN: {book.asin}
                </p>

                <div className="mt-5 inline-block rounded-2xl bg-black px-4 py-2 text-sm font-semibold text-white">
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}