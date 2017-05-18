import React, { PropTypes } from 'react'

export default class LoginForm extends React.Component {

  static propTypes = {}/*
    points: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired
    ).isRequired
  }*/

  constructor () {
    super()
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    window.onresize = this.onResize.bind(this)
  }

  componentDidMount () {}

  componentDidUpdate () {}

  getStyles () {
    return {
      width: this.state.width,
      height: this.state.height
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
    var styles = this.getStyles()

    return (
      <div
        style={styles}
      >
      </div>
    )
  }
}
