import { prisma } from "@/lib/prisma";
import { GetExpensesParams } from "./GetExpensesParams";
import dayjs from "dayjs";

const dailyExpenses = [
  { date: "2025-03-24", amount: 100 },
  { date: "2025-03-25", amount: 23 },
  { date: "2025-03-26", amount: 40 },
  { date: "2025-03-27", amount: 90 },
  { date: "2025-03-28", amount: -20 },
  { date: "2025-03-29", amount: 30 },
  { date: "2025-03-30", amount: 95 },
];

function getMonthInterval(month: number, year: number) {
  const base = dayjs(`${year}-${month}-01`);

  return {
    startDate: base.startOf("month").toDate(),
    endDate: base.endOf("month").toDate(),
  };
}

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

    const totalSpent = transactions.reduce((acc, transaction) => {
      return acc + Math.abs(transaction.amount);
    }, 0);

    const remaining = monthlyLimit - totalSpent;
    const daysLeft = dayjs(endDate).diff(dayjs(), "day");
    const dailyLimit = getDailyLimit(remaining, daysLeft);

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
