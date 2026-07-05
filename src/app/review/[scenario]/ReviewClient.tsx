"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import type { DialogueEnding, Mode } from "@/lib/types";
import { getPattern } from "@/data/patterns";
import { ReviewSummary } from "@/components/ReviewSummary";
import { Footer } from "@/components/Footer";

interface ReviewData {
  ending: DialogueEnding;
  score: number;
  breakdown: Record<string, number>;
  mode: Mode;
}

export default function ReviewClient({ scenario }: { scenario: string }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-sm text-[#b8a88f]">載入中…</p>
        </div>
      }
    >
      <ReviewContent scenario={scenario} />
    </Suspense>
  );
}

function ReviewContent({ scenario }: { scenario: string }) {
  const searchParams = useSearchParams();
  const [data, setData] = useState<ReviewData | null>(null);

  const mode: Mode = (searchParams.get("mode") as Mode) ?? "self";
  const patternId = scenario.split("-")[0] as "avoidant" | "ambivalent" | "disorganized";
  const pattern = getPattern(patternId);

  useEffect(() => {
    const stored = sessionStorage.getItem(`review-${scenario}`);
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, [scenario]);

  if (!data) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-[#6b5a48]">找不到練習結果</p>
          <a href="/practice" className="mt-2 inline-block text-xs text-[#8c4f2b] hover:underline">
            返回練習清單
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ReviewSummary
        ending={data.ending}
        score={data.score}
        breakdown={data.breakdown}
        mode={data.mode}
        patternName={pattern.name}
        patternColor={pattern.color}
      />
      <Footer />
    </div>
  );
}
