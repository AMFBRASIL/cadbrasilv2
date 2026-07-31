import { createFileRoute } from "@tanstack/react-router";
import { PropostaPage } from "@/components/site/PropostaPage";
import { buildPropostaHead } from "@/lib/propostaSeo";

export const Route = createFileRoute("/proposta")({
  head: () => buildPropostaHead(),
  component: PropostaPage,
});
