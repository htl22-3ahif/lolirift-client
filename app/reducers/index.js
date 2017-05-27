import { combineReducers } from 'redux'
import player from './player.js'
import contestants from './contestant.js'
import units from './unit.js'
import page from './page.js'
import { origin, selection } from './ui.js'
import ws from './ws.js'

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
