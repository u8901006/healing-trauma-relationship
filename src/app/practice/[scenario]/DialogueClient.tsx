"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useCallback, Suspense } from "react";
import type { ScenarioScript, Mode, EngineState, DialogueChoice } from "@/lib/types";
import { getScript } from "@/data/scripts";
import { getPattern } from "@/data/patterns";
import {
  init,
  currentNode,
  choose,
  isFinished,
  getResult,
  getProgress,
  resolveAutoAdvance,
} from "@/lib/dialogue-engine";
import { calculateScore, getStrategyBreakdown } from "@/lib/scoring";

import { DialogueBox } from "@/components/DialogueBox";
import { NarratorBox } from "@/components/NarratorBox";
import { ChoiceButton } from "@/components/ChoiceButton";
import { TipBanner } from "@/components/TipBanner";
import { FeedbackCard } from "@/components/FeedbackCard";
import { Footer } from "@/components/Footer";

export default function DialogueClient({ scenario }: { scenario: string }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-sm text-[#b8a88f]">載入中…</p>
        </div>
      }
    >
      <DialogueContent scenario={scenario} />
    </Suspense>
  );
}

function DialogueContent({ scenario }: { scenario: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const script: ScenarioScript | undefined = getScript(scenario);
  const mode: Mode = (searchParams.get("mode") as Mode) ?? script?.mode ?? "self";
  const pattern = script ? getPattern(script.patternId) : undefined;

  const [started, setStarted] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [lastTip, setLastTip] = useState<{ general: string; aedp: string; gridRef?: string } | null>(null);
  const [lastFeedback, setLastFeedback] = useState<{ pros: string[]; cons: string[] } | null>(null);
  const [state, setState] = useState<EngineState | null>(null);

  const handleStart = useCallback(() => {
    if (!script) return;
    setState(init(script, mode));
    setStarted(true);
  }, [script, mode]);

  const handleChoice = useCallback(
    (choiceIndex: number) => {
      if (!state || !script) return;
      const node = currentNode(state, script);
      const choice: DialogueChoice = node.choices![choiceIndex];

      setLastTip(node.tip ?? null);
      setLastFeedback(choice.feedback ?? null);

      const next = resolveAutoAdvance(choose(state, choiceIndex, script), script);

      if (isFinished(next, script)) {
        const ending = getResult(next, script);
        const score = calculateScore(next);
        const breakdown = getStrategyBreakdown(next);
        sessionStorage.setItem(
          `review-${scenario}`,
          JSON.stringify({ ending, score, breakdown, mode })
        );
        router.push(`/review/${scenario}?mode=${mode}`);
        return;
      }

      setState(next);
    },
    [state, script, scenario, mode, router]
  );

  if (!script || !pattern) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-[#b8a88f]">找不到此練習的腳本</p>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto max-w-lg px-4 py-12">
          <div className="mb-6 text-center">
            <span className="text-4xl">{pattern.emoji}</span>
            <h1 className="mt-4 text-xl font-bold text-[#3d2b1f]">
              {mode === "self" ? pattern.selfScenarioTitle : pattern.therapistScenarioTitle}
            </h1>
            <p className="mt-1 text-xs text-[#8c4f2b]">
              {pattern.name} · {mode === "self" ? "主角視角" : "治療師視角"}
            </p>
          </div>

          <div className="mb-8 rounded-lg border border-[#e8dcc8] bg-[#fffaf2] p-5">
            <p className="mb-1 text-xs font-bold text-[#8c4f2b]">⚠ 內容警告</p>
            <p className="text-xs leading-relaxed text-[#6b5a48]">{pattern.contentWarning}</p>
          </div>

          <div className="mb-8 rounded-lg bg-[#f6f1e8] p-5">
            <p className="mb-2 text-xs font-bold text-[#8c4f2b]">關於此依附型態</p>
            <p className="text-xs leading-relaxed text-[#6b5a48]">{pattern.formation}</p>
            <p className="mb-1 mt-3 text-xs font-bold text-[#8c4f2b]">保護功能</p>
            <p className="text-xs leading-relaxed text-[#6b5a48]">{pattern.protectiveFunction}</p>
          </div>

          <p className="mb-8 text-sm leading-relaxed text-[#6b5a48]">
            {script.openingNarration}
          </p>

          <div className="flex flex-col items-center gap-3">
            <button
              onClick={handleStart}
              className="rounded-lg bg-[#8c4f2b] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              我了解，開始練習
            </button>
            <a
              href={`/practice?mode=${mode}`}
              className="text-xs text-[#b8a88f] hover:text-[#8c4f2b]"
            >
              返回選擇練習
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const node = currentNode(state!, script);
  const progress = getProgress(state!, script);
  const speakerName = mode === "self" ? "伴侶" : "個案";

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-lg px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>{pattern.emoji}</span>
            <span className="text-xs font-medium text-[#6b5a48]">{pattern.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#fffaf2] border border-[#e8dcc8] px-3 py-1 text-xs text-[#6b5a48]">
              回合 {progress.current}/{progress.total}
            </span>
            <button
              onClick={() => setShowExit(true)}
              className="text-xs text-[#b8a88f] hover:text-[#8c4f2b]"
            >
              退出
            </button>
          </div>
        </div>

        <div className="mb-4 h-1 w-full rounded-full bg-[#e8dcc8]">
          <div
            className="h-1 rounded-full transition-all duration-500"
            style={{
              width: `${(progress.current / progress.total) * 100}%`,
              backgroundColor: pattern.color,
            }}
          />
        </div>

        <div className="mt-4 space-y-4">
          {state!.history.map((entry, i) => (
            <div key={i}>
              {entry.speaker === "npc" ? (
                <DialogueBox text={entry.text} speakerName={speakerName} color={pattern.color} />
              ) : entry.speaker === "narrator" ? (
                <NarratorBox text={entry.text} />
              ) : (
                <div className="rounded-lg border border-[#e8dcc8] bg-[#f6f1e8] p-4">
                  <p className="text-xs text-[#8c4f2b]">你的回應</p>
                  <p className="mt-1 text-sm text-[#3d2b1f]">{entry.text}</p>
                </div>
              )}
            </div>
          ))}

          {node.innerVoice && (
            <div className="rounded-lg border border-dashed border-[#e8dcc8] bg-[#fffaf2]/60 p-3">
              <p className="text-xs italic leading-relaxed text-[#b8a88f]">
                💭 {node.innerVoice}
              </p>
            </div>
          )}

          {node.speaker === "narrator" ? (
            <NarratorBox text={node.text} />
          ) : (
            <DialogueBox text={node.text} speakerName={speakerName} color={pattern.color} />
          )}

          {lastFeedback && <FeedbackCard pros={lastFeedback.pros} cons={lastFeedback.cons} />}

          {lastTip && (
            <TipBanner general={lastTip.general} aedp={lastTip.aedp} gridRef={lastTip.gridRef} mode={mode} />
          )}

          {node.choices && (
            <div className="mt-6 space-y-3">
              <p className="text-xs text-[#b8a88f]">選擇你的回應：</p>
              {node.choices.map((choice, i) => (
                <ChoiceButton key={i} text={choice.text} onClick={() => handleChoice(i)} />
              ))}
            </div>
          )}
        </div>

        {showExit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-sm rounded-xl border border-[#e8dcc8] bg-[#fffaf2] p-6">
              <h2 className="mb-3 text-base font-semibold text-[#3d2b1f]">確定要退出嗎？</h2>
              <p className="mb-4 text-xs text-[#6b5a48]">退出後目前的進度將不會保留。</p>
              <div className="flex gap-3">
                <button
                  onClick={() => router.push(`/practice?mode=${mode}`)}
                  className="flex-1 rounded-lg border border-[#e8dcc8] bg-[#f6f1e8] px-4 py-2 text-xs font-medium text-[#6b5a48]"
                >
                  退出
                </button>
                <button
                  onClick={() => setShowExit(false)}
                  className="flex-1 rounded-lg bg-[#8c4f2b] px-4 py-2 text-xs font-semibold text-white"
                >
                  繼續練習
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
