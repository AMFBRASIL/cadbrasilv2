import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/como-regularizar-sicaf-empresa");

export const Route = createFileRoute("/como-regularizar-sicaf-empresa")({
  head: () => buildLandingHead(page),
  component: () => <SicafLandingPage page={page} />,
});
