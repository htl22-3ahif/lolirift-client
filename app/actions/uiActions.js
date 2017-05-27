export const CHANGE_ORIGIN = 'CHANGE_ORIGIN'
export const CHANGE_SELECTION = 'CHANGE_SELECTION'

export const changeOrigin = (x, y, lowerBoundaryX, lowerBoundaryY, upperBoundaryX, upperBoundaryY) => {
  return {
    type: CHANGE_ORIGIN,
    x: x,
    y: y,
    boundaries: {
      lower: {
        x: lowerBoundaryX,
        y: lowerBoundaryY
      },
      upper: {
        x: upperBoundaryX,
        y: upperBoundaryY
      }
    }
  }
}

export const changeSelection = (...selected) => {
  return {
    type: CHANGE_ORIGIN,
    selected: selected
  }
}
