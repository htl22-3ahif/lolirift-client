import React, { Component } from 'react'
import { connect } from 'react-redux'

import { pages } from './actions/pageActions.js'

import Game from './Game.js'
import Login from './Login.js'

class App extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div>
        { this.props.ws != null && <Game /> }
        { this.props.ws == null && <Login /> }
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
