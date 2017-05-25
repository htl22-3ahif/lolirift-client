import { ADD_UNIT, ADD_UNITS } from '../actions'
import players from './player'

const unit = (state = {}, action) => {
  switch (action.type) {
    case ADD_UNIT:
      return {
        name: action.name,
        vertices: action.vertices,
        texture: action.texture,
        x: action.x,
        y: action.y,
        // actions: TODO: implement,
        // state: TODO: implement,
        owner: action.owner
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
