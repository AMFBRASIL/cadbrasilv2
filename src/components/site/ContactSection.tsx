import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Handshake,
  Layers,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  User,
  Wrench,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactTypeId } from "@/lib/contact";

const WHATSAPP_NUMBER = "551121220202";

const CONTACT_TYPE_UI = [
  { id: "cliente" as const, label: "Cliente / SICAF", icon: User, description: "Cadastro, regularização e suporte" },
  { id: "parceria" as const, label: "Parcerias", icon: Handshake, description: "Comercial, integrações e revenda" },
  { id: "projeto" as const, label: "Projetos", icon: Layers, description: "Demandas customizadas e escopo técnico" },
  { id: "servico" as const, label: "Serviços", icon: Wrench, description: "Consultoria e operação assistida" },
  { id: "trabalho" as const, label: "Trabalhe conosco", icon: Briefcase, description: "Vagas e oportunidades" },
  { id: "outro" as const, label: "Outros assuntos", icon: MessageCircle, description: "Dúvidas gerais" },
];

type FormState = {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  tipo: ContactTypeId;
  mensagem: string;
};

const initialForm: FormState = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  tipo: "cliente",
  mensagem: "",
};

export function ContactSection() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: "" }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Falha ao enviar mensagem");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.",
      );
    }
  };

  const isValid =
    form.nome.trim().length >= 2 &&
    form.email.includes("@") &&
    form.telefone.trim().length >= 8 &&
    form.mensagem.trim().length >= 10;

  return (
    <section id="contato" className="py-24 sm:py-32 bg-accent/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            <Sparkles className="h-3.5 w-3.5" /> Fale conosco
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance">
            Entre em contato com a CADBRASIL.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Clientes, parcerias, projetos, serviços, vagas ou qualquer outro assunto — nossa equipe responde em minutos.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          <aside className="space-y-4">
            <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
              <h3 className="font-display font-semibold text-lg">Canais diretos</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition"
                  >
                    <span className="h-9 w-9 rounded-xl bg-success/10 text-success grid place-items-center">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-medium text-foreground">WhatsApp</span>
                      (11) 2122-0202
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:documentos@fornecedordigital.com.br"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition"
                  >
                    <span className="h-9 w-9 rounded-xl bg-brand/10 text-brand grid place-items-center">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-medium text-foreground">E-mail</span>
                      documentos@fornecedordigital.com.br
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-9 w-9 rounded-xl bg-accent grid place-items-center text-foreground">
                    <Building2 className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-medium text-foreground">Atendimento</span>
                    Seg–Sex · 8h às 18h · Brasil
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-xs text-muted-foreground px-1">
              O formulário envia sua mensagem por e-mail para nossa equipe. Resposta média em até 3 minutos em horário comercial.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline px-1"
            >
              Prefere WhatsApp? Fale agora <ArrowRight className="h-4 w-4" />
            </a>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-card space-y-6"
          >
            <fieldset>
              <legend className="text-sm font-semibold text-foreground mb-3">
                Motivo do contato
              </legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {CONTACT_TYPE_UI.map((type) => {
                  const Icon = type.icon;
                  const active = form.tipo === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => update("tipo", type.id)}
                      className={`rounded-xl border p-3 text-left transition ${
                        active
                          ? "border-brand bg-brand/10 ring-1 ring-brand/30"
                          : "border-border hover:bg-accent"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${active ? "text-brand" : "text-muted-foreground"}`} />
                        <span>
                          <span className="block text-sm font-semibold">{type.label}</span>
                          <span className="block text-xs text-muted-foreground mt-0.5">{type.description}</span>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contato-nome">Nome completo *</Label>
                <Input
                  id="contato-nome"
                  value={form.nome}
                  onChange={(e) => update("nome", e.target.value)}
                  placeholder="Seu nome"
                  required
                  className="rounded-xl h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contato-email">E-mail *</Label>
                <Input
                  id="contato-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="rounded-xl h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contato-telefone">WhatsApp / Telefone *</Label>
                <Input
                  id="contato-telefone"
                  type="tel"
                  value={form.telefone}
                  onChange={(e) => update("telefone", e.target.value)}
                  placeholder="(11) 99999-9999"
                  required
                  className="rounded-xl h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contato-empresa">Empresa (opcional)</Label>
                <Input
                  id="contato-empresa"
                  value={form.empresa}
                  onChange={(e) => update("empresa", e.target.value)}
                  placeholder="Razão social ou CNPJ"
                  className="rounded-xl h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contato-mensagem">Mensagem *</Label>
              <Textarea
                id="contato-mensagem"
                value={form.mensagem}
                onChange={(e) => update("mensagem", e.target.value)}
                placeholder="Conte um pouco sobre sua necessidade, prazo e objetivo..."
                required
                rows={5}
                className="rounded-xl resize-y min-h-[120px]"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="submit"
                disabled={!isValid || status === "loading"}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100"
              >
                <Send className="h-4 w-4" />
                {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                Seus dados são usados apenas para retorno do contato (LGPD).
              </p>
            </div>

            {status === "success" && (
              <p className="text-sm text-success font-medium rounded-xl bg-success/10 border border-success/20 px-4 py-3">
                Mensagem enviada com sucesso! Enviamos uma cópia de confirmação para o seu e-mail. Nossa equipe retornará em breve.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive font-medium rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
