import { isError } from 'somewhere'

export const totalAccountValueInCurrency = (accounts, currency) => {
  if (isError(currency)) {
    return currency
  } else {
    switch (currency) {
      case 'ShamCoin':
        return accounts.reduce((totalSoFar, account) => {
          if (isError(totalSoFar)) {
            return totalSoFar
          } else if (isError(account)) {
            return account
          } else {
            return totalSoFar + account.balance
          }
        }, 0)
      case 'USD':
      default:
        return 0.0
    }
  }
}
