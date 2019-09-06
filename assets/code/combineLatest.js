combineLatest([currency$, ...accounts$]).pipe(
  map(([currency, ...accounts]) => myOperation)
)
