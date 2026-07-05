export function DialogueBox({
  text,
  speakerName,
  color,
}: {
  text: string;
  speakerName: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border-l-4 bg-[#fffaf2] p-4 shadow-sm" style={{ borderLeftColor: color }}>
      <p className="mb-1 text-xs font-bold" style={{ color }}>
        {speakerName}
      </p>
      <p className="text-sm leading-relaxed text-[#3d2b1f]">{text}</p>
    </div>
  );
}
