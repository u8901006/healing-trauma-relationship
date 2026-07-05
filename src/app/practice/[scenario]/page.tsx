import { scenarioIds } from "@/data/scripts";
import DialogueClient from "./DialogueClient";

export function generateStaticParams() {
  return scenarioIds.map((id) => ({ scenario: id }));
}

export default function PracticePage({
  params,
}: {
  params: Promise<{ scenario: string }>;
}) {
  return <AsyncWrapper params={params} />;
}

async function AsyncWrapper({
  params,
}: {
  params: Promise<{ scenario: string }>;
}) {
  const { scenario } = await params;
  return <DialogueClient scenario={scenario} />;
}
