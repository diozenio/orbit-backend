import { prisma } from "@/lib/prisma";
import { DeleteTransactionsParams } from "./DeleteTransactionsParams";

class DeleteTransactionsUseCase {
  async execute({ transactionsIds }: DeleteTransactionsParams) {
    const deletedTransactions = await prisma.transaction.deleteMany({
      where: {
        id: {
          in: transactionsIds,
        },
      },
    });

    return deletedTransactions;
  }
}

export { DeleteTransactionsUseCase };
