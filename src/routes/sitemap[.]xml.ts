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
          { path: "/licitacoes", changefreq: "weekly", priority: "0.99" },
          { path: "/licitacoes-cadastro", changefreq: "weekly", priority: "0.99" },
          { path: "/planos", changefreq: "weekly", priority: "0.98" },
          { path: "/o-que-e-sicaf-e-como-se-cadastrar", changefreq: "weekly", priority: "0.98" },
          { path: "/sicaf-niveis", changefreq: "weekly", priority: "0.98" },
          { path: "/servicos-documentacao", changefreq: "weekly", priority: "0.98" },
          { path: "/cadastro-sicaf-passo-a-passo", changefreq: "weekly", priority: "0.98" },
          { path: "/comprasnet", changefreq: "weekly", priority: "0.97" },
          { path: "/como-regularizar-sicaf-empresa", changefreq: "weekly", priority: "0.94" },
          { path: "/cadastro-sicaf-licitacao-publica", changefreq: "weekly", priority: "0.94" },
          { path: "/documentos-necessarios-cadastro-sicaf", changefreq: "weekly", priority: "0.94" },
          { path: "/documentacao-sicaf", changefreq: "weekly", priority: "0.95" },
          { path: "/quem-pode-se-cadastrar-no-sicaf", changefreq: "weekly", priority: "0.95" },
          { path: "/cadastrar-no-sicaf", changefreq: "weekly", priority: "0.97" },
          {
            path: "/como-cadastrar-no-sicaf-e-vender-para-o-governo",
            changefreq: "weekly",
            priority: "0.98",
          },
          { path: "/cadastro", changefreq: "weekly", priority: "0.99" },
          { path: "/como-atualizar-certificados-sicaf", changefreq: "weekly", priority: "0.94" },
          { path: "/como-participar-de-licitacao", changefreq: "weekly", priority: "0.93" },
          { path: "/como-participar-de-licitacao-resumo", changefreq: "weekly", priority: "0.94" },
          { path: "/cadastro-fornecedor-governo", changefreq: "weekly", priority: "0.93" },
          { path: "/pregao-eletronico", changefreq: "weekly", priority: "0.93" },
          { path: "/documentacao-licitacao", changefreq: "weekly", priority: "0.93" },
          { path: "/cadastro-sicaf", changefreq: "weekly", priority: "0.92" },
          { path: "/credenciamento", changefreq: "weekly", priority: "0.9" },
          { path: "/renovacao-sicaf", changefreq: "weekly", priority: "0.9" },
          { path: "/empresa-inapta", changefreq: "weekly", priority: "0.86" },
          { path: "/emitir-crc", changefreq: "weekly", priority: "0.9" },
          { path: "/regularidade-fiscal", changefreq: "weekly", priority: "0.9" },
          { path: "/como-fazer-cadastro-no-sicaf", changefreq: "weekly", priority: "0.9" },
          { path: "/plataforma-digital", changefreq: "weekly", priority: "0.85" },
          { path: "/como-cadastrar-empresa-sicaf", changefreq: "weekly", priority: "0.9" },
          { path: "/autoatendimento-sicaf", changefreq: "weekly", priority: "0.85" },
          { path: "/sicaf-digital", changefreq: "weekly", priority: "0.88" },
          { path: "/sicaf-cadastro-unificado-de-fornecedores", changefreq: "weekly", priority: "0.88" },
          { path: "/credenciamento-sicaf-digital", changefreq: "weekly", priority: "0.88" },
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
