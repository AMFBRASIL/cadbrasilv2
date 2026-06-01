import { createFileRoute } from "@tanstack/react-router";
import { HomeVersao2Page } from "@/components/site/HomeVersao2Page";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...robotsMetaTags(),
      { title: "CADBRASIL · Cadastro e Regularização SICAF em até 24h" },
      {
        name: "description",
        content:
          "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas. Tecnologia, IA e atendimento humano. Marca CADBRASIL.",
      },
      {
        name: "keywords",
        content:
          "cadastro sicaf, atualizar sicaf, regularizar sicaf, consultoria sicaf, cadastro compras.gov.br, fornecedor governo, licitações públicas, emitir CRC sicaf, regularidade fiscal sicaf",
      },
      { property: "og:title", content: "CADBRASIL · Seu SICAF Regularizado Sem Complicação" },
      {
        property: "og:description",
        content: "Cadastro, regularização e atualização SICAF em até 24h. Especialistas em licitações públicas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${SITE_ORIGIN}/` },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "CADBRASIL",
          brand: "CADBRASIL",
          description:
            "Especialistas em SICAF: cadastro, regularização, atualização e suporte completo para licitações públicas.",
          areaServed: "BR",
          serviceType: ["Cadastro SICAF", "Regularização SICAF", "Atualização SICAF", "Renovação SICAF"],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <HomeVersao2Page />;
}
