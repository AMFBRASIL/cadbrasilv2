import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/como-atualizar-certificados-sicaf");

export const Route = createFileRoute("/como-atualizar-certificados-sicaf")({
  head: () => buildLandingHead(page),
  component: () => <SicafLandingPage page={page} />,
});
