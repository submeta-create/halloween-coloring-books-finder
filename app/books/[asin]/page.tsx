import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { TrustBox } from "@/app/components/TrustBox";
import { TrustSignal } from "@/app/components/TrustSignal";
import { getAmazonUrl } from "@/app/lib/amazon";
import { getBookSchema } from "@/app/lib/schema";
import {
  categories,
  getProductTags,
  getRelatedProducts,
  products,
  site,
} from "@/app/data/products";
import { articles } from "@/app/data/articles";

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

  const relatedBooks = getRelatedProducts(book, 8);
  const bookTags = getProductTags(book);
  const relatedCategories = categories
    .filter((category) => bookTags.includes(category.slug))
    .slice(0, 3);
  const relatedGuides = articles
    .map((article) => {
      const source = `${book.title} ${bookTags.join(" ")}`.toLowerCase();
      const target = `${article.title} ${article.description} ${article.intro}`.toLowerCase();
      const score = source
        .split(/\W+/)
        .filter((word) => word.length > 4 && target.includes(word)).length;

      return { article, score };
    })
    .sort((a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title))
    .slice(0, 4)
    .map(({ article }) => article);
  const bookSchema = {
    "@context": "https://schema.org",
    ...getBookSchema(book),
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

            <TrustBox />

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
              href={getAmazonUrl(book.asin)}
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

            <TrustSignal />
          </div>
        </div>

        <section className="mt-20 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-3xl font-black text-black">
              Editorial Context
            </h2>
            <p className="mt-4 leading-8 text-zinc-700">
              This page is part of {site.name}, an editorial Halloween coloring
              book library curated by {site.author.name}. Book pages are built
              around real ASIN references, internal theme clusters, and clear
              links to related guides instead of copied Amazon reviews or fake
              rating snippets.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-block rounded-2xl border border-zinc-300 px-5 py-3 font-semibold"
            >
              About {site.name}
            </Link>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-black">
              Theme Hubs
            </h2>
            <div className="mt-5 grid gap-3">
              {(relatedCategories.length > 0 ? relatedCategories : categories.slice(0, 3)).map(
                (category) => (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    className="rounded-xl border border-zinc-200 px-4 py-3 font-semibold text-zinc-800 hover:border-zinc-400"
                  >
                    {category.title}
                  </Link>
                )
              )}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-black">
            Related Guides
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-zinc-700">
            Use these guides to compare nearby Halloween coloring book themes,
            gift use cases, and audience-focused recommendations.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/${guide.slug}`}
                className="rounded-xl border border-zinc-200 px-4 py-3 hover:border-zinc-400"
              >
                <h3 className="font-bold text-zinc-900">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-5xl font-black">Related Halloween Books</h2>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-700">
                More book pages from the same Halloween coloring library,
                matched by nearby themes such as cute, cozy, ghost, pumpkin,
                bold easy, fall, animal, food, witch, and manga.
              </p>
            </div>

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
                    href={getAmazonUrl(related.asin)}
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
