export const ADD_UNIT = 'ADD_UNIT'

export const addUnit = (name, vertices, x, y, /*actions, state,*/ owner) => {
  return {
    type: ADD_UNIT,
    name: name,
    vertices: vertices,
    texture: 'resources/' + name + '.png',
    x: x,
    y: y,
    // actions: TODO: implement,
    // state: TODO: implement,
    owner: owner
  }
}
