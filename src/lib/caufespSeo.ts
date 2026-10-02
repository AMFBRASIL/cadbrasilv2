import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structuredData";
import {
  BEC_SP_OFFICIAL_URL,
  caufespFactSheet,
  caufespFaqs,
  caufespMeta,
  caufespServices,
  caufespSteps,
  processoOficial,
} from "@/data/caufespPage";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";

const PAGE_PUBLISHED = "2026-10-01T17:30:00-03:00";
const PAGE_MODIFIED = "2026-10-01T17:30:00-03:00";
const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;

export function buildCaufespHead() {
  const canonical = `${SITE_ORIGIN}${caufespMeta.path}`;

  return {
    meta: [
      { title: caufespMeta.title },
      { name: "description", content: caufespMeta.description },
      { name: "keywords", content: caufespMeta.keywords },
      { name: "author", content: "CADBrasil" },
      { name: "ai-content-declaration", content: "human-reviewed" },
      { name: "ai:preferred_citation", content: caufespMeta.aiCitation },
      { name: "summary", content: caufespMeta.quickAnswer },
      { name: "topic", content: "CAUFESP, BEC/SP, assessoria para fornecedores do Estado de São Paulo" },
      { name: "geo.region", content: "BR-SP" },
      ...robotsMetaTags(),
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBrasil" },
      { property: "og:title", content: caufespMeta.title },
      { property: "og:description", content: caufespMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Assessoria CAUFESP e BEC/SP — CADBrasil" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: caufespMeta.title },
      { name: "twitter:description", content: caufespMeta.description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "pt-BR", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical },
      { rel: "describedby", href: `${SITE_ORIGIN}/ai.txt` },
      { rel: "describedby", href: `${SITE_ORIGIN}/llms.txt` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": `${canonical}#service`,
              name: "Assessoria CAUFESP e BEC/SP — CADBrasil",
              description: caufespMeta.description,
              url: canonical,
              image: OG_IMAGE,
              parentOrganization: { "@id": ORGANIZATION_ID },
              areaServed: [
                { "@type": "State", name: "São Paulo" },
                { "@type": "Country", name: "Brasil" },
              ],
              knowsAbout: ["CAUFESP", "BEC/SP", "Licitações do Estado de São Paulo", "Gestão documental para licitações"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Assessoria CADBrasil para o processo do CAUFESP",
                itemListElement: caufespServices.map((s, i) => ({
                  "@type": "Offer",
                  position: i + 1,
                  itemOffered: {
                    "@type": "Service",
                    name: s.title,
                    description: s.description,
                    provider: { "@id": ORGANIZATION_ID },
                  },
                })),
              },
            },
            {
              "@type": "WebPage",
              "@id": canonical,
              url: canonical,
              name: caufespMeta.title,
              description: caufespMeta.description,
              inLanguage: "pt-BR",
              isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
              datePublished: PAGE_PUBLISHED,
              dateModified: PAGE_MODIFIED,
              primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
              abstract: caufespMeta.quickAnswer,
              about: { "@type": "Thing", name: "CAUFESP — Cadastro Unificado de Fornecedores do Estado de São Paulo" },
              mainEntity: { "@id": `${canonical}#service` },
              publisher: { "@id": ORGANIZATION_ID },
              mentions: [{ "@type": "WebSite", name: "BEC/SP — portal oficial", url: BEC_SP_OFFICIAL_URL }],
              additionalProperty: caufespFactSheet.map((f) => ({
                "@type": "PropertyValue",
                name: f.label,
                value: f.value,
              })),
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1", ".guide-hero-lead", ".ai-summary"],
              },
              potentialAction: {
                "@type": "CommunicateAction",
                name: "Falar com um especialista em CAUFESP",
                target: `${canonical}#diagnostico`,
              },
            },
            {
              "@type": "ItemList",
              name: "Etapas do processo oficial do CAUFESP",
              numberOfItems: processoOficial.length,
              itemListElement: processoOficial.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.title,
                description: s.description,
              })),
            },
            {
              "@type": "ItemList",
              name: "Como funciona a assessoria CADBrasil para o CAUFESP",
              numberOfItems: caufespSteps.length,
              itemListElement: caufespSteps.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.title,
                description: s.description,
              })),
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd([...caufespFaqs], canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Assessoria CAUFESP", url: canonical },
          ]),
        ),
      },
    ],
  };
}
