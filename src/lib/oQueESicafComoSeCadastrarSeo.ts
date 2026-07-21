import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  passosOficiais,
  glossarioSicaf,
  documentosSicaf,
  niveisSicaf,
} from "@/data/guiaCadastroSicaf";
import {
  editorialTrust,
  fontesOficiais,
  sicafCadastroFaqs,
  sicafCadastroMeta,
  passosCadastroResumo,
} from "@/data/oQueESicafComoSeCadastrar";
import { OG_IMAGE, robotsMetaTags, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

/** Data desta revisão substantiva do guia pilar */
const PAGE_MODIFIED = "2026-07-21T12:00:00-03:00";

export function buildSicafCadastroHead() {
  const canonical = `${SITE_ORIGIN}${sicafCadastroMeta.path}`;

  const howToSteps = passosOficiais.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.t,
    text: s.d,
    url: `${canonical}#passo-${i + 1}`,
  }));

  return {
    meta: [
      { title: sicafCadastroMeta.title },
      { name: "description", content: sicafCadastroMeta.description },
      { name: "keywords", content: sicafCadastroMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "citation_title", content: sicafCadastroMeta.title },
      { name: "citation_author", content: "CADBRASIL" },
      { name: "citation_publication_date", content: "2026-01-15" },
      { name: "citation_online_date", content: "2026-07-21" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: sicafCadastroMeta.title },
      { property: "og:description", content: sicafCadastroMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Guia SICAF — o que é e como se cadastrar | CADBRASIL" },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: PAGE_MODIFIED },
      { property: "article:section", content: "SICAF e cadastro" },
      { property: "article:tag", content: "SICAF" },
      { property: "article:tag", content: "cadastro fornecedor" },
      { property: "article:tag", content: "Compras.gov.br" },
      { property: "article:tag", content: "CRC" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: sicafCadastroMeta.title },
      { name: "twitter:description", content: sicafCadastroMeta.description },
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
          headline: sicafCadastroMeta.title,
          alternativeHeadline: "Guia completo: o que é SICAF e como cadastrar sua empresa",
          description: sicafCadastroMeta.description,
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
            logo: {
              "@type": "ImageObject",
              url: OG_IMAGE,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonical,
          },
          articleSection: "SICAF — o que é e como se cadastrar",
          keywords: sicafCadastroMeta.keywords,
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          datePublished: SEO_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          about: [
            { "@type": "Thing", name: "SICAF", description: sicafCadastroMeta.quickAnswer },
            { "@type": "Thing", name: "Cadastro de fornecedor governo federal" },
            { "@type": "Thing", name: "Compras.gov.br" },
          ],
          citation: fontesOficiais.map((f) => ({
            "@type": "CreativeWork",
            name: f.label,
            url: f.href,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como se cadastrar no SICAF passo a passo",
          description:
            "Procedimento completo para credenciar empresa no SICAF via Compras.gov.br — do e-CNPJ ao CRC Regular.",
          image: OG_IMAGE,
          totalTime: "P14D",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description: "Credenciamento oficial gratuito; e-CNPJ e assessoria à parte",
          },
          supply: [
            { "@type": "HowToSupply", name: "CNPJ ativo" },
            { "@type": "HowToSupply", name: "Documentos societários e certidões em PDF" },
          ],
          tool: [
            { "@type": "HowToTool", name: "Certificado digital e-CNPJ A1 ou A3" },
            { "@type": "HowToTool", name: "Portal Compras.gov.br" },
          ],
          inLanguage: "pt-BR",
          step: howToSteps,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Resumo: cadastro SICAF em 6 passos",
          description: "Fluxo resumido para credenciamento SICAF",
          inLanguage: "pt-BR",
          step: passosCadastroResumo.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.t,
            text: s.d,
            url: `${canonical}#resposta-rapida`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Níveis de habilitação SICAF I a VI",
          numberOfItems: niveisSicaf.length,
          itemListElement: niveisSicaf.map((n, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: `Nível ${n.n} — ${n.t}`,
            description: n.d,
            url: `${canonical}#niveis`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Documentos para cadastro SICAF",
          numberOfItems: documentosSicaf.length,
          itemListElement: documentosSicaf.map((d, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: d.doc,
            description: `Níveis ${d.niveis} · Validade: ${d.prazo}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Guias SICAF", url: `${SITE_ORIGIN}/faq` },
            { name: "O que é SICAF e como se cadastrar", url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(sicafCadastroFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "O que é SICAF e como se cadastrar?",
            questionText: "O que é o SICAF e como faço para cadastrar minha empresa para vender ao governo?",
            answerText: sicafCadastroMeta.quickAnswer,
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
          name: sicafCadastroMeta.title,
          description: sicafCadastroMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          datePublished: SEO_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          about: {
            "@type": "Thing",
            name: "SICAF — Sistema de Cadastramento Unificado de Fornecedores",
            description: sicafCadastroMeta.quickAnswer,
            sameAs: ["https://www.gov.br/compras"],
          },
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".guide-hero-lead", ".guide-summary", ".guide-quick-answer"],
          },
          significantLink: [
            `${SITE_ORIGIN}/cadastro-sicaf-passo-a-passo`,
            `${SITE_ORIGIN}/sicaf-niveis`,
            `${SITE_ORIGIN}/servicos-documentacao`,
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: sicafCadastroMeta.title,
          description: sicafCadastroMeta.description,
          url: canonical,
          learningResourceType: "Guide",
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          teaches: [
            "O que é SICAF",
            "Como se cadastrar no SICAF",
            "Níveis de habilitação I a VI",
            "Documentação e CRC",
          ],
          timeRequired: "PT18M",
          dateModified: PAGE_MODIFIED,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Glossário SICAF",
          url: `${canonical}#glossario`,
          hasDefinedTerm: glossarioSicaf.map((g) => ({
            "@type": "DefinedTerm",
            name: g.term,
            description: g.def,
            inDefinedTermSet: `${canonical}#glossario`,
          })),
        }),
      },
    ],
  };
}
