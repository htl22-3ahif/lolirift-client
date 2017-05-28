import React, { Component, PropTypes } from 'react'

import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

export default class Map extends Component {

  static propTypes = {
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        paramTypes: PropTypes.object.isRequired,
        svg: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }

  state = {
    width: window.innerHeight / (600 / 190.98609),
    height: window.innerHeight / (600 / 190.98609)
  }

  constructor () {
    super()
    window.addEventListener('resize', this.onResize.bind(this))
  }

  getCardStyles () {
    return {
      width: this.state.width,
      height: this.state.height,
      position: 'absolute',
      bottom: '25px',
      right: '25px'
    }
  }

  getCardTextStyles () {
    return {
      width: this.state.width,
      height: this.state.height
    }
  }

  getPaperStyles () {
    return {
      width: this.state.width / 4 - 10,
      height: this.state.height / 4 - 10,
      margin: 5,
      float: 'left'
    }
  }

  onResize = (e) => {
    var size = window.innerHeight / (600 / 190.98609)
    this.setState({
      width: size,
      height: size
    })
  }

  render () {
    var cardStyles = this.getCardStyles()
    var cardTextStyles = this.getCardTextStyles()
    var paperStyles = this.getPaperStyles()

    var actionButtons = []
    console.log('actions length: ' + this.props.actions.length)
    this.props.actions.forEach((a) => {
      console.log('hai')
      actionButtons.push(
        <Paper style={paperStyles} zDepth={1}>
          <img style={{width:'100%',height:'100%'}} src={a.svg} />
        </Paper>
      )
    })

    return (
      <div>
        <Card style={cardStyles}>
          { actionButtons }
        </Card>
      </div>
    )
  }
}
