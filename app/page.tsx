<div className="mt-auto pt-6 flex gap-3">
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