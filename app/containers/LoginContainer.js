import { connect } from 'react-redux'
import { changePlayer } from '../actions/playerActions.js'
import { addWs } from '../actions/wsActions.js'
import { togglePage } from '../actions/pageActions.js'
import { addUnit } from '../actions/unitActions.js'
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
    },
    onAddUnit: (id, owner, position, vertices, stats, actions, name) => {
      dispatch(addUnit(id, owner, position, vertices, stats, actions, name))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginContainer
