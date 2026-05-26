import Link from "next/link";
import Image from "next/image";

const books = [
  {
    title: "Spooky Snuggles Halloween Coloring Book",
    asin: "B0F5GXK4ZZ",
  },
  {
    title: "Halloween Coloring Book for Adults",
    asin: "B0FGP9HQ24",
  },
  {
    title: "Little Cozy Fall Coloring Book",
    asin: "B0FKNDH6VD",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5efe6] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black text-center mb-6">
          Halloween Coloring Books
        </h1>

        <p className="text-center text-gray-600 text-xl mb-14">
          Discover cute, spooky, cozy, and fun Halloween coloring books.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.asin}
              className="bg-white rounded-3xl p-6 shadow-sm border"
            >
              <Image
                src={`/covers/${book.asin}.jpg`}
                alt={book.title}
                width={600}
                height={600}
                className="rounded-2xl w-full aspect-square object-cover"
              />

              <h2 className="text-3xl font-bold mt-6 leading-tight">
                {book.title}
              </h2>

              <p className="text-gray-500 mt-3">
                ASIN: {book.asin}
              </p>

              <div className="flex gap-3 mt-6">
                <a
                  href={`https://www.amazon.com/dp/${book.asin}`}
                  target="_blank"
                  className="bg-black text-white px-5 py-3 rounded-2xl font-semibold"
                >
                  View on Amazon
                </a>

                <Link
                  href={`/halloween-coloring-books/${book.asin}`}
                  className="border px-5 py-3 rounded-2xl font-semibold"
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