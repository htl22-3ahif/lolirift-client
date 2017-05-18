import React, { PropTypes } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export default class LoginForm extends React.Component {

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
    return {
      position: 'absolute',
      top: (this.state.height * 0.5) - (this.state.height * 0.5 / 2),
      left: (this.state.width * 0.5) - (this.state.width * 0.4 / 2),
      width: this.state.width * 0.4,
      height: this.state.height * 0.5
    }
  }

  onResize = (e) => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }


  render () {
    console.log('render loginform');
    console.log(this.props);

    const paperStyle = this.getPaperStyles()

    return (
      <div>
        <Paper
        style={paperStyle}
        >
        </Paper>
      </div>
    )
  }
}
