import { ADD_UNIT } from '../actions/unitActions.js'
import players from './player'

const unit = (state = {}, action) => {
  switch (action.type) {
    case ADD_UNIT:
      return {
        type: ADD_UNIT,
        id: action.id,
        owner: action.owner,
        position: action.position,
        vertices: action.vertices,
        stats: action.stats,
        actions: action.stats,
        name: action.name,
        texture: action.texture
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
