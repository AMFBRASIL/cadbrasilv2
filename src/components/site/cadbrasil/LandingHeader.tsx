import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { LEAD_FORM_ANCHOR } from "@/components/site/cadbrasil/styles";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#faq", label: "Dúvidas" },
];

export function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <BrandLogo asLink />
        <nav aria-label="Seções da página" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-lg px-3 py-2 transition hover:bg-accent hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={LEAD_FORM_ANCHOR}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-glow transition hover:opacity-95"
        >
          <span className="hidden sm:inline">Falar com um especialista</span>
          <span className="sm:hidden">Especialista</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
