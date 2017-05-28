import React, { Component, PropTypes } from 'react'

import { red500, green500 } from 'material-ui/styles/colors'

import Grid from './Grid'
import Map from './Map'

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

  render () {
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
      </div>
    )
  }
}
