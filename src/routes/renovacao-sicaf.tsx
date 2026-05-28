import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/renovacao-sicaf");

export const Route = createFileRoute("/renovacao-sicaf")({
  head: () => buildLandingHead(page),
  component: RenovacaoSicafPage,
});

function RenovacaoSicafPage() {
  return <SicafLandingPage page={page} />;
}
