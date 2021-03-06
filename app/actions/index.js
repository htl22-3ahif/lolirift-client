// action creators here
const fs = require('fs')

export const SET_PLAYER = 'SET_PLAYER'
export const setPlayer = (name, pass) => {
  return {
    type: SET_PLAYER,
    payload: {
      name,
      pass
    }
  }
}

export const ADD_CONTESTANT = 'ADD_CONTESTANT'
export const addContestant = (name) => {
  return {
    type: ADD_CONTESTANT,
    payload: {
      name
    }
  }
}

export const ADD_UNIT = 'ADD_UNIT'
export const addUnit = (id, owner, type, position, vertices, stats, actions) => {
  return {
    type: ADD_UNIT,
    payload: {
      id,
      owner,
      type,
      position: {
        x: position.x,
        y: position.y
      },
      vertices,
      stats,
      actions,
      texture: 'resources/' + type + '.png'
    }
  }
}

export const ADD_ACTION = 'ADD_ACTION'
export const addAction = (name, paramTypes) => {
  var modifiedName = name.indexOf(':') < 0 ? name : name.substring(0, name.indexOf(':'))
  var svg = 'resources/actions/' + modifiedName + '.svg'
  if (!fs.existsSync(svg))
    svg = 'resources/actions/default.svg'

  return {
    type: ADD_ACTION,
    payload: {
      name,
      paramTypes,
      svg
    }
  }
}

export const SET_WS = 'SET_WS'
export const setWs = (ws) => {
  return {
    type: SET_WS,
    payload: {
      ws
    }
  }
}

export const UNSET_WS = 'UNSET_WS'
export const unsetWs = () => {
  return {
    type: UNSET_WS
  }
}
