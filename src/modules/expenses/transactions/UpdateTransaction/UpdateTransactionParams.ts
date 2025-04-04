import { z } from "zod";

export const updateTransactionParams = z.object({
  id: z
    .string({ required_error: "Id is required" })
    .uuid("Must be a valid UUID"),
  title: z
    .string()
    .min(1, "Title is required")
    .max(15, "Title must be less than 15 characters")
    .optional(),
  amount: z.number().optional(),
  transactionCategoryId: z.string().uuid("Must be a valid UUID").optional(),
  type: z.enum(["INCOME", "EXPENSE"]).optional(),
});

export type UpdateTransactionParams = z.infer<typeof updateTransactionParams>;
