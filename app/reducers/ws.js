import { ADD_WS } from '../actions'

const ws = (state = {}, action) => {
  switch (action.type) {
    case ADD_WS:
      return action.ws

    default:
      return state
  }
}
