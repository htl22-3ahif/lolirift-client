import { TOGGLE_PAGE } from '../actions/pageActions.js'
import { pages } from '../actions/pageActions.js'

const page = (state = pages.SHOW_LOGIN, action) => {
  switch (action.type) {
    case TOGGLE_PAGE:
      return action.page

    default:
      return state
  }
}

export default page
