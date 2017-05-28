import { ADD_UNIT } from '../actions'

const unit = (state = {}, action) => {
  switch (action.type) {
    case ADD_UNIT:
      return {
        id: action.payload.id,
        owner: action.payload.owner,
        position: action.payload.position,
        vertices: action.payload.vertices,
        stats: action.payload.stats,
        actions: action.payload.actions,
        type: action.payload.type,
        texture: action.payload.texture
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
