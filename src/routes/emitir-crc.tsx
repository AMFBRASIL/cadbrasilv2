import { createFileRoute } from "@tanstack/react-router";
import { SicafLandingPage } from "@/components/site/SicafLandingPage";
import { getLandingPage } from "@/data/sicafLandingPages";
import { buildLandingHead } from "@/lib/landingSeo";

const page = getLandingPage("/emitir-crc");

export const Route = createFileRoute("/emitir-crc")({
  head: () => buildLandingHead(page),
  component: EmitirCrcPage,
});

function EmitirCrcPage() {
  return <SicafLandingPage page={page} />;
}
