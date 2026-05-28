import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/como-fazer-cadastro-no-sicaf");

export const Route = createFileRoute("/como-fazer-cadastro-no-sicaf")({
  head: () => buildLandingHead(page),
  component: ComoFazerCadastroNoSicafPage,
});

function ComoFazerCadastroNoSicafPage() {
  return <SicafLandingPage page={page} />;
}
