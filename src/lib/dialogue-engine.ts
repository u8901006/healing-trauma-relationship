import {
  EngineState,
  Mode,
  ScenarioScript,
  DialogueNode,
  DialogueEnding,
} from "@/lib/types";

export function resolveAutoAdvance(
  state: EngineState,
  script: ScenarioScript
): EngineState {
  let current = state;
  let node = script.nodes[current.currentNodeId];

  while (node && node.next && (!node.choices || node.choices.length === 0) && !node.end) {
    current = {
      ...current,
      currentNodeId: node.next,
      history: [
        ...current.history,
        { speaker: node.speaker, text: node.text },
      ],
    };
    node = script.nodes[current.currentNodeId];
  }

  return current;
}

export function init(script: ScenarioScript, mode: Mode): EngineState {
  const raw: EngineState = {
    currentNodeId: "start",
    history: [],
    scores: [],
    strategyLog: [],
    mode,
  };
  return resolveAutoAdvance(raw, script);
}

export function currentNode(
  state: EngineState,
  script: ScenarioScript
): DialogueNode {
  return script.nodes[state.currentNodeId];
}

export function choose(
  state: EngineState,
  choiceIndex: number,
  script: ScenarioScript
): EngineState {
  const node = script.nodes[state.currentNodeId];
  const choice = node.choices![choiceIndex];

  return {
    currentNodeId: choice.nextNode,
    history: [
      ...state.history,
      { speaker: node.speaker, text: node.text },
      { speaker: "user", text: choice.text },
    ],
    scores: [...state.scores, choice.effectiveness],
    strategyLog: [...state.strategyLog, choice.strategy],
    mode: state.mode,
  };
}

export function isFinished(
  state: EngineState,
  script: ScenarioScript
): boolean {
  const node = script.nodes[state.currentNodeId];
  if (!node) return true;
  return node.end !== undefined;
}

export function getResult(
  state: EngineState,
  script: ScenarioScript
): DialogueEnding {
  return script.nodes[state.currentNodeId].end!;
}

export function getProgress(
  state: EngineState,
  script: ScenarioScript
): { current: number; total: number } {
  return {
    current: state.history.filter((h) => h.speaker === "npc").length,
    total: script.totalRounds,
  };
}
