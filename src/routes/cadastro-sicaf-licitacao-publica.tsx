import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/cadastro-sicaf-licitacao-publica");

export const Route = createFileRoute("/cadastro-sicaf-licitacao-publica")({
  head: () => buildLandingHead(page),
  component: () => <SicafLandingPage page={page} />,
});
