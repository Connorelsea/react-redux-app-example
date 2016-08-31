import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from "redux"
import { Provider } from "react-redux"

import { Router, Route, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import reducers from './redux/reducers';

const store = createStore(reducers)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
