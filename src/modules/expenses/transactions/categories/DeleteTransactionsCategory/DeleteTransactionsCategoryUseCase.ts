import { prisma } from "@/lib/prisma";
import { DeleteTransactionsCategoryParams } from "./DeleteTransactionsCategoryParams";

class DeleteTransactionsCategoryUseCase {
  async execute({ id }: DeleteTransactionsCategoryParams) {
    await prisma.transactionCategory.delete({
      where: {
        id,
      },
    });
  }
}

export { DeleteTransactionsCategoryUseCase };
