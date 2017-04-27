import { combineReducers } from 'redux'
import players from './player'
import units from './unit'

const world = combineReducers({
  players,
  units
})

export default world
