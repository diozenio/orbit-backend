import dayjs from "dayjs";

export function getMonthInterval(month: number, year: number) {
  const base = dayjs(`${year}-${month}-01`);

  return {
    startDate: base.startOf("month").toDate(),
    endDate: base.endOf("month").toDate(),
  };
}
