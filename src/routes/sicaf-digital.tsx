import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/sicaf-digital");

export const Route = createFileRoute("/sicaf-digital")({
  head: () => buildLandingHead(page),
  component: SicafDigitalPage,
});

function SicafDigitalPage() {
  return <SicafLandingPage page={page} />;
}
