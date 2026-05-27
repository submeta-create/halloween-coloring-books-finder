"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function GoPage() {
  const params = useParams<{ asin: string }>();
  const asin = params.asin;

  useEffect(() => {
    if (!asin) return;

    const timer = setTimeout(() => {
      window.location.href = `https://www.amazon.com/dp/${asin}`;
    }, 900);

    return () => clearTimeout(timer);
  }, [asin]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5efe6] px-6">
      <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
        <p className="text-xl font-bold text-black">Opening Amazon...</p>
        <p className="mt-3 text-zinc-500">One moment please.</p>
      </div>
    </main>
  );
}