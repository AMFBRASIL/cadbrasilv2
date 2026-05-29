import { createFileRoute } from "@tanstack/react-router";
import { GuiaCadastroSicafPage } from "@/components/site/GuiaCadastroSicafPage";
import { buildGuiaHead } from "@/lib/guiaSeo";

export const Route = createFileRoute("/cadastro-sicaf-passo-a-passo")({
  head: () => buildGuiaHead(),
  component: GuiaCadastroSicafPage,
});
