import Link from "next/link";
import { products } from "../../data/products";

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

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/halloween-coloring-books" className="text-sm underline">
          ← Back to Halloween Coloring Books
        </Link>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <img
            src={`/covers/${book.asin}.jpg`}
            alt={book.title}
            className="aspect-square w-full rounded-3xl object-cover shadow"
          />

          <div>
            <h1 className="text-4xl font-bold leading-tight">{book.title}</h1>

            <p className="mt-4 text-sm text-zinc-600">ASIN: {book.asin}</p>

            <p className="mt-6 text-lg text-zinc-700">
              A cute and spooky Halloween coloring book pick for seasonal fun,
              cozy autumn activities, gifts, relaxation, and creative screen-free
              moments.
            </p>

            <a
              href={book.amazonUrl}
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