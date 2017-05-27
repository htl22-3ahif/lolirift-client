import { combineReducers } from 'redux'
import player from './player'
import contestants from './contestants'
import units from './units'
import page from './page'
import ws from './ws'

const world = combineReducers({
  player,
  contestants,
  units,
  page,
  ws
})

export default world
