export function NarratorBox({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-[#f6f1e8] p-4">
      <p className="text-sm italic leading-relaxed text-[#6b5a48]">{text}</p>
    </div>
  );
}
