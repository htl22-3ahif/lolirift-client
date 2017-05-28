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
    ).isRequired,

    onClick: PropTypes.func
  }

  state = {
    width: window.innerHeight / (600 / 190.98609),
    height: window.innerHeight / (600 / 190.98609),
    clicked: "",
    hovered: ""
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

  getPaperStyles (id) {
    var boxShadow = '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)'
    if (this.state.hovered === id)
      boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.19), 0px 6px 10px rgba(0, 0, 0, 0.23)'

    return {
      width: this.state.width / 4 - 10,
      height: this.state.height / 4 - 10,
      margin: 5,
      padding: 0,
      float: 'left',
      borderRaidus: 5,

      boxShadow,
      transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
    }
  }

  onMouseOver = (e) => {
    if (e.target !== e.currentTarget) {
      this.setState({ hovered: e.target.id })
    }
    e.stopPropagation()
  }

  onMouseOut = (e) => {
    if (e.target.id === this.state.hovered) {
      this.setState({ hovered: "" })
    }
    e.stopPropagation()
  }

  onClick = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onClick(e.target.id)
    }
    e.stopPropagation()
  }

  onResize = (e) => {
    var size = window.innerHeight / (600 / 190.98609)
    this.setState({
      width: size,
      height: size
    })
  }

  render (e) {
    var cardStyles = this.getCardStyles()
    var cardTextStyles = this.getCardTextStyles()

    var actionButtons = []
    this.props.actions.forEach((a) => {
      var paperStyles = this.getPaperStyles(a.name)
      actionButtons.push(
        <div style={paperStyles}>
          <img id={a.name} style={{width:'100%',height:'100%'}} src={a.svg} />
        </div>
      )
    })

    return (
      <div>
        <Card
          style={cardStyles}
          onClick={this.onClick.bind(this)}
          onMouseOver={this.onMouseOver.bind(this)}
          onMouseOut={this.onMouseOut.bind(this)}
        >
          { actionButtons }
        </Card>
      </div>
    )
  }
}
