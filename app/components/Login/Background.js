import React, { Component, PropTypes } from 'react'

export default class Background extends Component {

  static propTypes = {}

  constructor () {
    super()
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    window.addEventListener('resize', this.onResize.bind(this))
  }

  componentDidMount () {
    this.updateCanvas()
  }

  componentDidUpdate () {
    this.updateCanvas()
  }

  updateCanvas () {
    const ctx = this.refs.canvas.getContext('2d')
    ctx.fillStyle = '#455A64'
    ctx.fillRect(0, 0, this.state.width, this.state.height)

    // write some information on the screen
    {
      ctx.fillStyle = '#FFFFFF'
      ctx.font="18px Arial";
      ctx.fillText("made with <3 by lolirifters", 10, this.state.height - 10)
    }
  }

  getStyles () {
    return {
      position: 'absolute',
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
    console.log('render background');
    console.log(this.props);
    var styles = this.getStyles()

    return (
      <div
        //onClick={this.onClick.bind(this)} maybe add like a ripple effect or somethin
        style={styles}
      >
        <canvas
          ref='canvas'
          width={this.state.width}
          height={this.state.height}
          style={{ position:'absolute', zIndex: -1 }}
        >
          Canvas is not supported
        </canvas>
      </div>
    )
  }
}
