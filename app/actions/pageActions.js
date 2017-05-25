export const TOGGLE_PAGE = 'TOGGLE_PAGE'

export const togglePage = (page) => {
  return {
    type: TOGGLE_PAGE,
    page: page
  }
}

export const pages = {
  SHOW_LOGIN: 'SHOW_LOGIN',
  SHOW_GAME: 'SHOW_GAME'
}
