import { connect } from 'react-redux'
import { setPlayer, addUnit, addAction, unsetWs, setWs } from '../actions'

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
    onAddAction: (name, paramTypes) => {
      dispatch(addAction(name, paramTypes))
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
