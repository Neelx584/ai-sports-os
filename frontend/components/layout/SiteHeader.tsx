export default function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">SportOS</h1>

        <nav className="flex gap-8 text-sm text-slate-300">
          <button className="transition-colors hover:text-white">Home</button>
          <button className="transition-colors hover:text-white">Explore</button>
          <button className="transition-colors hover:text-white">About</button>
        </nav>
      </div>
    </header>
  );
}