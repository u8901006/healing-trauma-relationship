import type { ScenarioScript, ScenarioId } from "@/lib/types";
import { avoidantSelfScript } from "@/data/scripts/avoidant-self";
import { avoidantTherapistScript } from "@/data/scripts/avoidant-therapist";
import { ambivalentSelfScript } from "@/data/scripts/ambivalent-self";
import { ambivalentTherapistScript } from "@/data/scripts/ambivalent-therapist";
import { disorganizedSelfScript } from "@/data/scripts/disorganized-self";
import { disorganizedTherapistScript } from "@/data/scripts/disorganized-therapist";

export const scripts: Record<string, ScenarioScript> = {
  "avoidant-self": avoidantSelfScript,
  "avoidant-therapist": avoidantTherapistScript,
  "ambivalent-self": ambivalentSelfScript,
  "ambivalent-therapist": ambivalentTherapistScript,
  "disorganized-self": disorganizedSelfScript,
  "disorganized-therapist": disorganizedTherapistScript,
};

export const scenarioIds: ScenarioId[] = [
  "avoidant-self",
  "avoidant-therapist",
  "ambivalent-self",
  "ambivalent-therapist",
  "disorganized-self",
  "disorganized-therapist",
];

export function getScript(id: string): ScenarioScript | undefined {
  return scripts[id];
}
