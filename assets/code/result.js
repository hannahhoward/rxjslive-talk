export class Result {
  static success = val => new Result('success', val)
  static failure = error => new Result('failure', error)

  constructor(type, value) {
    this.type = type
    this.value = value
  }

  isFailure = () => this.type === 'failure'
  isSuccess = () => this.type === 'success'

  map = mapFn => (this.isSuccess() ? Result.success(mapFn(this.value)) : this)
  apply = resultMapFn =>
    resultMapFn.isSuccess() ? this.map(resultMapFn.value) : resultMapFn
}
