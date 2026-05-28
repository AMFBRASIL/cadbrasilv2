import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/empresa-inapta");

export const Route = createFileRoute("/empresa-inapta")({
  head: () => buildLandingHead(page),
  component: EmpresaInaptaPage,
});

function EmpresaInaptaPage() {
  return <SicafLandingPage page={page} />;
}
