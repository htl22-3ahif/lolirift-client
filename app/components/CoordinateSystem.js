import React, { PropTypes } from 'react'

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
      origin: { x: 0, y: 0 },
      move: false,
      oldMouse: { x: 0, y: 0 },
      stride: { x: 40, y: 40 },
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

    // code for draw tile, inserted here for testing
    {
      ctx.fillStyle = '#0080ff'

      // basically, undo the calculations made in onClick (where the selected grid
      // element is claculated)
      var offsetX = this.state.origin.x % this.state.stride.x
      var originX = Math.floor(this.state.origin.x / this.state.stride.x)
      var offsettedPageX = (this.state.selectedGrid.x - originX) * this.state.stride.x
      offsettedPageX = offsettedPageX - offsetX

      var offsetY = this.state.origin.y % this.state.stride.y
      var originY = Math.floor(this.state.origin.y / this.state.stride.y)
      var offsettedPageY = (this.state.selectedGrid.y - originY) * this.state.stride.y
      offsettedPageY = offsettedPageY - offsetY

      ctx.fillRect(offsettedPageX, offsettedPageY, this.state.stride.x, this.state.stride.y)

      ctx.fillText("tiles: " + this.state.selectedGrid.x + ", " + this.state.selectedGrid.y, 10, 95)
      ctx.fillText("offseted page: " + offsettedPageX + ", " + offsettedPageY, 10, 110)
    }

    // write some information on the screen
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
      cursor: cursor,
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

  drawTile (tileX, tileY, color = '#404040') {
    const ctx = this.refs.canvas.getContext('2d')
    ctx.fillStyle = color

    var offsetX = this.state.origin.x % this.state.stride.x
    var originX = Math.floor(this.state.origin.x / this.state.stride.x)
    var offsettedPageX = (tileX - originX) * this.state.stride.x
    offsettedPageX = this.state.width - offsettedPageX - offsetX

    var offsetY = this.state.origin.y % this.state.stride.y
    var originY = Math.floor(this.state.origin.y / this.state.stride.y)
    var offsettedPageY = (tileY - originY) * this.state.stride.y
    offsettedPageY = this.state.height - offsettedPageY - offsetY

    ctx.fillRect(offsettedPageX, offsettedPageY, this.state.stride.x, this.state.stride.y)
  }

  onClick = (e) => {
    // get the offset the grid has to the edge of the screen (relevant for pageX)
    var offsetX = this.state.origin.x % this.state.stride.x
    var offsettedPageX = e.pageX + offsetX
    // finally, calculate the selected spot on the grid
    // floor the result to get an integer
    var gridX = Math.floor(
      // take the position and divide by our stride value to get xth grid element
      // our pageX offset is negated in order to make pageX "flow" with the rate
      // of change of our origin, as further down means a decreasing value, which
      // is not the case with page values
      ((offsettedPageX) + this.state.origin.x) / this.state.stride.x
    )

    var offsetY = this.state.origin.y % this.state.stride.y
    var offsettedPageY = e.pageY + offsetY
    var gridY = Math.floor(
      ((offsettedPageY) + this.state.origin.y) / this.state.stride.y
    )

    this.drawTile(gridX, gridY, '#0080ff')

    this.setState({
      selectedGrid: {
        x: gridX,
        y: gridY
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
          x: this.state.origin.x + relative.x,
          y: this.state.origin.y + relative.y
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
    // using a logistic growth function, the rate of change will decrease the closer
    // it is to its boundaries (K = 100, y0 = 0)
    // k = 10, K = 100, y0 = 0
    /* var k = 10
    var K = 100
    var y0 = 0
    var t = (this.state.stride.x + this.state.stride.y) / 2 */
    // restricted growth function
    //var growth = K + (y0 - K) * Math.pow(Math.E, -(k / K) * t)
    // derivative of our restricted growth function
    //var derivative = k * (1 - (growth / K)) dis not work

    //logistic growth function
    //var growth = (y0 * K) / (y0 + (K - y0) * Math.pow(Math.E, -k * t))
    //derivative
    //var derivative = k * growth * (1 - (growth / K)) dis not work either

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
