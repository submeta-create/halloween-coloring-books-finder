import type { PinterestSnippet } from "@/app/data/articles";

type PinThisIdeaProps = {
  snippet: PinterestSnippet;
};

export function PinThisIdea({ snippet }: PinThisIdeaProps) {
  return (
    <section className="mt-16 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
      <h2 className="text-4xl font-black text-black">Pin this idea</h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-black">Pinterest Titles</h3>
          <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-zinc-700">
            {snippet.titles.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-bold text-black">
            Pinterest Descriptions
          </h3>
          <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-zinc-700">
            {snippet.descriptions.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-bold text-black">
            Suggested Pin Keywords
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {snippet.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-zinc-700"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
