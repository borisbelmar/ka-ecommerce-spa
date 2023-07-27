import { z } from "zod"

export const productFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number().positive(),
  stock: z.number().int().positive(),
  image: z.string(),
  tags: z.string(),
  categoryId: z.string().nullable()
})
