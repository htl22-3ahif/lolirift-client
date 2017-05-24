export const ADD_UNIT = 'ADD_UNIT'

export const addUnit = (vertices, position, /*actions, state,*/ owner) => {
  return {
    type: ADD_UNIT,
    vertices: vertices,
    position: position,
    // actions: TODO: implement,
    // state: TODO: implement,
    owner: owner
  }
}

export const addUnits = (units) => {
  return {
    type: ADD_UNITS,
    units: units
  }
}
