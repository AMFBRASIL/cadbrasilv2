import { createFileRoute } from "@tanstack/react-router";
import { GovLandingPage } from "@/components/site/gov/GovLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/pregao-eletronico");

export const Route = createFileRoute("/pregao-eletronico")({
  head: () => buildLandingHead(page),
  component: () => <GovLandingPage page={page} />,
});
