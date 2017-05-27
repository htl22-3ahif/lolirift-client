import React, { Component, PropTypes } from 'react'
import WebSocket from 'ws'

import Background from './Background'
import Form from './Form'

export default class Login extends Component {

  static propTypes = {
    onSetPlayer: PropTypes.func.isRequired,
    onSetWs: PropTypes.func.isRequired,
    onUnsetWs: PropTypes.func.isRequired,
    onAddUnit: PropTypes.func.isRequired
  }

  login (endp, user, pass) {
    var ws = new WebSocket('ws://' + user + ':' + pass + '@' + endp)

    ws.on('open', () => {
      // succesfully connected to endpoint

      this.props.onSetPlayer(user, pass)
      this.props.onSetWs(ws)
    })

    ws.on('message', (data) => {
      // TODO: handle messages, which leads to changing state
      console.log('message: ' + data)

      var json = JSON.parse(data)
      this.props.onAddUnit(
        json.id,
        json.owner,
        json.position,
        json.vertices,
        json.stats,
        json.actions,
        'youmu'
      )
    })

    ws.on('error', (e) => {
      // error while connecting to endpoint
      // NOTE: probably because endpoint does not have a lolirift server
      // TODO: tell user that he has to try antother endpoint

      this.props.onUnsetWs()
    })
  }

  render () {
    return (
      <div>
        <Background />
        <Form onSubmit={this.login.bind(this)}/>
      </div>
    )
  }
}
