import { Search } from "lucide-react";

function Header({ query, onQueryChange }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            eQuran Explorer
          </h1>
          <p className="text-sm text-gray-600">Jelajahi daftar surah dan baca detailnya secara cepat.</p>
        </div>
        <div className="w-full sm:w-80">
          <label className="relative block">
            <span className="sr-only">Cari surah</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Cari surah (nama latin, arab, arti)"
              className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
