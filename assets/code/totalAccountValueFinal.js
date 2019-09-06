import { Result } from 'result'
import { combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'
import { account$, currency$ } from 'somewhereElse'

export const totalAccountValueInCurrency$ = combineLatest([
  currency$,
  ...accounts$
]).pipe(
  map(([currency, ...accounts]) =>
    currency.map(value => {
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
  )
)
