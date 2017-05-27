import React, { Component, PropTypes } from 'react'

import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import MinimizeIcon from 'material-ui/svg-icons/navigation/fullscreen-exit'
import MaximizeIcon from 'material-ui/svg-icons/navigation/fullscreen'

export default class Navigation extends Component {

  static propTypes = {
    color: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired
  }

  constructor () {
    super()
  }

  componentDidMount () {}

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
    return (
      <div id='control-buttons-container' style={{ position: 'absolute', top: '5px', right: '5px' }}>
        <IconButton onTouchTap={this.handleMinimize.bind(this)}>
          <MinimizeIcon
            color={this.props.color}
            hoverColor={this.props.hoverColor}
          />
        </IconButton>

        <IconButton onTouchTap={this.handleMaximize.bind(this)}>
          <MaximizeIcon
            color={this.props.color}
            hoverColor={this.props.hoverColor}
          />
        </IconButton>

        <IconButton onTouchTap={this.handleClose.bind(this)}>
          <CloseIcon
            color={this.props.color}
            hoverColor={this.props.hoverColor}
          />
        </IconButton>
      </div>
    )
  }
}
