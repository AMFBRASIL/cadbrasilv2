import { createFileRoute } from "@tanstack/react-router";
import { GuiaCadastroSicafPage } from "@/components/site/GuiaCadastroSicafPage";
import {
  GUIA_CADASTRO_SICAF_PATH,
  guiaCadastroSicafMeta,
  guiaFaqs,
  passosOficiais,
} from "@/data/guiaCadastroSicaf";
import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { OG_IMAGE, ROBOTS_INDEX, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";
import { documentosSicaf } from "@/data/guiaCadastroSicaf";

const CANONICAL = `${SITE_ORIGIN}${GUIA_CADASTRO_SICAF_PATH}`;

export const Route = createFileRoute("/guia/cadastro-sicaf-passo-passo")({
  head: () => ({
    meta: [
      { title: guiaCadastroSicafMeta.title },
      { name: "description", content: guiaCadastroSicafMeta.description },
      { name: "keywords", content: guiaCadastroSicafMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "robots", content: ROBOTS_INDEX },
      { name: "googlebot", content: ROBOTS_INDEX },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: guiaCadastroSicafMeta.title },
      { property: "og:description", content: guiaCadastroSicafMeta.description },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Guias SICAF" },
      { property: "article:tag", content: "cadastro sicaf" },
      { property: "article:tag", content: "passo a passo sicaf" },
      { property: "article:tag", content: "licitações públicas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: guiaCadastroSicafMeta.title },
      { name: "twitter:description", content: guiaCadastroSicafMeta.description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: CANONICAL },
      { rel: "alternate", hrefLang: "pt-BR", href: CANONICAL },
      { rel: "alternate", hrefLang: "x-default", href: CANONICAL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Como Fazer Cadastro no SICAF — Passo a Passo Completo 2026",
          description: guiaCadastroSicafMeta.description,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: CANONICAL,
          articleSection: "Guias e Tutoriais SICAF",
          keywords: guiaCadastroSicafMeta.keywords,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como fazer cadastro no SICAF passo a passo",
          description:
            "Tutorial para credenciar empresa no SICAF: certificado digital, Compras.gov.br, níveis de habilitação e CRC.",
          totalTime: "P14D",
          inLanguage: "pt-BR",
          step: passosOficiais.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.t,
            text: s.d,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Guias", url: `${SITE_ORIGIN}/faq` },
            { name: "Cadastro SICAF passo a passo", url: CANONICAL },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(guiaFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Documentos para cadastro SICAF",
          numberOfItems: documentosSicaf.length,
          itemListElement: documentosSicaf.map((row, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: row.doc,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: guiaCadastroSicafMeta.title,
          description: guiaCadastroSicafMeta.description,
          url: CANONICAL,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".guide-hero-lead", ".guide-summary"],
          },
        }),
      },
    ],
  }),
  component: GuiaCadastroSicafPage,
});
