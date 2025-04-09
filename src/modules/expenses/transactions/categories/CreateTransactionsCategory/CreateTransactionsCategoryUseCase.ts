import { prisma } from "@/lib/prisma";
import { CreateTransactionCategoryParams } from "./CreateTransactionsCategoryParams";

class CreateTransactionsCategoryUseCase {
  async execute({ name, icon }: CreateTransactionCategoryParams) {
    const transactionCategory = await prisma.transactionCategory.create({
      data: {
        name,
        icon,
      },
    });

    return transactionCategory;
  }
}

export { CreateTransactionsCategoryUseCase };
