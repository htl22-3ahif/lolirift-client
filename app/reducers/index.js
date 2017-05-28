import { combineReducers } from 'redux'
import { origin, selection } from './ui'
import player from './player'
import contestants from './contestants'
import units from './units'
import ws from './ws'
import actions from './actions'

const world = combineReducers({
  player,
  contestants,
  units,
  actions,
  origin,
  selection,
  ws
})

export default world
