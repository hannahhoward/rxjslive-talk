import { api } from './services'

export const sendShamCoin = (
  fromAccount,
  toAccount,
  amount
) => {
  api.submitToPlanetWarmingMiningFunctionSorryNotSorry(
    fromAccount.id,
    toAccount.id,
    amount,
    function callbackWhenDoneOrError(result, err) {
      ...
    }
  )
}
