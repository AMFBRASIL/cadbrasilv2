import { createFileRoute } from "@tanstack/react-router";
import { CertificadoDigitalSicafPage } from "@/components/site/CertificadoDigitalSicafPage";
import { buildCertificadoDigitalSicafHead } from "@/lib/certificadoDigitalSicafSeo";

export const Route = createFileRoute("/certificado-digital-sicaf")({
  head: () => buildCertificadoDigitalSicafHead(),
  component: CertificadoDigitalSicafPage,
});
