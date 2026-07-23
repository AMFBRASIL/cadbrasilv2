import { createFileRoute } from "@tanstack/react-router";
import { RenovarSicafPage } from "@/components/site/RenovarSicafPage";
import { buildRenovarSicafHead } from "@/lib/renovarSicafSeo";

export const Route = createFileRoute("/renovar-sicaf")({
  head: () => buildRenovarSicafHead(),
  component: RenovarSicafPage,
});
