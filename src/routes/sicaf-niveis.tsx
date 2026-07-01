import { createFileRoute } from "@tanstack/react-router";
import { SicafNiveisPage } from "@/components/site/SicafNiveisPage";
import { buildSicafNiveisHead } from "@/lib/sicafNiveisSeo";

export const Route = createFileRoute("/sicaf-niveis")({
  head: () => buildSicafNiveisHead(),
  component: SicafNiveisPage,
});
