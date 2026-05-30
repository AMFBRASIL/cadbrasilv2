import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/documentos-necessarios-cadastro-sicaf");

export const Route = createFileRoute("/documentos-necessarios-cadastro-sicaf")({
  head: () => buildLandingHead(page),
  component: () => <SicafLandingPage page={page} />,
});
