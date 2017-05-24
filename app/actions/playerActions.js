export const ADD_PLAYER = 'ADD_PLAYER'
export const ADD_CONTESTANT = 'ADD_CONTESTANT'
export const ADD_CONTESTANTS = 'ADD_CONTESTANTS'

export const addPlayer = (name, pass) => {
  return {
    type: ADD_PLAYER,
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
