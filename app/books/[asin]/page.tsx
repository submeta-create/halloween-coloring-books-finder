import { products } from "../../data/products";
import Link from "next/link";

export default async function BookPage({
  params,
}: {
  params: Promise<{ asin: string }>;
}) {
  const { asin } = await params;

  const book = products.find((p) => p.asin === asin);

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm underline">
          ← Back
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <img
            src={`/covers/${book.asin}.jpg`}
            alt={book.title}
            className="aspect-square w-full rounded-3xl object-cover shadow-lg"
          />

          <div>
            <h1 className="text-4xl font-bold leading-tight">
              {book.title}
            </h1>

            <p className="mt-4 text-zinc-600">
              ASIN: {book.asin}
            </p>

            <p className="mt-8 text-lg leading-8 text-zinc-700">
              {book.title} is a cute and spooky Halloween coloring book pick
              for kids, teens, adults, cozy autumn activities, seasonal gifts,
              relaxation, and screen-free creative fun.
            </p>

            <a
              href={`https://www.amazon.com/dp/${book.asin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-2xl bg-zinc-900 px-6 py-4 font-semibold text-white"
            >
              View on Amazon
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}