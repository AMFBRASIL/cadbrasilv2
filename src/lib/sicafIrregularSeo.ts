import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { qaPageJsonLd } from "@/lib/structuredData";
import {
  causasIrregularidade,
  certidoesTabela,
  editorialTrust,
  factSheetAi,
  glossarioSicafIrregular,
  passosRegularizacao,
  resumoInteligente,
  sicafIrregularFaqs,
  sicafIrregularMeta,
} from "@/data/sicafIrregular";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";

const PAGE_PUBLISHED = "2026-07-24T09:00:00-03:00";
const PAGE_MODIFIED = "2026-07-24T09:00:00-03:00";
const CADASTRO_PORTAL = CADASTRO_CREDENCIAMENTO_URL;

export function buildSicafIrregularHead() {
  const canonical = `${SITE_ORIGIN}${sicafIrregularMeta.path}`;

  return {
    meta: [
      { title: sicafIrregularMeta.title },
      { name: "description", content: sicafIrregularMeta.description },
      { name: "keywords", content: sicafIrregularMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "citation_title", content: sicafIrregularMeta.title },
      { name: "citation_author", content: "CADBRASIL" },
      { name: "citation_publication_date", content: "2026-07-24" },
      { name: "citation_online_date", content: "2026-07-24" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      { name: "ai:preferred_citation", content: sicafIrregularMeta.aiCitation },
      { name: "summary", content: sicafIrregularMeta.quickAnswer },
      {
        name: "topic",
        content:
          "SICAF irregular, SICAF pendente, regularizar SICAF, certidão vencida, inabilitação, CRC",
      },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: sicafIrregularMeta.title },
      { property: "og:description", content: sicafIrregularMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "SICAF irregular 2026 — regularizar e voltar a licitar | CADBRASIL",
      },
      { property: "article:published_time", content: PAGE_PUBLISHED },
      { property: "article:modified_time", content: PAGE_MODIFIED },
      { property: "article:section", content: "Regularização SICAF" },
      { property: "article:tag", content: "sicaf irregular" },
      { property: "article:tag", content: "sicaf pendente" },
      { property: "article:tag", content: "regularizar sicaf" },
      { property: "article:tag", content: "certidão vencida" },
      { property: "article:tag", content: "CRC" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: sicafIrregularMeta.title },
      { name: "twitter:description", content: sicafIrregularMeta.description },
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
          headline: sicafIrregularMeta.title,
          alternativeHeadline:
            "Como diagnosticar e regularizar SICAF irregular ou pendente em 2026",
          description: sicafIrregularMeta.description,
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
          articleSection: "Regularização SICAF",
          keywords: sicafIrregularMeta.keywords,
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          about: [
            {
              "@type": "Thing",
              name: "SICAF irregular",
              description: sicafIrregularMeta.quickAnswer,
            },
            { "@type": "Thing", name: "SICAF pendente" },
            { "@type": "Thing", name: "Certidão vencida" },
            { "@type": "Thing", name: "Regularizar SICAF" },
            { "@type": "Thing", name: "CRC Regular" },
          ],
          abstract: sicafIrregularMeta.quickAnswer,
          text: resumoInteligente.join(" "),
          citation: {
            "@type": "CreativeWork",
            name: "Citação preferencial — SICAF irregular CADBRASIL",
            text: sicafIrregularMeta.aiCitation,
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
          name: sicafIrregularMeta.title,
          description: sicafIrregularMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
          abstract: sicafIrregularMeta.quickAnswer,
          about: {
            "@type": "Thing",
            name: "SICAF irregular e pendente",
            description: sicafIrregularMeta.quickAnswer,
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
            `${SITE_ORIGIN}/renovar-sicaf`,
            `${SITE_ORIGIN}/como-regularizar-sicaf-empresa`,
            `${SITE_ORIGIN}/regularidade-fiscal`,
            `${SITE_ORIGIN}/sicaf-niveis`,
            `${SITE_ORIGIN}/planos`,
          ],
          relatedLink: [`${SITE_ORIGIN}/ai.txt`, `${SITE_ORIGIN}/llms.txt`],
          potentialAction: {
            "@type": "RegisterAction",
            name: "Regularizar SICAF agora",
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
          name: "Como regularizar o SICAF irregular passo a passo",
          description:
            "Diagnóstico, emissão de certidões válidas, atualização no Compras.gov.br e validação do CRC Regular.",
          image: OG_IMAGE,
          totalTime: "P2D",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description:
              "Atualização no portal oficial sem taxa; assessoria CADBRASIL à parte",
          },
          tool: [
            { "@type": "HowToTool", name: "Certificado digital e-CNPJ" },
            { "@type": "HowToTool", name: "Portal Compras.gov.br — menu SICAF" },
            { "@type": "HowToTool", name: "Portal cadastro.cadbrasil.com.br/credenciamento" },
          ],
          supply: [
            { "@type": "HowToSupply", name: "Certidões válidas em PDF (CND, FGTS, CNDT, locais)" },
            { "@type": "HowToSupply", name: "Código e data de validade das certidões" },
          ],
          inLanguage: "pt-BR",
          step: passosRegularizacao.map((s, i) => ({
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
          "@type": "ItemList",
          name: "Causas frequentes de SICAF irregular",
          numberOfItems: causasIrregularidade.length,
          itemListElement: causasIrregularidade.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.titulo,
            description: item.descricao,
            url: `${canonical}#causas`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Certidões e documentos para regularizar o SICAF",
          numberOfItems: certidoesTabela.length,
          itemListElement: certidoesTabela.map((c, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: c.doc,
            description: `Nível ${c.nivel} · Validade: ${c.validade} · ${c.acao}`,
            url: `${canonical}#certidoes`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(sicafIrregularFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "O que é SICAF irregular e como regularizar?",
            questionText:
              "Minha empresa está com SICAF irregular ou pendente — o que fazer para regularizar?",
            answerText: sicafIrregularMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: sicafIrregularMeta.title,
          description: sicafIrregularMeta.description,
          url: canonical,
          learningResourceType: "Guide",
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          teaches: [
            "O que é SICAF irregular e SICAF pendente",
            "Causas de irregularidade (certidão vencida, débitos, inabilitação)",
            "Como diagnosticar no Compras.gov.br",
            "Como regularizar passo a passo e validar o CRC",
          ],
          timeRequired: "PT11M",
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
          name: "Glossário SICAF irregular",
          description:
            "Termos essenciais sobre SICAF irregular, pendente, certidão vencida e regularização.",
          url: `${canonical}#glossario`,
          inLanguage: "pt-BR",
          hasDefinedTerm: glossarioSicafIrregular.map((g) => ({
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
            { name: sicafIrregularMeta.shortTitle, url: canonical },
          ]),
        ),
      },
    ],
  };
}
