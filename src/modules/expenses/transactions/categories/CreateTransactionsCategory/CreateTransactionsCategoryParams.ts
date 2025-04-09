import { z } from "zod";

export const createTransactionCategoryParams = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required")
    .max(30, "Name must be less than 30 characters"),
  icon: z
    .string({
      required_error: "Icon is required",
    })
    .min(1, "Icon is required")
    .max(30, "Icon must be less than 30 characters")
    .toLowerCase(),
});

export type CreateTransactionCategoryParams = z.infer<
  typeof createTransactionCategoryParams
>;
