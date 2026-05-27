import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { CADASTRO_URL, WHATSAPP_URL } from "@/components/site/PageShell";

const links = [
  { to: "/o-que-e-sicaf", label: "O que é SICAF" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/assistente", label: "Assistente" },
  { to: "/beneficios", label: "Benefícios" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow">
              C
            </span>
            <span className="tracking-tight">
              CAD<span className="text-brand">BRASIL</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-foreground bg-accent" }}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#contato"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition"
            >
              Contato
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-foreground border border-border hover:bg-accent transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={CADASTRO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-brand text-brand-foreground shadow-glow hover:opacity-95 transition"
            >
              Fazer Cadastro
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass shadow-soft rounded-2xl p-4 animate-fade-up">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-accent text-sm font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg hover:bg-accent text-sm font-medium"
              >
                Contato
              </a>
              <a
                href={CADASTRO_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-4 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold"
              >
                Fazer Cadastro SICAF
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
