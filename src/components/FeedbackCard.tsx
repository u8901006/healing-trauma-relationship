export function FeedbackCard({
  pros,
  cons,
}: {
  pros: string[];
  cons: string[];
}) {
  return (
    <div className="rounded-xl border border-[#e8dcc8] bg-[#fffaf2] p-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-bold text-[#5a7a3a]">
            ✓ 這個選擇的優點
          </p>
          <ul className="space-y-1">
            {pros.map((p, i) => (
              <li key={i} className="text-xs leading-relaxed text-[#5a6b48]">
                · {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold text-[#b87333]">
            ⚠ 這個選擇的代價
          </p>
          <ul className="space-y-1">
            {cons.map((c, i) => (
              <li key={i} className="text-xs leading-relaxed text-[#8c6b48]">
                · {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
