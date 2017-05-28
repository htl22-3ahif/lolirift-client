import { connect } from 'react-redux'
import { setPlayer, setWs, addUnit, unsetWs } from '../actions'

import Login from '../components/Login'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetPlayer: (name, pass) => {
      dispatch(setPlayer(name, pass))
    },
    onAddUnit: (id, owner, position, vertices, stats, actions, name) => {
      dispatch(addUnit(id, owner, position, vertices, stats, actions, name))
    },
    onSetWs: (ws) => {
      dispatch(setWs(ws))
    },
    onUnsetWs: () => {
      dispatch(unsetWs())
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer
