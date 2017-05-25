import { connect } from 'react-redux'
import { changePlayer } from '../actions/playerActions.js'
import { addWs } from '../actions/wsAction.js'
import { togglePage } from '../actions/pageActions.js'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePlayer: (name, pass) => {
      dispatch(changePlayer(name, pass))
      return name
    },
    onAddWs: (ws) => {
      dispatch(addWs(ws))
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
