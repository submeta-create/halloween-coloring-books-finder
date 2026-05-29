import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  categories,
  getCategory,
  getProductsByCategory,
  products,
  site,
} from "@/app/data/products";
import { FAQ } from "@/app/components/FAQ";
import { RelatedLinks } from "@/app/components/RelatedLinks";
import { getAmazonUrl } from "@/app/lib/amazon";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {
      title: "Halloween Coloring Books",
    };
  }

  return {
    title: `${category.title} | ${site.name}`,
    description: category.description,
    alternates: {
      canonical: `${site.url}/categories/${category.slug}`,
    },
    openGraph: {
      title: `${category.title} | ${site.name}`,
      description: category.description,
      url: `${site.url}/categories/${category.slug}`,
      type: "website",
      images: [
        {
          url: `${site.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return <main className="p-8">Category not found.</main>;
  }

  const filteredBooks = getProductsByCategory(slug);
  const featuredBooks = category.featuredAsins
    .map((asin) => products.find((book) => book.asin === asin))
    .filter((book) => book !== undefined);
  const otherCategories = categories.filter((item) => item.slug !== slug);

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
        name: category.title,
        item: `${site.url}/categories/${category.slug}`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.title,
    description: category.description,
    itemListElement: filteredBooks.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/books/${book.asin}`,
      name: book.title,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm font-semibold text-zinc-600"
        >
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <span className="text-black">{category.title}</span>
        </nav>

        <header className="mt-10 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Halloween Coloring Book Hub
          </p>

          <h1 className="mt-3 text-5xl font-black leading-tight">
            {category.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-700">
            {category.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-2xl bg-black px-5 py-3 font-semibold text-white"
            >
              Back Home
            </Link>
            {category.relatedGuides.slice(0, 2).map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 font-semibold"
              >
                {guide.label}
              </Link>
            ))}
          </div>

          <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-black">
              Best For
            </h2>

            <ul className="mt-4 grid gap-3 text-zinc-700 md:grid-cols-3">
              {category.bestFor.map((useCase) => (
                <li key={useCase}>{useCase}</li>
              ))}
            </ul>
          </section>
        </header>

        <RelatedLinks links={category.relatedGuides} />

        <section className="mt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-black text-black">
                Featured Books
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-700">
                These featured picks connect this hub to individual book pages
                with ASIN references, Amazon links, editorial notes, and more
                related books.
              </p>
            </div>

            <Link
              href="/halloween-coloring-book-gift-ideas"
              className="w-fit rounded-2xl border border-zinc-300 bg-white px-5 py-3 font-semibold"
            >
              Gift Ideas
            </Link>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredBooks.map((book) => (
              <div
                key={book.asin}
                className="flex min-h-[500px] flex-col rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/books/${book.asin}`}>
                  <Image
                    src={`/covers/${book.asin}.jpg`}
                    alt={book.title}
                    width={800}
                    height={800}
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                </Link>

                <h3 className="mt-5 line-clamp-3 text-2xl font-black leading-tight">
                  {book.title}
                </h3>

                <p className="mt-3 text-zinc-500">ASIN: {book.asin}</p>

                <div className="mt-auto flex gap-3 pt-6">
                  <a
                    href={getAmazonUrl(book.asin)}
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
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-black">
            Related Category Hubs
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-zinc-700">
            Continue browsing adjacent Halloween coloring book clusters and
            compare how each hub groups the same book library by theme.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {otherCategories.map((relatedCategory) => (
              <Link
                key={relatedCategory.slug}
                href={`/categories/${relatedCategory.slug}`}
                className="rounded-xl border border-zinc-200 px-4 py-3 font-semibold text-zinc-800 hover:border-zinc-400"
              >
                {relatedCategory.title}
              </Link>
            ))}
          </div>
        </section>

        <FAQ items={category.faqs} />

        <section className="mt-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-black text-black">
              All {category.title}
            </h2>
            <p className="mt-3 leading-7 text-zinc-700">
              Browse the full set of books matched to this category, then use
              each book page to move into related products and nearby theme
              guides.
            </p>
          </div>
        </section>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredBooks.map((book) => (
            <div
              key={book.asin}
              className="flex min-h-[520px] flex-col rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/books/${book.asin}`}>
                <Image
                  src={`/covers/${book.asin}.jpg`}
                  alt={book.title}
                  width={800}
                  height={800}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </Link>

              <h2 className="mt-5 line-clamp-3 text-2xl font-black leading-tight">
                {book.title}
              </h2>

              <p className="mt-3 text-zinc-500">
                ASIN: {book.asin}
              </p>

              <div className="mt-auto flex gap-3 pt-6">
                <a
                  href={getAmazonUrl(book.asin)}
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
