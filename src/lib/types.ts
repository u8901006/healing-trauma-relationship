export type AttachmentPatternId = "avoidant" | "ambivalent" | "disorganized";

export type Mode = "self" | "therapist";

export type ScenarioId = `${AttachmentPatternId}-${Mode}`;

export interface DialogueChoice {
  text: string;
  strategy: string;
  nextNode: string;
  effectiveness: 1 | 2 | 3;
  feedback: {
    pros: string[];
    cons: string[];
  };
}

export interface DialogueNode {
  id: string;
  speaker: "npc" | "narrator";
  text: string;
  innerVoice?: string;
  choices?: DialogueChoice[];
  tip?: {
    general: string;
    aedp: string;
    gridRef?: string;
  };
  next?: string;
  end?: DialogueEnding;
}

export interface DialogueEnding {
  summary: string;
  strategiesUsed: string[];
  suggestion: string;
  score: number;
}

export interface ScenarioScript {
  scenarioId: ScenarioId;
  patternId: AttachmentPatternId;
  mode: Mode;
  openingNarration: string;
  nodes: Record<string, DialogueNode>;
  totalRounds: number;
}

export interface AttachmentPattern {
  id: AttachmentPatternId;
  name: string;
  subtitle: string;
  emoji: string;
  strategy: string;
  color: string;
  selfScenarioTitle: string;
  selfScenarioDesc: string;
  therapistScenarioTitle: string;
  therapistScenarioDesc: string;
  formation: string;
  protectiveFunction: string;
  aedpLens: string;
  contentWarning: string;
  sourceFormation: string;
  sourceTransformation: string;
}

export interface EngineState {
  currentNodeId: string;
  history: Array<{ speaker: string; text: string }>;
  scores: number[];
  strategyLog: string[];
  mode: Mode;
}
