import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { FORNECEDOR_URL } from "@/components/site/PageShell";
import { cn } from "@/lib/utils";

const links = [
  { to: "/cadastro", label: "Cadastro SICAF" },
  { to: "/renovar-sicaf", label: "Renovação" },
  { to: "/proposta", label: "Proposta" },
  { to: "/o-que-e-sicaf-e-como-se-cadastrar", label: "O que é SICAF" },
  { to: "/faq", label: "FAQ" },
] as const;

/** Navbar leve — fundo claro, poucos itens. */
export function LightNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-shadow duration-300 bg-white/95 backdrop-blur-md border-b border-[#168821]/10",
        scrolled && "shadow-sm",
      )}
    >
      <div className="h-0.5 bg-[#168821]" aria-hidden />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16 gap-3">
          <BrandLogo asLink />

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-sm font-medium text-[#0a4d2c]/80 hover:text-[#0a4d2c] hover:bg-[#168821]/8 rounded-lg transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href={FORNECEDOR_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[#0a4d2c]/70 hover:text-[#0a4d2c] px-2"
            >
              Entrar
            </a>
            <CadastroLink className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-[#168821] text-white hover:bg-[#0a4d2c] transition">
              Cadastrar
            </CadastroLink>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#0a4d2c] hover:bg-[#168821]/10"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-[#168821]/10 pt-2">
            <div className="flex flex-col gap-0.5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-[#0a4d2c] font-medium hover:bg-[#168821]/8 text-sm"
                >
                  {l.label}
                </Link>
              ))}
              <WhatsAppLink
                intent="Quero falar sobre SICAF pelo menu da home."
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-[#0a4d2c] font-medium hover:bg-[#168821]/8 text-sm inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </WhatsAppLink>
              <CadastroLink
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-4 py-3 rounded-lg bg-[#168821] text-white font-semibold"
              >
                Cadastrar SICAF
              </CadastroLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
