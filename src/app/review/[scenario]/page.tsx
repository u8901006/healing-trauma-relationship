import { scenarioIds } from "@/data/scripts";
import ReviewClient from "./ReviewClient";

export function generateStaticParams() {
  return scenarioIds.map((id) => ({ scenario: id }));
}

export default function ReviewPage({
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
  return <ReviewClient scenario={scenario} />;
}
