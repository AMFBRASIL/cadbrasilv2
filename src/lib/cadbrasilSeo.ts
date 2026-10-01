import { breadcrumbJsonLd, faqJsonLd, qaPageJsonLd } from "@/lib/structuredData";
import {
  cadbrasilFaqs,
  cadbrasilMeta,
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_TAX_ID,
  COMPRAS_GOV_OFFICIAL_URL,
  factSheetAi,
  hero,
  howItWorks,
  privateNotice,
  solutions,
  techFeatures,
} from "@/data/cadbrasilPage";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";

const PAGE_PUBLISHED = "2026-07-23T20:30:00-03:00";
const PAGE_MODIFIED = "2026-10-01T09:00:00-03:00";
const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;

const KNOWS_ABOUT = [
  "Licitações públicas",
  "Assessoria para licitações",
  "Consultoria em licitações",
  "Gestão documental para licitações",
  "Análise de editais",
  "Monitoramento de oportunidades de compras públicas",
  "Fornecedores do governo",
  "Orientação sobre SICAF e Compras.gov.br",
];

export function buildCadbrasilHead() {
  const canonical = `${SITE_ORIGIN}${cadbrasilMeta.path}`;

  const catalog = {
    "@type": "OfferCatalog",
    name: "Soluções CADBrasil para fornecedores",
    itemListElement: solutions.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: { "@id": ORGANIZATION_ID },
      },
    })),
  };

  return {
    meta: [
      { title: cadbrasilMeta.title },
      { name: "description", content: cadbrasilMeta.description },
      { name: "keywords", content: cadbrasilMeta.keywords },
      { name: "author", content: "CADBrasil" },
      { name: "ai-content-declaration", content: "human-reviewed" },
      { name: "ai:preferred_citation", content: cadbrasilMeta.aiCitation },
      { name: "summary", content: cadbrasilMeta.quickAnswer },
      {
        name: "topic",
        content: "Assessoria em licitações, tecnologia para fornecedores, gestão documental, análise de editais",
      },
      ...robotsMetaTags(),
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBrasil" },
      { property: "og:title", content: cadbrasilMeta.title },
      { property: "og:description", content: cadbrasilMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "CADBrasil — tecnologia e assessoria para licitações públicas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: cadbrasilMeta.title },
      { name: "twitter:description", content: cadbrasilMeta.description },
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
              "@type": "Organization",
              "@id": ORGANIZATION_ID,
              name: "CADBrasil",
              legalName: COMPANY_LEGAL_NAME,
              taxID: COMPANY_TAX_ID,
              url: SITE_ORIGIN,
              logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/icon-512.png`, width: 512, height: 512 },
              image: OG_IMAGE,
              description: privateNotice.text,
              areaServed: { "@type": "Country", name: "Brasil" },
              knowsAbout: KNOWS_ABOUT,
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                availableLanguage: ["Portuguese"],
                areaServed: "BR",
                email: COMPANY_EMAIL,
                telephone: "+55-11-2122-0202",
              },
              hasOfferCatalog: catalog,
            },
            {
              "@type": "ProfessionalService",
              "@id": `${canonical}#service`,
              name: "CADBrasil — Assessoria em licitações e tecnologia para fornecedores",
              description: cadbrasilMeta.description,
              url: canonical,
              image: OG_IMAGE,
              parentOrganization: { "@id": ORGANIZATION_ID },
              areaServed: { "@type": "Country", name: "Brasil" },
              knowsAbout: KNOWS_ABOUT,
              hasOfferCatalog: catalog,
            },
            {
              "@type": "WebPage",
              "@id": canonical,
              url: canonical,
              name: cadbrasilMeta.title,
              headline: `${hero.title} ${hero.highlight}`,
              description: cadbrasilMeta.description,
              inLanguage: "pt-BR",
              isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
              datePublished: PAGE_PUBLISHED,
              dateModified: PAGE_MODIFIED,
              primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
              abstract: cadbrasilMeta.quickAnswer,
              about: { "@id": ORGANIZATION_ID },
              mainEntity: { "@id": `${canonical}#service` },
              publisher: { "@id": ORGANIZATION_ID },
              mentions: [
                {
                  "@type": "WebSite",
                  name: "Compras.gov.br — portal oficial do Governo Federal",
                  url: COMPRAS_GOV_OFFICIAL_URL,
                },
              ],
              additionalProperty: factSheetAi.map((f) => ({
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
                name: "Falar com um especialista",
                target: `${canonical}#diagnostico`,
              },
            },
            {
              "@type": "ItemList",
              name: "Como funciona a assessoria CADBrasil",
              numberOfItems: howItWorks.length,
              itemListElement: howItWorks.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.title,
                description: s.description,
              })),
            },
            {
              "@type": "ItemList",
              name: "Recursos da plataforma CADBrasil",
              numberOfItems: techFeatures.length,
              itemListElement: techFeatures.map((f, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: f.title,
                description: f.description,
              })),
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd([...cadbrasilFaqs], canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "O que é a CADBrasil?",
            questionText: "O que é a CADBrasil e o que ela oferece para empresas que participam de licitações?",
            answerText: cadbrasilMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "CADBrasil", url: canonical },
          ]),
        ),
      },
    ],
  };
}
