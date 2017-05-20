import React, { PropTypes } from 'react'
import { withRouter } from 'react-router-dom'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

class LoginForm extends React.Component {

  static propTypes = {}

  constructor () {
    super()
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    window.addEventListener('resize', this.onResize.bind(this))
  }

  componentDidMount () {}

  componentDidUpdate () {}

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
    //var p = this.props.onAddPlayer(this.state.player)
    this.props.history.push('/game')
    //this.context.history.push('/game')
  }

  render () {
    console.log('render loginform');
    console.log(this.props);

    const paperStyle = this.getPaperStyles()
    const textFieldStyle = this.getTextFieldStyles()
    const buttonStyle = this.getButtonStyles()

    return (
      <div id='paper-container'>
        <Paper
        style={paperStyle}
        >
          <h1>Ready to rift?</h1>
          <div id='textfields'>
            <TextField
              hintText='Name'
              style={textFieldStyle}
            />
            <TextField
              type='password'
              hintText='Password'
              style={textFieldStyle}
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
    )
  }
}

export default withRouter(LoginForm);
