const trustItems = [
  "Curated by Ella Tarling",
  "Selected for cozy Halloween coloring fans",
  "Includes ASIN reference for transparency",
  "Links go to Amazon",
];

export function TrustBox() {
  return (
    <section className="mt-8 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">
        Editorial Note
      </h2>

      <ul className="mt-4 grid gap-3 text-gray-700 lg:grid-cols-2">
        {trustItems.map((item) => (
          <li
            key={item}
            className="flex min-h-10 items-center gap-3 rounded-xl bg-orange-50/60 px-4 py-3"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
            <span className="leading-6">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
