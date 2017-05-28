import React, { Component } from 'react'
import { connect } from 'react-redux'

import GameContainer from './containers/GameContainer'
import LoginContainer from './containers/LoginContainer'

class App extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div>
        { this.props.ws == null && <LoginContainer /> }
        { this.props.ws != null && <GameContainer /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ws: state.ws
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
