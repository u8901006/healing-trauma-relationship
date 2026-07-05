import { EngineState } from "@/lib/types";

export function calculateScore(state: EngineState): number {
  if (state.scores.length === 0) return 0;
  const sum = state.scores.reduce((a, b) => a + b, 0);
  const max = state.scores.length * 3;
  return max > 0 ? Math.round((sum / max) * 100) : 0;
}

export function getStrategyBreakdown(
  state: EngineState
): Record<string, number> {
  const breakdown: Record<string, number> = {};
  for (const s of state.strategyLog) {
    breakdown[s] = (breakdown[s] ?? 0) + 1;
  }
  return breakdown;
}
