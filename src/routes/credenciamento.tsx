import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/credenciamento");

export const Route = createFileRoute("/credenciamento")({
  head: () => buildLandingHead(page),
  component: CredenciamentoPage,
});

function CredenciamentoPage() {
  return <SicafLandingPage page={page} />;
}
