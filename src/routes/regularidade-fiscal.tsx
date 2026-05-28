import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/regularidade-fiscal");

export const Route = createFileRoute("/regularidade-fiscal")({
  head: () => buildLandingHead(page),
  component: RegularidadeFiscalPage,
});

function RegularidadeFiscalPage() {
  return <SicafLandingPage page={page} />;
}
