import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/plataforma-digital");

export const Route = createFileRoute("/plataforma-digital")({
  head: () => buildLandingHead(page),
  component: PlataformaDigitalPage,
});

function PlataformaDigitalPage() {
  return <SicafLandingPage page={page} />;
}
