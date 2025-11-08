import SurahListItem from "./SurahListItem";

function SurahList({ surahs, onSelect }) {
  if (!surahs || surahs.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">Tidak ada surah ditemukan.</div>
    );
  }
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {surahs.map((s) => (
        <SurahListItem key={s.nomor} surah={s} onClick={() => onSelect(s.nomor)} />
      ))}
    </div>
  );
}

export default SurahList;
