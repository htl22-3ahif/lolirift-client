import { CHANGE_PLAYER } from '../actions'

const player = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_PLAYER:
      return {
        name: action.name,
        pass: action.pass
      }

    default:
      return state
  }
}

export default player
