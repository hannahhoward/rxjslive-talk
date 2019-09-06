import { Signals } from '@rxreact/signal'
import { totalAccountValueInCurrency } from 'computations'

const totalAccountValueSignal = Signals.deriveResultComputation(
  totalAccountValueInCurrency,
  0,
  currency$,
  ...accounts$
)
