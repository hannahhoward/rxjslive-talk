import { Signals } from '@rxreact/signal'
import { increase$, decrease$, set$, reset$ } from 'somewhereElse'
export const bidAmountSignal = Signals.derivedReducer(
  [
    (lastBidAmount, increase) => lastBidAmount + increase,
    (lastBidAmount, decrease) => lastBidAmount - decrease,
    (_, newAmount) => newAmount,
    (_, _reset) => 0
  ],
  0.0,
  increase$,
  decrease$,
  set$,
  reset$
)
