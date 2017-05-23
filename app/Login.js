import React, { Component } from 'react'

import BackgroundContainer from './containers/BackgroundContainer'
import LoginContainer from './containers/LoginContainer'

export default class Login extends Component {
  render () {
    return (
      <div>
        <BackgroundContainer />
        <LoginContainer />
      </div>
    )
  }
}
