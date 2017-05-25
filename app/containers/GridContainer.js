import { connect } from 'react-redux'
import { addUnit, addUnits } from '../actions/unitActions.js'
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
    onAddUnit: (name, vertices, position, owner) => {
      dispatch(addUnit(vertices, position, owner))
    },
    onAddUnits: (...units) => {
      dispatch(addUnits(...units))
    }
  }
}

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default GridContainer
