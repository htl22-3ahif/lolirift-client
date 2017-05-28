import { combineReducers } from 'redux'
import { origin, selection } from './ui'
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
  origin,
  selection,
  ws
})

export default world
