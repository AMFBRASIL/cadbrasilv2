export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">C</span>
            CAD<span className="text-brand">BRASIL</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Especialistas em SICAF, regularização documental e participação em licitações públicas.
            Uma marca do grupo CADBRASIL.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Serviços</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#cta" className="hover:text-foreground">Cadastro SICAF</a></li>
            <li><a href="#cta" className="hover:text-foreground">Regularização SICAF</a></li>
            <li><a href="#cta" className="hover:text-foreground">Atualização SICAF</a></li>
            <li><a href="#cta" className="hover:text-foreground">Renovação de certidões</a></li>
            <li><a href="#assistente" className="hover:text-foreground">Assistente CADBRASIL</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Contato</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#contato" className="hover:text-foreground">Formulário de contato</a></li>
            <li><a href="https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo." className="hover:text-foreground">WhatsApp</a></li>
            <li><a href="mailto:documentos@fornecedordigital.com.br" className="hover:text-foreground">documentos@fornecedordigital.com.br</a></li>
            <li>Atendimento Seg–Sex · 8h às 18h</li>
            <li>Brasil · 100% remoto</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} CADBRASIL · Uma marca CADBRASIL. Todos os direitos reservados.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground">LGPD</a>
            <a href="#" className="hover:text-foreground">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
