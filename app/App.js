import React, { Component } from 'react'
import { connect } from 'react-redux'

import { blueGrey900, grey700 } from 'material-ui/styles/colors'

import Navigation from './components/Navigation'
import GameContainer from './containers/GameContainer'
import LoginContainer from './containers/LoginContainer'

class App extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div>
        <Navigation color={blueGrey900} hoverColor={grey700}/>
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
