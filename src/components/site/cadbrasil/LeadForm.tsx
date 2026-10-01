"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2, Lock, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { leadObjectives, type LeadObjectiveId } from "@/data/cadbrasilPage";
import { trackLeadConversion } from "@/lib/analytics";
import { getStoredTrackingParams } from "@/lib/cadastroUrl";
import { cn } from "@/lib/utils";
import { btnPrimary } from "@/components/site/cadbrasil/styles";

type FormState = {
  nome: string;
  empresa: string;
  cnpj: string;
  whatsapp: string;
  email: string;
  objetivo: LeadObjectiveId | "";
  website: string;
};

const initialForm: FormState = {
  nome: "",
  empresa: "",
  cnpj: "",
  whatsapp: "",
  email: "",
  objetivo: "",
  website: "",
};

function formatCnpjInput(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 14);
  return d
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

function formatPhoneInput(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const fieldClass = "h-12 rounded-xl bg-background";

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((s) => ({ ...s, [key]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const isValid =
    form.nome.trim().length >= 2 &&
    form.empresa.trim().length >= 2 &&
    form.cnpj.replace(/\D/g, "").length === 14 &&
    form.whatsapp.replace(/\D/g, "").length >= 10 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.objetivo !== "";

  const objectiveLabel = (id: FormState["objetivo"]) =>
    leadObjectives.find((o) => o.id === id)?.label ?? "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid || status === "loading") return;
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/cadbrasil-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tracking: getStoredTrackingParams() }),
      });
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Não foi possível enviar. Tente novamente.");
      }

      trackLeadConversion({
        lead_source: "cadbrasil_landing",
        lead_objetivo: form.objetivo,
        form_name: "falar_com_especialista",
      });
      setSubmitted(form);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.");
    }
  };

  if (status === "success" && submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl font-bold">Recebemos sua solicitação!</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Um especialista CADBrasil vai entrar em contato pelo WhatsApp ou e-mail informado. Enviamos uma
          confirmação para <strong className="text-foreground">{submitted.email}</strong>.
        </p>
        <WhatsAppLink
          intent={objectiveLabel(submitted.objetivo)}
          pageLabel="CADBrasil — Tecnologia e assessoria em licitações"
          detail={[
            `Nome: ${submitted.nome}`,
            `Empresa: ${submitted.empresa}`,
            `CNPJ: ${submitted.cnpj}`,
            "Acabei de enviar o formulário do site.",
          ].join("\n")}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-success text-success-foreground font-semibold shadow-soft hover:scale-[1.02] transition"
        >
          <MessageCircle className="h-4 w-4" /> Adiantar pelo WhatsApp
        </WhatsAppLink>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="lead-nome">Nome *</Label>
          <Input
            id="lead-nome"
            autoComplete="name"
            value={form.nome}
            onChange={(e) => update("nome", e.target.value)}
            placeholder="Seu nome"
            required
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-empresa">Empresa *</Label>
          <Input
            id="lead-empresa"
            autoComplete="organization"
            value={form.empresa}
            onChange={(e) => update("empresa", e.target.value)}
            placeholder="Nome da empresa"
            required
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-cnpj">CNPJ *</Label>
          <Input
            id="lead-cnpj"
            inputMode="numeric"
            value={form.cnpj}
            onChange={(e) => update("cnpj", formatCnpjInput(e.target.value))}
            placeholder="00.000.000/0000-00"
            required
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-whatsapp">WhatsApp *</Label>
          <Input
            id="lead-whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", formatPhoneInput(e.target.value))}
            placeholder="(11) 99999-9999"
            required
            className={fieldClass}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="lead-email">E-mail *</Label>
          <Input
            id="lead-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="voce@empresa.com.br"
            required
            className={fieldClass}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="lead-objetivo">Como podemos ajudar sua empresa? *</Label>
          <select
            id="lead-objetivo"
            value={form.objetivo}
            onChange={(e) => update("objetivo", e.target.value as FormState["objetivo"])}
            required
            className={cn(
              "flex w-full border border-input px-3 text-base md:text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              fieldClass,
              form.objetivo === "" && "text-muted-foreground",
            )}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {leadObjectives.map((o) => (
              <option key={o.id} value={o.id} className="text-foreground">
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="lead-website">Website</label>
        <input
          id="lead-website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={!isValid || status === "loading"}
        className={cn(
          btnPrimary,
          "w-full uppercase tracking-wide disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100",
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
          </>
        ) : (
          <>
            Falar com um especialista <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      {status === "error" && (
        <p
          role="alert"
          className="text-sm text-destructive font-medium rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3"
        >
          {errorMessage}
        </p>
      )}

      <p className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
        <Lock className="h-3.5 w-3.5 mt-0.5 shrink-0" />
        Seus dados são usados apenas para o retorno do especialista CADBrasil, conforme a LGPD. Sem spam.
      </p>
    </form>
  );
}
