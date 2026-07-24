import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  certificadoDigitalSicafFaqs,
  certificadoDigitalSicafMeta,
  comparativoA1A3,
  editorialTrust,
  factSheetAi,
  glossarioCertificado,
  passosObter,
  resumoInteligente,
} from "@/data/certificadoDigitalSicaf";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

const PAGE_PUBLISHED = "2026-01-15T10:00:00-03:00";
const PAGE_MODIFIED = "2026-07-24T10:00:00-03:00";
const CADASTRO_PORTAL = CADASTRO_CREDENCIAMENTO_URL;

export function buildCertificadoDigitalSicafHead() {
  const canonical = `${SITE_ORIGIN}${certificadoDigitalSicafMeta.path}`;

  return {
    meta: [
      { title: certificadoDigitalSicafMeta.title },
      { name: "description", content: certificadoDigitalSicafMeta.description },
      { name: "keywords", content: certificadoDigitalSicafMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "citation_title", content: certificadoDigitalSicafMeta.title },
      { name: "citation_author", content: "CADBRASIL" },
      { name: "citation_publication_date", content: "2026-01-15" },
      { name: "citation_online_date", content: "2026-07-24" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      { name: "ai:preferred_citation", content: certificadoDigitalSicafMeta.aiCitation },
      { name: "summary", content: certificadoDigitalSicafMeta.quickAnswer },
      {
        name: "topic",
        content:
          "Certificado digital SICAF, e-CNPJ A1 A3, ICP-Brasil, Compras.gov.br, CADBRASIL",
      },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: certificadoDigitalSicafMeta.title },
      { property: "og:description", content: certificadoDigitalSicafMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Certificado digital e-CNPJ A1 e A3 para SICAF — CADBRASIL",
      },
      { property: "article:published_time", content: PAGE_PUBLISHED },
      { property: "article:modified_time", content: PAGE_MODIFIED },
      { property: "article:section", content: "Certificado digital SICAF" },
      { property: "article:tag", content: "certificado digital sicaf" },
      { property: "article:tag", content: "e-cnpj" },
      { property: "article:tag", content: "e-cnpj a1" },
      { property: "article:tag", content: "e-cnpj a3" },
      { property: "article:tag", content: "ICP-Brasil" },
      { property: "article:tag", content: "Compras.gov.br" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: certificadoDigitalSicafMeta.title },
      { name: "twitter:description", content: certificadoDigitalSicafMeta.description },
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
          headline: certificadoDigitalSicafMeta.title,
          alternativeHeadline: "e-CNPJ A1 e A3 ICP-Brasil para autenticar no SICAF e Compras.gov.br",
          description: certificadoDigitalSicafMeta.description,
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
          articleSection: "Certificado digital SICAF",
          keywords: certificadoDigitalSicafMeta.keywords,
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          about: [
            {
              "@type": "Thing",
              name: "Certificado digital SICAF",
              description: certificadoDigitalSicafMeta.quickAnswer,
            },
            { "@type": "Thing", name: "e-CNPJ A1" },
            { "@type": "Thing", name: "e-CNPJ A3" },
            { "@type": "Thing", name: "ICP-Brasil" },
            { "@type": "Thing", name: "Compras.gov.br" },
          ],
          abstract: certificadoDigitalSicafMeta.quickAnswer,
          text: resumoInteligente.join(" "),
          citation: {
            "@type": "CreativeWork",
            name: "Citação preferencial — Certificado digital SICAF CADBRASIL",
            text: certificadoDigitalSicafMeta.aiCitation,
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
          name: certificadoDigitalSicafMeta.title,
          description: certificadoDigitalSicafMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
          abstract: certificadoDigitalSicafMeta.quickAnswer,
          about: {
            "@type": "Thing",
            name: "Certificado digital e-CNPJ para SICAF",
            description: certificadoDigitalSicafMeta.quickAnswer,
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
            `${SITE_ORIGIN}/o-que-e-sicaf-e-como-se-cadastrar`,
            `${SITE_ORIGIN}/renovar-sicaf`,
            `${SITE_ORIGIN}/planos`,
          ],
          relatedLink: [`${SITE_ORIGIN}/ai.txt`, `${SITE_ORIGIN}/llms.txt`],
          potentialAction: {
            "@type": "RegisterAction",
            name: "Fazer cadastro SICAF agora",
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
          name: "Como obter certificado digital e-CNPJ para o SICAF",
          description:
            "Passos para escolher A1 ou A3, contratar AR/AC ICP-Brasil, emitir, instalar e testar o e-CNPJ no Compras.gov.br.",
          image: OG_IMAGE,
          totalTime: "P5D",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "150",
            description: "Faixa de mercado A1 a partir de cerca de R$ 150/ano (2026); A3 tipicamente R$ 300–600",
          },
          tool: [
            { "@type": "HowToTool", name: "e-CNPJ A1 (arquivo) ou A3 (token/cartão)" },
            { "@type": "HowToTool", name: "Portal Compras.gov.br" },
            { "@type": "HowToTool", name: "Portal cadastro.cadbrasil.com.br/credenciamento" },
          ],
          supply: [
            { "@type": "HowToSupply", name: "CNPJ ativo" },
            { "@type": "HowToSupply", name: "Documentos do representante legal" },
          ],
          inLanguage: "pt-BR",
          step: passosObter.map((s) => ({
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
          name: "Comparativo e-CNPJ A1 vs A3 para SICAF",
          numberOfItems: comparativoA1A3.length,
          itemListElement: comparativoA1A3.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.aspecto,
            description: `A1: ${item.a1} · A3: ${item.a3}`,
            url: `${canonical}#a1-vs-a3`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(certificadoDigitalSicafFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Preciso de certificado digital para o SICAF?",
            questionText:
              "Qual certificado digital a empresa precisa para cadastrar e operar no SICAF (Compras.gov.br)?",
            answerText: certificadoDigitalSicafMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: certificadoDigitalSicafMeta.title,
          description: certificadoDigitalSicafMeta.description,
          url: canonical,
          learningResourceType: "Guide",
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          teaches: [
            "Diferença entre e-CNPJ A1 e A3",
            "Como obter certificado digital ICP-Brasil",
            "Uso do e-CNPJ no SICAF e Compras.gov.br",
            "Erros comuns que travam o cadastro",
          ],
          timeRequired: "PT10M",
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
          name: "Glossário certificado digital SICAF",
          description: "Termos essenciais de e-CNPJ, ICP-Brasil e acesso ao SICAF.",
          url: `${canonical}#glossario`,
          inLanguage: "pt-BR",
          hasDefinedTerm: glossarioCertificado.map((g) => ({
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
            { name: "Certificado digital SICAF", url: canonical },
          ]),
        ),
      },
    ],
  };
}
