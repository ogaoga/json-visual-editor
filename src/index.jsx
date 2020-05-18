import React           from 'react';
import ReactDOM        from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider }    from 'react-redux'
import persistState    from 'redux-localstorage'

import App     from './App'
import reducer from './reducers'
import './index.scss';

// For local storage cache
const enhancer = compose(
  persistState()
)

const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#myApp')
)
