"use client";

import { useId, useState } from "react";
import { Calculator, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BLL_PLANO_TRIMESTRAL, BLL_TAXA_PERCENTUAL, BLL_TAXA_TETO } from "@/data/bllComprasGuia";
import { cn } from "@/lib/utils";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function parseCurrency(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits ? Number(digits) / 100 : 0;
}

function formatCurrencyInput(value: string) {
  const n = parseCurrency(value);
  return n ? brl.format(n) : "";
}

export function BllFeeCalculator() {
  const id = useId();
  const [valorLote, setValorLote] = useState(brl.format(25000));
  const [lotes, setLotes] = useState(2);

  const valor = parseCurrency(valorLote);
  const taxaPorLote = Math.min(valor * BLL_TAXA_PERCENTUAL, BLL_TAXA_TETO);
  const totalExito = taxaPorLote * lotes;
  const planoMelhor = totalExito > BLL_PLANO_TRIMESTRAL;
  const economia = Math.abs(totalExito - BLL_PLANO_TRIMESTRAL);
  const atingiuTeto = valor * BLL_TAXA_PERCENTUAL >= BLL_TAXA_TETO;

  return (
    <div className="not-prose rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <p className="font-display text-lg font-bold">Calculadora de taxas BLL</p>
          <p className="text-sm text-muted-foreground">Taxa por êxito x plano trimestral, por trimestre</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${id}-valor`}>Valor médio de cada lote vencido</Label>
          <Input
            id={`${id}-valor`}
            inputMode="numeric"
            value={valorLote}
            onChange={(e) => setValorLote(formatCurrencyInput(e.target.value))}
            className="h-12 rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${id}-lotes`}>Lotes vencidos por trimestre: {lotes}</Label>
          <input
            id={`${id}-lotes`}
            type="range"
            min={1}
            max={20}
            value={lotes}
            onChange={(e) => setLotes(Number(e.target.value))}
            className="h-12 w-full accent-[var(--brand)]"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div
          className={cn(
            "rounded-2xl border p-5 transition",
            !planoMelhor ? "border-success/40 bg-success/5" : "border-border",
          )}
        >
          <p className="text-sm font-semibold text-muted-foreground">Taxa por êxito</p>
          <p className="mt-1 font-display text-2xl font-bold tabular-nums">{brl.format(totalExito)}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {brl.format(taxaPorLote)} por lote{atingiuTeto ? " (teto de R$ 600 atingido)" : ""}
          </p>
        </div>
        <div
          className={cn(
            "rounded-2xl border p-5 transition",
            planoMelhor ? "border-success/40 bg-success/5" : "border-border",
          )}
        >
          <p className="text-sm font-semibold text-muted-foreground">Plano trimestral</p>
          <p className="mt-1 font-display text-2xl font-bold tabular-nums">{brl.format(BLL_PLANO_TRIMESTRAL)}</p>
          <p className="mt-1 text-xs text-muted-foreground">Valor fixo a cada 90 dias</p>
        </div>
      </div>

      <p className="mt-5 flex items-start gap-2 rounded-2xl bg-accent/50 p-4 text-sm leading-relaxed" aria-live="polite">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
        {economia < 1 ? (
          <span>Os dois modelos custam praticamente o mesmo neste cenário.</span>
        ) : planoMelhor ? (
          <span>
            Neste cenário, o <strong>plano trimestral</strong> sai {brl.format(economia)} mais barato por trimestre.
          </span>
        ) : (
          <span>
            Neste cenário, a <strong>taxa por êxito</strong> sai {brl.format(economia)} mais barata por trimestre — e
            você só paga se vencer.
          </span>
        )}
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        Simulação com base no Regulamento e na página oficial da BLL (out/2026). Não considera disputas por maior
        desconto, leilões ou reajustes futuros.
      </p>
    </div>
  );
}
