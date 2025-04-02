import { prisma } from "@/lib/prisma";

class GetTransactionsCategoriesUseCase {
  async execute() {
    const transactionsCategories = await prisma.transactionCategory.findMany();
    return transactionsCategories;
  }
}

export { GetTransactionsCategoriesUseCase };
