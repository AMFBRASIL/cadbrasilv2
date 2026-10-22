import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { CadastroLink } from "@/components/site/CadastroLink";
import { MegaMenuDesktop, MegaMenuMobile } from "@/components/site/MegaMenu";
import { FORNECEDOR_URL } from "@/components/site/PageShell";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

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
      <div className="h-1 bg-[#FFCD07]" aria-hidden />
      <div
        className={`transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/20" : ""
        } bg-[#0a4d2c] border-b border-[#168821]/40`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-3 gap-2">
            <BrandLogo
              asLink
              className="text-white [&_.text-brand]:text-[#b8e6c8] [&_.text-muted-foreground]:text-white/50 [&_span.grid]:rounded-md [&_span.grid]:bg-white/15 [&_span.grid]:border [&_span.grid]:border-white/20 [&_span.grid]:shadow-none"
            />

            <MegaMenuDesktop tone="gov" />

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <WhatsAppLink
                intent="Quero tirar dúvidas sobre SICAF pelo menu do site."
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-[#0a4d2c] bg-white hover:bg-[#f0f7f2] transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </WhatsAppLink>
              <CadastroLink className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-[#FFCD07] text-[#0a4d2c] hover:bg-[#ffe566] transition">
                Fazer Cadastro
              </CadastroLink>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="lg:hidden max-h-[min(80vh,40rem)] overflow-y-auto pb-4 border-t border-white/10 pt-3">
              <MegaMenuMobile tone="gov" onNavigate={() => setOpen(false)} />
              <WhatsAppLink
                intent="Quero tirar dúvidas sobre SICAF pelo menu mobile."
                onClick={() => setOpen(false)}
                className="mt-1 px-3 py-3 rounded-md text-white/95 hover:bg-white/10 text-sm font-medium inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </WhatsAppLink>
              <CadastroLink
                onClick={() => setOpen(false)}
                className="mt-2 block text-center px-4 py-3 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-semibold"
              >
                Fazer Cadastro
              </CadastroLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
