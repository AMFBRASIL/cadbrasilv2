import { createFileRoute } from "@tanstack/react-router";
import { QuemPodeSeCadastrarSicafPage } from "@/components/site/QuemPodeSeCadastrarSicafPage";
import { buildQuemPodeHead } from "@/lib/quemPodeSeo";

export const Route = createFileRoute("/quem-pode-se-cadastrar-no-sicaf")({
  head: () => buildQuemPodeHead(),
  component: QuemPodeSeCadastrarSicafPage,
});
