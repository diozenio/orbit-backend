import { z } from "zod";

export const updateTransactionsCategoryParams = z.object({
  id: z
    .string({ required_error: "Id is required" })
    .uuid("Must be a valid UUID"),
  name: z
    .string()
    .min(1, "Name is too short")
    .max(15, "Name must be less than 15 characters")
    .optional(),
  icon: z.string().min(1, "Icon is too short").toLowerCase().optional(),
});

export type UpdateTransactionCategoryParams = z.infer<
  typeof updateTransactionsCategoryParams
>;
