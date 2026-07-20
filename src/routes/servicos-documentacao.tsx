import { createFileRoute } from "@tanstack/react-router";
import { ServicosDocumentacaoPage } from "@/components/site/ServicosDocumentacaoPage";
import { buildServicosDocumentacaoHead } from "@/lib/servicosDocumentacaoSeo";

export const Route = createFileRoute("/servicos-documentacao")({
  head: () => buildServicosDocumentacaoHead(),
  component: ServicosDocumentacaoPage,
});
