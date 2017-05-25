import { connect } from 'react-redux'
import { addPlayer } from '../actions/playerActions.js'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlayer: (name, pass) => {
      dispatch(addPlayer(name, pass))
      return name
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginContainer
