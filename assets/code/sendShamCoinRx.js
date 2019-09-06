import { api } from './services'
import { combineLatest } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { fromAccount$, toAccount$, amount$ } from 'somewhereElse'

export const sendShamCoin$ = combineLatest(
  fromAccount$,
  toAccount$,
  amount$
).pipe(
  switchMap((fromAccount, toAccount, amount) =>
    api.submitToPlanetWarmingMiningFunctionSorryNotSorry(
      fromAccount.id,
      toAccount.id,
      amount
    )
  )
)
