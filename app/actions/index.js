export const SET_PLAYER = 'SET_PLAYER'
export const setPlayer = (name, pass) => {
  return {
    type: SET_PLAYER,
    name: name,
    pass: pass
  }
}

export const ADD_CONTESTANT = 'ADD_CONTESTANT'
export const addContestant = (name) => {
  return {
    type: ADD_CONTESTANT,
    name: name
  }
}

export const ADD_UNIT = 'ADD_UNIT'
export const addUnit = (id, owner, position, vertices, stats, actions, name) => {
  return {
    type: ADD_UNIT,
    id: id,
    owner: owner,
    position: {
      x: position.x,
      y: position.y
    },
    vertices: vertices,
    stats: stats,
    actions: actions,
    name: name,
    texture: 'resources/' + name + '.png'
  }
}

export const SET_WS = 'SET_WS'
export const setWs = (ws) => {
  return {
    type: SET_WS,
    ws
  }
}

export const UNSET_WS = 'UNSET_WS'
export const unsetWs = () => {
  return {
    type: UNSET_WS
  }
}
