import { createFileRoute } from "@tanstack/react-router";
import { GovLandingPage } from "@/components/site/gov/GovLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/como-participar-de-licitacao");

export const Route = createFileRoute("/como-participar-de-licitacao")({
  head: () => buildLandingHead(page),
  component: () => <GovLandingPage page={page} />,
});
