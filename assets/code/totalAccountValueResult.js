import { Result } from 'result'

export const totalAccountValueInCurrency = (accounts, currency) => {
  return currency.map(value => {
    switch (value) {
      case 'ShamCoin':
        return accounts.reduce(
          (totalSoFar, account) =>
            totalSoFar.apply(account.map(a => b => a + b)),
          Result.success(0)
        )
      case 'USD':
      default:
        return 0.0
    }
  })
}
