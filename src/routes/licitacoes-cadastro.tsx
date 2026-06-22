import { createFileRoute } from "@tanstack/react-router";
import { LicitacoesCadastroPage } from "@/components/site/LicitacoesCadastroPage";
import { buildLicitacoesCadastroHead } from "@/lib/licitacoesCadastroSeo";

export const Route = createFileRoute("/licitacoes-cadastro")({
  head: () => buildLicitacoesCadastroHead(),
  component: LicitacoesCadastroPage,
});
