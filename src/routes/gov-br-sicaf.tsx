import { createFileRoute } from "@tanstack/react-router";
import { GovBrSicafPage } from "@/components/site/GovBrSicafPage";
import { buildGovBrSicafHead } from "@/lib/govBrSicafSeo";

export const Route = createFileRoute("/gov-br-sicaf")({
  head: () => buildGovBrSicafHead(),
  component: GovBrSicafPage,
});
