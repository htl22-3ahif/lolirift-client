import { ADD_ACTION } from '../actions'

const action = (state = {}, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return {
        name: action.payload.name,
        paramTypes: action.payload.paramTypes,
        svg: action.payload.svg
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
