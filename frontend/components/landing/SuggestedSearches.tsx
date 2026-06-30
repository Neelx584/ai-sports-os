type SuggestedSearchesProps = {
  setQuery: (value: string) => void;
};

const suggestions = [
  "Compare Lionel Messi and Cristiano Ronaldo",
  "Analyse Manchester City's recent form",
  "Predict the next Formula 1 race winner",
  "Who should I captain in Fantasy Premier League?",
];

export default function SuggestedSearches({
  setQuery,
}: SuggestedSearchesProps) {
  return (
    <section className="mt-10 w-full max-w-4xl">
      <h2 className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Trending Searches
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => setQuery(item)}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-5 text-left text-sm text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800 hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}