"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function GoPage() {
  const params = useParams<{ asin: string }>();
  const asin = params.asin;

  useEffect(() => {
    if (asin) {
      window.location.href = `https://www.amazon.com/dp/${asin}`;
    }
  }, [asin]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5efe6]">
      <p className="text-xl font-bold text-black">Opening Amazon...</p>
    </main>
  );
}