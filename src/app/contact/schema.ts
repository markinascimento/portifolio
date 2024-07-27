import zod from "zod";

export const schemaForm = zod.object({
  name: zod
    .string({
      required_error: "Nome é obrigatório",
    })
    .min(1, "Nome é obrigatório"),

  email: zod
    .string({
      required_error: "E-mail obrigatório",
    })
    .email("E-mail obrigatório"),

  subject: zod
    .string({
      required_error: "Qual o assunto desejado?",
    })
    .min(1, "Qual o assunto desejado?"),

  body: zod
    .string({
      required_error: "Detalhe mais sobre o assunto",
    })
    .min(1, "Detalhe mais sobre o assunto"),
});

export type FormSchema = zod.infer<typeof schemaForm>;
