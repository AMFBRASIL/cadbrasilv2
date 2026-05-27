import type { ContactPayload } from "@/lib/contact";
import {
  contactTypeLabel,
  formatClientConfirmationBody,
  formatContactEmailBody,
} from "@/lib/contact";

/** Caixa que recebe os formulários de contato do site */
export const CONTACT_INBOX_EMAIL = "documentos@fornecedordigital.com.br";

type MailgunConfig = {
  apiKey: string;
  domain: string;
  fromEmail: string;
  fromName: string;
  toEmail: string;
  apiUrl: string;
};

function getMailgunConfig(): MailgunConfig | null {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const fromEmail = process.env.MAILGUN_FROM_EMAIL;
  const fromName = process.env.MAILGUN_FROM_NAME;
  const toEmail = process.env.MAILGUN_TO_EMAIL?.trim() || CONTACT_INBOX_EMAIL;
  const apiUrl = process.env.MAILGUN_API_URL ?? "https://api.mailgun.net";

  if (!apiKey || !domain || !fromEmail || !fromName) {
    return null;
  }

  return { apiKey, domain, fromEmail, fromName, toEmail, apiUrl };
}

async function sendMailgunMessage(
  config: MailgunConfig,
  options: {
    to: string;
    subject: string;
    text: string;
    replyTo?: string;
  },
) {
  const form = new FormData();
  form.append("from", `${config.fromName} <${config.fromEmail}>`);
  form.append("to", options.to);
  form.append("subject", options.subject);
  form.append("text", options.text);
  if (options.replyTo) {
    form.append("h:Reply-To", options.replyTo);
  }

  const endpoint = `${config.apiUrl.replace(/\/$/, "")}/v3/${config.domain}/messages`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${config.apiKey}`).toString("base64")}`,
    },
    body: form,
  });

  const payload = (await response.json().catch(() => ({}))) as {
    message?: string;
    id?: string;
  };

  if (!response.ok) {
    const detail = payload.message ?? `HTTP ${response.status}`;
    throw new Error(`MAILGUN_SEND_FAILED: ${detail}`);
  }

  return { id: payload.id, message: payload.message };
}

export async function sendContactEmail(data: ContactPayload) {
  const config = getMailgunConfig();
  if (!config) {
    throw new Error("MAILGUN_NOT_CONFIGURED");
  }

  const tipo = contactTypeLabel(data.tipo);
  const teamSubject = `[Site CADBRASIL] Contato: ${tipo} — ${data.nome}`;
  const teamBody = formatContactEmailBody(data);

  const teamResult = await sendMailgunMessage(config, {
    to: config.toEmail,
    subject: teamSubject,
    text: teamBody,
    replyTo: `${data.nome} <${data.email}>`,
  });

  try {
    await sendMailgunMessage(config, {
      to: data.email,
      subject: "Recebemos sua mensagem — CADBRASIL",
      text: formatClientConfirmationBody(data),
    });
  } catch (error) {
    console.error("[mailgun] Falha ao enviar confirmação ao cliente:", error);
  }

  return teamResult;
}
