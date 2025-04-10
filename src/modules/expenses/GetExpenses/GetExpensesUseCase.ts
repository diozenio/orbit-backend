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

export function getMonthInterval(month: number, year: number) {
  const base = dayjs(`${year}-${month}-01`);

  return {
    startDate: base.startOf("month").toDate(),
    endDate: base.endOf("month").toDate(),
  };
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

    const monthlyLimit = 2500;

    const totalSpent = transactions.reduce((acc, transaction) => {
      return acc + Math.abs(transaction.amount);
    }, 0);

    const dailyLimit = monthlyLimit / dayjs(endDate).daysInMonth();

    return {
      transactions,
      dailyExpenses,
      totalSpent,
      dailyLimit,
      monthlyLimit,
      remaining: monthlyLimit - totalSpent,
    };
  }
}

export { GetExpensesUseCase };
