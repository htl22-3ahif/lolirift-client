import { connect } from 'react-redux'
import Grid from '../components/Grid'

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
)(Grid)

export default GridContainer
