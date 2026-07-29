import { createFileRoute } from "@tanstack/react-router";
import { homeFaqItems } from "@/components/site/Faq";
import { HomeVersao2Page } from "@/components/site/HomeVersao2Page";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";
import { faqJsonLd, qaPageJsonLd } from "@/lib/structuredData";

const HOME_URL = `${SITE_ORIGIN}/`;
const HOME_QA_ANSWER =
  "O SICAF (Sistema de Cadastramento Unificado de Fornecedores) habilita sua empresa a participar de licitações públicas em todo o Brasil. Sem cadastro ativo e regular, você fica de fora dos pregões e dispensas. A CADBRASIL conduz credenciamento e regularização em até 24 horas.";

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
          "cadastro sicaf, cadastro no sicaf, cadastrar no sicaf, como cadastrar no sicaf, como fazer meu sicaf, preciso fazer sicaf, sicaf para empresas, credenciar minha empresa no sicaf, cadastramento no sicaf, credenciamento sicaf, regularizar sicaf, licitações públicas",
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
      {
        type: "application/ld+json",
        children: JSON.stringify(
          faqJsonLd(
            homeFaqItems.map((it) => ({ question: it.q, answer: it.a })),
            HOME_URL,
          ),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "O que é o SICAF e por que minha empresa precisa?",
            questionText: "Por que uma empresa precisa do cadastro SICAF para vender ao governo?",
            answerText: HOME_QA_ANSWER,
            pageUrl: HOME_URL,
          }),
        ),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <HomeVersao2Page />;
}
