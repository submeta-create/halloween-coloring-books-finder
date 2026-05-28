import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  categories,
  getCategory,
  getProductsByCategory,
  site,
} from "@/app/data/products";
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
