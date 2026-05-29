"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, products, type Product } from "@/app/data/products";

const guideLinks = [
  {
    href: "/halloween-coloring-books-for-kids",
    title: "Halloween Coloring Books for Kids",
    description: "Friendly spooky books for October activities and gifts.",
  },
  {
    href: "/ghost-coloring-books",
    title: "Ghost Coloring Books",
    description: "Cute ghost books with cozy Halloween themes.",
  },
  {
    href: "/pumpkin-coloring-books",
    title: "Pumpkin Coloring Books",
    description: "Pumpkin and fall coloring books for Halloween season.",
  },
  {
    href: "/witch-coloring-books",
    title: "Witch Coloring Books",
    description: "Cute witch books with playful spooky-season scenes.",
  },
  {
    href: "/cute-halloween-coloring-books",
    title: "Cute Halloween Coloring Books",
    description: "Cozy ghosts, pumpkins, animals, and friendly spooky art.",
  },
  {
    href: "/cozy-spooky-coloring-books",
    title: "Cozy Spooky Coloring Books",
    description: "Soft spooky coloring books for relaxing fall evenings.",
  },
  {
    href: "/spooky-animal-coloring-books",
    title: "Spooky Animal Coloring Books",
    description: "Cute spooky pets and animals for Halloween coloring.",
  },
  {
    href: "/halloween-activity-books",
    title: "Halloween Activity Books",
    description: "Coloring-focused activity ideas for kids and families.",
  },
];

const popularGuideLinks = guideLinks;

const secondaryGuideLinks = [
  {
    href: "/halloween-coloring-books-for-kids",
    title: "Halloween Coloring Books for Kids",
    description: "Friendly spooky books for October activities and gifts.",
  },
  {
    href: "/ghost-coloring-books",
    title: "Ghost Coloring Books",
    description: "Cute ghost books with cozy Halloween themes.",
  },
  {
    href: "/pumpkin-coloring-books",
    title: "Pumpkin Coloring Books",
    description: "Pumpkin and fall coloring books for Halloween season.",
  },
  {
    href: "/halloween-coloring-book-gift-ideas",
    title: "Halloween Coloring Book Gift Ideas",
    description: "Seasonal book picks for baskets, birthdays, and cozy gifts.",
  },
  {
    href: "/cozy-spooky-coloring-books",
    title: "Cozy Spooky Coloring Books",
    description: "Relaxing Halloween coloring books with soft spooky themes.",
  },
];

const themeLinks = [
  {
    href: "/ghost-coloring-books",
    title: "Ghost Coloring Books",
  },
  {
    href: "/pumpkin-coloring-books",
    title: "Pumpkin Coloring Books",
  },
  {
    href: "/witch-coloring-books",
    title: "Witch Coloring Books",
  },
  {
    href: "/cute-halloween-coloring-books",
    title: "Cute Halloween Coloring Books",
  },
  {
    href: "/kawaii-halloween-coloring-books",
    title: "Kawaii Halloween Coloring Books",
  },
  {
    href: "/cozy-spooky-coloring-books",
    title: "Cozy Spooky Coloring Books",
  },
  {
    href: "/cozy-ghost-coloring-books",
    title: "Cozy Ghost Coloring Books",
  },
  {
    href: "/bold-and-easy-halloween-coloring-books",
    title: "Bold and Easy Halloween Coloring Books",
  },
  {
    href: "/easy-pumpkin-coloring-pages",
    title: "Easy Pumpkin Coloring Pages",
  },
  {
    href: "/spooky-animal-coloring-books",
    title: "Spooky Animal Coloring Books",
  },
  {
    href: "/halloween-coloring-books-for-kids",
    title: "Halloween Coloring Books for Kids",
  },
  {
    href: "/best-halloween-coloring-books-for-adults",
    title: "Halloween Coloring Books for Adults",
  },
  {
    href: "/halloween-coloring-book-gift-ideas",
    title: "Halloween Coloring Book Gift Ideas",
  },
];

function includesAny(book: Product, keywords: string[]) {
  const title = book.title.toLowerCase();

  return keywords.some((keyword) => title.includes(keyword));
}

function BookCard({ book }: { book: Product }) {
  return (
    <div className="flex min-h-[520px] flex-col rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/books/${book.asin}`}>
        <Image
          src={`/covers/${book.asin}.jpg`}
          alt={book.title}
          width={800}
          height={800}
          loading="lazy"
          className="aspect-square w-full rounded-2xl object-cover"
        />
      </Link>

      <h2 className="mt-5 line-clamp-3 text-2xl font-black leading-tight">
        {book.title}
      </h2>

      <p className="mt-3 text-zinc-500">ASIN: {book.asin}</p>

      <div className="mt-auto flex gap-3 pt-6">
        <a
          href={`/go/${book.asin}`}
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
  );
}

function BookSection({
  title,
  books,
  description,
}: {
  title: string;
  books: Product[];
  description?: string;
}) {
  if (books.length === 0) return null;

  return (
    <section className="mt-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-black text-black">{title}</h2>
        {description ? (
          <p className="mt-3 text-base leading-8 text-zinc-600">
            {description}
          </p>
        ) : null}
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.asin} book={book} />
        ))}
      </div>
    </section>
  );
}

export function HomePageClient() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );
  const featuredBooks = filteredProducts.slice(0, search ? undefined : 8);
  const cuteCozyBooks = filteredProducts.filter((book) =>
    includesAny(book, [
      "cozy",
      "snuggles",
      "pals",
      "tiny",
      "little",
      "cute",
      "chill",
      "manga",
    ])
  );
  const ghostPumpkinWitchBooks = filteredProducts.filter((book) =>
    includesAny(book, ["spooky", "halloween", "witch"])
  );
  const spookyAnimalBooks = filteredProducts.filter((book) =>
    includesAny(book, ["koala", "hippo", "dachshund", "pets"])
  );
  const fallAutumnBooks = filteredProducts.filter((book) =>
    includesAny(book, ["fall", "season", "winter", "christmas"])
  );

  return (
    <div className="mx-auto max-w-7xl">
      <header className="max-w-4xl">
        <h1 className="text-6xl font-black leading-tight text-black">
          Halloween Coloring Books
        </h1>

        <p className="mt-6 text-2xl leading-10 text-zinc-600">
          Discover cute, spooky, cozy, and relaxing Halloween coloring books for
          kids, teens, and adults.
        </p>

        <p className="mt-5 max-w-3xl leading-8 text-zinc-600">
          Curated by{" "}
          <Link
            href="/about"
            className="font-semibold text-black underline decoration-orange-300 underline-offset-4 hover:decoration-orange-500"
          >
            Cozy Halloween Books
          </Link>{" "}
          with topic hubs for gift ideas, friendly spooky themes, and seasonal
          coloring discovery.
        </p>

        <input
          type="text"
          placeholder="Search spooky books..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="mt-10 w-full max-w-2xl rounded-2xl border border-zinc-300 bg-white px-6 py-5 text-lg outline-none"
        />

        <div className="mt-8 flex flex-wrap gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white"
            >
              {category.title.replace(" Coloring Books", "")}
            </Link>
          ))}
        </div>
      </header>

      <section className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-5xl font-black text-black">{products.length}</h2>
          <p className="mt-3 text-2xl text-zinc-500">Halloween Books</p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-5xl font-black text-black">Kids</h2>
          <p className="mt-3 text-2xl text-zinc-500">Fun Coloring Pages</p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-5xl font-black text-black">Teens</h2>
          <p className="mt-3 text-2xl text-zinc-500">Cozy & Spooky Art</p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-5xl font-black text-black">Adults</h2>
          <p className="mt-3 text-2xl text-zinc-500">Relaxing Coloring</p>
        </div>
      </section>

      <BookSection
        title="Featured Halloween Coloring Books"
        books={featuredBooks}
      />

      <div className="mt-10 max-w-5xl rounded-2xl border border-orange-100 bg-white/70 px-6 py-5 shadow-sm">
        <p className="text-base leading-8 text-zinc-600">
          Discover cozy Halloween coloring books for kids, teens, and adults
          featuring cute ghosts, pumpkins, witches, spooky animals, bold & easy
          coloring pages, relaxing autumn scenes, and cozy spooky artwork
          perfect for Halloween season, gifts, fall activities, and relaxing
          creative time.
        </p>
      </div>

      <section className="mt-12 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-black">
          Popular Halloween Coloring Guides
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popularGuideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-2xl border border-zinc-200 px-5 py-4 transition hover:border-zinc-400"
            >
              <h3 className="text-lg font-bold text-black">{guide.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-black">
          Explore Halloween Coloring Book Themes
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {themeLinks.map((theme) => (
            <Link
              key={theme.href}
              href={theme.href}
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-800 hover:border-zinc-400"
            >
              {theme.title}
            </Link>
          ))}
        </div>
      </section>

      <BookSection
        title="Cute & Cozy Halloween Picks"
        books={cuteCozyBooks}
        description="Soft spooky books with cozy themes, cute characters, and friendly Halloween artwork."
      />

      <BookSection
        title="Ghost, Pumpkin & Witch Coloring Books"
        books={ghostPumpkinWitchBooks}
        description="Halloween books with classic spooky-season themes, playful scenes, and seasonal coloring appeal."
      />

      <BookSection
        title="Spooky Animal Coloring Books"
        books={spookyAnimalBooks}
        description="Animal-themed Halloween coloring books featuring pets, cozy creatures, and cute spooky characters."
      />

      <BookSection
        title="Fall & Autumn Coloring Books"
        books={fallAutumnBooks}
        description="Seasonal coloring books with fall, winter, cozy, and autumn-adjacent themes."
      />

      <section className="mt-20">
        <h2 className="text-4xl font-black text-black">
          Halloween Coloring Book Guides
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {secondaryGuideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-black">{guide.title}</h3>
              <p className="mt-3 leading-7 text-zinc-700">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
