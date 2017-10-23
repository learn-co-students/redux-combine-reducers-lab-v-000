import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './app';

// we wrap store in a function for testing purposes
export const configureStore = () => {
  return createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
};

let store = configureStore();

ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root')
);
