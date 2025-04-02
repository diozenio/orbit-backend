import { z } from "zod";

export const createTransactionCategoryParams = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required")
    .max(15, "Name must be less than 15 characters"),
});

export type CreateTransactionCategoryParams = z.infer<
  typeof createTransactionCategoryParams
>;
