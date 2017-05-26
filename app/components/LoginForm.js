import React, { Component, PropTypes } from 'react'
import WebSocket from 'ws'

import { pages } from '../actions/pageActions.js'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export default class LoginForm extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      endpoint: 'localhost:8080/',
      dispatched: false
    }
    window.addEventListener('resize', this.onResize.bind(this))
  }

  componentDidMount () {}

  componentDidUpdate () {
    if (this.state.dispatched) {
      // TODO: validate user input (ignoring for now)
      this.props.onTogglePage(pages.SHOW_GAME)
      console.log('dispatched page toggle (SHOW_GAME)')
    }
  }

  getPaperStyles () {
    var minWidth = this.state.width * 0.4 < 200 ? true : false
    var minHeight = this.state.height * 0.5 < 200 ? true : false

    var width = minWidth ?
      this.state.width : this.state.width * 0.4
    var height = minHeight ?
      this.state.height : this.state.height * 0.5

    var top = minHeight ?
      0 : (this.state.height * 0.5) - (this.state.height * 0.5 / 2)
    var left = minWidth ?
      0 : (this.state.width * 0.5) - (this.state.width * 0.4 / 2)

    return {
      position: 'absolute',
      top: top,
      left: left,
      textAlign: 'center',
      width: width,
      height: height,
      padding: '20px'
    }
  }

  getTextFieldStyles () {
    return {
      width: '100%'
    }
  }

  getButtonStyles () {
    return {
      position: 'absolute',
      left: '10%',
      bottom: '10%',
      width: '80%'
    }
  }

  onResize = (e) => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  handleSubmit = () => {
    var user = this.refs.name.getValue()
    var pass = this.refs.pass.getValue()
    var endp = this.refs.endpoint.getValue()

    console.log(user + ', ' + pass)

    var ws = new WebSocket('ws://' + user + ':' + pass + '@' + endp)

    ws.on('open', () => {
      // succesfully connected to endpoint
      console.log('login submitted')

      var player = this.props.onChangePlayer(user, pass)
      console.log('dispatched changePlayer ' + player)

      this.props.onAddWs(ws)

      this.setState({
        dispatched: true
      })
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
    })
  }

  handleInput = (e) => {
    // enter key
    if (e.which == 13) {
      this.handleSubmit()
      return
    }
  }

  render () {
    console.log('render loginform')
    console.log(this.props)

    const paperStyle = this.getPaperStyles()
    const textFieldStyle = this.getTextFieldStyles()
    const buttonStyle = this.getButtonStyles()

    return (
      <div id='login-container'>
        <div id='paper-container'>
          <Paper
          style={paperStyle}
          >
            <h1>Ready to rift?</h1>
            <div id='textfields'>
              <TextField
                defaultValue='localhost:8080'
                ref='endpoint'
                hintText='Endpoint'
                style={textFieldStyle}
                onKeyDown={this.handleInput.bind(this)}
              />
              <TextField
                ref='name'
                hintText='Name'
                style={textFieldStyle}
                onKeyDown={this.handleInput.bind(this)}
              />
              <TextField
                ref='pass'
                type='password'
                hintText='Password'
                style={textFieldStyle}
                onKeyDown={this.handleInput.bind(this)}
              />
            </div>
            <div id='footer'>
              <div id='footer-send'>
                <FlatButton
                  label='login'
                  //fullWidth={true}
                  hoverColor='#546E7A'
                  style={buttonStyle}
                  onTouchTap={this.handleSubmit.bind(this)}
                />
              </div>
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}
