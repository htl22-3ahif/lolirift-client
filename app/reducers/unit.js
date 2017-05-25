import { ADD_UNIT } from '../actions/unitActions.js'
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
    case ADD_UNIT:
      return [
        ...state,
        unit(undefined, action)
      ]

    default:
      return state
  }
}

export default units
