import React, { Component, PropTypes } from 'react'

import { Card, CardHeader, CardMedia } from 'material-ui/Card'

export default class Map extends Component {

  static propTypes = {
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        paramTypes: PropTypes.object.isRequired
      }).isRequired
    ).isRequired
  }

  getStyles () {
    return {
      position: 'absolute',
      right: 5,
      bottom: 5
    }
  }

  render () {
    var styles = this.getStyles()

    return (
      <div>
        <Card style={styles}>
          hi
        </Card>
      </div>
    )
  }
}
