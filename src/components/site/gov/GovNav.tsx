import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, ExternalLink } from "lucide-react";
import { CADASTRO_URL, WHATSAPP_URL } from "@/components/site/PageShell";

const links = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia SICAF" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/faq", label: "FAQ" },
  { to: "/assistente", label: "Assistente" },
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
      {/* Faixa estilo gov.br */}
      <div className="h-1 bg-[#FFCD07]" aria-hidden />
      <div
        className={`transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/20" : ""
        } bg-[#0a4d2c] border-b border-[#168821]/40`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-2 [&_.text-brand]:text-[#b8e6c8] [&_span]:text-white">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-white/15 text-white font-bold text-sm border border-white/20">
                C
              </span>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                CAD <span className="text-white/50 font-normal mx-1">|</span>{" "}
                <span className="text-[#b8e6c8]">BRASIL</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://www.gov.br/compras"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white inline-flex items-center gap-1"
              >
                Compras.gov.br <ExternalLink className="h-3 w-3" />
              </a>
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-[#0a4d2c] bg-white hover:bg-[#f0f7f2] transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={CADASTRO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-[#FFCD07] text-[#0a4d2c] hover:bg-[#ffe566] transition"
              >
                Fazer Cadastro
              </a>
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
                  href={CADASTRO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 text-center px-4 py-3 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-semibold"
                >
                  Fazer Cadastro SICAF
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
