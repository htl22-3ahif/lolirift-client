import React, { Component, PropTypes } from 'react'

import { Card, CardHeader, CardMedia } from 'material-ui/Card'

export default class Map extends Component {

  static propTypes = {
    friendlyUnitColor: PropTypes.string.isRequired,
    anyUnitColor: PropTypes.string.isRequired
  }

  constructor () {
    super()
    // height divided by a random pi approximation I found while measuring pixels in my concept
    // could also do height / Math.Pi
    // ¯\_(ツ)_/¯
    var size = window.innerHeight / (600 / 190.98609)
    this.state = {
      width: size,
      height: size,
      canvas: { width: size, height: size * 0.7 },
      move: false
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
    // https://chocchip.com.au/html-5-canvas-cheat-sheet/
    const ctx = this.refs.canvas.getContext('2d')
    ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height)
    ctx.fillStyle = '#eceff1'
    ctx.fillRect(0, 0, this.state.canvas.width, this.state.canvas.height)

    var horizontalRange = this.props.origin.boundaries.upper.x - this.props.origin.boundaries.lower.x
    var verticalRange = this.props.origin.boundaries.upper.y - this.props.origin.boundaries.lower.y

    var pixelX = Math.floor(this.state.canvas.width / horizontalRange)
    var pixelY = Math.floor(this.state.canvas.height / verticalRange)

    /* abandoned
    // draw rectangle to display visible range
    {
      ctx.strokeStyle='#263238'

      var x = (horizontalRange - horizontalOriginRange) / 2
      var y = (verticalRange - verticalOriginRange) / 2

      ctx.rect(x * pixelX, y * pixelY, horizontalOriginRange * pixelX, verticalOriginRange * pixelY)
      ctx.stroke()
    }*/

    // draw units as "pixels"
    {
      this.props.units.forEach((unit) => {
        if (unit.position.x >= this.props.origin.boundaries.lower.x
          && unit.position.x <= this.props.origin.boundaries.upper.x
          && unit.position.y >= this.props.origin.boundaries.lower.y
          && unit.position.y <= this.props.origin.boundaries.upper.y) {
          if (unit.owner === this.props.player.name) {
            var color = this.props.friendlyUnitColor
          } else {
            var color = this.props.anyUnitColor
          }

          var scaleX = (this.state.canvas.width / window.innerWidth)
          var scaleY = (this.state.canvas.height / window.innerHeight)

          var unitX = (unit.position.x * pixelX + this.props.origin.x) * scaleX
          var unitY = (unit.position.y * pixelY + this.props.origin.y) * scaleY

          /* abandoned
          TODO: implement an extended view range on map (bigger than ingame view)
          NOTE: don't fail like below
          var scaleOriginRangeX = horizontalOriginRange / this.state.canvas.width
          var scaleOriginRangeY = verticalOriginRange / this.state.canvas.height

          unitX *= scaleOriginRangeX
          unitY *= scaleOriginRangeY
          *
          var scaleRangeX = horizontalRange / this.state.canvas.width
          var scaleRangeY = verticalRange / this.state.canvas.height

          unitX += (((horizontalRange - horizontalOriginRange) / 2) * scaleRangeX)
          unitY += (((verticalRange - verticalOriginRange) / 2) * scaleRangeY)
          */

          console.log(unit.type, unit.position.x, unit.position.y, pixelX, pixelY)
          this.drawVertices(unit, pixelX, pixelY, scaleX, scaleY, color)
        }
      })
    }

    // write some information on the screen
    {
      ctx.fillStyle = '#263238'
      ctx.font="9px Arial";
      ctx.fillText('range: ' + horizontalRange + ', ' + verticalRange, 10, 10)
      ctx.fillText('pixel: ' + pixelX + ', ' + pixelY, 10, 30)
      ctx.fillText('canvas: ' + this.state.canvas.width + ', ' + this.state.canvas.height, 10, 40)
      ctx.fillText('origin: ' + this.props.origin.x + ', ' + this.props.origin.y, 10, 50)
      ctx.fillText('boundaries: lower: ' + this.props.origin.boundaries.lower.x + ', ' + this.props.origin.boundaries.lower.y, 10, 60)
      ctx.fillText('boundaries: upper: ' + this.props.origin.boundaries.upper.x + ', ' + this.props.origin.boundaries.upper.y, 10, 70)
    }
  }

  drawTile (tileX, tileY, strideX, strideY, scaleX, scaleY, color = '#404040') {
    const ctx = this.refs.canvas.getContext('2d')
    ctx.fillStyle = color

    var x = (tileX * strideX) + (this.props.origin.x * scaleX)
    var y = (tileY * strideY) + (this.props.origin.y * scaleY)

    ctx.fillRect(x, y, strideX, strideY)
  }

  drawVertices (unit, pixelX, pixelY, scaleX, scaleY, color = '#404040') {
    this.drawTile(unit.position.x, unit.position.y, pixelX, pixelY, scaleX, scaleY, color)
    unit.vertices.forEach((position) => {
      this.drawTile(unit.position.x + position.x, unit.position.y + position.y, pixelX, pixelY, scaleX, scaleY, color)
    })
  }

  getCardStyles () {
    return {
      width: this.state.width,
      height: this.state.height,
      position: 'absolute',
      bottom: '25px',
      left: '25px'
    }
  }

  getCardHeaderStyles () {
    return {
      width: this.state.width,
      height: this.state.height * 0.3,
    }
  }

  getCanvasStyles () {
    var cursor = !this.state.move ? 'auto' : 'move'

    return {
      cursor: cursor,
      width: this.state.canvas.width,
      height: this.state.canvas.height
    }
  }

  onResize = (e) => {
    var size = window.innerHeight / (600 / 190.98609)
    this.setState({
      width: size,
      height: size
    })
    this.setState({
      canvas: {
        width: this.state.width,
        height: this.state.height * 0.7
      }
    })
  }

  onMouseDown = (e) => {
    if (!this.state.move){
      this.setState({ move: true })
    }
  }

  onMouseUp = (e) => {
    if (this.state.move) {
      this.setState({ move: false })
    }
  }

  render () {
    console.log('rendering map')
    console.log(this.props)
    var cardStyles = this.getCardStyles()
    var cardHeaderStyles = this.getCardHeaderStyles()
    var canvasStyles = this.getCanvasStyles()

    return (
      <div id='map-container'>
        <div id='card-container'>
          <Card style={cardStyles}>
            <CardHeader
              title={this.props.player.name}
              subtitle='novice lolirifter'
              avatar="resources/yuyuko.png"
              style={cardHeaderStyles}
            />
            <CardMedia>
              <div id='canvas-container'
                onMouseDown={this.onMouseDown.bind(this)}
                onMouseUp={this.onMouseUp.bind(this)}

              >
                <canvas
                  ref='canvas'
                  width={this.state.canvas.width}
                  height={this.state.canvas.height}
                >
                  Canvas is not supported
                </canvas>
              </div>
            </CardMedia>
          </Card>
        </div>
      </div>
    )
  }
}
