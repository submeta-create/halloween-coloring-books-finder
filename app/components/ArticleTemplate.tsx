import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";
import { PinThisIdea } from "@/app/components/PinThisIdea";
import { RelatedLinks } from "@/app/components/RelatedLinks";
import { categories, type Product } from "@/app/data/products";
import { getRelatedArticles, type SeoArticle } from "@/app/data/articles";

type ArticleTemplateProps = {
  article: SeoArticle;
  featuredBooks: Product[];
};

const introLinkRules = [
  {
    phrase: "cozy autumn coloring styles",
    href: "/cozy-autumn-coloring-styles",
  },
  {
    phrase: "Halloween coloring books for adults",
    href: "/best-halloween-coloring-books-for-adults",
  },
  {
    phrase: "Halloween coloring books for teens",
    href: "/halloween-coloring-books-for-teens",
  },
  {
    phrase: "bold easy",
    href: "/bold-and-easy-halloween-coloring-books",
  },
  {
    phrase: "cute Halloween",
    href: "/cute-halloween-coloring-books",
  },
  {
    phrase: "cozy spooky",
    href: "/cozy-spooky-coloring-books",
  },
  {
    phrase: "pumpkin",
    href: "/pumpkin-coloring-books",
  },
  {
    phrase: "ghost",
    href: "/cute-ghost-coloring-books",
  },
  {
    phrase: "gift",
    href: "/halloween-coloring-book-gift-ideas",
  },
  {
    phrase: "adults",
    href: "/best-halloween-coloring-books-for-adults",
  },
  {
    phrase: "teens",
    href: "/halloween-coloring-books-for-teens",
  },
];

function renderLinkedIntro(article: SeoArticle) {
  const currentHref = `/${article.slug}`;
  const activeRules = introLinkRules
    .filter((rule) => rule.href !== currentHref)
    .sort((a, b) => b.phrase.length - a.phrase.length);
  const usedHrefs = new Set<string>();
  const parts: React.ReactNode[] = [];
  let remaining = article.intro;
  let key = 0;

  while (remaining && usedHrefs.size < 3) {
    const lowerRemaining = remaining.toLowerCase();
    const match = activeRules
      .filter((rule) => !usedHrefs.has(rule.href))
      .map((rule) => ({
        ...rule,
        index: lowerRemaining.indexOf(rule.phrase.toLowerCase()),
      }))
      .filter((rule) => rule.index >= 0)
      .sort((a, b) => a.index - b.index)[0];

    if (!match) break;

    const before = remaining.slice(0, match.index);
    const linkedText = remaining.slice(
      match.index,
      match.index + match.phrase.length
    );

    if (before) {
      parts.push(before);
    }

    parts.push(
      <Link
        key={`${match.href}-${key}`}
        href={match.href}
        className="font-semibold text-black underline decoration-orange-300 underline-offset-4 hover:decoration-orange-500"
      >
        {linkedText}
      </Link>
    );

    usedHrefs.add(match.href);
    remaining = remaining.slice(match.index + match.phrase.length);
    key += 1;
  }

  if (remaining) {
    parts.push(remaining);
  }

  return parts;
}

function getSuggestedCategoryLinks(article: SeoArticle) {
  const explicitCategoryLinks = article.relatedThemes.filter((link) =>
    link.href.startsWith("/categories/")
  );
  const explicitHrefs = new Set(explicitCategoryLinks.map((link) => link.href));
  const articleText =
    `${article.title} ${article.description} ${article.intro}`.toLowerCase();
  const scoredCategories = categories
    .map((category) => {
      const score = category.keywords.filter((keyword) =>
        articleText.includes(keyword.toLowerCase())
      ).length;

      return {
        label: category.title,
        href: `/categories/${category.slug}`,
        description: category.description,
        score,
      };
    })
    .filter((category) => !explicitHrefs.has(category.href))
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));

  return [...explicitCategoryLinks, ...scoredCategories].slice(0, 3);
}

export function ArticleTemplate({
  article,
  featuredBooks,
}: ArticleTemplateProps) {
  const relatedArticles = getRelatedArticles(article);
  const categoryLinks = getSuggestedCategoryLinks(article);
  const relatedBookLinks = featuredBooks.slice(0, 3);
  const peopleAlsoBrowse = [...relatedArticles.slice(0, 2), ...categoryLinks].slice(
    0,
    5
  );

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm font-semibold text-zinc-600"
        >
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <span className="text-black">{article.title}</span>
        </nav>

        <article className="mt-10">
          <header className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              Halloween Coloring Book Guide
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight text-black md:text-6xl">
              {article.title}
            </h1>

            <p className="mt-8 text-xl leading-9 text-zinc-700 md:text-2xl md:leading-10">
              {renderLinkedIntro(article)}
            </p>
          </header>

          <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black text-black">Related Guides</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${related.slug}`}
                  className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-800 hover:border-zinc-400"
                >
                  {related.title}
                </Link>
              ))}
            </div>
          </section>

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

          <section className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-3xl font-black text-black">
                More Book Picks
              </h2>
              <p className="mt-3 leading-7 text-zinc-700">
                Continue with related book pages that include ASIN references,
                editorial notes, and Amazon product links.
              </p>

              <div className="mt-5 grid gap-3">
                {relatedBookLinks.map((book) => (
                  <Link
                    key={book.asin}
                    href={`/books/${book.asin}`}
                    className="rounded-xl border border-zinc-200 px-4 py-3 font-semibold text-zinc-800 hover:border-zinc-400"
                  >
                    {book.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-3xl font-black text-black">
                Browse Categories
              </h2>
              <p className="mt-3 leading-7 text-zinc-700">
                Explore the main category pages for broader Halloween coloring
                book collections.
              </p>

              <div className="mt-5 grid gap-3">
                {categoryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl border border-zinc-200 px-4 py-3 font-semibold text-zinc-800 hover:border-zinc-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-black">
              People also browse
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {peopleAlsoBrowse.map((item) => (
                <Link
                  key={"slug" in item ? item.slug : item.href}
                  href={"slug" in item ? `/${item.slug}` : item.href}
                  className="rounded-xl border border-zinc-200 px-4 py-3 font-semibold text-zinc-800 hover:border-zinc-400"
                >
                  {"slug" in item ? item.title : item.label}
                </Link>
              ))}
            </div>
          </section>

          <PinThisIdea snippet={article.pinterest} />
          <RelatedLinks links={article.relatedThemes} />
          <FAQ items={article.faqs} />

          <section className="mt-16 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-black text-black">
              Keep Browsing Halloween Guides
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${related.slug}`}
                  className="rounded-xl border border-zinc-200 px-4 py-3 font-semibold text-zinc-800 hover:border-zinc-400"
                >
                  {related.title}
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
