import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";
import { RelatedLinks } from "@/app/components/RelatedLinks";
import type { Product } from "@/app/data/products";
import type { SeoArticle } from "@/app/data/articles";

type ArticleTemplateProps = {
  article: SeoArticle;
  featuredBooks: Product[];
};

export function ArticleTemplate({
  article,
  featuredBooks,
}: ArticleTemplateProps) {
  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 font-semibold"
        >
          Back Home
        </Link>

        <article className="mt-10">
          <header className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              Halloween Coloring Book Guide
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight text-black md:text-6xl">
              {article.title}
            </h1>

            <p className="mt-8 text-xl leading-9 text-zinc-700 md:text-2xl md:leading-10">
              {article.intro}
            </p>
          </header>

          <section className="mt-12 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-black">Best For</h2>

            <ul className="mt-5 grid gap-4 text-zinc-700 md:grid-cols-3">
              {article.bestFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-black text-black">
                  Featured Books
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-zinc-700">
                  These internal picks link to individual book pages with ASIN
                  references, editorial context, Amazon links, and related book
                  suggestions.
                </p>
              </div>

              <Link
                href="/categories/cute-halloween"
                className="w-fit rounded-2xl border border-zinc-300 bg-white px-5 py-3 font-semibold"
              >
                Browse Categories
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

                  <div className="mt-auto pt-6">
                    <Link
                      href={`/books/${book.asin}`}
                      className="inline-block rounded-2xl bg-black px-5 py-3 font-semibold text-white"
                    >
                      View Book
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <RelatedLinks links={article.relatedThemes} />
          <FAQ items={article.faqs} />
        </article>
      </div>
    </main>
  );
}
