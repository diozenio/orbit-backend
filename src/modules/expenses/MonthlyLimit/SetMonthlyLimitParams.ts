import { z } from "zod";

export const setMonthlyLimitParams = z.object({
  month: z.coerce.number().min(1).max(12),
  year: z.coerce.number().min(1900).max(2100),
  amount: z.coerce.number().min(0),
});

export type SetMonthlyLimitParams = z.infer<typeof setMonthlyLimitParams>;
