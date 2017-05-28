import { ADD_CONTESTANT, ADD_CONTESTANTS } from '../actions'

const contestant = (state = {}, action) => {
  switch (action.type) {
    case ADD_CONTESTANT:
      return {
        name: action.payload.payload.name
      }

    default:
      return state
  }
}

const contestants = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTESTANT:
      return [
        ...state,
        contestant(undefined, action)
      ]

    default:
      return state
  }
}

export default contestants
