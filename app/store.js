//import { createHistory } from 'history'
import { createStore } from "redux"

import world from './reducers'

const store = createStore(world)
//compose(reduxReactRouter({createHistory}))

export default store
