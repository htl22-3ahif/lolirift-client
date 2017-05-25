import { connect } from 'react-redux'
import { addUnit } from '../actions/unitActions.js'
import Grid from '../components/Grid'

const mapStateToProps = (state) => {
  console.log('mapping state to grid props!! AAAA')
  return {
    units: state.units,
    player: state.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUnit: (name, vertices, x, y, owner) => {
      dispatch(addUnit(name, vertices, x, y, owner))
    }
  }
}

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default GridContainer
