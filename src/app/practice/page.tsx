"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { patterns } from "@/data/patterns";
import { PatternCard } from "@/components/PatternCard";
import { Footer } from "@/components/Footer";
import type { Mode } from "@/lib/types";

export default function PracticeListPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-sm text-[#b8a88f]">載入中…</p>
        </div>
      }
    >
      <PracticeContent />
    </Suspense>
  );
}

function PracticeContent() {
  const searchParams = useSearchParams();
  const mode: Mode = searchParams.get("mode") === "therapist" ? "therapist" : "self";

  return (
    <div className="min-h-screen">
      <header className="border-b border-[#e8dcc8] bg-[#fffaf2]">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <Link href="/" className="text-xs text-[#8c4f2b] hover:underline">
            ← 返回首頁
          </Link>
          <h1 className="mt-2 text-xl font-bold text-[#3d2b1f]">選擇練習</h1>
          <p className="mt-1 text-xs text-[#6b5a48]">
            {mode === "self" ? "主角視角 · 你在關係情境中做選擇" : "治療師視角 · 你面對個案做臨床選擇"}
          </p>
          <div className="mt-3 flex gap-2">
            <Link
              href="/practice?mode=self"
              className={`rounded-md px-3 py-1 text-xs ${mode === "self" ? "bg-[#8c4f2b] text-white" : "text-[#6b5a48]"}`}
            >
              主角視角
            </Link>
            <Link
              href="/practice?mode=therapist"
              className={`rounded-md px-3 py-1 text-xs ${mode === "therapist" ? "bg-[#8c4f2b] text-white" : "text-[#6b5a48]"}`}
            >
              治療師視角
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6">
        <div className="grid gap-4">
          {patterns.map((p) => (
            <PatternCard key={p.id} pattern={p} mode={mode} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
