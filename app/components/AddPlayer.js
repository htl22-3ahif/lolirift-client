import React from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export default class AddPlayer extends React.Component {
  static propTypes = {}

  constructor () {
    super()

    this.state = {
      open: false,
      layer: 0,
    }
  }

getPaperStyles () {
  return {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 'auto',
    height: 'auto',
    padding: '10px'
  }
}

handleOpen = () => this.setState({ open: true })
handleClose = () => this.setState({ open: false })
handleChange = (event, index, value) => this.setState({ player: name })
handleSubmit = () => {
  this.setState({ open: false })
  var p = this.props.onAddPlayer(this.state.player)
}

render () {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleClose.bind(this)}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={this.handleSubmit.bind(this)}
    />,
  ];

  const paperStyle = this.getPaperStyles()

  return (
    <div>
      <Paper
        style={paperStyle}
        onTouchTap={this.handleOpen.bind(this)}
      >
        <PersonAdd
          style={{width: 30, height: 30 }}
        />
      </Paper>

      <Dialog
        title="Add Player"
        modal={false}
        open={this.state.open}
        actions={actions}
        onRequestClose={this.handleClose.bind(this)}
        autoDetectWindowHeight={false}
        autoScrollBodyContent={false}
        contentStyle={{width: "85%", maxWidth: "85%", height: "75%", maxHeight: "75%"}}
      >
        <TextField
          hintText="Name"
          //style={{padding: '10px'}}
        />
        <TextField
          type="password"
          hintText="Password"
          //style={{padding: '10px'}}
        />
      </Dialog>
    </div>
  );
  }
}
