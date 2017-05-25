import { connect } from 'react-redux'
import { addPlayer, addWs } from '../actions'
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
    onAddWs: (ws) => {
      dispatch(addWs(ws))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginContainer
