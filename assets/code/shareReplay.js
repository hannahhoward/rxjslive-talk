signal.pipe(
  startWith(n),
  shareReplay(1)
)
