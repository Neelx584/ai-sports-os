"use client";

import { useState } from "react";

import SiteHeader from "@/components/layout/SiteHeader";
import LandingHero from "@/components/landing/LandingHero";
import SearchBar from "@/components/landing/SearchBar";
import SuggestedSearches from "@/components/landing/SuggestedSearches";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <SiteHeader />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-44">
        <LandingHero />

        <SearchBar
          query={query}
          setQuery={setQuery}
        />

        <SuggestedSearches setQuery={setQuery} />
      </div>
    </main>
  );
}