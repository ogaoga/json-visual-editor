import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import './index.scss';

import { configureStore } from '@reduxjs/toolkit';
import { textareaSlice } from './features/textarea/textareaSlice';
import { dataSlice } from './features/data/dataSlice';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// ToDo: Add `redux-localstorage` to persiste the data

const rootReducer = combineReducers({
  data: dataSlice.reducer,
  textarea: textareaSlice.reducer,
});
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#myApp')
);
