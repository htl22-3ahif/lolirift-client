import React, { Component, PropTypes } from 'react'

import { pages } from '../actions/pageActions.js'

import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import MinimizeIcon from 'material-ui/svg-icons/navigation/fullscreen-exit'
import MaximizeIcon from 'material-ui/svg-icons/navigation/fullscreen'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import { blueGrey50, blue200 } from 'material-ui/styles/colors'

export default class LoginForm extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      user: '',
      pass: '',
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
      console.log('page toggled (SHOW_GAME)')
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
    if (!(this.state.user.length > 0 || this.state.pass.length > 0)) { return }

    var ws = new WebSocket("ws://" + this.state.endpoint)

    ws.onopen = (e) => {
      // succesfully connected to endpoint
      console.log('login submitted')

      var player = this.props.onAddPlayer(this.state.user, this.state.pass)
      console.log('dispatched addPlayer ' + player)

      this.props.onAddWs(ws)

      this.setState({
        dispatched: true
      })
    }

    ws.onmessage = (e) => {
      // TODO: handle messages, which leads to changing state
      console.log('message: ' + e.data)
    }

    ws.onerror = (e) => {
      // error while connecting to endpoint
      // NOTE: probably because endpoint does not have a lolirift server
      // TODO: tell user that he has to try antother endpoint
    }
  }

  handleUser = (e) => {
    // enter key
    if (e.which == 13) {
      this.handleSubmit()
      return
    }

    // tab/shift/ctrl/alt key
    if (e.which == 9 || e.which == 16 || e.which == 17 || e.which == 18) {
      return
    }

    var user = this.state.user

    // backspace key
    if (e.which == 8) {
      this.setState({ user: user.substring(0, user.length - 1) })
      return
    }

    this.setState({ user: user + e.key })
  }

  handlePass = (e) => {
    // enter key
    if (e.which == 13) {
      this.handleSubmit()
      return
    }

    // tab/shift/ctrl/alt key
    if (e.which == 9 || e.which == 16 || e.which == 17 || e.which == 18) {
      return
    }

    var pass = this.state.pass

    // backspace key
    if (e.which == 8) {
      this.setState({ pass: pass.substring(0, pass.length - 1) })
      return
    }

    this.setState({ pass: pass + e.key })
  }

  handleMinimize() {
    let window = require('electron').remote.getCurrentWindow().minimize()
  }

  handleMaximize() {
    let window = require('electron').remote.getCurrentWindow()
    if (!window.isMaximized()) {
      window.maximize()
    } else {
      window.unmaximize()
    }
  }

  handleClose() {
    let window = require('electron').remote.getCurrentWindow().close()
  }

  render () {
    console.log('render loginform')
    console.log(this.props)

    const paperStyle = this.getPaperStyles()
    const textFieldStyle = this.getTextFieldStyles()
    const buttonStyle = this.getButtonStyles()

    return (
      <div id='login-container'>
      <div id='control-buttons-container' style={{ position: 'absolute', top: '5px', right: '5px' }}>
        <IconButton
        onTouchTap={this.handleMinimize.bind(this)}
        style={{  }}
        >
          <MinimizeIcon color={blueGrey50} hoverColor={blue200} />
        </IconButton>
        <IconButton
        onTouchTap={this.handleMaximize.bind(this)}
        style={{  }}
        >
          <MaximizeIcon color={blueGrey50} hoverColor={blue200} />
        </IconButton>
        <IconButton
          onTouchTap={this.handleClose.bind(this)}
          style={{  }}
        >
          <CloseIcon color={blueGrey50} hoverColor={blue200} />
        </IconButton>
      </div>
      <div id='paper-container'>
        <Paper
        style={paperStyle}
        >
          <h1>Ready to rift?</h1>
          <div id='textfields'>
            <TextField
              value={this.state.user}
              hintText='Name'
              style={textFieldStyle}
              onKeyDown={this.handleUser.bind(this)}
            />
            <TextField
              value={this.state.pass}
              type='password'
              hintText='Password'
              style={textFieldStyle}
              onKeyDown={this.handlePass.bind(this)}
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
