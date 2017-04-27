import { ADD_POSITION, ADD_VERTICES } from '../actions'

const position = (state = {}, action) => {
  switch (action.type) {
    case ADD_POSITION:
      return {
        name: action.x,
        pass: action.y
      }

    default:
      return state
  }
}

const vertices = (state = [], action) => {
  switch (action.type) {
    case ADD_VERTICES:
      return [
        ...state,
        position(undefined, action)
      ]

    default:
      return state
  }
}

export default position
