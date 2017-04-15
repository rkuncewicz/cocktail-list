import React from 'react';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './app.css';
import CocktailApp from '../features/cocktail-app';
import NoMatch from '../components/no-match';
import reducers from './reducers';

import mockStore from './mock-store.json';

const store = createStore(reducers, mockStore, composeWithDevTools());
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={CocktailApp}>
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));
