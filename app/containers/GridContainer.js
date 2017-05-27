import { connect } from 'react-redux'
import { addUnit } from '../actions/unitActions.js'
import { changeOrigin, changeSelection } from '../actions/uiActions.js'
import Grid from '../components/Grid'

const mapStateToProps = (state) => {
  console.log('mapping state to grid props!! AAAA')
  return {
    units: state.units,
    player: state.player,
    origin: state.origin,
    selection: state.selection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUnit: (id, owner, position, vertices, stats, actions, name) => {
      dispatch(addUnit(id, owner, position, vertices, stats, actions, name))
    },
    onChangeOrigin: (x, y, lowerBoundaryX, lowerBoundaryY, upperBoundaryX, upperBoundaryY) => {
      dispatch(changeOrigin(x, y, lowerBoundaryX, lowerBoundaryY, upperBoundaryX, upperBoundaryY))
    },
    onChangeSelection: (selected) => {
      dispatch(changeSelection(selected))
    }
  }
}

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default GridContainer
