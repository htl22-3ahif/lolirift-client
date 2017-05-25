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
