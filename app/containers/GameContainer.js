import { connect } from 'react-redux'

import Game from '../components/Game'

const mapStateToProps = (state) => {
  return {
    units: state.units,
    player: state.player,
    origin: state.origin,
    actions: state.actions,
    ws: state.ws
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
