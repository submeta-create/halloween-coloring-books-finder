import { products } from "@/app/data/products";
import Link from "next/link";

export default async function BookPage({
  params,
}: {
  params: Promise<{ asin: string }>;
}) {
  const { asin } = await params;
  const book = products.find((p) => p.asin === asin);

  if (!book) {
    return <main className="p-8">Book not found.</main>;
  }

  const relatedBooks = products
    .filter((p) => p.asin !== book.asin)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold underline">
          ← Back to all Halloween books
        </Link>

        <section className="mt-10 grid gap-10 md:grid-cols-2">
          <img
            src={`/covers/${book.asin}.jpg`}
            alt={book.title}
            className="aspect-square w-full rounded-3xl object-cover shadow-lg"
          />

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-700">
              Halloween Coloring Book
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-5xl">
              {book.title}
            </h1>

            <p className="mt-4 text-zinc-600">ASIN: {book.asin}</p>

            <p className="mt-8 text-lg leading-8 text-zinc-700">
              {book.title} is a cute, cozy, and spooky Halloween coloring book
              pick for seasonal gifts, relaxing autumn activities, creative
              screen-free time, and fun coloring moments for kids, teens, and
              adults.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                Cute Halloween
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                Cozy Spooky
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                Gift Idea
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                Coloring Book
              </span>
            </div>

            <a
              href={`https://www.amazon.com/dp/${book.asin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-2xl bg-black px-7 py-4 font-semibold text-white"
            >
              View on Amazon
            </a>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-black">Related Halloween Books</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedBooks.map((related) => (
              <Link
                key={related.asin}
                href={`/books/${related.asin}`}
                className="rounded-3xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={`/covers/${related.asin}.jpg`}
                  alt={related.title}
                  className="aspect-square w-full rounded-2xl object-cover"
                />

                <h3 className="mt-4 line-clamp-2 text-lg font-bold">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}