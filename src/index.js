import React from 'react';
import ReactDOM from 'react';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import { rootReducer } from './reducers';



const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider> ,
  document.getElementById('root')
);
