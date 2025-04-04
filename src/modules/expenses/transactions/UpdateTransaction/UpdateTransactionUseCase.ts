import { prisma } from "@/lib/prisma";
import { UpdateTransactionParams } from "./UpdateTransactionParams";

class UpdateTransactionUseCase {
  async execute({
    id,
    amount,
    title,
    transactionCategoryId,
    type,
  }: UpdateTransactionParams) {
    const transaction = await prisma.transaction.update({
      where: {
        id,
      },
      data: {
        amount,
        title,
        transactionCategoryId,
        type,
      },
    });

    return transaction;
  }
}

export { UpdateTransactionUseCase };
