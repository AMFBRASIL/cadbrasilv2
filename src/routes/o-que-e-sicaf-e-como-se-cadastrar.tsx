import { createFileRoute } from "@tanstack/react-router";
import { OQueESicafComoSeCadastrarPage } from "@/components/site/OQueESicafComoSeCadastrarPage";
import { buildSicafCadastroHead } from "@/lib/oQueESicafComoSeCadastrarSeo";

export const Route = createFileRoute("/o-que-e-sicaf-e-como-se-cadastrar")({
  head: () => buildSicafCadastroHead(),
  component: OQueESicafComoSeCadastrarPage,
});
