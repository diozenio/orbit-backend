import { prisma } from "@/lib/prisma";
import { UpdateTransactionCategoryParams } from "./UpdateTransactionsCategoryParams";

class UpdateTransactionsCategoryUseCase {
  async execute({ id, name }: UpdateTransactionCategoryParams) {
    const transactionCategory = await prisma.transactionCategory.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return transactionCategory;
  }
}

export { UpdateTransactionsCategoryUseCase };
