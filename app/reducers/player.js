import { SET_PLAYER } from '../actions'

const player = (state = {}, action) => {
  switch (action.type) {
    case SET_PLAYER:
      return {
        name: action.payload.name,
        pass: action.payload.pass
      }

    default:
      return state
  }
}

export default player
