import { ADD_UNIT, ADD_UNITS } from '../actions'
import players from './player'
import position from './position'

const unit = (state = {}, action) => {
  switch (action.type) {
    case ADD_UNIT:
      return {
        vertices: vertices(),
        position: position(),
        // actions: TODO: implement,
        // state: TODO: implement,
        owner: player()
      }

    default:
      return state
  }
}

const units = (state = [], action) => {
  switch (action.type) {
    case ADD_UNITS:
      return [
        ...state,
        unit(undefined, action)
      ]

    default:
      return state
  }
}

export default units
