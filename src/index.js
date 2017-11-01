import React from 'react';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  books,
  recommendedBooks
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
