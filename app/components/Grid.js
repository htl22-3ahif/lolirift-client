import React, { Component, PropTypes } from 'react'

import UnitDisplay from './UnitDisplay.js'

import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import MinimizeIcon from 'material-ui/svg-icons/navigation/fullscreen-exit'
import MaximizeIcon from 'material-ui/svg-icons/navigation/fullscreen'
import { blueGrey900, grey700 } from 'material-ui/styles/colors'

export default class Grid extends Component {

  static propTypes = {
    player: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    units: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        texture: PropTypes.string.isRequired,
        position: PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired
        }).isRequired
      })
    ).isRequired
  }

  constructor () {
    super()
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      origin: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      move: false,
      oldMouse: { x: 0, y: 0 },
      stride: { x: 40, y: 40 },
      selectedGrid: { x: 0, y: 0 },
      selectedUnit: 0,
      lowerGridBoundary: { x: 0, y: 0 },
      upperGridBoundary: { x: 0, y: 0 }
    }

    window.addEventListener('resize', this.onResize.bind(this))
  }

  componentDidMount () {
    this.updateCanvas()

    // name, vertices, x, y, /*actions, state,*/ owner
    // id, owner, position, vertices, stats, actions, name
    this.props.onAddUnit(1, this.props.player.name, { x: 5, y: 4 }, null, { health: 100 }, null, 'yuyuko')
    console.log('dispatched unit (yuyuko)')
    this.props.onAddUnit(2, this.props.player.name, { x: 6, y: 4 }, null, { health: 100 }, null, 'youmu')
    console.log('dispatched unit (youmu)')
    this.props.onAddUnit(3, this.props.player.name, { x: 1, y: 1 }, null, { health: 100 }, null, 'yukari')
    console.log('dispatched unit (yukari)')
  }

  componentDidUpdate () {
    this.updateCanvas()
  }

  updateCanvas () {
    // https://chocchip.com.au/html-5-canvas-cheat-sheet/
    const ctx = this.refs.canvas.getContext('2d')
    ctx.fillStyle = '#eceff1'
    ctx.fillRect(0, 0, this.state.width, this.state.height)

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

    // check all units that are inside the current boundaries and draw them
    {
      this.props.units.forEach((unit) => {
        if (unit.position.x >= this.state.lowerGridBoundary.x
          && unit.position.x <= this.state.upperGridBoundary.x
          && unit.position.y >= this.state.lowerGridBoundary.y
          && unit.position.y <= this.state.upperGridBoundary.y) {
          if (unit.texture) {
            this.drawImg(unit.position.x, unit.position.y, unit.texture)
          }
          /* else {
            this.drawVertices(...args)
          }
          */
        }
      })
    }

    /*
    this.drawTile(this.state.selectedGrid.x, this.state.selectedGrid.y, '#0080ff')
    this.drawImg(this.state.selectedGrid.x + 2, this.state.selectedGrid.y, 'resources/yuyuko.png')
    this.drawImg(this.state.selectedGrid.x + 3, this.state.selectedGrid.y, 'resources/youmu.png')
    this.drawImg(this.state.selectedGrid.x - 3, this.state.selectedGrid.y + 1, 'resources/yukari.png')
    this.drawImg(this.state.selectedGrid.x - 4, this.state.selectedGrid.y, 'resources/ran.png')
    this.drawImg(this.state.selectedGrid.x - 5, this.state.selectedGrid.y - 1, 'resources/chen.png')
    this.drawImg(this.state.selectedGrid.x + 5, this.state.selectedGrid.y + 5, 'resources/patchouli.png')
    */

    // make a cool circle
    {
      ctx.beginPath()
      ctx.arc(this.state.origin.x, this.state.origin.y, 3, 0, 2 * Math.PI, false)
      ctx.stroke()
    }

    // write some information on the screen
    {
      ctx.fillStyle = '#404040'
      ctx.fillText("mouse pos: " + this.state.oldMouse.x + ", " + this.state.oldMouse.y, 10, 10)
      ctx.fillText("origin: " + this.state.origin.x + ", " + this.state.origin.y, 10, 25)
      ctx.fillText("selected grid element: " + this.state.selectedGrid.x + ", " + this.state.selectedGrid.y, 10, 40)
      ctx.fillText("lower grid boundary: " + this.state.lowerGridBoundary.x + ", " + this.state.lowerGridBoundary.y, 10, 55)
      ctx.fillText("upper grid boundary: " + this.state.upperGridBoundary.x + ", " + this.state.upperGridBoundary.y, 10, 70)
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

    var x = tileX * this.state.stride.x + this.state.origin.x
    var y = tileY * this.state.stride.y + this.state.origin.y

    ctx.fillRect(x, y, this.state.stride.x, this.state.stride.y)
  }

  drawImg (tileX, tileY, src) {
    const ctx = this.refs.canvas.getContext('2d')

    var x = tileX * this.state.stride.x + this.state.origin.x
    var y = tileY * this.state.stride.y + this.state.origin.y

    var drawing = new Image()
    drawing.src = src

    var width = drawing.width
    var height = drawing.height

    var factor = (width > height) ? this.state.stride.x / width : this.state.stride.y / height
    var xoffset = (height > width) ? ((height - width) / 2) * factor : 0
    var yoffset = (width > height) ? ((width - height) / 2) * factor : 0

    ctx.drawImage(drawing, x + xoffset, y + yoffset, width * factor, height * factor)
  }

  onClick = (e) => {
    var mousePosRelativeToOriginX = e.pageX - this.state.origin.x
    var gridX = Math.floor(mousePosRelativeToOriginX / this.state.stride.x)

    var mousePosRelativeToOriginY = e.pageY - this.state.origin.y
    var gridY = Math.floor(mousePosRelativeToOriginY / this.state.stride.y)

    this.setState({
      selectedGrid: {
        x: gridX,
        y: gridY
      }
    })

    this.props.units.forEach((unit) => {
      if (unit.position.x == this.state.selectedGrid.x
        && unit.position.y == this.state.selectedGrid.y) {
        this.setState({
          selectedUnit: unit.id
        })
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
        x: e.pageX - this.state.oldMouse.x,
        y: e.pageY - this.state.oldMouse.y
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

    var lowerBoundaryX = Math.floor((this.state.origin.x * -1) / this.state.stride.x)
    var lowerBoundaryY = Math.floor((this.state.origin.y * -1) / this.state.stride.y)

    var upperBoundaryX = Math.floor(((this.state.origin.x * -1) + this.state.width) / this.state.stride.x)
    var upperBoundaryY = Math.floor(((this.state.origin.y * -1) + this.state.height) / this.state.stride.y)

    this.setState({
      lowerGridBoundary: {
        x: lowerBoundaryX,
        y: lowerBoundaryY
      },
      upperGridBoundary: {
        x: upperBoundaryX,
        y: upperBoundaryY
      }
    })
  }

  // scrolling will change stride size (and therefore scale the grid)
  onWheel = (e) => {
    // graph height, shift, tightness
    var h = 1000
    var s = 250
    var t = 80

    // continuous log-sigmoid function
    var x = this.state.stride.x
    var y = this.state.stride.y

    // sigmoid function
    //var sigmoidX = h / (1 + Math.pow(Math.E, -(1 / 20) * (x - s)))
    //var sigmoidY = h / (1 + Math.pow(Math.E, -(1 / 20) * (y - s)))

    // derivative of sigmoid function

    // recurring euler values for derivative
    var ex = Math.pow(Math.E, -(1 / t) * (x - s))
    var ey = Math.pow(Math.E, -(1 / t) * (y - s))

    // derivative
    var dSigmoidX = ex / (Math.pow(ex, 2) + (2 * ex) + 1)
    var dSigmoidY = ey / (Math.pow(ey, 2) + (2 * ey) + 1)

    // increase

    var ix = (dSigmoidX * e.deltaY / 10)
    var iy = (dSigmoidY * e.deltaY / 10)

    // result
    var newStrideX = ((this.state.stride.x + ix) > 10) ? this.state.stride.x + ix : 10
    newStrideX = ((newStrideX) < 190) ? newStrideX : 190
    var newStrideY = ((this.state.stride.y + iy) > 10) ? this.state.stride.y + iy : 10
    newStrideY = ((newStrideY) < 190) ? newStrideY : 190

    this.setState({
      stride: {
        x: newStrideX,
        y: newStrideY
      }
    })
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
    console.log('render');
    console.log(this.props);
    var styles = this.getStyles()

    let display
    if (this.state.selectedUnit != 0) {
      let unit = this.props.units.find((obj) => { return obj.id == this.state.selectedUnit })
      display = <UnitDisplay unit={unit} position={{ x: this.state.oldMouse.x, y: this.state.oldMouse.y }} />
    }
    console.log(display)

    return (
      <div id='grid-container'>
        <div id='control-buttons-container' style={{ position: 'absolute', top: '5px', right: '5px' }}>
          <IconButton
          onTouchTap={this.handleMinimize.bind(this)}
          >
            <MinimizeIcon color={blueGrey900} hoverColor={grey700} />
          </IconButton>
          <IconButton
            onTouchTap={this.handleMaximize.bind(this)}
          >
            <MaximizeIcon color={blueGrey900} hoverColor={grey700} />
          </IconButton>
          <IconButton
            onTouchTap={this.handleClose.bind(this)}
          >
            <CloseIcon color={blueGrey900} hoverColor={grey700} />
          </IconButton>
        </div>
        <div id='display-container'>
          {display}
        </div>
        <div id='canvas-container'
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
      </div>
    )
  }
}
