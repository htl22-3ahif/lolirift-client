export const ADD_POSITION = 'ADD_POSITION'
export const ADD_VERTICES = 'ADD_VERTICES'

export const addPosition = (x, y) => {
  return {
    type: ADD_POSITION,
    x: x,
    y: y
  }
}

export const addVertices = (...vertices) => {
  return {
    type: ADD_VERTICES,
    vertices: vertices
  }
}
