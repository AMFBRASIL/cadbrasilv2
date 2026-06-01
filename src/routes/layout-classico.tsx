import { createFileRoute } from "@tanstack/react-router";
import { HomeClassicPage } from "@/components/site/HomeClassicPage";
import { SITE_ORIGIN } from "@/lib/seo";

/** Backup do layout anterior — não indexar. */
export const Route = createFileRoute("/layout-classico")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { name: "googlebot", content: "noindex, follow" },
      { title: "CADBRASIL — Layout clássico (arquivo)" },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/layout-classico` }],
  }),
  component: LayoutClassicoPage,
});

function LayoutClassicoPage() {
  return <HomeClassicPage />;
}
