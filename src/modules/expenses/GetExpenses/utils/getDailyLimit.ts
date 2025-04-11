export function getDailyLimit(remaining: number, daysLeft: number) {
  if (daysLeft > 0) {
    return Math.floor(remaining / daysLeft);
  }

  return 0;
}
