import { connect } from 'react-redux'
import { addUnit } from '../actions'

import Grid from '../components/Grid'

const mapStateToProps = (state) => {
  return {
    units: state.units,
    player: state.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUnit: (id, owner, position, vertices, stats, actions, name) => {
      dispatch(addUnit(id, owner, position, vertices, stats, actions, name))
    }
  }
}

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default GridContainer
