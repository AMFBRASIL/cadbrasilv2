import { z } from "zod";

export const licitacoesLeadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome"),
  cnpj: z
    .string()
    .trim()
    .min(14, "Informe um CNPJ válido")
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => v.length === 14, "CNPJ deve ter 14 dígitos"),
  whatsapp: z.string().trim().min(10, "Informe um WhatsApp válido"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .transform((v) => v.toLowerCase()),
  website: z.string().max(0).optional(),
});

export type LicitacoesLeadPayload = z.infer<typeof licitacoesLeadSchema>;

export function formatLicitacoesLeadBody(data: LicitacoesLeadPayload) {
  const cnpjFmt = data.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  return [
    "Novo lead — Plataforma de Licitações CADBRASIL",
    "",
    `Nome: ${data.nome}`,
    `CNPJ: ${cnpjFmt}`,
    `WhatsApp: ${data.whatsapp}`,
    `E-mail: ${data.email}`,
    `Origem: /licitacoes-cadastro`,
    "",
    "---",
    `Enviado em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`,
  ].join("\n");
}

export function formatLicitacoesLeadConfirmation(data: LicitacoesLeadPayload) {
  return [
    `Olá, ${data.nome}!`,
    "",
    "Recebemos seu cadastro na plataforma CADBRASIL de Licitações.",
    "Nossa equipe entrará em contato em breve pelo WhatsApp ou e-mail informado para ativar seu acesso.",
    "",
    "Enquanto isso, você pode iniciar o credenciamento SICAF em:",
    "https://cadastro.cadbrasil.com.br",
    "",
    "---",
    "CADBRASIL · Plataforma de Licitações e SICAF",
    "https://cadbrasil.com.br",
  ].join("\n");
}
