import { prisma } from "@/lib/prisma";
import { UpdateTransactionCategoryParams } from "./UpdateTransactionsCategoryParams";

class UpdateTransactionsCategoryUseCase {
  async execute({ id, name, icon }: UpdateTransactionCategoryParams) {
    const transactionCategory = await prisma.transactionCategory.update({
      where: {
        id,
      },
      data: {
        name,
        icon,
      },
    });

    return transactionCategory;
  }
}

export { UpdateTransactionsCategoryUseCase };
