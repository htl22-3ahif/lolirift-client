import { SET_WS, UNSET_WS } from '../actions/wsActions.js'

const ws = (state = null, action) => {
  switch (action.type) {
    case SET_WS:
      return action.payload.ws

    case UNSET_WS:
      return null

    default:
      return state
  }
}

export default ws
