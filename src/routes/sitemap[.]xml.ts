import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { faqCategories } from "@/components/site/faqData";

const BASE_URL = "https://cadbrasil.com.br";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/guia/cadastro-sicaf-passo-passo", changefreq: "weekly", priority: "0.95" },
          { path: "/o-que-e-sicaf", changefreq: "monthly", priority: "0.9" },
          { path: "/como-funciona", changefreq: "monthly", priority: "0.9" },
          { path: "/assistente", changefreq: "monthly", priority: "0.9" },
          { path: "/beneficios", changefreq: "monthly", priority: "0.8" },
          { path: "/faq", changefreq: "weekly", priority: "0.85" },
          ...faqCategories.map((c) => ({
            path: `/faq/${c.slug}`,
            changefreq: "weekly" as const,
            priority: "0.8",
          })),
        ];
        const nowIso = new Date().toISOString();

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <lastmod>${nowIso}</lastmod>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
