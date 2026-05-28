import type { ArticleFaq } from "@/app/data/articles";

type FAQProps = {
  items: ArticleFaq[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <section className="mt-16">
      <h2 className="text-4xl font-black text-black">FAQ</h2>

      <div className="mt-8 grid gap-5">
        {items.map((item) => (
          <article
            key={item.question}
            className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-bold text-black">{item.question}</h3>
            <p className="mt-3 leading-7 text-zinc-700">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
