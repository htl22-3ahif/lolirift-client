import React, { PropTypes } from 'react'
import AddPlayerContainer from '../containers/AddPlayerContainer'

export default class CoordinateSystem extends React.Component {

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
      height: window.innerHeight,
      origin: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      pageOrigin: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      move: false,
      oldMouse: { x: 0, y: 0 },
      stride: { x: 50, y: 50 },
      selectedGrid: { x: 0, y: 0 },
      rate: 1
    }

    window.onresize = this.onResize.bind(this)
  }

  componentDidMount () {
    this.updateCanvas()
  }

  componentDidUpdate () {
    this.updateCanvas()
  }

  updateCanvas () {
    const ctx = this.refs.canvas.getContext('2d')
    ctx.fillStyle = '#eceff1'
    ctx.fillRect(0, 0, this.state.width, this.state.height)

    /*
    // drawing x line
    if (this.state.origin.y > 0 && this.state.origin.y < this.state.height) {
      ctx.beginPath()
      ctx.moveTo(0, this.state.origin.y)
      ctx.lineTo(this.state.width, this.state.origin.y)
      ctx.stroke()
    }

    // drawing y line
    if (this.state.origin.x > 0 && this.state.origin.x < this.state.width) {
      ctx.beginPath()
      ctx.moveTo(this.state.origin.x, 0)
      ctx.lineTo(this.state.origin.x, this.state.height)
      ctx.stroke()
    }
    */

    // draw gridlines on x
    {
      var num = Math.floor(this.state.origin.x / this.state.stride.x)
      var offset = this.state.origin.x - (this.state.stride.x * num)

      for (var i = offset; i < this.state.width; i += this.state.stride.x) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, this.state.height)
        ctx.stroke()
      }
    }

    // draw gridlines on y
    {
      var num = Math.floor(this.state.origin.y / this.state.stride.y)
      var offset = this.state.origin.y - (this.state.stride.y * num)

      for (var i = offset; i < this.state.height; i += this.state.stride.y) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(this.state.width, i)
        ctx.stroke()
      }
    }

    // write currently selected grid element
    {
      ctx.fillStyle = '#404040'
      ctx.fillText("mouse pos: " + this.state.oldMouse.x + ", " + this.state.oldMouse.y, 10, 10)
      ctx.fillText("origin: " + this.state.origin.x + ", " + this.state.origin.y, 10, 25)
      ctx.fillText("selected grid element: " + this.state.selectedGrid.x + ", " + this.state.selectedGrid.y, 10, 40)
    }
  }

  getStyles () {
    var cursor = !this.state.move ? 'auto' : 'move'

    return {
      cursor: cursor
    }
  }

  onResize = (e) => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  onClick = (e) => {
    var offsetX = Math.abs(this.state.pageOrigin.x - e.pageX)
    //var gridX = ((this.state.origin.x + offsetX) % this.state.stride.x) + 1
    var selectedGridX = Math.floor((this.state.origin.x + offsetX) / this.state.stride.x)

    var offsetY = Math.abs(this.state.pageOrigin.y - e.pageY)
    //var gridY = ((this.state.origin.y + offsetY) % this.state.stride.y) + 1
    var selectedGridY = Math.floor((this.state.origin.y + offsetY) / this.state.stride.y)

    this.setState({
      selectedGrid: {
        x: selectedGridX,
        y: selectedGridY
      }
    })
  }

  onDoubleClick = (e) => {
    this.onClick(e)
  }

  onMouseDown = (e) => {
    if (!this.state.move){
      this.setState({ move: true, oldMouse: { x: e.pageX, y: e.pageY } })
    }
  }

  onMouseUp = (e) => {
    if (this.state.move) {
      this.setState({ move: false })
    }
  }

  onMouseMove = (e) => {
    if (this.state.move) {
      var relative = {
        x: this.state.oldMouse.x - e.pageX,
        y: this.state.oldMouse.y - e.pageY
      }
      var oldOrigin = this.state.origin
      this.setState({
        origin: {
          x: this.state.origin.x - relative.x,
          y: this.state.origin.y - relative.y
        },
        oldMouse: {
          x: e.pageX,
          y: e.pageY
        }
      })
    }
  }

  // scrolling will change stride size (and therefore scale the grid)
  onWheel = (e) => {
    /*const ctx = this.refs.canvas.getContext('2d')
    ctx.fillStyle = '#404040'
    ctx.fillText("delta mode: " + e.deltaMode, 10, 65)
    ctx.fillText("deltaX: " + e.deltaX, 10, 80)
    ctx.fillText("deltaY: " + e.deltaY, 10, 95)
    ctx.fillText("deltaZ: " + e.deltaZ, 10, 110)*/

    this.setState({
      stride: {
        x: this.state.stride.x + (e.deltaY / 10 * -1 * this.state.rate),
        y: this.state.stride.y + (e.deltaY / 10 * -1 * this.state.rate)
      }
    })
  }

  render () {
    console.log('render');
    console.log(this.props);
    var styles = this.getStyles()

    return (
      <div
        onMouseDown={this.onMouseDown.bind(this)}
        onMouseUp={this.onMouseUp.bind(this)}
        onMouseMove={this.onMouseMove.bind(this)}
        onClick={this.onClick.bind(this)}
        onDoubleClick={this.onDoubleClick.bind(this)}
        onWheel={this.onWheel.bind(this)}

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
