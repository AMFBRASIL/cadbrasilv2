import { createFileRoute } from "@tanstack/react-router";
import { CadastrarNoSicafPage } from "@/components/site/CadastrarNoSicafPage";
import { buildCadastrarNoSicafHead } from "@/lib/cadastrarNoSicafSeo";

export const Route = createFileRoute("/cadastrar-no-sicaf")({
  head: () => buildCadastrarNoSicafHead(),
  component: CadastrarNoSicafPage,
});
