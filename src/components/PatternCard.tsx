import Link from "next/link";
import type { AttachmentPattern } from "@/lib/types";

export function PatternCard({
  pattern,
  mode,
}: {
  pattern: AttachmentPattern;
  mode: "self" | "therapist";
}) {
  const title =
    mode === "self" ? pattern.selfScenarioTitle : pattern.therapistScenarioTitle;
  const desc =
    mode === "self" ? pattern.selfScenarioDesc : pattern.therapistScenarioDesc;
  const href = `/practice/${pattern.id}-${mode}`;

  return (
    <Link
      href={href}
      className="group block rounded-xl border border-[#e8dcc8] bg-[#fffaf2] p-5 transition-all hover:border-[#8c4f2b] hover:shadow-md"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="text-2xl">{pattern.emoji}</span>
        <div>
          <h3 className="text-base font-bold text-[#3d2b1f]">{title}</h3>
          <p className="text-xs text-[#8c4f2b]">{pattern.name}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-[#6b5a48]">{desc}</p>
      <p className="mt-3 text-xs font-medium text-[#8c4f2b] group-hover:underline">
        開始練習 →
      </p>
    </Link>
  );
}
