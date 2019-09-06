// totalAccountValueInCurrenct sums the value of a users ShamCoin accounts
// and returns the value in the desired currency

export const totalAccountValueInCurrency = (accounts, currency) => {
  switch (currency) {
    case 'ShamCoin':
      return accounts.reduce(
        (totalSoFar, account) => totalSoFar + account.balance,
        0
      )
    case 'USD':
    default:
      return 0.0
  }
}
