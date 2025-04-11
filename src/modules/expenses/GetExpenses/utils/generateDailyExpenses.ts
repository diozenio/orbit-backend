import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { Transaction } from "@prisma/client";

dayjs.extend(isoWeek);

interface DailyExpense {
  date: string;
  amount: number;
}

export function generateDailyExpenses(
  transactions: Transaction[],
  dailyLimit: number,
  month: number,
  year: number
): DailyExpense[] {
  const now = dayjs();
  const isCurrentMonth = now.month() + 1 === month && now.year() === year;

  let referenceDate: dayjs.Dayjs;

  if (isCurrentMonth) {
    referenceDate = now.startOf("week"); // domingo da semana atual
  } else {
    // último dia do mês, e volta para o domingo da última semana
    const lastDayOfMonth = dayjs(`${year}-${month}-01`).endOf("month");
    referenceDate = lastDayOfMonth.startOf("week");
  }

  const dailyExpenses: DailyExpense[] = [];

  for (let i = 0; i < 7; i++) {
    const day = referenceDate.add(i, "day");
    const dateStr = day.format("YYYY-MM-DD");

    const dailyTransactions = transactions.filter((tx) =>
      dayjs(tx.createdAt).isSame(day, "day")
    );

    const totalSpent = dailyTransactions.reduce(
      (acc, tx) => acc + Math.abs(tx.amount),
      0
    );
    const amount = dailyLimit - totalSpent;

    dailyExpenses.push({
      date: dateStr,
      amount,
    });
  }

  return dailyExpenses;
}
