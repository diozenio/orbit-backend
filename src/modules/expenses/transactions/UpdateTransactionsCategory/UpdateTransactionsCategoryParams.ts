import { z } from "zod";

export const updateTransactionsCategoryParams = z.object({
  id: z
    .string({ required_error: "Id is required" })
    .uuid("Must be a valid UUID"),
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required")
    .max(15, "Name must be less than 15 characters"),
});

export type UpdateTransactionCategoryParams = z.infer<
  typeof updateTransactionsCategoryParams
>;
