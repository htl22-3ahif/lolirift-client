import React, { Component, PropTypes } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export default class Form extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    window.addEventListener('resize', this.onResize.bind(this))
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

  handleInput = (e) => {
    // enter key
    if (e.which == 13)
      this.submit()
  }

  submit = () => {
    this.props.onSubmit(
      this.refs.endp.getValue(),
      this.refs.name.getValue(),
      this.refs.pass.getValue()
    )
  }

  render () {
    const paperStyle = this.getPaperStyles()
    const textFieldStyle = this.getTextFieldStyles()
    const buttonStyle = this.getButtonStyles()

    var endp = <TextField
      defaultValue='localhost:8080'
      ref='endp'
      hintText='Endpoint'
      style={textFieldStyle}
      onKeyDown={this.handleInput.bind(this)}
    />

    var name = <TextField
      ref='name'
      hintText='Name'
      style={textFieldStyle}
      onKeyDown={this.handleInput.bind(this)}
    />

    var pass = <TextField
      ref='pass'
      type='password'
      hintText='Password'
      style={textFieldStyle}
      onKeyDown={this.handleInput.bind(this)}
    />

    console.log(endp)

    return (
      <div id='login-container'>
        <div id='paper-container'>
          <Paper style={paperStyle}>

            <h1>Ready to rift?</h1>

            <div id='textfields'>

               { endp }

               { name }

               { pass }

            </div>

            <FlatButton
              label='login'
              //fullWidth={true}
              hoverColor='#546E7A'
              style={buttonStyle}
              onTouchTap={this.submit.bind(this)}
            />

          </Paper>
        </div>
      </div>
    )
  }
}
