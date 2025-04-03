import { z } from "zod";

export const deleteTransactionsCategoryParams = z.object({
  id: z
    .string({ required_error: "Id is required" })
    .uuid("Must be a valid UUID"),
});

export type DeleteTransactionsCategoryParams = z.infer<
  typeof deleteTransactionsCategoryParams
>;
