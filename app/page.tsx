"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/app/data/products";

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
    href: "/halloween-coloring-book-gift-ideas",
    title: "Halloween Coloring Book Gift Ideas",
    description: "Seasonal book picks for baskets, birthdays, and cozy gifts.",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-4xl">
          <h1 className="text-6xl font-black leading-tight text-black">
            Halloween Coloring Books
          </h1>

          <p className="mt-6 text-2xl leading-10 text-zinc-600">
            Discover cute, spooky, cozy, and relaxing Halloween coloring books
            for kids, teens, and adults.
          </p>

          <input
            type="text"
            placeholder="Search spooky books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
            <h2 className="text-5xl font-black text-black">
              {products.length}
            </h2>
            <p className="mt-3 text-2xl text-zinc-500">
              Halloween Books
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-5xl font-black text-black">Kids</h2>
            <p className="mt-3 text-2xl text-zinc-500">
              Fun Coloring Pages
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-5xl font-black text-black">Teens</h2>
            <p className="mt-3 text-2xl text-zinc-500">
              Cozy & Spooky Art
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-5xl font-black text-black">Adults</h2>
            <p className="mt-3 text-2xl text-zinc-500">
              Relaxing Coloring
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-4xl font-black text-black">
            Featured Halloween Coloring Books
          </h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((book) => (
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
                    loading="lazy"
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
            ))}
          </div>

          <div className="mt-10 max-w-5xl rounded-2xl border border-orange-100 bg-white/70 px-6 py-5 shadow-sm">
            <p className="text-base leading-8 text-zinc-600">
              Discover cozy Halloween coloring books for kids, teens, and
              adults featuring cute ghosts, pumpkins, witches, spooky animals,
              bold & easy coloring pages, relaxing autumn scenes, and cozy
              spooky artwork perfect for Halloween season, gifts, fall
              activities, and relaxing creative time.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-4xl font-black text-black">
            Halloween Coloring Book Guides
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {guideLinks.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-black">
                  {guide.title}
                </h3>
                <p className="mt-3 leading-7 text-zinc-700">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
