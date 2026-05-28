import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint | Cozy Halloween Books",
  description: "Imprint information for Cozy Halloween Books.",
};

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 font-semibold"
        >
          Back Home
        </Link>

        <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-black text-black">Imprint</h1>

          <dl className="mt-8 grid gap-5 text-zinc-700">
            <div>
              <dt className="font-bold text-black">Business name</dt>
              <dd className="mt-1">[Business name]</dd>
            </div>
            <div>
              <dt className="font-bold text-black">Responsible person</dt>
              <dd className="mt-1">[Responsible person]</dd>
            </div>
            <div>
              <dt className="font-bold text-black">Address</dt>
              <dd className="mt-1">[Address]</dd>
            </div>
            <div>
              <dt className="font-bold text-black">Email</dt>
              <dd className="mt-1">[Email]</dd>
            </div>
            <div>
              <dt className="font-bold text-black">Country</dt>
              <dd className="mt-1">[Country]</dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}
