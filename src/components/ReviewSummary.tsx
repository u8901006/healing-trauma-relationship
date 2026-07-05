import Link from "next/link";
import type { DialogueEnding, Mode } from "@/lib/types";

export function ReviewSummary({
  ending,
  score,
  breakdown,
  mode,
  patternName,
  patternColor,
}: {
  ending: DialogueEnding;
  score: number;
  breakdown: Record<string, number>;
  mode: Mode;
  patternName: string;
  patternColor: string;
}) {
  const scoreLabel =
    score >= 75
      ? "趨近與轉化"
      : score >= 45
        ? "漸進開放"
        : "仍在防衛中";

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-6">
      <div className="text-center">
        <p className="text-xs text-[#8c4f2b]">{patternName} · {mode === "self" ? "主角視角" : "治療師視角"}</p>
        <h1 className="mt-1 text-2xl font-bold text-[#3d2b1f]">練習回顧</h1>
      </div>

      <div
        className="rounded-xl border-l-4 bg-[#fffaf2] p-6 shadow-sm"
        style={{ borderLeftColor: patternColor }}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-bold text-[#8c4f2b]">練習結果</p>
          <span className="rounded-full bg-[#f6f1e8] px-3 py-1 text-xs font-semibold text-[#8c4f2b]">
            {scoreLabel}
          </span>
        </div>

        <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-[#e8dcc8]">
          <div
            className="h-2 rounded-full transition-all duration-700"
            style={{ width: `${score}%`, backgroundColor: patternColor }}
          />
        </div>
        <p className="mb-4 text-center text-2xl font-bold text-[#3d2b1f]">
          {score}<span className="text-sm font-normal text-[#b8a88f]">／100</span>
        </p>

        <div className="space-y-4">
          <div>
            <p className="mb-1 text-xs font-bold text-[#8c4f2b]">總結</p>
            <p className="text-sm leading-relaxed text-[#3d2b1f]">{ending.summary}</p>
          </div>

          <div>
            <p className="mb-1 text-xs font-bold text-[#8c4f2b]">你使用的策略</p>
            <div className="flex flex-wrap gap-2">
              {ending.strategiesUsed.map((s, i) => (
                <span
                  key={i}
                  className="rounded-md border border-[#e8dcc8] bg-[#f6f1e8] px-2 py-1 text-xs text-[#6b5a48]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-1 text-xs font-bold text-[#8c4f2b]">下一步建議</p>
            <p className="text-sm leading-relaxed text-[#3d2b1f]">{ending.suggestion}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/practice"
          className="rounded-lg bg-[#8c4f2b] px-6 py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          選擇其他練習
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-[#e8dcc8] bg-[#fffaf2] px-6 py-2.5 text-center text-sm font-medium text-[#6b5a48] transition-colors hover:bg-[#f6f1e8]"
        >
          返回首頁
        </Link>
      </div>
    </div>
  );
}
