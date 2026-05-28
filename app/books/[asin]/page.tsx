import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  getProductTags,
  getRelatedProducts,
  products,
  site,
} from "@/app/data/products";

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
    description: `${book.title} is a cute, cozy, spooky Halloween coloring book for seasonal gifts, relaxing autumn activities, and screen-free creative time.`,
    alternates: {
      canonical: `${site.url}/books/${book.asin}`,
    },
    openGraph: {
      title: `${book.title} | ${site.name}`,
      description: `${book.title} is a Halloween coloring book pick for cozy autumn coloring, seasonal gifts, and creative screen-free time.`,
      url: `${site.url}/books/${book.asin}`,
      type: "article",
      images: [
        {
          url: `${site.url}/covers/${book.asin}.jpg`,
          width: 1200,
          height: 1200,
          alt: book.title,
        },
      ],
    },
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

  const relatedBooks = getRelatedProducts(book);
  const productTags = getProductTags(book);

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: "Ella Tarling",
    },
    bookFormat: "Paperback",
    inLanguage: "en",
    genre: [
      "Coloring Book",
      "Halloween Coloring Book",
      "Cozy Coloring Book",
    ],
    image: `${site.url}/covers/${book.asin}.jpg`,
    url: `${site.url}/books/${book.asin}`,
    sameAs: `https://www.amazon.com/dp/${book.asin}`,
    keywords: productTags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Halloween Coloring Books",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: book.title,
        item: `${site.url}/books/${book.asin}`,
      },
    ],
  };

  const relatedItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Books similar to ${book.title}`,
    itemListElement: relatedBooks.map((related, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/books/${related.asin}`,
      name: related.title,
    })),
  };

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(relatedItemListSchema),
        }}
      />

      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 font-semibold"
        >
          ← Back Home
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <Image
              src={`/covers/${book.asin}.jpg`}
              alt={book.title}
              width={1000}
              height={1000}
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

            <p className="mt-6 text-2xl text-zinc-500">ASIN: {book.asin}</p>

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
              className="mt-8 inline-block rounded-2xl bg-black px-8 py-5 text-xl font-bold text-white"
            >
              View on Amazon
            </a>

            <section className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">
                  Best For
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                  <li>Cozy Halloween coloring fans</li>
                  <li>Kids, teens, and adults</li>
                  <li>Relaxing autumn coloring sessions</li>
                  <li>Cute spooky aesthetics and bold easy pages</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">
                  Popular Themes
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                  <li>Ghosts and pumpkins</li>
                  <li>Cozy autumn vibes</li>
                  <li>Kawaii spooky art</li>
                  <li>Bold and easy coloring pages</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">
                  Gift Use Cases
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                  <li>Halloween basket fillers</li>
                  <li>October birthday gifts</li>
                  <li>Cozy fall self-care gifts</li>
                  <li>Screen-free relaxing activities</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">
                  Why We Picked It
                </h2>

                <p className="mt-3 text-gray-700">
                  This coloring book fits the cozy Halloween trend with cute
                  spooky artwork, relaxing seasonal themes, and easy-to-enjoy
                  coloring pages for different age groups.
                </p>
              </div>
            </section>
          </div>
        </div>

        <section className="mt-24">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-5xl font-black">Related Halloween Books</h2>

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
                className="flex min-h-[520px] flex-col rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/books/${related.asin}`}>
                  <Image
                    src={`/covers/${related.asin}.jpg`}
                    alt={related.title}
                    width={800}
                    height={800}
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                </Link>

                <h3 className="mt-5 line-clamp-3 text-2xl font-black leading-tight">
                  {related.title}
                </h3>

                <p className="mt-3 text-zinc-500">ASIN: {related.asin}</p>

                <div className="mt-auto flex gap-3 pt-6">
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
