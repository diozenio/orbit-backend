import { prisma } from "@/lib/prisma";
import { CreateTransactionCategoryParams } from "./CreateTransactionsCategoryParams";

class CreateTransactionsCategoryUseCase {
  async execute({ name }: CreateTransactionCategoryParams) {
    const transactionCategory = await prisma.transactionCategory.create({
      data: {
        name,
      },
    });

    return transactionCategory;
  }
}

export { CreateTransactionsCategoryUseCase };
