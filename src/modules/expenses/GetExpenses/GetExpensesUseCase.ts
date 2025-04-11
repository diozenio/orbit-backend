import { prisma } from "@/lib/prisma";
import { GetExpensesParams } from "./GetExpensesParams";
import dayjs from "dayjs";
import { getMonthInterval } from "@/lib/date";
import { generateDailyExpenses } from "./generateDailyExpenses";
import { getTotalSpentAmount } from "./getTotalSpentAmount";

function getDailyLimit(remaining: number, daysLeft: number) {
  if (daysLeft > 0) {
    return Math.floor(remaining / daysLeft);
  }

  return 0;
}

class GetExpensesUseCase {
  async execute({ month, year }: GetExpensesParams) {
    const { startDate, endDate } = getMonthInterval(month, year);

    const transactions = await prisma.transaction.findMany({
      where: {
        type: "EXPENSE",
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    const monthlyLimitRecord = await prisma.monthlyLimit.findUnique({
      where: {
        month_year: {
          month,
          year,
        },
      },
    });

    const monthlyLimit = monthlyLimitRecord?.amount ?? 0;

    const totalSpent = getTotalSpentAmount(transactions);

    const remaining = monthlyLimit - totalSpent;
    const daysLeft = dayjs(endDate).diff(dayjs(), "day");
    const dailyLimit = getDailyLimit(remaining, daysLeft);

    const dailyExpenses = generateDailyExpenses(
      transactions,
      dailyLimit,
      month,
      year
    );

    return {
      totalSpent,
      dailyLimit,
      monthlyLimit,
      remaining,
      dailyExpenses,
    };
  }
}

export { GetExpensesUseCase };
