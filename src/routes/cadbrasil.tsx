import { createFileRoute } from "@tanstack/react-router";
import { CadbrasilPage } from "@/components/site/CadbrasilPage";
import { buildCadbrasilHead } from "@/lib/cadbrasilSeo";

export const Route = createFileRoute("/cadbrasil")({
  head: () => buildCadbrasilHead(),
  component: CadbrasilPage,
});
