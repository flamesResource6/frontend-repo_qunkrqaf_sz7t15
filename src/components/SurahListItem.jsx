import { BookOpen, Play } from "lucide-react";

function SurahListItem({ surah, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-5 hover:shadow-md transition shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-semibold">
          {surah.nomor}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
              {surah.namaLatin}
            </h3>
            <span className="text-xl sm:text-2xl font-arabic">{surah.nama}</span>
          </div>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {surah.arti} • {surah.jumlahAyat} ayat • {surah.tempatTurun}
          </p>
          <div className="mt-3 flex items-center gap-3 text-emerald-600 text-xs">
            <span className="inline-flex items-center gap-1"><BookOpen size={14}/> Baca</span>
            <span className="inline-flex items-center gap-1"><Play size={14}/> Detail</span>
          </div>
        </div>
      </div>
    </button>
  );
}

export default SurahListItem;
