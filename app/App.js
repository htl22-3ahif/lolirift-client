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
        { this.props.page == pages.SHOW_GAME && <Game /> }
        { this.props.page == pages.SHOW_LOGIN && <Login /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page
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
