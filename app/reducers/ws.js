import { SET_WS, UNSET_WS } from '../actions/wsActions.js'

const ws = (state = null, action) => {
  switch (action.type) {
    case SET_WS:
      return action.ws

    case UNSET_WS:
      return undefined

    default:
      return state
  }
}

export default ws
