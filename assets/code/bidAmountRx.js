import { reducerForObservables } from './reducerForObservables'
import { increase$, decrease$, set$, reset$ } from 'somewhereElse'
const makeBidAmount = reducerForObservables(
  [
    (lastBidAmount, increase) => lastBidAmount + increase,
    (lastBidAmount, decrease) => lastBidAmount - decrease,
    (_, newAmount) => newAmount,
    (_, _reset) => 0
  ],
  0.0
)

export const bidAmount$ = makeBidAmount(increase$, decrease$, set$, reset$)
