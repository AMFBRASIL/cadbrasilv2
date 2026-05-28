import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/autoatendimento-sicaf");

export const Route = createFileRoute("/autoatendimento-sicaf")({
  head: () => buildLandingHead(page),
  component: AutoatendimentoSicafPage,
});

function AutoatendimentoSicafPage() {
  return <SicafLandingPage page={page} />;
}
