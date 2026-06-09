import { createFileRoute } from "@tanstack/react-router";
import { ComoParticiparLicitacaoResumoPage } from "@/components/site/ComoParticiparLicitacaoResumoPage";
import { buildLicitacaoResumoHead } from "@/lib/comoParticiparLicitacaoResumoSeo";

export const Route = createFileRoute("/como-participar-de-licitacao-resumo")({
  head: () => buildLicitacaoResumoHead(),
  component: ComoParticiparLicitacaoResumoPage,
});
