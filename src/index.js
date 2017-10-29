import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux'
import { books } from './reducers'
import { recommendedBooks } from './reducers'

const rootReducer = combineReducers({books, recommendedBooks})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // <Provider store={store}>
  //   <App store={store}/>
  // </Provider>,
  document.getElementById('root')
);
