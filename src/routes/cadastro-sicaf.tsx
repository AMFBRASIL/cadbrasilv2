import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/cadastro-sicaf");

export const Route = createFileRoute("/cadastro-sicaf")({
  head: () => buildLandingHead(page),
  component: CadastroSicafPage,
});

function CadastroSicafPage() {
  return <SicafLandingPage page={page} />;
}
