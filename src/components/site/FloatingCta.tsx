import { MessageCircle } from "lucide-react";

export function FloatingCta() {
  return (
    <>
      {/* WhatsApp float */}
      <a
        href="https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 h-14 w-14 rounded-full bg-success text-success-foreground grid place-items-center shadow-glow pulse-ring hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Mobile sticky bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur border-t border-border">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo."
            target="_blank"
            rel="noreferrer"
            className="text-center px-4 py-3 rounded-xl bg-success text-success-foreground font-semibold text-sm"
          >
            WhatsApp
          </a>
          <a
            href="#cta"
            className="text-center px-4 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold text-sm"
          >
            Fazer Cadastro
          </a>
        </div>
      </div>
    </>
  );
}
