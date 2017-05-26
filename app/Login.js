import React, { Component } from 'react'

import { blueGrey50, blue200 } from 'material-ui/styles/colors'

import Navigation from './components/Navigation.js'
import BackgroundContainer from './containers/BackgroundContainer'
import LoginContainer from './containers/LoginContainer'

export default class Login extends Component {
  render () {
    return (
      <div>
        <Navigation color={blueGrey50} hoverColor={blue200} />
        <BackgroundContainer />
        <LoginContainer />
      </div>
    )
  }
}
