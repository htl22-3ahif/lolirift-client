import { ADD_ACTION } from '../actions'

const action = (state = {}, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return {
        name: action.name,
        paramTypes: action.paramTypes
      }

    default:
      return state
  }
}

const actions = (state = [], a) => {
  switch (action.type) {
    case ADD_ACTION:
      return [
        ...state,
        action(undefined, a)
      ]

    default:
      return state
  }
}

export default actions
