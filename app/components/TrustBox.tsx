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

      <ul className="mt-4 grid gap-3 text-gray-700 sm:grid-cols-2">
        {trustItems.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
