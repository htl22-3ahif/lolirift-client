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
    onAddUnit: (id, owner, type, position, vertices, stats, actions) => {
      dispatch(addUnit(id, owner, type, position, vertices, stats, actions))
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
