import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import SurahList from "./components/SurahList";
import SurahDetail from "./components/SurahDetail";

function App() {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://equran.id/apidev/v2/surat");
        if (!res.ok) throw new Error("Gagal memuat data surah");
        const data = await res.json();
        const list = data.data || data; // API returns {data: [...]}
        setSurahs(list);
      } catch (e) {
        setError(e.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return surahs;
    return surahs.filter((s) => {
      return (
        String(s.nomor).includes(q) ||
        (s.namaLatin || "").toLowerCase().includes(q) ||
        (s.nama || "").toLowerCase().includes(q) ||
        (s.arti || "").toLowerCase().includes(q) ||
        (s.tempatTurun || "").toLowerCase().includes(q)
      );
    });
  }, [query, surahs]);

  const openDetail = async (nomor) => {
    try {
      setLoadingDetail(true);
      const res = await fetch(`https://equran.id/apidev/v2/surat/${nomor}`);
      if (!res.ok) throw new Error("Gagal memuat detail surah");
      const data = await res.json();
      setDetail(data);
    } catch (e) {
      alert(e.message || "Gagal memuat detail");
    } finally {
      setLoadingDetail(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900">
      <Header query={query} onQueryChange={setQuery} />

      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="h-10 w-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {!loading && error && (
          <div className="text-center text-red-600 py-10">{error}</div>
        )}
        {!loading && !error && (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Menampilkan {filtered.length} dari {surahs.length} surah
            </div>
            <SurahList surahs={filtered} onSelect={openDetail} />
          </>
        )}
      </main>

      {detail && (
        <SurahDetail data={detail} onClose={() => setDetail(null)} />
      )}

      {loadingDetail && (
        <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center">
          <div className="h-10 w-10 border-4 border-white/70 border-t-transparent rounded-full animate-spin shadow" />
        </div>
      )}

      <footer className="mt-10 py-8 text-center text-xs text-gray-500">
        Sumber data: equran.id • Dibuat responsif untuk semua perangkat
      </footer>
    </div>
  );
}

export default App;
