import { SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";

export const SCHEMA_AUTHOR = {
  "@type": "Organization" as const,
  name: "CADBRASIL",
  url: SITE_ORIGIN,
};

/** QAPage completo — atende datePublished, author e url exigidos pelo Google Search Console. */
export function qaPageJsonLd(opts: {
  questionName: string;
  questionText: string;
  answerText: string;
  pageUrl: string;
}) {
  const { questionName, questionText, answerText, pageUrl } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntityOfPage: pageUrl,
    datePublished: SEO_PUBLISHED,
    dateModified: SEO_MODIFIED,
    author: SCHEMA_AUTHOR,
    mainEntity: {
      "@type": "Question",
      name: questionName,
      text: questionText,
      answerCount: 1,
      datePublished: SEO_PUBLISHED,
      author: SCHEMA_AUTHOR,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerText,
        datePublished: SEO_PUBLISHED,
        url: pageUrl,
        author: SCHEMA_AUTHOR,
      },
    },
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[],
  pageUrl?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { mainEntityOfPage: pageUrl } : {}),
    datePublished: SEO_PUBLISHED,
    dateModified: SEO_MODIFIED,
    author: SCHEMA_AUTHOR,
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      datePublished: SEO_PUBLISHED,
      author: SCHEMA_AUTHOR,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
        datePublished: SEO_PUBLISHED,
        ...(pageUrl ? { url: pageUrl } : {}),
        author: SCHEMA_AUTHOR,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
