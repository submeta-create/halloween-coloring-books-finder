import Link from "next/link";
import { Metadata } from "next";
import { products } from "@/app/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ asin: string }>;
}): Promise<Metadata> {
  const { asin } = await params;

  const book = products.find((p) => p.asin === asin);

  if (!book) {
    return {
      title: "Halloween Coloring Books",
    };
  }

  return {
    title: `${book.title} | Halloween Coloring Books`,
    description: `${book.title} is a cute, cozy, spooky Halloween coloring book for kids, teens, and adults.`,
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ asin: string }>;
}) {
  const { asin } = await params;

  const book = products.find((p) => p.asin === asin);

  if (!book) {
    return (
      <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-black">Book not found.</h1>

          <Link
            href="/"
            className="mt-6 inline-block rounded-2xl bg-black px-5 py-3 font-semibold text-white"
          >
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  const relatedBooks = products
    .filter((p) => p.asin !== book.asin)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 font-semibold"
        >
          ← Back Home
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <img
              src={`/covers/${book.asin}.jpg`}
              alt={book.title}
              className="aspect-square w-full rounded-3xl object-cover shadow-lg"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              Halloween Coloring Book
            </p>

            <h1 className="mt-4 text-6xl font-black leading-tight text-black">
              {book.title}
            </h1>

            <p className="mt-6 text-2xl text-zinc-500">
              ASIN: {book.asin}
            </p>

            <p className="mt-10 text-2xl leading-10 text-zinc-700">
              {book.title} is a cute, cozy, and spooky Halloween coloring book
              pick for seasonal gifts, relaxing autumn activities, creative
              screen-free time, and fun coloring moments for kids, teens, and
              adults.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm">
                Cute Halloween
              </div>

              <div className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm">
                Cozy Spooky
              </div>

              <div className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm">
                Gift Idea
              </div>

              <div className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm">
                Coloring Book
              </div>
            </div>

            <a
              href={`https://www.amazon.com/dp/${book.asin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-2xl bg-black px-8 py-5 text-xl font-bold text-white"
            >
              View on Amazon
            </a>
          </div>
        </div>

        <section className="mt-24">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-5xl font-black">
              Related Halloween Books
            </h2>

            <Link
              href="/"
              className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 font-semibold"
            >
              Browse More
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {relatedBooks.map((related) => (
              <div
                key={related.asin}
                className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/books/${related.asin}`}>
                  <img
                    src={`/covers/${related.asin}.jpg`}
                    alt={related.title}
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                </Link>

                <h3 className="mt-5 line-clamp-3 text-2xl font-black leading-tight">
                  {related.title}
                </h3>

                <p className="mt-3 text-zinc-500">
                  ASIN: {related.asin}
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`https://www.amazon.com/dp/${related.asin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-black px-5 py-3 font-semibold text-white"
                  >
                    Amazon
                  </a>

                  <Link
                    href={`/books/${related.asin}`}
                    className="rounded-2xl border border-zinc-300 px-5 py-3 font-semibold"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}