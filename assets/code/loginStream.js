const api = {
  login: (username, password) => Promise,
  protectedResource: {
    get: userToken => Promise
  }
}

const username$ = new Subject()
const password$ = new Subject()
const submitButton$ = new Subject()

const loginAttempts$ = submitButton$.pipe(withLatestFrom(username$, password$))

const loginResponses$ = loginAttempts$.pipe(
  switchMap(([_, username, password]) => api.login(username, password))
)

const loginInProgress$ = merge(
  loginAttempts$.pipe(map(_ => true)),
  loginResponses$.pipe(map(_ => false))
).pipe(startWith(false))

const loginSuccesses$ = loginResponses$.pipe(
  filter(result => result.isSuccess())
)

const loginFailures$ = loginResponses$.pipe(
  filter(result => result.isFailure())
)

const loginFailureMessage$ = merge(
  loginAttempts$.pipe(map(_ => '')),
  loginFailures$.pipe(map(({ value: { message } }) => message))
).pipe(startWith(''))

const userToken$ = loginSuccesses$.pipe(
  map(({ value: { userToken } }) => userToken)
)

const getProtected$ = userToken$.pipe(
  map(userToken => api.protectedResource.get(userToken))
)

const protected$ = getProtected$.pipe(switchAll())

// success
