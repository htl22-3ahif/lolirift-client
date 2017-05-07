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
