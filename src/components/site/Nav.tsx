import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { CadastroLink } from "@/components/site/CadastroLink";
import { MegaMenuDesktop, MegaMenuMobile } from "@/components/site/MegaMenu";
import { FORNECEDOR_URL } from "@/components/site/PageShell";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

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
        scrolled ? "py-0" : "py-0"
      }`}
    >
      <div className="bg-foreground/95 text-background">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex justify-end">
          <a
            href={FORNECEDOR_URL}
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-semibold text-background/90 hover:text-background transition"
          >
            Acesso Fornecedor
          </a>
        </div>
      </div>
      <div className={`mx-auto max-w-7xl px-4 ${scrolled ? "pt-2" : "pt-4"}`}>
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <BrandLogo asLink />

          <MegaMenuDesktop />

          <div className="hidden lg:flex items-center gap-2">
            <WhatsAppLink
              intent="Quero tirar dúvidas sobre SICAF pelo menu do site."
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-foreground border border-border hover:bg-accent transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </WhatsAppLink>
            <CadastroLink className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-brand text-brand-foreground shadow-glow hover:opacity-95 transition">
              Fazer Cadastro
            </CadastroLink>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 max-h-[min(80vh,40rem)] overflow-y-auto glass shadow-soft rounded-2xl p-4 animate-fade-up">
            <MegaMenuMobile onNavigate={() => setOpen(false)} />
            <CadastroLink
              onClick={() => setOpen(false)}
              className="mt-3 block text-center px-4 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold"
            >
              Fazer Cadastro SICAF
            </CadastroLink>
          </div>
        )}
      </div>
    </header>
  );
}
