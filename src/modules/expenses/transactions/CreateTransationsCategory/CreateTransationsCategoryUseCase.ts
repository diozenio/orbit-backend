import { prisma } from "@/lib/prisma";
import { CreateTransactionCategoryParams } from "./CreateTransationsCategoryParams";

class CreateTransationsCategoryUseCase {
  async execute({ name }: CreateTransactionCategoryParams) {
    const transactionCategory = await prisma.transactionCategory.create({
      data: {
        name,
      },
    });

    return transactionCategory;
  }
}

export { CreateTransationsCategoryUseCase };
