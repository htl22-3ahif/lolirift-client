import { connect } from 'react-redux'
import { addPlayer } from '../actions'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlayer: (name, pass) => {
      var player = addPlayer(name, pass)
      dispatch(player)
      return player.name
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginContainer
