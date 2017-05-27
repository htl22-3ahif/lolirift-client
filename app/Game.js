import React, { Component } from 'react'

import { blueGrey900, grey700 } from 'material-ui/styles/colors'
import { red500, green500 } from 'material-ui/styles/colors'

import Navigation from './components/Navigation.js'
import GridContainer from './containers/GridContainer.js'
import MapContainer from './containers/MapContainer.js'

export default class Game extends Component {
  render () {
    return (
      <div>
        <Navigation color={blueGrey900} hoverColor={grey700} />
        <GridContainer />
        <MapContainer friendlyUnitColor={red500} anyUnitColor={green500} />
      </div>
    )
  }
}
