import { z } from "zod";

export const createTransactionCategoryParams = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(15, "Name must be less than 15 characters"),
});

export type CreateTransactionCategoryParams = z.infer<
  typeof createTransactionCategoryParams
>;
