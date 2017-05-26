import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

export default class UnitDisplay extends Component {
  constructor () {
    super()
  }

  render () {
    var items = []
    console.log(this.props.unit)
    //items.push({ primaryText: 'Name: ', secondaryText: this.props.unit.name }(MenuItem))
    items.push(<MenuItem primaryText='Name: ' secondaryText={this.props.unit.name} />)
    //items.push({ primaryText: 'Owner: ', secondaryText: this.props.unit.owner }(MenuItem))
    items.push(<MenuItem primaryText='Owner: ' secondaryText={this.props.unit.owner} />)
    Object.keys(this.props.unit.stats).forEach((stat) => {
      //items.push({ primaryText: stat, secondaryText: this.props.unit.stats[stat] }(MenuItem))
      items.push(<MenuItem primaryText={stat} secondaryText={this.props.unit.stats[stat].toString()} />)
    })

    return (
      <div>
        <Popover style={{ position: 'absolute', top: this.props.position.x, left: this.props.position.y }}>
          <Menu>
            {items}
          </Menu>
        </Popover>
      </div>
    )
  }
}
