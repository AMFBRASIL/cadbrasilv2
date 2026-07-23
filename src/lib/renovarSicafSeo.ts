import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  certidoesPrazos,
  editorialTrust,
  passosRenovacao,
  renovarSicafFaqs,
  renovarSicafMeta,
} from "@/data/renovarSicaf";
import { OG_IMAGE, robotsMetaTags, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

const PAGE_MODIFIED = "2026-07-23T18:00:00-03:00";

export function buildRenovarSicafHead() {
  const canonical = `${SITE_ORIGIN}${renovarSicafMeta.path}`;

  return {
    meta: [
      { title: renovarSicafMeta.title },
      { name: "description", content: renovarSicafMeta.description },
      { name: "keywords", content: renovarSicafMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "citation_title", content: renovarSicafMeta.title },
      { name: "citation_author", content: "CADBRASIL" },
      { name: "citation_publication_date", content: "2026-07-23" },
      { name: "citation_online_date", content: "2026-07-23" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: renovarSicafMeta.title },
      { property: "og:description", content: renovarSicafMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Renovar SICAF — certidões e CRC Regular | CADBRASIL" },
      { property: "article:published_time", content: PAGE_MODIFIED },
      { property: "article:modified_time", content: PAGE_MODIFIED },
      { property: "article:section", content: "Renovação SICAF" },
      { property: "article:tag", content: "renovar sicaf" },
      { property: "article:tag", content: "certidões" },
      { property: "article:tag", content: "CRC" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: renovarSicafMeta.title },
      { name: "twitter:description", content: renovarSicafMeta.description },
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
          "@type": "Article",
          headline: renovarSicafMeta.title,
          alternativeHeadline: "Como renovar o SICAF e manter certidões válidas",
          description: renovarSicafMeta.description,
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
          articleSection: "Renovação SICAF",
          keywords: renovarSicafMeta.keywords,
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          datePublished: PAGE_MODIFIED,
          dateModified: PAGE_MODIFIED,
          about: [
            { "@type": "Thing", name: "Renovação SICAF", description: renovarSicafMeta.quickAnswer },
            { "@type": "Thing", name: "Certidões de regularidade fiscal" },
            { "@type": "Thing", name: "CRC Regular" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como renovar o SICAF passo a passo",
          description:
            "Procedimento para mapear vencimentos, emitir certidões, atualizar o Compras.gov.br e validar o CRC.",
          image: OG_IMAGE,
          totalTime: "P2D",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description: "Renovação no portal oficial sem taxa; assessoria à parte",
          },
          tool: [
            { "@type": "HowToTool", name: "Certificado digital e-CNPJ" },
            { "@type": "HowToTool", name: "Portal Compras.gov.br — menu SICAF" },
          ],
          supply: [
            { "@type": "HowToSupply", name: "Certidões atualizadas em PDF" },
            { "@type": "HowToSupply", name: "Código e data de validade das certidões" },
          ],
          inLanguage: "pt-BR",
          step: passosRenovacao.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.titulo,
            text: s.descricao,
            url: `${canonical}#passo-${i + 1}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Renovação SICAF — CADBRASIL",
          description: renovarSicafMeta.description,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: "Renovação e monitoramento de certidões SICAF",
          url: canonical,
          offers: {
            "@type": "Offer",
            url: `${SITE_ORIGIN}/planos`,
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Certidões e documentos da renovação SICAF",
          numberOfItems: certidoesPrazos.length,
          itemListElement: certidoesPrazos.map((c, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: c.doc,
            description: `Nível ${c.nivel} · Validade: ${c.validade} · ${c.tipo}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(renovarSicafFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Como renovar o SICAF?",
            questionText: "Como faço para renovar o SICAF e manter as certidões válidas?",
            answerText: renovarSicafMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": canonical,
          name: renovarSicafMeta.title,
          description: renovarSicafMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          datePublished: PAGE_MODIFIED,
          dateModified: PAGE_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Renovação do SICAF",
            description: renovarSicafMeta.quickAnswer,
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".guide-hero-lead", ".guide-summary", ".guide-quick-answer"],
          },
          significantLink: [
            `${SITE_ORIGIN}/sicaf-niveis`,
            `${SITE_ORIGIN}/servicos-documentacao`,
            `${SITE_ORIGIN}/planos`,
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: renovarSicafMeta.title,
          description: renovarSicafMeta.description,
          url: canonical,
          learningResourceType: "Guide",
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          teaches: [
            "Quando renovar o SICAF",
            "Como atualizar certidões no Compras.gov.br",
            "Procedimento do Nível IV",
            "Manutenção do CRC Regular",
          ],
          timeRequired: "PT12M",
          dateModified: PAGE_MODIFIED,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Renovação SICAF", url: `${SITE_ORIGIN}/renovacao-sicaf` },
            { name: "Renovar SICAF — campanha", url: canonical },
          ]),
        ),
      },
    ],
  };
}
