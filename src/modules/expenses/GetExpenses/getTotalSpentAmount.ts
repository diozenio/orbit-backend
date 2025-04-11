export function getTotalSpentAmount(transactions: { amount: number }[]) {
  return transactions.reduce((acc, transaction) => {
    return acc + Math.abs(transaction.amount);
  }, 0);
}
