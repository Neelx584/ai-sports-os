"use client";

type SearchBarProps = {
  query: string;
  setQuery: (value: string) => void;
};

export default function SearchBar({ query, setQuery }: SearchBarProps) {

  async function handleSubmit() {
    console.log("button clicked");
    if (!query.trim()) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Error connecting to backend:", error);
    }
  }

  return (
    <div className="mt-12 w-full max-w-4xl">
      <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-5 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.08)] transition focus-within:border-blue-500">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit();
            }
          }}
          placeholder="Ask anything about sport..."
          className="w-full bg-transparent text-lg text-white outline-none placeholder:text-slate-500"
        />

        <button
          onClick={handleSubmit}
          className="ml-5 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
}