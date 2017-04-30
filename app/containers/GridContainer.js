import { connect } from 'react-redux'
import CoordinateSystem from '../components/CoordinateSystem'

const mapStateToProps = (state) => {
  return {
    units: state.units
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoordinateSystem)

export default GridContainer
