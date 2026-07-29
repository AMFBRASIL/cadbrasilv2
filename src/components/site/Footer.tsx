import { BrandLogo } from "@/components/site/BrandLogo";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { SeoCadastroHub } from "@/components/site/SeoCadastroHub";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <BrandLogo />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Especialistas em SICAF, regularização documental e participação em licitações públicas.
            Uma marca do grupo CADBRASIL.
          </p>
        </div>
        <SeoCadastroHub
          className="space-y-2 text-sm text-muted-foreground"
          linkClassName="hover:text-foreground"
          title="Cadastro SICAF"
          titleClassName="text-sm font-semibold mb-3 text-foreground"
        />
        <div>
          <div className="text-sm font-semibold mb-3">Contato</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#contato" className="hover:text-foreground">
                Formulário de contato
              </a>
            </li>
            <li>
              <WhatsAppLink intent="Contato pelo rodapé do site." className="hover:text-foreground">
                WhatsApp
              </WhatsAppLink>
            </li>
            <li>
              <a href="mailto:documentos@fornecedordigital.com.br" className="hover:text-foreground">
                documentos@fornecedordigital.com.br
              </a>
            </li>
            <li>Atendimento Seg–Sex · 8h às 18h</li>
            <li>Brasil · 100% remoto</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row gap-4 justify-between text-xs text-muted-foreground">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} CADBRASIL · Assessoria SICAF e licitações públicas</p>
            <p>52.841.613/0001-55 · CADBRASIL PORTAL LICITACOES LTDA</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground">
              LGPD
            </a>
            <a href="#" className="hover:text-foreground">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
