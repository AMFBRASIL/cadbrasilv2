import { createFileRoute } from "@tanstack/react-router";
import { CadastroPage } from "@/components/site/CadastroPage";
import { buildCadastroHead } from "@/lib/cadastroSeo";

export const Route = createFileRoute("/cadastro")({
  head: () => buildCadastroHead(),
  component: CadastroPage,
});
