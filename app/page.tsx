import Link from "next/link";
import Image from "next/image";

const products = [
  "B0F5GXK4ZZ",
  "B0FGP9HQ24",
  "B0FKNDH6VD",
  "B0F6KDB4X1",
  "B0F7X8W5J3",
  "B0FJ5HTSYG",
  "B0F6CMKL6K",
  "B0F87HTSXR",
  "B0FC2HL9PN",
  "B0FC69CCRF",
  "B0H1N6HD2P",
  "B0H1N981H3",
  "B0FMPXV23H",
  "B0FBFT2GVR",
  "B0FRXTXL9Y",
  "B0GZNZ1GT8",
  "B0FT6Q7PVJ",
  "B0FMPTFWC7",
  "B0FB8RLT7R",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-16">
      <header className="mx-auto mb-14 max-w-4xl text-center">
        <h1 className="mb-4 text-5xl font-bold text-black">
          Halloween Coloring Books
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Discover cute, spooky, cozy, and fun Halloween coloring books.
        </p>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((asin) => (
          <div
            key={asin}
            className="rounded-3xl border border-gray-300 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={`/covers/${asin}.jpg`}
                alt={asin}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-black">
              Halloween Coloring Book
            </h2>

            <p className="mb-6 text-gray-500">ASIN: {asin}</p>

            <div className="flex gap-3">
              <a
                href={`https://www.amazon.com/dp/${asin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                View on Amazon
              </a>

              <Link
                href={`/halloween-coloring-books/${asin}`}
                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}