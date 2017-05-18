import React from 'react'

import BackgroundContainer from './containers/BackgroundContainer'
import LoginContainer from './containers/LoginContainer'

export default class Login extends React.Component {
  render () {
    return (
      <div>
        <BackgroundContainer />
        <LoginContainer />
      </div>
    )
  }
}
