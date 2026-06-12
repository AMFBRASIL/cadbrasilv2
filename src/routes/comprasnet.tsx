import { createFileRoute } from "@tanstack/react-router";
import { ComprasnetPage } from "@/components/site/ComprasnetPage";
import { buildComprasnetHead } from "@/lib/comprasnetSeo";

export const Route = createFileRoute("/comprasnet")({
  head: () => buildComprasnetHead(),
  component: ComprasnetPage,
});
