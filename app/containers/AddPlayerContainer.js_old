// kept for legacy, as this file isn't used anymore but may be recycled in the future

import { connect } from 'react-redux'
import { setPlayer } from '../actions'

import AddPlayer from '../components/AddPlayer'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetPlayer: (player) => {
      var p = setPlayer(player)
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
