import { merge } from 'rxjs'
import { map, scan } from 'rxjs/operators'

export const reducerForObservables = (reductions, initialValue) => {
  return (...observables) => {
    const reducerMessageObservables = observables.map((observable, idx) =>
      observable.pipe(
        map(dep => ({
          type: idx,
          value: dep
        }))
      )
    )
    const reducerMessages = merge(...reducerMessageObservables)
    return reducerMessages.pipe(
      scan((acc, next) => reductions[next.type](acc, next.value), initialValue)
    )
  }
}
