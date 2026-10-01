import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { cadbrasilLeadSchema } from "@/lib/cadbrasilLead";
import { sendCadbrasilLeadEmail } from "@/lib/mailgun";

export const Route = createFileRoute("/api/cadbrasil-lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = cadbrasilLeadSchema.safeParse(json);

          if (!parsed.success) {
            return Response.json(
              {
                ok: false,
                error: "Confira os dados informados.",
                details: parsed.error.flatten().fieldErrors,
              },
              { status: 400 },
            );
          }

          if (parsed.data.website) {
            return Response.json({ ok: true });
          }

          const result = await sendCadbrasilLeadEmail(parsed.data);

          return Response.json({
            ok: true,
            message: "Solicitação enviada com sucesso.",
            clientEmail: result.clientEmail,
          });
        } catch (error) {
          console.error("[api/cadbrasil-lead]", error);

          if (error instanceof Error && error.message === "MAILGUN_NOT_CONFIGURED") {
            return Response.json(
              { ok: false, error: "Serviço de e-mail não configurado." },
              { status: 503 },
            );
          }

          return Response.json(
            {
              ok: false,
              error: "Não foi possível enviar sua solicitação. Tente novamente ou fale pelo WhatsApp.",
            },
            { status: 502 },
          );
        }
      },
    },
  },
});
