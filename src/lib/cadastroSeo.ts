import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  cadastroPageFaqs,
  cadastroPageMeta,
  itemListBeneficios,
  passosRapidos,
} from "@/data/cadastroPage";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";

const CADASTRO_PORTAL = "https://cadastro.cadbrasil.com.br";

export function buildCadastroHead() {
  const canonical = `${SITE_ORIGIN}${cadastroPageMeta.path}`;

  return {
    meta: [
      { title: cadastroPageMeta.metaTitle },
      { name: "description", content: cadastroPageMeta.metaDescription },
      { name: "keywords", content: cadastroPageMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: cadastroPageMeta.metaTitle },
      { property: "og:description", content: cadastroPageMeta.metaDescription },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Cadastro SICAF" },
      { property: "article:tag", content: "cadastro sicaf" },
      { property: "article:tag", content: "cadastro online" },
      { property: "article:tag", content: "fornecedor governo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: cadastroPageMeta.metaTitle },
      { name: "twitter:description", content: cadastroPageMeta.metaDescription },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "pt-BR", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: cadastroPageMeta.metaTitle,
          description: cadastroPageMeta.metaDescription,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Cadastro SICAF online",
            description: cadastroPageMeta.quickAnswer,
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".page-hero-summary", ".ai-summary", ".cadastro-cta-hero"],
          },
          potentialAction: {
            "@type": "RegisterAction",
            name: "Iniciar cadastro SICAF",
            target: {
              "@type": "EntryPoint",
              urlTemplate: CADASTRO_PORTAL,
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Cadastro SICAF online — CADBRASIL",
          description: cadastroPageMeta.metaDescription,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: "Cadastro e credenciamento SICAF",
          offers: {
            "@type": "Offer",
            url: CADASTRO_PORTAL,
            availability: "https://schema.org/InStock",
            eligibleRegion: { "@type": "Country", name: "Brasil" },
          },
          url: canonical,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como fazer cadastro SICAF com a CADBRASIL",
          description: cadastroPageMeta.metaDescription,
          totalTime: "P1D",
          inLanguage: "pt-BR",
          step: passosRapidos.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.titulo,
            text: s.texto,
            url: `${canonical}#passo-${s.n}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: cadastroPageMeta.shortTitle, url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(cadastroPageFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "O que inclui o cadastro SICAF CADBRASIL",
          numberOfItems: itemListBeneficios.length,
          itemListElement: itemListBeneficios.map((name, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "QAPage",
          mainEntity: {
            "@type": "Question",
            name: "Como fazer cadastro SICAF online?",
            text: "Qual é a forma mais rápida de cadastrar minha empresa no SICAF?",
            answerCount: 1,
            acceptedAnswer: {
              "@type": "Answer",
              text: cadastroPageMeta.quickAnswer,
            },
          },
        }),
      },
    ],
  };
}
