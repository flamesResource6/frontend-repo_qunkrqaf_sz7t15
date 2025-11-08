import { X } from "lucide-react";

function SurahDetail({ data, onClose }) {
  if (!data) return null;
  const info = data.data || data; // handle shape
  return (
    <div className="fixed inset-0 z-30 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full sm:max-w-3xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between border-b px-4 sm:px-6 py-3">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">{info?.namaLatin} <span className="text-gray-500 text-sm">({info?.nama})</span></h2>
            <p className="text-xs text-gray-500">{info?.arti} • {info?.jumlahAyat} ayat • {info?.tempatTurun}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
            <X />
          </button>
        </div>
        <div className="px-4 sm:px-6 py-4 overflow-y-auto space-y-4 max-h-[70vh]">
          {info?.ayat?.map((a) => (
            <div key={a.nomorAyat} className="border-b pb-4 last:border-none">
              <div className="flex items-start justify-between gap-4">
                <div className="text-sm text-gray-500 mt-1">{a.nomorAyat}</div>
                <div className="flex-1">
                  <div className="text-right text-2xl leading-loose font-arabic">{a.teksArab}</div>
                  <div className="mt-2 text-gray-800">{a.teksIndonesia}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SurahDetail;
