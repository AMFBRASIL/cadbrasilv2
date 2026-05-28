import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/credenciamento-sicaf-digital");

export const Route = createFileRoute("/credenciamento-sicaf-digital")({
  head: () => buildLandingHead(page),
  component: CredenciamentoSicafDigitalPage,
});

function CredenciamentoSicafDigitalPage() {
  return <SicafLandingPage page={page} />;
}
