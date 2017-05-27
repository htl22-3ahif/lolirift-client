import React, { Component, PropTypes } from 'react'

import Grid from './Grid'

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

  render () {
    return (
      <div>
        <Grid units={this.props.units} />
      </div>
    )
  }
}
