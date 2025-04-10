import { prisma } from "@/lib/prisma";
import { SetMonthlyLimitParams } from "./SetMonthlyLimitParams";

class SetMonthlyLimitUseCase {
  async execute({ month, year, amount }: SetMonthlyLimitParams) {
    const result = await prisma.monthlyLimit.upsert({
      where: {
        month_year: {
          month,
          year,
        },
      },
      update: {
        amount,
      },
      create: {
        month,
        year,
        amount,
      },
    });

    return result;
  }
}

export { SetMonthlyLimitUseCase };
