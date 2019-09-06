import { api } from './services'

// sendShamCoin submits a transfer of ShamCoin
// from one account to another to the server and returns the amount
// that was successfully transferred

export const sendShamCoin = (fromAccount, toAccount, amount) =>
  api.submitToPlanetWarmingMiningFunctionSorryNotSorry(
    fromAccount.id,
    toAccount.id,
    amount
  )
