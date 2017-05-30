import React, { Component, PropTypes } from 'react'
import WebSocket from 'ws'

import { blueGrey50, blue200 } from 'material-ui/styles/colors'

import Navigation from '../Navigation'
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

      if (json.hasOwnProperty('error')) {
        console.error('error occured while processing incoming websocket messages')
        console.error('error message form server: ' + json.error)
        return
      }

      json.units.forEach((u) => {
        this.props.onAddUnit(
          u.id,
          u.owner,
          'youmu',
          u.position,
          u.vertices,
          u.stats,
          u.actions
        )
      })

      json.actions.forEach((a) => {
        console.log('adding action')
        this.props.onAddAction(a.name, a.paramTypes)
      })
    })

    ws.on('error', (e) => {
      // error while connecting to endpoint
      // NOTE: probably because endpoint does not have a lolirift server
      // TODO: tell user that he has to try antother endpoint

      this.props.onUnsetWs()
    })

    ws.on('close', () => {
      this.props.onUnsetWs()
    })
  }

  render () {
    return (
      <div>
        <Navigation color={blueGrey50} hoverColor={blue200} />
        <Background />
        <Form onSubmit={this.login.bind(this)} />
      </div>
    )
  }
}
