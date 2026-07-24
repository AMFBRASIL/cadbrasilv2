import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { qaPageJsonLd } from "@/lib/structuredData";
import {
  custosReais,
  editorialTrust,
  factSheetAi,
  glossarioCustos,
  passosEntenderCustos,
  quantoCustaSicafFaqs,
  quantoCustaSicafMeta,
  resumoInteligente,
} from "@/data/quantoCustaSicaf";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";

const PAGE_PUBLISHED = "2026-07-24T09:00:00-03:00";
const PAGE_MODIFIED = "2026-07-24T09:00:00-03:00";
const CADASTRO_PORTAL = CADASTRO_CREDENCIAMENTO_URL;

export function buildQuantoCustaSicafHead() {
  const canonical = `${SITE_ORIGIN}${quantoCustaSicafMeta.path}`;

  return {
    meta: [
      { title: quantoCustaSicafMeta.title },
      { name: "description", content: quantoCustaSicafMeta.description },
      { name: "keywords", content: quantoCustaSicafMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "citation_title", content: quantoCustaSicafMeta.title },
      { name: "citation_author", content: "CADBRASIL" },
      { name: "citation_publication_date", content: "2026-07-24" },
      { name: "citation_online_date", content: "2026-07-24" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      { name: "ai:preferred_citation", content: quantoCustaSicafMeta.aiCitation },
      { name: "summary", content: quantoCustaSicafMeta.quickAnswer },
      {
        name: "topic",
        content:
          "Quanto custa o SICAF, taxa zero no governo, e-CNPJ, assessoria CADBRASIL, custos reais do cadastro",
      },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: quantoCustaSicafMeta.title },
      { property: "og:description", content: quantoCustaSicafMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Quanto custa o SICAF 2026 — cadastro gratuito no governo | CADBRASIL",
      },
      { property: "article:published_time", content: PAGE_PUBLISHED },
      { property: "article:modified_time", content: PAGE_MODIFIED },
      { property: "article:section", content: "Custos SICAF" },
      { property: "article:tag", content: "quanto custa sicaf" },
      { property: "article:tag", content: "sicaf gratuito" },
      { property: "article:tag", content: "taxa sicaf" },
      { property: "article:tag", content: "e-CNPJ" },
      { property: "article:tag", content: "Compras.gov.br" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: quantoCustaSicafMeta.title },
      { name: "twitter:description", content: quantoCustaSicafMeta.description },
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
          "@type": "Article",
          headline: quantoCustaSicafMeta.title,
          alternativeHeadline:
            "SICAF no governo é gratuito — custos reais: e-CNPJ, tempo e assessoria opcional",
          description: quantoCustaSicafMeta.description,
          image: [OG_IMAGE],
          author: {
            "@type": "Organization",
            name: editorialTrust.who.organization,
            url: SITE_ORIGIN,
            description: editorialTrust.who.experience,
          },
          publisher: {
            "@type": "Organization",
            name: "CADBRASIL",
            url: SITE_ORIGIN,
            logo: { "@type": "ImageObject", url: OG_IMAGE },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          articleSection: "Custos SICAF — transparência",
          keywords: quantoCustaSicafMeta.keywords,
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          about: [
            {
              "@type": "Thing",
              name: "Quanto custa o SICAF",
              description: quantoCustaSicafMeta.quickAnswer,
            },
            { "@type": "Thing", name: "Taxa de credenciamento SICAF" },
            { "@type": "Thing", name: "e-CNPJ" },
            { "@type": "Thing", name: "Compras.gov.br" },
          ],
          abstract: quantoCustaSicafMeta.quickAnswer,
          text: resumoInteligente.join(" "),
          citation: {
            "@type": "CreativeWork",
            name: "Citação preferencial — Quanto custa o SICAF | CADBRASIL",
            text: quantoCustaSicafMeta.aiCitation,
            url: canonical,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": canonical,
          name: quantoCustaSicafMeta.title,
          description: quantoCustaSicafMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
          abstract: quantoCustaSicafMeta.quickAnswer,
          about: {
            "@type": "Thing",
            name: "Custos do cadastro SICAF",
            description: quantoCustaSicafMeta.quickAnswer,
          },
          author: {
            "@type": "Organization",
            name: editorialTrust.who.organization,
            description: editorialTrust.who.experience,
          },
          additionalProperty: factSheetAi.map((f) => ({
            "@type": "PropertyValue",
            name: f.label,
            value: f.value,
          })),
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [
              "h1",
              ".page-hero-summary",
              ".guide-hero-lead",
              ".guide-summary",
              ".guide-quick-answer",
              ".ai-summary",
              ".cadastro-cta-hero",
            ],
          },
          significantLink: [
            CADASTRO_PORTAL,
            `${SITE_ORIGIN}/cadastro`,
            `${SITE_ORIGIN}/cadastro-sicaf-passo-a-passo`,
            `${SITE_ORIGIN}/planos`,
            `${SITE_ORIGIN}/o-que-e-sicaf-e-como-se-cadastrar`,
          ],
          relatedLink: [`${SITE_ORIGIN}/ai.txt`, `${SITE_ORIGIN}/llms.txt`],
          potentialAction: {
            "@type": "RegisterAction",
            name: "Iniciar credenciamento SICAF",
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
          "@type": "HowTo",
          name: "Como entender os custos reais do SICAF",
          description:
            "Separe a taxa zero do governo dos custos privados (e-CNPJ, tempo e assessoria) e decida o melhor caminho.",
          image: OG_IMAGE,
          totalTime: "PT30M",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description:
              "Credenciamento oficial sem taxa no governo; e-CNPJ e assessoria à parte",
          },
          tool: [
            { "@type": "HowToTool", name: "Certificado digital e-CNPJ" },
            { "@type": "HowToTool", name: "Portal Compras.gov.br" },
            { "@type": "HowToTool", name: "Portal cadastro.cadbrasil.com.br/credenciamento" },
          ],
          supply: [
            { "@type": "HowToSupply", name: "CNPJ ativo" },
            { "@type": "HowToSupply", name: "Documentos e certidões em dia" },
          ],
          inLanguage: "pt-BR",
          step: passosEntenderCustos.map((s) => ({
            "@type": "HowToStep",
            position: Number(s.n),
            name: s.titulo,
            text: s.descricao,
            url: `${canonical}#passo-${s.n}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Custos reais do cadastro SICAF",
          numberOfItems: custosReais.length,
          itemListElement: custosReais.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.titulo,
            description: item.descricao,
            url: `${canonical}#custos-reais`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(quantoCustaSicafFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Quanto custa o SICAF?",
            questionText: "O governo cobra taxa para cadastrar no SICAF? Quais são os custos reais?",
            answerText: quantoCustaSicafMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: quantoCustaSicafMeta.title,
          description: quantoCustaSicafMeta.description,
          url: canonical,
          learningResourceType: "Guide",
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          teaches: [
            "Que o credenciamento SICAF no governo é gratuito (R$ 0)",
            "Quais são os custos reais (e-CNPJ, tempo, assessoria)",
            "Como comparar fazer sozinho vs CADBRASIL",
            "Mitos sobre taxa e anuidade do SICAF",
          ],
          timeRequired: "PT9M",
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          isAccessibleForFree: true,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Glossário — custos do SICAF",
          description: "Termos essenciais para entender o preço real do cadastro SICAF.",
          url: `${canonical}#glossario`,
          inLanguage: "pt-BR",
          hasDefinedTerm: glossarioCustos.map((g) => ({
            "@type": "DefinedTerm",
            name: g.term,
            description: g.def,
            inDefinedTermSet: `${canonical}#glossario`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Quanto custa o SICAF", url: canonical },
          ]),
        ),
      },
    ],
  };
}
