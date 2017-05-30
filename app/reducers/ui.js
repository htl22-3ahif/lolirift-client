import { CHANGE_ORIGIN, CHANGE_SELECTION } from '../actions'

const initialOrigin = {
  x: 0,
  y: 0,
  boundaries: {
    lower: {
      x: 0,
      y: 0
    },
    upper: {
      x: 0,
      y: 0
    }
  }
}

export const origin = (state = initialOrigin, action) => {
  switch (action.type) {
    case CHANGE_ORIGIN:
      return {
        x: action.x,
        y: action.y,
        boundaries: action.boundaries
      }

    default:
      return state
  }
}

export const selection = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_SELECTION:
      return {
        selected: action.selected
      }

    default:
      return state
  }
}
