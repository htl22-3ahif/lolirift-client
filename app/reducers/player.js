import { ADD_PLAYER, ADD_PLAYERS } from '../actions'

const player = (state = {}, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        name: action.name,
        pass: action.pass
      }

    default:
      return state
  }
}

const players = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      return [
        ...state,
        player(undefined, action)
      ]

    default:
      return state
  }
}

export default players
