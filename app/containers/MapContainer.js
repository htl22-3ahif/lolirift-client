import { connect } from 'react-redux'
import Map from '../components/Map.js'

const mapStateToProps = (state) => {
  return {
    units: state.units,
    origin: state.origin,
    player: state.player
  }
}

const MapContainer = connect(mapStateToProps)(Map)

export default MapContainer
