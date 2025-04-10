import { z } from "zod";

export const getExpensesParams = z.object({
  month: z.coerce.number().min(1).max(12),
  year: z.coerce.number().min(1900).max(2100),
});

export type GetExpensesParams = z.infer<typeof getExpensesParams>;
