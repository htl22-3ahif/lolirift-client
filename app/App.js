import React from 'react'

import GridContainer from './containers/GridContainer'
import AddPlayerContainer from './containers/AddPlayerContainer'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <GridContainer />
        <AddPlayerContainer />
      </div>
    )
  }
}
