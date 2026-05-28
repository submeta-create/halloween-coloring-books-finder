import Link from "next/link";
import type { ArticleLink } from "@/app/data/articles";

type RelatedLinksProps = {
  links: ArticleLink[];
};

export function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <section className="mt-16">
      <h2 className="text-4xl font-black text-black">Related Themes</h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold text-black">{link.label}</h3>
            <p className="mt-3 leading-7 text-zinc-700">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
