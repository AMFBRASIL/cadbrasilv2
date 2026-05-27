import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  { q: "O que é o SICAF e por que minha empresa precisa?", a: "SICAF é o Sistema de Cadastramento Unificado de Fornecedores. Ele habilita sua empresa a participar de licitações públicas em todo o Brasil. Sem cadastro ativo e regular, você fica de fora dos pregões e dispensas." },
  { q: "Quanto tempo leva o cadastro com a CADBRASIL?", a: "Na maioria dos casos, em até 24 horas com toda a documentação em mãos. Casos com pendências fiscais podem levar mais tempo — e nós resolvemos cada uma delas." },
  { q: "O que é o Assistente CADBRASIL?", a: "É um aplicativo leve que se instala no computador da sua empresa e conecta sua operação ao nosso time. Ele identifica vencimentos, renova certidões automaticamente e permite suporte remoto via AnyDesk." },
  { q: "Como funciona a renovação e atualização SICAF?", a: "Monitoramos suas certidões 24/7. Antes de qualquer vencimento, nossa IA inicia o processo e nosso time finaliza. Você é avisado quando tudo está concluído." },
  { q: "Quanto custa?", a: "Trabalhamos com planos personalizados conforme o porte e a complexidade da sua empresa. Fale conosco no WhatsApp e enviamos uma proposta clara em minutos." },
  { q: "Vocês atendem em todo o Brasil?", a: "Sim. 100% remoto, em todos os estados, com suporte via WhatsApp, telefone e AnyDesk." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32 bg-accent/30">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance">
            Perguntas frequentes.
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="rounded-2xl bg-card border border-border overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-accent transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg">{it.q}</span>
                  <span className="shrink-0 h-8 w-8 rounded-full bg-accent grid place-items-center">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
