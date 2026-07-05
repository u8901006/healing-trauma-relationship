export function ChoiceButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg border border-[#e8dcc8] bg-[#fffaf2] px-4 py-3 text-left text-sm leading-relaxed text-[#3d2b1f] transition-all hover:border-[#8c4f2b] hover:bg-[#f6f1e8] active:scale-[0.99]"
    >
      {text}
    </button>
  );
}
