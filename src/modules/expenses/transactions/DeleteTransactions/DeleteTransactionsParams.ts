import { z } from "zod";

export const deleteTransactionsParams = z.object({
  transactionsIds: z
    .array(z.string().uuid("Invalid transaction ID"))
    .nonempty("At least one transaction ID is required"),
});

export type DeleteTransactionsParams = z.infer<typeof deleteTransactionsParams>;
