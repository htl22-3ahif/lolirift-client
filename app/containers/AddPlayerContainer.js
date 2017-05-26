// kept for legacy, as this file isn't used anymore but may be recycled in the future

import { connect } from 'react-redux'
import { addPlayer } from '../actions/playerActions.js'
import AddPlayer from '../components/AddPlayer'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlayer: (player) => {
      var p = addPlayer(player)
      dispatch(p)
      return p.name
    }
  }
}

const AddPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPlayer)

export default AddPlayerContainer
