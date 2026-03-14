import { z } from "zod"

export const createChatSchema = z.object({
  name: z
    .string()
    .min(1, "Введите название чата")
    .max(100, "Название не более 100 символов"),
  description: z
    .string()
    .max(500, "Описание не более 500 символов")
    .optional()
    .or(z.literal("")),
})

export type CreateChatFormValues = z.infer<typeof createChatSchema>
