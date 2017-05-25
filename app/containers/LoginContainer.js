import { connect } from 'react-redux'
import { addPlayer } from '../actions/playerActions.js'
import { togglePage } from '../actions/pageActions.js'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlayer: (name, pass) => {
      dispatch(addPlayer(name, pass))
      return name
    },
    onTogglePage: (page) => {
      dispatch(togglePage(page))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginContainer
