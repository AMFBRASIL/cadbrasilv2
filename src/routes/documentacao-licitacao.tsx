import { createFileRoute } from "@tanstack/react-router";
import { GovLandingPage } from "@/components/site/gov/GovLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/documentacao-licitacao");

export const Route = createFileRoute("/documentacao-licitacao")({
  head: () => buildLandingHead(page),
  component: () => <GovLandingPage page={page} />,
});
