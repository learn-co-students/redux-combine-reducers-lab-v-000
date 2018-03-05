import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux'
import { recommendedBooks, books } from './reducers';

// function combineReducers(reducers) {
//     return (state={}, action) => {
//         return Object.keys(reducers).reduce((nextState, key) => {
//             nextState[key] = reducers[key](state[key], action);
//             return nextState
//         }, {})
//     };
// };

const rootReducer = combineReducers({books, recommendedBooks})

export function configureStore(){
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

ReactDOM.render(
  <App store={configureStore()} />,
  document.getElementById('root')
);
