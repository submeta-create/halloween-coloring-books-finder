"use client";

import { useEffect } from "react";

export default function GoPage({
  params,
}: {
  params: { asin: string };
}) {
  useEffect(() => {
    window.location.href = `https://www.amazon.com/dp/${params.asin}`;
  }, [params.asin]);

  return (
    <main className="min-h-screen bg-[#f5efe6] flex items-center justify-center">
      <p className="text-xl font-bold">Opening Amazon...</p>
    </main>
  );
}