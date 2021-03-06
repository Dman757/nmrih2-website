import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import Router from './router/Router'

import registerServiceWorker from './registerServiceWorker'

import './index.css'

const middleware = applyMiddleware(thunk, reduxPackMiddleware)

const store = createStore(
  rootReducer, // Combined reducers from ./reducers/index.js
//   compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  middleware
)

ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <Router routeprops={this.props} />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))
registerServiceWorker();
