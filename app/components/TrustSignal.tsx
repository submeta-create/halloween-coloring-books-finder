const trustSignals = [
  "Amazon product page available",
  "ASIN listed for transparency",
  "Editorially curated Halloween coloring book pick",
  "Check current reviews and availability on Amazon",
];

export function TrustSignal() {
  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">
        Availability Note
      </h2>

      <ul className="mt-4 grid gap-3 text-gray-700">
        {trustSignals.map((signal) => (
          <li key={signal} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-400" />
            <span className="leading-6">{signal}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
