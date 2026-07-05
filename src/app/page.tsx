"use client";

import { useState } from "react";
import { patterns } from "@/data/patterns";
import { PatternCard } from "@/components/PatternCard";
import { Footer } from "@/components/Footer";
import type { Mode } from "@/lib/types";

export default function HomePage() {
  const [mode, setMode] = useState<Mode>("self");

  return (
    <div className="min-h-screen">
      <header className="border-b border-[#e8dcc8] bg-[#fffaf2]">
        <div className="mx-auto max-w-3xl px-4 py-8 text-center">
          <p className="text-3xl">🧠</p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#3d2b1f] sm:text-3xl">
            Healing Trauma &amp; Relationship
          </h1>
          <p className="mt-2 text-sm text-[#8c4f2b]">
            依附型態對話練習 · AEDP 取向
          </p>
          <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-[#6b5a48]">
            基於《Tailoring Treatment to Attachment Patterns: Healing Trauma in Relationships》
            （Fosha &amp; Pando-Mars, 2025），將三種不安全依附型態的治療知識，
            轉化為「文字冒險式分支對話練習」。每次選擇後，你看見該選項的優點與代價，
            以及 AEDP 鏡頭的理論註解。
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-[#e8dcc8] bg-[#fffaf2] p-1">
            <button
              onClick={() => setMode("self")}
              className={`rounded-md px-5 py-2 text-sm font-medium transition-colors ${
                mode === "self"
                  ? "bg-[#8c4f2b] text-white"
                  : "text-[#6b5a48] hover:text-[#8c4f2b]"
              }`}
            >
              🧑 主角視角
            </button>
            <button
              onClick={() => setMode("therapist")}
              className={`rounded-md px-5 py-2 text-sm font-medium transition-colors ${
                mode === "therapist"
                  ? "bg-[#8c4f2b] text-white"
                  : "text-[#6b5a48] hover:text-[#8c4f2b]"
              }`}
            >
              🩺 治療師視角
            </button>
          </div>
        </div>

        <p className="mb-4 text-center text-xs text-[#b8a88f]">
          {mode === "self"
            ? "你在親密關係的觸發情境中，選擇如何回應。適合一般大眾自我探索。"
            : "你面對展現該依附型態的個案，選擇治療性回應。適合專業工作者。"}
        </p>

        <div className="grid gap-4">
          {patterns.map((p) => (
            <PatternCard key={p.id} pattern={p} mode={mode} />
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#e8dcc8] bg-[#fffaf2] p-5">
          <h2 className="mb-2 text-sm font-bold text-[#8c4f2b]">📖 關於本練習</h2>
          <p className="text-xs leading-relaxed text-[#6b5a48]">
            AEDP（加速體驗性動態心理治療）是一種依附導向的轉化性治療。
            本練習將書中 Grid 4/5/6 的臨床標記與介入，轉化為可互動的分支對話。
            每個選項的回饋以「短期舒緩 vs. 長期維持」的誠實對稱為原則——
            迴避選項也有真實優點，趨近選項也有真實代價。教學效果來自讓你看見這份交換。
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
