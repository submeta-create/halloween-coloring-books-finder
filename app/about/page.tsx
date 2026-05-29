import type { Metadata } from "next";
import Link from "next/link";
import { categories, site } from "@/app/data/products";
import { articles } from "@/app/data/articles";

export const metadata: Metadata = {
  title: `About ${site.name}`,
  description:
    "Learn how Cozy Halloween Books curates Halloween coloring book guides, category hubs, and book pages for cute, cozy, spooky, and seasonal coloring themes.",
  alternates: {
    canonical: `${site.url}/about`,
  },
  openGraph: {
    title: `About ${site.name}`,
    description:
      "Editorial background, curation standards, affiliate disclosure, and contact details for Cozy Halloween Books.",
    url: `${site.url}/about`,
    type: "website",
    images: [
      {
        url: `${site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: `About ${site.name}`,
        url: `${site.url}/about`,
        description: metadata.description,
        isPartOf: {
          "@type": "WebSite",
          name: site.name,
          url: site.url,
        },
        mainEntity: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: `${site.url}/og-image.jpg`,
          email: site.email,
          description: site.description,
        },
      },
      {
        "@type": "Person",
        name: site.author.name,
        jobTitle: site.author.title,
        description: site.author.description,
        url: `${site.url}/about`,
        worksFor: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <div className="mx-auto max-w-5xl">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm font-semibold text-zinc-600"
        >
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <span className="text-black">About</span>
        </nav>

        <header className="mt-10 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
            About
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-black md:text-6xl">
            About {site.name}
          </h1>
          <p className="mt-8 text-xl leading-9 text-zinc-700 md:text-2xl md:leading-10">
            {site.name} is a focused Halloween coloring book library for cute,
            cozy, spooky, bold easy, ghost, pumpkin, witch, animal, and seasonal
            coloring themes.
          </p>
        </header>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-black">
              Editorial Approach
            </h2>
            <p className="mt-4 leading-8 text-zinc-700">
              The site organizes existing Halloween coloring books into clear
              topical clusters so readers can compare themes, audiences, gift
              uses, and related guides without relying on copied reviews or
              manually invented ratings.
            </p>
            <p className="mt-4 leading-8 text-zinc-700">
              Each book page uses a real ASIN reference and connects to nearby
              book pages, category hubs, and guide pages. The goal is simple:
              make browsing easier for readers who already know the mood they
              want.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-black">
              Editor
            </h2>
            <p className="mt-4 text-xl font-bold text-black">
              {site.author.name}
            </p>
            <p className="mt-2 font-semibold text-orange-700">
              {site.author.title}
            </p>
            <p className="mt-4 leading-8 text-zinc-700">
              {site.author.description}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block rounded-2xl border border-zinc-300 px-5 py-3 font-semibold"
            >
              Contact
            </a>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-black">
            How Pages Are Structured
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p className="leading-8 text-zinc-700">
              Guide pages include an intro, featured books, related guides,
              related category links, Pinterest-friendly topic snippets, and
              FAQs.
            </p>
            <p className="leading-8 text-zinc-700">
              Category hubs include an intro, best-for notes, related guides,
              featured books, FAQs, and internal links to adjacent hub pages.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-black">
              Main Hubs
            </h2>
            <div className="mt-5 grid gap-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="rounded-xl border border-zinc-200 px-4 py-3 font-semibold text-zinc-800 hover:border-zinc-400"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-black">
              Useful Guides
            </h2>
            <div className="mt-5 grid gap-3">
              {articles.slice(0, 6).map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
                  className="rounded-xl border border-zinc-200 px-4 py-3 font-semibold text-zinc-800 hover:border-zinc-400"
                >
                  {article.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-black">
            Affiliate Disclosure
          </h2>
          <p className="mt-4 leading-8 text-zinc-700">
            Some pages link to Amazon product pages. As an Amazon Associate,
            Cozy Halloween Books may earn from qualifying purchases. Product
            availability, delivery details, reviews, and prices should be
            checked on Amazon before buying.
          </p>
          <Link
            href="/affiliate-disclosure"
            className="mt-5 inline-block rounded-2xl bg-black px-5 py-3 font-semibold text-white"
          >
            Read Affiliate Disclosure
          </Link>
        </section>
      </div>
    </main>
  );
}
