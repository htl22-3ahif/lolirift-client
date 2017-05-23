import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from "redux"
import world from './reducers'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { grey700, blueGrey700, blueGrey800, blueGrey900, blue50, blue100, blue200 } from 'material-ui/styles/colors'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import App from './App.js'
import Login from './Login.js'

const store = createStore(world)

console.log('store created')
console.log(store.getState())

const muiTheme = getMuiTheme({
  baseTheme: darkBaseTheme,
  palette: {
    textColor: blueGrey800,
    primary1Color: blueGrey900,
    primary2Color: blueGrey700,
    primary3Color: grey700,
    accent1Color: blue50,
    accent2Color: blue100,
    accent3Color: blue200
  }
})

// <Login />
// <App />

ReactDOM.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Login />
    </Provider>
  </MuiThemeProvider>
  ), document.getElementById('root')
)
