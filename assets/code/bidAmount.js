import { createStore } from 'fancy-3rd-party-library'

// nextBidAmount produces the user's next bid in ShamCoin for a DMV appointment
// from their last bid and a desired action (increase, decrease, set, or clear)
const nextBidAmount = (lastBidAmount, action) => {
  switch (action.type) {
    case 'INCREASE_BID':
      return lastBidAmount + action.value
    case 'DECREASE_BID':
      return lastBidAmount - action.value
    case 'SET_BID':
      return action.value
    case 'CLEAR_BID':
      return 0
  }
}

export const bidAmount = createStore(nextBidAmount, 0.0)
