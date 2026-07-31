import { useMemo, useState } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { homeFaqItems } from "@/data/homeFaq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return homeFaqItems;
    return homeFaqItems.filter((it) => `${it.q} ${it.a}`.toLowerCase().includes(normalized));
  }, [query]);

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
        <div className="mt-8 relative">
          <Search className="h-4 w-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite sua dúvida (cadastro, custos, regularização...)"
            className="w-full rounded-2xl bg-card border border-border pl-11 pr-4 py-3 text-sm outline-none ring-0 focus:border-brand/50"
            aria-label="Buscar perguntas frequentes"
          />
        </div>
        <div className="mt-12 space-y-3">
          {filteredItems.map((it, i) => {
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
          {filteredItems.length === 0 && (
            <div className="rounded-2xl bg-card border border-border p-6 text-sm text-muted-foreground text-center">
              Nenhum resultado encontrado. Fale com nossa equipe no WhatsApp para um diagnóstico
              gratuito.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
