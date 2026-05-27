import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { contactPayloadSchema } from "@/lib/contact";
import { sendContactEmail } from "@/lib/mailgun";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = contactPayloadSchema.safeParse(json);

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

          await sendContactEmail(parsed.data);

          return Response.json({ ok: true, message: "Mensagem enviada com sucesso." });
        } catch (error) {
          console.error("[api/contact]", error);

          if (error instanceof Error && error.message === "MAILGUN_NOT_CONFIGURED") {
            return Response.json(
              { ok: false, error: "Serviço de e-mail não configurado." },
              { status: 503 },
            );
          }

          return Response.json(
            { ok: false, error: "Não foi possível enviar sua mensagem. Tente novamente em instantes." },
            { status: 502 },
          );
        }
      },
    },
  },
});
