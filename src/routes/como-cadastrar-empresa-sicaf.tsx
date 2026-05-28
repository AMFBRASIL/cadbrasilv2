import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/como-cadastrar-empresa-sicaf");

export const Route = createFileRoute("/como-cadastrar-empresa-sicaf")({
  head: () => buildLandingHead(page),
  component: ComoCadastrarEmpresaSicafPage,
});

function ComoCadastrarEmpresaSicafPage() {
  return <SicafLandingPage page={page} />;
}
