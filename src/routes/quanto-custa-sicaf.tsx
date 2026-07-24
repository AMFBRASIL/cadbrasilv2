import { createFileRoute } from "@tanstack/react-router";
import { QuantoCustaSicafPage } from "@/components/site/QuantoCustaSicafPage";
import { buildQuantoCustaSicafHead } from "@/lib/quantoCustaSicafSeo";

export const Route = createFileRoute("/quanto-custa-sicaf")({
  head: () => buildQuantoCustaSicafHead(),
  component: QuantoCustaSicafPage,
});
