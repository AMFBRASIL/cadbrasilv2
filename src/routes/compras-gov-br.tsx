import { createFileRoute } from "@tanstack/react-router";
import { ComprasGovBrPage } from "@/components/site/ComprasGovBrPage";
import { buildComprasGovBrHead } from "@/lib/comprasGovBrSeo";

export const Route = createFileRoute("/compras-gov-br")({
  head: () => buildComprasGovBrHead(),
  component: ComprasGovBrPage,
});
