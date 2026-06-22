import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  FileText,
  Gavel,
  Loader2,
  MessageCircle,
  Scale,
  Search,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { buildCadastroUrl } from "@/lib/cadastroUrl";
import { ferramentas } from "@/data/licitacoes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const destaques = [
  "Avaliação gratuita da plataforma",
  "Consultoria em licitações e SICAF",
  "Maior ecossistema de fornecedores do governo",
];

const ferramentasDestaque = [
  { icon: Search, label: "Boletins de licitações" },
  { icon: Gavel, label: "Encontrar licitações" },
  { icon: FileText, label: "Gerenciar documentos" },
  { icon: BarChart3, label: "Análise de mercado" },
  { icon: Bot, label: "Assistente CADBRASIL IA" },
  { icon: Scale, label: "Consultoria jurídica" },
  { icon: Shield, label: "Assessoria cadastral SICAF" },
  { icon: Users, label: "Gerenciar licitações" },
];

type FormState = {
  nome: string;
  cnpj: string;
  whatsapp: string;
  email: string;
};

const initialForm: FormState = {
  nome: "",
  cnpj: "",
  whatsapp: "",
  email: "",
};

function formatCnpj(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  if (digits.length <= 2) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  if (digits.length <= 8) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
  if (digits.length <= 12) {
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
  }
  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function LicitacoesCadastroPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((s) => ({ ...s, [key]: value }));
    if (status !== "loading") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const isValid =
    form.nome.trim().length >= 2 &&
    form.cnpj.replace(/\D/g, "").length === 14 &&
    form.whatsapp.replace(/\D/g, "").length >= 10 &&
    form.email.includes("@");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/licitacoes-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: "" }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Falha ao enviar cadastro");
      }

      setStatus("success");
      setForm(initialForm);

      window.setTimeout(() => {
        window.location.href = buildCadastroUrl();
      }, 1800);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-4">
          <BrandLogo asLink />
          <Link
            to="/licitacoes"
            className="text-sm font-medium text-muted-foreground hover:text-brand transition hidden sm:inline"
          >
            Conhecer a plataforma
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[oklch(0.22_0.08_260)] text-white py-12 sm:py-16">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sm font-semibold text-white/70 uppercase tracking-widest">
                +8.000 fornecedores · IA para licitantes
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-balance">
                Venda mais{" "}
                <span className="text-[oklch(0.82_0.08_250)]">para o governo</span>
              </h1>
              <p className="mt-4 text-lg text-white/85 leading-relaxed max-w-xl">
                Não perca tempo procurando editais. A CADBRASIL entrega oportunidades qualificadas, SICAF regular e
                gestão completa para você fechar mais contratos.
              </p>
              <ul className="mt-6 space-y-2">
                {destaques.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-[oklch(0.82_0.08_250)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white text-foreground shadow-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold">Cadastre-se gratuitamente</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Preencha os dados e nossa equipe ativa seu acesso à plataforma.
              </p>

              {status === "success" ? (
                <div className="mt-6 rounded-xl border border-success/30 bg-success/10 p-5 text-center">
                  <CheckCircle2 className="h-10 w-10 text-success mx-auto mb-3" />
                  <p className="font-semibold">Cadastro recebido!</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Redirecionando para o portal de credenciamento SICAF…
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input
                      id="nome"
                      name="nome"
                      autoComplete="name"
                      placeholder="Seu nome completo"
                      value={form.nome}
                      onChange={(e) => update("nome", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input
                      id="cnpj"
                      name="cnpj"
                      inputMode="numeric"
                      placeholder="00.000.000/0000-00"
                      value={form.cnpj}
                      onChange={(e) => update("cnpj", formatCnpj(e.target.value))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="tel"
                      placeholder="(00) 00000-0000"
                      value={form.whatsapp}
                      onChange={(e) => update("whatsapp", formatPhone(e.target.value))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      required
                    />
                  </div>

                  <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

                  {status === "error" && (
                    <p className="text-sm text-destructive" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={!isValid || status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.01] transition disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        Iniciar cadastro gratuito
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-muted-foreground leading-relaxed text-center">
                    Ao confirmar, concordo com os{" "}
                    <a href="/faq" className="text-brand underline underline-offset-2">
                      termos de uso
                    </a>{" "}
                    e política de privacidade da CADBRASIL.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center max-w-3xl mx-auto">
            Criamos tecnologia de ponta para licitantes
          </h2>
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
            Conheça as principais ferramentas da plataforma CADBRASIL
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ferramentasDestaque.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-border bg-card p-4 text-center shadow-card hover:border-brand/30 transition"
              >
                <f.icon className="h-6 w-6 text-brand mx-auto mb-2" />
                <p className="text-xs sm:text-sm font-medium leading-snug">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-accent/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
                <Sparkles className="h-3.5 w-3.5" /> Novidade
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold">
                A Inteligência Artificial chegou na CADBRASIL
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                IA treinada por especialistas em licitações e SICAF, conectada ao ecossistema completo da plataforma —
                resumos de edital, diagnóstico de pendências e consultor licitatório.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                { t: "Análise do edital", d: "Resumo completo e perguntas respondidas em minutos." },
                { t: "Diagnóstico SICAF", d: "Identifica níveis pendentes antes de você licitar." },
                { t: "Consultor licitatório", d: "IA especializada em Lei 14.133/2021 com segurança." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Bot className="h-4 w-4 text-brand" />
                    {item.t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            +8 mil fornecedores confiam na CADBRASIL
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Economize tempo e multiplique resultados com SICAF regular, documentos organizados e suporte humano real.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/licitacoes-cadastro"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow"
            >
              Iniciar cadastro gratuito
              <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppLink
              pageLabel="Cadastro plataforma licitações"
              intent="Quero me cadastrar na plataforma CADBRASIL de licitações."
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-semibold hover:border-brand/40 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs text-muted-foreground text-center">
            CADBRASIL PORTAL LICITACOES LTDA · CNPJ 52.841.613/0001-55 ·{" "}
            <Link to="/licitacoes" className="text-brand hover:underline">
              Plataforma de licitações
            </Link>
          </p>
          <p className="mt-2 text-[10px] text-muted-foreground/70 text-center max-w-3xl mx-auto">
            Ferramentas inspiradas no ecossistema de plataformas líderes de licitações no Brasil, adaptadas ao modelo
            CADBRASIL: {ferramentas.length} módulos integrados com foco em SICAF, documentos e resultado comercial.
          </p>
        </div>
      </section>
    </div>
  );
}
