import { createFileRoute } from "@tanstack/react-router";
import { GuiaCadastroSicafPage } from "@/components/site/GuiaCadastroSicafPage";
import {
  GUIA_CADASTRO_SICAF_PATH,
  guiaCadastroSicafMeta,
  guiaFaqs,
  passosOficiais,
} from "@/data/guiaCadastroSicaf";
import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";

const ORIGIN = "https://cadbrasil.com.br";
const CANONICAL = `${ORIGIN}${GUIA_CADASTRO_SICAF_PATH}`;
const PUBLISHED = "2026-01-15T08:00:00-03:00";
const MODIFIED = "2026-05-27T12:00:00-03:00";

export const Route = createFileRoute("/guia/cadastro-sicaf-passo-passo")({
  head: () => ({
    meta: [
      { title: guiaCadastroSicafMeta.title },
      { name: "description", content: guiaCadastroSicafMeta.description },
      { name: "keywords", content: guiaCadastroSicafMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "googlebot", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: guiaCadastroSicafMeta.title },
      { property: "og:description", content: guiaCadastroSicafMeta.description },
      { property: "og:url", content: CANONICAL },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time", content: MODIFIED },
      { property: "article:section", content: "Guias SICAF" },
      { property: "article:tag", content: "cadastro sicaf" },
      { property: "article:tag", content: "passo a passo sicaf" },
      { property: "article:tag", content: "licitações públicas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: guiaCadastroSicafMeta.title },
      { name: "twitter:description", content: guiaCadastroSicafMeta.description },
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
          author: { "@type": "Organization", name: "CADBRASIL", url: ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: ORIGIN },
          mainEntityOfPage: CANONICAL,
          articleSection: "Guias e Tutoriais SICAF",
          keywords: guiaCadastroSicafMeta.keywords,
          inLanguage: "pt-BR",
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
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
            { name: "Início", url: `${ORIGIN}/` },
            { name: "Guia Cadastro SICAF", url: CANONICAL },
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
          "@type": "WebPage",
          name: guiaCadastroSicafMeta.title,
          description: guiaCadastroSicafMeta.description,
          url: CANONICAL,
          inLanguage: "pt-BR",
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["article h2", "article p"],
          },
        }),
      },
    ],
  }),
  component: GuiaCadastroSicafPage,
});
