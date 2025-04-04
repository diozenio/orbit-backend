import { z } from "zod";

export const transactionSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(50, "Title must be less than 50 characters"),
  amount: z.number(),
  type: z.enum(["INCOME", "EXPENSE"], {
    required_error: "Type is required",
    invalid_type_error: "Type must be either income or expense",
  }),
  transactionCategoryId: z.string().uuid("Invalid transaction category ID"),
  createdAt: z.date().optional(),
});

export const createTransactionsParams = z.object({
  transactions: z
    .array(transactionSchema, {
      required_error: "Transactions are required",
      invalid_type_error: "Transactions must be an array",
    })
    .nonempty("At least one transaction is required"),
});

export type CreateTransactionsParams = z.infer<typeof createTransactionsParams>;
