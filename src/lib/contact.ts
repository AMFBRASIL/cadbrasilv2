import { z } from "zod";

export const CONTACT_TYPES = [
  { id: "cliente", label: "Cliente / SICAF" },
  { id: "parceria", label: "Parcerias" },
  { id: "projeto", label: "Projetos" },
  { id: "servico", label: "Serviços" },
  { id: "trabalho", label: "Trabalhe conosco" },
  { id: "outro", label: "Outros assuntos" },
] as const;

export type ContactTypeId = (typeof CONTACT_TYPES)[number]["id"];

export const contactPayloadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome"),
  email: z.string().trim().email("E-mail inválido"),
  telefone: z.string().trim().min(8, "Informe um telefone válido"),
  empresa: z.string().trim().optional(),
  tipo: z.enum(["cliente", "parceria", "projeto", "servico", "trabalho", "outro"]),
  mensagem: z.string().trim().min(10, "Mensagem muito curta"),
  website: z.string().max(0).optional(),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

export function contactTypeLabel(tipo: ContactTypeId) {
  return CONTACT_TYPES.find((t) => t.id === tipo)?.label ?? tipo;
}

export function formatContactEmailBody(data: ContactPayload) {
  const tipo = contactTypeLabel(data.tipo);
  return [
    "Novo contato recebido pelo site CADBRASIL",
    "",
    `Motivo: ${tipo}`,
    `Nome: ${data.nome}`,
    `E-mail: ${data.email}`,
    `Telefone/WhatsApp: ${data.telefone}`,
    data.empresa ? `Empresa: ${data.empresa}` : null,
    "",
    "Mensagem:",
    data.mensagem,
    "",
    "---",
    `Enviado em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function formatClientConfirmationBody(data: ContactPayload) {
  const tipo = contactTypeLabel(data.tipo);
  return [
    `Olá, ${data.nome}!`,
    "",
    "Recebemos sua mensagem pelo site da CADBRASIL com sucesso.",
    "Nossa equipe já foi notificada e retornará em breve no e-mail ou WhatsApp informado.",
    "",
    "Resumo do seu contato:",
    `Motivo: ${tipo}`,
    data.empresa ? `Empresa: ${data.empresa}` : null,
    `Telefone/WhatsApp: ${data.telefone}`,
    "",
    "Sua mensagem:",
    data.mensagem,
    "",
    "---",
    "CADBRASIL · Especialistas em SICAF",
    "https://cadbrasil.com.br",
    "documentos@fornecedordigital.com.br",
  ]
    .filter(Boolean)
    .join("\n");
}
