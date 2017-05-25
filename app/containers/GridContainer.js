import { connect } from 'react-redux'
import { addUnit, addUnits } from '../actions/unitActions.js'
import Grid from '../components/Grid'

const mapStateToProps = (state) => {
  return {
    units: state.units
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUnit: (vertices, position, owner) => {
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
