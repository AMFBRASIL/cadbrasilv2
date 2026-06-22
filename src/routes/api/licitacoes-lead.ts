import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { licitacoesLeadSchema } from "@/lib/licitacoesLead";
import { sendLicitacoesLeadEmail } from "@/lib/mailgun";

export const Route = createFileRoute("/api/licitacoes-lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = licitacoesLeadSchema.safeParse(json);

          if (!parsed.success) {
            return Response.json(
              {
                ok: false,
                error: "Dados inválidos",
                details: parsed.error.flatten().fieldErrors,
              },
              { status: 400 },
            );
          }

          if (parsed.data.website) {
            return Response.json({ ok: true });
          }

          const result = await sendLicitacoesLeadEmail(parsed.data);

          return Response.json({
            ok: true,
            message: "Cadastro enviado com sucesso.",
            clientEmail: result.clientEmail,
          });
        } catch (error) {
          console.error("[api/licitacoes-lead]", error);

          if (error instanceof Error && error.message === "MAILGUN_NOT_CONFIGURED") {
            return Response.json(
              { ok: false, error: "Serviço de e-mail não configurado." },
              { status: 503 },
            );
          }

          const detail =
            error instanceof Error && error.message.includes("MAILGUN_SEND_FAILED")
              ? error.message.replace("MAILGUN_SEND_FAILED: ", "")
              : null;

          return Response.json(
            {
              ok: false,
              error: detail
                ? `Falha ao enviar cadastro: ${detail}`
                : "Não foi possível enviar seu cadastro. Tente novamente em instantes.",
            },
            { status: 502 },
          );
        }
      },
    },
  },
});
