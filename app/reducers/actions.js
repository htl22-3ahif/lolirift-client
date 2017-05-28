import { ADD_ACTION } from '../actions'

const action = (state = {}, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return {
        name: action.name,
        paramTypes: action.paramTypes,
        svg: action.svg
      }

    default:
      return state
  }
}

const actions = (state = [], a) => {
  switch (a.type) {
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
