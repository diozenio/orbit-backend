import { prisma } from "@/lib/prisma";

import { CreateTransactionsParams } from "./CreateTransactionsParams";

class CreateTransactionsUseCase {
  async execute({ transactions }: CreateTransactionsParams) {
    const existingTransactionCategories =
      await prisma.transactionCategory.findMany({
        where: {
          id: {
            in: transactions.map(
              (transaction) => transaction.transactionCategoryId
            ),
          },
        },
      });

    const existingTransactionCategoryIds = existingTransactionCategories.map(
      (category) => category.id
    );

    const invalidTransactionCategories = transactions.filter(
      (transaction) =>
        !existingTransactionCategoryIds.includes(
          transaction.transactionCategoryId
        )
    );

    if (invalidTransactionCategories.length > 0) {
      throw new Error(
        `Invalid transaction category IDs: ${invalidTransactionCategories
          .map((transaction) => transaction.transactionCategoryId)
          .join(", ")}`
      );
    }

    const createdTransactions = await prisma.transaction.createMany({
      data: transactions,
    });

    return createdTransactions;
  }
}

export { CreateTransactionsUseCase };
