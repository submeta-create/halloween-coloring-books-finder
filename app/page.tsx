import Link from "next/link";

export const metadata = {
  title: "Halloween Coloring Books Finder",
  description:
    "Find cute, spooky, and fun Halloween coloring books on Amazon.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-orange-50 text-zinc-900">
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Halloween Coloring Books Finder
        </h1>

        <p className="mt-6 text-lg text-zinc-700">
          Discover cute, spooky, cozy, and fun Halloween coloring books for
          kids, teens, and adults.
        </p>

        <Link
          href="/halloween-coloring-books"
          className="mt-8 inline-block rounded-2xl bg-zinc-900 px-6 py-3 font-semibold text-white"
        >
          Browse Halloween Books
        </Link>
      </section>
    </main>
  );
}