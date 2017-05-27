export const SET_WS = 'SET_WS'
export const UNSET_WS = 'UNSET_WS'

export const setWs = (ws) => {
  return {
    type: SET_WS,
    ws
  }
}

export const unsetWs = () => {
  return {
    type: UNSET_WS
  }
}
