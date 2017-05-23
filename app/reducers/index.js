import { combineReducers } from 'redux'
import player from './player.js'
import contestants from './contestant.js'
import units from './unit.js'

const world = combineReducers({
  player,
  contestants,
  units
})

export default world
