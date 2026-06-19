import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { CadastroLink } from "@/components/site/CadastroLink";
import { FORNECEDOR_URL } from "@/components/site/PageShell";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

/** Mesmos itens do menu da versão anterior (Nav.tsx). */
const links = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia SICAF" },
  { to: "/o-que-e-sicaf", label: "O que é SICAF" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/assistente", label: "Assistente" },
  { to: "/beneficios", label: "Benefícios" },
  { to: "/faq", label: "FAQ" },
] as const;

export function GovNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-[#062a18] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex justify-end">
          <a
            href={FORNECEDOR_URL}
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-semibold text-white/90 hover:text-[#FFCD07] transition"
          >
            Acesso Fornecedor
          </a>
        </div>
      </div>
      {/* Faixa estilo gov.br */}
      <div className="h-1 bg-[#FFCD07]" aria-hidden />
      <div
        className={`transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/20" : ""
        } bg-[#0a4d2c] border-b border-[#168821]/40`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-3">
            <BrandLogo
              asLink
              className="text-white [&_.text-brand]:text-[#b8e6c8] [&_.text-muted-foreground]:text-white/50 [&_span.grid]:rounded-md [&_span.grid]:bg-white/15 [&_span.grid]:border [&_span.grid]:border-white/20 [&_span.grid]:shadow-none"
            />

            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center min-w-0 mx-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-2 py-2 text-[13px] xl:text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition whitespace-nowrap"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="#contato"
                className="px-2 py-2 text-[13px] xl:text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition whitespace-nowrap"
              >
                Contato
              </a>
            </nav>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <WhatsAppLink
                intent="Quero tirar dúvidas sobre SICAF pelo menu do site."
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-[#0a4d2c] bg-white hover:bg-[#f0f7f2] transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </WhatsAppLink>
              <CadastroLink
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-[#FFCD07] text-[#0a4d2c] hover:bg-[#ffe566] transition"
              >
                Fazer Cadastro
              </CadastroLink>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="lg:hidden pb-4 border-t border-white/10 pt-3">
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-md text-white/95 hover:bg-white/10 text-sm font-medium"
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-white/95 hover:bg-white/10 text-sm font-medium"
                >
                  Contato
                </a>
                <WhatsAppLink
                  intent="Quero tirar dúvidas sobre SICAF pelo menu mobile."
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-white/95 hover:bg-white/10 text-sm font-medium inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </WhatsAppLink>
                <CadastroLink
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center px-4 py-3 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-semibold"
                >
                  Fazer Cadastro
                </CadastroLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
