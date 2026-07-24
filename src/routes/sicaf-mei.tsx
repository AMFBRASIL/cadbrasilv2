import { createFileRoute } from "@tanstack/react-router";
import { SicafMeiPage } from "@/components/site/SicafMeiPage";
import { buildSicafMeiHead } from "@/lib/sicafMeiSeo";

export const Route = createFileRoute("/sicaf-mei")({
  head: () => buildSicafMeiHead(),
  component: SicafMeiPage,
});
