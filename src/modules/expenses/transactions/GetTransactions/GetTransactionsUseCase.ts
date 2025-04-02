import { prisma } from "@/lib/prisma";

class GetTransactionsUseCase {
  async execute() {
    const transactions = await prisma.transaction.findMany();
    return transactions;
  }
}

export { GetTransactionsUseCase };
