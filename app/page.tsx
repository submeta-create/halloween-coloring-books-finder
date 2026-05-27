"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "./data/products";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-16">
      <header className="mx-auto mb-14 max-w-7xl">
        <h1 className="mb-6 text-5xl font-bold text-black">
          Halloween Coloring Books
        </h1>

        <p className="max-w-3xl text-lg text-gray-600">
          Discover cute, spooky, cozy, and relaxing Halloween coloring books
          for kids, teens, and adults.
        </p>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search spooky books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl rounded-2xl border border-gray-300 bg-white px-6 py-4 text-lg outline-none transition focus:border-black"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-full bg-black px-5 py-2 text-white">
            Cute Halloween
          </button>

          <button className="rounded-full bg-black px-5 py-2 text-white">
            Cozy Coloring
          </button>

          <button className="rounded-full bg-black px-5 py-2 text-white">
            Ghosts & Pumpkins
          </button>

          <button className="rounded-full bg-black px-5 py-2 text-white">
            Bold & Easy
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-5xl font-bold">
              {products.length}
            </div>

            <div className="mt-2 text-gray-500">
              Halloween Books
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-5xl font-bold">
              Kids
            </div>

            <div className="mt-2 text-gray-500">
              Fun Coloring Pages
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-5xl font-bold">
              Teens
            </div>

            <div className="mt-2 text-gray-500">
              Cozy & Spooky Art
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-5xl font-bold">
              Adults
            </div>

            <div className="mt-2 text-gray-500">
              Relaxing Coloring
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.asin}
            className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative mb-5 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={`/covers/${product.asin}.jpg`}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-black">
              {product.title}
            </h2>

            <p className="mb-6 text-gray-500">
              ASIN: {product.asin}
            </p>

            <div className="flex gap-3">
              <a
                href={`https://www.amazon.com/dp/${product.asin}`}
                target="_blank"
                className="rounded-2xl bg-black px-5 py-3 font-semibold text-white"
              >
                Amazon
              </a>

              <Link
                href={`/books/${product.asin}`}
                className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold"
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