import { createFileRoute } from "@tanstack/react-router";
import { SicafIrregularPage } from "@/components/site/SicafIrregularPage";
import { buildSicafIrregularHead } from "@/lib/sicafIrregularSeo";

export const Route = createFileRoute("/sicaf-irregular")({
  head: () => buildSicafIrregularHead(),
  component: SicafIrregularPage,
});
