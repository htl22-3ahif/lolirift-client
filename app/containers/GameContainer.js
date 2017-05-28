import { connect } from 'react-redux'
import { addUnit } from '../actions'

import Game from '../components/Game'

const mapStateToProps = (state) => {
  return {
    units: state.units,
    player: state.player,
    origin: state.origin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameContainer
