export const CHANGE_PLAYER = 'ADD_PLAYER'
export const ADD_CONTESTANT = 'ADD_CONTESTANT'
export const ADD_CONTESTANTS = 'ADD_CONTESTANTS'

export const changePlayer = (name, pass) => {
  return {
    type: CHANGE_PLAYER,
    name: name,
    pass: pass
  }
}

export const addContestant = (name) => {
  return {
    type: ADD_CONTESTANT,
    name: name
  }
}

export const addContestants = (...names) => {
  return {
    type: ADD_CONTESTANTS,
    names: names
  }
}
