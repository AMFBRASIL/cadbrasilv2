import { createFileRoute } from "@tanstack/react-router";
import { HomeVersao2Page } from "@/components/site/HomeVersao2Page";
import { homeFaqItems } from "@/data/homeFaq";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";
import { faqJsonLd } from "@/lib/structuredData";

const HOME_URL = `${SITE_ORIGIN}/`;
const HOME_TITLE = "Cadastro SICAF e Renovação | CADBRASIL";
const HOME_DESCRIPTION =
  "Assessoria para cadastro, renovação e regularização SICAF no Compras.gov.br. Conferência documental, atendimento nacional e suporte especializado.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...robotsMetaTags(),
      { title: HOME_TITLE },
      {
        name: "description",
        content: HOME_DESCRIPTION,
      },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: HOME_URL },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "CADBRASIL — assessoria para cadastro e renovação SICAF",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      {
        name: "twitter:image:alt",
        content: "CADBRASIL — assessoria para cadastro e renovação SICAF",
      },
    ],
    links: [
      { rel: "canonical", href: `${SITE_ORIGIN}/` },
      { rel: "alternate", hrefLang: "pt-BR", href: HOME_URL },
      { rel: "alternate", hrefLang: "x-default", href: HOME_URL },
      { rel: "describedby", href: `${SITE_ORIGIN}/ai.txt` },
      { rel: "describedby", href: `${SITE_ORIGIN}/llms.txt` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
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
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${HOME_URL}#webpage`,
              url: HOME_URL,
              name: HOME_TITLE,
              description: HOME_DESCRIPTION,
              inLanguage: "pt-BR",
              isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
              about: [
                { "@id": `${SITE_ORIGIN}/#organization` },
                { "@id": `${HOME_URL}#sicaf-service` },
              ],
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: OG_IMAGE,
                width: 1200,
                height: 630,
              },
            },
            {
              "@type": "Service",
              "@id": `${HOME_URL}#sicaf-service`,
              name: "Assessoria para cadastro e renovação SICAF",
              description: HOME_DESCRIPTION,
              serviceType: [
                "Cadastro SICAF",
                "Renovação SICAF",
                "Regularização SICAF",
                "Conferência documental",
              ],
              provider: { "@id": `${SITE_ORIGIN}/#organization` },
              areaServed: { "@type": "Country", name: "Brasil" },
              url: HOME_URL,
              termsOfService: `${SITE_ORIGIN}/cadbrasil`,
            },
          ],
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
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <HomeVersao2Page />;
}
