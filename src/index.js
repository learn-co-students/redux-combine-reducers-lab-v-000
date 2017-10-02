import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

export const configureStore = () => {
    return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
};

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
    document.getElementById('root')
);