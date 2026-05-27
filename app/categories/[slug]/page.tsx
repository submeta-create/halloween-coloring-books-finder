import { products } from "@/app/data/products";
import Link from "next/link";

const categories = {
  "cute-halloween": {
    title: "Cute Halloween Coloring Books",
    description:
      "Cute Halloween coloring books with cozy ghosts, pumpkins, kawaii animals, and spooky autumn vibes.",
    keywords: ["cute", "spooky", "cozy", "halloween"],
  },
  "cozy-spooky": {
    title: "Cozy Spooky Coloring Books",
    description:
      "Relaxing cozy spooky coloring books for autumn nights, Halloween gifts, and screen-free creative time.",
    keywords: ["cozy", "spooky", "snuggles", "chill"],
  },
  "ghost-coloring-books": {
    title: "Ghost Coloring Books",
    description:
      "Cute ghost coloring books with friendly spooky characters, cozy scenes, and Halloween fun.",
    keywords: ["ghost", "spooky"],
  },
  "bold-easy": {
    title: "Bold and Easy Halloween Coloring Books",
    description:
      "Bold and easy Halloween coloring books with simple, clear, relaxing designs for kids, teens, and adults.",
    keywords: ["bold", "easy", "simple"],
  },
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories[slug as keyof typeof categories];

  if (!category) {
    return <main className="p-8">Category not found.</main>;
  }

  const filteredBooks = products.filter((book) =>
    category.keywords.some((keyword) =>
      book.title.toLowerCase().includes(keyword.toLowerCase())
    )
  );

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="rounded-full bg-white px-5 py-3 text-sm font-bold shadow-sm"
        >
          ← Back Home
        </Link>

        <header className="mt-10 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Halloween Category
          </p>

          <h1 className="mt-3 text-5xl font-black leading-tight">
            {category.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-700">
            {category.description}
          </p>
        </header>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredBooks.map((book) => (
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