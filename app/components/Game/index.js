import React, { Component, PropTypes } from 'react'

import { red500, green500 } from 'material-ui/styles/colors'

import Grid from './Grid'
import Map from './Map'
import Actions from './Actions'

export default class Game extends Component {

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
    ).isRequired,

    actions: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        paramTypes: PropTypes.object.isRequired,
        svg: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }

  state = {
    origin: {
      x: 0,
      y: 0,
      boundaries: {
        lower: {
          x: 0,
          y: 0,
        },
        upper: {
          x: 0,
          y: 0,
        }
      }
    }
  }

  onSetOrigin = (origin) => {
    this.setState({
      origin
    })
  }

  onActionClick = (action) => {
    var json = { unit: 0, action }
    this.props.ws.send(JSON.stringify(json))
  }

  render () {
    console.log(this.props.ws)
    return (
      <div>
        <Grid
          units={this.props.units}
          onSetOrigin={this.onSetOrigin.bind(this)}
        />
        <Map
          units={this.props.units}
          player={this.props.player}
          origin={this.state.origin}
          friendlyUnitColor={red500}
          anyUnitColor={green500}
        />
        <Actions
          actions={this.props.actions}
          onClick={this.onActionClick.bind(this)}
        />
      </div>
    )
  }
}
