import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/sicaf-cadastro-unificado-de-fornecedores");

export const Route = createFileRoute("/sicaf-cadastro-unificado-de-fornecedores")({
  head: () => buildLandingHead(page),
  component: SicafCadastroUnificadoDeFornecedoresPage,
});

function SicafCadastroUnificadoDeFornecedoresPage() {
  return <SicafLandingPage page={page} />;
}
