import { createFileRoute } from "@tanstack/react-router";
import { ComoCadastrarSicafVenderGovernoPage } from "@/components/site/ComoCadastrarSicafVenderGovernoPage";
import { buildVenderGovernoHead } from "@/lib/comoCadastrarSicafVenderGovernoSeo";

export const Route = createFileRoute("/como-cadastrar-no-sicaf-e-vender-para-o-governo")({
  head: () => buildVenderGovernoHead(),
  component: ComoCadastrarSicafVenderGovernoPage,
});
