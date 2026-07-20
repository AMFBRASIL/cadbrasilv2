import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  gestaoDocumentos,
  servicosDocumentacaoFaqs,
  servicosDocumentacaoMeta,
  servicosSicaf,
} from "@/data/servicosDocumentacao";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

export function buildServicosDocumentacaoHead() {
  const canonical = `${SITE_ORIGIN}${servicosDocumentacaoMeta.path}`;

  const allServices = [
    ...gestaoDocumentos.servicos.map((s) => s.titulo),
    ...servicosSicaf.flatMap((c) => c.servicos),
  ];

  return {
    meta: [
      { title: servicosDocumentacaoMeta.title },
      { name: "description", content: servicosDocumentacaoMeta.description },
      { name: "keywords", content: servicosDocumentacaoMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: servicosDocumentacaoMeta.title },
      { property: "og:description", content: servicosDocumentacaoMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: servicosDocumentacaoMeta.title },
      { name: "twitter:description", content: servicosDocumentacaoMeta.description },
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
          name: servicosDocumentacaoMeta.title,
          description: servicosDocumentacaoMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".guide-hero-lead", ".guide-summary"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Gestão de Documentos e SICAF — CADBRASIL",
          description: servicosDocumentacaoMeta.description,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: "Gestão documental SICAF e assessoria licitatória",
          url: canonical,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Serviços CADBRASIL",
          numberOfItems: allServices.length,
          itemListElement: allServices.slice(0, 30).map((name, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(servicosDocumentacaoFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(qaPageJsonLd(servicosDocumentacaoFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Serviços e documentação", url: canonical },
          ]),
        ),
      },
    ],
  };
}
