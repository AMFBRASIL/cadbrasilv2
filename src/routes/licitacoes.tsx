import { createFileRoute } from "@tanstack/react-router";
import { LicitacoesPage } from "@/components/site/LicitacoesPage";
import { buildLicitacoesHead } from "@/lib/licitacoesSeo";

export const Route = createFileRoute("/licitacoes")({
  head: () => buildLicitacoesHead(),
  component: LicitacoesPage,
});
