import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import world from './reducers'
import App from './App.js'
import Login from './Login.js'

let store = createStore(world)

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/game" component={Login} />
          <Route path="/" component={App} />
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>
  ), document.getElementById('root')
)
