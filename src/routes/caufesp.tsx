import { createFileRoute } from "@tanstack/react-router";
import { CaufespPage } from "@/components/site/CaufespPage";
import { buildCaufespHead } from "@/lib/caufespSeo";

export const Route = createFileRoute("/caufesp")({
  head: () => buildCaufespHead(),
  component: CaufespPage,
});
