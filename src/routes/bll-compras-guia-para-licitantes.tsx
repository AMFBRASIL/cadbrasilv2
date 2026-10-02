import { createFileRoute } from "@tanstack/react-router";
import { BllComprasGuiaPage } from "@/components/site/BllComprasGuiaPage";
import { buildBllComprasGuiaHead } from "@/lib/bllComprasGuiaSeo";

export const Route = createFileRoute("/bll-compras-guia-para-licitantes")({
  head: () => buildBllComprasGuiaHead(),
  component: BllComprasGuiaPage,
});
