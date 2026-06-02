import { createFileRoute } from "@tanstack/react-router";
import { DocumentacaoSicafPage } from "@/components/site/DocumentacaoSicafPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/documentacao-sicaf");

export const Route = createFileRoute("/documentacao-sicaf")({
  head: () => buildLandingHead(page),
  component: DocumentacaoSicafPage,
});
