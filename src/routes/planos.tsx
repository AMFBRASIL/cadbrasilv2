import { createFileRoute } from "@tanstack/react-router";
import { PlanosPage } from "@/components/site/PlanosPage";
import { buildPlanosHead } from "@/lib/planosSeo";

export const Route = createFileRoute("/planos")({
  head: () => buildPlanosHead(),
  component: PlanosPage,
});
