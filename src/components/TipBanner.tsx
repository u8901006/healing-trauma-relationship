import type { Mode } from "@/lib/types";

export function TipBanner({
  general,
  aedp,
  gridRef,
  mode,
}: {
  general: string;
  aedp: string;
  gridRef?: string;
  mode: Mode;
}) {
  return (
    <div className="rounded-xl border border-[#e8dcc8] bg-[#f6f1e8] p-4">
      <p className="mb-2 text-xs font-bold text-[#8c4f2b]">💡 AEDP 視角</p>
      <p className="mb-3 text-xs leading-relaxed text-[#6b5a48]">{general}</p>

      <div className="rounded-lg bg-[#fffaf2] p-3">
        <p className="mb-1 text-xs font-bold text-[#8c4f2b]">AEDP 鏡頭</p>
        <p className="text-xs leading-relaxed text-[#6b5a48]">{aedp}</p>
      </div>

      {mode === "therapist" && gridRef && (
        <p className="mt-2 text-[10px] italic text-[#b8a88f]">📎 {gridRef}</p>
      )}
    </div>
  );
}
