export const ADD_ACTION = 'ADD_ACTION'

export const addPlayer = (consequence, paramTypes) => {
  return {
    type: ADD_ACTION,
    consequence: consequence,
    paramTypes: paramTypes
  }
}
